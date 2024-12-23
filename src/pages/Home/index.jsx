import { ShoppingCart } from "lucide-react";
import DomainList from "../../components/Domain";
import { useState } from "react";
import SearchBar from "../../components/SearchDomain";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  
  // Sample domain data
  const domains = [
    { name: 'example.com', price: 1200000, status: 'Active', lastChecked: '2024-12-22' },
    { name: 'test-domain.com', price: 890000, status: 'Active', lastChecked: '2024-12-21' },
    { name: 'mywebsite.com', price: 2500000, status: 'Active', lastChecked: '2024-12-23' },
    { name: 'newdomain.com', price: 750000, status: 'Active', lastChecked: '2024-12-20' },
    { name: 'anotherdomain.com', price: 1500000, status: 'Active', lastChecked: '2024-12-22' },
  ];

  const filteredDomains = domains.filter(domain =>
    domain.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (domain) => {
    if (!cart.find(item => item.name === domain.name)) {
      setCart([...cart, domain]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Cart Summary */}
      <div className="mb-4 flex items-center justify-end space-x-2">
        <ShoppingCart className="h-5 w-5 text-gray-600" />
        <span className="text-gray-600">
          {cart.length} domain{cart.length !== 1 ? 's' : ''} trong giỏ hàng
        </span>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Domain List */}
      <DomainList 
        domains={filteredDomains}
        cart={cart}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default HomePage;