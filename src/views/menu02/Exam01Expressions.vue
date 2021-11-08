
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam01Expressions
        </v-card-title>
        <v-card-text>
            <h5>상품정보</h5>
            <p>번호: {{no}}</p>
            <p>이름: {{name}}</p>
            <p>회사: {{company}}</p>
            <p>가격: {{getPrice()}}</p>
            <p>판매여부: {{sale?"판매":"품절"}}</p>
            <v-btn color="info" class="mt-2" small @click="changeData">변경</v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam01Expressions",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            no: 1,
            name: "미니백",
            company: "클레인",
            price: 300000,
            sale: true
        };
    },
    // component method definition
    methods: {
        getPrice() {
            return this.price;
        },
        changeData() {
            this.price+=1000;
            this.sale = !this.sale;
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>