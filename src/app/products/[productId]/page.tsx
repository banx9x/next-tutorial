import { getProductById } from "@/app/_services/product.service";

// Import Swiper styles
import "swiper/css";
import ProductImageCarousel from "@/app/_components/ProductImageCarousel";
import { Metadata, ResolvingMetadata } from "next";

interface ProductDetailParams {
    productId: string;
}

interface ProductDetailProps {
    params: ProductDetailParams;
}

export default async function ProductDetail({
    params: { productId },
}: ProductDetailProps) {
    const data = await getProductById({ productId });

    return (
        <main>
            <h1>{data.title}</h1>

            <ProductImageCarousel images={data.images} />
        </main>
    );
}

export async function generateMetadata(
    { params }: ProductDetailProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { productId } = params;

    const data = await getProductById({ productId });

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            type: "article",
            url: "https://mywebsite.com/",
            siteName: "My Website",
            title: data.title,
            description: data.description,
            images: [
                {
                    url: data.thumbnail,
                },
            ],
        },
    };
}
