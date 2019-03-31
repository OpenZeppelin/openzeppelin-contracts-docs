#!/usr/bin/env node

const path = require('path');
const child_process = require('child_process');

process.env.DOCS_PATH = path.resolve('docs');

child_process.execFileSync('npm', ['run', process.argv[2]], {
  cwd: __dirname,
  stdio: 'inherit',
});
