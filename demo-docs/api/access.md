---
title: Access
---

<div class="contracts">

## Library

### `Roles`

Library for managing addresses assigned to a Role.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Roles.add(struct Roles.Role,address)"><code class="function-signature">add(struct Roles.Role role, address account)</code></a></li><li><a href="#Roles.remove(struct Roles.Role,address)"><code class="function-signature">remove(struct Roles.Role role, address account)</code></a></li><li><a href="#Roles.has(struct Roles.Role,address)"><code class="function-signature">has(struct Roles.Role role, address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Roles.add(struct Roles.Role,address)"></a><code class="function-signature">add(struct Roles.Role role, address account)</code></h4>

Give an account access to this role.



<h4><a class="anchor" aria-hidden="true" id="Roles.remove(struct Roles.Role,address)"></a><code class="function-signature">remove(struct Roles.Role role, address account)</code></h4>

Remove an account&#x27;s access to this role.



<h4><a class="anchor" aria-hidden="true" id="Roles.has(struct Roles.Role,address)"></a><code class="function-signature">has(struct Roles.Role role, address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>

Check if an account has this role.






## Roles

### `CapperRole`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#CapperRole.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#CapperRole.isCapper(address)"><code class="function-signature">isCapper(address account)</code></a></li><li><a href="#CapperRole.addCapper(address)"><code class="function-signature">addCapper(address account)</code></a></li><li><a href="#CapperRole.renounceCapper()"><code class="function-signature">renounceCapper()</code></a></li><li><a href="#CapperRole._addCapper(address)"><code class="function-signature">_addCapper(address account)</code></a></li><li><a href="#CapperRole._removeCapper(address)"><code class="function-signature">_removeCapper(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#CapperRole.CapperAdded(address)"><code class="function-signature">CapperAdded(address account)</code></a></li><li class="inherited"><a href="#CapperRole.CapperRemoved(address)"><code class="function-signature">CapperRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="CapperRole.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="CapperRole.isCapper(address)"></a><code class="function-signature">isCapper(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="CapperRole.addCapper(address)"></a><code class="function-signature">addCapper(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="CapperRole.renounceCapper()"></a><code class="function-signature">renounceCapper()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="CapperRole._addCapper(address)"></a><code class="function-signature">_addCapper(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="CapperRole._removeCapper(address)"></a><code class="function-signature">_removeCapper(address account)</code></h4>







<h4><a class="anchor" aria-hidden="true" id="CapperRole.CapperAdded(address)"></a><code class="function-signature">CapperAdded(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="CapperRole.CapperRemoved(address)"></a><code class="function-signature">CapperRemoved(address account)</code></h4>





### `MinterRole`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#MinterRole.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#MinterRole.isMinter(address)"><code class="function-signature">isMinter(address account)</code></a></li><li><a href="#MinterRole.addMinter(address)"><code class="function-signature">addMinter(address account)</code></a></li><li><a href="#MinterRole.renounceMinter()"><code class="function-signature">renounceMinter()</code></a></li><li><a href="#MinterRole._addMinter(address)"><code class="function-signature">_addMinter(address account)</code></a></li><li><a href="#MinterRole._removeMinter(address)"><code class="function-signature">_removeMinter(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#MinterRole.MinterAdded(address)"><code class="function-signature">MinterAdded(address account)</code></a></li><li class="inherited"><a href="#MinterRole.MinterRemoved(address)"><code class="function-signature">MinterRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="MinterRole.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="MinterRole.isMinter(address)"></a><code class="function-signature">isMinter(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="MinterRole.addMinter(address)"></a><code class="function-signature">addMinter(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="MinterRole.renounceMinter()"></a><code class="function-signature">renounceMinter()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="MinterRole._addMinter(address)"></a><code class="function-signature">_addMinter(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="MinterRole._removeMinter(address)"></a><code class="function-signature">_removeMinter(address account)</code></h4>







<h4><a class="anchor" aria-hidden="true" id="MinterRole.MinterAdded(address)"></a><code class="function-signature">MinterAdded(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="MinterRole.MinterRemoved(address)"></a><code class="function-signature">MinterRemoved(address account)</code></h4>





### `PauserRole`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#PauserRole.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#PauserRole.isPauser(address)"><code class="function-signature">isPauser(address account)</code></a></li><li><a href="#PauserRole.addPauser(address)"><code class="function-signature">addPauser(address account)</code></a></li><li><a href="#PauserRole.renouncePauser()"><code class="function-signature">renouncePauser()</code></a></li><li><a href="#PauserRole._addPauser(address)"><code class="function-signature">_addPauser(address account)</code></a></li><li><a href="#PauserRole._removePauser(address)"><code class="function-signature">_removePauser(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#PauserRole.PauserAdded(address)"><code class="function-signature">PauserAdded(address account)</code></a></li><li class="inherited"><a href="#PauserRole.PauserRemoved(address)"><code class="function-signature">PauserRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="PauserRole.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PauserRole.isPauser(address)"></a><code class="function-signature">isPauser(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="PauserRole.addPauser(address)"></a><code class="function-signature">addPauser(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PauserRole.renouncePauser()"></a><code class="function-signature">renouncePauser()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PauserRole._addPauser(address)"></a><code class="function-signature">_addPauser(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PauserRole._removePauser(address)"></a><code class="function-signature">_removePauser(address account)</code></h4>







<h4><a class="anchor" aria-hidden="true" id="PauserRole.PauserAdded(address)"></a><code class="function-signature">PauserAdded(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="PauserRole.PauserRemoved(address)"></a><code class="function-signature">PauserRemoved(address account)</code></h4>





### `SignerRole`



<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#SignerRole.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#SignerRole.isSigner(address)"><code class="function-signature">isSigner(address account)</code></a></li><li><a href="#SignerRole.addSigner(address)"><code class="function-signature">addSigner(address account)</code></a></li><li><a href="#SignerRole.renounceSigner()"><code class="function-signature">renounceSigner()</code></a></li><li><a href="#SignerRole._addSigner(address)"><code class="function-signature">_addSigner(address account)</code></a></li><li><a href="#SignerRole._removeSigner(address)"><code class="function-signature">_removeSigner(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#SignerRole.SignerAdded(address)"><code class="function-signature">SignerAdded(address account)</code></a></li><li class="inherited"><a href="#SignerRole.SignerRemoved(address)"><code class="function-signature">SignerRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="SignerRole.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SignerRole.isSigner(address)"></a><code class="function-signature">isSigner(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="SignerRole.addSigner(address)"></a><code class="function-signature">addSigner(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SignerRole.renounceSigner()"></a><code class="function-signature">renounceSigner()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SignerRole._addSigner(address)"></a><code class="function-signature">_addSigner(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SignerRole._removeSigner(address)"></a><code class="function-signature">_removeSigner(address account)</code></h4>







<h4><a class="anchor" aria-hidden="true" id="SignerRole.SignerAdded(address)"></a><code class="function-signature">SignerAdded(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="SignerRole.SignerRemoved(address)"></a><code class="function-signature">SignerRemoved(address account)</code></h4>





### `WhitelistAdminRole`

WhitelistAdmins are responsible for assigning and removing Whitelisted accounts.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#WhitelistAdminRole.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#WhitelistAdminRole.isWhitelistAdmin(address)"><code class="function-signature">isWhitelistAdmin(address account)</code></a></li><li><a href="#WhitelistAdminRole.addWhitelistAdmin(address)"><code class="function-signature">addWhitelistAdmin(address account)</code></a></li><li><a href="#WhitelistAdminRole.renounceWhitelistAdmin()"><code class="function-signature">renounceWhitelistAdmin()</code></a></li><li><a href="#WhitelistAdminRole._addWhitelistAdmin(address)"><code class="function-signature">_addWhitelistAdmin(address account)</code></a></li><li><a href="#WhitelistAdminRole._removeWhitelistAdmin(address)"><code class="function-signature">_removeWhitelistAdmin(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#WhitelistAdminRole.WhitelistAdminAdded(address)"><code class="function-signature">WhitelistAdminAdded(address account)</code></a></li><li class="inherited"><a href="#WhitelistAdminRole.WhitelistAdminRemoved(address)"><code class="function-signature">WhitelistAdminRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole.isWhitelistAdmin(address)"></a><code class="function-signature">isWhitelistAdmin(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole.addWhitelistAdmin(address)"></a><code class="function-signature">addWhitelistAdmin(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole.renounceWhitelistAdmin()"></a><code class="function-signature">renounceWhitelistAdmin()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole._addWhitelistAdmin(address)"></a><code class="function-signature">_addWhitelistAdmin(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole._removeWhitelistAdmin(address)"></a><code class="function-signature">_removeWhitelistAdmin(address account)</code></h4>







<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole.WhitelistAdminAdded(address)"></a><code class="function-signature">WhitelistAdminAdded(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistAdminRole.WhitelistAdminRemoved(address)"></a><code class="function-signature">WhitelistAdminRemoved(address account)</code></h4>





### `WhitelistedRole`

Whitelisted accounts have been approved by a WhitelistAdmin to perform certain actions (e.g. participate in a
crowdsale). This role is special in that the only accounts that can add it are WhitelistAdmins (who can also remove
it), and not Whitelisteds themselves.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#WhitelistedRole.isWhitelisted(address)"><code class="function-signature">isWhitelisted(address account)</code></a></li><li><a href="#WhitelistedRole.addWhitelisted(address)"><code class="function-signature">addWhitelisted(address account)</code></a></li><li><a href="#WhitelistedRole.removeWhitelisted(address)"><code class="function-signature">removeWhitelisted(address account)</code></a></li><li><a href="#WhitelistedRole.renounceWhitelisted()"><code class="function-signature">renounceWhitelisted()</code></a></li><li><a href="#WhitelistedRole._addWhitelisted(address)"><code class="function-signature">_addWhitelisted(address account)</code></a></li><li><a href="#WhitelistedRole._removeWhitelisted(address)"><code class="function-signature">_removeWhitelisted(address account)</code></a></li><li class="inherited"><a href="roles#WhitelistAdminRole.constructor()"><code class="function-signature">constructor()</code></a></li><li class="inherited"><a href="roles#WhitelistAdminRole.isWhitelistAdmin(address)"><code class="function-signature">isWhitelistAdmin(address account)</code></a></li><li class="inherited"><a href="roles#WhitelistAdminRole.addWhitelistAdmin(address)"><code class="function-signature">addWhitelistAdmin(address account)</code></a></li><li class="inherited"><a href="roles#WhitelistAdminRole.renounceWhitelistAdmin()"><code class="function-signature">renounceWhitelistAdmin()</code></a></li><li class="inherited"><a href="roles#WhitelistAdminRole._addWhitelistAdmin(address)"><code class="function-signature">_addWhitelistAdmin(address account)</code></a></li><li class="inherited"><a href="roles#WhitelistAdminRole._removeWhitelistAdmin(address)"><code class="function-signature">_removeWhitelistAdmin(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#WhitelistedRole.WhitelistedAdded(address)"><code class="function-signature">WhitelistedAdded(address account)</code></a></li><li class="inherited"><a href="#WhitelistedRole.WhitelistedRemoved(address)"><code class="function-signature">WhitelistedRemoved(address account)</code></a></li><li class="inherited"><a href="#WhitelistedRole.WhitelistAdminAdded(address)"><code class="function-signature">WhitelistAdminAdded(address account)</code></a></li><li class="inherited"><a href="#WhitelistedRole.WhitelistAdminRemoved(address)"><code class="function-signature">WhitelistAdminRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole.isWhitelisted(address)"></a><code class="function-signature">isWhitelisted(address account) <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole.addWhitelisted(address)"></a><code class="function-signature">addWhitelisted(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole.removeWhitelisted(address)"></a><code class="function-signature">removeWhitelisted(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole.renounceWhitelisted()"></a><code class="function-signature">renounceWhitelisted()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole._addWhitelisted(address)"></a><code class="function-signature">_addWhitelisted(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole._removeWhitelisted(address)"></a><code class="function-signature">_removeWhitelisted(address account)</code></h4>







<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole.WhitelistedAdded(address)"></a><code class="function-signature">WhitelistedAdded(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="WhitelistedRole.WhitelistedRemoved(address)"></a><code class="function-signature">WhitelistedRemoved(address account)</code></h4>





</div>