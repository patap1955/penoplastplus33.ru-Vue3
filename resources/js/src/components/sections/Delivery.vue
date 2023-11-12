<template>
    <section id="delivery">
        <div class="containers delivery">
            <div class="delivery__left">
                <h2 class="delivery__left-title animate__animated">
                    <span class="delivery__left-title-base">При заказе объемом</span>
                    <br class="br-delivery">
                    <span class="delivery__left-title-volume">от 20м<sup>3</sup></span>
                    <br>
                    <span class="delivery__left-title-base">мы привезем заказ на стройку или ваш склад</span>
                </h2>
                <h2 class="delivery__left-title-bold animate__animated">бесплатно</h2>
                <p class="delivery__left-text animate__animated animate__delay-03s">Узнайте стоимость с учётом возможных скидок и доставки</p>
                <Form @onSubmit="clickChecked" :style="'delivery__left-form animate__animated animate__delay-06s'">
                    <input @change="changeInput($event)" class="input input-text" type="text" name="name" placeholder="Имя" required/>
                    <input @change="changeInput($event)" class="input input-text" type="tel" v-mask="'+7 (###) ### ##-##'" name="phone" placeholder="Телефон без +7" required />
                    <input type="hidden" name="subject" value="Просьба позвонить"/>
                    <div class="form-group-input">
                        <input @click="clickChecked" class="input input-checkbox" id="checkbox" type="checkbox"/>
                        <label>Даю согласие на обработку cвоих персональных данных</label>
                    </div>
                    <div class="delivery__left-form-button">
                        <button type="submit" class="button button-default" :disabled="checkedCheckbox" >Оставить заявку</button>
                    </div>
                </Form>
            </div>
            <div class="delivery__right animate__animated">
                <Image style="'delivery__right-img'" img="delivery-img-1.png" />
            </div>
        </div>
    </section>
</template>

<script>
import Image from "@/components/Image.vue";
import Form from "@/components/Form.vue";
import {mask} from 'vue-the-mask'
export default {
    name: "Delivery",
    components: { Image, Form },
    directives: {mask},
    data() {
        return {
            checkedCheckbox: true,
        }
    },
    methods: {
        clickChecked() {
            this.checkedCheckbox = !this.checkedCheckbox

        },
        changeInput(event) {
            event.target.value == "" ? event.target.classList.add('is-error') : event.target.classList.remove('is-error')
        }
    }
}
</script>

<style scoped>

</style>
