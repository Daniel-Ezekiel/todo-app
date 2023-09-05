import { useRef, useEffect, useState } from "react";
import Task from "./components/Task";
import "./App.css";
import Button from "./components/Button";
import Tab from "./components/Tab";
// import data from "./assets/data";

function App() {
  let tasksToShow;
  const addBtnClassNames =
    "btn-add-task px-5 rounded-xl bg-blue font-bold text-white";
  const deleteBtnClassNames =
    "btn-delete-tasks mt-4 px-5 py-2 rounded-xl bg-red font-bold text-[1.2rem] text-white";

  // References (useRef)
  const allTabRef = useRef(null);
  const activeTabRef = useRef(null);
  const completedTabRef = useRef(null);
  const tabsRef = [allTabRef, activeTabRef, completedTabRef];

  // State variables
  const [currTab, setCurrTab] = useState("all");
  const [allTasks, setAllTasks] = useState(
    JSON.parse(localStorage.getItem("allTasks")) || []
  );
  const [taskValue, setTaskValue] = useState("");

  // Render available tasks
  if (currTab == "active") {
    tasksToShow = allTasks
      .filter((task) => !task.completed)
      .map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          handleClick={completeTask}
          handleDelete={deleteTask}
        />
      ));
  } else if (currTab == "completed") {
    tasksToShow = allTasks
      .filter((task) => task.completed)
      .map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          handleClick={completeTask}
          handleDelete={deleteTask}
        />
      ));
  } else {
    tasksToShow = allTasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        completed={task.completed}
        handleClick={completeTask}
        handleDelete={deleteTask}
      />
    ));
  }

  // Switch tabs to view different tasks states
  function changeCurrTab(e) {
    const currTabClassNames = ["border-b-3", "border-b-blue", "text-blue"];
    tabsRef.forEach((tabRef) =>
      tabRef.current.classList.remove(...currTabClassNames)
    );

    e.target.classList.add(...currTabClassNames);
    setCurrTab(e.target.dataset.tabname);
  }
  // Add a new task
  function updateTasks(e) {
    e.stopPropagation();

    if (!taskValue) return;
    const newTask = {
      id: allTasks.length + 1,
      title: taskValue,
      completed: false,
    };

    setAllTasks((prevAllTasks) => [...prevAllTasks, newTask]);
    setTaskValue("");
  }
  // Mark a task as complete
  function completeTask(event, id) {
    event.stopPropagation();

    setAllTasks((prevTasks) =>
      prevTasks.map((task) => {
        return task.id == id ? { ...task, completed: !this.completed } : task;
      })
    );
  }
  // Delete a task
  function deleteTask(event, id) {
    event.stopPropagation();

    setAllTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }
  // Remove all completed tasks
  function removeTasks(e) {
    e.stopPropagation();

    setAllTasks((prevTasks) => {
      return prevTasks.filter((task) => !task.completed);
    });
  }

  // Store tasks in localStorage
  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <>
      <header className='max-w-[65rem] mx-auto'>
        <h1 className='font-bold text-2xl'>#todo</h1>

        <nav className='my-4 mb-2 text-sm'>
          <ul className='grid grid-cols-3 px-3 border-b border-gray'>
            <Tab
              name='All'
              tabName='all'
              tabRef={allTabRef}
              handleClick={changeCurrTab}
            />

            <Tab
              name='Active'
              tabName='active'
              tabRef={activeTabRef}
              handleClick={changeCurrTab}
            />

            <Tab
              name='Completed'
              tabName='completed'
              tabRef={completedTabRef}
              handleClick={changeCurrTab}
            />
          </ul>
        </nav>
      </header>

      <main className='max-w-[65rem] mx-auto'>
        <div className='form-control mt-5 flex justify-center gap-3 text-sm'>
          <input
            type='text'
            id='task-input'
            placeholder='add new task'
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            className='task-input w-full p-3 border rounded-xl'
          />
          <Button
            name='add'
            classNames={addBtnClassNames}
            handleClick={updateTasks}
          />
        </div>

        <div className='tasks mt-8 font-[600] text-xl'>
          {!allTasks.length &&
            "You do not have any tasks currently. Kindly create a few."}
          {tasksToShow}

          {currTab == "completed" &&
            allTasks.filter((task) => task.completed).length > 0 && (
              <Button
                classNames={deleteBtnClassNames}
                name='delete all'
                handleClick={removeTasks}
              />
            )}
        </div>
      </main>
    </>
  );
}

export default App;

