const SearchItem = ({search,setSearchItem}) => {
  return (
    <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Type to search..."
        value={search}
        onChange={(e)=>setSearchItem(e.target.value)}
       /> 


    </form>
  )
}

export default SearchItem