import notesTemplate from '../../templates/notesList.hbs';

export const renderNoteList = (listRef, notes) => {
    const listItems = notes.map(item => notesTemplate(item)).join('');

    listRef.insertAdjacentHTML('beforeend', listItems);
};

export const refs = {
    notesList: document.querySelector('.note-list'),
    noteEditor: document.querySelector('.note-editor'),
    searchForm: document.querySelector('.search-form'),
    button: document.querySelector('button[data-action="open-editor"]'),
}

