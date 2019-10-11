import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';
import shortId from 'shortid';

import notesTemplate from '../../template/notesList.hbs';
import initialNotes from '../../assets/notes.json';
import { PRIORITY_TYPES,NOTE_ACTIONS,NOTIFICATION_MESSAGES} from './constants';
import Notepad from './notepad-model';
import {refs, renderNoteList} from './view';

const initNotes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : initialNotes;

const notyf = new Notyf();
const notepad = new Notepad(initNotes);



const addListItem = (listRef, note) => {
    listRef.insertAdjacentHTML('beforeend', notesTemplate(note));
};

//HANDLERS
const handleNoteEditor = event => {
    event.preventDefault();

    const [title,body] = event.currentTarget.elements;
    const titleValue = title.value;
    const bodyValue = body.value;
    const note = {};

    
    if (!titleValue.trim() || !bodyValue.trim()) {
        return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    }  
    note.id = shortId.generate();
    note.title = titleValue;
    note.body = bodyValue;
    note.priority = PRIORITY_TYPES.LOW;
        
    notepad.saveNote(note).then(savedNote => {
        addListItem(refs.notesList, savedNote);
    });        
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS)
    MicroModal.close('note-editor-modal');
    event.target.reset();    
};
const handleSearchForm = event => {
    refs.notesList.innerHTML = '';
    notepad
        .filterNotesByQuery(event.target.value)
        .then(newArr => {
            renderNoteList(refs.notesList, newArr);
        });
};

const removeNoteItem = target => {
    const parentNoteItem = target.closest('.note-list__item');
    const id = parentNoteItem.dataset.id;
    
    notepad.deleteNote(id)
    parentNoteItem.remove()
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS)
};

const handleListClick  = ({target}) => {
    if (event.target.parentNode.dataset.action === NOTE_ACTIONS.DELETE) {
      removeNoteItem(target);
    }
  };

const openMicroModal = () => {
    MicroModal.show('note-editor-modal');
};

renderNoteList(refs.notesList, notepad.notes);
//LISTENERS
refs.button.addEventListener('click', openMicroModal);
refs.noteEditor.addEventListener('submit', handleNoteEditor);
refs.notesList.addEventListener('click', handleListClick);
refs.searchForm.addEventListener('input', handleSearchForm);
