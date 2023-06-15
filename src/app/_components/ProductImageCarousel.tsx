"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProductImageCarouselProps {
    images: string[];
}

export default function ProductImageCarousel({
    images,
}: ProductImageCarouselProps) {
    const slides = images.map((img) => (
        <SwiperSlide style={{ width: 600, height: 400 }} key={img}>
            <Image src={img} fill alt="" />
        </SwiperSlide>
    ));

    return <Swiper style={{ width: 600 }}>{slides}</Swiper>;
}
