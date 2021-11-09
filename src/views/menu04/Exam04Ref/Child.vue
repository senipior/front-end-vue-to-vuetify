
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Child
        </v-card-title>
        <v-card-text>
            <p>data: {{data}}</p>
            <v-divider/>
            <v-btn color="info" class="mr-2" small @click="handleParentData">부모 데이터 읽기</v-btn>
            <v-btn color="info" class="mr-2" small @click="handleParentMethod">부모 메소드 호출</v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Child",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            data: "child-data"
        };
    },
    // component method definition
    methods: {
        childMethod(){
            console.log("childMethod() 실행");
        },
        handleParentData() {
            console.log(this.$parent.data);
        },
        handleParentMethod() {
            this.$parent.parentMethod();
        },
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>