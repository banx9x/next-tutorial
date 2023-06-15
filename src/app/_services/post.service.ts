interface GetPostsPlayload {
    page: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
}

interface GetPostsSucceeded {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}

export const getPosts = async ({ page }: GetPostsPlayload) => {
    const url = new URL("https://dummyjson.com/posts");
    url.searchParams.set("skip", String((+page - 1) * 30));

    const res = await fetch(url);
    const json = (await res.json()) as GetPostsSucceeded;

    return json;
};

interface GetPostByIdPayload {
    postId: number | string;
}

export const getPostById = async ({ postId }: GetPostByIdPayload) => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`);
    const json = (await res.json()) as Post;

    return json;
};

export interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
        id: number;
        username: string;
    };
}

interface GetPostCommentsPayload {
    postId: number | string;
}

interface GetPostCommentsSucceeded {
    comments: Comment[];
    total: number;
    skip: number;
    limit: number;
}

export const getPostComments = async ({ postId }: GetPostCommentsPayload) => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
    const json = (await res.json()) as GetPostCommentsSucceeded;

    return json;
};
