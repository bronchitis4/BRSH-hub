import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import PostsList from "../components/posts-list/PostsList";
import CreatePostModalWindow from "../components/create-post-window/CreatePostModalWindow";
import Layout from "../components/layouts/Layout";

const MainPage = () => {
    return (
        <Layout>
            <PostsList />
        </Layout>
    )
}

export default MainPage;