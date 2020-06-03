import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Public from './router/Public';
export default function BasicExample() {
  return (
    <Router>
      <Public/>
    </Router>
  );
}
