import React from 'react'

function PlaceDetail({place}) {
  return (
    <div className='flex flex-col space-x-6'>
     Place is:   {place.name}
     Price is : {place.price}
        Rating is : {place.rating}



    </div>
  )
}

export default PlaceDetail
