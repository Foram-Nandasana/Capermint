import React from 'react'
import { useSelector } from 'react-redux'

export const AddCart = () => {

    const data = useSelector((state) => {
        return state.product;
    } )

    console.log(data)

  return (
  data.map((product, id) => {
    return <div key={id}>{product}</div>
  })
  )
}
