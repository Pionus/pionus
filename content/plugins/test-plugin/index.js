"use strict";

export default function(ctx, next) {
    console.log(`plugin "test" start`);
    console.log(`request time ${new Date()}`);
}
