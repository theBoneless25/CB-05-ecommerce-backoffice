import styles from "./styles.module.scss";
import { GrEdit } from "react-icons/gr";

const BtnEdit = () => {
  return (
    <button className={styles.main}>
      <GrEdit />
    </button>
  );
};

export default BtnEdit;
