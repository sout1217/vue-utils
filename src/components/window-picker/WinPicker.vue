<template>
    <div class="win-picker">

        <div id="picker"></div>
<!--        <button id="toggle" class="btn btn-primary">투글</button>-->
        <input id="input" class="toggle" type="text">


        <div id="hour"></div>
        <input type="text" id="hour-input" class="hour-input">

        <div id="date-hour" class="wdp-green"></div>
        <input type="text" id="date-hour-input" class="date-hour-input">


    </div>
</template>

<script>
    /** 날짜 선택기 */
    import WindowDatePicker from 'window-date-picker'
    import 'window-date-picker/dist/css/window-date-picker.min.css'

    WindowDatePicker.createLanguage('kor', {
        DAYS_ABBR: ['', '월', '화', '수', '목', '금', '토', '일'],
        MONTHS: ['', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        MONTHS_ABBR: ['', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        AM_PM: ['오전', '오후'],
        BUTTONS: ['취소', '확인'],
        INVALID_DATE: '유효하지 않은 날짜'
    });


    export default {
        name: "WinPicker",

        mounted() {
            new WindowDatePicker({
                el: '#picker',
                toggleEl: '.toggle',
                inputEl: '#input',
                dateType: 'MM/DD/YYYY',
                lang: 'kor',
                value: new Date()
            });

            new WindowDatePicker({
                el: '#hour',
                toggleEl: '.hour-input',
                inputEl: '#hour-input',
                type: 'HOUR',
                dateType: 'MM/DD/YYYY',
                lang: 'kor',
                showButtons: true,
                value: new Date()
            });

            new WindowDatePicker({
                el: '#date-hour', // 사용될 영역
                toggleEl: '.date-hour-input', // UI 폼 뛰울 버튼
                inputEl: '#date-hour-input', // 입력되는 곳
                type: 'DATEHOUR', // UI 타입
                dateType: 'MM/DD/YYYY', // 날짜 타입
                lang: 'kor', // 언어 설정
                showButtons: true, // 취소/확인 버튼
                value: new Date(), // 초기값
                showArrowButtons: false, // 화살표 모양 또는 + - 모양
                orientation: false // 전월, 다음월 순서 거꾸로
            });
        }
    }
</script>

<style scoped>

</style>