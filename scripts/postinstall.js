#!/usr/bin/env node

// We trick Docusaurus into accepting a JavaScript file to configure the
// sidebars.

const { ln } = require('shelljs');

ln('-sf', 'sidebars.json.js', 'sidebars.json');
