import "./Search.css";

export default function SearchComponent() {
  return (
    <div className="search-section">
      <label htmlFor="searchbar"></label>
      <input id="searchbar" placeholder="Search contacts" />
    </div>
  );
}
