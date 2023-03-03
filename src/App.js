import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project is coded by Gerta Gosa and is {""}
          <a
            href="https://github.com/gertagosa"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{""}
          and{""}
          <a 
          href=""
        </footer>
      </div>
    </div>
  );
}
