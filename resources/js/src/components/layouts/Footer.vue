<template>
    <footer id="footer">
        <div class="containers footer">
            <div class="footer__logo">
                <div class="footer__logo-img">
                    <router-link to="/">
                        <Image img="logo.svg" />
                    </router-link>
                </div>
                <p class="footer__logo-text">© {{ getDate() }}, Все права защищены</p>
            </div>
            <div class="footer__politics"><router-link class="footer__politics-link" to="/">Политика конфиденциальности</router-link></div>
            <div class="footer__development">
                <p class="footer__development-text">Сайт разработан компанией <br class="footer__development-text-br"><a class="footer__development-text-link" href="https://alex-media.ru" target="_blank">ALEX–MEDIA</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
import Image from "@/components/Image.vue";
export default {
    name: "Footer",
    data() {
        return {
            date: null
        }
    },
    components: {Image},
    methods: {
        getDate() {
            const date = new Date()
            return this.date = date.getFullYear()
        }
    }
}
</script>

<style scoped>

</style>
