import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Container from "@mui/material/Container";

import List from "./List";
import Detail from "./Detail";

import "./styles.css";

function App() {
  return (
    <CssVarsProvider>
      <Router className="App">
        <Container maxWidth="lg">
          <Route exact path="/" component={List} />
          <Route path="/:id" component={Detail} />
        </Container>
      </Router>
    </CssVarsProvider>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
