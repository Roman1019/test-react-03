import { useDispatch } from "react-redux";
import { addNote } from "../redux/store.js";

export default function NoteForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote(event.target.elements.text.value));
    // console.log(event.target.elements.text.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add note</button>
    </form>
  );
}
