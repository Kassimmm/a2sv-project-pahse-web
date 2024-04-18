import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, editNote, deleteNote } from './notesSlice';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const handleAddNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      if (editMode) {
        dispatch(editNote({ id: editNoteId, title, content }));
        setEditMode(false);
        setEditNoteId(null);
      } else {
        dispatch(addNote({ id: Date.now(), title, content }));
      }
      setTitle('');
      setContent('');
    }
  };

  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditMode(true);
    setEditNoteId(note.id);
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className='note-app'>
      <h1><strong>My Notes App</strong></h1>

      <div className='heading'>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <div className='button'>
          <button onClick={handleAddNote}>
            {editMode ? 'Save Changes' : 'Add Note'}
          </button>
        </div>
      </div>

        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className='buttons'>
                <button onClick={() => handleEditNote(note)} className='edit'>Edit</button>
                <button onClick={() => handleDeleteNote(note.id)} className='delete'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default App;