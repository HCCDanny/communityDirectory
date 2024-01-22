import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Provider from "./Provider";
import Container from "@mui/material/Container";
import List from "./List";
import Detail from "./Detail";
import "./styles.css";

const theme = extendTheme({
  components: {
    JoyTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export default function App() {
  return (
    <Router>
      <CssVarsProvider theme={theme}>
        <Provider>
          <Container maxWidth="lg">
            <Suspense fallback={<div>Loading…</div>}>
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/:id" element={<Detail />} />
              </Routes>
            </Suspense>
          </Container>
        </Provider>
      </CssVarsProvider>
    </Router>
  );
}

// render(<App />, document.getElementById("root"));
