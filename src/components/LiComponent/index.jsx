import styles from "./styles.module.scss";
const LiComponent = ({ label, icon, setRoute, routeUrl }) => {
  return (
    <li className={styles.main} onClick={() => setRoute(routeUrl)}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </li>
  );
};

export default LiComponent;
