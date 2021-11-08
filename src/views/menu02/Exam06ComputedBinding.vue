
<!-- component UI definition-->
<template>
    <div class="card">
        <div class="card-header">
            Exam06ComputedBinding
        </div>
        <div class="card-body">
            <p>ssn1: {{ssn1}} </p>
            <p>ssn2: {{ssn2}} </p>
            <p>date: {{date}} </p>
            <p>ssn: {{ssn1}}-{{ssn2.charAt(0)}}+****** </p>
            <p>ssn: {{getSsn()}} </p>
            <p>ssn: {{computedSsn}} </p>
            <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
        </div>
    </div>
</template>


<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "Exam06ComputedBinding",
    // component that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
            ssn1: "951004",
            ssn2: "112345",
            date: new Date()
        };
    },
    // component method definition
    methods: {
        getSsn() {
                console.log("getSsn() 실행됨");
                const ssn = this.ssn1 + "-" + this.ssn2.charAt(0) + "******";
                return ssn;
            },
            changeData() {
                this.date = new Date();
                this.ssn2= "2220123";
            },
        computed: {
            computedSsn() {
                console.log("computedSsn() 실행됨");
                const ssn = this.ssn1 + "-" + this.ssn2.charAt(0) + "******";
                return ssn;
            }
        }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>