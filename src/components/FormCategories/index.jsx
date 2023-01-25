import { useEffect, useState } from "react";
import { POST, PUT } from "../../method/http";
import styles from "./styles.module.scss";

const FormCategories = ({ setShowModal, getData, data }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        image: data.image,
      });
      setEdit(true);
    }
  }, []);

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    POST("categories", form).then((data) => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    PUT("categories", form, "/" + data.id).then((data) => {
      console.log(data);
      if (data.status === 200) {
        setShowModal(false);
        getData();
      }
    });
  };

  return (
    <form className={styles.formModal}>
      <input
        placeholder="Nome..."
        type="text"
        value={form.name}
        onChange={(e) => handleForm("name", e)}
      />
      <input
        placeholder="Immagine..."
        type="text"
        value={form.image}
        onChange={(e) => handleForm("image", e)}
      />

      {edit ? (
        <button type="submit" onClick={(e) => editForm(e)}>
          MODIFICA
        </button>
      ) : (
        <button type="submit" onClick={(e) => submitForm(e)}>
          MODIFICA
        </button>
      )}
    </form>
  );
};

export default FormCategories;
