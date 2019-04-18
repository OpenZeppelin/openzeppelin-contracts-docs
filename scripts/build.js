const handleErrorCode = require('./util').handleErrorCode
const path = require('path')
const shell = require('shelljs')
const tmp = require('tmp')

/**
 * Entry point.
 */
function main(argv) {
  const tag = `v${require('../docs/website/versions.json')[0]}`;
  const version = tag.slice(1)
  const tempDir = tmp.dirSync().name
  try {
    const repoDir = path.resolve(tempDir, 'zeppelin-solidity')
    const contractsDir = path.resolve(repoDir, 'contracts')
    const parentDir = path.resolve('..')
    const outputDir = path.resolve('docs')
    const websiteDir = path.resolve(outputDir, 'website')
    const apiDir = path.resolve(websiteDir, 'build', 'api')
    shell.cd(tempDir)
    handleErrorCode(shell.exec('git clone https://github.com/OpenZeppelin/zeppelin-solidity.git'))
    shell.cd('zeppelin-solidity')
    handleErrorCode(shell.exec(`git checkout -b ${tag} ${tag}`))
    handleErrorCode(shell.exec(`npx solidity-docgen ${repoDir} ${contractsDir} ${outputDir} --exclude mocks,examples`))
    shell.cd(websiteDir)
    handleErrorCode(shell.exec(`npm install`))
    handleErrorCode(shell.exec('npm run build'))
  }
  finally {
    shell.rm('-rf', tempDir)
  }
}

if (require.main === module) {
  try {
    main(process.argv)
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}
