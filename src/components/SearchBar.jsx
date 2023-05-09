import React from "react";

const SearchBar = ({ data, setFilterData }) => {
  const handleChange = (evet) => {
    const searchTerm = evet.target.value.toLowerCase();
    const filterResult = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setFilterData(filterResult);
  };

  return (
    <div className=" flex justify-center py-7">
      <input
        type="text"
        onChange={handleChange}
        placeholder="search your favourite music"
        className=" w-1/3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default SearchBar;
