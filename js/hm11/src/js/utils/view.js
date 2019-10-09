  import notesTemplate from '../../tamplate/noteTemplate.hbs';
  
  export const renderNoteList = (listRef, notes) => {
    const listItems = notes.map(item => notesTemplate(item)).join('');
    listRef.insertAdjacentHTML('beforeend', listItems);
   };

   export const getRefs = () => ({
    noteList: document.querySelector('.note-list'),
    noteEditor: document.querySelector('.note-editor'),
    searchForm: document.querySelector('.search-form'),
    button: document.querySelector('button[data-action="open-editor"]'),
   });

   

   