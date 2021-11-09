
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title class="text-h5 font-weight-bold">
            Exam01Props
        </v-card-title>
        <v-card-text>
            <child-a :prop1="data1" 
                    :prop2="data2"
                    :productNo="pno"
                    :product-kind="pkind"
                    :product-price="pprice"/>
            <v-divider/>
            <child-b :product="product" v-bind="product"/>
            <!-- v-bind="product"는 product.number와 product.kind가 넘어가는 효과 -->
            <v-divider/>
            <child-c propD="string-data"
                    :propA="3"
                    :propB="5"
                    :propC="7"
                    :propE="9"
                    :propF="{message:'hello, vue'}"
                    :propG="['red', 'green', 'blue']"
                    :propH="5"/>
        </v-card-text>
    </v-card>
</template>

<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "Exam01Props",
    // component that i want to add
    components: {
        ChildA,
        ChildB,
        ChildC,
    },
    // component data definition
    data: function() {
        return {
            data1: "value1",
            data2: "value2",
            pno: "1",
            pkind: "bag",
            pprice: 1000,
            product: {
                no: 2,
                kind: "정장"
            }
        };
    },
    // component method definition
    methods: {
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>