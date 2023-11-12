<template>
    <div class="page">
        <section id="about">
            <div class="containers about">
                <div class="about__header">
                    <h1 class="about__header-title">О компании</h1>
                    <div class="about__header-nav">
                        <ul class="nav about-nav-list" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-about active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">О нас</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-about" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Портфолио</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-about" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Партнеры</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-about" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Сертификаты</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div class="containers about-as">
                        <div class="about-as__photo">
                            <Image :img="'about-img.jpg'" />
                        </div>
                        <div class="about-as__info">
                            <p class="about-as__info-title">История</p>
                            <p class="about-as__info-text">Меня зовут Андрей Карезин, я основал компанию «Пенопласт» в 2003 году у себя на родине в поселке Золоторевка в 24км от Пензы.</p>
                            <p class="about-as__info-text">Мы производим листовой пенопласт, которым утеплили почти все многоэтажки в городе. Для нас это большая гордостьи честь.</p>
                            <p class="about-as__info-text">У нас работают сотрудники из села, для меня компанияэто не просто бизнес, это места работы для моих соседейи друзей.</p>
                            <p class="about-as__info-text">В деревне не так много работы, по-этому рабочие держатьсяза места и я это очень ценю.</p>
                            <p class="about-as__info-text">Зимой я помогаю чистить снег на тракторе просто так,чтобы был порядок.</p>
                            <p class="about-as__info-text">У нас большой склад в котором храниться дробленный пенопласт. На скаладе постоянно храниться 1000м3 дробленого пенопласта для строителей.</p>
                            <p class="about-as__info-text">Мы производим оборудование для производства пенопласта и продаем его.Так как пенопласт в листах нужен здесь и сейчас, издалека его не покупают, да и возить его будет не выгодно.Оборудование на продажу мы делаем аккуратно, ведь важно, чтобы нас пример ставили, а не ругали.</p>
                        </div>
                    </div>
                    <div class="about-as__gallery">

                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div class="about-as__gallery">
                        <div class="about-as__gallery-list">
                            <div class="about-as__gallery-item">
<!--                                <a data-fancybox="gallery-portfolio" href="">-->
<!--                                <img class="photo__gallery-img" src="">-->
<!--                                </a>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <div class="containers partners">
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image :img="'partner-1.svg'" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://souzsaratov.ru/" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Строительная компания «Союз» была образована 8 февраля 1993г. Основным направлением деятельности предприятия стало капитальное строительство индивидуального и многоэтажного жилья. За прошедшие годы построено 20 многоквартирных домов и более 1000 коттеджей и таунхаусов. Накоплен огромный опыт, позволяющий нам считать себя экспертами в области загородного строительства.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-2.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://sksistema.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Специализированый застройщик «Строительная компания"Система» возводит многоэтажные жилые дома на территории Саратова и Энгельса с 2007 года.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-3.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://sknvek.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">СК «Новый век» начала свою деятельность в августе 2002 г. и является одним из самых крупных участников строительного рынка Саратовской области. Мы специализируемся на комплексном предоставлении услуг в сфере жилищного, производственного, социального и коммерческого строительства.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-4.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://solfit.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">СОЛФИТ известен на рынке стройматериалов с 1996 года. Мы предлагаем широкий ассортимент: пиломатериалы, трубы, гипсокартон, цемент и многое другое.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-5.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="http://zhilstroy-tlt.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Предлагаем услуги по строительству инд. жилых домов на вашем участке. Возможна реализация имеющихся проектов, а также разработка индивидуальных.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-6.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://astera64.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Компания «Астера», предлагает приобрести строительные и отделочные материалы в широком ассортименте по закономерно низким расценкам с предоставлением оперативной поставки по всей Саратовской области.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-7.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://shaldom.com" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Крупнейшая строительная компания Саратовской областиРаботаем на рынке более 80 лет</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-8.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://pssrus.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Завод Покровские сухие смеси динамично развивающееся производственное предприятие, начавшее свою деятельность в 2008 году с запуска нового высокотехнологичного завода по производству сухих строительных смесей.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-9.svg" />
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text"></p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-10.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://www.profkom64.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Профком — сеть оптово-розничных магазинов, специализирующихся на продаже строительно-отделочных материалов по Саратовской области.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-11.svg" />
                                </div>
                                <div class="partners__item-logo-button">
                                    <a class="button button-primary" href="https://www.tstn.ru" target="_blank">Перейти на сайт</a>
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Торговая Сеть ТЕХНОНИКОЛЬ (ТСТН) – крупнейшая торговая компания, управляющая сетью из 100+ собственных торговых отделений, расположенных в России, Беларуси и Казахстане. Сеть реализует как продукцию корпорации ТЕХНОНИКОЛЬ, неотъемлемой частью которой является, так и широкий ассортимент строительных и отделочных материалов для промышленного, гражданского и частного домостроения от известных производителей.</p>
                            </div>
                        </div>
                        <div class="partners__item">
                            <div class="partners__item-logo">
                                <div class="partners__item-logo-img">
                                    <Image img="partner-12.svg" />
                                </div>
                            </div>
                            <div class="partners__item-info">
                                <p class="partners__item-info-title">О партнере</p>
                                <p class="partners__item-info-text">Холдинг «SKM group» работает на отечественном рынке недвижимости с 2006-го года. Холдинг объединяет несколько компаний различного профиля, что позволяет организации охватывать все сферы рынка: проектирование, строительство, продажа жилой и нежилой недвижимости. Специалисты компании оказывают консалтинговые и риэлторские услуги. «SKM group» реализует масштабные проекты в Москве и Московской области, работает в различных регионах Российской Федерации. В активе компании более 3 млн кв. м коммерческой и жилой недвижимости, в том числе элитные жилые дома, торговые и многофункциональные комплексы.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                    <div class="certificates">
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-1.jpg">
                                <Image img="certificat-img-1.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-2.jpg">
                                <Image img="certificat-img-2.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-3.jpg">
                                <Image img="certificat-img-3.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-4.jpg">
                                <Image img="certificat-img-4.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-5.jpg">
                                <Image img="certificat-img-5.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-6.jpg">
                                <Image img="certificat-img-6.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-7.jpg">
                                <Image img="certificat-img-7.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-8.jpg">
                                <Image img="certificat-img-8.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-9.jpg">
                                <Image img="certificat-img-9.jpg" />
                            </a>
                        </div>
                        <div class="certificates__item">
                            <a data-fancybox="gallery-cert" href="/build/img/certificat-img-10.jpg">
                                <Image img="certificat-img-10.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Image from "@/components/Image.vue";
export default {
    name: "About",
    components: {Image}
}
</script>

<style scoped>

</style>
