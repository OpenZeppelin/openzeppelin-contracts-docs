---
title: Drafts
---

<div class="contracts">

## Contracts

### `Counters`

Provides counters that can only be incremented or decremented by one. This can be used e.g. to track the number
of elements in a mapping, issuing ERC721 ids, or counting request ids.

Include with `using Counters for Counters.Counter;`
Since it is not possible to overflow a 256 bit integer with increments of one, `increment` can skip the SafeMath
overflow check, thereby saving gas. This does assume however correct usage, in that the underlying `_value` is never
directly accessed.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Counters.current(struct Counters.Counter)"><code class="function-signature">current(struct Counters.Counter counter)</code></a></li><li><a href="#Counters.increment(struct Counters.Counter)"><code class="function-signature">increment(struct Counters.Counter counter)</code></a></li><li><a href="#Counters.decrement(struct Counters.Counter)"><code class="function-signature">decrement(struct Counters.Counter counter)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Counters.current(struct Counters.Counter)"></a><code class="function-signature">current(struct Counters.Counter counter) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Counters.increment(struct Counters.Counter)"></a><code class="function-signature">increment(struct Counters.Counter counter)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="Counters.decrement(struct Counters.Counter)"></a><code class="function-signature">decrement(struct Counters.Counter counter)</code></h4>







### `ERC1820Implementer`

ERC1820Implementer allows your contract to implement an interface for another account in the sense of ERC1820.
That account or one of its ERC1820 managers can register the implementer in the ERC1820 registry, but the registry
will first check with the implementer if it agrees to it, and only allow it if it does. Using the internal
function _registerInterfaceForAddress provided by this contract, you are expressing this agreement,
and you will be able to register the contract as an implementer in the registry for that account.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC1820Implementer.canImplementInterfaceForAddress(bytes32,address)"><code class="function-signature">canImplementInterfaceForAddress(bytes32 interfaceHash, address account)</code></a></li><li><a href="#ERC1820Implementer._registerInterfaceForAddress(bytes32,address)"><code class="function-signature">_registerInterfaceForAddress(bytes32 interfaceHash, address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC1820Implementer.canImplementInterfaceForAddress(bytes32,address)"></a><code class="function-signature">canImplementInterfaceForAddress(bytes32 interfaceHash, address account) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC1820Implementer._registerInterfaceForAddress(bytes32,address)"></a><code class="function-signature">_registerInterfaceForAddress(bytes32 interfaceHash, address account)</code></h4>







### `ERC20Migrator`

This contract can be used to migrate an ERC20 token from one
contract to another, where each token holder has to opt-in to the migration.
To opt-in, users must approve for this contract the number of tokens they
want to migrate. Once the allowance is set up, anyone can trigger the
migration to the new token contract. In this way, token holders &quot;turn in&quot;
their old balance and will be minted an equal amount in the new token.
The new token contract must be mintable. For the precise interface refer to
OpenZeppelin&#x27;s ERC20Mintable, but the only functions that are needed are
`isMinter(address)` and `mint(address, amount)`. The migrator will check
that it is a minter for the token.
The balance from the legacy token will be transferred to the migrator, as it
is migrated, and remain there forever.
Although this contract can be used in many different scenarios, the main
motivation was to provide a way to migrate ERC20 tokens into an upgradeable
version of it using ZeppelinOS. To read more about how this can be done
using this implementation, please follow the official documentation site of
ZeppelinOS: https://docs.zeppelinos.org/docs/erc20_onboarding.html
Example of usage:
```
const migrator = await ERC20Migrator.new(legacyToken.address);
await newToken.addMinter(migrator.address);
await migrator.beginMigration(newToken.address);
```

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20Migrator.constructor(contract IERC20)"><code class="function-signature">constructor(contract IERC20 legacyToken)</code></a></li><li><a href="#ERC20Migrator.legacyToken()"><code class="function-signature">legacyToken()</code></a></li><li><a href="#ERC20Migrator.newToken()"><code class="function-signature">newToken()</code></a></li><li><a href="#ERC20Migrator.beginMigration(contract ERC20Mintable)"><code class="function-signature">beginMigration(contract ERC20Mintable newToken_)</code></a></li><li><a href="#ERC20Migrator.migrate(address,uint256)"><code class="function-signature">migrate(address account, uint256 amount)</code></a></li><li><a href="#ERC20Migrator.migrateAll(address)"><code class="function-signature">migrateAll(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20Migrator.constructor(contract IERC20)"></a><code class="function-signature">constructor(contract IERC20 legacyToken)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Migrator.legacyToken()"></a><code class="function-signature">legacyToken() <span class="return-arrow">→</span> <span class="return-type">contract IERC20</span></code></h4>

Returns the legacy token that is being migrated.



<h4><a class="anchor" aria-hidden="true" id="ERC20Migrator.newToken()"></a><code class="function-signature">newToken() <span class="return-arrow">→</span> <span class="return-type">contract IERC20</span></code></h4>

Returns the new token to which we are migrating.



<h4><a class="anchor" aria-hidden="true" id="ERC20Migrator.beginMigration(contract ERC20Mintable)"></a><code class="function-signature">beginMigration(contract ERC20Mintable newToken_)</code></h4>

Begins the migration by setting which is the new token that will be
minted. This contract must be a minter for the new token.




<h4><a class="anchor" aria-hidden="true" id="ERC20Migrator.migrate(address,uint256)"></a><code class="function-signature">migrate(address account, uint256 amount)</code></h4>

Transfers part of an account&#x27;s balance in the old token to this
contract, and mints the same amount of new tokens for that account.




<h4><a class="anchor" aria-hidden="true" id="ERC20Migrator.migrateAll(address)"></a><code class="function-signature">migrateAll(address account)</code></h4>

Transfers all of an account&#x27;s allowed balance in the old token to
this contract, and mints the same amount of new tokens for that account.






### `ERC20Snapshot`

Inspired by Jordi Baylina&#x27;s MiniMeToken to record historical balances:
https://github.com/Giveth/minime/blob/ea04d950eea153a04c51fa510b068b9dded390cb/contracts/MiniMeToken.sol
When a snapshot is made, the balances and totalSupply at the time of the snapshot are recorded for later
access.

To make a snapshot, call the `snapshot` function, which will emit the `Snapshot` event and return a snapshot id.
To get the total supply from a snapshot, call the function `totalSupplyAt` with the snapshot id.
To get the balance of an account from a snapshot, call the `balanceOfAt` function with the snapshot id and the
account address.


<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20Snapshot.snapshot()"><code class="function-signature">snapshot()</code></a></li><li><a href="#ERC20Snapshot.balanceOfAt(address,uint256)"><code class="function-signature">balanceOfAt(address account, uint256 snapshotId)</code></a></li><li><a href="#ERC20Snapshot.totalSupplyAt(uint256)"><code class="function-signature">totalSupplyAt(uint256 snapshotId)</code></a></li><li><a href="#ERC20Snapshot._transfer(address,address,uint256)"><code class="function-signature">_transfer(address from, address to, uint256 value)</code></a></li><li><a href="#ERC20Snapshot._mint(address,uint256)"><code class="function-signature">_mint(address account, uint256 value)</code></a></li><li><a href="#ERC20Snapshot._burn(address,uint256)"><code class="function-signature">_burn(address account, uint256 value)</code></a></li><li><a href="#ERC20Snapshot._valueAt(uint256,struct ERC20Snapshot.Snapshots)"><code class="function-signature">_valueAt(uint256 snapshotId, struct ERC20Snapshot.Snapshots snapshots)</code></a></li><li><a href="#ERC20Snapshot._updateAccountSnapshot(address)"><code class="function-signature">_updateAccountSnapshot(address account)</code></a></li><li><a href="#ERC20Snapshot._updateTotalSupplySnapshot()"><code class="function-signature">_updateTotalSupplySnapshot()</code></a></li><li><a href="#ERC20Snapshot._updateSnapshot(struct ERC20Snapshot.Snapshots,uint256)"><code class="function-signature">_updateSnapshot(struct ERC20Snapshot.Snapshots snapshots, uint256 currentValue)</code></a></li><li><a href="#ERC20Snapshot._lastSnapshotId(uint256[])"><code class="function-signature">_lastSnapshotId(uint256[] ids)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.increaseAllowance(address,uint256)"><code class="function-signature">increaseAllowance(address spender, uint256 addedValue)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20.decreaseAllowance(address,uint256)"><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20._approve(address,address,uint256)"><code class="function-signature">_approve(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="token/ERC20#ERC20._burnFrom(address,uint256)"><code class="function-signature">_burnFrom(address account, uint256 value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ERC20Snapshot.Snapshot(uint256)"><code class="function-signature">Snapshot(uint256 id)</code></a></li><li class="inherited"><a href="#ERC20Snapshot.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#ERC20Snapshot.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot.snapshot()"></a><code class="function-signature">snapshot() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot.balanceOfAt(address,uint256)"></a><code class="function-signature">balanceOfAt(address account, uint256 snapshotId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot.totalSupplyAt(uint256)"></a><code class="function-signature">totalSupplyAt(uint256 snapshotId) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._transfer(address,address,uint256)"></a><code class="function-signature">_transfer(address from, address to, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._mint(address,uint256)"></a><code class="function-signature">_mint(address account, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._burn(address,uint256)"></a><code class="function-signature">_burn(address account, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._valueAt(uint256,struct ERC20Snapshot.Snapshots)"></a><code class="function-signature">_valueAt(uint256 snapshotId, struct ERC20Snapshot.Snapshots snapshots) <span class="return-arrow">→</span> <span class="return-type">bool,uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._updateAccountSnapshot(address)"></a><code class="function-signature">_updateAccountSnapshot(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._updateTotalSupplySnapshot()"></a><code class="function-signature">_updateTotalSupplySnapshot()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._updateSnapshot(struct ERC20Snapshot.Snapshots,uint256)"></a><code class="function-signature">_updateSnapshot(struct ERC20Snapshot.Snapshots snapshots, uint256 currentValue)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot._lastSnapshotId(uint256[])"></a><code class="function-signature">_lastSnapshotId(uint256[] ids) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>







<h4><a class="anchor" aria-hidden="true" id="ERC20Snapshot.Snapshot(uint256)"></a><code class="function-signature">Snapshot(uint256 id)</code></h4>





### `IERC1820Implementer`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC1820Implementer.canImplementInterfaceForAddress(bytes32,address)"><code class="function-signature">canImplementInterfaceForAddress(bytes32 interfaceHash, address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC1820Implementer.canImplementInterfaceForAddress(bytes32,address)"></a><code class="function-signature">canImplementInterfaceForAddress(bytes32 interfaceHash, address account) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code></h4>







### `IERC1820Registry`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC1820Registry.setInterfaceImplementer(address,bytes32,address)"><code class="function-signature">setInterfaceImplementer(address account, bytes32 interfaceHash, address implementer)</code></a></li><li><a href="#IERC1820Registry.setManager(address,address)"><code class="function-signature">setManager(address account, address newManager)</code></a></li><li><a href="#IERC1820Registry.updateERC165Cache(address,bytes4)"><code class="function-signature">updateERC165Cache(address account, bytes4 interfaceId)</code></a></li><li><a href="#IERC1820Registry.getManager(address)"><code class="function-signature">getManager(address account)</code></a></li><li><a href="#IERC1820Registry.getInterfaceImplementer(address,bytes32)"><code class="function-signature">getInterfaceImplementer(address account, bytes32 interfaceHash)</code></a></li><li><a href="#IERC1820Registry.implementsERC165Interface(address,bytes4)"><code class="function-signature">implementsERC165Interface(address account, bytes4 interfaceId)</code></a></li><li><a href="#IERC1820Registry.implementsERC165InterfaceNoCache(address,bytes4)"><code class="function-signature">implementsERC165InterfaceNoCache(address account, bytes4 interfaceId)</code></a></li><li><a href="#IERC1820Registry.interfaceHash(string)"><code class="function-signature">interfaceHash(string interfaceName)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC1820Registry.InterfaceImplementerSet(address,bytes32,address)"><code class="function-signature">InterfaceImplementerSet(address account, bytes32 interfaceHash, address implementer)</code></a></li><li class="inherited"><a href="#IERC1820Registry.ManagerChanged(address,address)"><code class="function-signature">ManagerChanged(address account, address newManager)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.setInterfaceImplementer(address,bytes32,address)"></a><code class="function-signature">setInterfaceImplementer(address account, bytes32 interfaceHash, address implementer)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.setManager(address,address)"></a><code class="function-signature">setManager(address account, address newManager)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.updateERC165Cache(address,bytes4)"></a><code class="function-signature">updateERC165Cache(address account, bytes4 interfaceId)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.getManager(address)"></a><code class="function-signature">getManager(address account) <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.getInterfaceImplementer(address,bytes32)"></a><code class="function-signature">getInterfaceImplementer(address account, bytes32 interfaceHash) <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.implementsERC165Interface(address,bytes4)"></a><code class="function-signature">implementsERC165Interface(address account, bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.implementsERC165InterfaceNoCache(address,bytes4)"></a><code class="function-signature">implementsERC165InterfaceNoCache(address account, bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.interfaceHash(string)"></a><code class="function-signature">interfaceHash(string interfaceName) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code></h4>







<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.InterfaceImplementerSet(address,bytes32,address)"></a><code class="function-signature">InterfaceImplementerSet(address account, bytes32 interfaceHash, address implementer)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC1820Registry.ManagerChanged(address,address)"></a><code class="function-signature">ManagerChanged(address account, address newManager)</code></h4>





### `SignatureBouncer`

SignatureBouncer allows users to submit a signature as a permission to
do an action.
If the signature is from one of the authorized signer addresses, the
signature is valid.
Note that SignatureBouncer offers no protection against replay attacks, users
must add this themselves!

Signer addresses can be individual servers signing grants or different
users within a decentralized club that have permission to invite other
members. This technique is useful for whitelists and airdrops; instead of
putting all valid addresses on-chain, simply sign a grant of the form
keccak256(abi.encodePacked(`:contractAddress` + `:granteeAddress`)) using a
valid signer address.
Then restrict access to your crowdsale/whitelist/airdrop using the
`onlyValidSignature` modifier (or implement your own using _isValidSignature).
In addition to `onlyValidSignature`, `onlyValidSignatureAndMethod` and
`onlyValidSignatureAndData` can be used to restrict access to only a given
method or a given method with given parameters respectively.
See the tests in SignatureBouncer.test.js for specific usage examples.



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SignatureBouncer.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#SignatureBouncer._isValidSignature(address,bytes)"><code class="function-signature">_isValidSignature(address account, bytes signature)</code></a></li><li><a href="#SignatureBouncer._isValidSignatureAndMethod(address,bytes)"><code class="function-signature">_isValidSignatureAndMethod(address account, bytes signature)</code></a></li><li><a href="#SignatureBouncer._isValidSignatureAndData(address,bytes)"><code class="function-signature">_isValidSignatureAndData(address account, bytes signature)</code></a></li><li><a href="#SignatureBouncer._isValidDataHash(bytes32,bytes)"><code class="function-signature">_isValidDataHash(bytes32 hash, bytes signature)</code></a></li><li class="inherited"><a href="access/roles#SignerRole.isSigner(address)"><code class="function-signature">isSigner(address account)</code></a></li><li class="inherited"><a href="access/roles#SignerRole.addSigner(address)"><code class="function-signature">addSigner(address account)</code></a></li><li class="inherited"><a href="access/roles#SignerRole.renounceSigner()"><code class="function-signature">renounceSigner()</code></a></li><li class="inherited"><a href="access/roles#SignerRole._addSigner(address)"><code class="function-signature">_addSigner(address account)</code></a></li><li class="inherited"><a href="access/roles#SignerRole._removeSigner(address)"><code class="function-signature">_removeSigner(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#SignatureBouncer.SignerAdded(address)"><code class="function-signature">SignerAdded(address account)</code></a></li><li class="inherited"><a href="#SignatureBouncer.SignerRemoved(address)"><code class="function-signature">SignerRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SignatureBouncer.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SignatureBouncer._isValidSignature(address,bytes)"></a><code class="function-signature">_isValidSignature(address account, bytes signature) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

is the signature of `this + account` from a signer?




<h4><a class="anchor" aria-hidden="true" id="SignatureBouncer._isValidSignatureAndMethod(address,bytes)"></a><code class="function-signature">_isValidSignatureAndMethod(address account, bytes signature) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

is the signature of `this + account + methodId` from a signer?




<h4><a class="anchor" aria-hidden="true" id="SignatureBouncer._isValidSignatureAndData(address,bytes)"></a><code class="function-signature">_isValidSignatureAndData(address account, bytes signature) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

is the signature of `this + account + methodId + params(s)` from a signer?




<h4><a class="anchor" aria-hidden="true" id="SignatureBouncer._isValidDataHash(bytes32,bytes)"></a><code class="function-signature">_isValidDataHash(bytes32 hash, bytes signature) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Internal function to convert a hash to an eth signed message
and then recover the signature and check it against the signer role.






### `SignedSafeMath`

Signed math operations with safety checks that revert on error.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SignedSafeMath.mul(int256,int256)"><code class="function-signature">mul(int256 a, int256 b)</code></a></li><li><a href="#SignedSafeMath.div(int256,int256)"><code class="function-signature">div(int256 a, int256 b)</code></a></li><li><a href="#SignedSafeMath.sub(int256,int256)"><code class="function-signature">sub(int256 a, int256 b)</code></a></li><li><a href="#SignedSafeMath.add(int256,int256)"><code class="function-signature">add(int256 a, int256 b)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SignedSafeMath.mul(int256,int256)"></a><code class="function-signature">mul(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code></h4>

Multiplies two signed integers, reverts on overflow.



<h4><a class="anchor" aria-hidden="true" id="SignedSafeMath.div(int256,int256)"></a><code class="function-signature">div(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code></h4>

Integer division of two signed integers truncating the quotient, reverts on division by zero.



<h4><a class="anchor" aria-hidden="true" id="SignedSafeMath.sub(int256,int256)"></a><code class="function-signature">sub(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code></h4>

Subtracts two signed integers, reverts on overflow.



<h4><a class="anchor" aria-hidden="true" id="SignedSafeMath.add(int256,int256)"></a><code class="function-signature">add(int256 a, int256 b) <span class="return-arrow">→</span> <span class="return-type">int256</span></code></h4>

Adds two signed integers, reverts on overflow.





### `TokenVesting`

A token holder contract that can release its token balance gradually like a
typical vesting scheme, with a cliff and vesting period. Optionally revocable by the
owner.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#TokenVesting.constructor(address,uint256,uint256,uint256,bool)"><code class="function-signature">constructor(address beneficiary, uint256 start, uint256 cliffDuration, uint256 duration, bool revocable)</code></a></li><li><a href="#TokenVesting.beneficiary()"><code class="function-signature">beneficiary()</code></a></li><li><a href="#TokenVesting.cliff()"><code class="function-signature">cliff()</code></a></li><li><a href="#TokenVesting.start()"><code class="function-signature">start()</code></a></li><li><a href="#TokenVesting.duration()"><code class="function-signature">duration()</code></a></li><li><a href="#TokenVesting.revocable()"><code class="function-signature">revocable()</code></a></li><li><a href="#TokenVesting.released(address)"><code class="function-signature">released(address token)</code></a></li><li><a href="#TokenVesting.revoked(address)"><code class="function-signature">revoked(address token)</code></a></li><li><a href="#TokenVesting.release(contract IERC20)"><code class="function-signature">release(contract IERC20 token)</code></a></li><li><a href="#TokenVesting.revoke(contract IERC20)"><code class="function-signature">revoke(contract IERC20 token)</code></a></li><li><a href="#TokenVesting._releasableAmount(contract IERC20)"><code class="function-signature">_releasableAmount(contract IERC20 token)</code></a></li><li><a href="#TokenVesting._vestedAmount(contract IERC20)"><code class="function-signature">_vestedAmount(contract IERC20 token)</code></a></li><li class="inherited"><a href="ownership#Ownable.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="ownership#Ownable.owner()"><code class="function-signature">owner()</code></a></li><li class="inherited"><a href="ownership#Ownable.isOwner()"><code class="function-signature">isOwner()</code></a></li><li class="inherited"><a href="ownership#Ownable.renounceOwnership()"><code class="function-signature">renounceOwnership()</code></a></li><li class="inherited"><a href="ownership#Ownable.transferOwnership(address)"><code class="function-signature">transferOwnership(address newOwner)</code></a></li><li class="inherited"><a href="ownership#Ownable._transferOwnership(address)"><code class="function-signature">_transferOwnership(address newOwner)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#TokenVesting.TokensReleased(address,uint256)"><code class="function-signature">TokensReleased(address token, uint256 amount)</code></a></li><li class="inherited"><a href="#TokenVesting.TokenVestingRevoked(address)"><code class="function-signature">TokenVestingRevoked(address token)</code></a></li><li class="inherited"><a href="#TokenVesting.OwnershipTransferred(address,address)"><code class="function-signature">OwnershipTransferred(address previousOwner, address newOwner)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="TokenVesting.constructor(address,uint256,uint256,uint256,bool)"></a><code class="function-signature">constructor(address beneficiary, uint256 start, uint256 cliffDuration, uint256 duration, bool revocable)</code></h4>

Creates a vesting contract that vests its balance of any ERC20 token to the
beneficiary, gradually in a linear fashion until start + duration. By then all
of the balance will have vested.




<h4><a class="anchor" aria-hidden="true" id="TokenVesting.beneficiary()"></a><code class="function-signature">beneficiary() <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.cliff()"></a><code class="function-signature">cliff() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.start()"></a><code class="function-signature">start() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.duration()"></a><code class="function-signature">duration() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.revocable()"></a><code class="function-signature">revocable() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.released(address)"></a><code class="function-signature">released(address token) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.revoked(address)"></a><code class="function-signature">revoked(address token) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.release(contract IERC20)"></a><code class="function-signature">release(contract IERC20 token)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.revoke(contract IERC20)"></a><code class="function-signature">revoke(contract IERC20 token)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting._releasableAmount(contract IERC20)"></a><code class="function-signature">_releasableAmount(contract IERC20 token) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Calculates the amount that has already vested but hasn&#x27;t been released yet.




<h4><a class="anchor" aria-hidden="true" id="TokenVesting._vestedAmount(contract IERC20)"></a><code class="function-signature">_vestedAmount(contract IERC20 token) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Calculates the amount that has already vested.






<h4><a class="anchor" aria-hidden="true" id="TokenVesting.TokensReleased(address,uint256)"></a><code class="function-signature">TokensReleased(address token, uint256 amount)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenVesting.TokenVestingRevoked(address)"></a><code class="function-signature">TokenVestingRevoked(address token)</code></h4>





</div>