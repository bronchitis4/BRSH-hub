import { useMemo } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("fasfa")
        navigate("/");
    }

    return (
        <div className="w-[90%] md:w-[300px] shadow-lg m-auto mt-50 rounded-b-md">
            <div className="bg-blue-600 h-[50px] w-full text-[2rem] font-bold rounded-t-md">
                Увійти
            </div>
            <form className="w-full p-4 flex flex-col gap-y-2">
                <input type="text" placeholder="Пошта..." className="text-black rounded-full px-2 w-full h-[45px] focus:outline-none bg-gray-100"/>
                <input type="text" placeholder="Пароль..." className="text-black rounded-full px-2 w-full h-[45px] focus:outline-none bg-gray-100 "/>
                <button onClick={handleSubmit} className="bg-blue-600 font-bold p-2 rounded cursor-pointer">Увійти</button>
            </form>
        </div>
    );
}

export default LoginForm;