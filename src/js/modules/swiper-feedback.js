import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function swiperFeedback() {
    const swiper1 = new Swiper('#feedback-swiper-1', {
        a11y: false,
        slidesPerView: "auto",
        autoHeight: true,
        spaceBetween: 12,
        grabCursor: true,
        direction: 'vertical',
        freeMode: true,
        speed: 5000,
        autoplay: {
            delay: 0,
            desableOnInteraction: true
        },
    });

    const swiper2 = new Swiper('#feedback-swiper-2', {
        a11y: false,
        slidesPerView: "auto",
        autoHeight: true,
        spaceBetween: 12,
        grabCursor: true,
        direction: 'vertical',
        freeMode: true,
        speed: 6000,
        autoplay: {
            delay: 0,
            desableOnInteraction: false,
            reverseDirection: true
        },
    });

    const swiper3 = new Swiper('#feedback-swiper-3', {
        a11y: false,
        slidesPerView: "auto",
        autoHeight: true,
        spaceBetween: 12,
        grabCursor: true,
        direction: 'vertical',
        freeMode: true,
        speed: 5000,
        autoplay: {
            delay: 1000,
            desableOnInteraction: true
        },
    });
}