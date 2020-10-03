<template>
    <div class="vue-date-picker">
        <h5>기본 날짜 선택기</h5>
        <date-picker
                placeholder="YYYY-MM-DD"
                :dayStr="dayStr"
                v-model="value"
        />


        <hr>
        <h5>날짜 제한과 기본값 </h5>
        <date-picker
                placeholder="YYYY-MM-DD"
                :dayStr="dayStr"
                min="2020-01-01"
                max="2020-01-15"
                v-model="value2"

        />

        <hr>
        <h5>연도 선택기</h5>
        <date-picker
                placeholder="YYYY"
                :dayStr="dayStr"
                type="year"
                v-model="value3"
        />

        <hr>
        <h5>연도-월 선택기</h5>
        <date-picker
                placeholder="YYYY-MM"
                :dayStr="dayStr"
                type="month"
                v-model="value4"
        />

        <hr>
        <h5>멀티 선택기</h5>
        <date-picker
                placeholder="YYYY-MM"
                :dayStr="dayStr"
                :btnStr="btnStr"
                :multiple="true"
                v-model="value5"
        />

        <hr>
        <h5>멀티 선택기 - 연도 월</h5>
        <date-picker
                placeholder="YYYY-MM"
                :dayStr="dayStr"
                :btnStr="btnStr"
                :multiple="true"
                type="month"
                v-model="value6"
        />

    </div>
</template>

<script>

    import { Datepicker } from '@livelybone/vue-datepicker'
    import '@livelybone/vue-datepicker/lib/css/index.css'

    export default {
        name: "VuDatePicker",
        components: {
            'date-picker': Datepicker
        },
        data() {
            return {
                dayStr: [ '일', '월', '화', '수', '목', '금', '토' ],
                btnStr: '확인',

                multiple: false, // default: false | true, false - 멀티 선택
                type: 'date', // default: date |  year, month, date
                firstDayOfWeek: 0, // default: 0 | 0 = 일요일, 1 = 월요일 ... , 6 = 토요일

                isM: 'isM', // 모바일
                popperProps: 'popperProps', // 프롭

                value: '',
                value2: '2020-01-01',
                value3: '',
                value4: '',
                value5: '',
                value6: ''

            }
        }
    }
</script>

<style scoped>

</style>