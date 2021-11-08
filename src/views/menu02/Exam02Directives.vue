
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam02Directives
        </v-card-title>
        <v-card-text>
            <!-- 데이터 바인딩-->
            <div>
                <img class="mr-2" :src="require(`@/assets/photos/photo1.jpg`)" height="100px"/>
                <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100px"/>
            </div>
            <v-divider/>
            <!-- 요소 숨김 여부 -->
            <span v-if="sale" class="mr-2">
                <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100px"/>
            </span>
            <span v-show="sale">
                <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100px"/>
            </span>
            <v-divider/>
            <!-- HTML 태그 처리 -->
            <p>정보: {{info}} </p>
            <p>정보: <span v-html="info"></span></p>
            <v-divider/>
            <v-btn color="info" class="mr-2" small @click="changeData">변경</v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam02Directives",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            photoFileName: "photo2.jpg",
            sale: true,
            info: `<div style="background-color: #eeeeee">스타일 적용 확인</div>`
        };
    },
    // component method definition
    methods: {
        changeData() {
            if(this.photoFileName === "photo2.jpg"){
                this.photoFileName = "photo3.jpg";
            } else {
                this.photoFileName = "photo2.jpg";
            }
            this.sale = !this.sale;
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>