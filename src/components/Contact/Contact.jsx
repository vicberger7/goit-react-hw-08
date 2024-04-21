import css from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <div className={css.iconContainer}>
          <HiPhone size={18} color="black" />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.iconContainer}>
          <HiUser size={18} color="black" />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
