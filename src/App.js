import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasketProducts from './Components/BasketProducts';
import Navbar from './Components/Navbar';
import { updateTotal, setSearchTerm } from './Feature/basketSlice';
import '../src/App.css';

function App() {
  const { searchTerm } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the updateTotal action when the component mounts
    dispatch(updateTotal());
  }, [dispatch]);

  const handleSearch = (e) => {
    const searchTermValue = e.target.value;
    dispatch(setSearchTerm(searchTermValue));
  };

  return (
    <>
      <h1 className="text-center font-medium mt-2 py-4 text-3xl">Redux Store</h1>
      <div className="searchInput_Container flex justify-center w-100 bg-blue-800 p-5">
        <input
          id="searchInput"
          className="bg-white flex justify-center items-center rounded-r-sm-none rounded-l-full w-80 p-2 outline-none"
          type="text"
          placeholder="Search here ..."
          value={searchTerm || ''}
          onChange={handleSearch}
        />
        <button
          className="text-white bg-slate-600 p-2 rounded-r-full outline-none "
          type="button"
          onClick={() => dispatch(updateTotal())} // Dispatch the updateTotal action on button click
        >
          Search
        </button>
      </div>
      <Navbar />
      <BasketProducts />
    </>
  );
}

export default App;
