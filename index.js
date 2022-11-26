'use strict';

module.exports = {
    isValidEmail: function (email) {
        if (!email) {
            return false;
        }
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email)
    },
    safeArray: function (val) {
        if (Array.isArray(val)) {
            return val;
        } else if (typeof val === "string") {
            try {
                let newVal = JSON.parse(val);
                if (Array.isArray(newVal)) {
                    return newVal
                } else return []
            } catch (err) {
                return [];
            }
        } else {
            return [];
        }
    }
}