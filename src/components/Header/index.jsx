import styles from "./styles.module.scss";
import { GrMenu } from "react-icons/gr";
import { SiJordan } from "react-icons/si";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1>
          <SiJordan />
        </h1>
      </div>
      <div className={styles.btnSet}>
        <GrMenu />
      </div>
    </div>
  );
};

export default Header;
