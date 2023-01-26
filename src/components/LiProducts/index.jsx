import { useState } from "react";
import styles from "./styles.module.scss";
import { PUT } from "../../method/http";
import CardProducts from "../CardProducts";

const LiProducts = ({ item, removeItems, refreshItems }) => {
  const [formProduct, setFormProduct] = useState({
    title: item.title,
    price: item.price,
    description: item.description,
    categoryId: item.category.id,
    images: [item.images[0]],
  });
  const [showForm, setShowForm] = useState(false);

  const handleForm = (input, e) => {
    let inputValue = e.target.value ? e.target.value : 0;
    if (input === "price" || input === "categoryId") {
      inputValue = parseInt(inputValue);
    }

    if (input === "images") {
      inputValue = [inputValue];
    }

    setFormProduct({
      ...formProduct,
      [input]: inputValue,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    PUT("products", formProduct, item.id)
      .then((res) => res.json())
      .then((data) => {
        setShowForm(false);
        refreshItems();
        console.log(data);
      });
  };

  return (
    <div className={styles.main}>
      <CardProducts
        removeItems={removeItems}
        setShowForm={setShowForm}
        showForm={showForm}
        item={item}
      />
      {showForm && (
        <form onSubmit={(e) => submitForm(e)}>
          <input
            value={formProduct.title}
            onChange={(e) => handleForm("title", e)}
            type="text"
          />
          <input
            value={formProduct.price}
            onChange={(e) => handleForm("price", e)}
            type="text"
          />
          <input
            value={formProduct.description}
            onChange={(e) => handleForm("description", e)}
            type="text"
          />
          <input
            value={formProduct.categoryId}
            onChange={(e) => handleForm("categoryId", e)}
            type="text"
          />
          <input
            value={formProduct.images[0]}
            onChange={(e) => handleForm("images", e)}
            type="text"
          />
          <input className={styles.inputEdit} type="submit" value="MODIFICA" />
        </form>
      )}
    </div>
  );
};

export default LiProducts;
