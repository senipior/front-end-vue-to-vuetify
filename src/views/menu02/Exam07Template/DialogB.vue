
<!-- component UI definition-->
<template>
    <modal-dialogue-template>
        <template v-slot:header>
            로그인
        </template>

            <template v-slot:body>
            <form>
                <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" autocomplete="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" autocomplete="new-password">
                </div>
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">Check me out</label>
                </div>
            </form>
            </template>

            <template v-slot:footer>
            <v-btn color="info" class="mr-2" small @click="$emit('close')">로그인</v-btn>
            <v-btn color="info" small @click="$emit('close')">취소</v-btn>
        </template>
    </modal-dialogue-template>
</template>

<script>
import ModalDialogueTemplate from "@/components/menu02/ModalDialogueTemplate.vue";

export default {
    // component's name found in vue devtools on chrome.
    name: "DialogB",
    // component that i want to add
    components: {
        ModalDialogueTemplate
    },
    // component data definition
    data: function() {
        return {
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