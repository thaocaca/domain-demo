import { Plus } from "lucide-react";

const DomainList = ({ domains, cart, onAddToCart }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y divide-gray-200">
        {domains.map((domain) => (
          <div 
            key={domain.name}
            className="p-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {domain.name}
                </h3>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-lg font-semibold text-blue-600">
                    {formatPrice(domain.price)}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${domain.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      domain.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                    {domain.status}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onAddToCart(domain)}
                disabled={cart.find(item => item.name === domain.name)}
                className={`ml-4 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
                  ${cart.find(item => item.name === domain.name)
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                <Plus className="h-4 w-4 mr-2" />
                {cart.find(item => item.name === domain.name)
                  ? 'Đã thêm vào giỏ'
                  : 'Thêm vào giỏ'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {domains.length === 0 && (
        <div className="p-4 text-center text-gray-500">
          Không tìm thấy tên miền phù hợp.
        </div>
      )}
    </div>
  );
};

export default DomainList;