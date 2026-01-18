import {
    useQuery,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import { getPosts, type PostsResponse } from "../api/posts";
import { useEffect } from "react";

export const usePosts = (page: number) => {
    const queryClient = useQueryClient();

    const query = useQuery<PostsResponse>({
        queryKey: ["posts", page],
        queryFn: () => getPosts(page),
        placeholderData: keepPreviousData,
    });

    useEffect(() => {
        if (!query.data) return;

        const nextPage = page + 1;

        if (nextPage <= query.data.totalPages) {
            queryClient.prefetchQuery({
                queryKey: ["posts", nextPage],
                queryFn: () => getPosts(nextPage),
            });
        }
    }, [page, query.data, queryClient]);

    return query;
};
