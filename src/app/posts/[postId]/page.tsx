import { Metadata, NextPageContext } from "next";
import Link from "next/link";
import { getPostById, getPostComments } from "@/app/_services/post.service";
import Comment from "@/app/_components/Comment";
import { getUserById } from "@/app/_services/user.service";
import CommentForm from "@/app/_components/CommentForm";

interface PostPageProps {
    params: {
        postId: string;
    };
}

export default async function PostsPage({ params }: PostPageProps) {
    const { postId } = params;

    const postData = await getPostById({ postId });
    const commentsData = await getPostComments({ postId });

    const users = await Promise.all(
        commentsData.comments.map((comment) =>
            getUserById({ userId: comment.user.id })
        )
    );

    return (
        <main>
            <div>
                <h1>{postData.title}</h1>
                <p>{postData.body}</p>
            </div>

            <div>
                <h2>Comments</h2>

                {commentsData.comments
                    .map((comment) => ({
                        ...comment,
                        user: users.find((user) => user.id == comment.user.id)!,
                    }))
                    .map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}

                <CommentForm postId={postId} />
            </div>
        </main>
    );
}

export async function generateMetadata({
    params: { postId },
}: PostPageProps): Promise<Metadata> {
    const postData = await getPostById({ postId });

    return {
        title: postData.title,
        description: postData.body,
        openGraph: {
            type: "article",
            url: "https://mywebsite.com/",
            siteName: "My Website",
            title: postData.title,
            description: postData.body,
        },
    };
}
