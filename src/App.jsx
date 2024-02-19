import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Provider from "./Provider";
import Container from "@mui/material/Container";
import List from "./List";
import Detail from "./Detail";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const theme = extendTheme({
  components: {
    JoyTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    JoyTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default function App() {
  return (
    <Router>
      <CssVarsProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider>
            <Container maxWidth="lg">
              <Suspense fallback={<div>Loading…</div>}>
                <Routes>
                  <Route path="/" element={<List />} />
                  <Route path="/:id" element={<Detail />} />
                </Routes>
              </Suspense>
            </Container>
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </QueryClientProvider>
      </CssVarsProvider>
    </Router>
  );
}

// render(<App />, document.getElementById("root"));
