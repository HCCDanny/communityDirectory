import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Container from "@mui/material/Container";

import List from "./List";
import Detail from "./Detail";

import "./styles.css";
import Provider from "./Provider";

function App() {
  return (
    <Provider>
      <CssVarsProvider>
        <Router className="App">
          <Container maxWidth="lg">
            <Route exact path="/" component={List} />
            <Route path="/:id" component={Detail} />
          </Container>
        </Router>
      </CssVarsProvider>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
