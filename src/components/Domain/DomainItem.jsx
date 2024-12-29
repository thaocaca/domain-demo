import { useDispatch } from "react-redux";

const DomainItem = ({ domain, cart = [], onAddToCart }) => {
  const isBought = cart.some((item) => item.name === domain.name);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!isBought) {
      dispatch(addToCart(domain));
    }
  };
  return (
    <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Tên domain */}
      <h3 className="text-lg font-bold text-gray-900">{domain.name}</h3>

      {/* Giá đăng ký */}
      {Array.isArray(domain.prices) && domain.prices.length > 0 ? (
        domain.prices.map((price) => (
          <div key={price.id} className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">Currency:</span>{" "}
              {price.currency_code || "N/A"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Billing Cycle:</span>{" "}
              {price.billing_cycle || 0} year(s)
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Registration Price:</span> ${price.registration_price?.toFixed(2) || "0.00"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Renewal Price:</span> ${price.renewal_price?.toFixed(2) || "0.00"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Transfer Price:</span> ${price.transfer_price?.toFixed(2) || "0.00"}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No pricing data available.</p>
      )}

      {/* Trạng thái (Buy hoặc Bought) */}
      <p
        className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
          isBought ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
        }`}
      >
        {isBought ? "Bought" : "Buy"}
      </p>

      {/* Nút thêm vào giỏ hàng */}
      <button
        onClick={handleAddToCart}
        disabled={isBought}
        className={`mt-4 w-full px-4 py-2 text-sm font-medium rounded-md ${
          isBought
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isBought ? "Đã thêm vào giỏ" : "Thêm vào giỏ hàng"}
      </button>
    </div>
  );
};

export default DomainItem;
