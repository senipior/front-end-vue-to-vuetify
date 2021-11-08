
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam07View
        </v-card-title>
        <v-card-text>
            <div>kind: {{ kind }}</div>
            <div>color: {{ color }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam07View",
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
    //프로퍼티(prop) 정의
    props: [
        "kind",
        "color"
    ]
}
</script>

<!-- component style definition-->
<style scoped>

</style>