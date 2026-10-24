// Regional Intelligence Data for Andhra Pradesh
const regionalData = {
  kosta: {
    title: "Coastal Andhra (కోస్తా ఆంధ్ర) - The Political Heartland",
    districts: "NTR, Krishna, Guntur, Palnadu, Bapatla, East Godavari, Kakinada, Konaseema, West Godavari, Eluru, Prakasam, SPSR Nellore",
    seats: "85 Assembly Constituencies | 12 Parliament Seats",
    dynamics: [
      "Key Caste Equations: Deep analysis of Kamma, Kapu, BC clusters (Gowda, Yadava, Padmashali) & Dalit voter distribution.",
      "Agrarian & Aqua Industry: Real-time sentiment tracking on MSP, canal water distribution, crop insurance, and cold storage grievances.",
      "Amaravati & Urban Centers: High-velocity voter swings across Vijayawada, Guntur, Rajahmundry, and Kakinada belts.",
      "Booth Micro-Grid: Over 22,000 polling stations mapped with granular family-wise political affiliation data."
    ],
    vibe: "High political awareness, intense WhatsApp media consumption, and rapid swing volatility."
  },
  rayalaseema: {
    title: "Rayalaseema (రాయలసీమ) - High-Stakes Battlefield",
    districts: "Kurnool, Nandyal, Ananthapuramu, Sri Sathya Sai, YSR Kadapa, Annamayya, Chittoor, Tirupati",
    seats: "52 Assembly Constituencies | 8 Parliament Seats",
    dynamics: [
      "Key Caste Equations: Micro-mapping of Reddy, Boya/Valmiki, Kuruba, Balija, BC, and Muslim voter blocs.",
      "Irrigation & Drought Vulnerability: Sentiment surveillance regarding Handri-Neeva, Galeru-Nagari, and Tungabhadra projects.",
      "Family & Cadre Loyalty Networks: Navigating legacy political rivalries and establishing multi-layered village-level protection grids.",
      "Welfare Penetration Audits: Direct benefit transfer impact analysis across dryland farming and rural labour communities."
    ],
    vibe: "Strong leader-oriented loyalty, deep-rooted rural cadre networks, decisive consolidated polling."
  },
  uttarandhra: {
    title: "Uttarandhra (ఉత్తరాంధ్ర) - The Decisive Swing Belt",
    districts: "Visakhapatnam, Anakapalli, Vizianagaram, Parvathipuram Manyam, Srikakulam, Alluri Sitharama Raju",
    seats: "38 Assembly Constituencies | 5 Parliament Seats",
    dynamics: [
      "Key Caste Equations: Decisive swing control held by backward classes (Turpu Kapu, Koppula Velama, Kalinga, Polinati Velama).",
      "Tribal Agency Area Mobilization: Distinct ground operations calibrated for Girijan & Agency communities in ASR and Manyam districts.",
      "Industrial & Port Sentiments: Labor union dynamics, Visakhapatnam IT / Steel Plant narratives, and urban middle-class prioritization.",
      "Anti-Incumbency Vulnerability: Highest historical rate of legislative turnover and neutral voter swing in the state."
    ],
    vibe: "Pragmatic, development-driven electorate with unpredictable late-campaign swings."
  }
};

let currentTier = "Assembly (MLA) Constituency";

// Switch AP Region Tab
function switchRegion(regionKey) {
  // Update Tab buttons
  document.querySelectorAll('.region-tab').forEach(tab => {
    tab.className = "region-tab px-6 py-2.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-all";
  });
  
  const activeBtn = document.getElementById(`tab-${regionKey}`);
  if (activeBtn) {
    activeBtn.className = "region-tab px-6 py-2.5 rounded-xl font-semibold text-sm bg-amber-500 text-slate-950 transition-all";
  }

  // Render Content
  const data = regionalData[regionKey];
  const container = document.getElementById('region-content');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-700/60 gap-4">
        <div>
          <h3 class="font-cinzel text-2xl font-bold text-amber-300">${data.title}</h3>
          <p class="text-xs text-slate-400 mt-1">Districts: <span class="text-slate-200">${data.districts}</span></p>
        </div>
        <div class="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shrink-0">
          ${data.seats}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${data.dynamics.map(item => `
          <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <i class="fa-solid fa-crosshairs text-amber-400 mt-1 text-sm shrink-0"></i>
            <span class="text-xs text-slate-300 leading-relaxed">${item}</span>
          </div>
        `).join('')}
      </div>

      <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-lightbulb text-amber-400 text-lg"></i>
          <div>
            <span class="text-xs font-bold text-white uppercase tracking-wider block">Vyuha Strategic Footprint</span>
            <span class="text-xs text-slate-400">${data.vibe}</span>
          </div>
        </div>
        <a href="#contact" class="hidden sm:inline-block px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors">
          Deploy War Room
        </a>
      </div>
    </div>
  `;
}

// Select Election Scope Tier
function selectTier(btn, tierName) {
  currentTier = tierName;
  document.querySelectorAll('.tier-btn').forEach(b => {
    b.className = "tier-btn px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-semibold text-sm text-center hover:border-slate-700";
  });
  btn.className = "tier-btn px-4 py-3 rounded-xl border border-amber-500 bg-amber-500/10 text-amber-300 font-semibold text-sm text-center";
}

// Generate pre-filled WhatsApp message for strategy consultation
function generateWhatsAppStrategy() {
  const constituency = document.getElementById('calc-constituency').value.trim() || "Andhra Pradesh Constituency";
  const name = document.getElementById('calc-name').value.trim() || "Prospective Candidate";
  
  const selectedModules = [];
  document.querySelectorAll('.module-check:checked').forEach(chk => {
    selectedModules.push(chk.value);
  });

  const moduleList = selectedModules.length > 0 ? selectedModules.join(", ") : "Full Strategic Suite";

  const message = `Hello Vyuha Consultancy Team,
I am inquiring about political strategy advisory:
- Representative: ${name}
- Target Scope: ${currentTier}
- Target Constituency: ${constituency}
- Required Modules: ${moduleList}

Please arrange a confidential strategy discussion with Founder Kamineni Vamshika.`;

  const encodedUrl = `https://wa.me/917569178228?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

// Handle Form Submission
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('form-name').value;
  const phone = document.getElementById('form-phone').value;
  const constituency = document.getElementById('form-constituency').value;
  const category = document.getElementById('form-category').value;
  const notes = document.getElementById('form-notes').value;

  console.log("Strategic Inquiry Received:", { name, phone, constituency, category, notes });

  document.getElementById('contact-form').classList.add('hidden');
  document.getElementById('form-success').classList.remove('hidden');
}

// Initialize default region tab on load
document.addEventListener('DOMContentLoaded', () => {
  switchRegion('kosta');
});
