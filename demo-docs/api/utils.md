---
title: Utils
---

<div class="contracts">

## Contracts

### `Address`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Address.isContract(address)"><code class="function-signature">isContract(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Address.isContract(address)"></a><code class="function-signature">isContract(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

This function will return false if invoked during the constructor of a contract,
as the code is not actually created until after the constructor finishes.






### `Arrays`

Utility library of inline array functions

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Arrays.findUpperBound(uint256[],uint256)"><code class="function-signature">findUpperBound(uint256[] array, uint256 element)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Arrays.findUpperBound(uint256[],uint256)"></a><code class="function-signature">findUpperBound(uint256[] array, uint256 element) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Upper bound search function which is kind of binary search algorithm. It searches sorted
array to find index of the element value. If element is found then returns its index otherwise
it returns index of first element which is greater than searched value. If searched element is
bigger than any array element function then returns first index after last element (i.e. all
values inside the array are smaller than the target). Complexity O(log n).






### `ReentrancyGuard`

If you mark a function `nonReentrant`, you should also
mark it `external`.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ReentrancyGuard.constructor()"></a><code class="function-signature">constructor()</code></h4>







</div>