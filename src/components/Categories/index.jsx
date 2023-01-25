import { useEffect, useState } from "react";
import { GET } from "../../method/http";
import Tablelist from "../Tablelist";
import styles from "./styles.module.scss";
import ModalContainer from "../ModalContainer";

const Categories = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const categoriesStateInit = {
    categories: [],
    loading: true,
  };
  const [categoriesState, setCategoriesState] = useState(categoriesStateInit);

  const getData = () => {
    setCategoriesState({ ...categoriesState, loading: true });
    GET("categories").then((data) =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };
  console.log(data);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      {showModal && (
        <ModalContainer getData={getData} setShowModal={setShowModal} />
      )}
      <h1>Categorie</h1>
      <button onClick={() => setShowModal(true)}>➕</button>
      <Tablelist
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Categories;
