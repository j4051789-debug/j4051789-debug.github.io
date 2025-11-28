// popup.js

// Elements
const bubble      = document.getElementById("novaBubble");
const popup       = document.getElementById("novaPopup");
const introText   = document.getElementById("intro-text");

const mainButtons = document.getElementById("main-buttons");
const helpMenu    = document.getElementById("help-menu");
const chatMenu    = document.getElementById("chat-menu");

const chatLog     = document.getElementById("nova-chat-log");
const chatInput   = document.getElementById("nova-input");
const chatSendBtn = document.getElementById("nova-send-btn");


// ---------------------------
// OPEN / CLOSE POPUP
// ---------------------------

if (bubble && popup) {
  bubble.addEventListener("click", () => {
    const isOpen = popup.style.display === "flex";

    if (isOpen) {
      popup.style.animation = "fadeOut 0.3s ease forwards";
      setTimeout(() => {
        popup.style.display = "none";
      }, 300);
    } else {
      popup.style.display = "flex";
      popup.style.animation = "fadeIn 0.3s ease forwards";
      backToMain(); // reset state every time it opens
    }
  });
}


// ---------------------------
// PRODUCT REDIRECT BUTTONS
// ---------------------------

function goToProduct(type) {
  switch (type) {
    case "green":
      window.location.href = "movegreen.html";
      break;
    case "power":
      window.location.href = "movesmarter.html";
      break;
    case "comfort":
      window.location.href = "movesmarter2.html";
      break;
    case "subscription":
      window.location.href = "movesmartest.html";
      break;
    default:
      break;
  }
}


// ---------------------------
// MENU SWITCHING
// ---------------------------

function showHelpMenu() {
  if (!mainButtons || !helpMenu || !chatMenu || !introText) return;

  mainButtons.style.display = "none";
  helpMenu.style.display    = "flex";
  chatMenu.style.display    = "none";
  introText.style.display   = "none";
}

function openFreeChat() {
  if (!mainButtons || !helpMenu || !chatMenu || !introText) return;

  mainButtons.style.display = "none";
  helpMenu.style.display    = "none";
  chatMenu.style.display    = "flex";   // IMPORTANT: flex to match .bubble-chat
  introText.style.display   = "none";

  if (chatLog && chatLog.children.length === 0) {
    appendMessage(
      "Hei! Jeg kan svare på enkle spørsmål om MOVE SMART produktene. Hva lurer du på?",
      "nova"
    );
  }
}

function backToMain() {
  if (!mainButtons || !helpMenu || !chatMenu || !introText) return;

  mainButtons.style.display = "flex";
  helpMenu.style.display    = "none";
  chatMenu.style.display    = "none";
  introText.style.display   = "block";
}


// ---------------------------
// CHAT ENGINE (KEYWORD BOT)
// ---------------------------

function appendMessage(text, sender) {
  if (!chatLog) return;
  const div = document.createElement("div");
  div.classList.add("chat-message", sender);
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getNovaReply(text) {
  const msg = text.toLowerCase();

  // GENERELT / HVA ER MOVE SMART
  if (
    msg.includes("move smart ") ||
    msg.includes("movesmart") ||
    msg.includes("hva er") && msg.includes("move")
  ) {
    return "MOVE SMART er et fremtidsrettet jetpack-konsept. Vi kombinerer bærekraft, teknologi og komfort i produkter som MOVE GREEN, MOVE SMARTER, MOVE SMARTER 2 og abonnementet MOVE SMARTEST.";
  }

  // JETPACK / PRODUKT GENERELT
  if (msg.includes("jetpack") || msg.includes("produkt") || msg.includes("modell")) {
    return "Vi har flere jetpack-modeller: MOVE GREEN (miljøvennlig), MOVE SMARTER (komfort + teknologi), MOVE SMARTER 2 (oppgradert kraft og komfort) og MOVE SMARTEST (abonnement med alltid nyeste modell).";
  }

  // MOVE GREEN / MILJØ
  if (msg.includes("move green") || msg.includes("green") || msg.includes("grønn") || msg.includes("miljø")) {
    return "MOVE GREEN er vårt mest miljøvennlige alternativ. Den er laget av 92% resirkulerte materialer og drives av fornybar energi, med lavt støynivå og lett, komfortabel konstruksjon.";
  }

  // MOVE SMARTER 2
  if (msg.includes("smarter 2") || msg.includes("movesmarter 2")) {
    return "MOVE SMARTER 2 har rundt 20% sterkere motor enn MOVE SMARTER, oppgradert stabilisering, mer komfort og innebygde trådløse hodetelefoner. Den er delvis laget av resirkulerte materialer.";
  }

  // MOVE SMARTER (vanlig)
  if (msg.includes("movesmarter") || (msg.includes("smarter") && !msg.includes("2"))) {
    return "MOVE SMARTER kombinerer kraft, komfort og smart teknologi. Den har avansert stabilisering, kraftig motor, integrert smartdisplay og er laget for både hverdagsbrukere og entusiaster.";
  }

  // MOVE SMARTEST / ABONNEMENT
  if (msg.includes("smartest") || msg.includes("move smartest") || msg.includes("abonnement")) {
    return "MOVE SMARTEST er et abonnement hvor du alltid får den nyeste versjonen av MOVE SMARTER. Du returnerer den gamle modellen, og vi gjenbruker den og selger den videre som MOVE GREENEST.";
  }

  // PRIS / PRICE / KOSTNAD
  if (
    msg.includes("pris") ||
    msg.includes("price") ||
    msg.includes("kostnad") ||
    msg.includes("koster") ||
    msg.includes("$")
  ) {
    return "Prisene er: MOVE GREEN $149, MOVE SMARTER $149, MOVE SMARTER 2 $169. Abonnementet MOVE SMARTEST har egen prisstruktur og avhenger av lengde og innhold i avtalen.";
  }

  // KJØP / BESTILLING
  if (
    msg.includes("kjøpe") ||
    msg.includes("kjop") ||
    msg.includes("bestille") ||
    msg.includes("bestilling") ||
    msg.includes("hvordan får") ||
    msg.includes("hvordan få")
  ) {
    return "For å kjøpe eller forhåndsbestille kan du bruke kontaktskjemaet på nettsiden og velge hvilket produkt du er interessert i, eller sende en e-post til info@movesmart.com.";
  }

  // LEVERING / FRAKT / TID
  if (
    msg.includes("levering") ||
    msg.includes("leveres") ||
    msg.includes("frakt") ||
    msg.includes("når får")
  ) {
    return "Leveringstid vil avhenge av produkt og lagerstatus. I konseptet vårt tenker vi oss standard levering innen noen få dager for eksisterende modeller, og egne vinduer for forhåndsbestillinger.";
  }

  // SIKKERHET
  if (
    msg.includes("sikkerhet") ||
    msg.includes("trygg") ||
    msg.includes("trygt") ||
    msg.includes("ulykke")
  ) {
    return "Alle MOVE SMART-produkter er tenkt med avansert stabiliseringssystem, sikkerhetsprotokoller og opplæring før bruk. Sikkerhet er en kjerneverdi sammen med komfort og bærekraft.";
  }

  // BÆREKRAFT / FABRIKK / FORNYBAR
  if (
    msg.includes("bærekraft") ||
    msg.includes("baerekraft") ||
    msg.includes("fornybar") ||
    msg.includes("fabrikk") ||
    msg.includes("co2") ||
    msg.includes("utslipp")
  ) {
    return "Vi planlegger en lokal fabrikk som produserer fornybar energi til vår egen produksjon. Målet er å dekke opptil 60% av energibehovet internt og redusere CO₂-avtrykket per produkt med rundt 35% sammenlignet med tradisjonell produksjon.";
  }

  // PODCAST
  if (
    msg.includes("podcast") ||
    msg.includes("podkast") ||
    msg.includes("episode")
  ) {
    return "Vi har en podkast-serie med episoder om visjonen bak MOVE SMART, teknologien i MOVE SMARTER og hvordan vi tenker rundt design, merkevare og fremtidens mobilitet.";
  }

  // SUPPORT
  if (
    msg.includes("kontakt") ||
    msg.includes("support") ||
    msg.includes("hjelp") ||
    msg.includes("kundeservice")
  ) {
    return "Du kan kontakte oss via kontaktskjemaet på nettsiden eller sende e-post til info@movesmart.com. Jeg, Nova, er her for enkle spørsmål om produktene.";
  }

    // KOMFORT
  if (
    msg.includes("komfort") ||
    msg.includes("behagelig") ||
    msg.includes("sitte") ||
    msg.includes("pute") ||
    msg.includes("myk")
  ) {
    return "Hvis du prioriterer komfort er MOVE SMARTER og MOVE SMARTER 2 de beste valgene. SMARTER har god ergonomi og stabil flyopplevelse, mens SMARTER 2 har enda bedre polstring, oppgradert stabilisering og en mer behagelig passform.";
  }

    // KONSEPT / IDÉ / VISJON
  if (
    msg.includes("konsept") ||
    msg.includes("ideen") ||
    msg.includes("idéen") ||
    msg.includes("visjon") ||
    msg.includes("hva går det ut på") ||
    msg.includes("hva går dette ut på")
  ) {
    return "MOVE SMART er et framtidskonsept som utforsker hvordan personlig flyging kan se ut i år 2100. Hele ideen går ut på å kombinere bærekraft, teknologi og premium design i jetpacks som MOVE SMARTER-serien. Prosjektet viser hvordan mobilitet kan bli grønnere, tryggere og mer personlig.";
  }

    // OM OSS / SELSKAP
  if (
    msg.includes("om dere") ||
    msg.includes("om oss") ||
    msg.includes("hvem er dere") ||
    msg.includes("selskapet") ||
    msg.includes("firmaet")
  ) {
    return "MOVE SMART er et framtidsrettet konsept-selskap som fokuserer på personlig flyging med jetpacks. Vi kombinerer teknologi, design og bærekraft, med MOVE SMARTER som flaggskip og en plan om lokal fabrikk for fornybar energi. Mer om historien vår finner du på Om oss-siden.";
  }

    // HVEM ER DU / HVA ER NOVA
  if (
    msg.includes("hvem er du") ||
    msg.includes("hvem er nova") ||
    msg.includes("hva er du") ||
    msg.includes("ai") ||
    msg.includes("nova") ||
    msg.includes("bot")
  ) {
    return "Jeg heter Nova. Jeg er en enkel AI-basert produktambassadør laget for MOVE SMART, og jeg svarer på grunnleggende spørsmål om produktene våre, bærekraft, priser og konseptet vårt.";
  }

  // FALLBACK
  return "Jeg svarer på ord som «MOVE GREEN», «SMARTER», «bærekraft», «abonnement» og «pris». Prøv å spørre med de ordene.";
}

// ---------------------------
// SEND MESSAGE
// ---------------------------

function handleSend() {
  if (!chatInput) return;
  const text = chatInput.value.trim();
  if (!text) return;

  appendMessage(text, "user");
  chatInput.value = "";

  const reply = getNovaReply(text);
  appendMessage(reply, "nova");
}

if (chatSendBtn && chatInput) {
  chatSendBtn.addEventListener("click", handleSend);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });
}

// Expose for inline onclick handlers in HTML
window.goToProduct  = goToProduct;
window.showHelpMenu = showHelpMenu;
window.openFreeChat = openFreeChat;
window.backToMain   = backToMain;
