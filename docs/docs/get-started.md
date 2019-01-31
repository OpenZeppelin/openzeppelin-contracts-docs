---
id: get-started
title: Get Started
---

OpenZeppelin can be installed directly into your existing node.js project with `npm install --save-exact openzeppelin-solidity`, but OpenZeppelin also integrates directly with [Truffle](https://github.com/ConsenSys/truffle), an Ethereum development environment, which we'll use to get started.

Please install Truffle and initialize your project:

```sh
$ npm install -g truffle
$ mkdir myproject && cd myproject
$ truffle init
```

To install the OpenZeppelin library, run the following in your Solidity project root directory:
```sh
$ npm init -y
$ npm install --save-exact openzeppelin-solidity
```

**Note that OpenZeppelin only lightly follows semantic versioning.** You may encounter breaking changes upon a minor version bump. We recommend pinning the version of OpenZeppelin you use by using the `--save-exact` option.

After that, you'll get all the library's contracts in the `node_modules/openzeppelin-solidity/contracts` folder. Because Truffle and other Ethereum development toolkits understand `node_modules`, you can use the contracts in the library like so:

```js
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract MyContract is Ownable {
  ...
}
```

## Next Steps

After installing OpenZeppelin, check out the rest of the guides in the sidebar to learn about the different contracts that OpenZeppelin provides and how to use them.

- [Learn About Access Control](/api/docs/learn-about-access-control.html)
- [Learn About Crowdsales](/api/docs/learn-about-crowdsales.html)
- [Learn About Tokens](/api/docs/learn-about-tokens.html)
- [Learn About Utilities](/api/docs/learn-about-utilities.html)

You may also want to take a look at the guides which cover several common use cases and good practices: https://blog.zeppelin.solutions/guides/home

For example, [The Hitchhiker’s Guide to Smart Contracts in Ethereum](https://blog.zeppelin.solutions/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05) will help you get an overview of the various tools available for smart contract development, and help you set up your environment.

[A Gentle Introduction to Ethereum Programming, Part 1](https://blog.zeppelin.solutions/a-gentle-introduction-to-ethereum-programming-part-1-783cc7796094) provides very useful information on an introductory level, including many basic concepts from the Ethereum platform.

For a more in-depth dive, you may read the guide [Designing the architecture for your Ethereum application](https://blog.zeppelin.solutions/designing-the-architecture-for-your-ethereum-application-9cec086f8317), which discusses how to better structure your application and its relationship to the real world.

You may also ask for help or follow OpenZeppelin's progress in the community [forum](https://forum.zeppelin.solutions), or read OpenZeppelin's full API on this website.
