import React, { useState } from "react";

const initialForm = {
  carPlate: "",
};

const CarForm = ({handleSearch}) => {

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.carPlate) {
      alert("Please, input a car plate number");
      return;
    }

    handleSearch(form);
    //setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="carPlate"
          //label="car plate"
          placeholder="example: NPU548"
          onChange={handleChange}
          value={form.carPlate}
        />
        <input type="submit" value="Consult" />
      </form>
    </div>
  )
}

export default CarForm