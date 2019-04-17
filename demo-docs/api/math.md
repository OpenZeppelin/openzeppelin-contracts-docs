---
title: Math
---

<div class="contracts">

## Contracts

### `Math`

Assorted math operations.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Math.max(uint256,uint256)"><code class="function-signature">max(uint256 a, uint256 b)</code></a></li><li><a href="#Math.min(uint256,uint256)"><code class="function-signature">min(uint256 a, uint256 b)</code></a></li><li><a href="#Math.average(uint256,uint256)"><code class="function-signature">average(uint256 a, uint256 b)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Math.max(uint256,uint256)"></a><code class="function-signature">max(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Returns the largest of two numbers.



<h4><a class="anchor" aria-hidden="true" id="Math.min(uint256,uint256)"></a><code class="function-signature">min(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Returns the smallest of two numbers.



<h4><a class="anchor" aria-hidden="true" id="Math.average(uint256,uint256)"></a><code class="function-signature">average(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Calculates the average of two numbers. Since these are integers,
averages of an even and odd number cannot be represented, and will be
rounded down.





### `SafeMath`

Unsigned math operations with safety checks that revert on error.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SafeMath.mul(uint256,uint256)"><code class="function-signature">mul(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMath.div(uint256,uint256)"><code class="function-signature">div(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMath.sub(uint256,uint256)"><code class="function-signature">sub(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMath.add(uint256,uint256)"><code class="function-signature">add(uint256 a, uint256 b)</code></a></li><li><a href="#SafeMath.mod(uint256,uint256)"><code class="function-signature">mod(uint256 a, uint256 b)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SafeMath.mul(uint256,uint256)"></a><code class="function-signature">mul(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Multiplies two unsigned integers, reverts on overflow.



<h4><a class="anchor" aria-hidden="true" id="SafeMath.div(uint256,uint256)"></a><code class="function-signature">div(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Integer division of two unsigned integers truncating the quotient, reverts on division by zero.



<h4><a class="anchor" aria-hidden="true" id="SafeMath.sub(uint256,uint256)"></a><code class="function-signature">sub(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Subtracts two unsigned integers, reverts on overflow (i.e. if subtrahend is greater than minuend).



<h4><a class="anchor" aria-hidden="true" id="SafeMath.add(uint256,uint256)"></a><code class="function-signature">add(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Adds two unsigned integers, reverts on overflow.



<h4><a class="anchor" aria-hidden="true" id="SafeMath.mod(uint256,uint256)"></a><code class="function-signature">mod(uint256 a, uint256 b) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Divides two unsigned integers and returns the remainder (unsigned integer modulo),
reverts when dividing by zero.





</div>