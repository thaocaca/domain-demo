// DomainList
import DomainItem from "./DomainItem";

const DomainList = ({ domains, cart, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y divide-gray-200">
        {domains.map((domain, index) => (
          <DomainItem
            key={index}
            domain={{
              ...domain,
              prices: domain.prices || [],
            }}
            cart={cart} // Truyền cart vào đây
            onAddToCart={onAddToCart} // Truyền hàm xử lý vào đây
          />
        ))}
      </div>
      {/* {domains.length === 0 && (
        <div className="p-4 text-center text-gray-500">
          Không tìm thấy tên miền phù hợp.
        </div>
      )} */}
    </div>
  );
};

export default DomainList;
