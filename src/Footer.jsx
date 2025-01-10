import React from "react"
const Pooter = ({length}) => {
  return (
    <footer>Total {length===1 ? "item" : "items"} in the List: {length}</footer>
  )
}

export default Pooter