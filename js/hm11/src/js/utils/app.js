import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';
import 'micromodal/dist/micromodal.css'
import shortId from 'shortid'


import notesTemplate from '../../tamplate/noteTemplate.hbs'
import initialNotes from '../../assets/notes.json';
import { PRIORITY_TYPES,NOTE_ACTIONS,NOTIFICATION_MESSAGES } from './constants';
import Notepad from './notepad-model';
import {createListItem,renderNoteList,getRefs} from './view';




const refs = getRefs();
const notyf = new Notyf();

const notepad = new Notepad(initialNotes);

 const addListItem = (listRef,note) => {
  listRef.insertAdjacentHTML('beforeend', notesTemplate(note));
}

//HANDLERS
 const handleNoteEditor = () => {
   event.preventDefault();
   const [title,body] = event.currentTarget.elements;
   const titleValue = title.value;
   const bodyValue = body.value;
   const note = {};

   if(!titleValue.trim() || !bodyValue.trim()){
    return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }
  note.id = shortId.generate();
  note.title = titleValue;
  note.body = bodyValue;
  note.priority = PRIORITY_TYPES.LOW;

  notepad.saveNote(note);
  addListItem(refs.noteList,(note));
  notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
  MicroModal.close('note-editor-modal');
  event.currentTarget.reset();
 };

 const handleSearchForm = event => {
  refs.noteList.innerHTML = '';
  renderNoteList(refs.noteList, notepad.filterNotesByQuery(event.target.value));
};

const removeNoteItem = target =>{
  const parentNoteItem = target.closest('.note-list__item');
  const id = parentNoteItem.dataset.id;
  
  notepad.deleteNote(id)
  parentNoteItem.remove()
  notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS)
}   

const handleListClick  = ({target}) => {
  if (target.parentNode.dataset.action === NOTE_ACTIONS.DELETE) {
    removeNoteItem(target);
  }
};

const openMicroModal = () => {
  MicroModal.show('note-editor-modal');
};
 
 renderNoteList(refs.noteList,initialNotes);
//LISTENERS
 refs.button.addEventListener('click', openMicroModal);
 refs.noteEditor.addEventListener('submit', handleNoteEditor);
 refs.searchForm.addEventListener('input',handleSearchForm);
 refs.noteList.addEventListener('click',handleListClick);
