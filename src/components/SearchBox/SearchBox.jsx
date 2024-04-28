import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name or by number</p>
      <input
        className={css.input}
        type="text"
        value={search}
        onChange={onChangeFilter}
      />
    </div>
  );
}
