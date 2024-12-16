import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProductsRequest } from '../redux/actions/productActions';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchProductsRequest(query));
  };

  return (
    <div className="flex items-center space-x-2 p-4 bg-gray-100">
      <div className="relative w-full">
        <input 
          type="text"
          value={query}
     //     onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm sản phẩm"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
  //        onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;