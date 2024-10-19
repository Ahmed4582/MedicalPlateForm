import { IoMdSearch } from "react-icons/io";

export default function Search() {
  const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    console.log(`Search query: ${query}`);
    
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-[32rem]"
        autoComplete="off"
      >
        <input
          type="text"
          name="search"
          placeholder={storedLanguage === "ar" ? "بحث..." : "Search..."}
          className={`w-full py-2 ${
            storedLanguage === "ar" ? "pr-6 pl-4" : "pl-6 pr-4"
          } bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white-500`}
          style={{ textAlign: storedLanguage === "ar" ? "right" : "left" }}
        />
        <button
          type="submit"
          className={`absolute ${
            storedLanguage === "ar" ? "left-2" : " right-2"
          } top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none`}
        >
          <IoMdSearch size={24} />
        </button>
      </form>
    </div>
  );
}
