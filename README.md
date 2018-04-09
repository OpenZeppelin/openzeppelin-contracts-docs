OpenZeppelin Documentation Generator
====================================

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
