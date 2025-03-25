function SearchBox({ placeholder, onSearch }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
      className="border p-2 w-full"
    />
  );
}

export default SearchBox;