// Translation Dictionary for English and Hindi
const translations = {
    en: {
        mainMenu: "MAIN MENU",
        dashboard: "▦ Dashboard",
        medicineStock: "✚ Medicine Stock",
        patientFootfall: "♧ Patient Footfall",
        bedsTests: "▣ Beds & Tests",
        doctorAttendance: "♙ Doctor Attendance",
        aiInsights: "✧ AI Insights",
        sideFooter: "Smart healthcare for everyone.<br>District Health Network",
        districtHeader: "DISTRICT HEALTH NETWORK",
        overviewHeading: "Health Overview",
        overviewSub: "Monitor centres. Predict shortages. Improve care.",
        offlineText: "🟢 Online (Synced)",
        voiceBtnText: "Voice Assistant",
        bannerEyebrow: "SMART HEALTH • AI-POWERED",
        bannerTitle: "Better resources. Better healthcare.",
        bannerSub: "One dashboard to monitor health centres across your district.",
        statCentres: "Health Centres",
        statCentresSub: "PHCs & CHCs monitored",
        statPatients: "Patients Today",
        statPatientsSub: "↑ 8% vs previous day",
        statBeds: "Available Beds",
        statBedsSub: "Across all demo centres",
        statAlerts: "Stock Alerts",
        statAlertsSub: "Require attention",
        medMonitorTitle: "Medicine Stock Monitor",
        medMonitorSub: "Illustrative sample inventory",
        liveDemoTag: "LIVE DEMO",
        thMedicine: "Medicine",
        thCentre: "Centre",
        thStock: "Stock",
        thStatus: "Status",
        aiInsightsTitle: "AI Health Insights",
        aiInsightsSub: "Rule-based demo recommendations & auto-transfer actions",
        analyzeBtnText: "Analyze Resources & Suggest Actions",
        centreStatusTitle: "Centre Resource Status",
        centreStatusSub: "Sample district facilities",
        footfallTitle: "Patient Footfall",
        footfallSub: "Sample daily patient count",
        footfallFootnote: "Illustrative weekly trend — not actual hospital data.",
        docTitle: "Doctor Attendance & Test Availability",
        docSub: "Demo status — update these records when actual facility data is available.",
        docRow1: "Doctor attendance records",
        docRow2: "Diagnostic test facilities operational",
        docRow3: "Centres requiring data verification",
        footerText: "HealthSetu AI · Hackathon Prototype · Uses illustrative demo data",
        
        // Dynamic Status translations
        statusLow: "Low Stock",
        statusMonitor: "Monitor",
        statusGood: "In Stock"
    },
    hi: {
        mainMenu: "मुख्य मेनू",
        dashboard: "▦ डैशबोर्ड",
        medicineStock: "✚ दवा स्टॉक",
        patientFootfall: "♧ मरीजों की संख्या",
        bedsTests: "▣ बेड और जांच",
        doctorAttendance: "♙ डॉक्टर उपस्थिति",
        aiInsights: "✧ AI सुझाव",
        sideFooter: "सभी के लिए स्मार्ट स्वास्थ्य सेवा।<br>जिला स्वास्थ्य नेटवर्क",
        districtHeader: "जिला स्वास्थ्य नेटवर्क",
        overviewHeading: "स्वास्थ्य सिंहावलोकन",
        overviewSub: "केंद्रों की निगरानी करें। कमी की भविष्यवाणी करें। देखभाल सुधारें।",
        offlineText: "🟢 ऑनलाइन (सिंc्ड)",
        voiceBtnText: "वॉयस असिस्टेंट",
        bannerEyebrow: "स्मार्ट हेल्थ • AI-संचालित",
        bannerTitle: "बेहतर संसाधन। बेहतर स्वास्थ्य सेवा।",
        bannerSub: "आपके जिले भर के स्वास्थ्य केंद्रों की निगरानी के लिए एक डैशबोर्ड।",
        statCentres: "स्वास्थ्य केंद्र",
        statCentresSub: "निगरानी किए गए PHC और CHC",
        statPatients: "आज के मरीज",
        statPatientsSub: "↑ पिछले दिन से 8%",
        statBeds: "उपलब्ध बेड",
        statBedsSub: "सभी डेमो केंद्रों में",
        statAlerts: "स्टॉक चेतावनी",
        statAlertsSub: "ध्यान देने की आवश्यकता है",
        medMonitorTitle: "दवा स्टॉक मॉनिटर",
        medMonitorSub: "नमूना इन्वेंट्री डेटा",
        liveDemoTag: "लाइव डेमो",
        thMedicine: "दवा",
        thCentre: "श्रेणी / केंद्र",
        thStock: "स्टॉक",
        thStatus: "स्थिति",
        aiInsightsTitle: "AI स्वास्थ्य अंतर्दृष्टि",
        aiInsightsSub: "नियम-आधारित डेमो सिफारिशें और ऑटो-ट्रांसफर कार्रवाई",
        analyzeBtnText: "संसाधनों का विश्लेषण करें और कार्रवाई सुझाएं",
        centreStatusTitle: "केंद्र संसाधन स्थिति",
        centreStatusSub: "नमूना जिला सुविधाएं",
        footfallTitle: "मरीजों की संख्या",
        footfallSub: "दैनिक रोगी गणना",
        footfallFootnote: "सांकेतिक साप्ताहिक रुझान — वास्तविक अस्पताल डेटा नहीं।",
        docTitle: "डॉक्टर उपस्थिति और परीक्षण उपलब्धता",
        docSub: "डेमो स्थिति — वास्तविक डेटा उपलब्ध होने पर अपडेट करें।",
        docRow1: "डॉक्टर उपस्थिति रिकॉर्ड",
        docRow2: "diagnostic परीक्षण सुविधाएं चालू",
        docRow3: "डेटा सत्यापन की आवश्यकता वाले केंद्र",
        footerText: "HealthSetu AI · हैकथॉन प्रोटोटाइप · सांकेतिक डेमो डेटा का उपयोग करता है",
        
        // Dynamic Status translations
        statusLow: "कम स्टॉक",
        statusMonitor: "निगरानी करें",
        statusGood: "स्टॉक में है"
    }
};

let currentLang = 'en';

const medicines = [
  { name: "Paracetamol", category: "Pain Relief", stock: 120, minimum: 50 },
  { name: "Amoxicillin", category: "Antibiotic", stock: 18, minimum: 40 },
  { name: "ORS Packets", category: "Essential Care", stock: 85, minimum: 30 },
  { name: "Vitamin C", category: "Supplement", stock: 12, minimum: 25 },
  { name: "Cetirizine", category: "Allergy Care", stock: 65, minimum: 25 }
];

const centres = [
  { name: "City Health Centre", stock: 85 },
  { name: "Rural Health Centre", stock: 42 },
  { name: "Community Clinic", stock: 68 }
];

function getStatus(medicine) {
  if (medicine.stock < medicine.minimum) return "Low Stock";
  if (medicine.stock < medicine.minimum * 1.5) return "Monitor";
  return "In Stock";
}

function renderMedicines() {
  const table = document.querySelector("#medicineTable");
  if (!table) return;

  table.innerHTML = medicines.map(medicine => {
    const status = getStatus(medicine);
    const statusClass =
      status === "Low Stock" ? "stock-low" :
      status === "Monitor" ? "stock-medium" : "stock-good";

    // Translate status text for current language
    let displayStatus = status;
    if (currentLang === 'hi') {
      if (status === "Low Stock") displayStatus = translations.hi.statusLow;
      else if (status === "Monitor") displayStatus = translations.hi.statusMonitor;
      else displayStatus = translations.hi.statusGood;
    }

    return `
      <tr>
        <td>${medicine.name}</td>
        <td>${medicine.category}</td>
        <td>${medicine.stock}</td>
        <td><span class="stock-status ${statusClass}">
          ${displayStatus}
        </span></td>
      </tr>
    `;
  }).join("");
}

function renderInsights() {
  const container = document.querySelector("#aiInsights");
  if (!container) return;

  const lowStock = medicines.filter(
    medicine => medicine.stock < medicine.minimum
  );

  if (lowStock.length === 0) {
    container.innerHTML = `
      <div class="insight-item">
        <div class="insight-dot">✓</div>
        <div>
          <h4>${currentLang === 'hi' ? "स्टॉक बिल्कुल स्वस्थ है" : "Stock looks healthy"}</h4>
          <p>${currentLang === 'hi' ? "फिलहाल कोई भी दवा अपने न्यूनतम स्तर से नीचे नहीं है।" : "No medicines are currently below their minimum stock level."}</p>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = lowStock.map(medicine => `
    <div class="insight-item">
      <div class="insight-dot">!</div>
      <div>
        <h4>${medicine.name}: ${currentLang === 'hi' ? "पुनः स्टॉक (Restock) आवश्यक है" : "Restock needed"}</h4>
        <p>
          ${currentLang === 'hi' ? "उपलब्ध" : "Available"}: ${medicine.stock} ${currentLang === 'hi' ? "यूनिट" : "units"}. 
          ${currentLang === 'hi' ? "न्यूनतम लक्ष्य" : "Minimum target"}: ${medicine.minimum} ${currentLang === 'hi' ? "यूनिट" : "units"}. 
          ${currentLang === 'hi' ? "निकटतम केंद्र से स्टॉक ट्रांसफर का अनुरोध करें।" : "Consider reviewing the next supply order or request stock transfer."}
        </p>
      </div>
    </div>
  `).join("");
}

function renderCentres() {
  const container = document.querySelector("#centreList");
  if (!container) return;

  container.innerHTML = centres.map(centre => `
    <div class="centre-item">
      <div class="centre-top">
        <span>${centre.name}</span>
        <strong>${centre.stock}%</strong>
      </div>
      <div class="progress-track">
        <div class="progress-fill"
             style="width: ${centre.stock}%"></div>
      </div>
    </div>
  `).join("");
}

function updateDashboard() {
  renderMedicines();
  renderInsights();
  renderCentres();
}

// Function to switch language dynamically
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';

  // Update all elements having data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // Re-render components with translated dynamic text
  updateDashboard();
}

document.addEventListener("DOMContentLoaded", () => {
  updateDashboard();

  const languageBtn = document.querySelector("#languageBtn");
  if (languageBtn) {
    languageBtn.addEventListener("click", () => {
      toggleLanguage();
    });
  }

  const analyzeBtn = document.querySelector("#analyzeBtn");
  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      updateDashboard();
      alert(currentLang === 'hi' ? "संसाधनों का विश्लेषण सफल रहा! AI सिफारिशें अपडेट कर दी गई हैं।" : "Resource analysis completed successfully! AI recommendations updated.");
    

      
    });

  }

  const voiceBtn = document.querySelector("#voiceBtn");
  if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
      // Check if browser supports Speech Recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        alert(currentLang === 'hi' ? "आपका ब्राउज़र वॉयस रिकग्निशन का समर्थन नहीं करता है।" : "Your browser does not support voice recognition. Please use Google Chrome.");
        return;
      }

      const recognition = new SpeechRecognition();
      // Set language according to current dashboard language
      recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
      
      alert(currentLang === 'hi' ? "🎙️ सुन रहा हूँ... कृपया बोलिए (जैसे: 'पैरासिटामोल स्टॉक')" : "🎙️ Listening... Please speak now (e.g., 'Paracetamol stock')");

      recognition.onstart = () => {
        console.log("Voice recognition started...");
      };

      recognition.result=(event)=>{}, // placeholder syntax guard
      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        console.log("User said: ", spokenText);

        // Smart Voice Command Processing
        if (spokenText.toLowerCase().includes("paracetamol") || spokenText.includes("पैरासिटामोल")) {
          alert(currentLang === 'hi' ? `पहचाना गया: "${spokenText}". पैरासिटामोल स्टॉक: 120 यूनिट (पर्याप्त)` : `Recognized: "${spokenText}". Paracetamol stock is 120 units (In Stock).`);
        } else if (spokenText.toLowerCase().includes("bed") || spokenText.includes("बेड")) {
          alert(currentLang === 'hi' ? `पहचाना गया: "${spokenText}". कुल उपलब्ध बेड: 86 / 120` : `Recognized: "${spokenText}". Total available beds: 86 / 120.`);
        } else {
          alert(currentLang === 'hi' ? `आपने कहा: "${spokenText}". डेटा सफलतापूर्वक दर्ज किया गया!` : `You said: "${spokenText}". Data logged successfully!`);
        }
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        alert(currentLang === 'hi' ? "आवाज़ पहचानने में त्रुटि हुई। कृपया पुनः प्रयास करें।" : "Error recognizing voice. Please try again.");
      };

      recognition.start();
    });
  }
});
// --- SIMPLE OFFLINE TOGGLE ---
document.addEventListener("DOMContentLoaded", () => {
  const badge = document.querySelector("#offlineStatus");
  if (badge) {
    badge.style.cursor = "pointer";
    badge.title = "Click to toggle offline mode";
    
    let isOffline = false;
    badge.addEventListener("click", () => {
      isOffline = !isOffline;
      if (isOffline) {
        badge.style.background = "#fce4d6";
        badge.style.color = "#c65911";
        badge.innerHTML = currentLang === 'hi' ? "🟠 ऑफ़लाइन (सिंक बाकी)" : "🟠 Offline (Sync Pending)";
      } else {
        badge.style.background = "#e2f0d9";
        badge.style.color = "#385723";
        badge.innerHTML = currentLang === 'hi' ? "🟢 ऑनलाइन (सिंक्ड)" : "🟢 Online (Synced)";
      }
    });
  }
});