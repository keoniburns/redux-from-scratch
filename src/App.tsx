import React from "react";
import { Note, onAddNote } from "./NoteState.tsx";
import { renderApp } from "./render.tsx";

const App = ({ notes }: { notes: Note[] }) => {
  return (
    <div>
      <ul className="note-list">
        {Object.keys(notes).map((id) => (
          <li className="note-list-item" key={id}>
            {id}
          </li>
        ))}
      </ul>
      <button className="add-note-button" onClick={onAddNote}>
        Add Note
      </button>
    </div>
  );
};

export default App;
