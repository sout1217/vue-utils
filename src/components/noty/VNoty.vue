<template>
    <div>
        <input type="text" v-model="message">
        <p>
            <button type="button" @click="showAlert">Alert 출력</button>
        </p>
        <p>
            <button type="button" @click="showError">Error 출력</button>
        </p>
        <p>
            <button type="button" @click="showSuccess">Success 출력</button>
        </p>
        <p>
            <button type="button" @click="showWarn">Warning 출력</button>
        </p>
        <p>
            <button type="button" @click="showInfo">Info 출력</button>
        </p>
    </div>
</template>
<script>
    /** 알림창 */
    import noty from "./noty";
    export default {
        name: 'noty',
        data() {
            return {
                message: null
            }
        },
        methods: {
            showAlert() {
                noty.alert(this.message)
            },
            showError() {
                noty.error(this.message)
            },
            showSuccess() {
                noty.success(this.message)
            },
            showWarn() {
                noty.warning(this.message)
            },
            showInfo() {
                noty.info(this.message)
            },
        },
    }
</script>
