'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

class Notepad {
  constructor(notes = [{id, title, body, priority}]) {
    this._notes = notes;
  }

  static generateUniqueId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    return this.notes[this.notes.findIndex(note => note.id === id)];
  }

  deleteNote(id){
    if(this.findNoteById(id))
    this._notes = this._notes.filter(note => note.id !== id);
  }

  saveNote(note) {
    this.notes.push(note);
    return note;
  }

  updateNoteContent(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    return (this.findNoteById(id).priority = priority);
  }

  filterNotesByQuery(query) {
    return this.notes.filter(
      note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterNotesByPriority(priority) {
    return this.notes.filter(note => note.priority === priority);
  }

  static get Priority() {
    return {LOW: 0, NORMAL: 1, HIGH: 2};
  }
};
const createElement = (tag, className) => {
  const createElement = document.createElement(tag);
  createElement.classList.add(className);
  return createElement;
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },  
];

//REFS
const refs = {
  noteList: document.querySelector('.note-list'),
  noteEditor: document.querySelector('.note-editor'),
  searchForm: document.querySelector('.search-form'),
}

const notepad = new Notepad(initialNotes);

//UI
const createNoteContent = (title,body) => {
  const noteContent = createElement('div','note__content');
  
  const noteTitle = createElement('h2','note__title'); 
  noteTitle.textContent = title; 

  const noteBody = createElement('p','note__body'); 
  noteBody.textContent = body;

  noteContent.append(noteTitle, noteBody)
  
  return noteContent;
};

const createBtn = (dataAction, iconType) => {
  const btn = createElement('button','action');
  btn.dataset.action = dataAction;

  const btnIcon = createElement('i','material-icons');
  btnIcon.classList.add('action__icon');
  btnIcon.textContent = iconType;

  btn.append(btnIcon);
  
  return btn;
}

const createNoteFooter = priority => {

  const noteFooter = createElement('footer','note__footer');

  const prioritySection = createElement('section','note__section');

  const incPriorityBtn = createBtn(NOTE_ACTIONS.INCREASE_PRIORITY,ICON_TYPES.ARROW_UP);

  const decrPriorityBtn = createBtn(NOTE_ACTIONS.DECREASE_PRIORITY,ICON_TYPES.ARROW_DOWN);

  const notePriority = createElement('span','note__priority');
  notePriority.textContent = priority;

  prioritySection.append(incPriorityBtn,decrPriorityBtn,notePriority);

  const editSection = createElement('section','note__section');
  const editBtn = createBtn(NOTE_ACTIONS.EDIT,ICON_TYPES.EDIT);
  const deleteBtn = createBtn(NOTE_ACTIONS.DELETE,ICON_TYPES.DELETE);

  editSection.append(editBtn,deleteBtn)
  
  noteFooter.append(prioritySection,  editSection);
  
  return noteFooter;
  };

  const createListItem = ({ id, title, body, priority }) => {
    const noteListItem = createElement('li','note-list__item');
    noteListItem.dataset.id = id;
  
    const note = document.createElement('div','note');
  
    note.append(createNoteContent(title, body),createNoteFooter(priority));
    noteListItem.append(note);
  
    return noteListItem;
  };

 const renderNoteList = (listRef, notes) => {
  const noteList = notes.map(note => createListItem(note))
  listRef.append(...noteList);
  return listRef;
 };


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

   note.id = Notepad.generateUniqueId();
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


 