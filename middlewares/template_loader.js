import path from "path";
import config from "../config.js";

const filename = "render.js";

export default function(app) {
    let srcpath = config.theme_path;
    let theme_name = config.current_theme;

    console.log(srcpath, theme_name, filename);
    let fn = require(path.join(srcpath, theme_name, filename));

    if(typeof fn != "function" && typeof fn.default == "function") {
        fn = fn.default;
    } else {
        throw(new Error("plugin must be a function!"));
    }

    fn.call(app, app);
}
