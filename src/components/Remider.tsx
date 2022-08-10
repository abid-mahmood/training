import React, { useState } from "react";
// import { useState } from "react";
import { connect } from 'react-redux';
import "../App.css";
import { addRemainder } from "../redux/actionCreators/remainders";
// moment.js
// import { useSelector, useDispatch } from "react-redux/es/exports";
// re-select, re-reselect for selectors

interface Reminder {
  time: string;
  task: string;
}

interface OwnProps {};
interface OtherProps {};

interface ReduxProps {
  addReminderAction: void;
  reminders: Reminder[];
}

type Props = OwnProps | ReduxProps | OtherProps;

const ADD = "add";

function Reminder({
  addRemainderAction,
  reminders,
}: Props) {
  // const reminder: any = useSelector((state) => state);
  // const dispatch = useDispatch();
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");

  const handleChange = (e: any) => setTask(e.target.value);

  function addReminder(event) { // Don't use it here
    addRemainderAction();
  //   dispatch({ type: ADD, payload: { time, task } });
  }

  const remainderContent = (
    reminder.map((el) => {
      return (
        <div className="reminder-container">
          <h4>{el.time}</h4>
          <p>{el.task}</p>
        </div>
      );
    })
  );

  return (
    <div className="reminder-wrapper">
      <input
        type="time"
        onChange={(e) =>
          setTime(() => {
            var time = e?.target?.value
              .toString()
              .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

            if (time?.length > 1) { // use moment
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
        onChange={handleChange}
      />
      <button onClick={addReminder}>Add</button>
      {reminder.length > 0 && remainderContent}
    </div>
  );
}

const mapStateToProps = (state: any): Partial<ReduxProps> => ({
  reminders: state.reminders,
});

const mapDispatchToProps = (dispatch): Partial<ReduxProps> => ({
  addRemainderAction: () => dispatch(addRemainder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);
