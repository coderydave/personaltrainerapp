import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
/* import {
  TimePicker,
  Calendar,
  DatePicker,
  VideoPlayer,
} from "../src/components"; */
import "./App.css";
import MainLayout from "./view/Layouts/MainLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout />
      </div>
    </Router>
  );
}

export default App;
