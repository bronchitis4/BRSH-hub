import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import CreatePostModalWindow from "../create-post-window/CreatePostModalWindow";

const Layout = ({ children }) => (
  <div className="flex w-full h-screen relative">
    <div className="w-[15%] md:w-[20%]">
      <Sidebar />
    </div>
    <div className="w-[85%] md:w-[80%] h-full flex flex-col">
      <div className="flex-shrink-0">
        <Header />
      </div>
      <div className="flex-1 overflow-hidden md:w-auto">
        {children}
      </div>
    </div>
    <CreatePostModalWindow />
  </div>
);

export default Layout;