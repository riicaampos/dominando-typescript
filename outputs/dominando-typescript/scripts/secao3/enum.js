"use strict";
var Permission;
(function (Permission) {
    //Posso setar o numero em que o enum vai começar
    Permission[Permission["ADMIN"] = 10] = "ADMIN";
    Permission["USER"] = "User";
    Permission["READ_ONLY"] = "Read Only";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READ_ONLY);
