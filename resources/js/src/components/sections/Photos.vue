<template>
    <section id="photo">
        <div class="containers photo">
            <h2 class="photo__title">С 2007 года мы поставили пенопласт <br class="photo__title-br"><span class="photo__title-span">для утепления более 170 домов, офисов по всей Пензе</span></h2>
        </div>
        <div class="photo__gallery">
            <div class="swiperPhoto">
                <Swiper
                    :allow-touch-move="true"
                    :slides-per-view="5"
                    :auto-height="true"
                    :loop="true"
                    :breakpoints="{
                        300: {
                        slidesPerView: 1.1,
                        },
                        375: {
                            slidesPerView: 1.33,
                        },
                        481: {
                            slidesPerView: 2.2,
                        },
                        1025: {
                            slidesPerView: 3.2,
                        },
                        1291: {
                            loop: false,
                            slidesPerView: 5,
                        },
                    }"

                >

                        <SwiperSlide v-for="item in swiperImg" :key="item.id" style="height: 100%">
                            <a data-fancybox="gallery" :href="`/build/assets/img/${item.name}`">
                                <Image :style="'photo__gallery-img'" :img="item.name"></Image>
                            </a>
                        </SwiperSlide>

                </Swiper>
            </div>
        </div>
    </section>

</template>

<script>
import Image from "@/components/Image.vue";
import { Swiper, SwiperSlide } from "swiper/vue"
import { Fancybox } from "@fancyapps/ui";
//import ''
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import {ref} from "vue"
import "swiper/css"
export default {
    name: "Photos",
    components: { Image, Swiper, SwiperSlide },
    props: {
        options: Object,
    },
    setup() {
        const swiperImg = ref([
            {
                id: 1,
                name: "photo-img-1.jpg"
            },
            {
                id: 2,
                name: "photo-img-2.jpg"
            },
            {
                id: 3,
                name: "photo-img-3.jpg"
            },
            {
                id: 4,
                name: "photo-img-4.jpg"
            },
            {
                id: 5,
                name: "photo-img-5.jpg"
            }
        ])
        return { swiperImg }
    },
    mounted() {
        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    updated() {
        Fancybox.unbind(this.$refs.container);
        Fancybox.close();

        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    unmounted() {
        Fancybox.destroy();
    },
}
</script>

<style scoped>

</style>
