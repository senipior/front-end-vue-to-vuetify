
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam03Inject
        </v-card-title>
        <v-card-text>
            <p>data1: {{data1}}</p>
            <p>data2: {{data2}}</p>
            <v-btn color="info" class="mr-2" small @click="changeData">변경</v-btn>
            <v-divider/>
            <child-a/>
        </v-card-text>
    </v-card>
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