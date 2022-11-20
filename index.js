'use strict';

module.exports = function isValidEmail(email) {
    if (!email) {
        throw "Param is not valid to check."
    }
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
}