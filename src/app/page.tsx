import Counter from "@/app/_components/Counter";
import { getProducts } from "@/app/_services/product.service";
import Image from "next/image";
import Link from "next/link";

import avatar from "@/app/_assets/avatar.jpeg";

export default async function Home() {
    const data = await getProducts({ page: 1 });

    return (
        <main>
            <h1>Welcome to Next.js</h1>

            <Image src={avatar} width={500} height={500} alt="Avatar" />

            {data.products.map((product) => (
                <article key={product.id}>
                    <Link href={`/products/${product.id}`}>
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={350}
                            height={200}
                            style={{
                                objectFit: "cover",
                                objectPosition: "50% 50%",
                            }}
                        />
                        <h3>{product.title}</h3>
                    </Link>
                </article>
            ))}
        </main>
    );
}
