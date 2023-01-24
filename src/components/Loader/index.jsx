import styles from "./styles.module.scss";
import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <BiLoaderCircle />
    </div>
  );
};

export default Loader;
