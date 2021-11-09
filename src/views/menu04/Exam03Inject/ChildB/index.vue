
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            ChildB
        </v-card-title>
        <v-card-text>
            <p>provideData1: {{provideData1}}</p>
            <p>provideData2: {{provideData2}}</p>
            <v-divider/>
            <child-c/>
        </v-card-text>
    </v-card>
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