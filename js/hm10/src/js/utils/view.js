  import {ICON_TYPES, NOTE_ACTIONS } from './constants';

  export const createElement = (tag, className) => {
    const createElement = document.createElement(tag);
    createElement.classList.add(className);
    return createElement;
  };
  export const createNoteContent = (title,body) => {
    const noteContent = createElement('div','note__content');
    
    const noteTitle = createElement('h2','note__title'); 
    noteTitle.textContent = title; 
  
    const noteBody = createElement('p','note__body'); 
    noteBody.textContent = body;
  
    noteContent.append(noteTitle, noteBody)
    
    return noteContent;
  };
  
  export const createBtn = (dataAction, iconType) => {
    const btn = createElement('button','action');
    btn.dataset.action = dataAction;
  
    const btnIcon = createElement('i','material-icons');
    btnIcon.classList.add('action__icon');
    btnIcon.textContent = iconType;
  
    btn.append(btnIcon);
    
    return btn;
  }
  
  export const createNoteFooter = priority => {
  
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
  
  export const createListItem = ({ id, title, body, priority }) => {
      const noteListItem = createElement('li','note-list__item');
      noteListItem.dataset.id = id;
    
      const note = document.createElement('div','note');
    
      note.append(createNoteContent(title, body),createNoteFooter(priority));
      noteListItem.append(note);
    
      return noteListItem;
    };
  
  export const renderNoteList = (listRef, notes) => {
    const noteList = notes.map(note => createListItem(note))
    listRef.append(...noteList);
    return listRef;
   };

   export const getRefs = () => ({
    noteList: document.querySelector('.note-list'),
    noteEditor: document.querySelector('.note-editor'),
    searchForm: document.querySelector('.search-form'),
   });

   

   