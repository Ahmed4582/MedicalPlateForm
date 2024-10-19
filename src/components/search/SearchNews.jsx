import { LuSearch } from "react-icons/lu";
import {t} from "i18next"
function SearchNews() {
const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
  return (

    <div className="flex items-center justify-center max-w-md mx-auto px-3">
      <div className="relative w-full">
        <input
          type="text"
          placeholder={t("search")}
           className={`w-full py-4 pl-12 pr-12 border border-gray-300 rounded-lg shadow-md bg-white focus:outline-none placeholder-gray-400 ${
            storedLanguage === 'en' ? 'text-left' : 'text-right'}`}
          
        />
        <LuSearch
          className={`absolute top-4 w-6 h-6 text-gray-400 pointer-events-none ${
            storedLanguage === 'en' ? 'left-3' : 'right-3'
          }`}
        />
      </div>
    </div>
  )
}

export default SearchNews
