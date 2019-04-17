---
title: Lifecycle
---

<div class="contracts">

## Contracts

### `Pausable`

Base contract which allows children to implement an emergency stop mechanism.

<div class="contract-index"><span class="contract-index-title">Functions</span><ul><li><a href="#Pausable.constructor()"><code class="function-signature">constructor()</code></a></li><li><a href="#Pausable.paused()"><code class="function-signature">paused()</code></a></li><li><a href="#Pausable.pause()"><code class="function-signature">pause()</code></a></li><li><a href="#Pausable.unpause()"><code class="function-signature">unpause()</code></a></li><li class="inherited"><a href="access/roles#PauserRole.isPauser(address)"><code class="function-signature">isPauser(address account)</code></a></li><li class="inherited"><a href="access/roles#PauserRole.addPauser(address)"><code class="function-signature">addPauser(address account)</code></a></li><li class="inherited"><a href="access/roles#PauserRole.renouncePauser()"><code class="function-signature">renouncePauser()</code></a></li><li class="inherited"><a href="access/roles#PauserRole._addPauser(address)"><code class="function-signature">_addPauser(address account)</code></a></li><li class="inherited"><a href="access/roles#PauserRole._removePauser(address)"><code class="function-signature">_removePauser(address account)</code></a></li></ul><span class="contract-index-title">Events</span><ul><li class="inherited"><a href="#Pausable.Paused(address)"><code class="function-signature">Paused(address account)</code></a></li><li class="inherited"><a href="#Pausable.Unpaused(address)"><code class="function-signature">Unpaused(address account)</code></a></li><li class="inherited"><a href="#Pausable.PauserAdded(address)"><code class="function-signature">PauserAdded(address account)</code></a></li><li class="inherited"><a href="#Pausable.PauserRemoved(address)"><code class="function-signature">PauserRemoved(address account)</code></a></li></ul></div>



<h4><a class="anchor" aria-hidden="true" id="Pausable.constructor()"></a><code class="function-signature">constructor()</code></h4>





<h4><a class="anchor" aria-hidden="true" id="Pausable.paused()"></a><code class="function-signature">paused() <span class="return-arrow">→</span> <span class="return-type">bool</span></code></h4>





<h4><a class="anchor" aria-hidden="true" id="Pausable.pause()"></a><code class="function-signature">pause()</code></h4>

Called by a pauser to pause, triggers stopped state.



<h4><a class="anchor" aria-hidden="true" id="Pausable.unpause()"></a><code class="function-signature">unpause()</code></h4>

Called by a pauser to unpause, returns to normal state.





<h4><a class="anchor" aria-hidden="true" id="Pausable.Paused(address)"></a><code class="function-signature">Paused(address account)</code></h4>





<h4><a class="anchor" aria-hidden="true" id="Pausable.Unpaused(address)"></a><code class="function-signature">Unpaused(address account)</code></h4>





</div>