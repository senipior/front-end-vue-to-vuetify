
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam08View
        </v-card-title>
        <v-card-text>
            <div>kind: {{$route.query.kind}}</div>
            <div>color: {{$route.query.color}}</div>
            <v-divider/>
            <div>kind: {{kind}}</div>
            <div>color: {{color}}</div>
        </v-card-text>

            <v-divider/>
        <v-card-actions>
            <v-btn color="info" class="mr-2" small @click="goHome">홈으로 이동</v-btn>
            <v-btn color="info" small @click="goBack">뒤로 이동</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam08View",
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
        goHome() {
            this.$router.push("/");
        },
        goBack() {
            this.$router.go(-1); // 직전으로 이동
        }
    },
    //컴포넌트가 생성된 후 실행되는 메소드
    created() {
        console.log(this.$route);
        console.log(this.$route.query.kind);
        console.log(this.$route.query.color);
    },
    props: [
        "kind",
        "color"
    ]

}
</script>

<!-- component style definition-->
<style scoped>

</style>