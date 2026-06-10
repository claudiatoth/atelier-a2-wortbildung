// ============================================
// FLASHCARDS - Atelier A2: Wortbildung
// Claudia Toth · 32 carduri: reguli + substantive -ung / -heit / -keit + Nominalisierung + propoziții
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Reguli de aur (3) ===
    { de: "Endung -ung → immer die", ro: "Terminația -ung → întotdeauna feminin (die)", audio: "audio/letters/regel-ung.wav" },
    { de: "Endung -heit / -keit → immer die", ro: "Terminațiile -heit și -keit → întotdeauna feminin (die)", audio: "audio/letters/regel-heitkeit.wav" },
    { de: "Infinitiv als Nomen → das", ro: "Infinitivul folosit ca substantiv → neutru (das), scris cu literă mare", audio: "audio/letters/regel-nominalisierung.wav" },

    // === Substantive în -ung → die (10) ===
    { de: "die Einladung", ro: "invitația (din einladen = a invita)", audio: "audio/letters/einladung.wav" },
    { de: "die Wohnung", ro: "locuința (din wohnen = a locui)", audio: "audio/letters/wohnung.wav" },
    { de: "die Übung", ro: "exercițiul (din üben = a exersa)", audio: "audio/letters/uebung.wav" },
    { de: "die Ernährung", ro: "alimentația (din ernähren = a hrăni)", audio: "audio/letters/ernaehrung.wav" },
    { de: "die Vorbereitung", ro: "pregătirea (din vorbereiten = a pregăti)", audio: "audio/letters/vorbereitung.wav" },
    { de: "die Meinung", ro: "părerea (din meinen = a fi de părere)", audio: "audio/letters/meinung.wav" },
    { de: "die Lösung", ro: "soluția (din lösen = a rezolva)", audio: "audio/letters/loesung.wav" },
    { de: "die Heizung", ro: "încălzirea / caloriferul (din heizen = a încălzi)", audio: "audio/letters/heizung.wav" },
    { de: "die Bedeutung", ro: "semnificația (din bedeuten = a însemna)", audio: "audio/letters/bedeutung.wav" },
    { de: "die Erziehung", ro: "educația / creșterea (din erziehen = a educa)", audio: "audio/letters/erziehung.wav" },

    // === Substantive în -heit / -keit → die (8) ===
    { de: "die Freiheit", ro: "libertatea (din frei = liber)", audio: "audio/letters/freiheit.wav" },
    { de: "die Gesundheit", ro: "sănătatea (din gesund = sănătos)", audio: "audio/letters/gesundheit.wav" },
    { de: "die Schönheit", ro: "frumusețea (din schön = frumos)", audio: "audio/letters/schoenheit.wav" },
    { de: "die Krankheit", ro: "boala (din krank = bolnav)", audio: "audio/letters/krankheit.wav" },
    { de: "die Sicherheit", ro: "siguranța (din sicher = sigur)", audio: "audio/letters/sicherheit.wav" },
    { de: "die Möglichkeit", ro: "posibilitatea (din möglich = posibil)", audio: "audio/letters/moeglichkeit.wav" },
    { de: "die Schwierigkeit", ro: "dificultatea (din schwierig = dificil)", audio: "audio/letters/schwierigkeit.wav" },
    { de: "die Freundlichkeit", ro: "amabilitatea (din freundlich = prietenos)", audio: "audio/letters/freundlichkeit.wav" },

    // === Nominalisierung: das + Infinitiv → das (6) ===
    { de: "das Lernen", ro: "învățatul (din lernen = a învăța)", audio: "audio/letters/lernen.wav" },
    { de: "das Essen", ro: "mâncatul / mâncarea (din essen = a mânca)", audio: "audio/letters/essen.wav" },
    { de: "das Rauchen", ro: "fumatul (din rauchen = a fuma)", audio: "audio/letters/rauchen.wav" },
    { de: "das Schwimmen", ro: "înotul (din schwimmen = a înota)", audio: "audio/letters/schwimmen.wav" },
    { de: "das Leben", ro: "viața (din leben = a trăi)", audio: "audio/letters/leben.wav" },
    { de: "das Reisen", ro: "călătoritul (din reisen = a călători)", audio: "audio/letters/reisen.wav" },

    // === Propoziții utile (5) ===
    { de: "Rauchen ist ungesund.", ro: "Fumatul este nesănătos.", audio: "audio/letters/rauchen-ungesund.wav" },
    { de: "Die Übung ist wichtig.", ro: "Exercițiul este important.", audio: "audio/letters/uebung-wichtig.wav" },
    { de: "Ich habe eine Frage zur Wohnung.", ro: "Am o întrebare despre locuință.", audio: "audio/letters/frage-wohnung.wav" },
    { de: "Gesundheit ist das Wichtigste.", ro: "Sănătatea e cel mai important lucru.", audio: "audio/letters/gesundheit-wichtigste.wav" },
    { de: "Das ist eine gute Lösung.", ro: "Asta e o soluție bună.", audio: "audio/letters/gute-loesung.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
