
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam04FormBinding
        </v-card-title>
        <v-card-text fluid>
            <v-form v-on:submit.prevent="handleSubmit">
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Name</v-card-text></v-col>
                    <v-col cols="10"><v-text-field v-model="product.name" type="text" required></v-text-field></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Company</v-card-text></v-col>
                    <v-col cols="10"><v-text-field v-model="product.company" type="text" required></v-text-field></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Price</v-card-text></v-col>
                    <v-col cols="10"><v-text-field v-model="product.price" type="number" prefix="$" required></v-text-field></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Info</v-card-text></v-col>
                    <v-col cols="10"><v-textarea v-model="product.info" type="text" required></v-textarea></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">MadeIn</v-card-text></v-col>
                    <v-col cols="10"><v-select v-model="product.madein" :items="contries" type="text"/></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Color</v-card-text></v-col>
                    <v-col cols="10"><v-select v-model="product.color" :items="colors" type="text"/></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Sale1</v-card-text></v-col>
                    <v-col cols="10"><v-checkbox v-model="product.sale1" label="판매 여부" required></v-checkbox></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Sale2</v-card-text></v-col>
                    <v-col cols="10"><v-checkbox v-model="product.sale2" label="판매 여부" required></v-checkbox></v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2"><v-card-text class="font-weight-bold">Sale2</v-card-text></v-col>
                    <v-col cols="10">
                        <v-checkbox value="man" label="man" v-model="product.sex"/>
                        <v-checkbox value="woman" label="woman" v-model="product.sex"/>  
                    </v-col>
                </v-row>
                <v-row fluid>
                    <v-col cols="2">
                        <v-btn color="info" class="mr-2" small v-bind:disabled="disabledRegButton">등록</v-btn>
                        <v-btn color="info" small router-link to="/">취소</v-btn>
                    </v-col>
                </v-row>
            </v-form>    
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam04FormBinding",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            product:{
                name: "홍길동",
                company: "",
                price: 0,
                colors: [],
                info: "",
                madein: "한국",
                sale1: false,
                sale2: "no",
                sex: "woman"
            },
            contries: [
                '한국','미국','독일'
            ],
            colors: [
                'black', 'white', 'red'
            ],
        };
    },
    // component method definition
    methods: {
        handleSubmit() {
            console.log(this.product);
        },
        check() {
            console.log(this.product);
        }
    },
    //데이터가 변경되면 자동 계산되는 속성
    computed: {
        disabledRegButton() {
            var result = this.product.name === "" || this.product.company === "";
            return result;
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>