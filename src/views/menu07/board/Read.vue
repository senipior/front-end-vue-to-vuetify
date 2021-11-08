
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            게시물 내용
        </div>
        <div class="card-body">
            <div v-if="board != null">
                <div class="d-flex">
                    <div>
                        <p>bno: {{board.bno}}</p>
                        <p>btitle: {{board.btitle}}</p>
                        <p>bcontent: {{board.bcontent}}</p>
                        <p>mid: {{board.mid}}</p>
                        <p>bdate: {{new Date(board.bdate).toLocaleDateString()}}</p>
                        <p>bhitcount: {{board.bhitcount}}</p>
                        <p v-if="board.battachoname">
                            battachoname: 
                            <a :href="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`">
                                {{board.battachoname}}
                            </a>
                        </p>
                    </div>
                    <div class="d-flex align-items-center ml-5">
                        <img :src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="300"/>
                    </div>
                </div>

                    <div>
                        <router-link :to="`/menu07/board/list?pageNo=${$route.query.pageNo}`" 
                            class="btn btn-info btn-sm mr-2">목록</router-link>
                        <router-link :to="`/menu07/board/updateform?bno=${$route.query.bno}&pageNo=${$route.query.pageNo}`" 
                            class="btn btn-info btn-sm mr-2">수정</router-link>
                        <button class="btn btn-info btn-sm mr-2" @click="handleRemove">삭제</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";
import apiBoard from "@/apis/board";

export default {
    // component's name found in vue devtools on chrome.
    name: "Read",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            baseURL: axios.defaults.baseURL,
            // board: 디폴트 값은 null로 줌
            board: null,
        };
    },
    // component method definition
    methods: {
        async handleRemove() {
            try {
                const response = await apiBoard.deleteBoard(this.board.bno);
                console.log(response);
                this.$router.push(`/menu07/board/list?pageNo=${this.$route.query.pageNo}`);
            } catch(error) {
                // 알아서 다이얼로그 넣기
                console.log(error);
            }
        }
    },
    // 컴포넌트가 생성될 때 실행되는 Hook
    created() {
        apiBoard.readBoard(this.$route.query.bno, this.$route.query.hit)
        .then(response => {
            this.board = response.data;
        })
        .catch(error => {
            //알아서 하기
            console.log(error);
        });
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>