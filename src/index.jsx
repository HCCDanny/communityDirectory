import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import List from "./List";
import Detail from "./Detail";
import "./styles.css";

function App() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          width: 900,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <Router className="App">
          <Route exact path="/" component={List} />
          <Route path="/:id" component={Detail} />
        </Router>
      </Sheet>
    </CssVarsProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
