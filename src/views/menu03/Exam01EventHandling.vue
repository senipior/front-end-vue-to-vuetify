
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam01EventHandling
        </v-card-title>
        <v-container>
            <v-card-text class="text-h6">[Event Handler]</v-card-text>
            <v-btn color="info" class="mr-2" small v-on:click="handleBtn1">버튼1</v-btn>
            <v-btn color="info" class="mr-2" small @click="handleBtn2('vue is good', $event)" name="btn2">버튼2</v-btn>
            <v-btn color="info" small @click="handleBtn2('vue is good', $event)" name="btn3">버튼3</v-btn>
            <v-divider/>
            <a href="/" @click.prevent="handleLink($event)">링크</a>
            <v-divider/>
            <!-- 세로 정렬 align-items-center justify-content-center -->
            <v-form @submit.prevent="handleSubmit">
                <v-flex>  
                    <v-btn color="info" class="mr-2" small><input type="submit" value="제출"/></v-btn>
                    <v-btn color="info" class="mr-2" small type="submit">제출</v-btn>
                    <input type="image" :src="require(`@/assets/logo.png`)" height="30"/>
                </v-flex>
            </v-form>
            <v-divider/>
            <v-btn color="info" class="mr-2" small @click.ctrl="handleBtn3" name="btn3">Ctrl+Click</v-btn>
        </v-container>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam01EventHandling",
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
        handleBtn1() {
            console.log("handleBtn1() 실행");
        },
        handleBtn2(arg, event) {
            console.log("arg: ", arg);
            console.log("event: ", event);
            if(event.target.name === "btn2") {
                console.log("btn2가 클릭됨");
            } else if(event.target.name === "btn3") {
                console.log("btn3가 클릭됨");
            }
        },
        handleLink(event) {
            event.preventDefault();
            console.log("링크가 클릭됨");
        },
        handleSubmit() {
            console.log("AJAX 통신으로 폼 데이터 전송");
        },
        handleBtn3() {
            console.log("handleBtn3() 실행");
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>