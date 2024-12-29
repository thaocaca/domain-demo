import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../stores/actions/domaintAction";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const CartPage = () => {
  const cart = useSelector((state) => state.domains.cart);
  const paymentStatus = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  //   const handlePayment = () => {
  //     dispatch(initiatePayment(cart));
  //   };
  const handleRemoveFromCart = (domainName) => {
    dispatch(removeFromCart(domainName));
  };
  useEffect(() => {
    if (paymentStatus.success) {
      alert("Thanh toán thành công!");
    }
    if (paymentStatus.error) {
      alert(`Lỗi: ${paymentStatus.error}`);
    }
  }, [paymentStatus]);
  return (
    <PayPalScriptProvider
      options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID", currency: "USD" }}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {cart.map((domain) => (
              <div
                key={domain.name}
                className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold">{domain.name}</h3>
                  <p className="text-gray-600">
                    Price: ${domain.prices[0].registration_price}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Thanh toán
                  </button>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      // Tạo order trên PayPal
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: cart
                                .reduce(
                                  (sum, item) =>
                                    sum + item.prices[0].registration_price,
                                  0
                                )
                                .toFixed(2),
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      // Xử lý sau khi thanh toán thành công
                      return actions.order.capture().then((details) => {
                        dispatch(initiatePayment(details));
                      });
                    }}
                    onError={(error) => {
                      console.error("PayPal error:", error);
                      alert("Thanh toán thất bại. Vui lòng thử lại!");
                    }}
                  />
                  <button
                    onClick={() => handleRemoveFromCart(domain.name)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default CartPage;
