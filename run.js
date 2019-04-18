#!/usr/bin/env node

const path = require('path');
const child_process = require('child_process');
const assert = require('assert');

assert(process.argv.length === 3, 'only one argument accepted');

function exec(cmd, args, options) {
  child_process.execFileSync(cmd, args, Object.assign({ stdio: 'inherit' }, options));
}

function getVersion() {
  function sh(cmd) {
    try {
      return child_process.execSync(cmd, {
        stdio: ['inherit', 'pipe', 'ignore'],
        encoding: 'utf8',
      }).trim();
    } catch (e) {
      return undefined;
    }
  }

  const getTag = () => sh('git describe --tags --exact-match');
  const getBranch = () => sh('git symbolic-ref -q --short HEAD');
  const getCommit = () => sh('git rev-parse -q --short HEAD');
  const getPkgVersion = () => `v${require(path.resolve('package.json')).version}`;

  return getTag() || getBranch() || getCommit() || getPkgVersion();
}

process.env.DOCS_PATH = path.resolve('docs');
process.env.DOCS_VERSION = getVersion();

const command = process.argv[2];

exec('npm', ['run', command], {
  cwd: __dirname,
});

if (command === 'build') {
  // move the built site from __dirname to cwd
  const docusaurusOutDir = path.join(__dirname, 'build', 'openzeppelin-solidity');
  const outDir = 'docsite-build';
  exec('rm', ['-rf', outDir]);
  exec('mv', [docusaurusOutDir, outDir]);
  console.error(`Moved 'build' folder to '${outDir}'.`);
}
