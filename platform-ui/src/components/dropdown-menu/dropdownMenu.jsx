import { useState } from "react";


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState();
    const [categoriesList, setCategoriesList] = useState([
        {
            name: "Категорія 1",
            value: "Category 1"
        },
        {
            name: "Категорія 2",
            value: "Category 2"
        }])

    return (<div className="text-left md:text-center md:p-0">
        <div onClick={() => setIsOpen(state => !state)} className="text-black w-full pl-4 md:pl-0 font-medium text-[30px] hover:bg-amber-50 cursor-pointer">
            Категорії
        </div>

        {!isOpen || 
        <ul className="text-black text-[20px]">
            {categoriesList.map(item => {
                return <li className="pl-4 md:pl-0 shadow-lg p-2 hover:underline cursor-pointer" onClick={() => setCurrentCategory(item.value)}>{item.name}</li>
            })}
        </ul>}
    </div>)
}

export default DropdownMenu;