import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
//Any Error in our application will be caught by ErrorBoundry

// Error boundaries do not catch errors for:

// Event handlers
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)
