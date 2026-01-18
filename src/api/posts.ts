import axios from "axios";

export interface Post {
    userId: number,
    id: number
    title: string,
    body: string
}


export interface PostsResponse {
    posts: Post[];
    totalPages: number;
}

const LIMIT = 6;

export const getPosts = async (page: number): Promise<PostsResponse> => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            params: {
                _page: page,
                _limit: LIMIT,
            },
        }
    );

    const totalCount = Number(response.headers["x-total-count"]);
    const totalPages = Math.ceil(totalCount / LIMIT);

    return {
        posts: response.data,
        totalPages,
    };
};
