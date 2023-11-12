<template>
    <section id="catalog">
        <div class="containers catalog">
            <h2 class="catalog__title">Каталог</h2>
            <div class="catalog__container">
                <div class="catalog__left">
                    <div class="catalog__left-list">
                        <div class="catalog__left-item">
                            <div class="catalog__left-item-header animate__animated">
                                <Image style="'catalog__left-item-header-img'" img="product-1.png" />
                            </div>
                            <div class="catalog__left-item-footer animate__animated animate__delay-03s">
                                <p class="catalog__left-item-footer-product">Листовой пенопласт ПСБС-25Ф</p>
                                <h2 class="catalog__left-item-footer-price">3 800 р/м<sup>3</sup></h2>
                            </div>
                        </div>
                        <div class="catalog__left-item">
                            <div class="catalog__left-item-header animate__animated">
                                <Image style="'catalog__left-item-header-img'" img="product-2.png" />
                            </div>
                            <div class="catalog__left-item-footer animate__animated animate__delay-03s">
                                <p class="catalog__left-item-footer-product">Гранулы для пенопласта</p>
                                <h2 class="catalog__left-item-footer-price">от 1700 р/м<sup>3</sup></h2>
                            </div>
                        </div>
                        <div class="catalog__left-item">
                            <div class="catalog__left-item-header animate__animated">
                                <Image style="'catalog__left-item-header-img'" img="product-3.png" />
                            </div>
                            <div class="catalog__left-item-footer animate__animated animate__delay-03s">
                                <p class="catalog__left-item-footer-product">Дробленый пеноплааст</p>
                                <h2 class="catalog__left-item-footer-price">700 р/м<sup>3</sup></h2>
                            </div>
                        </div>
                        <div class="catalog__left-item">
                            <div class="catalog__left-item-header animate__animated">
                                <Image style="'catalog__left-item-header-img'" img="product-4.png" />
                            </div>
                            <div class="catalog__left-item-footer animate__animated animate__delay-03s">
                                <p class="catalog__left-item-footer-product">Сырье для пенопласта</p>
                                <h2 class="catalog__left-item-footer-price">113 р/кг</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="catalog__right animate__animated">
                    <h2 class="catalog__right-title">Листовой пенопласт <br class="catalog__right-title-br1">для утепления фасадов <br class="catalog__right-title-br2">и перекрытий</h2>
                    <p class="catalog__right-text">При выборе марки пенопласта для разных задач мы исходим из принципа разумной достаточности.</p>
                    <div class="catalog__right-button">
                        <a href="#" class="button button-default">Рассчитать объём</a>
                    </div>
                    <p class="catalog__right-span">Как выбрать марку и рассчитать объем пенопласта?</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Image from "@/components/Image.vue";
export default {
    name: "CatalogSection",
    components: {Image}
}
</script>

<style scoped>

</style>
