---
id: learn-about-access-control
title: Learn About Access Control
---

Access control—that is, "who is allowed to do this thing"—is incredibly important in the world of smart contracts. The access control of your contract governs who can mint tokens, who can vote on proposals, who can [`selfdestruct()`](https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7) the contract, and more, so it's very important to understand how you implement access control.

## Ownership & Ownable.sol

The most common and basic form of access control is the concept of _ownership_: there's one account that is the `owner` and can do administrative tasks on contracts like minting tokens. This approach is perfectly reasonable for contracts that only have a single administrative user.

OpenZeppelin provides [contracts/ownership/Ownable.sol](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ownership/Ownable.sol) for implementing ownership in your contracts.

```solidity
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract MyContract is Ownable {

    function normalThing()
        public
    {
        // anyone can call this normalThing()
    }

    function specialThing()
        public
        onlyOwner
    {
        // only the owner can call specialThing()!
    }
}
```

By default, the `owner` of an `Ownable` contract is the `msg.sender` of the contract creation transaction, which is usually exactly what you want.

Ownable also lets you:
+ `transferOwnership(address _newOwner)` to transfer ownership from one account to another
+ `renounceOwnership()` to remove the owner altogether


Note that multisig wallet contracts (indeed, any contract that supports sending transactions) can also be the owner of a contract; the only requirement is that the owner has an Ethereum address, so it could be a Gnosis Multisig or Gnosis Safe, an Aragon DAO, an ERC725/uPort idenity contract, or a totally custom contract that _you_ create.

In this way you can use _composability_ to add additional layers of access control complexity to your contracts. Instead of having a single Ethereum Off-Chain Account (EOA) as the owner, you can replace them with a 3/3 multisg run by your project leads.

### Examples in OpenZeppelin

At the moment, quite a few of the OpenZeppelin contracts are `Ownable`, like the token contracts and crowdsale contracts. For example, when you're constructing a crowdsale, the token can be _owned_ by the crowdsale, allowing the crowdsale to call the `mint()` function and produce new tokens. We talk a lot more about crowdsales in [Learn About Crowdsales](/api/docs/learn-about-crowdsales.html).

Eventually the vast majority of access control in OpenZeppelin will switch to role-based access control.

## Role-Based Access Control & RBAC.sol

An alternative to single-concern `Ownable` is role based access control (RBAC), which, instead of keeping track of a single entity with "admin" level privileges, keeps track of multiple different entities with a variety of roles that inform the contract about what they can do.

For example, a `MintableToken` could have a `minter` role that decides who can mint tokens (which could be assigned to a Crowdsale). It could also have a `namer` role that allows changing the name or symbol of the token (for whatever reason). RBAC gives you much more flexibility over who can do what and is generally recommended for applications that need more configurability. If you're experienced with web development, the vast majority of access control systems are role-based: some users are normal users, some are moderators, and some can be company employee admins.

OpenZeppelin provides [contracts/access/rbac/Roles.sol](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/access/rbac/Roles.sol) for implementing role-based access control.

Here's an example of using `Roles` in our token example above:

```solidity
import "openzeppelin-solidity/contracts/access/rbac/Roles.sol";

contract MyToken is DetailedERC20, StandardToken {
    using Roles for Roles.Role;

    Role private minters;
    Role private namers;

    constructor(
        string _name,
        string _symbol,
        uint256 _decimals,
        address[] _minters,
        address[] _namers,
    )
        DetailedERC20(_name, _symbol, _decimals)
        Standardtoken()
        public
    {
        namers.addMany(_namers);
        minters.addMany(_minters);
    }

    function mint(address _to, uint256 _amount)
        public
    {
        // only allow minters to mint
        require(minters.has(msg.sender), "DOES_NOT_HAVE_MINTER_ROLE");
        _mint(_to, _amount);
    }

    function rename(string _name, string _symbol)
        public
    {
        // only allow namers to name
        require(namers.has(msg.sender), "DOES_NOT_HAVE_NAMER_ROLE");
        name = _name;
        symbol = _symbol;
    }
}
```

So clean! You'll notice that the role associations are always the last arguments in the constructor; this is a good pattern to follow.

## Off-Chain Access Control & Bouncer.sol

There's yet another pattern available for governing who can access your smart contract; off-chain signatures! [contracts/access/Bouncer.sol]() provides a pattern where some entity (like your server or a multisg contract or AragonDAO) _signs_ a message (called a "ticket") that says "allow so-and-so to call this method with these arguments". Then, when the user wants to redeem that ticket—perhaps in exchange for some tokens in an airdrop—they submit the ticket to the smart contract who verifies everything and then mints the user their tokens.

In the right scenarios, this pattern is super powerful! It can be used to pay for a user's gas with tokens, create efficient airdrops, and more. Check out our [post introducing the bouncer pattern](https://medium.com/@mattcondon/welcome-to-the-club-bouncer-pattern-388b66f2e9d5) for more concrete info about signing messages.

Here's an example of Bouncer in action on an airdrop smart contract for the token we created above:

```solidity
import "openzeppelin-solidity/contracts/access/Bouncer.sol";

contract MyAirdrop is Bouncer {

    ERC20 public token;
    mapping(address => nonce) public nonces;

    constructor(address[] _signers)
        public
    {
        // create our token when we deploy (for simplicity)
        token = new MyToken(
            "My Token",      // name
            "MTKN",          // symbol
            18,              // decimals
            [address(this)], // minters (that's us!)
            [address(this)]  // namers (why not?)
        );
        // then we'll register the proposed signers as authorized signers
        addManySigners(_signers);
    }

    function release(
        address _to,
        uint256 _amount,
        uint256 _nonce,
        bytes _ticket
    )
        public
        onlyValidTicketForData(_ticket)
    {
        // make sure we only give a person a single airdrop!
        require(_nonce > nonces[_to], "NONCE_NOT_GT_PREV_NONCE");

        // here we can trust the sender because of the ticket; wow!
        token.mint(_to, _amount);
    }
}
```

The `onlyTicketForData(bytes _ticket)` modifier verifies that the signature is valid for the current contract, the correct method, and the correct arguments. All that's left to do is keep track of nonces so that they can't be re-used by attackers to double or triple their Airdrop allocations and we're good to go!
