"use strict";

function plugin(ctx, next) {
    console.log(`plugin "test" start`);
    console.log(`request time ${new Date()}`);
}

module.exports = plugin;
