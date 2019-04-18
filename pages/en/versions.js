const React = require('react');

const { Container } = require('../../core/CompLibrary');

const { baseUrl } = require(process.cwd() + '/siteConfig');

const oldSiteVersions = [
  '2.1.3', '2.1.2', '2.1.1',
  '1.12.0', '1.11.0', '1.10.0',
  '1.8.0', '1.7.0', '1.6.0', '1.5.0',
].map(ver => ({ 
  tag: `v${ver}`,
  documentation: `https://5ca2514b224a4200080bb4c3--openzeppelin-docs.netlify.com/api/docs/${ver}/get-started`,
}));

const newVersions = [
  {
    tag: 'v2.3.0',
    documentation: baseUrl,
  },
  {
    tag: 'v2.2.0',
    documentation: `https://5ca2514b224a4200080bb4c3--openzeppelin-docs.netlify.com/docs/get-started`,
  },
];
  
const versions = newVersions.concat(oldSiteVersions).map(version => (
  Object.assign({}, version, {
    changelog: `https://github.com/OpenZeppelin/zeppelin-solidity/releases/tag/${version.tag}`,
  })
));

function Versions(props) {
  return (
    <Container className="mainContainer versionsContainer">
      <h1>Versions</h1>

      <table className="versions">
        <tbody>
          {versions.map(
            version => (
              <tr key={ version.tag }>
                <th>{ version.tag }</th>
                <td>
                  <a href={ version.documentation }>Documentation</a>
                </td>
                <td>
                  <a href={ version.changelog }>Release Notes</a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
  </Container>
  );
}

module.exports = Versions;
