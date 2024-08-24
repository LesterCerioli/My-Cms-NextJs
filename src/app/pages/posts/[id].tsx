import { useRouter } from 'next/router';
import { usePosts } from '../../context/PostContext';


const PostPage = () => {
    const { posts } = usePosts();
    const router = useRouter();
    const {id} = router.query;
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};