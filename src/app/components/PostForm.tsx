import { useState } from "react";
import { usePosts } from "../context/PostContext";

const PostForm = () => {
    const { addPost } = usePosts();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addPost({ title, content, id: 0});
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input 
                    type="text"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                
                />
            </div>
            <button type="submit">Create Post</button>
            
        </form>
    );
};
export default PostForm;