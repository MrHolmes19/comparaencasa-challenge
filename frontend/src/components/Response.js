import React from 'react'

const Response = ({response}) => {
  if(!response) return null;
  return (
    <div>      
      {response.err 
      ? 
        <p className="fs-4 text-danger">
        "This car plate is not registered here."
        </p>
      :
        <p className="fs-3 text-success">
          {response.car_name}
        </p>
      }
    </div>
  )
}

export default Response