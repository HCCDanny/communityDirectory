import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Provider from "./Provider";
import Container from "@mui/material/Container";
import List from "./List";
import Detail from "./Detail";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <CssVarsProvider>
        <Provider>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<List />} />
              {/* <Route path="/:id" component={Detail} exact /> */}
              {/* <Redirect to="/" /> */}
            </Routes>
          </Container>
        </Provider>
      </CssVarsProvider>
    </Router>
  );
}

// render(<App />, document.getElementById("root"));
