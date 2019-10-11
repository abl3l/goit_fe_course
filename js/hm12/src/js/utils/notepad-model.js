export default class Notepad {
    constructor(notes = [{id, title, body, priority}]) {
      this._notes = notes;
    }
  
    get notes() {
      return this._notes;
    }
  
    findNoteById(id) {
      return this.notes[this.notes.findIndex(note => note.id === id)];
    }

    deleteNote(id) {
      return new Promise(resolve => {
          setTimeout(() => {
              if (this.findNoteById(id)) {
                  resolve(this._notes = this._notes.filter(note => note.id !== id));
                  localStorage.setItem('notes', JSON.stringify(this._notes));
              }
          }, 500);
      });
  }  
     
    saveNote(note) {
      return new Promise(resolve => {
          setTimeout(() => {
              this._notes.push(note);
              localStorage.setItem('notes', JSON.stringify(this._notes))
              resolve(note);
          }, 500)
      })
  }
  
  updateNoteContent(id, updatedContent) {
    return new Promise(resolve => {
        setTimeout(() => { 
                resolve(Object.assign(this.findNoteById(id), updatedContent));            
        }, 100);
    });
}
  
    updateNotePriority(id, priority) {
      return new Promise((resolve,) => {
        setTimeout(() => {
          (this.findNoteById(id).priority = priority);
          resolve(updatedNote);
        }, 100)
      })
    }


    filterNotesByQuery(query) {
      return new Promise((resolve,) => {
        setTimeout(() => {
          resolve(this.notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())))
        }, 100)
      })
    }  
  
    filterNotesByPriority(priority) {
      return new Promise((resolve,) => {
        setTimeout(() => {
          resolve(this.notes.filter(note => note.priority === priority));
        }, 100);
      })
    }
  

    
    static get Priority() {
      return {LOW: 0, NORMAL: 1, HIGH: 2};
    }
  };