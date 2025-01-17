import React from "react";
import ReactDom from "react-dom";
import App from "./App.tsx";

export const renderApp = () => {
  ReactDom.render(
    <App notes={Object.values(window.state.notes)} />,
    document.getElementById("root")
  );
};

// export { renderApp };
