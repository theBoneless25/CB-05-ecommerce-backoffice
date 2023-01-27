import styles from "./styles.module.scss";
import { GrMenu, GrLogin } from "react-icons/gr";
import { SiJordan } from "react-icons/si";
import { BsHeartFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1>
          <SiJordan />
        </h1>
      </div>
      <div className={styles.icons}>
        <BsHeartFill />
        <MdShoppingCart />
        <GrLogin />
      </div>
      <div className={styles.btnSet}>
        <GrMenu />
      </div>
    </div>
  );
};

export default Header;
