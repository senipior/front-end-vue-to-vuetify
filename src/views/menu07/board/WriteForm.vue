
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            글쓰기
        </div>
        <div class="card-body">
            <form @submit.prevent="handleAdd">
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">제목</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="board.btitle"/>
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">내용</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="board.bcontent"/>
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">첨부그림</label>
                <div class="col-sm-10">
                    <input type="file" class="form-control-file" ref="battach"/>
                </div>
                </div>
                <div class="form-group row">
                <div class="col-sm-12 d-flex justify-content-center">
                    <input type="submit" class="btn btn-primary btn-sm mr-2" value="추가"/>
                    <input type="button" class="btn btn-primary btn-sm" value="취소" v-on:click="handleCancel"/>
                </div>
                </div>
            </form>   
        </div>

        <alert-dialog v-if="alertDialog"
                       :loading="loading"
                       :message="alertDialogMessage"
                       @close="alertDialog=false"/>
    </div>
</template>

<script>
import apiBoard from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "WriteForm",
    // components that i want to add
    components: {
        AlertDialog
    },
    // component data definition
    data: function() {
        return {
            board: {
                btitle: "",
                bcontent: ""
            },
            loading: false,
            alertDialog: false,
            alertDialogMessage: "",
        };
    },
    // component method definition
    methods: {
        async handleAdd() {
            try {
                const multipartFormData = new FormData();
                multipartFormData.append("btitle", this.board.btitle);
                multipartFormData.append("bcontent", this.board.bcontent);
                multipartFormData.append("mid", this.$store.state.userId);
                const battach = this.$refs.battach;
                // 위에 input file은 mutiple이 추가 되면 여러개의 파일을 선택할 수 있음. 그래서 files가 되는 것.
                if(battach.files.length > 0) {
                    // 파일이 하나 아니면 0개인데 하나 일 때니깐 배열의 첫번째를 불러옴
                    multipartFormData.append("battach", battach.files[0]);
                }
                this.loading = true;
                this.alertDialog = true;
                const response = await apiBoard.createBoard(multipartFormData);
                console.log(response);
                this.loading = false;
                this.alertDialog = false;
                this.$router.push("/menu07/board/list");
            } catch(error) {
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
            this.$router.push("/menu07/board/list");
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>