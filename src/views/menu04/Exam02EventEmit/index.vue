
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam02EventEmit
        </div>
        <div class="card-body">
            <p class="mb-2">counter: {{counter}}</p>
            <child @child-event-1="handleChildEvent1"
                    @child-event-2="handleChildEvent2"
                    :counter="counter"
                    @counter-increment="handleCounterIncrement"
                    @counter-decrement="handleCounterDecrement"
                    @data-pass="dataPass"/>
        </div>
    </div>
</template>

<script>
import Child from "./Child.vue";


export default {
    // component's name found in vue devtools on chrome.
    name: "Exam02EventEmit",
    // components that i want to add
    components: {
        Child,
    },
    // component data definition
    data: function() {
        return {
            counter: 0,
        };
    },
    // component method definition
    methods: {
        handleChildEvent1(arg){
            console.log("arg", arg);
        },

        handleChildEvent2(arg1, arg2){
            console.log("arg1:", arg1);
            console.log("arg2:", arg2);
        },
        handleCounterIncrement(value) {
            this.counter += value;
        },
        handleCounterDecrement(value) {
            if(this.counter >= 5){
            this.counter -= value;
            }
        },
        dataPass(arg3) {
            this.counter = arg3;
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>