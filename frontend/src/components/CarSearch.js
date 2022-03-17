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
    <div>
      <h3>Enter a car plate:</h3>
      <CarForm handleSearch={handleSearch}/>
      {loading && <Loader/> }
      <hr></hr>
      <h3>Result:</h3>
      {search && !loading && (
        <Response response={response}/>
      )}
    </div>
  )
}

export default CarSearch