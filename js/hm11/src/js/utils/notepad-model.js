export default class Notepad {
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