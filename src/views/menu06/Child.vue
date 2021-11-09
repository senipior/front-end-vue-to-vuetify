
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Child
        </v-card-title>
        <v-card-text>
            <v-card-text class="text-h6"> [Root State 읽기] </v-card-text>
            <p> userId 단방향 바인딩: {{$store.state.userId}}</p>
            <p> userId 단방향 바인딩: {{$store.getters.getUserId}}</p>
            <p> userId 양방향 바인딩: <input type="text" v-model="$store.state.userId"/></p>
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