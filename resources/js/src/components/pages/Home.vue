<template>
    <FirstScreen />
    <catalog-section />
    <Delivery />
    <Pluses />
    <Photos />
    <Calculator />
    <contacts-section />
</template>

<script>
import FirstScreen from "@/components/sections/FirstScreen.vue";
import CatalogSection from "@/components/sections/CatalogSection.vue";
import Delivery from "@/components/sections/Delivery.vue";
import Pluses from "@/components/sections/Pluses.vue";
import ContactsSection from "@/components/sections/ContactsSection.vue";
import Photos from "@/components/sections/Photos.vue";
import Calculator from "@/components/sections/Calculator.vue";
export default {
    name: "Home",
    components: {Calculator, Photos, ContactsSection, Pluses, Delivery, CatalogSection, FirstScreen}
}
</script>

<style scoped>

</style>
