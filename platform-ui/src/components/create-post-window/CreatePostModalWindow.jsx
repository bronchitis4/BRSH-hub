import { useState } from "react";
import Plus from "./plus.svg?react"
import CloseCross from "./close-cross.svg?react";

const CreatePostModalWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setIsOpen(true)} className="absolute md:w-15 md:h-15  w-13 h-13 left-1 md:right-10 md:left-auto bottom-5 bg-white rounded-full hover:bg-amber-100 cursor-pointer shadow-lg flex justify-center items-center ">
                <Plus className="md:w-8 md:h-8 w-8 h-8" />
            </div>
            {isOpen &&
                <div className="right-[0px] top-[0px] w-screen h-screen  bg-gray-500/50 shadow-lg absolute left-auto">
                    <div className="rounded md:w-[30%] absolute bg-white md:right-[35%]  w-[90%] right-[5%] top-[100px]">
                        <div className="w-full h-[50px] bg-blue-600 rounded-t text-left text-[2rem] font-bold px-4 flex justify-end items-center">
                            <CloseCross className="w-10 h-10 cursor-pointer" onClick={() => setIsOpen(false)} />
                        </div>
                        <form className="w-full p-4 flex flex-col gap-y-2">
                            <input type="text" placeholder="Заголовок..." className="text-black  px-2 w-full h-[45px] focus:outline-none bg-gray-100" />
                            <textarea type="text" placeholder="Контент..." className="text-black  p-2 w-full h-[45px] focus:outline-none bg-gray-100 max-h-[50vh] resize-y" />
                            <input type="text" placeholder="Теги..." className="text-black  px-2 w-full h-[45px] focus:outline-none bg-gray-100" />
                            <button className="bg-blue-600 font-bold p-2 rounded cursor-pointer">Створити пост</button>
                        </form>
                    </div>
                </div>}
        </div>
    )
}

export default CreatePostModalWindow;