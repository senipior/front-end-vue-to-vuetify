
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam02CounterState
        </div>
        <div class="card-body">
            <h6> [Counter State 읽기] </h6>
            <p> counter/count 단방향 바인딩: {{$store.state.counter.count}}</p>
            <p> counter/count 단방향 바인딩: {{$store.getters["counter/getCount"]}}</p>
            <p> counter/count 단방향 바인딩: {{getCount()}}</p>
            <p> counter/count 단방향 바인딩: {{computedCount}}</p>
            <p> counter/count 양방향 바인딩: <input type="text" v-model.number="$store.counter.count"/></p>

            <hr/>

            <h6>[Counter State 변경]</h6>
            <p>Component value 양방향 바인딩: <input type="text" v-model.number="value"/></p>
            <div class="mt-2">
                <button class="btn btn-info btn-sm mr-2" @click="changeCountByMutation">counter/count 변경(Mutation 동기 방식)</button>
                <button class="btn btn-info btn-sm mr-2" @click="changeCountByAction">counter/count 변경(Action 비동기 방식)</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam02CounterState",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            value: 0
        };
    },
    // component method definition
    methods: {
        getCount() {
            return this.$store.state.counter.count;
            // return this.$store.getters["counter/getCount"];
        },
        changeCountByMutation() {
            this.$store.commit("counter/setCount", this.value);
        },
        changeCountByAction() {
            this.$store.dispatch("counter/setCountByAsync", {value: this.value, duration: 3000});
        },
    },

    computed: {
        computedCount() {
            // return this.$store.state.counter.count;
            return this.$store.getters["counter/getCount"];
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>