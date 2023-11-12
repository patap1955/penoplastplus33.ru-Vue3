<template>
    <section id="calculator">
        <div class="containers calculator">
            <div class="calculator__enter">
                <h2 class="calculator__enter-title">Выберите материал для вашего дома!</h2>
                <div class="calculator__enter-list">
                    <div class="calculator__enter-item">
                        <p class="calculator__enter-item-text">1. Выберите необходимую толщину листа</p>
                        <select v-model="sheetThickness" class="calculator__enter-item-select" @change="clickSheetThickness($event)">
                            <option v-for="(item, index) in sheetThicknessArray" :key="index" :value="item.key">{{ item.value }}</option>
                        </select>
                    </div>
                    <div class="calculator__enter-item">
                        <p class="calculator__enter-item-text">2. Введите габариты всех стен вашего здания в метрах. Длину стены и высоту. Так мы получим площадь поверхности вашего дома, если стен больше например у вас есть эркер или дом имеет Г-образную форму  «+ добавить стену»</p>
                        <div class="calculator__enter-item-calc-list">
                            <div v-for="(item, index) in calcList" :key="index" class="calculator__enter-item-calc">
                                <div class="calculator__enter-item-inputs">
                                    <input v-model="calcList[index].length" @change="changeItem(index)" type="text">
                                    <span class="calculator__enter-item-inputs-x">&times;</span>
                                    <input  v-model="calcList[index].width" @change="changeItem(index)" type="text">
                                    <span class="calculator__enter-item-inputs-sum">= {{ item.sum === null ? 0 : item.sum }} м<sup>2</sup></span>
                                </div>
                                <p @click="deleteItemInCalcList(index)" class="calculator__enter-item-delete">&times;</p>
                            </div>
                            <p @click="addItemInCalcList" class="calculator__enter-item-add">+ добавить стену</p>
                        </div>
                    </div>
                    <div class="calculator__enter-item calculator__enter-item-footer">
                        <p class="calculator__enter-item-text">Площадь всех стен без вычета дверных и оконных проёмов</p>
                        <p class="calculator__enter-item-text-sum">{{ getCalcImemsSum() }} м²</p>
                    </div>
                </div>
            </div>
            <div class="calculator__info">
                <select class="calculator__info-select" @change="changeProduct($event)">
                    <option v-for="(item, index) in products" class="calculator__info-option" :key="index" :value="index">{{ item.title }}</option>
                </select>
                <div class="calculator__info-output">
                    <div class="calculator__info-output-item">
                        <p class="calculator__info-output-item-text">Количество лстов 1000х1000 мм</p>
                        <p class="calculator__info-output-item-number">{{ getCalcImemsSum() }} шт</p>
                    </div>
                    <div class="calculator__info-output-item">
                        <p class="calculator__info-output-item-text">Объем пенопласта</p>
                        <p class="calculator__info-output-item-number">{{ getCubicMeters() }} м³</p>
                    </div>
                    <div class="calculator__info-output-item">
                        <p class="calculator__info-output-item-text">Стоимость заказа</p>
                        <p class="calculator__info-output-item-number">{{ getTotalPrice() }}₽</p>
                    </div>
                </div>
                <div class="calculator__info-button">
                        <a href="#contacts" class="button button-primary">Оставить заявку</a>
                </div>
                <div class="calculator__info-warning">
                    <p class="calculator__info-warning-text">* в расчетах не учитываются дверные и оконные проемы</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Calculator",
    data() {
        return {
            calcList: [
                {
                    length: 5,
                    width: 5,
                    sum: 25
                },
                {
                    length: 5,
                    width: 5,
                    sum: 25
                },
                {
                    length: 5,
                    width: 5,
                    sum: 25
                },
                {
                    length: 5,
                    width: 5,
                    sum: 25
                },
            ],
            calcItemsSum: null,
            sheetThicknessArray: [
                {key: 0.05, value: "50 мм"},
                {key: 0.06, value: "60 мм"},
                {key: 0.07, value: "70 мм"},
                {key: 0.08, value: "80 мм"},
                {key: 0.09, value: "90 мм"},
                {key: 0.1, value: "100 мм"},
                {key: 0.11, value: "110 мм"},
                {key: 0.12, value: "120 мм"},
                {key: 0.13, value: "130 мм"},
                {key: 0.14, value: "140 мм"},
                {key: 0.15, value: "150 мм"},
            ],
            sheetThickness : null,
            cubicMeters: null,
            products: [
                {
                    title: "ПСБ-С 25Ф",
                    price : 3700
                },
                {
                    title: "ПСБ-С 35",
                    price : 5800
                },
            ],
            product: null,
            totalPrice: null,
        }
    },
    mounted() {
        this.calk()
    },
    methods: {
        addItemInCalcList() {
            const item = { length: null, width: null, sum: null }
            this.calcList.push(item)
        },
        deleteItemInCalcList(index) {
            this.calcList.splice(index, 1)
            this.calk()
        },
        calk() {
            this.calcList.forEach(val => {
                val.sum = val.length * val.width
            })
            this.calcItemsValueSum()
            this.sheetThickness = this.sheetThicknessArray[0].key
            this.cubicMeters = this.sheetThickness * this.calcItemsSum
            this.product = this.products[0]
            this.calcTotalPrice(this.product)
        },
        changeItem(index) {
            this.calcList[index].sum = this.calcList[index].length * this.calcList[index].width
            this.calcItemsValueSum()
            this.cubicMeters = this.sheetThickness * this.calcItemsSum
            this.calcTotalPrice(this.product)
        },
        changeProduct(event) {
            this.product = this.products[event.target.value]
            this.calcTotalPrice(this.product)
        },
        clickSheetThickness(event) {
            this.sheetThickness = event.target.value
            const number = this.sheetThickness * this.calcItemsSum
            Number.isInteger(number) ? this.cubicMeters = number : this.cubicMeters = parseFloat((number).toFixed(1))
            this.calcTotalPrice(this.product)
        },
        calcItemsValueSum() {
            let sum = 0
            this.calcList.forEach(val => {
                sum = sum + val.sum
            })
            this.calcItemsSum = sum
        },
        getCalcImemsSum() {
            return this.calcItemsSum
        },
        getSheetThickness() {
            return this.sheetThickness
        },
        getCubicMeters() {
            return this.cubicMeters
        },
        calcTotalPrice(obj) {
            const total = obj.price * this.cubicMeters
            Number.isInteger(total) ? this.totalPrice = total : this.totalPrice = parseFloat((total).toFixed(1), 10)
            this.totalPrice = this.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        getTotalPrice() {
            return this.totalPrice
        }
    }
}
</script>

<style scoped lang="scss">

</style>
