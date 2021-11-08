
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam03Inject
        </div>
        <div class="card-body">
            <p>data1: {{data1}}</p>
            <p>data2: {{data2}}</p>
            <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
            <hr/>
            <child-a/>
        </div>
    </div>
</template>

<script>
import ChildA from "./ChildA.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "Exam03Inject",
    // components that i want to add
    components: {
        ChildA
    },
    // component data definition
    data: function() {
        return {
            data1: "top-parent-data1", 
            data2: "top-parent-data2", 
        };
    },
    // component method definition
    methods: {
        changeData() {
            this.data1 = "top-parent-data1-changed";
            this.data2 = "top-parent-data2-changed";
        }
    },
    //자손 컴포넌트가 사용할 수 있는 데이터 정의
    provide() {
        return {
            provideData1: this.data1,
            provideData2: this.data2,
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>