
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Child
        </div>
        <div class="card-body">
            <h6>[자식 - > 부모]</h6>
            <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">child-event-1 emit</button>
            <button class="btn btn-info btn-sm mr-2" @click="handleBtn2">child-event-2 emit</button>
            <button class="btn btn-info btn-sm mr-2" @click="handleBtn5">data2 값 전달하기</button>
            <hr/>
            <h6>[부모 - > 자식 -> 부모 -> 자식]</h6>
            <p class="mb-2">부모로부터 받은 counter: {{counter}}</p>
            <button class="btn btn-info btn-sm mr-2" @click="handleBtn3">증가 요청(자식->부모)</button>
            <button class="btn btn-info btn-sm mr-2" @click="handleBtn4">감소 요청(자식->부모)</button>
        </div>
    </div>
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
            data1: "child-value1",
            data2: 100
        };
    },
    // component method definition
    methods: {
        handleBtn1() {
            //이벤트 발생
            this.$emit("child-event-1", this.data1);
        },
        handleBtn2() {
            //이벤트 발생
            this.$emit("child-event-2", this.data1, this.data2);
        },
        handleBtn3() {
            //이벤트 발생
            this.$emit("counter-increment", 10);
        },
        handleBtn4() {
            //이벤트 발생
            this.$emit("counter-decrement", 5);
        },
        handleBtn5() {
            //이벤트 발생
            this.$emit("data-pass", this.data2);
        }

    },
    props: ["counter"]
}
</script>

<!-- component style definition-->
<style scoped>

</style>