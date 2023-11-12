<template>
    <StickyElement :offset-top="50" :stuckClass="'navbar_scrolled'">
        <header class="headerFixed" id="fixedHeader">
            <div class="containers header">
                <div class="header__logo">
                    <router-link to="/">
                        <Image img="logo.svg" alt="логотип" title="логотип"></Image>
                    </router-link>
                </div>
                <nav class="header__nav">
                    <ul class="nav-list nav-list-header">
                        <li class="nav-item"><router-link class="nav-link" to="/">Главная</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/catalog">Каталог</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/about">О компании</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/contacts">Контакты</router-link></li>
                    </ul>
                </nav>
                <div class="header__phone">
                    <a class="header__phone-link" href="tel:++7 961 113 7777">+7 961 113 7777</a>
                </div>
            </div>
            <Burger />
        </header>
    </StickyElement>
</template>

<script>
import Image from "@/components/Image.vue";
import StickyElement from 'vue-sticky-element';
import Burger from "@/components/UI/Burger.vue";
export default {
    components: {Burger, Image, StickyElement },
    name: "Header",
}
</script>

<style scoped>

</style>

