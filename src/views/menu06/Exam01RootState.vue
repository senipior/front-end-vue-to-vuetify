
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam01RootState
        </v-card-title>
        <v-card-text>
            <h6> [Root State 읽기] </h6>
            <p> userId 단방향 바인딩: {{$store.state.userId}}</p>
            <p> userId 단방향 바인딩: {{$store.getters.getUserId}}</p>
            <p> userId 단방향 바인딩: {{getUserId()}}</p>
            <p> userId 단방향 바인딩: {{computedUserId}}</p>
            <p> userId 양방향 바인딩: <v-text-field type="text" v-model="$store.state.userId"/></p>

            <v-divider/>

            <h6>[Root State 변경]</h6>
            <p>Component userId 양방향 바인딩: <v-text-field type="text" v-model="userId"/></p>
            <div class="mt-2">
                <v-btn color="info" class="mr-2" small @click="changeUserIdByMutation">userId 변경(Mutation 동기 방식)</v-btn>
                <v-btn color="info" class="mr-2" small @click="changeUserIdByAction">userId 변경(Action 비동기 방식)</v-btn>
            </div>
            <child class="mt-2"/>
        </v-card-text>
    </v-card>
</template>

<script>
import Child from "./Child.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "Exam01RootState",
    // components that i want to add
    components: {
        Child,
    },
    // component data definition
    data: function() {
        return {
            userId: ""
        };
    },
    // component method definition
    methods: {
        getUserId() {
            // return this.$store.state.userId;
            // return this.$store.getters.getUserId;
            return this.$store.getters["getUserId"];
        },
        changeUserIdByMutation() {
            this.$store.commit("setUserId", this.userId);
        },
        changeUserIdByAction() {
            this.$store.dispatch("setUserIdByAsync", {userId: this.userId, duration: 3000});
        },
    },

    computed: {
        computedUserId() {
            return this.$store.state.userId;
            // return this.$store.getters.getUserId;
            // return this.$store.getters["getUserId"];
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>