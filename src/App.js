import { useDispatch, useSelector } from 'react-redux';
import BasketProducts from './Components/BasketProducts';
import Navbar from './Components/Navbar';
import { updateTotal } from './Feature/basketSlice';
import { useEffect } from 'react';

function App() {
  const{ products } = useSelector((store) => store.basket );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal())
  
  }, [products,dispatch])
  
  
  return (
    <>
    <Navbar />
      <h1 className="text-center font-medium mt-2 py-4 text-3xl" > Redux Store</h1>
      <BasketProducts />
    </>
  );
}

export default App;
