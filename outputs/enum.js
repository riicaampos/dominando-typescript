"use strict";
var Permission;
(function (Permission) {
    //Posso setar o numero em que o enum vai começar
    Permission[Permission["ADMIN"] = 10] = "ADMIN";
    Permission[Permission["USER"] = 11] = "USER";
    Permission[Permission["READ_ONLY"] = 12] = "READ_ONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READ_ONLY);
