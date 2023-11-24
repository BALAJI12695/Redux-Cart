import { useSelector } from "react-redux";
import Products from "./Products";

const BasketProducts = () => {
  console.log("Rendering BasketProducts");

  const { products, total, amount, searchTerm } = useSelector((state) => state.basket);

  const filteredProducts = searchTerm && searchTerm.trim() !== ''
  ? products.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : products;


  console.log("Filtered Products:", filteredProducts);

  return (
    <div className="max-w-4xl mx-auto py-4">
      {amount > 0 && filteredProducts.length > 0 ? (
        <div>
          {filteredProducts.map((item, i) => (
            <Products
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              amount={item.amount}
            />
          ))}
        </div>
      ) : (
        <p className="text-2xl text-gray-700 font-medium text-center">Your Basket is Empty </p>
      )}
      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="tracking-wider font-medium">₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BasketProducts;
