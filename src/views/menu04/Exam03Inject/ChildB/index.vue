
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            ChildB
        </div>
        <div class="card-body">
            <p>provideData1: {{provideData1}}</p>
            <p>provideData2: {{provideData2}}</p>
            <hr/>
            <child-c/>
        </div>
    </div>
</template>

<script>
import ChildC from "./ChildC.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "ChildB",
    // components that i want to add
    components: {
        ChildC
    },
    // component data definition
    data: function() {
        return {
        };
    },
    // component method definition
    methods: {
    },
    //부모로부터 전달된 데이터 삽입
    inject: [
        "provideData1",
        "provideData2",
    ]
}
</script>

<!-- component style definition-->
<style scoped>

</style>