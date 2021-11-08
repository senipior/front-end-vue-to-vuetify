
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam04FormBinding
        </v-card-title>
        <v-form v-on:submit.prevent="handleSubmit">
            <v-text-field label="Name" v-model="product.name" type="text" required ></v-text-field>
            <v-text-field label="Company" v-model="product.company" type="text" required></v-text-field>
            <v-text-field label="Price" v-model="product.price" type="number" prefix="$" required></v-text-field>
            <v-textarea label="Info" v-model="product.info" type="text"></v-textarea>
            <v-select label="MadeIn" v-model="product.madein" :items="contries" type="text"/>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Colors</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="black" v-model="product.colors"/>
                        <label class="form-check-label">black</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="white" v-model="product.colors"/>
                        <label class="form-check-label">white</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="red" v-model="product.colors"/>
                        <label class="form-check-label">red</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Sale1</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="product.sale1"/>
                        <label class="form-check-label">판매여부</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Sale2</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" 
                            v-model="product.sale2" true-value="yes" false-value="no"/>
                        <label class="form-check-label">판매여부</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Sex</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="radio" class="form-check-input" v-model="product.sex" value="man"/>
                        <label class="form-check-label">Man</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" v-model="product.sex" value="woman"/>
                        <label class="form-check-label">Woman</label>
                    </div>
                </div>
            </div>
            <div>
                <v-btn color="info" class="mr-2" small v-bind:disabled="disabledRegButton">등록</v-btn>
                <v-btn color="info" class="mr-2" small router-link to="/">취소</v-btn>
            </div>
        </v-form>    
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