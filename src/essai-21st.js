// ESSAI — compagnon de essai-21st.css (voir son en-tête). Il n'écoute que les panneaux : ni la
// scène, ni le manifeste, ni l'état de l'Instrument ne sont lus ou modifiés.
(function(){
  'use strict';
  document.body.classList.add('essai-21st');

  // liseré de lumière sous le doigt
  Array.prototype.forEach.call(document.querySelectorAll('.panneau:not(#aide)'), function(p){
    function suivre(e){
      var r = p.getBoundingClientRect();
      p.style.setProperty('--x', (e.clientX - r.left) + 'px');
      p.style.setProperty('--y', (e.clientY - r.top) + 'px');
      p.classList.add('touche');
    }
    p.addEventListener('pointermove', suivre);
    p.addEventListener('pointerdown', suivre);
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function(t){
      p.addEventListener(t, function(){ p.classList.remove('touche'); });
    });
  });

  // le texte d'une station ou d'un nœud se renouvelle quand il change
  ['station-nom', 'station-dit', 'station-garde', 'info-label', 'info-deg', 'pol-pdv'].forEach(function(id){
    var el = document.getElementById(id);
    if (!el || !window.MutationObserver) return;
    new MutationObserver(function(){
      el.classList.remove('renouvele'); void el.offsetWidth; el.classList.add('renouvele');
    }).observe(el, { childList:true, characterData:true, subtree:true });
  });

  // légende repliable, ouverte par défaut
  var leg = document.getElementById('legende');
  if (leg){
    var corps = document.createElement('div'); corps.className = 'essai-corps';
    while (leg.firstChild) corps.appendChild(leg.firstChild);
    var pli = document.createElement('button'); pli.type = 'button'; pli.className = 'essai-pli';
    pli.textContent = 'Légende'; pli.setAttribute('aria-expanded', 'true');
    pli.addEventListener('click', function(){
      var pliee = leg.classList.toggle('pliee');
      pli.setAttribute('aria-expanded', pliee ? 'false' : 'true');
    });
    leg.appendChild(pli); leg.appendChild(corps);
  }

  // témoin et sortie
  var a = document.createElement('a');
  a.className = 'essai-temoin'; a.href = location.pathname + '?essai=non'; a.textContent = 'Essai 21st · quitter';
  document.getElementById('app').appendChild(a);
})();
