import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => (
  <div className="notFoundDiv">
    <h1>Site Under Construction!</h1>
    <div className="break"></div>

    <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
