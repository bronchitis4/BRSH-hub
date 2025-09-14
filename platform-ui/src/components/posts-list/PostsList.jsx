const PostsListItem = ({title ="Час для себе: чому це не розкіш, а необхідність", date="13.09.2025", content = "У світі, де ми постійно кудись поспішаємо і намагаємось встигнути все, дуже легко забути про найголовніше — про себе. Ми відкладаємо відпочинок, хобі та мрії на потім, вважаючи, що це розкіш, яку ми не можемо собі дозволити. Але насправді, час для себе — це не примха, а життєво важлива потреба. Він допомагає відновити сили, очистити думки та повернути гармонію. Знайдіть сьогодні хоча б 30 хвилин, щоб зробити те, що приносить вам радість. Це може бути читання книги, прогулянка в парку або просто насолода чашкою чаю в тиші. Почніть із малого, і ви відчуєте, як ваше життя наповнюється енергією. У світі, де ми постійно кудись поспішаємо і намагаємось встигнути все, дуже легко забути про найголовніше — про себе. Ми відкладаємо відпочинок, хобі та мрії на потім, вважаючи, що це розкіш, яку ми не можемо собі дозволити. Але насправді, час для себе — це не примха, а життєво важлива потреба. Він допомагає відновити сили, очистити думки та повернути гармонію. Знайдіть сьогодні хоча б 30 хвилин, щоб зробити те, що приносить вам радість. Це може бути читання книги, прогулянка в парку"}) => {
    return(
        <div className="w-[100%] md:w-[80%] bg-white border border-gray-200 rounded-lg shadow-sm min-h-[200px]">
            <div className="w-full h-[50px] bg-blue-600 rounded-t text-left text-[2rem] font-bold px-4">{title.length > 50 ? title.slice(0, 50) + "..." : title}</div>
            <p className="text-black text-left p-4">{content.length > 200 ? content.slice(0, 200) + "..." : content}</p>
            <div className="text-left p-4 flex justify-between">
                <span className="text-black hover:underline cursor-pointer">Коментарі</span>
                <span className="text-black">{date}</span>
            </div>
        </div>
    );
}

const PostsList = () => {
    return (
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col items-center gap-y-4 py-5 px-2 md:px-0 md:p-10">
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
                <PostsListItem/>
            </div>
        </div>)
}

export default PostsList;