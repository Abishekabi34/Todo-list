import React from "react"
import {FaTrashAlt} from "react-icons/fa"
import LineItems from "./LineItems"

const ItemList = ({items,handleCheck,delItem}) => {
  return (
    <ul>
        {items.map((item)=>(<LineItems 
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          delItem={delItem}
        />))}
      </ul>
  )
}

export default ItemList