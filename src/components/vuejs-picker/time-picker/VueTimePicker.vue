<template>
    <div class="time-picker">
        <h5>기본 시간 선택기</h5>
        <time-picker
                placeholder="HH:MM:SS"
                :timeStr="timeStr"
                :btnStr="btnStr"
                v-model="value"
        />

        <hr>
        <h5>시간 선택기</h5>
        <time-picker
                placeholder="HH"
                :timeStr="timeStr"
                :btnStr="btnStr"
                type="hour"
                v-model="value2"

        />

        <hr>
        <h5>시간:분 선택기</h5>
        <time-picker
                placeholder="HH:MM"
                :timeStr="timeStr"
                :btnStr="btnStr"
                type="minute"
                v-model="value3"
        />

    </div>
</template>

<script>
    import { Timepicker } from '@livelybone/vue-datepicker'
    import '@livelybone/vue-datepicker/lib/css/index.css'

    export default {
        name: "VueTimePicker",
        components: {
            'time-picker': Timepicker
        },
        data() {
            return {
                timeStr: ['시', '분', '초'],
                btnStr: '확인',
                value: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>

<style scoped>

</style>