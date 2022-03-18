import React, { useState, useEffect } from 'react';
import CarForm from './CarForm';
import Loader from './Loader';
import Response from './Response';
//import { helpHttp } from "../helpers/helpHttp";

const CarSearch = () => {
  const [search, setSearch] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const {carPlate} = search;

      let endpoint = `http://127.0.0.1:8000/cars/carplates/?carplate=${carPlate}`;

      setLoading(true);

      const [carModel] = await Promise.all([
        // helpHttp().get(endpoint),
        fetch(endpoint)
          .then((res) =>
            res.ok
              ? res.json()
              : Promise.reject({
                  err: true,
                  status: res.status || "00",
                  statusText: res.statusText || "Ocurrió un error",
                })
          )
          .catch((err) => (err))
      ]);
      
      setResponse(carModel);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className="row">
      <div className="col col-md-8 offset-md-2 col-lg-8 offset-lg-2">
        <p className="mb-4 fs-5">Enter a car plate:</p>
        <CarForm handleSearch={handleSearch}/>
        {loading && <Loader/> }

        <hr></hr>

        <p className="mb-4 fs-5">Result:</p>  
              
        {search && !loading && (
          <Response response={response}/>
        )}        
      </div>
    </div>
  )
}

export default CarSearch