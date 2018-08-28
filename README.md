# OpenZeppelin Documentation Generator

Generates OpenZeppelin API docs at https://openzeppelin.org/api/docs/.

## Generating Docs

To generate documentation from scratch, run:

```sh
npm run gen-docs
```

After modifying styles, header links, footer, and static documents, you can automatically generate all OpenZeppelin API docs - one per contract in the codebase - by running:

```sh
npm run bump-docs -- <tag>
```

For example:

```sh
npm run bump-docs -- v1.7.0
```

This command will automatically:

* Run [solidity-docgen](https://github.com/spalladino/solidity-docgen) on the OpenZeppelin codebase at the given tag.
* Generate a new Docusaurus version matching the OpenZeppelin release tag.
* Build the Docusaurus project, yielding the result in `docs/website/build`.

## Continuous integration

The deployment of the documentation website is automated with Travis CI.

Every push of a release tag to the `openzeppelin-solidity` repository will
trigger the Travis job of this repository, through the Travis API. This job
will run the `bump-docs` script using the name of the tag passed on the API
request. The documentation source files will be pushed to this repository and
then the generated docs website will be pushed to the `api` dir of the
`openzeppelin` S3 bucket.
