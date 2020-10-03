<template>
    <div class="vue-date-picker">

        <div class="mb-3">
            <a href="https://github.com/livelybone/vue-datepicker">https://github.com/livelybone/vue-datepicker</a>
        </div>

        <div class="hr">
            <p>1</p>
            <VueDatePickerBasic />

        </div>

        <div class="hr">
            <p>2</p>
            <vue-time-picker />

        </div>

        <div class="hr">
            <p>3</p>
            <vue-date-time-picker />

        </div>

        <div class="hr">
            <p>4</p>
            <vue-date-range-picker />

        </div>


    </div>
</template>

<script>
    import VueDatePickerBasic from "./date-picker/VueDatePicker";
    import VueTimePicker from "./time-picker/VueTimePicker";
    import VueDateTimePicker from "./date-time-picker/VueDateTimePicker";
    import VueDateRangePicker from "./date-range-picker/VueDateRangePicker";

    export default {
        name: "VueDatePicker",
        components:{
            VueDatePickerBasic,
            VueTimePicker,
            VueDateTimePicker,
            VueDateRangePicker,
        }
    }
</script>

<style scoped>

    .hr {
        margin-bottom: 50px;
        padding: 20px;
        outline: 2px dashed red;
    }
</style>