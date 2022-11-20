'use strict';

module.exports = {
    isValidEmail: function (email) {
        if (!email) {
            throw "Param is not valid to check."
        }
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email)
    },
    safeArray: function (val) {
        if (Array.isArray(val)) {
            return val;
        } else {
            return [];
        }
    }
}