// ============================================
// TEORIE - Atelier A2: Wortbildung (-ung / -heit / -keit + Nominalisierung)
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare
// Consolidat din A2 (Nominalisierung din L3 + sufixele -heit/-keit/-ung din L4)
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🏗️ 1. Wortbildung — cum se nasc substantivele</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-wortbildung-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele Atelierului</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Ghidul tău · Potsdam</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Un singur cuvânt → multe cuvinte noi</h4>
                <p>În germană poți „fabrica" substantive din verbe și adjective, lipind o terminație. Aceasta e <strong>Wortbildung</strong> (formarea cuvintelor). Marele avantaj: dacă știi terminația, <strong>ghicești și articolul</strong>! În acest atelier învățăm 3 rețete:</p>
                <ul>
                    <li><strong>verb + -ung</strong> → <strong style="color:#dc2626;">die</strong> (ernähren → die Ernährung)</li>
                    <li><strong>adjectiv + -heit / -keit</strong> → <strong style="color:#dc2626;">die</strong> (frei → die Freiheit)</li>
                    <li><strong>das + verb la infinitiv</strong> (Nominalisierung) → <strong style="color:#047857;">das</strong> (lernen → das Lernen)</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vestea mare: terminația îți spune ARTICOLUL! <strong>-ung, -heit, -keit = MEREU die</strong> (feminin). <strong>Infinitivul ca substantiv = MEREU das</strong> (neutru). Deci nu mai ghicești articolul la întâmplare — îl deduci din terminație! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT (form de adăugat de Claudia) ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 14px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie un text scurt (despre sănătate, libertate, viață sau planurile tale) folosind cel puțin <strong>6 substantive în -ung / -heit / -keit</strong> (die Meinung, die Gesundheit, die Möglichkeit, die Freiheit...). <strong>Min. 60 cuvinte.</strong>
                </p>
                <p style="color: #6b7280; font-size: 0.85rem; margin: 0; font-style: italic;">📨 Linkul formularului va fi adăugat în curând de Claudia.</p>
            </div>
        </div>
    </div>

    <!-- 1: -ung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🅰️ 2. verb + -ung → die (acțiune / rezultat)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-ung.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Rețeta: rădăcina verbului + -ung = die ...ung</h4>
                <p>Iei un verb, scoți terminația -en și adaugi <strong>-ung</strong>. Rezultatul e MEREU <strong style="color:#dc2626;">feminin</strong> (die). Sensul: acțiunea sau rezultatul verbului.</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Verb</th><th>Substantiv (die ...ung)</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>ernähren</td><td><strong>die Ernährung</strong></td><td>alimentația / hrănirea</td></tr>
                    <tr><td>einladen</td><td><strong>die Einladung</strong></td><td>invitația</td></tr>
                    <tr><td>wohnen</td><td><strong>die Wohnung</strong></td><td>locuința / apartamentul</td></tr>
                    <tr><td>üben</td><td><strong>die Übung</strong></td><td>exercițiul</td></tr>
                    <tr><td>vorbereiten</td><td><strong>die Vorbereitung</strong></td><td>pregătirea</td></tr>
                    <tr><td>bedeuten</td><td><strong>die Bedeutung</strong></td><td>înțelesul / semnificația</td></tr>
                    <tr><td>lösen</td><td><strong>die Lösung</strong></td><td>soluția</td></tr>
                    <tr><td>meinen</td><td><strong>die Meinung</strong></td><td>părerea</td></tr>
                    <tr><td>heizen</td><td><strong>die Heizung</strong></td><td>încălzirea / caloriferul</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>TOATE substantivele în -ung sunt feminine (die) — fără excepție! La plural primesc -en: die Übung → die Übungen, die Wohnung → die Wohnungen. Foarte multe cuvinte germane se termină în -ung, deci rețeta asta îți deschide sute de cuvinte.</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: -heit / -keit -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🅱️ 3. adjectiv + -heit / -keit → die (calitate / stare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-heit-keit.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Rețeta: adjectiv + -heit sau -keit = die ...heit/-keit</h4>
                <p>Din adjective faci substantive abstracte (o calitate, o stare). Rezultatul e MEREU <strong style="color:#dc2626;">feminin</strong> (die). Când alegi -heit, când -keit?</p>
                <ul>
                    <li><strong>-keit</strong> după adjective terminate în <strong>-ig, -lich, -bar</strong>: möglich → Möglichkeit</li>
                    <li><strong>-heit</strong> la majoritatea celorlalte: frei → Freiheit</li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Cu -heit</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Adjectiv</th><th>Substantiv (die ...heit)</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>frei</td><td><strong>die Freiheit</strong></td><td>libertatea</td></tr>
                    <tr><td>gesund</td><td><strong>die Gesundheit</strong></td><td>sănătatea</td></tr>
                    <tr><td>schön</td><td><strong>die Schönheit</strong></td><td>frumusețea</td></tr>
                    <tr><td>krank</td><td><strong>die Krankheit</strong></td><td>boala</td></tr>
                    <tr><td>sicher</td><td><strong>die Sicherheit</strong></td><td>siguranța</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Cu -keit (după -ig / -lich / -bar)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Adjectiv</th><th>Substantiv (die ...keit)</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>möglich</td><td><strong>die Möglichkeit</strong></td><td>posibilitatea</td></tr>
                    <tr><td>schwierig</td><td><strong>die Schwierigkeit</strong></td><td>dificultatea</td></tr>
                    <tr><td>freundlich</td><td><strong>die Freundlichkeit</strong></td><td>amabilitatea</td></tr>
                    <tr><td>sauber</td><td><strong>die Sauberkeit</strong></td><td>curățenia</td></tr>
                    <tr><td>pünktlich</td><td><strong>die Pünktlichkeit</strong></td><td>punctualitatea</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Și aici: -heit ȘI -keit = MEREU die! Trucul pentru -keit: dacă adjectivul se termină în <strong>-ig, -lich, -bar</strong>, folosești -keit (möglich → Möglichkeit). În rest, -heit. Plural cu -en: die Möglichkeit → die Möglichkeiten.</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Nominalisierung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🆎 4. Nominalisierung: das + verb la infinitiv → das (activitatea)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-nominalisierung.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Rețeta: das + infinitivul verbului (cu majusculă)</h4>
                <p>Poți transforma ORICE verb într-un substantiv: iei <strong>infinitivul întreg</strong>, îl scrii cu <strong>literă mare</strong> și pui articolul <strong style="color:#047857;">das</strong>. Sensul: activitatea în sine. E MEREU neutru (das).</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Verb (infinitiv)</th><th>Substantiv (das ...)</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>lernen</td><td><strong>das Lernen</strong></td><td>învățatul</td></tr>
                    <tr><td>essen</td><td><strong>das Essen</strong></td><td>mâncatul / mâncarea</td></tr>
                    <tr><td>leben</td><td><strong>das Leben</strong></td><td>viața / traiul</td></tr>
                    <tr><td>rauchen</td><td><strong>das Rauchen</strong></td><td>fumatul</td></tr>
                    <tr><td>schwimmen</td><td><strong>das Schwimmen</strong></td><td>înotul</td></tr>
                    <tr><td>reisen</td><td><strong>das Reisen</strong></td><td>călătoritul</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de"><strong>Das Rauchen</strong> ist ungesund.</p>
                <p class="ro">Fumatul e nesănătos.</p>
            </div>
            <div class="example-box">
                <p class="de">Beim <strong>Lernen</strong> höre ich Musik.</p>
                <p class="ro">Când învăț (la învățat) ascult muzică.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Nominalisierung = cel mai ușor truc! Orice infinitiv devine substantiv neutru cu „das" și majusculă: das Lernen, das Essen, das Reisen. În română adesea îl traducem cu „-tul/-tul" (învăța-tul, fuma-tul) sau cu infinitivul lung.</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Overview / gender rule -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📚 5. Recapitulare: terminația îți spune articolul</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recapitulare.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Tabelul de aur al genului după terminație</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Terminație</th><th>Articol</th><th>Din ce se face</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>-ung</strong></td><td><strong style="color:#dc2626;">die</strong></td><td>verb</td><td>einladen → die Einladung</td></tr>
                    <tr><td><strong>-heit</strong></td><td><strong style="color:#dc2626;">die</strong></td><td>adjectiv</td><td>frei → die Freiheit</td></tr>
                    <tr><td><strong>-keit</strong></td><td><strong style="color:#dc2626;">die</strong></td><td>adjectiv (-ig/-lich/-bar)</td><td>möglich → die Möglichkeit</td></tr>
                    <tr><td><strong>das + infinitiv</strong></td><td><strong style="color:#047857;">das</strong></td><td>verb (infinitiv)</td><td>lernen → das Lernen</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Alte terminații utile (bonus)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Terminație</th><th>Articol</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td>-er (persoană/unealtă)</td><td><strong>der</strong></td><td>der Lehrer, der Wecker</td></tr>
                    <tr><td>-in (persoană feminină)</td><td><strong>die</strong></td><td>die Lehrerin</td></tr>
                    <tr><td>-chen / -lein (diminutiv)</td><td><strong>das</strong></td><td>das Mädchen, das Brötchen</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Ține minte regula de aur: <strong>-ung, -heit, -keit, -in, -chen</strong> îți dau articolul din prima! Asta e una dintre cele mai utile scurtături din germană — o folosești toată viața. Acum exersează! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
