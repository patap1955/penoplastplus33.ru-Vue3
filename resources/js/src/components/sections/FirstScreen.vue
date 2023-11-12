<template>
    <section id="first-screen">
        <div class="containers first-screen">
            <div class="first-screen__left">
                <h1 class="first-screen__left-title animate__animated animate__zoomIn">Пенопласт ПСБС-25Ф для утепления фасадов с бесплатной доставкой</h1>
                <div class="first-screen__left-container">
                    <div class="first-screen__left-container-info">
                        <ul class="first-screen__left-container-info-list animate__animated animate__delay-03s animate__zoomIn">
                            <li class="first-screen__left-container-info-item">Собственное производство</li>
                            <li class="first-screen__left-container-info-item">Идеально ровные геометрические формы</li>
                            <li class="first-screen__left-container-info-item">Бесплатная доставка от 20 м.куб.</li>
                        </ul>
                        <div class="first-screen__left-container-info-button animate__animated animate__delay-06s animate__zoomIn">
                            <a href="#contacts" class="button button-primary">Оставить заявку</a>
                        </div>
                        <div class="first-screen__left-container-info-img animate__animated animate__zoomIn">
                            <Image img="first-screen-img-1.png" />
                        </div>
                        <div class="first-screen__absolut animate__animated animate__delay-06s">
                            <Image style="'first-screen__absolut-img'" img="first-screen-img-4.png" />
                        </div>
                    </div>
                    <div class="first-screen__left-container-img animate__animated animate__zoomIn">
                        <Image img="first-screen-img-2.png"></Image>
                    </div>
                </div>
            </div>
            <div class="first-screen__right animate__animated">
                <Image img="first-screen-img-3.png"></Image>
            </div>
        </div>
    </section>
</template>

<script>
import Image from "@/components/Image.vue";

export default {
    name: "FirstScreen",
    components: {Image}
}
</script>

<style scoped>

</style>
