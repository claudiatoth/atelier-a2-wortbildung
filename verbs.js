// ============================================
// VERB-KONJUGATION - Atelier A2: Wortbildung
// 6 verbe de bază care formează substantive în -ung: wohnen · üben · einladen · vorbereiten · meinen · lösen
// ============================================

const verbsData = [
    {
        inf: 'wohnen', ro: 'a locui → die Wohnung', typ: 'regulat', aux: 'haben', part: 'gewohnt',
        praes: [
            ['ich','wohne','locuiesc'],['du','wohnst','locuiești'],['er/sie/es','wohnt','locuiește'],
            ['wir','wohnen','locuim'],['ihr','wohnt','locuiți'],['sie/Sie','wohnen','locuiesc / locuiți']
        ],
        praet: [
            ['ich','wohnte','locuiam'],['du','wohntest','locuiai'],['er/sie/es','wohnte','locuia'],
            ['wir','wohnten','locuiam'],['ihr','wohntet','locuiați'],['sie/Sie','wohnten','locuiau']
        ],
        perf: [
            ['ich','habe gewohnt','am locuit'],['du','hast gewohnt','ai locuit'],['er/sie/es','hat gewohnt','a locuit'],
            ['wir','haben gewohnt','am locuit'],['ihr','habt gewohnt','ați locuit'],['sie/Sie','haben gewohnt','au locuit']
        ],
        note: '🔤 wohnen + -ung → <strong>die Wohnung</strong> (locuința). Verb regulat: radical wohn- + terminație. Toate substantivele în -ung sunt feminine (die).'
    },
    {
        inf: 'üben', ro: 'a exersa → die Übung', typ: 'regulat', aux: 'haben', part: 'geübt',
        praes: [
            ['ich','übe','exersez'],['du','übst','exersezi'],['er/sie/es','übt','exersează'],
            ['wir','üben','exersăm'],['ihr','übt','exersați'],['sie/Sie','üben','exersează / exersați']
        ],
        praet: [
            ['ich','übte','exersam'],['du','übtest','exersai'],['er/sie/es','übte','exersa'],
            ['wir','übten','exersam'],['ihr','übtet','exersați'],['sie/Sie','übten','exersau']
        ],
        perf: [
            ['ich','habe geübt','am exersat'],['du','hast geübt','ai exersat'],['er/sie/es','hat geübt','a exersat'],
            ['wir','haben geübt','am exersat'],['ihr','habt geübt','ați exersat'],['sie/Sie','haben geübt','au exersat']
        ],
        note: '🔤 üben + -ung → <strong>die Übung</strong> (exercițiul). De aici și numele exercițiilor din lecții: Übung 1, Übung 2...'
    },
    {
        inf: 'einladen', ro: 'a invita → die Einladung', typ: 'tare / TRENNBAR', aux: 'haben', part: 'eingeladen',
        praes: [
            ['ich','lade ein','invit'],['du','lädst ein','inviți'],['er/sie/es','lädt ein','invită'],
            ['wir','laden ein','invităm'],['ihr','ladet ein','invitați'],['sie/Sie','laden ein','invită / invitați']
        ],
        praet: [
            ['ich','lud ein','invitam'],['du','ludst ein','invitai'],['er/sie/es','lud ein','invita'],
            ['wir','luden ein','invitam'],['ihr','ludet ein','invitați'],['sie/Sie','luden ein','invitau']
        ],
        perf: [
            ['ich','habe eingeladen','am invitat'],['du','hast eingeladen','ai invitat'],['er/sie/es','hat eingeladen','a invitat'],
            ['wir','haben eingeladen','am invitat'],['ihr','habt eingeladen','ați invitat'],['sie/Sie','haben eingeladen','au invitat']
        ],
        note: '🚨 TRENNBAR + TARE: particula ein- se separă (ich lade dich EIN), a→ä la du/er (lädst, lädt), Präteritum lud. Substantivul rămâne regulat: <strong>die Einladung</strong> (invitația).'
    },
    {
        inf: 'vorbereiten', ro: 'a pregăti → die Vorbereitung', typ: 'regulat / TRENNBAR', aux: 'haben', part: 'vorbereitet',
        praes: [
            ['ich','bereite vor','pregătesc'],['du','bereitest vor','pregătești'],['er/sie/es','bereitet vor','pregătește'],
            ['wir','bereiten vor','pregătim'],['ihr','bereitet vor','pregătiți'],['sie/Sie','bereiten vor','pregătesc / pregătiți']
        ],
        praet: [
            ['ich','bereitete vor','pregăteam'],['du','bereitetest vor','pregăteai'],['er/sie/es','bereitete vor','pregătea'],
            ['wir','bereiteten vor','pregăteam'],['ihr','bereitetet vor','pregăteați'],['sie/Sie','bereiteten vor','pregăteau']
        ],
        perf: [
            ['ich','habe vorbereitet','am pregătit'],['du','hast vorbereitet','ai pregătit'],['er/sie/es','hat vorbereitet','a pregătit'],
            ['wir','haben vorbereitet','am pregătit'],['ihr','habt vorbereitet','ați pregătit'],['sie/Sie','haben vorbereitet','au pregătit']
        ],
        note: '🚨 TRENNBAR: particula vor- se separă (ich bereite mich vor). Radicalul se termină în -t → primește -e- (bereit-e-te). Substantiv: <strong>die Vorbereitung</strong> (pregătirea).'
    },
    {
        inf: 'meinen', ro: 'a fi de părere → die Meinung', typ: 'regulat', aux: 'haben', part: 'gemeint',
        praes: [
            ['ich','meine','cred / sunt de părere'],['du','meinst','crezi'],['er/sie/es','meint','crede'],
            ['wir','meinen','credem'],['ihr','meint','credeți'],['sie/Sie','meinen','cred / credeți']
        ],
        praet: [
            ['ich','meinte','credeam'],['du','meintest','credeai'],['er/sie/es','meinte','credea'],
            ['wir','meinten','credeam'],['ihr','meintet','credeați'],['sie/Sie','meinten','credeau']
        ],
        perf: [
            ['ich','habe gemeint','am crezut'],['du','hast gemeint','ai crezut'],['er/sie/es','hat gemeint','a crezut'],
            ['wir','haben gemeint','am crezut'],['ihr','habt gemeint','ați crezut'],['sie/Sie','haben gemeint','au crezut']
        ],
        note: '🔤 meinen + -ung → <strong>die Meinung</strong> (părerea). Întrebare foarte utilă: Was meinst du? (Ce părere ai? / Ce crezi?). Meiner Meinung nach... = După părerea mea...'
    },
    {
        inf: 'lösen', ro: 'a rezolva → die Lösung', typ: 'regulat', aux: 'haben', part: 'gelöst',
        praes: [
            ['ich','löse','rezolv'],['du','löst','rezolvi'],['er/sie/es','löst','rezolvă'],
            ['wir','lösen','rezolvăm'],['ihr','löst','rezolvați'],['sie/Sie','lösen','rezolvă / rezolvați']
        ],
        praet: [
            ['ich','löste','rezolvam'],['du','löstest','rezolvai'],['er/sie/es','löste','rezolva'],
            ['wir','lösten','rezolvam'],['ihr','löstet','rezolvați'],['sie/Sie','lösten','rezolvau']
        ],
        perf: [
            ['ich','habe gelöst','am rezolvat'],['du','hast gelöst','ai rezolvat'],['er/sie/es','hat gelöst','a rezolvat'],
            ['wir','haben gelöst','am rezolvat'],['ihr','habt gelöst','ați rezolvat'],['sie/Sie','haben gelöst','au rezolvat']
        ],
        note: '🔤 lösen + -ung → <strong>die Lösung</strong> (soluția). Eine Lösung finden = a găsi o soluție. Das ist eine gute Lösung! = Asta e o soluție bună!'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#6b7280;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe de bază</strong> care formează substantive în -ung — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Observă cum din verb iese substantivul: wohnen → die Wohnung.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Truc de aur: dintr-un verb scoți un substantiv lipind -ung la radical — wohnen → die Wohnung, üben → die Übung. TOATE substantivele în -ung sunt feminine (die). Așa înveți două cuvinte deodată: verbul ȘI substantivul! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă Wortbildung:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
