import React from "react";
import ListOfInterests from '../ListOfInterests/ListOfInterests'
import Input from "../Input/main";

const CommentPage = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <p>{ListOfInterests}</p>
    <p>{Input}</p>
  </div>
);

export default CommentPage;