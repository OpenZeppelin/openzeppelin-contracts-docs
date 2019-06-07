#!/usr/bin/env node

const glob = require('glob');
const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

const _ = require('lodash');

function expandSidebars(docsPath, sidebars) {
  return _.mapValues(sidebars, function (sidebar) {
    return _.mapValues(sidebar, function expandItems(items) {
      return _.flatMap(items, function (item) {
        if (typeof item === 'object') {
          if (item.type === 'directory') {
            const files = glob.sync(path.resolve(docsPath, item.directory, '**/*'), { nodir: true });
            return files.map(file => getDocId(docsPath, file));
          } else if (item.type === 'subcategory') {
            const expandedItem = Object.assign({}, item, { ids: expandItems(item.ids) });
            return [expandedItem];
          }
        } else {
          return [item];
        }
      });
    });
  });
}

function getDocId(docsPath, file) {
  const dirname = path.dirname(path.relative(docsPath, file));
  const fm = matter.read(file);
  const id = fm.data.id || path.parse(file).name;
  return path.join(dirname, id);
}

module.exports = {
  expandSidebars,
};
