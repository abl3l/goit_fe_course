'use strict';
import initialNotes from '../../assets/notes.json';
import { PRIORITY_TYPES,NOTE_ACTIONS } from './constants';
import Notepad from './notepad-model';
import {createListItem,renderNoteList,getRefs} from './view';



//REFS
const refs = getRefs();

const shortId = require('shortid');

const notepad = new Notepad(initialNotes);

 const addListItem = (listRef,note) => {
   listRef.append(note);
 }

//HANDLERS
 const handleNoteEditor = () => {
   event.preventDefault();
   const [title,body] = event.currentTarget.elements;
   const titleValue = title.value;
   const bodyValue = body.value;
   const note = {};

   if(!titleValue.trim() || !bodyValue.trim()){
     return alert('Необходимо заполнить все поля!');
   }

   note.id = shortId.generate();
   note.title = titleValue;
   note.body = bodyValue;
   note.priority = PRIORITY_TYPES.LOW;

   notepad.saveNote(note);
    addListItem(refs.noteList,createListItem(note));
    event.currentTarget.reset();
 }

 const handleSearchForm = event => {
  refs.noteList.innerHTML = '';
  renderNoteList(refs.noteList, notepad.filterNotesByQuery(event.target.value));
};

const removeNoteItem = target =>{
  const parentNoteItem = target.closest('.note-list__item');
  const id = parentNoteItem.dataset.id;

  notepad.deleteNote(id)
  parentNoteItem.remove()

}   

const handleListClick  = ({target}) => {
  if (target.parentNode.dataset.action === NOTE_ACTIONS.DELETE) {
    removeNoteItem(target);
  }
};
 
 renderNoteList(refs.noteList,initialNotes);
//LISTENERS
 refs.noteEditor.addEventListener('submit', handleNoteEditor);
 refs.searchForm.addEventListener('input',handleSearchForm);
 refs.noteList.addEventListener('click',handleListClick);


 