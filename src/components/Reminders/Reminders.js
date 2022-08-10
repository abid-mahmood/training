import { useSelector, useDispatch } from "react-redux";
import { DELETE_REMINDER } from "../../redux/constants";

import "./Reminders.css";
function Reminders() {
  const state = useSelector((s) => s.reminders);
  const dispatch = useDispatch();

  const handleListDelete = (e) => {
    const id = e.target.getAttribute("data-id");
    dispatch({ type: DELETE_REMINDER, payload: id });
  };

  return (
    <ul className="reminders-list">
      {state.map((el) => (
        <li key={el.id} className="reminders-item">
          <div className="reminder">
            <p className="text">{el.text}</p>
            <p className="time">@ {el.time}</p>
          </div>

          <button data-id={el.id} onClick={handleListDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Reminders;
