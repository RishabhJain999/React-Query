import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostsList from "../components/PostsList";
import Pagination from "../components/Pagination";
import Skeleton from "../components/Skeleton";

const PostsPage = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, isError } = usePosts(page);

    if (isLoading) return <Skeleton />;
    if (isError) return <p className="text-red-500">Something went wrong.</p>;
    if (!data || data.posts.length === 0)
        return <p className="text-gray-500">No posts found.</p>;

    const handleNext = () => {
        if (page < data.totalPages) {
            setPage((p) => p + 1);
        }
    };

    const handlePrev = () => {
        setPage((p) => Math.max(p - 1, 1));
    };

    return (
        <>
            {isFetching && (
                <p className="mb-2 text-xs text-gray-400">Refreshing data…</p>
            )}
            <PostsList posts={data.posts} />
            <Pagination
                page={page}
                totalPages={data.totalPages}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </>
    );
};

export default PostsPage;
