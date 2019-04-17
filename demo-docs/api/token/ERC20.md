---
title: ERC 20
---

<div class="contracts">

## Interfaces

### `IERC20`

see https://eips.ethereum.org/EIPS/eip-20

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li><a href="#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li><a href="#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li><a href="#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li><a href="#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address who)</code></a></li><li><a href="#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#IERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IERC20.transfer(address,uint256)"></a><code class="function-signature">transfer(address to, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.approve(address,uint256)"></a><code class="function-signature">approve(address spender, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.transferFrom(address,address,uint256)"></a><code class="function-signature">transferFrom(address from, address to, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.totalSupply()"></a><code class="function-signature">totalSupply() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.balanceOf(address)"></a><code class="function-signature">balanceOf(address who) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.allowance(address,address)"></a><code class="function-signature">allowance(address owner, address spender) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>







<h4><a class="anchor" aria-hidden="true" id="IERC20.Transfer(address,address,uint256)"></a><code class="function-signature">Transfer(address from, address to, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="IERC20.Approval(address,address,uint256)"></a><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></h4>





## Contracts

### `ERC20`

Implementation of the basic standard token.
https://eips.ethereum.org/EIPS/eip-20
Originally based on code by FirstBlood:
https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol

This implementation emits additional Approval events, allowing applications to reconstruct the allowance status for
all accounts just by listening to said events. Note that this isn&#x27;t required by the specification, and other
compliant implementations may not do it.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li><a href="#ERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li><a href="#ERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li><a href="#ERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li><a href="#ERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li><a href="#ERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li><a href="#ERC20.increaseAllowance(address,uint256)"><code class="function-signature">increaseAllowance(address spender, uint256 addedValue)</code></a></li><li><a href="#ERC20.decreaseAllowance(address,uint256)"><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue)</code></a></li><li><a href="#ERC20._transfer(address,address,uint256)"><code class="function-signature">_transfer(address from, address to, uint256 value)</code></a></li><li><a href="#ERC20._mint(address,uint256)"><code class="function-signature">_mint(address account, uint256 value)</code></a></li><li><a href="#ERC20._burn(address,uint256)"><code class="function-signature">_burn(address account, uint256 value)</code></a></li><li><a href="#ERC20._approve(address,address,uint256)"><code class="function-signature">_approve(address owner, address spender, uint256 value)</code></a></li><li><a href="#ERC20._burnFrom(address,uint256)"><code class="function-signature">_burnFrom(address account, uint256 value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ERC20.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#ERC20.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20.totalSupply()"></a><code class="function-signature">totalSupply() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Total number of tokens in existence.



<h4><a class="anchor" aria-hidden="true" id="ERC20.balanceOf(address)"></a><code class="function-signature">balanceOf(address owner) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Gets the balance of the specified address.




<h4><a class="anchor" aria-hidden="true" id="ERC20.allowance(address,address)"></a><code class="function-signature">allowance(address owner, address spender) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Function to check the amount of tokens that an owner allowed to a spender.




<h4><a class="anchor" aria-hidden="true" id="ERC20.transfer(address,uint256)"></a><code class="function-signature">transfer(address to, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Transfer token to a specified address.




<h4><a class="anchor" aria-hidden="true" id="ERC20.approve(address,uint256)"></a><code class="function-signature">approve(address spender, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
Beware that changing an allowance with this method brings the risk that someone may use both the old
and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this
race condition is to first reduce the spender&#x27;s allowance to 0 and set the desired value afterwards:
https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729




<h4><a class="anchor" aria-hidden="true" id="ERC20.transferFrom(address,address,uint256)"></a><code class="function-signature">transferFrom(address from, address to, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Transfer tokens from one address to another.
Note that while this function emits an Approval event, this is not required as per the specification,
and other compliant implementations may not emit the event.




<h4><a class="anchor" aria-hidden="true" id="ERC20.increaseAllowance(address,uint256)"></a><code class="function-signature">increaseAllowance(address spender, uint256 addedValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Increase the amount of tokens that an owner allowed to a spender.
approve should be called when _allowed[msg.sender][spender] == 0. To increment
allowed value is better to use this function to avoid 2 calls (and wait until
the first transaction is mined)
From MonolithDAO Token.sol
Emits an Approval event.




<h4><a class="anchor" aria-hidden="true" id="ERC20.decreaseAllowance(address,uint256)"></a><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Decrease the amount of tokens that an owner allowed to a spender.
approve should be called when _allowed[msg.sender][spender] == 0. To decrement
allowed value is better to use this function to avoid 2 calls (and wait until
the first transaction is mined)
From MonolithDAO Token.sol
Emits an Approval event.




<h4><a class="anchor" aria-hidden="true" id="ERC20._transfer(address,address,uint256)"></a><code class="function-signature">_transfer(address from, address to, uint256 value)</code></h4>

Transfer token for a specified addresses.




<h4><a class="anchor" aria-hidden="true" id="ERC20._mint(address,uint256)"></a><code class="function-signature">_mint(address account, uint256 value)</code></h4>

Internal function that mints an amount of the token and assigns it to
an account. This encapsulates the modification of balances such that the
proper events are emitted.




<h4><a class="anchor" aria-hidden="true" id="ERC20._burn(address,uint256)"></a><code class="function-signature">_burn(address account, uint256 value)</code></h4>

Internal function that burns an amount of the token of a given
account.




<h4><a class="anchor" aria-hidden="true" id="ERC20._approve(address,address,uint256)"></a><code class="function-signature">_approve(address owner, address spender, uint256 value)</code></h4>

Approve an address to spend another addresses&#x27; tokens.




<h4><a class="anchor" aria-hidden="true" id="ERC20._burnFrom(address,uint256)"></a><code class="function-signature">_burnFrom(address account, uint256 value)</code></h4>

Internal function that burns an amount of the token of a given
account, deducting from the sender&#x27;s allowance for said account. Uses the
internal burn function.
Emits an Approval event (reflecting the reduced allowance).






### `ERC20Detailed`

The decimals are only for visualization purposes.
All the operations are done using the smallest and indivisible token unit,
just as on Ethereum all the operations are done in wei.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20Detailed.constructor(string,string,uint8)"><code class="function-signature">constructor(string name, string symbol, uint8 decimals)</code></a></li><li><a href="#ERC20Detailed.name()"><code class="function-signature">name()</code></a></li><li><a href="#ERC20Detailed.symbol()"><code class="function-signature">symbol()</code></a></li><li><a href="#ERC20Detailed.decimals()"><code class="function-signature">decimals()</code></a></li><li class="inherited"><a href="ERC20#IERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#IERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#IERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#IERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="ERC20#IERC20.balanceOf(address)"><code class="function-signature">balanceOf(address who)</code></a></li><li class="inherited"><a href="ERC20#IERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ERC20Detailed.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#ERC20Detailed.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20Detailed.constructor(string,string,uint8)"></a><code class="function-signature">constructor(string name, string symbol, uint8 decimals)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Detailed.name()"></a><code class="function-signature">name() <span class="return-arrow">→</span> <span class="return-type">string</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Detailed.symbol()"></a><code class="function-signature">symbol() <span class="return-arrow">→</span> <span class="return-type">string</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Detailed.decimals()"></a><code class="function-signature">decimals() <span class="return-arrow">→</span> <span class="return-type">uint8</span></code></h4>







### `ERC20Mintable`

ERC20 minting logic.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20Mintable.mint(address,uint256)"><code class="function-signature">mint(address to, uint256 value)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.isMinter(address)"><code class="function-signature">isMinter(address account)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.addMinter(address)"><code class="function-signature">addMinter(address account)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.renounceMinter()"><code class="function-signature">renounceMinter()</code></a></li><li class="inherited"><a href="../access/roles#MinterRole._addMinter(address)"><code class="function-signature">_addMinter(address account)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole._removeMinter(address)"><code class="function-signature">_removeMinter(address account)</code></a></li><li class="inherited"><a href="ERC20#ERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="ERC20#ERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="ERC20#ERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li class="inherited"><a href="ERC20#ERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.increaseAllowance(address,uint256)"><code class="function-signature">increaseAllowance(address spender, uint256 addedValue)</code></a></li><li class="inherited"><a href="ERC20#ERC20.decreaseAllowance(address,uint256)"><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue)</code></a></li><li class="inherited"><a href="ERC20#ERC20._transfer(address,address,uint256)"><code class="function-signature">_transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._mint(address,uint256)"><code class="function-signature">_mint(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burn(address,uint256)"><code class="function-signature">_burn(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._approve(address,address,uint256)"><code class="function-signature">_approve(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burnFrom(address,uint256)"><code class="function-signature">_burnFrom(address account, uint256 value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ERC20Mintable.MinterAdded(address)"><code class="function-signature">MinterAdded(address account)</code></a></li><li class="inherited"><a href="#ERC20Mintable.MinterRemoved(address)"><code class="function-signature">MinterRemoved(address account)</code></a></li><li class="inherited"><a href="#ERC20Mintable.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#ERC20Mintable.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20Mintable.mint(address,uint256)"></a><code class="function-signature">mint(address to, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Function to mint tokens






### `ERC20Burnable`

Token that can be irreversibly burned (destroyed).

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20Burnable.burn(uint256)"><code class="function-signature">burn(uint256 value)</code></a></li><li><a href="#ERC20Burnable.burnFrom(address,uint256)"><code class="function-signature">burnFrom(address from, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="ERC20#ERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="ERC20#ERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li class="inherited"><a href="ERC20#ERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.increaseAllowance(address,uint256)"><code class="function-signature">increaseAllowance(address spender, uint256 addedValue)</code></a></li><li class="inherited"><a href="ERC20#ERC20.decreaseAllowance(address,uint256)"><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue)</code></a></li><li class="inherited"><a href="ERC20#ERC20._transfer(address,address,uint256)"><code class="function-signature">_transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._mint(address,uint256)"><code class="function-signature">_mint(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burn(address,uint256)"><code class="function-signature">_burn(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._approve(address,address,uint256)"><code class="function-signature">_approve(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burnFrom(address,uint256)"><code class="function-signature">_burnFrom(address account, uint256 value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ERC20Burnable.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#ERC20Burnable.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20Burnable.burn(uint256)"></a><code class="function-signature">burn(uint256 value)</code></h4>

Burns a specific amount of tokens.




<h4><a class="anchor" aria-hidden="true" id="ERC20Burnable.burnFrom(address,uint256)"></a><code class="function-signature">burnFrom(address from, uint256 value)</code></h4>

Burns a specific amount of tokens from the target address and decrements allowance.






### `ERC20Capped`

Mintable token with a token cap.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20Capped.constructor(uint256)"><code class="function-signature">constructor(uint256 cap)</code></a></li><li><a href="#ERC20Capped.cap()"><code class="function-signature">cap()</code></a></li><li><a href="#ERC20Capped._mint(address,uint256)"><code class="function-signature">_mint(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20Mintable.mint(address,uint256)"><code class="function-signature">mint(address to, uint256 value)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.isMinter(address)"><code class="function-signature">isMinter(address account)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.addMinter(address)"><code class="function-signature">addMinter(address account)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole.renounceMinter()"><code class="function-signature">renounceMinter()</code></a></li><li class="inherited"><a href="../access/roles#MinterRole._addMinter(address)"><code class="function-signature">_addMinter(address account)</code></a></li><li class="inherited"><a href="../access/roles#MinterRole._removeMinter(address)"><code class="function-signature">_removeMinter(address account)</code></a></li><li class="inherited"><a href="ERC20#ERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="ERC20#ERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="ERC20#ERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li class="inherited"><a href="ERC20#ERC20.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20.increaseAllowance(address,uint256)"><code class="function-signature">increaseAllowance(address spender, uint256 addedValue)</code></a></li><li class="inherited"><a href="ERC20#ERC20.decreaseAllowance(address,uint256)"><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue)</code></a></li><li class="inherited"><a href="ERC20#ERC20._transfer(address,address,uint256)"><code class="function-signature">_transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burn(address,uint256)"><code class="function-signature">_burn(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._approve(address,address,uint256)"><code class="function-signature">_approve(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burnFrom(address,uint256)"><code class="function-signature">_burnFrom(address account, uint256 value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ERC20Capped.MinterAdded(address)"><code class="function-signature">MinterAdded(address account)</code></a></li><li class="inherited"><a href="#ERC20Capped.MinterRemoved(address)"><code class="function-signature">MinterRemoved(address account)</code></a></li><li class="inherited"><a href="#ERC20Capped.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#ERC20Capped.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20Capped.constructor(uint256)"></a><code class="function-signature">constructor(uint256 cap)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Capped.cap()"></a><code class="function-signature">cap() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Capped._mint(address,uint256)"></a><code class="function-signature">_mint(address account, uint256 value)</code></h4>







### `ERC20Pausable`

ERC20 modified with pausable transfers.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#ERC20Pausable.transfer(address,uint256)"><code class="function-signature">transfer(address to, uint256 value)</code></a></li><li><a href="#ERC20Pausable.transferFrom(address,address,uint256)"><code class="function-signature">transferFrom(address from, address to, uint256 value)</code></a></li><li><a href="#ERC20Pausable.approve(address,uint256)"><code class="function-signature">approve(address spender, uint256 value)</code></a></li><li><a href="#ERC20Pausable.increaseAllowance(address,uint256)"><code class="function-signature">increaseAllowance(address spender, uint256 addedValue)</code></a></li><li><a href="#ERC20Pausable.decreaseAllowance(address,uint256)"><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue)</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.paused()"><code class="function-signature">paused()</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.pause()"><code class="function-signature">pause()</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.unpause()"><code class="function-signature">unpause()</code></a></li><li class="inherited"><a href="../access/roles#PauserRole.isPauser(address)"><code class="function-signature">isPauser(address account)</code></a></li><li class="inherited"><a href="../access/roles#PauserRole.addPauser(address)"><code class="function-signature">addPauser(address account)</code></a></li><li class="inherited"><a href="../access/roles#PauserRole.renouncePauser()"><code class="function-signature">renouncePauser()</code></a></li><li class="inherited"><a href="../access/roles#PauserRole._addPauser(address)"><code class="function-signature">_addPauser(address account)</code></a></li><li class="inherited"><a href="../access/roles#PauserRole._removePauser(address)"><code class="function-signature">_removePauser(address account)</code></a></li><li class="inherited"><a href="ERC20#ERC20.totalSupply()"><code class="function-signature">totalSupply()</code></a></li><li class="inherited"><a href="ERC20#ERC20.balanceOf(address)"><code class="function-signature">balanceOf(address owner)</code></a></li><li class="inherited"><a href="ERC20#ERC20.allowance(address,address)"><code class="function-signature">allowance(address owner, address spender)</code></a></li><li class="inherited"><a href="ERC20#ERC20._transfer(address,address,uint256)"><code class="function-signature">_transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._mint(address,uint256)"><code class="function-signature">_mint(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burn(address,uint256)"><code class="function-signature">_burn(address account, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._approve(address,address,uint256)"><code class="function-signature">_approve(address owner, address spender, uint256 value)</code></a></li><li class="inherited"><a href="ERC20#ERC20._burnFrom(address,uint256)"><code class="function-signature">_burnFrom(address account, uint256 value)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#ERC20Pausable.Paused(address)"><code class="function-signature">Paused(address account)</code></a></li><li class="inherited"><a href="#ERC20Pausable.Unpaused(address)"><code class="function-signature">Unpaused(address account)</code></a></li><li class="inherited"><a href="#ERC20Pausable.PauserAdded(address)"><code class="function-signature">PauserAdded(address account)</code></a></li><li class="inherited"><a href="#ERC20Pausable.PauserRemoved(address)"><code class="function-signature">PauserRemoved(address account)</code></a></li><li class="inherited"><a href="#ERC20Pausable.Transfer(address,address,uint256)"><code class="function-signature">Transfer(address from, address to, uint256 value)</code></a></li><li class="inherited"><a href="#ERC20Pausable.Approval(address,address,uint256)"><code class="function-signature">Approval(address owner, address spender, uint256 value)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="ERC20Pausable.transfer(address,uint256)"></a><code class="function-signature">transfer(address to, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Pausable.transferFrom(address,address,uint256)"></a><code class="function-signature">transferFrom(address from, address to, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Pausable.approve(address,uint256)"></a><code class="function-signature">approve(address spender, uint256 value) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Pausable.increaseAllowance(address,uint256)"></a><code class="function-signature">increaseAllowance(address spender, uint256 addedValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="ERC20Pausable.decreaseAllowance(address,uint256)"></a><code class="function-signature">decreaseAllowance(address spender, uint256 subtractedValue) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>







## Utilities

### `SafeERC20`

Wrappers around ERC20 operations that throw on failure (when the token
contract returns false). Tokens that return no value (and instead revert or
throw on failure) are also supported, non-reverting calls are assumed to be
successful.
To use this library you can add a `using SafeERC20 for ERC20;` statement to your contract,
which allows you to call the safe operations as `token.safeTransfer(...)`, etc.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SafeERC20.safeTransfer(contract IERC20,address,uint256)"><code class="function-signature">safeTransfer(contract IERC20 token, address to, uint256 value)</code></a></li><li><a href="#SafeERC20.safeTransferFrom(contract IERC20,address,address,uint256)"><code class="function-signature">safeTransferFrom(contract IERC20 token, address from, address to, uint256 value)</code></a></li><li><a href="#SafeERC20.safeApprove(contract IERC20,address,uint256)"><code class="function-signature">safeApprove(contract IERC20 token, address spender, uint256 value)</code></a></li><li><a href="#SafeERC20.safeIncreaseAllowance(contract IERC20,address,uint256)"><code class="function-signature">safeIncreaseAllowance(contract IERC20 token, address spender, uint256 value)</code></a></li><li><a href="#SafeERC20.safeDecreaseAllowance(contract IERC20,address,uint256)"><code class="function-signature">safeDecreaseAllowance(contract IERC20 token, address spender, uint256 value)</code></a></li><li><a href="#SafeERC20.callOptionalReturn(contract IERC20,bytes)"><code class="function-signature">callOptionalReturn(contract IERC20 token, bytes data)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SafeERC20.safeTransfer(contract IERC20,address,uint256)"></a><code class="function-signature">safeTransfer(contract IERC20 token, address to, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeERC20.safeTransferFrom(contract IERC20,address,address,uint256)"></a><code class="function-signature">safeTransferFrom(contract IERC20 token, address from, address to, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeERC20.safeApprove(contract IERC20,address,uint256)"></a><code class="function-signature">safeApprove(contract IERC20 token, address spender, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeERC20.safeIncreaseAllowance(contract IERC20,address,uint256)"></a><code class="function-signature">safeIncreaseAllowance(contract IERC20 token, address spender, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeERC20.safeDecreaseAllowance(contract IERC20,address,uint256)"></a><code class="function-signature">safeDecreaseAllowance(contract IERC20 token, address spender, uint256 value)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SafeERC20.callOptionalReturn(contract IERC20,bytes)"></a><code class="function-signature">callOptionalReturn(contract IERC20 token, bytes data)</code></h4>

Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
on the return value: the return value is optional (but if data is returned, it must not be false).






### `TokenTimelock`

TokenTimelock is a token holder contract that will allow a
beneficiary to extract the tokens after a given release time.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#TokenTimelock.constructor(contract IERC20,address,uint256)"><code class="function-signature">constructor(contract IERC20 token, address beneficiary, uint256 releaseTime)</code></a></li><li><a href="#TokenTimelock.token()"><code class="function-signature">token()</code></a></li><li><a href="#TokenTimelock.beneficiary()"><code class="function-signature">beneficiary()</code></a></li><li><a href="#TokenTimelock.releaseTime()"><code class="function-signature">releaseTime()</code></a></li><li><a href="#TokenTimelock.release()"><code class="function-signature">release()</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="TokenTimelock.constructor(contract IERC20,address,uint256)"></a><code class="function-signature">constructor(contract IERC20 token, address beneficiary, uint256 releaseTime)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenTimelock.token()"></a><code class="function-signature">token() <span class="return-arrow">→</span> <span class="return-type">contract IERC20</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenTimelock.beneficiary()"></a><code class="function-signature">beneficiary() <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenTimelock.releaseTime()"></a><code class="function-signature">releaseTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TokenTimelock.release()"></a><code class="function-signature">release()</code></h4>







</div>