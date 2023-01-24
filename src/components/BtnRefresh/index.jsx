import styles from "./styles.module.scss";
import { RxReload } from "react-icons/rx";

const BtnRefresh = ({ getData }) => {
  return (
    <button className={styles.main} onClick={() => getData()}>
      <RxReload />
    </button>
  );
};

export default BtnRefresh;
