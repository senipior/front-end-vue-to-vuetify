
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam02Watch
        </v-card-title>
        <v-container>
            <v-row fluid>
                <v-col cols="3"><v-card-text class="font-weight-bold">UserId</v-card-text></v-col>
                <v-col cols="9"><v-text-field v-model="userId" type="text" required></v-text-field></v-col>
            </v-row>
            <v-divider/>
            <v-form>      
                <v-row fluid>
                    <v-col cols="3"><v-card-text class="font-weight-bold">Name</v-card-text></v-col>
                    <v-col cols="9"><v-text-field v-model="product.name" type="text" required></v-text-field></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="3"><v-card-text class="font-weight-bold">Company</v-card-text></v-col>
                    <v-col cols="9"><v-text-field v-model="product.company" type="text" required></v-text-field></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="3"><v-card-text class="font-weight-bold">Price</v-card-text></v-col>
                    <v-col cols="9"><v-text-field v-model="product.price" type="number" prefix="$" required></v-text-field></v-col>
                </v-row>
            </v-form> 
            <v-divider/>
            <v-btn color="info" class="mr-2" small @click="handleButton">product 객체 변경</v-btn>    
        </v-container>
    </v-card>
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