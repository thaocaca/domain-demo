import React, { useState } from 'react';
import { Search, ShoppingCart, Plus } from 'lucide-react';

// Search Bar Component
const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   placeholder-gray-400"
        placeholder="Search domain ..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
 
export default SearchBar;