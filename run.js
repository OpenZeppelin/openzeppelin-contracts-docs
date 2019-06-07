#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const assert = require('assert');

const { expandSidebars } = require('./src/sidebars');

assert(process.argv.length === 3, 'only one argument accepted');
const command = process.argv[2];


const docsPath = path.resolve('docs');


// Retrieve and expand sidebars file
retrieveSidebars();


// Set env variables used in siteConfig.js
process.env.DOCS_PATH = docsPath;
process.env.DOCS_VERSION = getVersion();


// Run the requested command (e.g. build, start)
exec('npm', ['run', command], { cwd: __dirname });


if (command === 'build') {
  // move the built site from __dirname to cwd
  const docusaurusOutDir = path.join(__dirname, 'build', 'openzeppelin-solidity');
  const outDir = 'docsite-build';
  exec('rm', ['-rf', outDir]);
  exec('mv', [docusaurusOutDir, outDir]);
  console.error(`Moved 'build' folder to '${outDir}'.`);
}


function retrieveSidebars() {
  const sidebarsFile = path.join(docsPath, 'sidebars.json');
  const sidebars = JSON.parse(fs.readFileSync(sidebarsFile));
  const expandedSidebars = expandSidebars(docsPath, sidebars);

  fs.writeFileSync(
    path.join(__dirname, 'sidebars.json'),
    JSON.stringify(expandedSidebars),
  );
}

function exec(cmd, args, options) {
  child_process.execFileSync(cmd, args, Object.assign({ stdio: 'inherit' }, options));
}

function getVersion() {
  const getPkgVersion = () => `v${require(path.resolve('package.json')).version}`;

  return getPkgVersion();
}
