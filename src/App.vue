<template>
    <div id="app">
        <div class="container">
<!--            <show-down />-->
<!--            <auto-size />-->
<!--            <DateFNS />-->
<!--            <picker />-->
<!--            <ctk-picker />-->
<!--            <win-picker />-->
            <vue-js-picker />
        </div>
    </div>
</template>

<script>
    // import ShowDown from "./components/show-down/ShowDown";
    // import AutoSize from "./components/auto-size/AutoSize";
    // import DateFNS from "./components/date-fns/DateFNS";
    // import picker from "./components/persian-datetime-picker/Picker";
    // import CtkPicker from "./components/ctk-picker/CtkPicker";
    // import WinPicker from "./components/window-picker/WinPicker";
    import VueJsPicker from "./components/vuejs-picker/VueJsPicker";

    export default {
        name: 'App',
        components: {
            VueJsPicker
            // WinPicker,
            // DateFNS
            // AutoSize,
            // ShowDown,
            // picker,
            // CtkPicker,
        },
    }
</script>

<style>
    .container {
        margin: 20% 20%;
        padding: 20px;
        outline: 3px dashed red;
    }
</style>
