
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam04Ref
        </v-card-title>
        <v-card-text>
            <p>data: {{data}}</p>
            <v-divider/>
            <v-btn color="info" class="mr-2" small @click="handleChildData">자식 데이터 읽기</v-btn>
            <v-btn color="info" class="mr-2" small @click="handleChildMethod">자식 메소드 호출</v-btn>
            <v-divider/>
            <Child ref="childRef"/>
            <v-divider/>
            <v-container>
                <v-text-field type="text" ref="inputRef" class="mr-2" value=""/>
                <v-btn color="info" class="mr-2" small @click="handleInputFocus">요소 포커스 주기</v-btn>
                <v-btn color="info" class="mr-2" small @click="handleInputValue">요소의 값 변경</v-btn>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
import Child from "./Child.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "Exam04Ref",
    // components that i want to add
    components: {
        Child,
    },
    // component data definition
    data: function() {
        return {
            data: "parent-data",
        };
    },
    // component method definition
    methods: {
        parentMethod() {
            console.log("parentMethod() 실행");
        },
        handleChildData() {
            console.log(this.$refs.childRef.data);
        },
        handleChildMethod() {
            this.$refs.childRef.childMethod();
        },
        handleInputFocus() {
            this.$refs.inputRef.focus();
        },
        handleInputValue() {
            this.$refs.inputRef.value += "a";
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>