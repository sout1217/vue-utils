<template>
    <div class="date-range-picker">



        <h5>기본 날짜범위 선택기</h5>
        <date-range-picker
                placeholder="YYYY-MM-DD"
                secondPlaceholder="2번째 선택"
                :dayStr="dayStr"
                :value="value"
                :rangeSeparator="rangeSeparator"
                v-model="value"
        />


    </div>
</template>

<script>
    import { DateRangePicker } from '@livelybone/vue-datepicker'
    import '@livelybone/vue-datepicker/lib/css/index.css'


    export default {
        name: "VueDateRangePicker",
        components: {
            DateRangePicker
        },
        data() {
            return {
                dayStr: ['일', '월', '화', '수', '목', '금', '토'],
                btnStr: '확인',
                rangeSeparator: '~',

                value: []

            }
        }
    }
</script>

<style scoped>

</style>