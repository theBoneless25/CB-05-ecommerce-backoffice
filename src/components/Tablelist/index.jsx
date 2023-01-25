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
              <p>{item.id}</p>
              <img src={item.image} alt={item.name} />
              <p className={styles.name}>{item.name.substring(0, 15)}</p>
              <div className={styles.btnSet}>
                <BtnEdit
                  getData={getData}
                  data={{ name: item.name, image: item.image, id: item.id }}
                />
                <BtnRemove getData={getData} id={item.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tablelist;
