import styles from "./styles.module.scss";
import { GrEdit } from "react-icons/gr";
import { BsFillTrashFill } from "react-icons/bs";

const CardProducts = ({ setShowForm, showForm, removeItems, item }) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>{item.title}</h1>
        <img src={item.images[1]} alt={item.title} />
        <h3>{item.price}</h3>
        <p>{item.description}</p>
        <button onClick={() => removeItems(item.id)}>
          <BsFillTrashFill />
        </button>
        <button onClick={() => setShowForm(!showForm)}>
          <GrEdit />
        </button>
      </div>
    </div>
  );
};

export default CardProducts;
