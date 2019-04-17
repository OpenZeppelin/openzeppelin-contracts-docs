---
title: Introspection
---

<div class="contracts">

## Contracts

### `ERC165`

Implements ERC165 using a lookup table.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC165.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#ERC165.supportsInterface(bytes4)"><code class="function-signature">supportsInterface(bytes4 interfaceId)</code></a></li><li><a href="#ERC165._registerInterface(bytes4)"><code class="function-signature">_registerInterface(bytes4 interfaceId)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC165.constructor()"></a><code class="function-signature">constructor()</code></h4>

A contract implementing SupportsInterfaceWithLookup
implements ERC165 itself.



<h4><a class="anchor" aria-hidden="true" id="ERC165.supportsInterface(bytes4)"></a><code class="function-signature">supportsInterface(bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Implement supportsInterface(bytes4) using a lookup table.



<h4><a class="anchor" aria-hidden="true" id="ERC165._registerInterface(bytes4)"></a><code class="function-signature">_registerInterface(bytes4 interfaceId)</code></h4>

Internal method for registering an interface.





### `ERC165Checker`

Use `using ERC165Checker for address`; to include this library
https://eips.ethereum.org/EIPS/eip-165

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC165Checker._supportsERC165(address)"><code class="function-signature">_supportsERC165(address account)</code></a></li><li><a href="#ERC165Checker._supportsInterface(address,bytes4)"><code class="function-signature">_supportsInterface(address account, bytes4 interfaceId)</code></a></li><li><a href="#ERC165Checker._supportsAllInterfaces(address,bytes4[])"><code class="function-signature">_supportsAllInterfaces(address account, bytes4[] interfaceIds)</code></a></li><li><a href="#ERC165Checker._supportsERC165Interface(address,bytes4)"><code class="function-signature">_supportsERC165Interface(address account, bytes4 interfaceId)</code></a></li><li><a href="#ERC165Checker._callERC165SupportsInterface(address,bytes4)"><code class="function-signature">_callERC165SupportsInterface(address account, bytes4 interfaceId)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC165Checker._supportsERC165(address)"></a><code class="function-signature">_supportsERC165(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC165Checker._supportsInterface(address,bytes4)"></a><code class="function-signature">_supportsInterface(address account, bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Interface identification is specified in ERC-165.



<h4><a class="anchor" aria-hidden="true" id="ERC165Checker._supportsAllInterfaces(address,bytes4[])"></a><code class="function-signature">_supportsAllInterfaces(address account, bytes4[] interfaceIds) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Interface identification is specified in ERC-165.



<h4><a class="anchor" aria-hidden="true" id="ERC165Checker._supportsERC165Interface(address,bytes4)"></a><code class="function-signature">_supportsERC165Interface(address account, bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Assumes that account contains a contract that supports ERC165, otherwise
the behavior of this method is undefined. This precondition can be checked
with the `supportsERC165` method in this library.
Interface identification is specified in ERC-165.



<h4><a class="anchor" aria-hidden="true" id="ERC165Checker._callERC165SupportsInterface(address,bytes4)"></a><code class="function-signature">_callERC165SupportsInterface(address account, bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool,bool</span></code></h4>







### `IERC165`

https://eips.ethereum.org/EIPS/eip-165

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC165.supportsInterface(bytes4)"><code class="function-signature">supportsInterface(bytes4 interfaceId)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC165.supportsInterface(bytes4)"></a><code class="function-signature">supportsInterface(bytes4 interfaceId) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Interface identification is specified in ERC-165. This function
uses less than 30,000 gas.





</div>