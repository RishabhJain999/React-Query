import { type Post } from "../api/posts";

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {
    return (
        <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow transition">
            <h3 className="text-base font-semibold text-gray-800">
                {post.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
                {post.body}
            </p>
        </div>
    );
};

export default PostCard;
