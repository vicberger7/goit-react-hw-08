import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

export const Navigation = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
          <div>
            <span>Hi {userData.name}</span>
            <button onClick={onLogout} type="button">
              Logout
            </button>
          </div>
        </>
      )}
    </nav>
  );
};
