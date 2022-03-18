import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button } from 'react-bootstrap';

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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 col-xs-2">
          <div class="form-group row">
            <label htmlfor="carPlate" className="col-sm-3 col-form-label text-sm-end">Car plate:</label>
            <div class="col-sm-9">
              <input type="text" className="form-control" id="carPlate" 
              aria-describedby="emailHelp" 
              placeholder='example: AB 123 C' 
              name="carPlate"
              onChange={handleChange}
              value={form.carPlate}/>
            </div>
          </div>
          <div id="emailHelp" className="form-text">(You can use spaces)</div>
        </div>

        <button type="submit" className="btn btn-primary">Consult</button>
      </form>
    </div>
  )
}

export default CarForm