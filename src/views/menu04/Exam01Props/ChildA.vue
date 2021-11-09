
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            ChildA
        </v-card-title>
        <v-card-text>
            <p>prop1: {{prop1}}</p>
            <p>prop2: {{prop2}}</p>
            <p>productNo: {{productNo}}</p>
            <p>productKind: {{productKind}}</p>
            <p>productPrice: {{productPrice}}</p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "ChildA",
    // component that i want to add
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
    props: [
        "prop1",
        "prop2",
        "productNo",
        "productKind",
        "productPrice",
    ]
}
</script>

<!-- component style definition-->
<style scoped>

</style>