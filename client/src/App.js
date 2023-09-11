import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import Header from "./components/Header";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
            className="input-todo"
          />

          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="taskheader">
          <h2>YOUR TASKS</h2>
        </div>
        <div className="list">
          {toDo.length > 0 ? (
            toDo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))
          ) : (
            <p>You currently have no tasks</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
