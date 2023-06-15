import Image from "next/image";
import { Comment } from "../_services/post.service";
import { getUserById } from "../_services/user.service";
import { User } from "../_services/user.service";

interface CommentProps {
    comment: Comment & {
        user: User;
    };
}

export default function Comment({ comment }: CommentProps) {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                    src={comment.user.image}
                    alt={comment.user.firstName}
                    width={30}
                    height={30}
                    style={{ borderRadius: "50%", marginRight: 10 }}
                />

                <h4 style={{ margin: 0 }}>
                    {comment.user.firstName} {comment.user.lastName}
                </h4>
            </div>

            <p>{comment.body}</p>
        </div>
    );
}
