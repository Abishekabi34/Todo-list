import { useState } from 'react'
import ItemList from './itemList'
const Content = ({items,handleCheck,delItem}) => {
  return (
    <main>
      {(items.length) ? (<ItemList 
        items={items}
        handleCheck={handleCheck}
        delItem={delItem}
      />) :<p>Your List is Empty!!!</p> }
    </main>
  )
}

export default Content