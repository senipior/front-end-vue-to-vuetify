
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title class="font-weight-bold">
            Exam03View
        </v-card-title>
        <v-card-subtitle>
            <div>
                <v-card-text class="text-h6 font-weight-bold">선언적 방식 화면(컴포넌트) 전환</v-card-text>
                <router-link to="/menu01/exam03view/subacomponent"><v-btn color="info" class="mr-2" small>SubAComponent</v-btn></router-link>
                <router-link to="/menu01/exam03view/subbcomponent"><v-btn color="info" small>SubBComponent</v-btn></router-link>

                <v-card-text class="text-h6 mt-2 font-weight-bold">프로그램 방식 화면(컴포넌트) 전환</v-card-text>
                <v-btn @click="goUrl('a')" color="info" class="mr-2" small>SubAComponent</v-btn>
                <v-btn @click="goUrl('b')" color="info" small>SubBComponent</v-btn>
            </div>

            <div class="mt-2">
                <router-view></router-view>
            </div>
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam03View",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
        };
    },
    // component method definition
    methods: {
        goUrl(kind) {
            this.$router.push(`/menu01/exam03view/sub${kind}component`)
            .catch(()=> {});
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>