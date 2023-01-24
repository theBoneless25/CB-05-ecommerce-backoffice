import styles from "./styles.module.scss";
import { BsFillTrashFill } from "react-icons/bs";

const BtnRemove = () => {
  return (
    <button className={styles.main}>
      <BsFillTrashFill />
    </button>
  );
};

export default BtnRemove;
