import { useSelector } from "react-redux";
import Products from "./Products";

const BasketProducts = () => {
      const {products, total, amount} = useSelector((store) => store.basket);
  return (
    <div className="max-w-4xl mx-auto py-4">
      {amount > 1 ? (<>

        <div>
        {products.map((item, i) =>
        <Products 
        key={new Date().getTime + Math.random()}
        name={item.name}
        price={item.price}
        image={item.image}
        amount={item.amount}
        />
        )}
        
        </div>

      </>):(<>
      
      <p className="text-2xl text-gray-700 font-medium text-center">Your Basket is Empty </p></>) }
      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="tracking-wider font-medium">₹{total.toFixed(2)}</p>
      </div>
      
      </div>
  )
}

export default BasketProducts;