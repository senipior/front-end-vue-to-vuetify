
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title class="title">Exam01View</v-card-title>
        <v-card-text>
            <div class="text-h6">선언적 방식 화면 이동</div>
        </v-card-text>
        <v-card-actions>
            <router-link to="/menu01/exam02view"><v-btn color="info" class="mr-2" small>/menu01/exam02view</v-btn></router-link>
            <router-link v-bind:to="`/menu01/exam02view`"><v-btn color="info" class="mr-2" small>/menu01/exam02view</v-btn></router-link>
            <router-link :to="{path:'/menu01/exam02view'}"><v-btn color="info" class="mr-2" small>/menu01/exam02view</v-btn></router-link>
            <router-link :to="{name: 'menu01_exam02view'}"><v-btn color="info" small>/menu01/exam02view</v-btn></router-link>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    // component's name found in devtools on chrome.
    name: "Exam01View",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
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