import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col">
          <img src={product.image} alt={product.title} className="h-40 object-contain mb-4"/>
          <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
          <p className="text-gray-600 text-sm flex-1">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold">${product.price}</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
