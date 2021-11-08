
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Child
        </div>
        <div class="card-body">
            <p>data: {{data}}</p>
            <hr/>
             <button class="btn btn-info btn-sm mr-2" @click="handleParentData">부모 데이터 읽기</button>
            <button class="btn btn-info btn-sm mr-2" @click="handleParentMethod">부모 메소드 호출</button>
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