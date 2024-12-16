import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/productActions';
import { ShoppingCart } from 'lucide-react';

const ProductList = () => {
  const { products, loading, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      Đang tải...
    </div>
  );

  if (error) return (
    <div className="text-red-500 text-center p-4">
      Lỗi: {error}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div 
          key={product.id} 
          className="border rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow"
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-32 h-32 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold text-center mb-2">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-2">
            {product.price.toLocaleString()} VNĐ
          </p>
          <button 
            onClick={() => handleAddToCart(product)}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            <ShoppingCart size={16} className="mr-2" />
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;