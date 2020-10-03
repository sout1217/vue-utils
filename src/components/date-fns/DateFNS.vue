<template>
    <div class="date">

        <div class="row mb-3">
            <div class="col">
                <input type="datetime-local" v-model="date1">
                {{ date1 }}

            </div>
            <div class="col">
                <button class="btn btn-primary" @click="date1 = new Date('2020-10-1')">Date 생성</button>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <input type="datetime-local" v-model="date2">
                {{ date2 }}
            </div>
            <div class="col">
                <button class="btn btn-primary" @click="date2 = new Date()">Date 생성</button>
            </div>
        </div>

        <div class="row">
            <div class="col">
                {{ calcDate }}
            </div>
        </div>

        <div class="row">
            <div class="col">
                {{ calcDate2 }}
            </div>
        </div>
    </div>
</template>

<script>
    import { formatDistance } from 'date-fns'
    // import { kor } from 'date-fns/esm/locale'

    import ko from "date-fns/locale/ko"
    import distanceInWordsToNow from "date-fns/formatDistanceToNow"

    /** 날짜 계산 */
    export default {
        name: "DateFNS",
        mounted() {
        },
        data() {
            return {
                date1: null,
                date2: null,
            }
        },
        methods: {
            calc() {
            }
        },
        computed: {
            calcDate() {
                if (!this.date1) {
                    return
                }
                if (!this.date2) {
                    return
                }

                // 예전, 현재, 언어
                return formatDistance(this.date2, this.date1, { locale: ko }) + ' 전'
            },
            calcDate2() {
                if (!this.date1) {
                    return
                }
                if (!this.date2) {
                    return
                }
                return distanceInWordsToNow(this.date1, { locale: ko }) + ' 전'
            }
        }
    }
</script>

<style scoped>

</style>