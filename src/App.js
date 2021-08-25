import React from "react";
import "./App.css";
import { useAxiosInterceptors } from "./axios";
import Calender from "./components/Calender";

const App = () => {
  useAxiosInterceptors();
  return (
    <div className="App">
      <Calender />
    </div>
  );
};

export default App;
