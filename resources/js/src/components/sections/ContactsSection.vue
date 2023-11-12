<template>
    <section id="contacts">
        <div class="contacts">
            <div class="contacts__info-container animate__animated">
                <div class="containers">
                    <h2 class="contacts__info-title">Контакты</h2>
                    <div class="contacts__info-block">
                        <div class="contacts__info-phones">
                            <p class="contacts__info-phones-title">Телефоны</p>
                            <div class="contacts__info-phones-block">
                                <a class="contacts__info-phones-link" href="tel:+7 906 397 65-28">+7 906 397 65-28</a>
                                <a class="contacts__info-phones-link" href="tel:8 800 700 54-23">8 800 700 54-23</a>
                            </div>
                        </div>
                        <div class="contacts__info-from">
                            <p class="contacts__info-from-title">Адрес</p>
                            <p class="contacts__info-from-text">г. Владимир,<br class="contacts__info-from-text-br"> ул. Фабричная, д. 1</p>
                        </div>
                        <div class="contacts__info-mode">
                            <p class="contacts__info-mode-title">Режим работы</p>
                            <p class="contacts__info-mode-text">Пн-Пт: 08:00 - 18:00; Сб-Вс: выходные дни</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contacts__form-container animate__animated animate__delay-03s">
                <div class="containers">
                    <h3 class="contacts__form-title">Напишите директору</h3>
                    <Form @onSubmit="clickChecked" :style="'contacts__form'">
                        <div class="contacts__form-input-container">
                            <div class="contacts__form-input-block">
                                <input @change="changeInput($event)" name="name" type="text" placeholder="Имя" required />
                                <input @change="changeInput($event)" name="phone" type="tel" v-mask="'+7 (###) ### ##-##'" placeholder="Телефон без +7" required />
                                <input type="hidden" name="subject" value="Письмо директору"/>
                            </div>
                            <div class="contacts__form-textarea-block">
                                <textarea name="text" placeholder="Ваше сообщение"></textarea>
                            </div>
                        </div>
                        <div class="contacts__form-checkbox-container">
                            <input @click="clickChecked" class="contacts__form-checkbox" type="checkbox">
                            <label class="contacts__form-checkbox-label">Даю согласие на обработку cвоих персональных данных</label>
                        </div>
                        <div class="contacts__form-button">
                            <button class="button button-default" :disabled="checkedCheckbox">Оставить заявку</button>
                        </div>
                    </Form>
                </div>
            </div>
            <div class="map animate__animated" id="map">
                <yandex-map
                    :settings="settings"
                    :coords="[56.129057, 40.406635]"
                    :zoom="16"
                >
                    <ymap-marker
                        :coords="[56.129057, 40.406635]"
                    />
                </yandex-map>
            </div>
        </div>
    </section>
</template>

<script>
import {mask} from 'vue-the-mask'
import Form from "@/components/Form.vue";
import Image from "@/components/Image.vue";
export default {
    name: "ContactsSection",
    components: { Form },
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
