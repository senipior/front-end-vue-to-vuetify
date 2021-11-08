
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam02Watch
        </div>
        <div class="card-body">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>
            <hr/>
            <form>      
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.name">
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">Company</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.company">
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                    <input type="number" :class="`form-control ${bgColor}`" v-model.number="product.price">
                </div>
                </div>
            </form> 
            <hr/>
            <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>    
        </div>
    </div>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam02Watch",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            userId: "user1",
            product: {
                name: "정장",
                company: "한섬",
                price: 100000,
            },
            bgColor: ""
        };
    },
    // component method definition
    methods: {
        handleButton() {
            this.product = {
                name: "정장2",
                company: "한섬2",
                price: 200000
            };
        }
    },
    watch: {
        userId(newValue, oldValue) {
            console.log("newValue: ", newValue);
            console.log("oldValue: ", oldValue);
            console.log("this.userId: ", this.userId);
        },
        product: {
            deep: true,
            handler(newValue, oldValue) {
                console.log("newValue: ", newValue);
                console.log("oldValue: ", oldValue);
            }
        },
        "product.name"(newValue, oldValue) {
            console.log("newValue: ", newValue);
            console.log("oldValue: ", oldValue);
            console.log("this.product.name: ", this.product.name);
        },
        "product.price"(newValue, oldValue) {
            if(newValue < 0) {
                this.bgColor = "bg-danger";
            } else if(newValue>=0 && newValue<=100000){
                this.bgColor = "bg-success";
            } else {
                this.bgColor = "bg-primary";
            }
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>