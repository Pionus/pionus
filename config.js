"use strict";

const path = require('path');

const config = {
    plugin_path: path.join(__dirname, 'content/plugins/'),
    theme_path: path.join(__dirname, 'content/themes/'),
    current_theme: 'default',
};

module.exports = config;
