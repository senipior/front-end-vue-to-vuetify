
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            ChildB
        </v-card-title>
        <v-card-text>
            <p>product.no: {{product.no}}</p>
            <p>product.kind: {{product.kind}}</p>
            <p>no: {{no}}</p>
            <p>kind: {{kind}}</p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "ChildB",
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
    props: ["product", "no", "kind"]
}
</script>

<!-- component style definition-->
<style scoped>

</style>