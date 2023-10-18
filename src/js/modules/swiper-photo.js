import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default function swiperPhoto() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 32,
        navigation: {
            nextEl: '#swiper-next',
            prevEl: '#swiper-prev',
        },
        modules: [Navigation]
    });
}