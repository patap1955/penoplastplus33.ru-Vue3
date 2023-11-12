<template>
    <Header />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<script>
import Header from "@/components/layouts/Header.vue"
import Footer from "@/components/layouts/Footer.vue";
export default {
    components: {
        Footer,
        Header,

    },
    name: "App",
    data() {
        return {
            username: "Михаил"
        }
    }
}
</script>

<style scoped>

</style>
