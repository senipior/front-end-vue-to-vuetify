
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Child
        </v-card-title>
        <v-card-text>
            <p>data: {{data}}</p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "",
    // components that i want to add
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
    props: ["data"],
    //LifeCycle Hook 정의
    beforeUpdate() {
        console.log("beforeUpdate state");
    },
    updated() {
        console.log("update state");
    },
}
</script>

<!-- component style definition-->
<style scoped>

</style>