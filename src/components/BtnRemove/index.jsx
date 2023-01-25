import styles from "./styles.module.scss";
import { BsFillTrashFill } from "react-icons/bs";
import { DELETE } from "../../method/http";

const BtnRemove = ({ id, getData }) => {
  const deleteCategories = () => {
    DELETE("categories", "/" + id).then((data) => {
      console.log(data);
      getData();
    });
  };
  return (
    <button className={styles.main} onClick={() => deleteCategories()}>
      <BsFillTrashFill />
    </button>
  );
};

export default BtnRemove;
