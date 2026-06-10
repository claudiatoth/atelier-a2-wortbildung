// ============================================
// EXERCIȚII - Atelier A2: Wortbildung
// Claudia Toth · 5 exerciții cu rezolvări complete
// -ung / -heit / -keit = die · Nominalisierung (das + infinitiv) = das
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: verb + -ung → die (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', verb: 'einladen', sens: 'a invita', correct: 'die Einladung', accept: ['die Einladung', 'Einladung'] },
    { id: 'b', verb: 'wohnen', sens: 'a locui', correct: 'die Wohnung', accept: ['die Wohnung', 'Wohnung'] },
    { id: 'c', verb: 'üben', sens: 'a exersa', correct: 'die Übung', accept: ['die Übung', 'Übung'] },
    { id: 'd', verb: 'ernähren', sens: 'a hrăni / a alimenta', correct: 'die Ernährung', accept: ['die Ernährung', 'Ernährung'] },
    { id: 'e', verb: 'vorbereiten', sens: 'a pregăti', correct: 'die Vorbereitung', accept: ['die Vorbereitung', 'Vorbereitung'] },
    { id: 'f', verb: 'meinen', sens: 'a crede / a fi de părere', correct: 'die Meinung', accept: ['die Meinung', 'Meinung'] },
    { id: 'g', verb: 'lösen', sens: 'a rezolva', correct: 'die Lösung', accept: ['die Lösung', 'Lösung'] },
    { id: 'h', verb: 'heizen', sens: 'a încălzi', correct: 'die Heizung', accept: ['die Heizung', 'Heizung'] },
    { id: 'i', verb: 'bedeuten', sens: 'a însemna', correct: 'die Bedeutung', accept: ['die Bedeutung', 'Bedeutung'] },
    { id: 'j', verb: 'erziehen', sens: 'a educa / a crește', correct: 'die Erziehung', accept: ['die Erziehung', 'Erziehung'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Formează substantivul în -ung și scrie-l cu articol (toate sunt feminine → die).</strong><br>
        <em>Exemplu:</em> bilden (a forma) → <strong>die Bildung</strong>.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.verb}</strong> → die ____<br><em style="color:#6b7280; font-size:0.9rem;">${it.sens}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="die ...ung">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: adjectiv + -heit / -keit → die (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', adj: 'frei', sens: 'liber', correct: 'die Freiheit', accept: ['die Freiheit', 'Freiheit'] },
    { id: 'b', adj: 'gesund', sens: 'sănătos', correct: 'die Gesundheit', accept: ['die Gesundheit', 'Gesundheit'] },
    { id: 'c', adj: 'möglich', sens: 'posibil', correct: 'die Möglichkeit', accept: ['die Möglichkeit', 'Möglichkeit'] },
    { id: 'd', adj: 'schön', sens: 'frumos', correct: 'die Schönheit', accept: ['die Schönheit', 'Schönheit'] },
    { id: 'e', adj: 'schwierig', sens: 'dificil', correct: 'die Schwierigkeit', accept: ['die Schwierigkeit', 'Schwierigkeit'] },
    { id: 'f', adj: 'sicher', sens: 'sigur', correct: 'die Sicherheit', accept: ['die Sicherheit', 'Sicherheit'] },
    { id: 'g', adj: 'freundlich', sens: 'prietenos / amabil', correct: 'die Freundlichkeit', accept: ['die Freundlichkeit', 'Freundlichkeit'] },
    { id: 'h', adj: 'krank', sens: 'bolnav', correct: 'die Krankheit', accept: ['die Krankheit', 'Krankheit'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧱 Formează substantivul abstract și scrie-l cu articol (toate sunt feminine → die).</strong><br>
        <em>Regula:</em> adjective scurte iau <strong>-heit</strong> (frei → die Freiheit) · adjective în <strong>-lich / -ig / -bar / -sam</strong> iau <strong>-keit</strong> (möglich → die Möglichkeit).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.adj}</strong> → die ____<br><em style="color:#6b7280; font-size:0.9rem;">${it.sens}</em></p>
                <input type="text" id="ex2-${it.id}" placeholder="die ...heit / ...keit">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Nominalisierung — das + Infinitiv → das (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', verb: 'lernen', sens: 'a învăța → învățatul', correct: 'das Lernen', accept: ['das Lernen', 'Lernen'] },
    { id: 'b', verb: 'essen', sens: 'a mânca → mâncatul / mâncarea', correct: 'das Essen', accept: ['das Essen', 'Essen'] },
    { id: 'c', verb: 'rauchen', sens: 'a fuma → fumatul', correct: 'das Rauchen', accept: ['das Rauchen', 'Rauchen'] },
    { id: 'd', verb: 'schwimmen', sens: 'a înota → înotul', correct: 'das Schwimmen', accept: ['das Schwimmen', 'Schwimmen'] },
    { id: 'e', verb: 'leben', sens: 'a trăi → viața', correct: 'das Leben', accept: ['das Leben', 'Leben'] },
    { id: 'f', verb: 'reisen', sens: 'a călători → călătoritul', correct: 'das Reisen', accept: ['das Reisen', 'Reisen'] },
    { id: 'g', verb: 'lesen', sens: 'a citi → cititul', correct: 'das Lesen', accept: ['das Lesen', 'Lesen'] },
    { id: 'h', verb: 'kochen', sens: 'a găti → gătitul', correct: 'das Kochen', accept: ['das Kochen', 'Kochen'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>♻️ Transformă verbul la infinitiv într-un substantiv (Nominalisierung). Toate iau articolul das + literă mare.</strong><br>
        <em>Exemplu:</em> arbeiten → <strong>das Arbeiten</strong> (munca / a munci ca activitate).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.verb}</strong> → das ____<br><em style="color:#6b7280; font-size:0.9rem;">${it.sens}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="das + infinitiv...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Ce articol? die sau das după terminație (8 itemi, radio)
// ============================================
const ex4Data = [
    { id: 'a', word: 'Einladung', a: 'die', b: 'das', correct: 'die', expl: 'Terminația -ung → întotdeauna die.' },
    { id: 'b', word: 'Lernen', a: 'die', b: 'das', correct: 'das', expl: 'Verb la infinitiv folosit ca substantiv (Nominalisierung) → das.' },
    { id: 'c', word: 'Freiheit', a: 'die', b: 'das', correct: 'die', expl: 'Terminația -heit → întotdeauna die.' },
    { id: 'd', word: 'Möglichkeit', a: 'die', b: 'das', correct: 'die', expl: 'Terminația -keit → întotdeauna die.' },
    { id: 'e', word: 'Essen', a: 'die', b: 'das', correct: 'das', expl: 'Infinitiv nominalizat → das.' },
    { id: 'f', word: 'Wohnung', a: 'die', b: 'das', correct: 'die', expl: 'Terminația -ung → die.' },
    { id: 'g', word: 'Gesundheit', a: 'die', b: 'das', correct: 'die', expl: 'Terminația -heit → die.' },
    { id: 'h', word: 'Schwimmen', a: 'die', b: 'das', correct: 'das', expl: 'Infinitiv nominalizat → das.' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎯 Alege articolul corect doar după terminație.</strong><br>
        <em>Scurtătura:</em> -ung / -heit / -keit → <strong>die</strong> · infinitiv nominalizat (das Lernen, das Essen) → <strong>das</strong>.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;">____ <strong>${it.word}</strong></p>
                <label style="margin-right:14px;"><input type="radio" name="ex4-${it.id}" value="${it.a}"> ${it.a}</label>
                <label><input type="radio" name="ex4-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex4-${it.id}"]:checked`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct} ${it.word} — ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} ${it.word} — ${it.expl}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traducere RO → DE cu articolul corect (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'libertatea', correct: 'die Freiheit', accept: ['die Freiheit', 'Freiheit'] },
    { id: 'b', ro: 'invitația', correct: 'die Einladung', accept: ['die Einladung', 'Einladung'] },
    { id: 'c', ro: 'sănătatea', correct: 'die Gesundheit', accept: ['die Gesundheit', 'Gesundheit'] },
    { id: 'd', ro: 'posibilitatea', correct: 'die Möglichkeit', accept: ['die Möglichkeit', 'Möglichkeit'] },
    { id: 'e', ro: 'învățatul (ca activitate)', correct: 'das Lernen', accept: ['das Lernen', 'Lernen'] },
    { id: 'f', ro: 'fumatul', correct: 'das Rauchen', accept: ['das Rauchen', 'Rauchen'] },
    { id: 'g', ro: 'părerea', correct: 'die Meinung', accept: ['die Meinung', 'Meinung'] },
    { id: 'h', ro: 'locuința', correct: 'die Wohnung', accept: ['die Wohnung', 'Wohnung'] },
    { id: 'i', ro: 'soluția', correct: 'die Lösung', accept: ['die Lösung', 'Lösung'] },
    { id: 'j', ro: 'viața', correct: 'das Leben', accept: ['das Leben', 'Leben'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Scrie substantivul în germană cu articolul corect (die sau das).</strong><br>
        <em>Gândește terminația:</em> -ung/-heit/-keit → die · activitate (infinitiv) → das.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="articol + substantiv...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
