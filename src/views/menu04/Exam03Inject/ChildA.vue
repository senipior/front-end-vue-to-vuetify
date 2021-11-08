
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            ChildA
        </div>
        <div class="card-body">
            <p>provideData1: {{provideData1}}</p>
            <p>provideData2: {{provideData2}}</p>
            <hr/>
            <child-b/>
        </div>
    </div>
</template>

<script>
import ChildB from "./ChildB";

export default {
    // component's name found in vue devtools on chrome.
    name: "ChildA",
    // components that i want to add
    components: {
        ChildB
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