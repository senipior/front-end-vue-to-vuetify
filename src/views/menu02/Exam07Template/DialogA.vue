
<!-- component UI definition-->
<template>
    <modal-dialogue-template>
        <template v-slot:header>
            DialogA
        </template>

        <template v-slot:body>
            <v-card-text>DialogA 내용입니다.</v-card-text>
        </template>

        <template v-slot:footer>
            <v-card-actions>
                <v-btn color="info" class="mr-2" small @click="$emit('close')">확인</v-btn>
                <v-btn color="info" small @click="$emit('close')">닫기</v-btn>
            </v-card-actions>
        </template>
    </modal-dialogue-template>
</template>

<script>
import ModalDialogueTemplate from "@/components/menu02/ModalDialogueTemplate.vue";
export default {
    // component's name found in vue devtools on chrome.
    name: "DialogA",
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