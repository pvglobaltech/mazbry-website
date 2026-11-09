const nav=document.getElementById('menu');
document.getElementById('burger').onclick=()=>nav.classList.toggle('open');
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// typing words
const w=document.getElementById('type');
if(w){const words=['Software Development','Smart Networks','Database Management','Tech Training'];let i=0,j=0,d=false;
(function t(){const s=words[i];w.textContent=s.slice(0,j);if(!d&&j++==s.length){d=true;return setTimeout(t,1600)}
if(d&&j--==0){d=false;i=(i+1)%words.length}setTimeout(t,d?40:85)})()}
// counters
document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n;new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();let c=0;const s=setInterval(()=>{c+=Math.ceil(n/50);if(c>=n){c=n;clearInterval(s)}el.textContent=c+(el.dataset.s||'')},30)}}).observe(el)});
// network canvas
const cv=document.getElementById('net');
if(cv&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const x=cv.getContext('2d');let W,H,P=[];
const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(70,W/18)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}))};
rs();addEventListener('resize',rs);
(function f(){x.clearRect(0,0,W,H);P.forEach((p,a)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
x.fillStyle='#f26a0a';x.beginPath();x.arc(p.x,p.y,2.2,0,7);x.fill();
for(let b=a+1;b<P.length;b++){const q=P[b],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){x.strokeStyle='rgba(242,106,10,'+(1-d/130)*.45+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});requestAnimationFrame(f)})()}
// portfolio filter
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(k=>k.classList.remove('on'));b.classList.add('on');
document.querySelectorAll('[data-cat]').forEach(c=>c.style.display=(b.dataset.f=='all'||c.dataset.cat==b.dataset.f)?'':'none')});
// contact form -> opens email client
const f=document.getElementById('cform');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
location.href='mailto:info@mazbrymsllc.com?subject='+encodeURIComponent('Website enquiry: '+d.get('service'))+'&body='+encodeURIComponent('Name: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nEmail: '+d.get('email')+'\n\n'+d.get('msg'));
document.getElementById('ok').style.display='block'};
