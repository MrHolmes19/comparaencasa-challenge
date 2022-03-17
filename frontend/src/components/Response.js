import React from 'react'

const Response = ({response}) => {
  if(!response) return null;
  return (
    <div>
      {response.err ? "This car plate is not registered here." : response.car_name}
    </div>
  )
}

export default Response