import "./App.css";
import WeatherSearch from "./WeatherSearch";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="container">
        <WeatherSearch />
      </header>

      <br />

      <footer>
        This project was coded by KateHov and is{" "}
        <a href="https://github.com/KateHov12/Weather-App-React" target="_blank">
          open-sourced on GitHub
        </a>{""}
        and{" "}
        <a href="" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
