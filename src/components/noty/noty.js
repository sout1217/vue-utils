import Noty from 'noty'
import 'noty/lib/noty.css'
import 'noty/lib/themes/relax.css'

export default {

    alert: message => {
        new Noty({
            type: 'alert',
            text: message,
            theme: 'relax'
        }).show()
    },
    success: message => {
        new Noty({
            type: "success",
            text: message,
            theme: 'relax'
        }).show()
    },
    warning: message => {
        new Noty({
            type: "warning",
            text: message,
            theme: 'relax'
        }).show()
    },
    error: message => {
        new Noty({
            type: "error",
            text: message,
            theme: 'relax'
        }).show()
    },
    info: message => {
        new Noty({
            type: "info",
            text: message,
            theme: 'relax'
        }).show()
    },

}


