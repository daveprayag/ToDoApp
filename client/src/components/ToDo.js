import React from "react";

import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateMode} />
        <MdDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
