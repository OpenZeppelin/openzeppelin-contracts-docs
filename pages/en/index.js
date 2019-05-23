const React = require('react');

const version = process.env['DOCS_VERSION'];
const { docs } = require(`${process.cwd()}/sidebars.json`);

const firstCategory = Object.keys(docs)[0];
const firstPage = docs[firstCategory][0];

// being conservative here to ensure the script below is safe
if (/[^\w\d\-]/.test(firstPage)) {
  throw new Error(`Unsupported doc id ${firstPage}`);
}

class Index extends React.Component {
  render() {
    return (
      <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
        window.location.href = '${version}/${firstPage}';
      `}}/>
    );
  }
}

module.exports = Index;
