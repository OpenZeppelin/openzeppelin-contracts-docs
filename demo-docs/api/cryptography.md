---
title: Cryptography
---

<div class="contracts">

## Contracts

### `ECDSA`

Based on https://gist.github.com/axic/5b33912c6f61ae6fd96d6c4a47afde6d
TODO Remove this library once solidity supports passing a signature to ecrecover.
See https://github.com/ethereum/solidity/issues/864

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ECDSA.recover(bytes32,bytes)"><code class="function-signature">recover(bytes32 hash, bytes signature)</code></a></li><li><a href="#ECDSA.toEthSignedMessageHash(bytes32)"><code class="function-signature">toEthSignedMessageHash(bytes32 hash)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ECDSA.recover(bytes32,bytes)"></a><code class="function-signature">recover(bytes32 hash, bytes signature) <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>

Recover signer address from a message by using their signature.




<h4><a class="anchor" aria-hidden="true" id="ECDSA.toEthSignedMessageHash(bytes32)"></a><code class="function-signature">toEthSignedMessageHash(bytes32 hash) <span class="return-arrow">→</span> <span class="return-type">bytes32</span></code></h4>

Prefix a bytes32 value with &quot;\x19Ethereum Signed Message:&quot;
and hash the result.





### `MerkleProof`

Merkle proof verification based on
https://github.com/ameensol/merkle-tree-solidity/blob/master/src/MerkleProof.sol

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#MerkleProof.verify(bytes32[],bytes32,bytes32)"><code class="function-signature">verify(bytes32[] proof, bytes32 root, bytes32 leaf)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="MerkleProof.verify(bytes32[],bytes32,bytes32)"></a><code class="function-signature">verify(bytes32[] proof, bytes32 root, bytes32 leaf) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Verifies a Merkle proof proving the existence of a leaf in a Merkle tree. Assumes that each pair of leaves
and each pair of pre-images are sorted.






</div>