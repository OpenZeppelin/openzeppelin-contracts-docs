/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const process = require('process');

const docsiteRelativeDocsPath = process.env['DOCS_PATH'] || 'demo-docs';
const customDocsPath = path.relative('..', docsiteRelativeDocsPath);

const version = process.env['DOCS_VERSION'] || 'vX.Y.Z';

const siteConfig = {
  title: 'OpenZeppelin',
  tagline: 'OpenZeppelin is an open framework of reusable and secure smart contracts in the Solidity language.',
  url: 'https://docs.openzeppelin.org',
  baseUrl: '/',
  docsUrl: '',
  organizationName: 'OpenZeppelin',
  projectName: 'openzeppelin-solidity',
  repoUrl: 'https://github.com/OpenZeppelin/openzeppelin-solidity',
  disableHeaderTitle: true,
  headerLinks: [
    {
      href: '/versions',
      label: version,
    },
    {
      href: '/',
      label: 'Learn',
    },
    {
      href: 'https://forum.zeppelin.solutions',
      label: 'Discuss',
    },
    {
      href: 'https://github.com/OpenZeppelin/openzeppelin-solidity',
      label: 'Contribute',
    },
  ],
  onPageNav: 'separate',
  headerIcon: 'img/openzeppelin-logo.svg',
  footerIcon: 'img/openzeppelin-symbol.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#5AA5FF',
    secondaryColor: 'white',
  },
  copyright: 'Copyright © 2018 Smart Contract Solutions',
  gaTrackingId: 'UA-85043059-1',
  highlight: {
    theme: 'atom-one-dark',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: [
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,700,400italic,700italic',
  ],
  customDocsPath,
  cleanUrl: true,
};

module.exports = siteConfig;
