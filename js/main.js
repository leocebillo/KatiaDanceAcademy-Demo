var $=function(i){return document.getElementById(i)};
var pc=['#ee3fa3','#4b1fa8','#ffb238','#b5127e','#7a4ee0'];
function flags(){var el=$('picado');if(!el)return;var n=Math.ceil(window.innerWidth/52)+2,h='';for(var i=0;i<n;i++){h+='<i style="background:'+pc[i%5]+'"></i>'}el.innerHTML=h}
flags();window.addEventListener('resize',flags);

if($("pkgs")){

var P=[{id:'drop',t:'Placeholder',d:'Placeholder',p:15,n:'Placeholder'},{id:'four',t:'Placeholder',d:'Placeholder',p:52,n:'$13 a class',tag:'Most popular'},{id:'month',t:'Placeholder',d:'Placeholder',p:99,n:'Placeholder'},{id:'kids',t:'Placeholder',d:'Placeholder',p:60,n:'4 Saturday classes'}];
var M=[['Card','card'],['Zelle','Send to pay@bailaconkatia.com'],['Cash App','Send to $BailaConKatia'],['At the studio','Pay when you arrive. We hold your spot for 48 hours.']];
var sel=P[1],pm='Card';

var pk=$('pkgs');
function drawP(){pk.innerHTML='';P.forEach(function(x){var b=document.createElement('button');b.type='button';b.className='pkg';b.setAttribute('aria-pressed',x===sel);b.innerHTML=(x.tag?'<span class="tag">'+x.tag+'</span>':'')+'<span><strong>'+x.t+'</strong><small>'+x.d+'</small></span><span><span class="pr"><sup>$</sup>'+x.p+'</span><em>'+x.n+'</em></span>';b.onclick=function(){sel=x;drawP()};pk.appendChild(b)});$('tot').textContent='$'+sel.p}
function drawM(){var t=$('tabs');t.innerHTML='';M.forEach(function(m){var b=document.createElement('button');b.type='button';b.textContent=m[0];b.setAttribute('aria-pressed',m[0]===pm);b.onclick=function(){pm=m[0];drawM()};t.appendChild(b)});
var c=pm==='Card';$('card').style.display=c?'block':'none';var a=$('alt');a.style.display=c?'none':'block';if(!c){a.textContent=M.filter(function(m){return m[0]===pm})[0][1]}}
$('f').onsubmit=function(e){e.preventDefault();var d=$('done');var n=$('n').value.trim(),em=$('e').value.trim();
if(!n||em.indexOf('@')<1){d.style.display='block';d.style.background='#ffe9ee';d.style.color='#7a0a2a';d.textContent='Add your name and a valid email to continue.';return}
d.style.display='block';d.style.background='#e9ffe9';d.style.color='#0d4a1c';d.textContent='You are in, '+n.split(' ')[0]+'! '+sel.t+' reserved ($'+sel.p+', '+pm+'). A confirmation is on its way to '+em+'.'};
drawP();drawM();
}
if($("gal")){

var T={home:'Baila con Katia Dance Academy | Rio Grande Valley',classes:'Classes',about:'About Katia',pricing:'Pricing and sign up',contact:'Contact and location'};
var PHOTOS=[];/* add class photos: {src:'data:image/jpeg;base64,...',cap:'Placeholder'} */
var CAPS=['Placeholder','Placeholder','Placeholder','Placeholder','Placeholder','Placeholder'];
var g=document.getElementById('gal'),gh='';for(var k=0;k<6;k++){var ph=PHOTOS[k];gh+='<figure>'+(ph?'<img src="'+ph.src+'" alt="'+(ph.cap||CAPS[k])+'" loading="lazy">':'<div class="ph">Class photo<br>goes here</div>')+'<figcaption>'+(ph&&ph.cap||CAPS[k])+'</figcaption></figure>'}g.innerHTML=gh;


}
