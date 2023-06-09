import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/configureStore";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
  const linkElement = screen.getByText("Crypto Analyzer");
  expect(linkElement).toBeInTheDocument();
});
