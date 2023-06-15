"use client";

import Image from "next/image";

interface ErrorProps {
    error: Error;
}

export default function Error(props: ErrorProps) {
    console.log(props);

    return (
        <main>
            <h1>Úi, có lỗi rồi: {props.error.message}</h1>
        </main>
    );
}
