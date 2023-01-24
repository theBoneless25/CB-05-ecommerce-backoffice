import styles from "./styles.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import LiComponent from "./../LiComponent";

const NavBar = ({ setRoute }) => {
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item) => (
        <LiComponent
          icon={item.icon}
          key={item.id}
          label={item.label}
          setRoute={setRoute}
          routeUrl={item.route}
        />
      ))}
    </ul>
  );
};

export default NavBar;
