
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam05View
        </v-card-title>
        <v-card-subtitle>
            <v-card-text class="text-h6">params(path variable)로 전달</v-card-text>
            <ul>
                <li><router-link to="/menu01/exam06view/1">exam06view/1</router-link></li>
                <li><router-link v-bind:to="`/menu01/exam06view/${bno1}`">exam06view/3</router-link></li>
                <li><router-link :to="{path: `/menu01/exam06view/${bno2}`}">exam06view/5</router-link></li>
                <li><router-link :to="{name: 'menu01_exam06view', params: {bno:bno3}}">exam06view/7</router-link></li>
            </ul>

            <v-card-text class="text-h6">정적 프롭 객체 전달</v-card-text>
            <ul>
                <li><router-link to="/menu01/exam07view">exam07view</router-link></li>
            </ul>

            <v-card-text class="text-h6">쿼리 스트링으로 전달</v-card-text>
            <ul>
                <li><router-link to="/menu01/exam08view?kind=freeboard&color=blue">exam08view?kind=freeboard&color=blue</router-link></li>
                <li><router-link :to="`/menu01/exam08view?kind=${kind1}&color=${color1}`">exam08view?kind=freeboard&color=blue</router-link></li>
                <li><router-link :to="{path: `/menu01/exam08view?kind=${kind2}&color=${color2}`}">exam08view?kind=album&color=red</router-link></li>
                <li><router-link :to="{name: 'menu01_exam08view', query:{kind:kind3, color:color3}}">exam08view?kind=qna&color=yellow</router-link></li>
            </ul>
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam05View",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            bno1: 3,
            bno2: 5,
            bno3: 7,
            kind1: "freeboard",
            color1: "blue",
            kind2: "album",
            color2: "red",
            kind3: "qna",
            color3: "yellow"
        };
    },
    // component method definition
    methods: {
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>