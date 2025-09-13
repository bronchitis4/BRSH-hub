import SearchBar from "../search-bar/SearchBar";

const Header = () => {
    return (
        <div className="bg-blue-600 flex justify-center items-center w-full h-[60px] border-b border-black">
            <SearchBar/>
        </div>
    )
}

export default Header;