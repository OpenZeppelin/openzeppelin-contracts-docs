---
title: Ownership
---

<div class="contracts">

## Contracts

### `Ownable`

The Ownable contract has an owner address, and provides basic authorization control
functions, this simplifies the implementation of &quot;user permissions&quot;.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Ownable.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#Ownable.owner()"><code class="function-signature">owner()</code></a></li><li><a href="#Ownable.isOwner()"><code class="function-signature">isOwner()</code></a></li><li><a href="#Ownable.renounceOwnership()"><code class="function-signature">renounceOwnership()</code></a></li><li><a href="#Ownable.transferOwnership(address)"><code class="function-signature">transferOwnership(address newOwner)</code></a></li><li><a href="#Ownable._transferOwnership(address)"><code class="function-signature">_transferOwnership(address newOwner)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#Ownable.OwnershipTransferred(address,address)"><code class="function-signature">OwnershipTransferred(address previousOwner, address newOwner)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Ownable.constructor()"></a><code class="function-signature">constructor()</code></h4>

The Ownable constructor sets the original `owner` of the contract to the sender
account.



<h4><a class="anchor" aria-hidden="true" id="Ownable.owner()"></a><code class="function-signature">owner() <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Ownable.isOwner()"></a><code class="function-signature">isOwner() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Ownable.renounceOwnership()"></a><code class="function-signature">renounceOwnership()</code></h4>

Allows the current owner to relinquish control of the contract.
It will not be possible to call the functions with the `onlyOwner`
modifier anymore.




<h4><a class="anchor" aria-hidden="true" id="Ownable.transferOwnership(address)"></a><code class="function-signature">transferOwnership(address newOwner)</code></h4>

Allows the current owner to transfer control of the contract to a newOwner.




<h4><a class="anchor" aria-hidden="true" id="Ownable._transferOwnership(address)"></a><code class="function-signature">_transferOwnership(address newOwner)</code></h4>

Transfers control of the contract to a newOwner.






<h4><a class="anchor" aria-hidden="true" id="Ownable.OwnershipTransferred(address,address)"></a><code class="function-signature">OwnershipTransferred(address previousOwner, address newOwner)</code></h4>





### `Secondary`

A Secondary contract can only be used by its primary account (the one that created it).

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Secondary.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#Secondary.primary()"><code class="function-signature">primary()</code></a></li><li><a href="#Secondary.transferPrimary(address)"><code class="function-signature">transferPrimary(address recipient)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#Secondary.PrimaryTransferred(address)"><code class="function-signature">PrimaryTransferred(address recipient)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Secondary.constructor()"></a><code class="function-signature">constructor()</code></h4>

Sets the primary account to the one that is creating the Secondary contract.



<h4><a class="anchor" aria-hidden="true" id="Secondary.primary()"></a><code class="function-signature">primary() <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Secondary.transferPrimary(address)"></a><code class="function-signature">transferPrimary(address recipient)</code></h4>

Transfers contract to a new primary.






<h4><a class="anchor" aria-hidden="true" id="Secondary.PrimaryTransferred(address)"></a><code class="function-signature">PrimaryTransferred(address recipient)</code></h4>





</div>