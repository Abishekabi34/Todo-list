import { useState } from 'react'
import './index.css'
import Peader from './Header'
import Content from './Content'
import Pooter from './Footer'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("todo")));
  const [newItem,setNewItem]=useState('');
  const [search,setSearchItem]=useState('');
  const addItem = (item)=>{
    const id=items.length ? items[items.length -1].id + 1 : 1
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo",JSON.stringify(listItems))
  }
  const handleCheck=(id)=>{
    const fullList=items.map((item)=>item.id===id ? {...item,checked:!item.checked} : item)
    setItems(fullList)
    localStorage.setItem("todo",JSON.stringify(fullList))
  }
  const delItem=(id)=>{
    const delList=items.filter((item)=>item.id!==id)
    setItems(delList)
    localStorage.setItem("todo",JSON.stringify(delList))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    addItem(newItem); 
    setNewItem('')
  }


  return (
    <div className='App'>
      <Peader title="Abishek's To-do List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearchItem={setSearchItem}
      />
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        delItem={delItem}
      />
      <Pooter 
        length={items.length}
      />

    </div>
  )

}

export default App
