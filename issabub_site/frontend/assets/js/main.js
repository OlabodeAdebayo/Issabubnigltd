const API_BASE = window.ISSABUB_API_BASE || 'http://127.0.0.1:8000/api';
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',open)});

document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const fallbackServices=[
 {title:'Technical Sub-Contracting',description:'Specialized labor, skilled manpower and execution support for industrial and EPC projects, including structural erection, equipment installation and site works.',number:'01'},
 {title:'Mechanical Engineering',description:'Design, analysis and engineering support for mechanical systems and equipment, with support through fabrication, installation and commissioning.',number:'02'},
 {title:'Industrial Maintenance',description:'Scheduled and emergency maintenance for industrial facilities, machinery and critical systems to reduce downtime and extend asset life.',number:'03'},
 {title:'Building & Construction',description:'End-to-end building delivery from groundwork and foundations through structural works, finishing, supervision and handover.',number:'04'}
];
const fallbackProjects=[
 {category:'commercial',title:'Retail Shopping Centre Expansion',description:'Expansion of an existing shopping centre with new structural works, external envelope, public plazas and service integration.'},
 {category:'commercial',title:'Office Building Shell & Core',description:'Four-storey commercial office shell-and-core package covering structural frame, façade, core services and base-build systems.'},
 {category:'commercial',title:'Commercial Warehouse Frame',description:'Structural steel framework package including columns, beams, purlins, girts, bracing and connections.'},
 {category:'residential',title:'Apartment Fit-Out & Interiors',description:'Interior fit-out for a 12-unit residential apartment block including flooring, joinery, ceilings, lighting, plumbing and electrical works.'},
 {category:'residential',title:'Townhouse Development',description:'Turnkey construction of an eight-unit contemporary townhouse development with courtyards, parking and shared landscaped areas.'},
 {category:'residential',title:'Family Home Extension & Remodel',description:'Major rear extension and internal remodel with structural modifications, upgraded bathrooms and integrated finishes.'},
 {category:'retrofitting',title:'Clinker Transport System Repair',description:'Repair and rehabilitation of a clinker transport system including frame strengthening, steel replacement and conveyor support repair.'},
 {category:'retrofitting',title:'Office Space Refurbishment',description:'Commercial office renovation covering partitions, ceilings, flooring, lighting, HVAC, electrical and data installations.'},
 {category:'retrofitting',title:'Industrial Facility Upgrade',description:'Industrial retrofit involving structural strengthening, roof replacement, cladding, insulation and mechanical/electrical upgrades.'},
 {category:'structural',title:'Sports Arena Roof Truss',description:'Long-span steel roof structure with trusses, purlins, bracing, access walkways and connections.'},
 {category:'structural',title:'Integration of Existing Cement Silo',description:'Steelwork, platforms, access structures and connections integrating an existing cement silo with a new process line.'},
 {category:'structural',title:'Industrial Portal Frame Building',description:'Large-span portal frame for a manufacturing facility supporting crane runway beams, heavy equipment loads and access platforms.'}
];
function renderServices(items){document.querySelector('#service-grid').innerHTML=items.map((s,i)=>`<article class="service-card"><span class="num">${s.number||String(i+1).padStart(2,'0')}</span><h3>${s.title}</h3><p>${s.description}</p><span class="link">Learn more →</span></article>`).join('');document.querySelector('#service-select').innerHTML='<option value="">Select a service</option>'+items.map(s=>`<option>${s.title}</option>`).join('')}
function renderProjects(filter='all'){const items=fallbackProjects.filter(p=>filter==='all'||p.category===filter);document.querySelector('#project-grid').innerHTML=items.map(p=>`<article class="project-card"><span class="tag">${p.category.toUpperCase()}</span><h3>${p.title}</h3><p>${p.description}</p></article>`).join('')}
async function loadData(){try{const [s,p]=await Promise.all([fetch(`${API_BASE}/services/`),fetch(`${API_BASE}/projects/`)]);if(s.ok){const data=await s.json();renderServices(data.results||data)}else renderServices(fallbackServices);if(p.ok){const data=await p.json();const apiProjects=data.results||data;if(apiProjects.length){fallbackProjects.splice(0,fallbackProjects.length,...apiProjects.map(x=>({category:x.category,title:x.title,description:x.description})))}}}catch(e){renderServices(fallbackServices)}renderProjects()}
loadData();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderProjects(btn.dataset.filter)}));
document.querySelector('#quote-form')?.addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,status=document.querySelector('#form-status');status.textContent='Submitting…';const payload=Object.fromEntries(new FormData(form));try{const r=await fetch(`${API_BASE}/quotes/`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!r.ok)throw new Error();form.reset();status.textContent='Thank you. Your request has been received.'}catch{status.textContent='The form could not connect to the server. Please call +234 812 684 3284 or email issabubngltd@outlook.com.'}});
