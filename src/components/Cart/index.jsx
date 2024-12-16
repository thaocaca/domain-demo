import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/productActions';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="fixed right-0 top-0 w-96 h-full bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Giỏ Hàng</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Giỏ hàng trống</p>
      ) : (
        <>
          {cart.map(product => (
            <div 
              key={product.id} 
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-16 h-16 object-contain mr-4" 
                />
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-gray-600">
                    {product.price.toLocaleString()} VNĐ x {product.quantity}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => handleRemoveFromCart(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">
              Tổng: {total.toLocaleString()} VNĐ
            </p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
              Thanh Toán
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;