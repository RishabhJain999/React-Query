import React from "react";
import { type Post } from "../api/posts";
import PostCard from "./PostCard";

interface Props {
    posts: Post[];
}

const PostsList = React.memo(({ posts }: Props) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
});

export default PostsList;
