import DomainList from "../../components/Domain/DomainList";
import { useEffect, useState } from "react";
import SearchBar from "../../components/Domain/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchDomains, setSearchTerm, filterDomains } from "../../stores/actions/domaintAction";

const HomePage = () => {
  const dispatch = useDispatch();
  //const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const domains = useSelector((state) => state.domains.filteredDomains);
  // Sample domain data
  // const filteredDomains = domains.filter((domain) =>
  //   domain.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleSearch = (query) => {
    dispatch(setSearchTerm(query)); // Lưu search term
    dispatch(filterDomains());
  };

  const handleAddToCart = (domain) => {
    setCart((prevCart) => [...prevCart, domain]);
    console.log(domain);
  };

  useEffect(() => {
    dispatch(fetchDomains()); // Fetch domains khi tải trang
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Thanh tìm kiếm */}
      <SearchBar onSearch={handleSearch} />

      {/* Danh sách domain */}
      <DomainList
        domains={domains}
        cart={cart}
        onAddToCart={handleAddToCart}
      />

      {/* Thông báo khi không tìm thấy domain */}
      {/* {filteredDomains.length === 0 && (
        <div className="mt-4 text-center text-gray-500">
          Không tìm thấy tên miền phù hợp.
        </div>
      )} */}
    </div>
  );
};

export default HomePage;
