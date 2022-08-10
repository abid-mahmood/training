import "./Form.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { ADD_REMINDER } from "../../redux/constants";

function Form() {
  const date = useRef();
  const reminder = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const reminders = useSelector((s) => s.reminders);

  const tConvert = (time) => {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? "AM" : "PM";
      time[0] = +time[0] % 12 || 12;
    }
    return time.join("");
  };

  const nextId = (reminders) => {
    const maxId = reminders.reduce(
      (maxId, reminder) => Math.max(reminder.id, maxId),
      -1
    );
    return maxId + 1;
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (reminder.current.value && date.current.value) {
      dispatch({
        type: ADD_REMINDER,
        payload: {
          text: reminder.current.value,
          time: tConvert(date.current.value),
          id: nextId(reminders),
        },
      });

      form.current.reset();
    }
  };

  return (
    <form onSubmit={formHandler} ref={form}>
      <div className="form-group">
        <input ref={reminder} />
        <input ref={date} type="time" />
        <button>Add Reminder</button>
      </div>
    </form>
  );
}

export default Form;
