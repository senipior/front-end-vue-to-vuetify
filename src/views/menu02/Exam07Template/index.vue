
<!-- component UI definition-->
<template>
    <v-card>
        <v-card-title>
            Exam07Template
        </v-card-title>
        <v-card-actions>
            <v-btn color="info" class="mr-2" small @click="modalDialogueTemplate=true">Show ModalDialogueTemplate</v-btn>
            <v-btn color="info" class="mr-2" small @click="dialogA=true">Show DialogA</v-btn>
            <v-btn color="info" small @click="dialogB=true">Show DialogB</v-btn>
        </v-card-actions>
        <modal-dialogue-template v-if="modalDialogueTemplate" @close="modalDialogueTemplate=false"/>
        <dialog-a v-if="dialogA" @close="dialogA=false"/>
        <dialog-b v-if="dialogB" @close="dialogB=false"/>
    </v-card>
</template>

<script>
import ModalDialogueTemplate from "@/components/menu02/ModalDialogueTemplate.vue";
import DialogA from './DialogA.vue';
import DialogB from './DialogB.vue';

export default {
    // component's name found in vue devtools on chrome.
    name: "Exam07Template",
    // component that i want to add
    components: {
        ModalDialogueTemplate,
        DialogA,
        DialogB
    },
    // component data definition
    data: function() {
        return {
            modalDialogueTemplate: false,
            dialogA: false,
            dialogB: false,
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