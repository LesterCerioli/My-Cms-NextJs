import PostForm from "@/app/components/PostForm"
import PostList from "@/app/components/PostList"


const AdminPage = () => {
    return (
        <div>
            <h1>Admin Pannel</h1>
            <PostForm />
            <h2>Your Post</h2>
            <PostList />
        </div>
    );
};
export default AdminPage;