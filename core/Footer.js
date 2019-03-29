/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render () {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Ecosystem</h5>
            <a href="https://zeppelin.solutions">
              Zeppelin
            </a>
            <a href="https://zeppelinos.org">
              ZeppelinOS
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://forum.zeppelin.solutions/" target="_blank">
              Discourse
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/open-zeppelin"
              target="_blank">
              Stack Overflow
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://blog.zeppelin.solutions">Blog</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://openzeppelin.org"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/openzeppelin-logo-footer.svg'}
            alt="Open Zeppelin"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} <a
          href="https://zeppelin.solutions"
          target="_blank"
          className="fbOpenSource1">Zeppelin</a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
