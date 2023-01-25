import { useState } from "react";
import NavBar from "../NavBar";
import styles from "./styles.module.scss";
import Categories from "../Categories";
import Home from "./../Home";

const Container = () => {
  const [route, setRoute] = useState("home");

  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <NavBar stateRoute={route} setRoute={setRoute} />
      </div>
      <div className={styles.dxColumn}>
        {route === "home" && <Home />}
        {route === "categories" && <Categories />}
        {route === "products" && <div>PRODOTTI</div>}
        {route === "orders" && <div>ORDINI</div>}
        {route === "users" && <div>UTENTI</div>}
      </div>
    </div>
  );
};

export default Container;
