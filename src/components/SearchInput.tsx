import { CiLocationOn, CiSearch } from "react-icons/ci";

type Props = {
  city: string;
  setCity: (value: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onLocationClick: () => void;
};

const SearchInput: React.FC<Props> = ({
  city,
  setCity,
  onSearch,
  onLocationClick,
}) => {
  return (
    <form
      onSubmit={onSearch}
      className="flex items-center justify-center gap-2"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white shadow-md w-64"
      />
      <button
        type="button"
        className="text-white hover:text-gray-300"
        onClick={onLocationClick}
      >
        <CiLocationOn size={30} />
      </button>
      <button type="submit" className="text-white hover:text-gray-300">
        <CiSearch size={30} />
      </button>
    </form>
  );
};

export default SearchInput;
