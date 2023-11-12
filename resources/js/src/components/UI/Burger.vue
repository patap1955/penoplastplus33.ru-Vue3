<template>
    <div @click="burgerClick" class="burger">
        <span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="burger-span burger-span-top" d="M0 0H40V4H0V0Z" fill="#03185B"/>
                <path class="burger-span burger-span-center" d="M0 12H40V16H0V12Z" fill="#03185B"/>
                <path class="burger-span burger-span-bottom" d="M0 24H40V28H0V24Z" fill="#03185B"/>
            </svg>
        </span>
    </div>
</template>

<script>
import burger from '@/components/helpers/burger.js'
export default {
    name: "Burger",
    methods: {
        burgerClick() {
            burger()
        }
    }
}
</script>

<style scoped>

</style>
