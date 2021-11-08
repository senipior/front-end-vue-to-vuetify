
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam01LifeCycleHook
        </div>
        <div class="card-body">
            <p>data: {{data}}</p>
            <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
            <hr/>
            <child :data="data"/>
        </div>
    </div>
</template>

<script>
import Child from "./Child.vue";
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam01LifeCycleHook",
    // components that i want to add
    components: {
        Child
    },
    // component data definition
    data: function() {
        return {
            data: ""
        };
    },
    // component method definition
    methods: {
        changeData() {
            this.data += Math.floor(10*Math.random());
        }
    },
    //LifeCycleHook 정의
    beforeCreate() {
        console.log("beforeCreate state");
    },
    created() {
        console.log("created state");
    },
    beforeMount() {
        console.log("beforeMount state");
    },
    mounted() {
        console.log("mounted state");
    },
    beforeUpdate() {
        console.log("beforeUpdate state");
    },
    updated() {
        console.log("updated state");
    },
    beforeDestroy() {
        console.log("beforeDestroy state");
    },
    destroyed() {
        console.log("destroyed state");
    },
}
</script>

<!-- component style definition-->
<style scoped>

</style>