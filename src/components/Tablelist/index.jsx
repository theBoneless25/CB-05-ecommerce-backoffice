import styles from "./styles.module.scss";
import BtnRefresh from "../BtnRefresh";
import BtnEdit from "../BtnEdit";
import BtnRemove from "../BtnRemove";
import Loader from "../Loader";

const Tablelist = ({ categoriesState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHead}>
        <div className={styles.description}>
          <p>Search...</p>
        </div>
        <BtnRefresh getData={getData} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.tableBody}>
          {categoriesState.map((item) => (
            <div className={styles.tableRow} key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className={styles.name}>{item.name.substring(0, 15)}</p>
              <div className={styles.btnSet}>
                <BtnEdit />
                <BtnRemove />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tablelist;
