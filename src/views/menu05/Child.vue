
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Child
        </div>
        <div class="card-body">
            <p>data: {{data}}</p>
        </div>
    </div>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
        };
    },
    // component method definition
    methods: {
    },
    props: ["data"],
    //LifeCycle Hook 정의
    beforeUpdate() {
        console.log("beforeUpdate state");
    },
    updated() {
        console.log("update state");
    },
}
</script>

<!-- component style definition-->
<style scoped>

</style>