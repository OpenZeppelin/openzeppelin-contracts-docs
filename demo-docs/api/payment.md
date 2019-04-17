---
title: Payment
---

<div class="contracts">

## Contracts

### `PaymentSplitter`

This contract allows to split Ether payments among a group of accounts. The sender does not need to be aware
that the Ether will be split in this way, since it is handled transparently by the contract.

The split can be in equal parts or in any other arbitrary proportion. The way this is specified is by assigning each
account to a number of shares. Of all the Ether that this contract receives, each account will then be able to claim
an amount proportional to the percentage of total shares they were assigned.

`PaymentSplitter` follows a _pull payment_ model. This means that payments are not automatically forwarded to the
accounts but kept in this contract, and the actual transfer is triggered as a separate step by calling the `release`
function.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#PaymentSplitter.constructor(address[],uint256[])"><code class="function-signature">constructor(address[] payees, uint256[] shares)</code></a></li><li><a href="#PaymentSplitter.fallback()"><code class="function-signature">fallback()</code></a></li><li><a href="#PaymentSplitter.totalShares()"><code class="function-signature">totalShares()</code></a></li><li><a href="#PaymentSplitter.totalReleased()"><code class="function-signature">totalReleased()</code></a></li><li><a href="#PaymentSplitter.shares(address)"><code class="function-signature">shares(address account)</code></a></li><li><a href="#PaymentSplitter.released(address)"><code class="function-signature">released(address account)</code></a></li><li><a href="#PaymentSplitter.payee(uint256)"><code class="function-signature">payee(uint256 index)</code></a></li><li><a href="#PaymentSplitter.release(address payable)"><code class="function-signature">release(address payable account)</code></a></li><li><a href="#PaymentSplitter._addPayee(address,uint256)"><code class="function-signature">_addPayee(address account, uint256 shares_)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#PaymentSplitter.PayeeAdded(address,uint256)"><code class="function-signature">PayeeAdded(address account, uint256 shares)</code></a></li><li class="inherited"><a href="#PaymentSplitter.PaymentReleased(address,uint256)"><code class="function-signature">PaymentReleased(address to, uint256 amount)</code></a></li><li class="inherited"><a href="#PaymentSplitter.PaymentReceived(address,uint256)"><code class="function-signature">PaymentReceived(address from, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.constructor(address[],uint256[])"></a><code class="function-signature">constructor(address[] payees, uint256[] shares)</code></h4>

Creates an instance of `PaymentSplitter` where each account in `payees` is assigned the number of shares at
the matching position in the `shares` array.

All addresses in `payees` must be non-zero. Both arrays must have the same non-zero length, and there must be no
duplicates in `payees`.



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.fallback()"></a><code class="function-signature">fallback()</code></h4>

The Ether received will be logged with `PaymentReceived` events. Note that these events are not fully
reliable: it&#x27;s possible for a contract to receive Ether without triggering this function. This only affects the
reliability of the events, and not the actual splitting of Ether.

To learn more about this see the Solidity documentation for [fallback functions].

[fallback functions]: https://solidity.readthedocs.io/en/latest/contracts.html#fallback-function



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.totalShares()"></a><code class="function-signature">totalShares() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Getter for the total shares held by payees.



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.totalReleased()"></a><code class="function-signature">totalReleased() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Getter for the total amount of Ether already released.



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.shares(address)"></a><code class="function-signature">shares(address account) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Getter for the amount of shares held by an account.



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.released(address)"></a><code class="function-signature">released(address account) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Getter for the amount of Ether already released to a payee.



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.payee(uint256)"></a><code class="function-signature">payee(uint256 index) <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>

Getter for the address of the payee number `index`.



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.release(address payable)"></a><code class="function-signature">release(address payable account)</code></h4>

Triggers a transfer to `account` of the amount of Ether they are owed, according to their percentage of the
total shares and their previous withdrawals.



<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter._addPayee(address,uint256)"></a><code class="function-signature">_addPayee(address account, uint256 shares_)</code></h4>

Add a new payee to the contract.






<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.PayeeAdded(address,uint256)"></a><code class="function-signature">PayeeAdded(address account, uint256 shares)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.PaymentReleased(address,uint256)"></a><code class="function-signature">PaymentReleased(address to, uint256 amount)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PaymentSplitter.PaymentReceived(address,uint256)"></a><code class="function-signature">PaymentReceived(address from, uint256 amount)</code></h4>





### `PullPayment`

Base contract supporting async send for pull payments. Inherit from this
contract and use _asyncTransfer instead of send or transfer.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#PullPayment.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#PullPayment.withdrawPayments(address payable)"><code class="function-signature">withdrawPayments(address payable payee)</code></a></li><li><a href="#PullPayment.payments(address)"><code class="function-signature">payments(address dest)</code></a></li><li><a href="#PullPayment._asyncTransfer(address,uint256)"><code class="function-signature">_asyncTransfer(address dest, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="PullPayment.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PullPayment.withdrawPayments(address payable)"></a><code class="function-signature">withdrawPayments(address payable payee)</code></h4>

Withdraw accumulated balance.




<h4><a class="anchor" aria-hidden="true" id="PullPayment.payments(address)"></a><code class="function-signature">payments(address dest) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Returns the credit owed to an address.




<h4><a class="anchor" aria-hidden="true" id="PullPayment._asyncTransfer(address,uint256)"></a><code class="function-signature">_asyncTransfer(address dest, uint256 amount)</code></h4>

Called by the payer to store the sent amount as credit to be pulled.






</div>