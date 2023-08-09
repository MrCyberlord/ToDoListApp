import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const lastItemRef = useRef();

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView();
    }
  }, [list]);

  return (
    <>
      <div className="main-div">
        <div>Add your list here</div>
        <div className="addItems">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add items"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <button
            id="add-button"
            onClick={() =>
              dispatch(
                addTodo(inputData),
                setInputData(""),
                inputRef.current.focus()
              )
            }
          >
            Add
          </button>
        </div>
        <div className="items-container">
          <div className="todo-items">
            <ul className="showItems">
              {list.map((elem, index) => {
                return (
                  <li
                    className="eachItem"
                    key={elem.id}
                    ref={index === list.length - 1 ? lastItemRef : null}
                  >
                    <span>{elem.data}</span>

                    <button
                      id="delete-button"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <button id="all-done" onClick={() => dispatch(removeTodo())}>
            All Done
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
