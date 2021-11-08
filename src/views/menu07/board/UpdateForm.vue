
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            글 수정
        </div>
        <div class="card-body">
            <form v-if="board" v-on:submit.prevent="handleUpdate">
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">제목</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="board.btitle"/>
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">내용</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control"  v-model="board.bcontent"/>
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">첨부그림</label>
                <div class="col-sm-10">
                    <input type="file" class="form-control-file" ref="battach"/>
                </div>
                </div>
                <div>
                    <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="200"/>
                </div>
                <div class="form-group row mt-3">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <input type="submit" class="btn btn-info btn-sm mr-2" value="수정"/>
                        <input type="button" class="btn btn-info btn-sm" value="취소" v-on:click="handleCancel"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import apiBoard from "@/apis/board";

export default {
    // component's name found in vue devtools on chrome.
    name: "",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            board: null,
            baseURL: axios.defaults.baseURL,
        };
    },
    // component method definition
    methods: {
        async handleUpdate() {
            try {
                const multipartFormData = new FormData();
                    multipartFormData.append("bno", this.board.bno);
                    multipartFormData.append("btitle", this.board.btitle);
                    multipartFormData.append("bcontent", this.board.bcontent);
                    const battach = this.$refs.battach;
                    // 위에 input file은 mutiple이 추가 되면 여러개의 파일을 선택할 수 있음. 그래서 files가 되는 것.
                    if(battach.files.length > 0) {
                        // 파일이 하나 아니면 0개인데 하나 일 때니깐 배열의 첫번째를 불러옴
                        multipartFormData.append("battach", battach.files[0]);
                    }

                    this.loading = true;
                    this.alertDialog = true;
                    const response = await apiBoard.updateBoard(multipartFormData);
                    console.log(response);
                    this.loading = false;
                    this.alertDialog = false;
                    this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
            }catch(error) {
                if(error.response) {
                    this.loading = false;
                    if(error.response.status === 403) {
                        this.alertDialog = false;
                        this.$router.push("/menu07/auth/jwtauth");
                    }
                } else {
                    this.alertDialogMessage = "네트워크 통신 오류";
                }
            }

        },

        handleCancel() {
            this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
        }
    },

    //컴포넌트가 생성된 후 실행되는 hook
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