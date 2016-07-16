// import fs from "fs";
// import path from "path";
// import compose from "koa-compose";
//
// class Plugins {
//     constructor() {
//         this.groups = {
//             "defaults": []
//         };
//     }
//
//     add(name, middleware) {
//         if(!this.groups[name]) this.groups[name] = [];
//
//         if(this.groups[name].indexOf(middleware) == -1) {
//             this.groups[name].push(middleware);
//         }
//
//         return this;
//     }
//
//     use(name) {
//         let list = [];
//         for(let fn of this.groups[name]) {
//             list.push(function(ctx, next) {
//                 return fn(ctx, next) || next();
//             });
//         }
//         return compose(list);
//     }
//
//     loadPlugins() {
//         let path = "../content/plugins/";
//     }
// }
//
// export default new Plugins();
