
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam03AttrBinding
        </v-card-title>
        <v-card-text>
            <p>
                <img :src="require(`@/assets/photos/${imgName1}`)" height="150" class="mr-2"/>
                <img :src="require(`@/assets/photos/${imgName2}`)" height="150" class="mr-2"/>
            </p>
            <div>
                <p :class="className">아름다운 풍경</p>
                <p :stlye="css">가을에는 Vue를 공부하고 싶어요.</p>
            </div>
            <v-divider/>
            <v-btn color="info" class="mr-2" small @click="changeData">변경</v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam03AttrBinding",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            imgName1: "photo1.jpg",
            imgName2: "photo2.jpg",
            className: "class1",
            css:"color:blue",
            toggle: true
        };
    },
    // component method definition
    methods: {
        changeData: function() {
        if(this.toggle) {
            this.imgName1 = "photo3.jpg";
            this.imgName2 = "photo4.jpg";
            this.className = "class2";
            this.css = "color: red";
        } else {
            this.imgName1 = "photo1.jpg";
            this.imgName2 = "photo2.jpg";
            this.className = "class1";
            this.css = "color: blue";
        }
        this.toggle = !this.toggle;
        }
    }
}
</script>

<!-- component style definition-->
<style>
    .class1{
        color:red;
    }
    .class2{
        color:green;
    }
</style>