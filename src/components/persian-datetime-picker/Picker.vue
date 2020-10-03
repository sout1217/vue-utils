<template>
    <div class="picker">
        <date-picker locale="ko" format="yyyy/m/d"/>
    </div>
</template>

<script>
    import DatePicker from 'vue-persian-datetime-picker'

    /** 날짜 선택기 */
    export default {
        name: "Picker",
        components: {
            DatePicker
        }

    }
</script>

<style scoped>

</style>