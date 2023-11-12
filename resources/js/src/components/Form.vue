<template>
    <form :class="style" @submit.prevent="onSubmit($el)">
        <slot></slot>
    </form>
</template>

<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster"
export default {
    name: "Form",
    data() {
        return {

        }
    },
    props: {
        style: {
            type: String,
            default: ""
        },
    },
    methods: {
        onSubmit(el) {
            const formData = new FormData(el)
            const toaster = createToaster({ position: "top-right" })
            axios.post('/api/feedback', formData)
                .then(res => {
                    el.reset()
                    toaster.success(`Ваше сообщение успешно отправленно !!!`, toaster)
                    this.$emit('onSubmit')
                })
            .catch(e => {
                console.log(e)
                //this.$toast.warning(`Hey! I'm here`)
            })
        }
    }
}
</script>

<style scoped>

</style>
