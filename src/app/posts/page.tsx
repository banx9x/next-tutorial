import { NextPageContext } from "next";
import { getPosts } from "../_services/post.service";
import Link from "next/link";
import Pagination from "../_components/Pagination";

interface PostsPageProps {
    params: {};
    searchParams: {
        page?: string;
    };
}

export default async function PostsPage({
    params,
    searchParams,
}: PostsPageProps) {
    const { page = "1" } = searchParams;

    const data = await getPosts({ page });

    const totalPage = Math.ceil(data.total / data.limit);
    const currentPage = Number(page);

    return (
        <main>
            <h1>Posts List</h1>

            {data.posts.map((post) => (
                <article key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                </article>
            ))}

            <Pagination totalPage={totalPage} currentPage={currentPage} />
        </main>
    );
}
