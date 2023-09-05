// import { useState } from "react";
import deleteImg from "../assets/icons8-delete.svg";
import Button from "./Button";

/* eslint-disable react/prop-types */
const Task = (props) => {
  return (
    <div className='task mt-2 flex gap-3 justify-start text-xl'>
      <input
        className='w-4 accent-blue'
        type='checkbox'
        name='Todo'
        checked={props.completed}
        onChange={(event) => props.handleClick(event, props.id)}
        id={`todo-${props.id}`}
      />
      <label
        className={`mr-auto font-medium ${
          props.completed ? "line-through" : ""
        }`}
        htmlFor={`todo-${props.id}`}
      >
        {props.title}
      </label>
      <Button
        name={<img src={deleteImg} alt='delete task' />}
        type='button'
        handleClick={(event) => props.handleDelete(event, props.id)}
      />
    </div>
  );
};

export default Task;
