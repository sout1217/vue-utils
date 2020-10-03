
<template>
    <div class="show-down">

        <div class="row">
            <div class="col-3">
                <h3><b>마크 다운 컨버트</b></h3>
            </div>
            <div class="col">
                <a href="https://gist.github.com/ihoneymon/652be052a0727ad59601">https://gist.github.com/ihoneymon/652be052a0727ad59601</a>
            </div>
        </div>

        <div class="row">
            <div class="col-3   ">
                <textarea v-model="text" cols="30" rows="10"></textarea>
            </div>
            <div class="col" v-html="print">

            </div>
        </div>

        <div class="row">
            <div class="col">
                <button class="btn btn-sm    btn-primary" @click="convert(text)">컨버트</button>
            </div>
        </div>

        <div class="row">
            <div class="col">
                {{ print }}
            </div>
        </div>

    </div>
</template>
<script>
    /** 마크다운 변환기 */
    import showdown from 'showdown'

    showdown.setOption('strikethrough', true)
    showdown.setOption('tables', true)
    const markdownConverter = new showdown.Converter()
    export default {
        name: 'show-down',
        methods: {
            convert(text) {
                if (!text) {
                    return
                }
                this.print = markdownConverter.makeHtml(text)
            }
        },
        data() {
            return {
                text: null,
                print: null
            }
        }
    }
</script>
