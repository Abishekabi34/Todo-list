import React from "react"
import { FaTrashAlt } from "react-icons/fa"
const LineItems = ({item,handleCheck,delItem}) => {
  return (
    <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={()=>handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" 
              onClick={()=>{
                 delItem(item.id)}}
              aria-label={`Delete ${item.item}`}
            />
    </li>
  )
}

export default LineItems