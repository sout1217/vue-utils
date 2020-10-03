import Vue from 'vue'
import App from './App.vue'

// ctk-picker 설정
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// VuePersianDatetimePicker 설정
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';

// ctk-picker 설정
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

// VuePersianDatetimePicker
Vue.component('date-picker', VuePersianDatetimePicker);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
