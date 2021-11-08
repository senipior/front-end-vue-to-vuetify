
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam05ForRepeatBinding
        </div>
        <div class="card-body">
            <h6>범위 반복</h6>
            <div>
                <span v-for="n in 10" :key="n" class="mr-2">
                    <img :src="require(`@/assets/photos/photo${n}.jpg`)" height="150" v-if="n%2===0"/>
                </span>
            </div>
            <hr/>

            <h6>배열 항목 반복</h6>
            <div>
                <span v-for="(photo, index) in photos" :key="index">
                    <img :src="require(`@/assets/photos/${photo}`)" height="150" v-if="index<=2"/>
                </span>
            </div>

            <hr/>

            <h6>객체 배열 항목 반복</h6>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="board in boards" :key="board.bno">
                        <td>{{board.bno}}</td>
                        <td>{{board.btitle}}</td>
                        <td>{{board.bwriter}}</td>
                        <td>{{board.bdate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import boardData from "@/data/boardData";
import photoData from "@/data/photoData";

export default {
    // component's name found in vue devtools on chrome.
    name: "Exam05ForRepeatBinding",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            boards: boardData.boards,
            photos: photoData.photos
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