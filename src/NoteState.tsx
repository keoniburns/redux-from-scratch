import { renderApp } from "./render.tsx";

interface Note {
  id: number;
  content: string;
}

declare global {
  interface Window {
    state: {
      nextNoteId: number;
      notes: Record<number, Note>;
    };
  }
}

const initialState = {
  nextNoteId: 1,
  notes: {},
};

window.state = initialState;

const onAddNote = () => {
  const id = window.state.nextNoteId;
  window.state.notes[id] = {
    id,
    content: "",
  };
  window.state.nextNoteId++;
  renderApp();
};

export { onAddNote, Note };
