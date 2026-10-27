document.documentElement.classList.add('js');
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const A=n=>'Assets/'+n.replace(/ /g,'%20');

/* Projects (data-driven) */
const P=[
{c:'thesis',tag:'Skripsi Research & Development',tc:'#2563eb',t:'Pengembangan Game Edukatif PGL',s:'S1 Pendidikan Matematika • UPGRIS',d:'Penelitian R&D untuk mengembangkan media pembelajaran interaktif berbasis game edukatif guna meningkatkan pemahaman konsep <strong>Persamaan Garis Lurus (PGL)</strong> pada siswa SMP.',i:[['skripsi.png','Visualisasi Skripsi'],['skripsi.png','Visualisasi Skripsi']],f:'Model R&D / ADDIE',l:['Skripsi Utama']},
{c:'thesis',tag:'Publikasi Jurnal SINTA 4',tc:'#4f46e5',t:'Jurnal Cendekia: Pendidikan Matematika',s:'Artikel Ilmiah Terakreditasi',d:'<strong>Judul Artikel:</strong> Efektivitas Game Edukasi Berbasis Situs Web "Petualangan Telur Dinosaurus" dalam Memacu Pemahaman Konsep Matematika Siswa.',i:[['Publikasi.png','Visualisasi Publikasi'],['cedekia.jpg','Jurnal Cendekia']],f:'Jurnal Cendekia',l:['Lihat Publikasi','https://j-cup.org/index.php/cendekia/article/view/4935']},
{c:'thesis',tag:'Web Game Development',tc:'#0891b2',t:'Petualangan Telur Dinosaurus',s:'Web-Based Educational Game',d:'Inovasi pembelajaran berbasis game yang imersif dengan HTML5 dan p5.js, dilengkapi sinkronisasi data otomatis via Google Sheets API agar guru dan siswa dapat melacak skor serta perkembangan belajar secara real-time.',i:[['scriptcode.png','Script Code'],['game.jpeg','Game Preview']],f:'HTML5, JS, p5.js, API',l:['EdTech Dev','https://lidafatma.github.io/Dinosaur-Egg-Adventure/']},
{c:'ml',tag:'Machine Learning',tc:'#4f46e5',t:'Customer Segmentation & Classification',s:'Retail Analytics & Predictive Targeting Pipeline',d:'Membangun end-to-end Machine Learning pipeline di Python (Pandas, Scikit-learn): <strong>Unsupervised Learning (Clustering)</strong> untuk mengelompokkan perilaku pembeli dan <strong>Supervised Learning (Classification)</strong> untuk memprediksi target pemasaran.',i:[['clustering.png','Visualisasi EDA'],['classification.png','Matriks Korelasi Fitur']],f:'Python, Scikit-learn, Seaborn',l:['Explore Repository','https://github.com/Lidafatma/ML-Clustering-Classification']},
{c:'data',tag:'Data Analytics & Streamlit',tc:'#0284c7',t:'Bike Sharing Demand Analytics',s:'Exploratory Data Analysis & Streamlit Web App',d:'Analisis pola permintaan penyewaan sepeda berdasarkan musim, cuaca, dan jam operasional, dilengkapi <strong>Dashboard Interaktif Looker Studio</strong> dan aplikasi web <strong>Streamlit</strong>.',i:[['notebook.png','Interactive Dashboard'],['streamlit.png','Aplikasi Web Streamlit']],f:'Python, Streamlit, Looker Studio',l:['Explore Repository','https://github.com/Lidafatma/Bike-Sharing']},
{c:'uiux',tag:'UI/UX Design',tc:'#9333ea',t:'NFT Mobile App & E-Learning Web',s:'High-Fidelity Wireframing & Prototype in Figma',d:'Merancang antarmuka aplikasi NFT Marketplace (Dark Mode, integrasi Web3 Wallet) serta Platform E-Learning Interaktif berbasis web untuk mendukung Game-Based Learning.',i:[['nft.png','Design System NFT'],['elearning (2).png','Design E-Learning Web']],f:'Figma, Wireframing, Prototyping',l:['User Research']}
];
$('#pg').innerHTML=P.map(p=>`<article class="glass glow pc rv" data-c="${p.c}"><div class="pc-t"><span class="chip" style="background:${p.tc}33;border-color:${p.tc};color:#fff">${p.tag}</span><h3>${p.t}</h3><small>${p.s}</small></div><div class="pc-b"><p>${p.d}</p><div class="shots">${p.i.map(x=>`<img src="${A(x[0])}" alt="${x[1]}" loading="lazy">`).join('')}</div></div><div class="pc-f"><span>${p.f}</span>${p.l[1]?`<a href="${p.l[1]}" target="_blank" rel="noopener">${p.l[0]} &rarr;</a>`:`<b style="color:#d8b4fe">${p.l[0]}</b>`}</div></article>`).join('');
const F=[['all','Semua Proyek'],['thesis','Thesis & Game Edukasi'],['ml','Machine Learning'],['data','Data Analytics & Dashboard'],['uiux','UI/UX Figma Design']];
$('#fl').innerHTML=F.map((f,i)=>`<button class="f${i?'':' on'}" data-f="${f[0]}">${f[1]}</button>`).join('');
$('#fl').onclick=e=>{const b=e.target.closest('.f');if(!b)return;$$('.f').forEach(x=>x.classList.toggle('on',x===b));$$('.pc').forEach(c=>c.hidden=b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f)};

/* Certificates (data-driven) */
const C={
dicoding:{l:'Dicoding Academy (8 Kelas)',h:0,d:[['dicoding (4).png','Memulai Pemrograman dengan Python'],['dicoding (2).png','Memulai Belajar Dasar AI'],['dicoding (3).png','Belajar Machine Learning Untuk Pemula'],['dicoding.png','Belajar Struktur Query Language (SQL)'],['dicoding (5).png','Belajar Dasar Visualisasi Data'],['dicoding (6).png','Belajar Strategi Pengembangan Diri'],['dicoding (7).png','Belajar Dasar Data Science'],['dicoding (8).png','Belajar Dasar Manajemen Proyek']].map(x=>[...x,'Dicoding Indonesia'])},
haki:{l:'HAKI Kemenkumham (7 Karya)',h:1,d:[['HAKI (2).png','Bianglala Trigonometri'],['HAKI.png','Buku Kompilasi Essay'],['HAKI (3).png','Papan Statistika'],['HAKI (4).png','Galaxy Transboard'],['HAKI (5).png','Geoboard'],['HAKI (6).png','Kotak Perkom'],['HAKI (7).png','Trans Geoboard']].map(x=>[...x,'Pencatatan HAKI'])},
robotik:{l:'Robotik & Multimedia UPGRIS',h:0,d:[['robotik.jpg','Pelatihan Robotik Dasar & Mekanikal','UKM Robotik UPGRIS'],['KRI.jpg','Panitia KRI','UKM Robotik UPGRIS'],['multimedia.png','Pelatihan UJIKOM Multimedia','LPP UPGRIS']]}};
function showC(k){const g=C[k];$$('#ct .f').forEach(b=>b.classList.toggle('on',b.dataset.k===k));$('#cg').innerHTML=g.d.map((x,i)=>`<figure class="glass glow cc${g.h?' h':''}" tabindex="0" role="button" data-i="${i}" aria-label="Perbesar ${x[1]}"><div><img src="${A(x[0])}" alt="Sertifikat ${x[1]}" loading="lazy"></div><p>${x[1]}</p><span>${x[2]}</span></figure>`).join('');$('#cg').dataset.k=k}
$('#ct').innerHTML=Object.keys(C).map(k=>`<button class="f" data-k="${k}">${C[k].l}</button>`).join('');
$('#ct').onclick=e=>{const b=e.target.closest('.f');if(b)showC(b.dataset.k)};showC('dicoding');
const lb=$('#lb'),open=e=>{const c=e.target.closest('.cc');if(!c)return;const x=C[$('#cg').dataset.k].d[c.dataset.i];$('#lbi').src=A(x[0]);$('#lbi').alt=x[1];$('#lbt').textContent=x[1];lb.showModal()};
$('#cg').onclick=open;$('#cg').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(e)}};lb.onclick=()=>lb.close();

/* Marquee */
const M=['Data Analysis','Machine Learning','Data Visualization','BigQuery & SQL','EdTech & Game Developer','Python Analytics'];
$('#mq').innerHTML=[...M,...M,...M,...M].map(x=>`<span><i class="fa-solid fa-asterisk"></i>${x}</span>`).join('');

/* Nav, hero glow, reveal, count-up, form */
$('#mb').onclick=()=>{const o=$('#lk').classList.toggle('open');$('#mb').setAttribute('aria-expanded',o)};
$('#lk').onclick=e=>{if(e.target.tagName==='A')$('#lk').classList.remove('open')};
$('#home').addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',e.clientX-r.left+'px');e.currentTarget.style.setProperty('--my',e.clientY-r.top+'px')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{rootMargin:'0px 0px -40px 0px',threshold:.1});
$$('.rv').forEach(el=>io.observe(el));
new MutationObserver(()=>$$('.rv:not(.vis)').forEach(el=>io.observe(el))).observe($('#pg'),{childList:true});
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('.links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('section[id]').forEach(s=>so.observe(s));
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)$$('[data-n]').forEach(el=>{const n=+el.dataset.n,d=+el.dataset.d||0,s=el.dataset.s||'',t0=performance.now();(function f(t){const p=Math.min((t-t0)/1400,1);el.textContent=(n*(1-Math.pow(1-p,3))).toFixed(d)+s;if(p<1)requestAnimationFrame(f)})(t0)});
$('#fm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);location.href='mailto:maulidafatma84@gmail.com?subject='+encodeURIComponent('Pesan dari '+f.get('n')+' ('+f.get('e')+')')+'&body='+encodeURIComponent(f.get('m'));const t=$('#toast');t.textContent='Membuka aplikasi email Anda...';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500);e.target.reset()};