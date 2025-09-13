
const UserBlock = ({name="Dmytro", urlAvatar="url"}) => {
    return (
        <div className="w-full flex items-center gap-0.1 h-full">
            <div className="rounded-full bg-white w-[50px] h-[50px] "></div>
            <span className="px-4 text-[20px]">{name}</span>
        </div>
    )
}

export default UserBlock