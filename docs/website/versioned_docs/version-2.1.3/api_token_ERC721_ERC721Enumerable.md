---
id: version-2.1.3-token_ERC721_ERC721Enumerable
title: ERC721Enumerable
original_id: token_ERC721_ERC721Enumerable
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> ERC721Enumerable</h2><p class="base-contracts"><span>is</span> <a href="introspection_ERC165.html">ERC165</a><span>, </span><a href="token_ERC721_ERC721.html">ERC721</a><span>, </span><a href="token_ERC721_IERC721Enumerable.html">IERC721Enumerable</a></p><p class="description">See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md.</p><div class="source">Source: <a href="https://github.com/OpenZeppelin/zeppelin-solidity/blob/v2.1.3/contracts/token/ERC721/ERC721Enumerable.sol" target="_blank">token/ERC721/ERC721Enumerable.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="token_ERC721_ERC721Enumerable.html#_burn">_burn</a></li><li><a href="token_ERC721_ERC721Enumerable.html#_mint">_mint</a></li><li><a href="token_ERC721_ERC721Enumerable.html#_tokensOfOwner">_tokensOfOwner</a></li><li><a href="token_ERC721_ERC721Enumerable.html#_transferFrom">_transferFrom</a></li><li><a href="token_ERC721_ERC721Enumerable.html#">fallback</a></li><li><a href="token_ERC721_ERC721Enumerable.html#tokenByIndex">tokenByIndex</a></li><li><a href="token_ERC721_ERC721Enumerable.html#tokenOfOwnerByIndex">tokenOfOwnerByIndex</a></li><li><a href="token_ERC721_ERC721Enumerable.html#totalSupply">totalSupply</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="_burn" class="anchor-marker"></span><h4 class="name">_burn</h4><div class="body"><code class="signature">function <strong>_burn</strong><span>(address owner, uint256 tokenId) </span><span>internal </span></code><hr/><div class="description"><p>Internal function to burn a specific token Reverts if the token does not exist Deprecated, use _burn(uint256) instead.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>owner</code> - owner of the token to burn</div><div><code>tokenId</code> - uint256 ID of the token being burned</div></dd></dl></div></div></li><li><div class="item function"><span id="_mint" class="anchor-marker"></span><h4 class="name">_mint</h4><div class="body"><code class="signature">function <strong>_mint</strong><span>(address to, uint256 tokenId) </span><span>internal </span></code><hr/><div class="description"><p>Internal function to mint a new token Reverts if the given token ID already exists.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>to</code> - address the beneficiary that will own the minted token</div><div><code>tokenId</code> - uint256 ID of the token to be minted</div></dd></dl></div></div></li><li><div class="item function"><span id="_tokensOfOwner" class="anchor-marker"></span><h4 class="name">_tokensOfOwner</h4><div class="body"><code class="signature">function <strong>_tokensOfOwner</strong><span>(address owner) </span><span>internal </span><span>view </span><span>returns  (uint256[]) </span></code><hr/><div class="description"><p>Gets the list of token IDs of the requested owner.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>owner</code> - address owning the tokens</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256[] List of token IDs owned by the requested address</dd></dl></div></div></li><li><div class="item function"><span id="_transferFrom" class="anchor-marker"></span><h4 class="name">_transferFrom</h4><div class="body"><code class="signature">function <strong>_transferFrom</strong><span>(address from, address to, uint256 tokenId) </span><span>internal </span></code><hr/><div class="description"><p>Internal function to transfer ownership of a given token ID to another address. As opposed to transferFrom, this imposes no restrictions on msg.sender.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>from</code> - current owner of the token</div><div><code>to</code> - address to receive the ownership of the given token ID</div><div><code>tokenId</code> - uint256 ID of the token to be transferred</div></dd></dl></div></div></li><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">fallback</h4><div class="body"><code class="signature">function <strong></strong><span>() </span><span>public </span></code><hr/><div class="description"><p>Constructor function.</p></div></div></div></li><li><div class="item function"><span id="tokenByIndex" class="anchor-marker"></span><h4 class="name">tokenByIndex</h4><div class="body"><code class="signature">function <strong>tokenByIndex</strong><span>(uint256 index) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>index</code> - uint256 representing the index to be accessed of the tokens list</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256 token ID at the given index of the tokens list</dd></dl></div></div></li><li><div class="item function"><span id="tokenOfOwnerByIndex" class="anchor-marker"></span><h4 class="name">tokenOfOwnerByIndex</h4><div class="body"><code class="signature">function <strong>tokenOfOwnerByIndex</strong><span>(address owner, uint256 index) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>Gets the token ID at a given index of the tokens list of the requested owner.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>owner</code> - address owning the tokens list to be accessed</div><div><code>index</code> - uint256 representing the index to be accessed of the requested tokens list</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256 token ID at the given index of the tokens list owned by the requested address</dd></dl></div></div></li><li><div class="item function"><span id="totalSupply" class="anchor-marker"></span><h4 class="name">totalSupply</h4><div class="body"><code class="signature">function <strong>totalSupply</strong><span>() </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>Gets the total amount of tokens stored by the contract.</p></div><dl><dt><span class="label-return">Returns:</span></dt><dd>uint256 representing the total amount of tokens</dd></dl></div></div></li></ul></div></div></div>