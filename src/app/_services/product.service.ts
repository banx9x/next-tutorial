interface GetProductsPayload {
    page: number;
}

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string;
}

interface GetProductsSucceeded {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export const getProducts = async ({ page }: GetProductsPayload) => {
    const res = await fetch("https://dummyjson.com/products");
    const json = (await res.json()) as GetProductsSucceeded;

    return json;
};

interface GetProductByIdPayload {
    productId: number | string;
}

export const getProductById = async ({ productId }: GetProductByIdPayload) => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const json = await res.json();

    return json;
};
