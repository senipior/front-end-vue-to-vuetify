
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam06View
        </v-card-title>
        <v-card-subtitle>
            <v-card-text class="text-h6">params(path variable)로 데이터 얻기</v-card-text>
            <v-card-text>bno: {{ $route.params.bno }}</v-card-text>
            <v-card-text>bno: {{ bno }}</v-card-text>
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam06View",
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
    },
    //컴포넌트가 생성될 때 실행
    created() {
        console.log("Exam06View 컴포넌트가 생성됨");
        console.log(this.$route);
        console.log(this.$route.params.bno);
    },
    props: [
        "bno"
    ]
}
</script>

<!-- component style definition-->
<style scoped>

</style>