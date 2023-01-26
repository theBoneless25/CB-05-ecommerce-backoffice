import { useEffect, useState } from "react";
import { GET, DELETE } from "../../method/http";
import LiProducts from "../LiProducts";

const Products = () => {
  const [products, setProducts] = useState([]);

  const refreshItems = () => {
    GET("products").then((data) => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    refreshItems();
  }, []);

  const removeItems = (id) => {
    DELETE("products", id).then((data) => {
      if (data.status === 200) {
        refreshItems();
      }
    });
  };

  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <LiProducts
            refreshItems={refreshItems}
            removeItems={removeItems}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
