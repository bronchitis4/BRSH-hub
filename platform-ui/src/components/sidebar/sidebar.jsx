import { useState } from "react";
import DropdownMenu from "../dropdown-menu/dropdownMenu";
import UserBlock from "../user-block/user-block";
import CloseCross from "./close-cross.svg?react";
import MenuIcon from "./menu_icon.svg?react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {!isOpen &&
        <div className="h-[60px] text-left bg-blue-600" onClick={() => setIsOpen(state => !state)}>
          <MenuIcon className="w-15 h-auto cursor-pointer"/>
        </div>
      }
      {isOpen &&
        <div className="absolute w-full md:static md:w-full h-screen bg-white shadow-lg  select-none">
          <div className="w-full h-[60px] bg-blue-600 border-b border-black flex items-center px-3">
            <UserBlock />
            <CloseCross className="w-10 h-10 cursor-pointer none md:hidden" onClick={() => setIsOpen(false)}/>
          </div>
          <DropdownMenu />
        </div>}
    </>
  )
}

export default Sidebar;