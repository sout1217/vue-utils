<template>
    <div class="ctk">
        <VueCtkDateTimePicker v-model="yourValue" />
        {{ yourValue }}
    </div>
</template>

<script>
    /** 날짜 선택기 */
    export default {
        name: "CtkPicker",
        data() {
            return {
                yourValue: null
            }
        }
    }
</script>

<style scoped>

</style>