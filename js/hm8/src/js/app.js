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
const pageHeader = document.createElement('header');
pageHeader.classList.add ('page-header');

const logo = document.createElement('h1');
logo.classList.add('.logo');
pageHeader.append(logo);

const logoLink = document.createElement('a');
logoLink.classList.add('logo__link');
logoLink.textContent = 'Notepad';
logo.append(logoLink);

const logoImg = document.createElement('img');
logoImg.classList.add('logo__image');
logoLink.prepend(logoImg);

const searchForm = document.createElement('form');
searchForm.classList.add('.searchForm');
pageHeader.append(searchForm);

const searchFormInput = document.createElement('input');
searchFormInput.classList.add('.search-form__input');
searchForm.append(searchFormInput);

const searchFormIcon = document.createElement('i');
searchFormIcon.classList.add('.material-icons,.search-form__icon');
searchFormIcon.textContent = 'search';
searchForm.append(searchFormIcon);

console.log(pageHeader);

const container = document.createElement('main');
container.classList.add('.container');

const noteEditor = document.createElement('form');
noteEditor.classList.add('.note-editor');
container.append(noteEditor);

const noteEditorLabel = document.createElement('label');
noteEditorLabel.classList.add('.note-editor__label');
noteEditor.append(noteEditorLabel);

const noteEditorFieldName = document.createElement('span');
noteEditorFieldName.classList.add('.note-editor__field-nam');
noteEditorLabel.append(noteEditorFieldName);

const noteEditorLabelInput = document.createElement('input');
   noteEditorLabelInput.classList.add('.note-editor__input');
noteEditorLabel.append(noteEditorLabelInput);
console.log(container);

const noteEditorInput= document.createElement('textarea');
noteEditorInput.classList.add('.note-editor__input');
.append()

const btn= document.createElement('button');
button.classList.add('.btn');
.append()

const  noteList = document.createElement('ul');
noteList.classList.add('.note-list');
.append()




