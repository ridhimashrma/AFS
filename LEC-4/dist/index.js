"use strict";
//enum ----> set of constant values
Object.defineProperty(exports, "__esModule", { value: true });
// function addblog(role:string):string{
//     if(role=='user'){
//         return "not authorized"
//     }
//     //blog add
//     return "blog added"
// }
function addblog(role) {
    if (role == 'user') {
        return "not authorized";
    }
    //blog add
    return "blog added";
}
let message = addblog('admin');
let message2 = addblog('user');
//addblog("hjgh")
//enum
// enum Role2{
//     user,
//     admin
// }
// enum Role2{
//     user=1,
//     admin=20
// }
var Role2;
(function (Role2) {
    Role2["user"] = "user";
    Role2["admin"] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user); //0
console.log(Role2.admin); //1
function addblog2(role) {
    if (role == 'user') {
        return "not authorized";
    }
    //blog add
    return "blog added";
}
addblog2(Role2.user);
addblog2(Role2.admin);
//type any
let a; //treat like javascript (Any type)
a: "khjghg";
a: 10;
let b; //by default it is any type
//noImplicitAny in tsconfig.json
//# sourceMappingURL=index.js.map