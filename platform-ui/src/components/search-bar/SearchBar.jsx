import { useState } from "react"

const SearchBar = () => {
    const [value, setValue] = useState("");
    return (
        <form className="w-full flex justify-center">
            <input type="text" className="h-[40px] block w-[90%] md:w-[50%] p-4 bg-white text-black rounded-full" placeholder="Пошук..." onChange={(e) => setValue(e.target.value)}></input>
        </form>
    )
}

export default SearchBar;