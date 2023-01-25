import styles from "./styles.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import LiComponent from "./../LiComponent";

const NavBar = ({ setRoute, stateRoute }) => {
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item) => (
        <LiComponent
          icon={item.icon}
          key={item.id}
          label={item.label}
          setRoute={setRoute}
          routeUrl={item.route}
          stateRoute={stateRoute}
        />
      ))}
    </ul>
  );
};

export default NavBar;
