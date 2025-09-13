import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import PostsList from "../components/posts-list/PostsList";

const MainPage = () => {
    return (
        <div className="flex w-full h-screen">
            <div className="w-[20%] ">
                <Sidebar />
            </div>
            <div className="w-full h-full flex flex-col">
                <div className="flex-shrink-0">
                    <Header />
                </div>
                <div className="flex-1 overflow-hidden">
                    <PostsList />
                </div>
            </div>
        </div>
    )
}

export default MainPage;