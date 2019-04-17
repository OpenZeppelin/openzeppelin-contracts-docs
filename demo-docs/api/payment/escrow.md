---
title: Escrow
---

<div class="contracts">

## Contracts

### `ConditionalEscrow`

Base abstract escrow to only allow withdrawal if a condition is met.


<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ConditionalEscrow.withdrawalAllowed(address)"><code class="function-signature">withdrawalAllowed(address payee)</code></a></li><li><a href="#ConditionalEscrow.withdraw(address payable)"><code class="function-signature">withdraw(address payable payee)</code></a></li><li class="inherited"><a href="escrow#Escrow.depositsOf(address)"><code class="function-signature">depositsOf(address payee)</code></a></li><li class="inherited"><a href="escrow#Escrow.deposit(address)"><code class="function-signature">deposit(address payee)</code></a></li><li class="inherited"><a href="../ownership#Secondary.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../ownership#Secondary.primary()"><code class="function-signature">primary()</code></a></li><li class="inherited"><a href="../ownership#Secondary.transferPrimary(address)"><code class="function-signature">transferPrimary(address recipient)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ConditionalEscrow.Deposited(address,uint256)"><code class="function-signature">Deposited(address payee, uint256 weiAmount)</code></a></li><li class="inherited"><a href="#ConditionalEscrow.Withdrawn(address,uint256)"><code class="function-signature">Withdrawn(address payee, uint256 weiAmount)</code></a></li><li class="inherited"><a href="#ConditionalEscrow.PrimaryTransferred(address)"><code class="function-signature">PrimaryTransferred(address recipient)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ConditionalEscrow.withdrawalAllowed(address)"></a><code class="function-signature">withdrawalAllowed(address payee) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Returns whether an address is allowed to withdraw their funds. To be
implemented by derived contracts.




<h4><a class="anchor" aria-hidden="true" id="ConditionalEscrow.withdraw(address payable)"></a><code class="function-signature">withdraw(address payable payee)</code></h4>







### `Escrow`

Base escrow contract, holds funds designated for a payee until they
withdraw them.


<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Escrow.depositsOf(address)"><code class="function-signature">depositsOf(address payee)</code></a></li><li><a href="#Escrow.deposit(address)"><code class="function-signature">deposit(address payee)</code></a></li><li><a href="#Escrow.withdraw(address payable)"><code class="function-signature">withdraw(address payable payee)</code></a></li><li class="inherited"><a href="../ownership#Secondary.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../ownership#Secondary.primary()"><code class="function-signature">primary()</code></a></li><li class="inherited"><a href="../ownership#Secondary.transferPrimary(address)"><code class="function-signature">transferPrimary(address recipient)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#Escrow.Deposited(address,uint256)"><code class="function-signature">Deposited(address payee, uint256 weiAmount)</code></a></li><li class="inherited"><a href="#Escrow.Withdrawn(address,uint256)"><code class="function-signature">Withdrawn(address payee, uint256 weiAmount)</code></a></li><li class="inherited"><a href="#Escrow.PrimaryTransferred(address)"><code class="function-signature">PrimaryTransferred(address recipient)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Escrow.depositsOf(address)"></a><code class="function-signature">depositsOf(address payee) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Escrow.deposit(address)"></a><code class="function-signature">deposit(address payee)</code></h4>

Stores the sent amount as credit to be withdrawn.




<h4><a class="anchor" aria-hidden="true" id="Escrow.withdraw(address payable)"></a><code class="function-signature">withdraw(address payable payee)</code></h4>

Withdraw accumulated balance for a payee.






<h4><a class="anchor" aria-hidden="true" id="Escrow.Deposited(address,uint256)"></a><code class="function-signature">Deposited(address payee, uint256 weiAmount)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="Escrow.Withdrawn(address,uint256)"></a><code class="function-signature">Withdrawn(address payee, uint256 weiAmount)</code></h4>





### `RefundEscrow`

Escrow that holds funds for a beneficiary, deposited from multiple
parties.


<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#RefundEscrow.constructor(address payable)"><code class="function-signature">constructor(address payable beneficiary)</code></a></li><li><a href="#RefundEscrow.state()"><code class="function-signature">state()</code></a></li><li><a href="#RefundEscrow.beneficiary()"><code class="function-signature">beneficiary()</code></a></li><li><a href="#RefundEscrow.deposit(address)"><code class="function-signature">deposit(address refundee)</code></a></li><li><a href="#RefundEscrow.close()"><code class="function-signature">close()</code></a></li><li><a href="#RefundEscrow.enableRefunds()"><code class="function-signature">enableRefunds()</code></a></li><li><a href="#RefundEscrow.beneficiaryWithdraw()"><code class="function-signature">beneficiaryWithdraw()</code></a></li><li><a href="#RefundEscrow.withdrawalAllowed(address)"><code class="function-signature">withdrawalAllowed(address)</code></a></li><li class="inherited"><a href="escrow#ConditionalEscrow.withdraw(address payable)"><code class="function-signature">withdraw(address payable payee)</code></a></li><li class="inherited"><a href="escrow#Escrow.depositsOf(address)"><code class="function-signature">depositsOf(address payee)</code></a></li><li class="inherited"><a href="../ownership#Secondary.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../ownership#Secondary.primary()"><code class="function-signature">primary()</code></a></li><li class="inherited"><a href="../ownership#Secondary.transferPrimary(address)"><code class="function-signature">transferPrimary(address recipient)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#RefundEscrow.RefundsClosed()"><code class="function-signature">RefundsClosed()</code></a></li><li class="inherited"><a href="#RefundEscrow.RefundsEnabled()"><code class="function-signature">RefundsEnabled()</code></a></li><li class="inherited"><a href="#RefundEscrow.Deposited(address,uint256)"><code class="function-signature">Deposited(address payee, uint256 weiAmount)</code></a></li><li class="inherited"><a href="#RefundEscrow.Withdrawn(address,uint256)"><code class="function-signature">Withdrawn(address payee, uint256 weiAmount)</code></a></li><li class="inherited"><a href="#RefundEscrow.PrimaryTransferred(address)"><code class="function-signature">PrimaryTransferred(address recipient)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.constructor(address payable)"></a><code class="function-signature">constructor(address payable beneficiary)</code></h4>

Constructor.




<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.state()"></a><code class="function-signature">state() <span class="return-arrow">→</span> <span class="return-type">enum RefundEscrow.State</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.beneficiary()"></a><code class="function-signature">beneficiary() <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.deposit(address)"></a><code class="function-signature">deposit(address refundee)</code></h4>

Stores funds that may later be refunded.




<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.close()"></a><code class="function-signature">close()</code></h4>

Allows for the beneficiary to withdraw their funds, rejecting
further deposits.



<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.enableRefunds()"></a><code class="function-signature">enableRefunds()</code></h4>

Allows for refunds to take place, rejecting further deposits.



<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.beneficiaryWithdraw()"></a><code class="function-signature">beneficiaryWithdraw()</code></h4>

Withdraws the beneficiary&#x27;s funds.



<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.withdrawalAllowed(address)"></a><code class="function-signature">withdrawalAllowed(address) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Returns whether refundees can withdraw their deposits (be refunded). The overridden function receives a
&#x27;payee&#x27; argument, but we ignore it here since the condition is global, not per-payee.





<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.RefundsClosed()"></a><code class="function-signature">RefundsClosed()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="RefundEscrow.RefundsEnabled()"></a><code class="function-signature">RefundsEnabled()</code></h4>





</div>