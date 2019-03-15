const glob = require('glob');
const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

const _ = require('lodash');

const { customDocsPath } = require('./siteConfig');
const docsPath = path.resolve('..', customDocsPath);

const sidebar = require(path.resolve(docsPath, 'sidebar.json'));

function expandSidebar(sidebar) {
  return _.mapValues(sidebar, function expandItems(items) {
    return _.flatMap(items, function (item) {
      if (typeof item === 'object') {
        if (item.type === 'directory') {
          const files = glob.sync(path.resolve(docsPath, item.directory, '**/*'), { nodir: true });
          return files.map(getDocId);
        } else if (item.type === 'subcategory') {
          const expandedItem = Object.assign({}, item, { ids: expandItems(item.ids) });
          return [expandedItem];
        }
      } else {
        return [item];
      }
    });
  });
}

function getDocId(file) {
  const dirname = path.dirname(path.relative(docsPath, file));
  const fm = matter.read(file);
  const id = fm.data.id || path.parse(file).name;
  return path.join(dirname, id);
}

module.exports = {
  "docs": expandSidebar(sidebar),
};
