<template>
    <div class="date-time-picker">
        <h5>기본 날짜시간 선택기</h5>
        <date-time-picker
                placeholder="YYYY-MM-DD HH:MM:SS"
                :dayStr="dayStr"
                :timeStr="timeStr"
                :btnStr="btnStr"
                v-model="value"
        />

        <hr>
        <h5>날짜 시간(hour) 선택기</h5>
        <date-time-picker
                placeholder="YYYY-MM-DD HH:MM:SS"
                :dayStr="dayStr"
                :timeStr="timeStr"
                :btnStr="btnStr"
                timeType="hour"
                v-model="value2"
        />


    </div>
</template>

<script>
    import { DatetimePicker } from '@livelybone/vue-datepicker'
    import '@livelybone/vue-datepicker/lib/css/index.css'

    export default {
        name: "VueDateTimePicker",
        components: {
            'date-time-picker': DatetimePicker
        },
        data() {
            return {
                dayStr: ['일', '월', '화', '수', '목', '금', '토'],
                timeStr: ['시', '분', '초'],
                btnStr: '확인',

                firstDayOfWeek: 0, // default: 0 | 0 = 일요일, 1 = 월요일 ... , 6 = 토요일

                value: '',
                value2: ''
            }
        }
    }
</script>

<style scoped>

</style>