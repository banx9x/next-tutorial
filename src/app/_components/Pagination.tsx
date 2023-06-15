import Link from "next/link";
import { UrlObject } from "url";

interface PaginationProps {
    totalPage: number;
    currentPage: number;
}

export default function Pagination({
    totalPage,
    currentPage,
}: PaginationProps) {
    const buttons = Array(totalPage)
        .fill(null)
        .map((_, index) => {
            const page = index + 1;
            const isCurrentPage = page === currentPage;

            return (
                <Link
                    key={page}
                    href={page == 1 ? "/posts" : `/posts/page/${page}`}
                    className={isCurrentPage ? "active" : ""}
                >
                    {page}
                </Link>
            );
        });

    return <div>{buttons}</div>;
}
