<template>
    <div class="page">
        <section id="about">
            <div class="containers about">
                <div class="about__header">
                    <h1 class="about__header-title">
                        Каталог
                    </h1>
                    <div class="about__header-nav">
                        <ul class="nav about-nav-list" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-about active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Пенопласт</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-about" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Гранулы</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-about" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Крошка/дробленка</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <section class="products">
                        <div class="containers product">
                            <div class="product__item">
                                <div class="product__item-left">
                                    <h2 class="product__item-left-title">ПСБС-С 25Ф</h2>
                                    <div class="product__item-left-buttons">
                                        <button class="button button-primary button-product">Заказать по 3200₽/м²</button>
                                        <button class="button button-default button-product">Рассчитать объем и цену</button>
                                    </div>
                                </div>
                                <div class="product__item-right">
                                    <div class="product__item-right-header">
                                        <p class="product__item-right-header-title">Область применения:</p>
                                        <div class="product__item-right-header-text-block">
                                            <p class="product__item-right-header-text">Устройство мокрых фасадов</p>
                                        </div>
                                    </div>
                                    <div class="product__item-right-footer">
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Теплопроводность:</p>
                                            <p class="product__item-right-footer-item-text">{{ '<' }} 0,040 Вт/кв.м. х С</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на изгиб:</p>
                                            <p class="product__item-right-footer-item-text">{{ '≥' }} 0,18 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Плотность:</p>
                                            <p class="product__item-right-footer-item-text">16-18 кг/ м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на сжатие:</p>
                                            <p class="product__item-right-footer-item-text">при 10% деформации: {{ '≥' }} 0,1 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Водопоглощение за 24 часа:</p>
                                            <p class="product__item-right-footer-item-text">{{ '≤' }} 2 % от общего объема</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-left">
                                    <h2 class="product__item-left-title">ПСБС-С 15</h2>
                                    <div class="product__item-left-buttons">
                                        <button class="button button-primary button-product">Заказать</button>
                                        <button class="button button-default button-product">Рассчитать объем и цену</button>
                                    </div>
                                </div>
                                <div class="product__item-right">
                                    <div class="product__item-right-header">
                                        <p class="product__item-right-header-title">Область применения:</p>
                                        <div class="product__item-right-header-text-block">
                                            <ul>
                                                <li>Утепление стен внутри помещений</li>
                                                <li>Устройство шумоизоляции пергородок</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__item-right-footer">
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Теплопроводность:</p>
                                            <p class="product__item-right-footer-item-text">{{ '<' }} 0,042 Вт/кв.м. х С</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на изгиб:</p>
                                            <p class="product__item-right-footer-item-text">{{ '≥' }} 0,007 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Плотность:</p>
                                            <p class="product__item-right-footer-item-text">до 15 кг/ м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на сжатие:</p>
                                            <p class="product__item-right-footer-item-text">при 10% деформации: {{ '≥' }} 0,05 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Водопоглощение за 24 часа:</p>
                                            <p class="product__item-right-footer-item-text">≤ 3 % от общего объема</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-left">
                                    <h2 class="product__item-left-title">ПСБС-С 25</h2>
                                    <div class="product__item-left-buttons">
                                        <button class="button button-primary button-product">Заказать</button>
                                        <button class="button button-default button-product">Рассчитать объем и цену</button>
                                    </div>
                                </div>
                                <div class="product__item-right">
                                    <div class="product__item-right-header">
                                        <p class="product__item-right-header-title">Область применения:</p>
                                        <div class="product__item-right-header-text-block">
                                            <ul>
                                                <li>Уепление и шумоизоляции чердачных перекрытий;</li>
                                                <li>Утепление наружных стен под облицовочный кирпич или сайдинг.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__item-right-footer">
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Теплопроводность:</p>
                                            <p class="product__item-right-footer-item-text">{{ '<' }} 0,039 Вт/кв.м. х С</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на изгиб:</p>
                                            <p class="product__item-right-footer-item-text">{{ '≥' }} 0,18 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Плотность:</p>
                                            <p class="product__item-right-footer-item-text">15,1-25 кг кг/ м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на сжатие:</p>
                                            <p class="product__item-right-footer-item-text">при 10% деформации: {{ '≥' }} 0,1 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Водопоглощение за 24 часа:</p>
                                            <p class="product__item-right-footer-item-text">{{ '≤' }} 2 % от общего объема</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-left">
                                    <h2 class="product__item-left-title">ПСБС-С 35</h2>
                                    <div class="product__item-left-buttons">
                                        <button class="button button-primary button-product">Заказать по 5200₽/м²</button>
                                        <button class="button button-default button-product">Рассчитать объем и цену</button>
                                    </div>
                                </div>
                                <div class="product__item-right">
                                    <div class="product__item-right-header">
                                        <p class="product__item-right-header-title">Область применения:</p>
                                        <div class="product__item-right-header-text-block">
                                            <ul>
                                                <li>Утепление цокольной и подземной части фундамента;</li>
                                                <li>Утепление бетонного пола;</li>
                                                <li>Утепление чердачного бетонного перекрытия под стяжку;</li>
                                                <li>Устройство теплых полов.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__item-right-footer">
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Теплопроводность:</p>
                                            <p class="product__item-right-footer-item-text">{{ '<' }} 0,037 Вт/кв.м. х С</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на изгиб:</p>
                                            <p class="product__item-right-footer-item-text">{{ '≥' }} 0,25 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Плотность:</p>
                                            <p class="product__item-right-footer-item-text">25,1-35 кг/ м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Прочность на сжатие:</p>
                                            <p class="product__item-right-footer-item-text">при 10% деформации: {{ '≥' }} 0,16 МПa</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Водопоглощение за 24 часа:</p>
                                            <p class="product__item-right-footer-item-text">{{ '≤' }} 2 % от общего объема</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <section class="products">
                        <div class="containers product">
                            <div class="product__item">
                                <div class="product__item-left">
                                    <h2 class="product__item-left-title">Вспененные гранулы самозатухающего пенопласта в упаковке по 1 м3</h2>
                                    <div class="product__item-left-buttons">
                                        <button class="button button-primary button-product">Заказать гранулы 6-8мм</button>
                                        <button class="button button-default button-product">Заказать гранулы другого размера</button>
                                    </div>
                                </div>
                                <div class="product__item-right">
                                    <div class="product__item-right-header">
                                        <p class="product__item-right-header-title">Технология производства и упаковка</p>
                                        <div class="product__item-right-header-text-block">
                                            <p class="product__item-right-header-text">Для производства гранул пенопласта мы используем российское сырье завода альфапорф, которое вы можете купить на нашем сайте.</p>
                                            <p class="product__item-right-header-text">Размер исходных гранул 2-3 мм, при высоком давлении и температуре гранулы раздуваются до 6-8 мм. Данная фракция и плостность является самой распространненой и подходит для решения большинства задач.</p>
                                        </div>
                                    </div>
                                    <div class="product__item-right-footer">
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Размер гранул::</p>
                                            <p class="product__item-right-footer-item-text">6-8 мм</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Плотность:</p>
                                            <p class="product__item-right-footer-item-text">6-8 кг/м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Продажа: </p>
                                            <p class="product__item-right-footer-item-text">от 1 м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Водопоглощение за 24 часа:</p>
                                            <p class="product__item-right-footer-item-text"> 6-8 кг</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Упаковка:</p>
                                            <p class="product__item-right-footer-item-text">полиэтиленовый мешок объемом 1 м3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                    <section class="products">
                        <div class="containers product">
                            <div class="product__item">
                                <div class="product__item-left">
                                    <h2 class="product__item-left-title">Дробленый пенопласт / крошка</h2>
                                    <div class="product__item-left-buttons">
                                        <button class="button button-primary button-product">Заказать по 700₽/м3</button>
                                    </div>
                                </div>
                                <div class="product__item-right">
                                    <div class="product__item-right-header">
                                        <p class="product__item-right-header-title">Область применения:</p>
                                        <div class="product__item-right-header-text-block">
                                            <ul>
                                                <li>Наполнитель для мягкой мебели или детских игрушек</li>
                                                <li>В качестве насыпного упаковочного материала</li>
                                                <li>В производстве полистиролбетона</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__item-right-footer">
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Размер гранул:</p>
                                            <p class="product__item-right-footer-item-text">3-10 мм</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Плотность:</p>
                                            <p class="product__item-right-footer-item-text">до 10 кг/м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Упаковка:</p>
                                            <p class="product__item-right-footer-item-text">полиэтиленовый мешок объемом 1 м3</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Вес одной упаковки:</p>
                                            <p class="product__item-right-footer-item-text">8-10 кг</p>
                                        </div>
                                        <div class="product__item-right-footer-item">
                                            <p class="product__item-right-footer-item-title">Продажа:</p>
                                            <p class="product__item-right-footer-item-text">от 1 м3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <ContactsSection />
    </div>
</template>

<script>
import ContactsSection from "@/components/sections/ContactsSection.vue";
export default {
    name: "Catalog",
    components: {ContactsSection},
}
</script>

<style scoped>

</style>
