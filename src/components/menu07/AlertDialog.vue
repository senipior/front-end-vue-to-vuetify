<!-- component UI definition-->
<template>
    <modal-dialogue-template>
        알림
    

    <template v-slot:body>
        <div v-if="loading" class="mt-3">
            <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-if="!loading">{{message}}</div>
    </template>

    <template v-slot:footer>
        <button class="btn btn-info btn-sm" @click="$emit('close')">닫기</button>
    </template>

    </modal-dialogue-template>
</template>

<script>
import ModalDialogueTemplate from "@/components/menu02/ModalDialogueTemplate.vue";
export default {
    // component's name found in vue devtools on chrome.
    name: "AlertDialog",
    // components that i want to add
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
    },
    props: ["message", "loading"]
}
</script>

<!-- component style definition-->
<style scoped>

</style>