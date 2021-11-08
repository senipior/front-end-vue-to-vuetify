<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam01AsyncControl
        </div>
        <div class="card-body">
            <div>
                <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">비동기 작업1</button>
                <button class="btn btn-info btn-sm mr-2" @click="handleBtn2">비동기 작업2</button>
            </div>
        
            <div v-if="loading" class="mt-3">
                <div class="spinner-border text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div v-if="!loading" class="mt-3">
                처리결과: {{result}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam01AsyncControl",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            loading: false,
            result: ""
        };
    },
    // component method definition
    methods: {
        work() {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("점심 먹으러 갑시다.");
                }, 3000);
            });
            return promise;
        },

        handleBtn1() {
            this.loading = true;
            this.work()
                .then((result) => {
                    this.result = result;
                })
                .catch((err) => {})
                .finally(() => {
                    this.loading = false;
                });
        },

        async handleBtn2() {
            this.loading = true;
            try {
                const result = await this.work();
                this.result = result;
            } catch(err) { //
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>