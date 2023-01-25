import FormCategories from "../FormCategories";
import styles from "./styles.module.scss";

const EditCategories = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button onClick={() => setShowModal(false)}>🗙</button>
        <FormCategories
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default EditCategories;
