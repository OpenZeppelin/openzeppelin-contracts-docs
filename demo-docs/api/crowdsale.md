---
title: Crowdsales
---

<div class="contracts">

## Core

### `Crowdsale`

Crowdsale is a base contract for managing a token crowdsale,
allowing investors to purchase tokens with ether. This contract implements
such functionality in its most fundamental form and can be extended to provide additional
functionality and/or custom behavior.
The external interface represents the basic interface for purchasing tokens, and conforms
the base architecture for crowdsales. It is *not* intended to be modified / overridden.
The internal interface conforms the extensible and modifiable surface of crowdsales. Override
the methods to add functionality. Consider using &#x27;super&#x27; where appropriate to concatenate
behavior.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li><a href="#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li><a href="#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li><a href="#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li><a href="#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li><a href="#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li><a href="#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li><a href="#Crowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li><a href="#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li><a href="#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li><a href="#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li><a href="#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li><a href="#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li><a href="#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#Crowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Crowdsale.constructor(uint256,address payable,contract IERC20)"></a><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></h4>

The rate is the conversion between wei and the smallest and indivisible
token unit. So, if you are using a rate of 1 with a ERC20Detailed token
with 3 decimals called TOK, 1 wei will give you 1 unit, or 0.001 TOK.




<h4><a class="anchor" aria-hidden="true" id="Crowdsale.fallback()"></a><code class="function-signature">fallback()</code></h4>

fallback function ***DO NOT OVERRIDE***
Note that other contracts will transfer funds with a base gas stipend
of 2300, which is not enough to call buyTokens. Consider calling
buyTokens directly when purchasing tokens from a contract.



<h4><a class="anchor" aria-hidden="true" id="Crowdsale.token()"></a><code class="function-signature">token() <span class="return-arrow">→</span> <span class="return-type">contract IERC20</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Crowdsale.wallet()"></a><code class="function-signature">wallet() <span class="return-arrow">→</span> <span class="return-type">address payable</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Crowdsale.rate()"></a><code class="function-signature">rate() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Crowdsale.weiRaised()"></a><code class="function-signature">weiRaised() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Crowdsale.buyTokens(address)"></a><code class="function-signature">buyTokens(address beneficiary)</code></h4>

low level token purchase ***DO NOT OVERRIDE***
This function has a non-reentrancy guard, so it shouldn&#x27;t be called by
another `nonReentrant` function.




<h4><a class="anchor" aria-hidden="true" id="Crowdsale._preValidatePurchase(address,uint256)"></a><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></h4>

Validation of an incoming purchase. Use require statements to revert state when conditions are not met.
Use `super` in contracts that inherit from Crowdsale to extend their validations.
Example from CappedCrowdsale.sol&#x27;s _preValidatePurchase method:
    super._preValidatePurchase(beneficiary, weiAmount);
    require(weiRaised().add(weiAmount) &lt;= cap);




<h4><a class="anchor" aria-hidden="true" id="Crowdsale._postValidatePurchase(address,uint256)"></a><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></h4>

Validation of an executed purchase. Observe state and use revert statements to undo rollback when valid
conditions are not met.




<h4><a class="anchor" aria-hidden="true" id="Crowdsale._deliverTokens(address,uint256)"></a><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></h4>

Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends
its tokens.




<h4><a class="anchor" aria-hidden="true" id="Crowdsale._processPurchase(address,uint256)"></a><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></h4>

Executed when a purchase has been validated and is ready to be executed. Doesn&#x27;t necessarily emit/send
tokens.




<h4><a class="anchor" aria-hidden="true" id="Crowdsale._updatePurchasingState(address,uint256)"></a><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></h4>

Override for extensions that require an internal state to check for validity (current user contributions,
etc.)




<h4><a class="anchor" aria-hidden="true" id="Crowdsale._getTokenAmount(uint256)"></a><code class="function-signature">_getTokenAmount(uint256 weiAmount) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Override to extend the way in which ether is converted to tokens.




<h4><a class="anchor" aria-hidden="true" id="Crowdsale._forwardFunds()"></a><code class="function-signature">_forwardFunds()</code></h4>

Determines how ETH is stored/forwarded on purchases.





<h4><a class="anchor" aria-hidden="true" id="Crowdsale.TokensPurchased(address,address,uint256,uint256)"></a><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></h4>





## Emission

### `AllowanceCrowdsale`

Extension of Crowdsale where tokens are held by a wallet, which approves an allowance to the crowdsale.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#AllowanceCrowdsale.constructor(address)"><code class="function-signature">constructor(address tokenWallet)</code></a></li><li><a href="#AllowanceCrowdsale.tokenWallet()"><code class="function-signature">tokenWallet()</code></a></li><li><a href="#AllowanceCrowdsale.remainingTokens()"><code class="function-signature">remainingTokens()</code></a></li><li><a href="#AllowanceCrowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="../utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#AllowanceCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="AllowanceCrowdsale.constructor(address)"></a><code class="function-signature">constructor(address tokenWallet)</code></h4>

Constructor, takes token wallet address.




<h4><a class="anchor" aria-hidden="true" id="AllowanceCrowdsale.tokenWallet()"></a><code class="function-signature">tokenWallet() <span class="return-arrow">→</span> <span class="return-type">address</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="AllowanceCrowdsale.remainingTokens()"></a><code class="function-signature">remainingTokens() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Checks the amount of tokens left in the allowance.




<h4><a class="anchor" aria-hidden="true" id="AllowanceCrowdsale._deliverTokens(address,uint256)"></a><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></h4>

Overrides parent behavior by transferring tokens from wallet.






### `MintedCrowdsale`

Extension of Crowdsale contract whose tokens are minted in each purchase.
Token ownership should be transferred to MintedCrowdsale for minting.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#MintedCrowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="../utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#MintedCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="MintedCrowdsale._deliverTokens(address,uint256)"></a><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></h4>

Overrides delivery by minting tokens upon purchase.






## Price

### `IncreasingPriceCrowdsale`

Extension of Crowdsale contract that increases the price of tokens linearly in time.
Note that what should be provided to the constructor is the initial and final _rates_, that is,
the amount of tokens per wei contributed. Thus, the initial rate must be greater than the final rate.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IncreasingPriceCrowdsale.constructor(uint256,uint256)"><code class="function-signature">constructor(uint256 initialRate, uint256 finalRate)</code></a></li><li><a href="#IncreasingPriceCrowdsale.rate()"><code class="function-signature">rate()</code></a></li><li><a href="#IncreasingPriceCrowdsale.initialRate()"><code class="function-signature">initialRate()</code></a></li><li><a href="#IncreasingPriceCrowdsale.finalRate()"><code class="function-signature">finalRate()</code></a></li><li><a href="#IncreasingPriceCrowdsale.getCurrentRate()"><code class="function-signature">getCurrentRate()</code></a></li><li><a href="#IncreasingPriceCrowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.openingTime()"><code class="function-signature">openingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.closingTime()"><code class="function-signature">closingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.isOpen()"><code class="function-signature">isOpen()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.hasClosed()"><code class="function-signature">hasClosed()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._extendTime(uint256)"><code class="function-signature">_extendTime(uint256 newClosingTime)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="../utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IncreasingPriceCrowdsale.TimedCrowdsaleExtended(uint256,uint256)"><code class="function-signature">TimedCrowdsaleExtended(uint256 prevClosingTime, uint256 newClosingTime)</code></a></li><li class="inherited"><a href="#IncreasingPriceCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IncreasingPriceCrowdsale.constructor(uint256,uint256)"></a><code class="function-signature">constructor(uint256 initialRate, uint256 finalRate)</code></h4>

Constructor, takes initial and final rates of tokens received per wei contributed.




<h4><a class="anchor" aria-hidden="true" id="IncreasingPriceCrowdsale.rate()"></a><code class="function-signature">rate() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IncreasingPriceCrowdsale.initialRate()"></a><code class="function-signature">initialRate() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IncreasingPriceCrowdsale.finalRate()"></a><code class="function-signature">finalRate() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="IncreasingPriceCrowdsale.getCurrentRate()"></a><code class="function-signature">getCurrentRate() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Returns the rate of tokens per wei at the present time.
Note that, as price _increases_ with time, the rate _decreases_.




<h4><a class="anchor" aria-hidden="true" id="IncreasingPriceCrowdsale._getTokenAmount(uint256)"></a><code class="function-signature">_getTokenAmount(uint256 weiAmount) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Overrides parent method taking into account variable rate.






## Validation

### `CappedCrowdsale`

Crowdsale with a limit for total contributions.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#CappedCrowdsale.constructor(uint256)"><code class="function-signature">constructor(uint256 cap)</code></a></li><li><a href="#CappedCrowdsale.cap()"><code class="function-signature">cap()</code></a></li><li><a href="#CappedCrowdsale.capReached()"><code class="function-signature">capReached()</code></a></li><li><a href="#CappedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="../utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#CappedCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="CappedCrowdsale.constructor(uint256)"></a><code class="function-signature">constructor(uint256 cap)</code></h4>

Constructor, takes maximum amount of wei accepted in the crowdsale.




<h4><a class="anchor" aria-hidden="true" id="CappedCrowdsale.cap()"></a><code class="function-signature">cap() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="CappedCrowdsale.capReached()"></a><code class="function-signature">capReached() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Checks whether the cap has been reached.




<h4><a class="anchor" aria-hidden="true" id="CappedCrowdsale._preValidatePurchase(address,uint256)"></a><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></h4>

Extend parent behavior requiring purchase to respect the funding cap.






### `IndividuallyCappedCrowdsale`

Crowdsale with per-beneficiary caps.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#IndividuallyCappedCrowdsale.setCap(address,uint256)"><code class="function-signature">setCap(address beneficiary, uint256 cap)</code></a></li><li><a href="#IndividuallyCappedCrowdsale.getCap(address)"><code class="function-signature">getCap(address beneficiary)</code></a></li><li><a href="#IndividuallyCappedCrowdsale.getContribution(address)"><code class="function-signature">getContribution(address beneficiary)</code></a></li><li><a href="#IndividuallyCappedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li><a href="#IndividuallyCappedCrowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href="../access/roles#CapperRole.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../access/roles#CapperRole.isCapper(address)"><code class="function-signature">isCapper(address account)</code></a></li><li class="inherited"><a href="../access/roles#CapperRole.addCapper(address)"><code class="function-signature">addCapper(address account)</code></a></li><li class="inherited"><a href="../access/roles#CapperRole.renounceCapper()"><code class="function-signature">renounceCapper()</code></a></li><li class="inherited"><a href="../access/roles#CapperRole._addCapper(address)"><code class="function-signature">_addCapper(address account)</code></a></li><li class="inherited"><a href="../access/roles#CapperRole._removeCapper(address)"><code class="function-signature">_removeCapper(address account)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#IndividuallyCappedCrowdsale.CapperAdded(address)"><code class="function-signature">CapperAdded(address account)</code></a></li><li class="inherited"><a href="#IndividuallyCappedCrowdsale.CapperRemoved(address)"><code class="function-signature">CapperRemoved(address account)</code></a></li><li class="inherited"><a href="#IndividuallyCappedCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="IndividuallyCappedCrowdsale.setCap(address,uint256)"></a><code class="function-signature">setCap(address beneficiary, uint256 cap)</code></h4>

Sets a specific beneficiary&#x27;s maximum contribution.




<h4><a class="anchor" aria-hidden="true" id="IndividuallyCappedCrowdsale.getCap(address)"></a><code class="function-signature">getCap(address beneficiary) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Returns the cap of a specific beneficiary.




<h4><a class="anchor" aria-hidden="true" id="IndividuallyCappedCrowdsale.getContribution(address)"></a><code class="function-signature">getContribution(address beneficiary) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>

Returns the amount contributed so far by a specific beneficiary.




<h4><a class="anchor" aria-hidden="true" id="IndividuallyCappedCrowdsale._preValidatePurchase(address,uint256)"></a><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></h4>

Extend parent behavior requiring purchase to respect the beneficiary&#x27;s funding cap.




<h4><a class="anchor" aria-hidden="true" id="IndividuallyCappedCrowdsale._updatePurchasingState(address,uint256)"></a><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></h4>

Extend parent behavior to update beneficiary contributions.






### `PausableCrowdsale`

Extension of Crowdsale contract where purchases can be paused and unpaused by the pauser role.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#PausableCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address _beneficiary, uint256 _weiAmount)</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.paused()"><code class="function-signature">paused()</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.pause()"><code class="function-signature">pause()</code></a></li><li class="inherited"><a href="../lifecycle#Pausable.unpause()"><code class="function-signature">unpause()</code></a></li><li class="inherited"><a href="../access/roles#PauserRole.isPauser(address)"><code class="function-signature">isPauser(address account)</code></a></li><li class="inherited"><a href="../access/roles#PauserRole.addPauser(address)"><code class="function-signature">addPauser(address account)</code></a></li><li class="inherited"><a href="../access/roles#PauserRole.renouncePauser()"><code class="function-signature">renouncePauser()</code></a></li><li class="inherited"><a href="../access/roles#PauserRole._addPauser(address)"><code class="function-signature">_addPauser(address account)</code></a></li><li class="inherited"><a href="../access/roles#PauserRole._removePauser(address)"><code class="function-signature">_removePauser(address account)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#PausableCrowdsale.Paused(address)"><code class="function-signature">Paused(address account)</code></a></li><li class="inherited"><a href="#PausableCrowdsale.Unpaused(address)"><code class="function-signature">Unpaused(address account)</code></a></li><li class="inherited"><a href="#PausableCrowdsale.PauserAdded(address)"><code class="function-signature">PauserAdded(address account)</code></a></li><li class="inherited"><a href="#PausableCrowdsale.PauserRemoved(address)"><code class="function-signature">PauserRemoved(address account)</code></a></li><li class="inherited"><a href="#PausableCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="PausableCrowdsale._preValidatePurchase(address,uint256)"></a><code class="function-signature">_preValidatePurchase(address _beneficiary, uint256 _weiAmount)</code></h4>

Validation of an incoming purchase. Use require statements to revert state when conditions are not met.
Use super to concatenate validations.
Adds the validation that the crowdsale must not be paused.






### `TimedCrowdsale`

Crowdsale accepting contributions only within a time frame.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#TimedCrowdsale.constructor(uint256,uint256)"><code class="function-signature">constructor(uint256 openingTime, uint256 closingTime)</code></a></li><li><a href="#TimedCrowdsale.openingTime()"><code class="function-signature">openingTime()</code></a></li><li><a href="#TimedCrowdsale.closingTime()"><code class="function-signature">closingTime()</code></a></li><li><a href="#TimedCrowdsale.isOpen()"><code class="function-signature">isOpen()</code></a></li><li><a href="#TimedCrowdsale.hasClosed()"><code class="function-signature">hasClosed()</code></a></li><li><a href="#TimedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li><a href="#TimedCrowdsale._extendTime(uint256)"><code class="function-signature">_extendTime(uint256 newClosingTime)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="../utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#TimedCrowdsale.TimedCrowdsaleExtended(uint256,uint256)"><code class="function-signature">TimedCrowdsaleExtended(uint256 prevClosingTime, uint256 newClosingTime)</code></a></li><li class="inherited"><a href="#TimedCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale.constructor(uint256,uint256)"></a><code class="function-signature">constructor(uint256 openingTime, uint256 closingTime)</code></h4>

Constructor, takes crowdsale opening and closing times.




<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale.openingTime()"></a><code class="function-signature">openingTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale.closingTime()"></a><code class="function-signature">closingTime() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale.isOpen()"></a><code class="function-signature">isOpen() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale.hasClosed()"></a><code class="function-signature">hasClosed() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Checks whether the period in which the crowdsale is open has already elapsed.




<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale._preValidatePurchase(address,uint256)"></a><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></h4>

Extend parent behavior requiring to be within contributing period.




<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale._extendTime(uint256)"></a><code class="function-signature">_extendTime(uint256 newClosingTime)</code></h4>

Extend crowdsale.






<h4><a class="anchor" aria-hidden="true" id="TimedCrowdsale.TimedCrowdsaleExtended(uint256,uint256)"></a><code class="function-signature">TimedCrowdsaleExtended(uint256 prevClosingTime, uint256 newClosingTime)</code></h4>





### `WhitelistCrowdsale`

Crowdsale in which only whitelisted users can contribute.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#WhitelistCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address _beneficiary, uint256 _weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="../utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="../access/roles#WhitelistedRole.isWhitelisted(address)"><code class="function-signature">isWhitelisted(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistedRole.addWhitelisted(address)"><code class="function-signature">addWhitelisted(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistedRole.removeWhitelisted(address)"><code class="function-signature">removeWhitelisted(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistedRole.renounceWhitelisted()"><code class="function-signature">renounceWhitelisted()</code></a></li><li class="inherited"><a href="../access/roles#WhitelistedRole._addWhitelisted(address)"><code class="function-signature">_addWhitelisted(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistedRole._removeWhitelisted(address)"><code class="function-signature">_removeWhitelisted(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistAdminRole.isWhitelistAdmin(address)"><code class="function-signature">isWhitelistAdmin(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistAdminRole.addWhitelistAdmin(address)"><code class="function-signature">addWhitelistAdmin(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistAdminRole.renounceWhitelistAdmin()"><code class="function-signature">renounceWhitelistAdmin()</code></a></li><li class="inherited"><a href="../access/roles#WhitelistAdminRole._addWhitelistAdmin(address)"><code class="function-signature">_addWhitelistAdmin(address account)</code></a></li><li class="inherited"><a href="../access/roles#WhitelistAdminRole._removeWhitelistAdmin(address)"><code class="function-signature">_removeWhitelistAdmin(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#WhitelistCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li><li class="inherited"><a href="#WhitelistCrowdsale.WhitelistedAdded(address)"><code class="function-signature">WhitelistedAdded(address account)</code></a></li><li class="inherited"><a href="#WhitelistCrowdsale.WhitelistedRemoved(address)"><code class="function-signature">WhitelistedRemoved(address account)</code></a></li><li class="inherited"><a href="#WhitelistCrowdsale.WhitelistAdminAdded(address)"><code class="function-signature">WhitelistAdminAdded(address account)</code></a></li><li class="inherited"><a href="#WhitelistCrowdsale.WhitelistAdminRemoved(address)"><code class="function-signature">WhitelistAdminRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="WhitelistCrowdsale._preValidatePurchase(address,uint256)"></a><code class="function-signature">_preValidatePurchase(address _beneficiary, uint256 _weiAmount)</code></h4>

Extend parent behavior requiring beneficiary to be whitelisted. Note that no
restriction is imposed on the account sending the transaction.






## Distribution

### `FinalizableCrowdsale`

Extension of TimedCrowdsale with a one-off finalization action, where one
can do extra work after finishing.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#FinalizableCrowdsale.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#FinalizableCrowdsale.finalized()"><code class="function-signature">finalized()</code></a></li><li><a href="#FinalizableCrowdsale.finalize()"><code class="function-signature">finalize()</code></a></li><li><a href="#FinalizableCrowdsale._finalization()"><code class="function-signature">_finalization()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.constructor(uint256,uint256)"><code class="function-signature">constructor(uint256 openingTime, uint256 closingTime)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.openingTime()"><code class="function-signature">openingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.closingTime()"><code class="function-signature">closingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.isOpen()"><code class="function-signature">isOpen()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.hasClosed()"><code class="function-signature">hasClosed()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._extendTime(uint256)"><code class="function-signature">_extendTime(uint256 newClosingTime)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#FinalizableCrowdsale.CrowdsaleFinalized()"><code class="function-signature">CrowdsaleFinalized()</code></a></li><li class="inherited"><a href="#FinalizableCrowdsale.TimedCrowdsaleExtended(uint256,uint256)"><code class="function-signature">TimedCrowdsaleExtended(uint256 prevClosingTime, uint256 newClosingTime)</code></a></li><li class="inherited"><a href="#FinalizableCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="FinalizableCrowdsale.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="FinalizableCrowdsale.finalized()"></a><code class="function-signature">finalized() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="FinalizableCrowdsale.finalize()"></a><code class="function-signature">finalize()</code></h4>

Must be called after crowdsale ends, to do some extra finalization
work. Calls the contract&#x27;s finalization function.



<h4><a class="anchor" aria-hidden="true" id="FinalizableCrowdsale._finalization()"></a><code class="function-signature">_finalization()</code></h4>

Can be overridden to add finalization logic. The overriding function
should call super._finalization() to ensure the chain of finalization is
executed entirely.





<h4><a class="anchor" aria-hidden="true" id="FinalizableCrowdsale.CrowdsaleFinalized()"></a><code class="function-signature">CrowdsaleFinalized()</code></h4>





### `PostDeliveryCrowdsale`

Crowdsale that locks tokens from withdrawal until it ends.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#PostDeliveryCrowdsale.withdrawTokens(address)"><code class="function-signature">withdrawTokens(address beneficiary)</code></a></li><li><a href="#PostDeliveryCrowdsale.balanceOf(address)"><code class="function-signature">balanceOf(address account)</code></a></li><li><a href="#PostDeliveryCrowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.constructor(uint256,uint256)"><code class="function-signature">constructor(uint256 openingTime, uint256 closingTime)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.openingTime()"><code class="function-signature">openingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.closingTime()"><code class="function-signature">closingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.isOpen()"><code class="function-signature">isOpen()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.hasClosed()"><code class="function-signature">hasClosed()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._extendTime(uint256)"><code class="function-signature">_extendTime(uint256 newClosingTime)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="../utils#ReentrancyGuard.constructor()"><code class="function-signature">constructor()</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#PostDeliveryCrowdsale.TimedCrowdsaleExtended(uint256,uint256)"><code class="function-signature">TimedCrowdsaleExtended(uint256 prevClosingTime, uint256 newClosingTime)</code></a></li><li class="inherited"><a href="#PostDeliveryCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="PostDeliveryCrowdsale.withdrawTokens(address)"></a><code class="function-signature">withdrawTokens(address beneficiary)</code></h4>

Withdraw tokens only after crowdsale ends.




<h4><a class="anchor" aria-hidden="true" id="PostDeliveryCrowdsale.balanceOf(address)"></a><code class="function-signature">balanceOf(address account) <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="PostDeliveryCrowdsale._processPurchase(address,uint256)"></a><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></h4>

Overrides parent by storing balances instead of issuing tokens right away.






### `RefundableCrowdsale`

Extension of FinalizableCrowdsale contract that adds a funding goal, and the possibility of users
getting a refund if goal is not met.

Deprecated, use RefundablePostDeliveryCrowdsale instead. Note that if you allow tokens to be traded before the goal
is met, then an attack is possible in which the attacker purchases tokens from the crowdsale and when they sees that
the goal is unlikely to be met, they sell their tokens (possibly at a discount). The attacker will be refunded when
the crowdsale is finalized, and the users that purchased from them will be left with worthless tokens.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#RefundableCrowdsale.constructor(uint256)"><code class="function-signature">constructor(uint256 goal)</code></a></li><li><a href="#RefundableCrowdsale.goal()"><code class="function-signature">goal()</code></a></li><li><a href="#RefundableCrowdsale.claimRefund(address payable)"><code class="function-signature">claimRefund(address payable refundee)</code></a></li><li><a href="#RefundableCrowdsale.goalReached()"><code class="function-signature">goalReached()</code></a></li><li><a href="#RefundableCrowdsale._finalization()"><code class="function-signature">_finalization()</code></a></li><li><a href="#RefundableCrowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="distribution#FinalizableCrowdsale.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="distribution#FinalizableCrowdsale.finalized()"><code class="function-signature">finalized()</code></a></li><li class="inherited"><a href="distribution#FinalizableCrowdsale.finalize()"><code class="function-signature">finalize()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.constructor(uint256,uint256)"><code class="function-signature">constructor(uint256 openingTime, uint256 closingTime)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.openingTime()"><code class="function-signature">openingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.closingTime()"><code class="function-signature">closingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.isOpen()"><code class="function-signature">isOpen()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.hasClosed()"><code class="function-signature">hasClosed()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._extendTime(uint256)"><code class="function-signature">_extendTime(uint256 newClosingTime)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#RefundableCrowdsale.CrowdsaleFinalized()"><code class="function-signature">CrowdsaleFinalized()</code></a></li><li class="inherited"><a href="#RefundableCrowdsale.TimedCrowdsaleExtended(uint256,uint256)"><code class="function-signature">TimedCrowdsaleExtended(uint256 prevClosingTime, uint256 newClosingTime)</code></a></li><li class="inherited"><a href="#RefundableCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="RefundableCrowdsale.constructor(uint256)"></a><code class="function-signature">constructor(uint256 goal)</code></h4>

Constructor, creates RefundEscrow.




<h4><a class="anchor" aria-hidden="true" id="RefundableCrowdsale.goal()"></a><code class="function-signature">goal() <span class="return-arrow">→</span> <span class="return-type">uint256</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="RefundableCrowdsale.claimRefund(address payable)"></a><code class="function-signature">claimRefund(address payable refundee)</code></h4>

Investors can claim refunds here if crowdsale is unsuccessful.




<h4><a class="anchor" aria-hidden="true" id="RefundableCrowdsale.goalReached()"></a><code class="function-signature">goalReached() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Checks whether funding goal was reached.




<h4><a class="anchor" aria-hidden="true" id="RefundableCrowdsale._finalization()"></a><code class="function-signature">_finalization()</code></h4>

Escrow finalization task, called when finalize() is called.



<h4><a class="anchor" aria-hidden="true" id="RefundableCrowdsale._forwardFunds()"></a><code class="function-signature">_forwardFunds()</code></h4>

Overrides Crowdsale fund forwarding, sending funds to escrow.





### `RefundablePostDeliveryCrowdsale`

Extension of RefundableCrowdsale contract that only delivers the tokens
once the crowdsale has closed and the goal met, preventing refunds to be issued
to token holders.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#RefundablePostDeliveryCrowdsale.withdrawTokens(address)"><code class="function-signature">withdrawTokens(address beneficiary)</code></a></li><li class="inherited"><a href="distribution#PostDeliveryCrowdsale.balanceOf(address)"><code class="function-signature">balanceOf(address account)</code></a></li><li class="inherited"><a href="distribution#PostDeliveryCrowdsale._processPurchase(address,uint256)"><code class="function-signature">_processPurchase(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href="distribution#RefundableCrowdsale.constructor(uint256)"><code class="function-signature">constructor(uint256 goal)</code></a></li><li class="inherited"><a href="distribution#RefundableCrowdsale.goal()"><code class="function-signature">goal()</code></a></li><li class="inherited"><a href="distribution#RefundableCrowdsale.claimRefund(address payable)"><code class="function-signature">claimRefund(address payable refundee)</code></a></li><li class="inherited"><a href="distribution#RefundableCrowdsale.goalReached()"><code class="function-signature">goalReached()</code></a></li><li class="inherited"><a href="distribution#RefundableCrowdsale._finalization()"><code class="function-signature">_finalization()</code></a></li><li class="inherited"><a href="distribution#RefundableCrowdsale._forwardFunds()"><code class="function-signature">_forwardFunds()</code></a></li><li class="inherited"><a href="distribution#FinalizableCrowdsale.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="distribution#FinalizableCrowdsale.finalized()"><code class="function-signature">finalized()</code></a></li><li class="inherited"><a href="distribution#FinalizableCrowdsale.finalize()"><code class="function-signature">finalize()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.constructor(uint256,uint256)"><code class="function-signature">constructor(uint256 openingTime, uint256 closingTime)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.openingTime()"><code class="function-signature">openingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.closingTime()"><code class="function-signature">closingTime()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.isOpen()"><code class="function-signature">isOpen()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale.hasClosed()"><code class="function-signature">hasClosed()</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._preValidatePurchase(address,uint256)"><code class="function-signature">_preValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href="validation#TimedCrowdsale._extendTime(uint256)"><code class="function-signature">_extendTime(uint256 newClosingTime)</code></a></li><li class="inherited"><a href=".#Crowdsale.constructor(uint256,address payable,contract IERC20)"><code class="function-signature">constructor(uint256 rate, address payable wallet, contract IERC20 token)</code></a></li><li class="inherited"><a href=".#Crowdsale.fallback()"><code class="function-signature">fallback()</code></a></li><li class="inherited"><a href=".#Crowdsale.token()"><code class="function-signature">token()</code></a></li><li class="inherited"><a href=".#Crowdsale.wallet()"><code class="function-signature">wallet()</code></a></li><li class="inherited"><a href=".#Crowdsale.rate()"><code class="function-signature">rate()</code></a></li><li class="inherited"><a href=".#Crowdsale.weiRaised()"><code class="function-signature">weiRaised()</code></a></li><li class="inherited"><a href=".#Crowdsale.buyTokens(address)"><code class="function-signature">buyTokens(address beneficiary)</code></a></li><li class="inherited"><a href=".#Crowdsale._postValidatePurchase(address,uint256)"><code class="function-signature">_postValidatePurchase(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._deliverTokens(address,uint256)"><code class="function-signature">_deliverTokens(address beneficiary, uint256 tokenAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._updatePurchasingState(address,uint256)"><code class="function-signature">_updatePurchasingState(address beneficiary, uint256 weiAmount)</code></a></li><li class="inherited"><a href=".#Crowdsale._getTokenAmount(uint256)"><code class="function-signature">_getTokenAmount(uint256 weiAmount)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#RefundablePostDeliveryCrowdsale.CrowdsaleFinalized()"><code class="function-signature">CrowdsaleFinalized()</code></a></li><li class="inherited"><a href="#RefundablePostDeliveryCrowdsale.TimedCrowdsaleExtended(uint256,uint256)"><code class="function-signature">TimedCrowdsaleExtended(uint256 prevClosingTime, uint256 newClosingTime)</code></a></li><li class="inherited"><a href="#RefundablePostDeliveryCrowdsale.TokensPurchased(address,address,uint256,uint256)"><code class="function-signature">TokensPurchased(address purchaser, address beneficiary, uint256 value, uint256 amount)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="RefundablePostDeliveryCrowdsale.withdrawTokens(address)"></a><code class="function-signature">withdrawTokens(address beneficiary)</code></h4>







</div>