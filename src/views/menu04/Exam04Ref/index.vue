
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam04Ref
        </div>
        <div class="card-body">
            <p>data: {{data}}</p>
            <hr/>
            <button class="btn btn-info btn-sm mr-2" @click="handleChildData">자식 데이터 읽기</button>
            <button class="btn btn-info btn-sm mr-2" @click="handleChildMethod">자식 메소드 호출</button>
            <hr/>
            <Child ref="childRef"/>
            <hr/>
            <div class="d-flex">
            <input type="text" ref="inputRef" class="mr-2"/>
            <button class="btn btn-info btn-sm mr-2" @click="handleInputFocus">요소 포커스 주기</button>
            <button class="btn btn-info btn-sm mr-2" @click="handleInputValue">요소의 값 변경</button>
            </div>
        </div>
    </div>
</template>

<script>
import Child from "./Child.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "Exam04Ref",
    // components that i want to add
    components: {
        Child
    },
    // component data definition
    data: function() {
        return {
            data: "parent-data"
        };
    },
    // component method definition
    methods: {
        parentMethod() {
            console.log("parentMethod() 실행");
        },
        handleChildData() {
            console.log(this.$refs.childRef.data);
        },
        handleChildMethod() {
            this.$refs.childRef.childMethod();
        },
        handleInputFocus() {
            this.$refs.inputRef.focus();
        },
        handleInputValue() {
            this.$refs.inputRef.value += "a";
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>