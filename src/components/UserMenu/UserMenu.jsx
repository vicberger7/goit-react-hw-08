import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userName = user?.name;

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
