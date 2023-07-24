import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add items"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <dvi className="showItems">
            <button
              className="btn effect04"
              data-sm-link-test="remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span>Check List</span>
            </button>
          </dvi>
        </div>
      </div>
    </>
  );
};

export default Todo;
