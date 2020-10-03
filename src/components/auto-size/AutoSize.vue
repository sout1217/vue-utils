<template>
    <div class="auto mt-5 p-3" >

        <div class="row mb-3">
            <div class="col">
                <a href="https://www.npmjs.com/package/vue-textarea-autosize">https://www.npmjs.com/package/vue-textarea-autosize</a>

            </div>
        </div>

        <div class="row">
            <div class="col">
                <textarea    id="description" class=" form-control auto-size"></textarea>

            </div>
        </div>
    </div>
</template>

<script>
    import autosize from 'autosize'
    import $ from 'jquery'

    /** textarea 사이즈 자동 조절 */
    export default {
        name: "AutoSize",
        mounted() {
            autosize($('.auto-size'))
        },
    }
</script>

<style scoped>
    .auto {
        outline: 2px dashed red;
    }

</style>