import styles from "./styles.module.scss";
import { GrEdit } from "react-icons/gr";
import EditCategories from "./../EditCategories";
import { useState } from "react";

const BtnEdit = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditCategories
          getData={getData}
          data={data}
          setShowModal={setShowModal}
        />
      )}

      <button onClick={() => setShowModal(true)} className={styles.main}>
        <GrEdit />
      </button>
    </>
  );
};

export default BtnEdit;
