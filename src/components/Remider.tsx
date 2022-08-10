import React from "react";
import "../App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
export default function Reminder() {
  const reminder: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");
  const ADD = "add";
  function addReminder(event) {
    dispatch({ type: ADD, payload: { time, task } });
  }
  return (
    <div className="reminder-wrapper">
      <input
        type="time"
        onChange={(e) =>
          setTime(() => {
            var time = e.target.value
              .toString()
              .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

            if (time.length > 1) {
              time = time.slice(1);
              time[5] = +time[0] < 12 ? " AM" : " PM";
              time[0] = +time[0] % 12 || 12;
            }
            return time.join("");
          })
        }
      />
      <input
        placeholder="Enter task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addReminder}>Add</button>
      {reminder.length > 0 &&
        reminder.map((el) => {
          return (
            <div className="reminder-container">
              <h4>{el.time}</h4>
              <p>{el.task}</p>
            </div>
          );
        })}
    </div>
  );
}
