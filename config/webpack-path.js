"use strict"

const path = require('path');

module.exports = {
    src: path.join(process.cwd(), 'public/src/index.js'),
    dist: path.join(process.cwd(), 'public/dist'),
    css: path.join(process.cwd(), 'public/css'),
};