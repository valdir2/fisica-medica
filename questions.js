const quizQuestions = {
  "title": "Fisica Medica FINALE 2 - Quiz Completo - Versione Difficile",
  "questions": [
    {
      "question": "Le radiazioni ionizzanti si distinguono da quelle non ionizzanti perché:",
      "options": {
        "A": "Hanno una frequenza più alta",
        "B": "La loro energia quantica è più alta del potenziale di ionizzazione atomico",
        "C": "Viaggiano più velocemente",
        "D": "Hanno una lunghezza d'onda maggiore"
      },
      "id": 1,
      "answer": "B",
      "notes": "Le radiazioni ionizzanti possono ionizzare la materia perché la loro energia quantica è più alta del potenziale di ionizzazione atomico, a differenza delle non ionizzanti come microonde e onde radio."
    },
    {
      "question": "Nelle radiazioni ionizzanti dirette, la deposizione di energia avviene attraverso:",
      "options": {
        "A": "Interazioni coulombiane tra particelle cariche e orbitali atomici",
        "B": "Un processo in due step con particelle neutre attraverso interazioni coulombiane dirette",
        "C": "Emissione di fotoni secondari mediante processi di trasferimento energetico",
        "D": "Collisioni elastiche tramite eccitazione degli stati quantici"
      },
      "id": 2,
      "answer": "A",
      "notes": "Le radiazioni ionizzanti dirette consistono in particelle cariche che depositano energia con interazioni coulombiane tra particelle cariche e orbitali atomici del mezzo assorbente."
    },
    {
      "question": "I raggi X caratteristici sono prodotti quando:",
      "options": {
        "A": "Elettroni sono accelerati in un campo magnetico",
        "B": "Una lacuna in un piccolo shell viene riempita da un elettrone di shell superiore",
        "C": "Particelle cariche sono rallentate",
        "D": "Si verifica un decadimento nucleare"
      },
      "id": 3,
      "answer": "B",
      "notes": "I raggi X caratteristici sono emessi quando un elettrone da uno shell esterno riempie una vacanza in uno shell interno, emettendo energia pari alla differenza delle energie di legame."
    },
    {
      "question": "La radiazione Bremsstrahlung è prodotta quando:",
      "options": {
        "A": "Un elettrone cambia orbita atomica",
        "B": "Particelle cariche sono rallentate o decelerate",
        "C": "Un nucleo decade spontaneamente",
        "D": "Due fotoni si annichilano"
      },
      "id": 4,
      "answer": "B",
      "notes": "Bremsstrahlung significa 'radiazione di freno' e si verifica quando particelle cariche perdono energia cinetica per interazione con altre particelle, convertendo l'energia in radiazione elettromagnetica."
    },
    {
      "question": "L'esposizione X è definita come:",
      "options": {
        "A": "L'energia assorbita per unità di massa di tessuto",
        "B": "La capacità dei fotoni di ionizzare l'aria",
        "C": "L'energia trasferita alle particelle cariche per unità di massa",
        "D": "Il numero di ioni prodotti per unità di volume"
      },
      "id": 5,
      "answer": "B",
      "notes": "L'esposizione X rappresenta la capacità dei fotoni di ionizzare l'aria, misurata in roentgen [R] = 2.58 x 10^-4 C/kg aria."
    },
    {
      "question": "Il KERMA (K) rappresenta:",
      "options": {
        "A": "L'potenza trasferita alle particelle neutre per unità di volume",
        "B": "L'energia trasferita alle particelle cariche per unità di massa",
        "C": "L'forza trasferita alle fotoni per unità di densità",
        "D": "L'momento trasferita alle neutroni per unità di peso"
      },
      "id": 6,
      "answer": "B",
      "notes": "KERMA (Kinetic Energy Released in Matter) è l'energia trasferita alle particelle cariche per unità di massa del mezzo assorbente, misurata in Gray [Gy]."
    },
    {
      "question": "La dose equivalente HT si ottiene moltiplicando:",
      "options": {
        "A": "La dose D per il fattore di peso tissutale wT",
        "B": "La dose D per il fattore di peso di radiazione wR",
        "C": "Il KERMA per la densità",
        "D": "L'attività per la costante di decadimento"
      },
      "id": 7,
      "answer": "B",
      "notes": "La dose equivalente HT = D × wR, dove D è la dose assorbita e wR è il fattore di peso di radiazione, misurata in Sievert [Sv]."
    },
    {
      "question": "L'attività A di una sostanza radioattiva è definita come:",
      "options": {
        "A": "Il numero di decadimenti per unità di frequenza",
        "B": "Il numero di decadimenti per unità di tempo",
        "C": "Il numero di decadimenti per unità di periodo",
        "D": "Il numero di decadimenti per unità di fase"
      },
      "id": 8,
      "answer": "B",
      "notes": "L'attività A = λN è il numero di decadimenti per unità di tempo, misurata in Becquerel [Bq] = un decadimento al secondo."
    },
    {
      "question": "Gli isotopi sono atomi che hanno:",
      "options": {
        "A": "Stesso numero di massa A ma diverso numero atomico Z",
        "B": "Stesso numero atomico Z ma diverso numero di massa A",
        "C": "Stesso numero di neutroni ma diverso numero di protoni",
        "D": "Stessa massa atomica ma diversa energia di legame"
      },
      "id": 9,
      "answer": "B",
      "notes": "Gli isotopi sono atomi con stesso numero atomico Z (stesso elemento) ma diverso numero di massa A, quindi diverso numero di neutroni."
    },
    {
      "question": "La legge del decadimento radioattivo afferma che Np(t) =:",
      "options": {
        "A": "Np(0) × e^(λt)",
        "B": "Np(0) × e^(-2λt)",
        "C": "Np(0) × e^(-λt)",
        "D": "Np(0) × 1 - e^(-λt)"
      },
      "id": 10,
      "answer": "C",
      "notes": "La legge del decadimento radioattivo è Np(t) = Np(0) × e^(-λt), dove λ è la costante di decadimento e t il tempo."
    },
    {
      "question": "Il tempo di emivita T1/2 è correlato alla costante di decadimento λ dalla relazione:",
      "options": {
        "A": "λ = ln(10) / T1/2",
        "B": "λ = ln(2) / T1/2",
        "C": "λ = 2ln(2) / T1/2",
        "D": "λ = ln(2)  ×  T1/2"
      },
      "id": 11,
      "answer": "B",
      "notes": "Il tempo di emivita è correlato alla costante di decadimento dalla relazione λ = ln(2)/T1/2 = 0.693/T1/2."
    },
    {
      "question": "La vita media τp di un radionuclide è:",
      "options": {
        "A": "Il tempo in cui l'attività si dimezza",
        "B": "Il tempo in cui l'attività diventa 1/e del valore iniziale",
        "C": "Il tempo in cui l'attività diventa 1/10 del valore iniziale",
        "D": "Il tempo massimo di decadimento"
      },
      "id": 12,
      "answer": "B",
      "notes": "La vita media τp è il tempo durante il quale l'attività diminuisce a 1/e = 0.368 (36%) del valore iniziale, con τp = 1/λ = 1.44 × T1/2."
    },
    {
      "question": "Nel decadimento α, il numero atomico Z:",
      "options": {
        "A": "Aumenta di 2",
        "B": "Diminuisce di 2",
        "C": "Rimane costante",
        "D": "Diminuisce di 4"
      },
      "id": 13,
      "answer": "B",
      "notes": "Nel decadimento α, viene emessa una particella α (nucleo di He con 2 protoni e 2 neutroni), quindi Z diminuisce di 2 e A diminuisce di 4."
    },
    {
      "question": "Nel decadimento β-, cosa accade al numero atomico Z?",
      "options": {
        "A": "Diminuisce di 1",
        "B": "Aumenta di 1",
        "C": "Rimane costante",
        "D": "Aumenta di 2"
      },
      "id": 14,
      "answer": "B",
      "notes": "Nel decadimento β-, un neutrone si trasforma in protone rilasciando un elettrone e un antineutrino, quindi Z aumenta di 1 mentre A rimane costante."
    },
    {
      "question": "Nella cattura elettronica:",
      "options": {
        "A": "Z aumenta di 1, A rimane costante",
        "B": "Z diminuisce di 1, A rimane costante",
        "C": "Z rimane costante, A diminuisce di 1",
        "D": "Z e A rimangono entrambi costanti"
      },
      "id": 15,
      "answer": "B",
      "notes": "Nella cattura elettronica, un elettrone atomico viene catturato da un protone che si trasforma in neutrone, quindi Z diminuisce di 1 e A rimane costante."
    },
    {
      "question": "L'energia di frenata (stopping power) è divisa in due componenti:",
      "options": {
        "A": "Elastica e inelastica",
        "B": "Diretta e indiretta",
        "C": "Collisionale (scol) e radiativa (srad)",
        "D": "Nucleare e elettronica"
      },
      "id": 16,
      "answer": "C",
      "notes": "L'energia di frenata totale è scol + srad, dove scol regola le interazioni con gli orbitali elettronici e srad le interazioni con i nuclei del mezzo assorbente."
    },
    {
      "question": "Il coefficiente di attenuazione lineare μ è definito come:",
      "options": {
        "A": "La frequenza per unità di area di cammino che un fotone interagisca",
        "B": "La probabilità per unità di lunghezza di cammino che un fotone interagisca",
        "C": "La densità per unità di volume di cammino che un fotone interagisca",
        "D": "La intensità per unità di superficie di cammino che un fotone interagisca"
      },
      "id": 17,
      "answer": "B",
      "notes": "Il coefficiente di attenuazione lineare μ rappresenta la 'probabilità per unità di lunghezza di cammino' che un fotone interagisca con l'assorbitore."
    },
    {
      "question": "La legge di attenuazione dei fotoni è espressa da:",
      "options": {
        "A": "I(x) = I(0) × e^μx",
        "B": "I(x) = I(0) × e^(-μx)",
        "C": "I(x) = I(0) × μx",
        "D": "I(x) = I(0) / μx"
      },
      "id": 18,
      "answer": "B",
      "notes": "La legge di attenuazione esponenziale è I(x) = I(0) × e^(-μx), dove I(x) è l'intensità dopo aver attraversato uno spessore x."
    },
    {
      "question": "Lo strato di valore metà (HVL) è lo spessore che:",
      "options": {
        "A": "Attenua l'intensità del 37.5%",
        "B": "Attenua l'intensità del 50%",
        "C": "Attenua l'intensità del 75%",
        "D": "Attenua l'intensità del 100%"
      },
      "id": 19,
      "answer": "B",
      "notes": "L'HVL (Half Value Layer) è lo spessore che attenua l'intensità del 50%, dato da HVL = ln(2)/μ = 0.693/μ."
    },
    {
      "question": "Nell'effetto fotoelettrico, l'energia cinetica del fotoelettrone è:",
      "options": {
        "A": "Ek = hν + EB",
        "B": "Ek = hν - EB",
        "C": "Ek = EB - hν",
        "D": "Ek = hν × EB"
      },
      "id": 20,
      "answer": "B",
      "notes": "Nell'effetto fotoelettrico, l'energia cinetica del fotoelettrone è Ek = hν - EB, dove hν è l'energia del fotone incidente e EB l'energia di legame."
    },
    {
      "question": "Il coefficiente di attenuazione fotoelettrico varia con l'energia come:",
      "options": {
        "A": "∼ (hν)^3",
        "B": "∼ 1/(hν)^3",
        "C": "∼ (hν)^2",
        "D": "∼ 1/(hν)^2"
      },
      "id": 21,
      "answer": "B",
      "notes": "Il coefficiente di attenuazione fotoelettrico atomico varia come ∼ Z^5/(hν)^3, quindi è inversamente proporzionale al cubo dell'energia."
    },
    {
      "question": "Nell'effetto Compton, il fotone diffuso ha energia:",
      "options": {
        "A": "Sempre uguale al fotone incidente",
        "B": "Sempre minore del fotone incidente",
        "C": "Sempre maggiore del fotone incidente",
        "D": "Che dipende solo dall'angolo"
      },
      "id": 22,
      "answer": "B",
      "notes": "Nell'effetto Compton, il fotone cede parte della sua energia all'elettrone di rinculo, quindi il fotone diffuso ha sempre energia minore di quello incidente."
    },
    {
      "question": "La soglia energetica per la produzione di coppie nucleari è:",
      "options": {
        "A": "0.7665 MeV",
        "B": "1.022 MeV",
        "C": "1.533 MeV",
        "D": "2.044 MeV"
      },
      "id": 23,
      "answer": "B",
      "notes": "La produzione di coppie nucleari richiede energia minima Eγ > 2mec² = 1.022 MeV per creare una coppia elettrone-positrone."
    },
    {
      "question": "Le radiazioni con alto LET (Linear Energy Transfer):",
      "options": {
        "A": "Hanno bassa efficacia biologica",
        "B": "Sono principalmente fotoni gamma",
        "C": "Hanno alta efficacia biologica relativa (RBE)",
        "D": "Penetrano profondamente nei tessuti"
      },
      "id": 24,
      "answer": "C",
      "notes": "Le radiazioni ad alto LET (come particelle α) hanno alta efficacia biologica relativa (RBE) perché concentrano molta energia in brevi distanze."
    },
    {
      "question": "Il danno diretto delle radiazioni consiste in:",
      "options": {
        "A": "Ionizzazione delle molecole d'acqua",
        "B": "Ionizzazione diretta del DNA e altri bersagli biologici",
        "C": "Produzione di radicali liberi",
        "D": "Effetti sulle cellule adiacenti"
      },
      "id": 25,
      "answer": "B",
      "notes": "Il danno diretto avviene quando la radiazione ionizza direttamente gli atomi del bersaglio biologico (principalmente DNA), predominante con radiazioni ad alto LET."
    },
    {
      "question": "Il danno indiretto delle radiazioni è principalmente dovuto a:",
      "options": {
        "A": "Ionizzazione diretta del DNA",
        "B": "Ionizzazione delle molecole d'acqua e produzione di radicali liberi",
        "C": "Interazioni con i nuclei atomici",
        "D": "Effetti sulla membrana cellulare"
      },
      "id": 26,
      "answer": "B",
      "notes": "Il danno indiretto avviene tramite ionizzazione delle molecole d'acqua cellulare, producendo radicali liberi che poi danneggiano il DNA. Rappresenta circa 2/3 del danno da radiazioni a basso LET."
    },
    {
      "question": "Le rotture del doppio filamento del DNA (DSBs) sono importanti perché:",
      "options": {
        "A": "Sono facilmente riparabili",
        "B": "Sono correlate alla morte cellulare e carcinogenesi",
        "C": "Avvengono solo ad alte dosi",
        "D": "Non influenzano la sopravvivenza cellulare"
      },
      "id": 27,
      "answer": "B",
      "notes": "Le DSBs svolgono un ruolo critico nella morte cellulare, carcinogenesi ed effetti ereditari. Quelle non riparate o riparate erroneamente correlano con la sopravvivenza cellulare."
    },
    {
      "question": "Nel modello lineare-quadratico, la sopravvivenza cellulare è descritta da:",
      "options": {
        "A": "S = e^(-αd)",
        "B": "S = e^(-αd - βd²)",
        "C": "S = e^(-βd²)",
        "D": "S = αd + βd²"
      },
      "id": 28,
      "answer": "B",
      "notes": "Nel modello LQ, la sopravvivenza cellulare è S = e^(-αd - βd²), dove α rappresenta il danno letale diretto e β il danno subletale che diventa letale."
    },
    {
      "question": "Il rapporto α/β rappresenta:",
      "options": {
        "A": "L'energia di attivazione del danno cellulare",
        "B": "La dose alla quale i contributi lineari e quadratici sono uguali",
        "C": "La costante di riparazione del DNA",
        "D": "La frazione di sopravvivenza cellulare"
      },
      "id": 29,
      "answer": "B",
      "notes": "Il rapporto α/β è la dose alla quale il danno lineare (αd) eguaglia quello quadratico (βd²), parametro tissue-specifico importante per il frazionamento."
    },
    {
      "question": "I tessuti con basso rapporto α/β (2-5 Gy) sono caratterizzati da:",
      "options": {
        "A": "Risposta precoce alle radiazioni",
        "B": "Risposta tardiva alle radiazioni",
        "C": "Alta radiosensibilità",
        "D": "Rapida proliferazione"
      },
      "id": 30,
      "answer": "B",
      "notes": "I tessuti con basso α/β sono caratterizzati da risposta tardiva (mesi/anni) e sono generalmente tessuti normali critici che limitano la dose in radioterapia."
    },
    {
      "question": "Quale tessuto critico mostra danni sotto forma di polmonite acuta seguita da fibrosi?",
      "options": {
        "A": "Midollo osseo",
        "B": "Reni",
        "C": "Polmoni",
        "D": "Fegato"
      },
      "id": 31,
      "answer": "C",
      "notes": "I polmoni manifestano danno da radiazione dopo diversi mesi dall'esposizione sotto forma di polmonite acuta seguita da fibrosi."
    },
    {
      "question": "Il tracciante PET fluorotimidina (FLT) è utilizzato per valutare:",
      "options": {
        "A": "La morte cellulare programmata",
        "B": "Le cellule in replicazione nella fase S del ciclo cellulare",
        "C": "L'ipossia tumorale",
        "D": "La perfusione sanguigna"
      },
      "id": 32,
      "answer": "B",
      "notes": "La FLT viene selettivamente intrappolata nelle cellule che attraversano la fase S del ciclo cellulare (replicazione del DNA), permettendo di identificare solo le cellule in replicazione."
    },
    {
      "question": "Per il trattamento di leucemie o depositi micrometastatici è vantaggioso utilizzare:",
      "options": {
        "A": "Radionuclidi con particelle a lungo raggio",
        "B": "Radionuclidi che emettono particelle a corto raggio",
        "C": "Solo raggi gamma",
        "D": "Neutroni termici"
      },
      "id": 33,
      "answer": "B",
      "notes": "Per leucemie o depositi micrometastatici (cellule singole o piccoli gruppi) sono vantaggiosi radionuclidi a corto raggio. Le particelle α hanno raggio < 100 μm nei tessuti."
    },
    {
      "question": "L'effetto 'cross-fire' delle emissioni β può raggiungere:",
      "options": {
        "A": "Fino a 0.75 cm nei tessuti",
        "B": "Fino a 1.5 cm nei tessuti",
        "C": "Fino a 1 cm nei tessuti",
        "D": "Fino a 2 cm nei tessuti"
      },
      "id": 34,
      "answer": "C",
      "notes": "Gli emettitori β a medio/lungo raggio (¹³¹I, ⁹⁰Y, ¹⁸⁶Re) sono adatti per tumori solidi grazie al maggiore effetto cross-fire delle emissioni β (fino a 1 cm nei tessuti)."
    },
    {
      "question": "Quale percentuale dell'esposizione totale alle radiazioni di origine antropica rappresenta l'esposizione medica?",
      "options": {
        "A": "71.25%",
        "B": "142.5%",
        "C": "190%",
        "D": "95%"
      },
      "id": 35,
      "answer": "D",
      "notes": "L'esposizione medica alle radiazioni rappresenta il 95% dell'esposizione totale alle radiazioni di origine antropica."
    },
    {
      "question": "Il sistema ICRP di protezione radiologica si basa su tre principi fondamentali. Quale NON è tra questi?",
      "options": {
        "A": "Giustificazione",
        "B": "Ottimizzazione (ALARA)",
        "C": "Limitazione della dose",
        "D": "Minimizzazione del costo"
      },
      "id": 36,
      "answer": "D",
      "notes": "I tre principi ICRP sono: Giustificazione (più benefici che danni), Ottimizzazione (ALARA), e Limitazione della dose. Il costo è considerato solo nel principio ALARA."
    },
    {
      "question": "Nel sistema di protezione ICRP, la dose equivalente HT è calcolata come:",
      "options": {
        "A": "HT = DT × wT",
        "B": "HT = ∑wR × DTR",
        "C": "HT = DT / wR",
        "D": "HT = ∑wT × DT"
      },
      "id": 37,
      "answer": "B",
      "notes": "La dose equivalente HT = ∑wR × DTR, dove wR è il fattore di peso della radiazione e DTR la dose media per il tipo di radiazione R."
    },
    {
      "question": "La dose efficace E tiene conto di:",
      "options": {
        "A": "Solo del tipo di radiazione",
        "B": "Solo del tessuto irradiato",
        "C": "Sia del tipo di radiazione che della sensibilità del tessuto",
        "D": "Solo della dose assorbita"
      },
      "id": 38,
      "answer": "C",
      "notes": "La dose efficace E = ∑wT × HT considera sia il tipo di radiazione (tramite wR in HT) che la sensibilità specifica del tessuto (tramite wT)."
    },
    {
      "question": "La sfera ICRU utilizzata per le quantità operative ha diametro di:",
      "options": {
        "A": "22.5 cm",
        "B": "30 cm",
        "C": "45 cm",
        "D": "60 cm"
      },
      "id": 39,
      "answer": "B",
      "notes": "La sfera ICRU ha diametro di 30 cm ed è realizzata in materiale equivalente al tessuto per approssimare il corpo umano in termini di attenuazione e diffusione."
    },
    {
      "question": "Per il monitoraggio personale delle radiazioni penetranti, la dose equivalente Hp(d) utilizza d =:",
      "options": {
        "A": "7.5 mm",
        "B": "15 mm",
        "C": "10 mm",
        "D": "20 mm"
      },
      "id": 40,
      "answer": "C",
      "notes": "Per radiazioni penetranti (fotoni > 15 keV) si usa Hp(10 mm). Per la lente dell'occhio Hp(3 mm) e per la pelle Hp(0.07 mm)."
    },
    {
      "question": "In una struttura di medicina nucleare, le aree controllate includono:",
      "options": {
        "A": "Solo le sale di imaging",
        "B": "Stanze per preparazione, stoccaggio, iniezione e sale d'attesa per pazienti iniettati",
        "C": "Solo le aree di stoccaggio dei rifiuti",
        "D": "Tutte le aree dell'ospedale"
      },
      "id": 41,
      "answer": "B",
      "notes": "Le aree controllate includono stanze per preparazione, stoccaggio, iniezione dei radiofarmaci, sale di imaging e sale d'attesa per pazienti già iniettati."
    },
    {
      "question": "Per prevenire la contaminazione, i pavimenti nelle aree ad alto rischio devono avere:",
      "options": {
        "A": "Superficie rugosa per aderenza",
        "B": "Curvatura verso la parete per evitare accumuli negli angoli",
        "C": "Materiali porosi per assorbimento",
        "D": "Giunture aperte per drenaggio"
      },
      "id": 42,
      "answer": "B",
      "notes": "I pavimenti devono essere impermeabili, lavabili, con giunture sigillate e curvatura verso la parete per evitare accumuli di contaminazione negli angoli."
    },
    {
      "question": "I rifiuti radioattivi con emivita lunga vengono generalmente:",
      "options": {
        "A": "Stoccati fino al decadimento completo",
        "B": "Trasferiti a un impianto di smaltimento esterno",
        "C": "Restituiti al fornitore",
        "D": "Inceneriti immediatamente"
      },
      "id": 43,
      "answer": "B",
      "notes": "I radionuclidi con emivita lunga vengono trasferiti a impianti di smaltimento esterni, mentre quelli a emivita breve possono essere stoccati fino al decadimento."
    },
    {
      "question": "Con una protezione ottimizzata, la dose efficace annuale per il personale a tempo pieno dovrebbe essere:",
      "options": {
        "A": "Inferiore a 1 mSv",
        "B": "Ben al di sotto dei 5 mSv",
        "C": "Tra 10-15 mSv",
        "D": "Fino a 20 mSv"
      },
      "id": 44,
      "answer": "B",
      "notes": "Con una protezione ottimizzata, la dose efficace annuale per il personale a tempo pieno dovrebbe essere ben al di sotto dei 5 mSv."
    },
    {
      "question": "Per le lavoratrici in gravidanza, una volta dichiarata la gravidanza, si applica il limite di dose di:",
      "options": {
        "A": "0.5 mSv",
        "B": "1 mSv",
        "C": "2 mSv",
        "D": "5 mSv"
      },
      "id": 45,
      "answer": "B",
      "notes": "Il bambino non nato è considerato membro del pubblico, quindi si applica il limite di dose di 1 mSv una volta dichiarata la gravidanza."
    },
    {
      "question": "Le tre regole per minimizzare l'esposizione esterna sono:",
      "options": {
        "A": "Velocità, precisione, controllo",
        "B": "Tempo, schermatura, distanza",
        "C": "Protezione, monitoraggio, registrazione",
        "D": "Pianificazione, esecuzione, verifica"
      },
      "id": 46,
      "answer": "B",
      "notes": "Le tre regole fondamentali sono: Tempo (minimo possibile), Schermatura (dispositivi protettivi), Distanza (massima possibile dalla sorgente)."
    },
    {
      "question": "I grembiuli di piombo, se indossati in ogni momento, riducono la dose efficace di un fattore di circa:",
      "options": {
        "A": "1.5",
        "B": "2",
        "C": "3",
        "D": "5"
      },
      "id": 47,
      "answer": "B",
      "notes": "I grembiuli di piombo riducono la dose efficace di un fattore di circa 2, ma il loro uso continuo deve essere valutato in base al rapporto costo-beneficio."
    },
    {
      "question": "Per i pazienti che hanno subito procedure diagnostiche di medicina nucleare:",
      "options": {
        "A": "È sempre necessario fornire consigli di radioprotezione",
        "B": "Non è normalmente necessario fornire consigli speciali",
        "C": "Devono rimanere isolati per 24 ore",
        "D": "Non possono viaggiare per una settimana"
      },
      "id": 48,
      "answer": "B",
      "notes": "Per quasi tutte le procedure diagnostiche, la dose esterna dal paziente è una frazione del limite annuale per il pubblico, quindi non sono necessari consigli speciali."
    },
    {
      "question": "Secondo l'ICRP, la giustificazione dell'esposizione medica ha tre livelli. Il Livello 3 riguarda:",
      "options": {
        "A": "La giustificazione generale della medicina nucleare",
        "B": "La giustificazione di nuove tecnologie",
        "C": "La giustificazione individuale per un determinato paziente",
        "D": "La giustificazione economica"
      },
      "id": 49,
      "answer": "C",
      "notes": "Livello 3: Giustificazione individuale della procedura per un determinato paziente, responsabilità dello specialista in medicina nucleare."
    },
    {
      "question": "I Livelli di Riferimento Diagnostici (DRL) sono:",
      "options": {
        "A": "Limiti di dose per i pazienti",
        "B": "Strumenti per ottimizzare la protezione nell'esposizione medica",
        "C": "Valori massimi assoluti di attività",
        "D": "Soglie per effetti deterministici"
      },
      "id": 50,
      "answer": "B",
      "notes": "I DRL sono strumenti per ottimizzare la protezione, rappresentando l'attività da somministrare a un paziente di dimensioni normali per un determinato esame."
    },
    {
      "question": "Per una donna in gravidanza sottoposta a procedure di medicina nucleare, cosa è consigliato dopo l'esame?",
      "options": {
        "A": "Rimanere a riposo per 24 ore",
        "B": "Incoraggiare la minzione frequente",
        "C": "Evitare l'assunzione di liquidi",
        "D": "Assumere farmaci diuretici"
      },
      "id": 51,
      "answer": "B",
      "notes": "Dopo l'esame si incoraggia la minzione frequente per ridurre l'irradiazione dalla vescica. Si può anche iniettare con vescica parzialmente piena."
    },
    {
      "question": "Le dosi fetali inferiori a quale valore NON giustificano l'interruzione di gravidanza per rischio da radiazioni?",
      "options": {
        "A": "10 mGy",
        "B": "50 mGy",
        "C": "100 mGy",
        "D": "200 mGy"
      },
      "id": 52,
      "answer": "C",
      "notes": "Dosi fetali < 100 mGy non giustificano l'interruzione della gravidanza per rischio da radiazioni. Per dosi superiori si considerano circostanze individuali."
    },
    {
      "question": "Per limitare l'esposizione del bambino da una madre in allattamento, il limite raccomandato è:",
      "options": {
        "A": "< 0.1 mSv per episodio",
        "B": "< 0.3 mSv per episodio",
        "C": "< 1 mSv per episodio",
        "D": "< 5 mSv per episodio"
      },
      "id": 53,
      "answer": "B",
      "notes": "Sono necessarie restrizioni sull'allattamento per minimizzare l'esposizione del bambino a livelli accettabili (< 0.3 mSv per episodio)."
    },
    {
      "question": "Nell'ottimizzazione per bambini, le attività inferiori a quale percentuale dell'attività normale dell'adulto non dovrebbero essere somministrate?",
      "options": {
        "A": "7.5%",
        "B": "10%",
        "C": "15%",
        "D": "20%"
      },
      "id": 54,
      "answer": "B",
      "notes": "Regola generale: Le attività inferiori al 10% dell'attività normale dell'adulto non dovrebbero essere somministrate per garantire qualità diagnostica adeguata."
    },
    {
      "question": "Il calibratore di dose in medicina nucleare serve per:",
      "options": {
        "A": "Misurare la dose ai pazienti",
        "B": "Misurare l'attività in siringhe o flaconi",
        "C": "Calibrare le gamma camere",
        "D": "Misurare la contaminazione ambientale"
      },
      "id": 55,
      "answer": "B",
      "notes": "Il calibratore di dose è disponibile per la misurazione dell'attività in siringhe o flaconi e richiede controllo qualità regolare e calibrazione periodica."
    },
    {
      "question": "Chi è responsabile della dosimetria clinica appropriata secondo le normative?",
      "options": {
        "A": "Il tecnologo di medicina nucleare",
        "B": "Il medico nucleare",
        "C": "Il fisico medico",
        "D": "L'infermiere"
      },
      "id": 56,
      "answer": "C",
      "notes": "È responsabilità del titolare della licenza garantire che venga eseguita una dosimetria clinica appropriata da un Fisico Medico e documentata."
    },
    {
      "question": "Il programma di Assicurazione della Qualità (QA) in medicina nucleare dovrebbe includere:",
      "options": {
        "A": "Solo il controllo delle apparecchiature",
        "B": "Solo la formazione del personale",
        "C": "Audit continui, registri, miglioramento continuo e feedback",
        "D": "Solo la dosimetria clinica"
      },
      "id": 57,
      "answer": "C",
      "notes": "La QA include audit continui (interni ed esterni), mantenimento registri, miglioramento continuo e raccolta feedback da incidenti o quasi incidenti."
    },
    {
      "question": "Chi scoprì per primo la radioattività nel 1896?",
      "options": {
        "A": "Marie Curie",
        "B": "Pierre Curie",
        "C": "Henri Becquerel",
        "D": "Georg Hevesy"
      },
      "id": 58,
      "answer": "C",
      "notes": "Henri Becquerel scoprì la radioattività nel 1896. Condivise il Premio Nobel per la Fisica nel 1903 con Marie e Pierre Curie."
    },
    {
      "question": "Georg Hevesy vinse il Premio Nobel nel 1943 per:",
      "options": {
        "A": "La scoperta della radioattività",
        "B": "Lo sviluppo dei traccianti radioattivi per studiare il metabolismo",
        "C": "L'invenzione del ciclotrone",
        "D": "La scoperta del neutrone"
      },
      "id": 59,
      "answer": "B",
      "notes": "Georg Hevesy vinse il Premio Nobel nel 1943 per il suo ruolo nello sviluppo dei traccianti radioattivi per studiare processi chimici come il metabolismo negli animali."
    },
    {
      "question": "La scoperta della radioattività artificiale nel 1935 fu merito di:",
      "options": {
        "A": "Enrico Fermi",
        "B": "Ernest Lawrence",
        "C": "Irène Joliot-Curie e Frédéric Joliot",
        "D": "James Chadwick"
      },
      "id": 60,
      "answer": "C",
      "notes": "Irène Joliot-Curie e suo marito Frédéric Joliot vinsero il Premio Nobel per la chimica nel 1935 per la scoperta della radioattività artificiale."
    },
    {
      "question": "Nel grafico dei nuclidi, i nuclidi stabili sono rappresentati:",
      "options": {
        "A": "Dai campi bianchi",
        "B": "Dai campi scuriti",
        "C": "Dalle linee continue",
        "D": "Dai punti isolati"
      },
      "id": 61,
      "answer": "B",
      "notes": "I campi scuriti del grafico dei nuclidi rappresentano elementi stabili. I nuclidi a sinistra sono carenti di neutroni, quelli a destra sono ricchi di neutroni."
    },
    {
      "question": "Nel deuterio, la forza nucleare tra protone e neutrone è di circa:",
      "options": {
        "A": "1.6687500000000002 MeV",
        "B": "2.225 MeV",
        "C": "3.3375000000000004 MeV",
        "D": "4.45 MeV"
      },
      "id": 62,
      "answer": "B",
      "notes": "Tra un protone e un neutrone esiste una forza nucleare di circa 2.225 MeV. I nucleoni formano una combinazione stabile chiamata deuterio."
    },
    {
      "question": "Per gli elementi leggeri, la linea di stabilità nel grafico dei nuclidi:",
      "options": {
        "A": "È una curva parabolica",
        "B": "Segue una linea retta",
        "C": "È discontinua",
        "D": "Forma una spirale"
      },
      "id": 63,
      "answer": "B",
      "notes": "Per gli elementi leggeri, la linea di stabilità segue una linea retta (N≈Z). Per elementi più pesanti, è presente un eccesso di neutroni per ridurre la forza di Coulomb."
    },
    {
      "question": "La forza di Coulomb negli elementi pesanti viene ridotta da:",
      "options": {
        "A": "L'aumento del numero di protoni",
        "B": "L'eccesso di neutroni",
        "C": "La diminuzione della massa atomica",
        "D": "L'aumento della densità nucleare"
      },
      "id": 64,
      "answer": "B",
      "notes": "Negli elementi pesanti, l'eccesso di neutroni riduce la forza di Coulomb repulsiva tra i protoni, contribuendo alla stabilità nucleare."
    },
    {
      "question": "Le due principali forze in competizione che determinano la stabilità nucleare sono:",
      "options": {
        "A": "Forza gravitazionale e forza elettromagnetica",
        "B": "Forza nucleare forte e forza di Coulomb",
        "C": "Forza nucleare debole e forza magnetica",
        "D": "Forza centripeta e forza centrifuga"
      },
      "id": 65,
      "answer": "B",
      "notes": "La stabilità nucleare è determinata dalla competizione tra la forza nucleare forte (che tiene uniti i nucleoni) e la forza di Coulomb (che respinge i protoni)."
    },
    {
      "question": "Quando si maneggiano materiali radioattivi, per minimizzare la contaminazione si deve:",
      "options": {
        "A": "Lavorare velocemente senza protezioni",
        "B": "Preparare i radiofarmaci su un vassoio coperto con carta assorbente",
        "C": "Evitare l'uso di guanti",
        "D": "Mangiare durante il lavoro per mantenere l'energia"
      },
      "id": 66,
      "answer": "B",
      "notes": "Si devono preparare i radiofarmaci su un vassoio per le perdite coperto con carta assorbente e coprire immediatamente qualsiasi versamento con materiale assorbente."
    },
    {
      "question": "Il monitoraggio personale delle dita è raccomandato:",
      "options": {
        "A": "Per tutto il personale ospedaliero",
        "B": "Solo per i medici nucleari",
        "C": "Per il personale che prepara e somministra regolarmente radiofarmaci",
        "D": "Solo durante le emergenze"
      },
      "id": 67,
      "answer": "C",
      "notes": "Il monitoraggio delle dita è raccomandato occasionalmente per il personale che prepara e somministra regolarmente radiofarmaci o maneggia grandi quantità di radionuclidi."
    },
    {
      "question": "Per il trasporto di materiali radioattivi fuori dalla struttura si devono seguire:",
      "options": {
        "A": "Le regole locali dell'ospedale",
        "B": "Le normative IAEA per il trasporto sicuro",
        "C": "Le raccomandazioni del produttore",
        "D": "Le disposizioni regionali"
      },
      "id": 68,
      "answer": "B",
      "notes": "Per il trasporto fuori dalla struttura si devono seguire le Normative IAEA per il Trasporto Sicuro dei Materiali Radioattivi, incluso imballaggio sicuro ed etichettatura."
    },
    {
      "question": "L'indice di trasporto per i pacchi radioattivi è definito come:",
      "options": {
        "A": "L'attività totale del pacco",
        "B": "100 × dose massima a 1 m dalla superficie del pacco",
        "C": "Il peso del materiale radioattivo",
        "D": "La dose alla superficie del pacco"
      },
      "id": 69,
      "answer": "B",
      "notes": "L'indice di trasporto = 100 × dose massima @ 1 m dalla superficie del pacco. È un parametro importante per la sicurezza nel trasporto."
    },
    {
      "question": "Nessuna persona sotto quale età deve essere sottoposta a esposizione professionale?",
      "options": {
        "A": "12 anni",
        "B": "16 anni",
        "C": "24 anni",
        "D": "32 anni"
      },
      "id": 70,
      "answer": "B",
      "notes": "Nessuna persona sotto i 16 anni deve essere sottoposta a esposizione professionale. Sotto i 18 anni non può lavorare in area controllata salvo per formazione sotto supervisione."
    },
    {
      "question": "Cosa rappresenta il Q-value (valore Q) in una reazione nucleare?",
      "options": {
        "A": "L'potenza guadagnata o persa in una reazione nucleare",
        "B": "L'energia guadagnata o persa in una reazione nucleare",
        "C": "L'forza guadagnata o persa in una reazione nucleare",
        "D": "L'momento guadagnata o persa in una reazione nucleare"
      },
      "id": 71,
      "answer": "B",
      "notes": "Il Q-value rappresenta l'energia guadagnata o persa in una reazione nucleare, calcolata come la differenza tra la massa delle particelle prima e dopo la reazione. È positivo per reazioni esotermiche (spontanee) e negativo per reazioni endotermiche."
    },
    {
      "question": "Qual è la caratteristica principale delle reazioni endotermiche?",
      "options": {
        "A": "Hanno Q-value positivo",
        "B": "Sono sempre spontanee",
        "C": "Hanno Q-value negativo e richiedono energia aggiuntiva",
        "D": "Non coinvolgono particelle cariche"
      },
      "id": 72,
      "answer": "C",
      "notes": "Le reazioni endotermiche hanno valori Q negativi e richiedono energia aggiuntiva per avviare la reazione. Al contrario, i decadimenti radioattivi sono spontanei e hanno sempre valori Q positivi."
    },
    {
      "question": "Perché le reazioni che comportano un cambiamento nel numero di protoni sono preferibili nella produzione di radionuclidi?",
      "options": {
        "A": "Richiedono meno energia",
        "B": "Il prodotto diventa un elemento diverso, facilitando la separazione chimica",
        "C": "Hanno sezioni d'urto maggiori",
        "D": "Sono sempre esotermiche"
      },
      "id": 73,
      "answer": "B",
      "notes": "Le reazioni che cambiano il numero di protoni sono preferibili perché il prodotto diventa un elemento diverso dal bersaglio, facilitando la separazione chimica rispetto a una reazione (n,γ) dove prodotto e bersaglio sono dello stesso elemento."
    },
    {
      "question": "Qual è la principale differenza tra neutroni e particelle cariche nell'interazione con i nuclei?",
      "options": {
        "A": "I neutroni hanno energie maggiori",
        "B": "Le particelle cariche possono penetrare anche a energie termiche",
        "C": "I neutroni possono penetrare anche a energie termiche, le particelle cariche devono superare la barriera di Coulomb",
        "D": "Non c'è differenza significativa"
      },
      "id": 74,
      "answer": "C",
      "notes": "I neutroni non hanno carica elettrica e possono penetrare il bersaglio anche a energie termiche. Le particelle cariche positive devono superare la barriera di Coulomb per penetrare nel nucleo e quindi hanno una soglia energetica."
    },
    {
      "question": "Nell'equazione generale di reazione nucleare a + A → b + B + Q, cosa rappresenta 'a'?",
      "options": {
        "A": "Il nucleo residuo",
        "B": "La particella in arrivo",
        "C": "L'energia della reazione",
        "D": "La particella in uscita"
      },
      "id": 75,
      "answer": "B",
      "notes": "Nell'equazione a + A → b + B + Q: 'a' è la particella in arrivo, 'A' è il nucleo bersaglio, 'b' è la particella in uscita, 'B' è il nucleo residuo e 'Q' è l'energia della reazione."
    },
    {
      "question": "Cosa caratterizza ogni canale di reazione nucleare?",
      "options": {
        "A": "Solo l'energia di soglia",
        "B": "Solo la sezione d'urto",
        "C": "Una soglia di energia e una probabilità (sezione d'urto)",
        "D": "Solo il tipo di particelle coinvolte"
      },
      "id": 76,
      "answer": "C",
      "notes": "Ogni canale di reazione è caratterizzato da una soglia di energia (energia che rende possibile la reazione) e da una probabilità (sezione d'urto) che varia con l'energia della particella in arrivo."
    },
    {
      "question": "In cosa si distingue il meccanismo di formazione del nucleo composto dalle reazioni dirette?",
      "options": {
        "A": "La formazione del nucleo composto avviene ad elevata energia",
        "B": "La formazione del nucleo composto è preferibile a basse energie, le reazioni dirette ad alta energia",
        "C": "Non c'è differenza nei meccanismi",
        "D": "Le reazioni dirette sono più probabili a basse energie"
      },
      "id": 77,
      "answer": "B",
      "notes": "Il nucleo composto ha grande probabilità di formarsi a basse energie, vicino alla soglia di energia del canale. Le reazioni dirette trasferiscono energia direttamente a un nucleone e sono prevalenti ad energie più alte."
    },
    {
      "question": "Quali sono i due modi principali per produrre radionuclidi?",
      "options": {
        "A": "Fissione e fusione nucleare",
        "B": "Reattori nucleari (neutroni) e acceleratori di particelle",
        "C": "Cattura elettronica e decadimento beta",
        "D": "Bombardamento con raggi gamma e particelle alfa"
      },
      "id": 78,
      "answer": "B",
      "notes": "I due modi principali per produrre radionuclidi sono: utilizzando reattori nucleari (neutroni) oppure acceleratori di particelle (protoni, deuteroni, particelle α o ioni pesanti)."
    },
    {
      "question": "Che tipo di radionuclidi si ottengono generalmente da reattori nucleari rispetto agli acceleratori?",
      "options": {
        "A": "Reattori: poveri di neutroni; Acceleratori: ricchi di neutroni",
        "B": "Reattori: ricchi di neutroni; Acceleratori: poveri di neutroni",
        "C": "Non c'è differenza",
        "D": "Dipende solo dal bersaglio utilizzato"
      },
      "id": 79,
      "answer": "B",
      "notes": "Poiché il bersaglio è un nuclide stabile, si ottiene generalmente un radionuclide ricco di neutroni (prodotto da reattore) oppure povero di neutroni (prodotto da acceleratore)."
    },
    {
      "question": "Qual è il flusso neutronico tipico in un reattore nucleare?",
      "options": {
        "A": "10¹⁰ neutroni · cm⁻² · s⁻¹",
        "B": "10¹² neutroni · cm⁻² · s⁻¹",
        "C": "10¹⁴ neutroni · cm⁻² · s⁻¹",
        "D": "10¹⁶ neutroni · cm⁻² · s⁻¹"
      },
      "id": 80,
      "answer": "C",
      "notes": "In un reattore nucleare, regolando la reazione nucleare a catena, si ottiene uno stato stazionario di produzione neutronica con un flusso neutronico tipico dell'ordine di 10¹⁴ neutroni · cm⁻² · s⁻¹."
    },
    {
      "question": "Qual è la reazione neutronica più tipica utilizzata nella produzione di radionuclidi?",
      "options": {
        "A": "(n,p) - cattura protonica",
        "B": "(n,α) - cattura alfa",
        "C": "(n,γ) - cattura di neutroni termici",
        "D": "(n,2n) - emissione di due neutroni"
      },
      "id": 81,
      "answer": "C",
      "notes": "La reazione neutronica più tipica è la reazione (n,γ) in cui un neutrone termico viene catturato dal nucleo bersaglio formando un nucleo composto. L'energia di decadimento viene emessa sotto forma di un raggio γ prompt."
    },
    {
      "question": "Perché la reazione ⁵⁹Co(n,γ)⁶⁰Co ha scarso interesse per la marcatura di radiofarmaci?",
      "options": {
        "A": "Ha una sezione d'urto troppo bassa",
        "B": "Richiede troppa energia",
        "C": "L'attività specifica è bassa perché prodotto e bersaglio sono dello stesso elemento",
        "D": "Il prodotto è instabile"
      },
      "id": 82,
      "answer": "C",
      "notes": "La reazione ⁵⁹Co(n,γ)⁶⁰Co produce un importante radionuclide per terapia esterna, ma poiché il prodotto è dello stesso elemento del bersaglio, l'attività specifica è bassa, rendendola di scarso interesse per la marcatura di radiofarmaci."
    },
    {
      "question": "Qual è la sezione d'urto del ¹⁷⁶Lu che permette una buona produzione di ¹⁷⁷Lu?",
      "options": {
        "A": "1515 barn",
        "B": "3030 barn",
        "C": "2020 barn",
        "D": "4040 barn"
      },
      "id": 83,
      "answer": "C",
      "notes": "Il ¹⁷⁶Lu ha un'alta sezione d'urto di 2020 barn, che porta alla conversione di una grande frazione degli atomi bersaglio in ¹⁷⁷Lu, garantendo un'attività specifica accettabile nonostante l'abbondanza naturale sia solo del 2,59%."
    },
    {
      "question": "Qual è la soglia energetica per la produzione significativa di ³²P?",
      "options": {
        "A": "0,38.25 MeV, produzione significativa sopra 2 MeV",
        "B": "0,51 MeV, produzione significativa sopra 2 MeV",
        "C": "0,76.5 MeV, produzione significativa sopra 2 MeV",
        "D": "0,102 MeV, produzione significativa sopra 2 MeV"
      },
      "id": 84,
      "answer": "B",
      "notes": "Per il ³²P, la soglia della reazione è 0,51 MeV, ma la produzione è significativa solo sopra 2 MeV. La sezione d'urto pratica è circa 60 millibarn."
    },
    {
      "question": "Qual è la sezione d'urto dell'²³⁵U per la fissione con neutroni termici?",
      "options": {
        "A": "439.5 barn",
        "B": "586 barn",
        "C": "879 barn",
        "D": "1172 barn"
      },
      "id": 85,
      "answer": "B",
      "notes": "L'uranio-235 irradiato con neutroni termici subisce fissione con una sezione d'urto di 586 barn. Il processo produce due frammenti del nucleo più un certo numero di neutroni liberi."
    },
    {
      "question": "Quali radionuclidi di importanza medica sono prodotti per fissione tramite sistema generatore?",
      "options": {
        "A": "⁹⁰Sr → ⁹⁰Y e ⁹⁹Mo → ⁹⁹ᵐTc",
        "B": "⁶⁰Co → ⁶⁰Ni e ¹³¹I → ¹³¹Xe",
        "C": "¹⁷⁷Lu → ¹⁷⁷Hf e ¹²³I → ¹²³Te",
        "D": "³²P → ³²S e ⁸⁹Sr → ⁸⁹Y"
      },
      "id": 86,
      "answer": "A",
      "notes": "I radionuclidi medici prodotti per fissione tramite generatori sono: ⁹⁰Sr (28,5 anni) → ⁹⁰Y (2,3 giorni) per terapia e ⁹⁹Mo (2,7 giorni) → ⁹⁹ᵐTc (6 ore) per diagnostica."
    },
    {
      "question": "Qual è il principale vantaggio della produzione tramite acceleratore?",
      "options": {
        "A": "Richiede meno energia",
        "B": "È più economica",
        "C": "Il prodotto è solitamente un elemento diverso dal bersaglio, permettendo alta attività specifica",
        "D": "Ha sezioni d'urto maggiori"
      },
      "id": 87,
      "answer": "C",
      "notes": "Il vantaggio principale della produzione tramite acceleratore è che di solito è facile trovare una reazione in cui il prodotto è un elemento diverso dal bersaglio, permettendo separazione chimica e alta attività specifica."
    },
    {
      "question": "Come si misura la corrente di particelle cariche in un acceleratore?",
      "options": {
        "A": "In volt per secondo",
        "B": "In microampere (1 μA = 6 × 10¹² protoni/s)",
        "C": "In barn per secondo",
        "D": "In MeV per particella"
      },
      "id": 88,
      "answer": "B",
      "notes": "Il numero di particelle cariche viene misurato come corrente elettrica in microampere (1 μA = 6 × 10¹² protoni/s ma 3 × 10¹² alfa/s a causa delle due cariche della particella α)."
    },
    {
      "question": "Qual è lo svantaggio principale delle particelle cariche rispetto ai neutroni?",
      "options": {
        "A": "Hanno energie minori",
        "B": "Vengono fermate più facilmente",
        "C": "Non possono essere accelerate",
        "D": "Hanno sezioni d'urto minori"
      },
      "id": 89,
      "answer": "B",
      "notes": "Le particelle cariche vengono fermate più facilmente rispetto ai neutroni; per esempio, protoni da 16 MeV vengono fermati in 0,6 mm di Cu."
    },
    {
      "question": "Quali sono i quattro sistemi principali di un ciclotrone?",
      "options": {
        "A": "Magnete, vuoto, alta frequenza, sorgente di ioni",
        "B": "Acceleratore, deflettore, bersaglio, raffreddamento",
        "C": "Camera, elettrodi, trasformatore, controllo",
        "D": "Iniettore, separatore, rivelatore, computer"
      },
      "id": 90,
      "answer": "A",
      "notes": "Il ciclotrone è composto da: a) magnete resistivo (1-2 T), b) sistema a vuoto (10⁻⁵ Pa), c) sistema ad alta frequenza (~40 MHz, ~40 kV), d) sorgente di ioni per idrogeno, deuterio e particelle α."
    },
    {
      "question": "Qual è la regola pratica per l'energia necessaria per espellere particelle in una reazione nucleare?",
      "options": {
        "A": "7.5 MeV per ogni particella espulsa",
        "B": "10 MeV per ogni particella espulsa",
        "C": "15 MeV per ogni particella espulsa",
        "D": "20 MeV per ogni particella espulsa"
      },
      "id": 91,
      "answer": "B",
      "notes": "La regola pratica è che servono circa 10 MeV per ogni particella espulsa. Per esempio, una reazione che espelle cinque neutroni richiede circa 5 × 10 MeV = 50 MeV."
    },
    {
      "question": "Perché negli acceleratori moderni si preferisce accelerare ioni negativi?",
      "options": {
        "A": "Permettono estrazione con efficienza quasi del 75% e poca attivazione",
        "B": "Permettono estrazione con efficienza quasi del 150% e poca attivazione",
        "C": "Permettono estrazione con efficienza quasi del 100% e poca attivazione",
        "D": "Permettono estrazione con efficienza quasi del 200% e poca attivazione"
      },
      "id": 92,
      "answer": "C",
      "notes": "Gli acceleratori moderni per protoni/deuterio accelerano ioni negativi che, strappando via gli elettroni con una lamina di carbonio, cambiano carica e vengono deviati fuori dal campo magnetico con efficienza quasi del 100% e poca attivazione."
    },
    {
      "question": "Cosa succede alle particelle oltre 30 MeV negli acceleratori?",
      "options": {
        "A": "Diventano instabili",
        "B": "Diventano relativistiche",
        "C": "Perdono carica elettrica",
        "D": "Non possono essere accelerate"
      },
      "id": 93,
      "answer": "B",
      "notes": "Per energie superiori a 30 MeV, le particelle tendono a diventare relativistiche. Sono stati introdotti nuovi metodi come ciclotroni isocronici e sincrociclotroni per compensare questi effetti."
    },
    {
      "question": "Cosa è un generatore di radionuclidi?",
      "options": {
        "A": "Un dispositivo che produce radiazioni artificiali",
        "B": "Un sistema in cui un radionuclide madre decade in un nuclide radioattivo figlia",
        "C": "Un acceleratore per particelle leggere",
        "D": "Un reattore nucleare portatile"
      },
      "id": 94,
      "answer": "B",
      "notes": "Un generatore di radionuclidi è un sistema in cui un radionuclide madre decade in un altro nuclide radioattivo figlia. Il caso speciale è quando una madre a lunga vita genera una figlia a breve vita per uso medico."
    },
    {
      "question": "Qual è l'esempio più importante di generatore in medicina nucleare?",
      "options": {
        "A": "⁶⁸Ge-⁶⁸Ga",
        "B": "⁹⁰Sr-⁹⁰Y",
        "C": "⁹⁹Mo-⁹⁹ᵐTc",
        "D": "⁸¹Rb-⁸¹ᵐKr"
      },
      "id": 95,
      "answer": "C",
      "notes": "L'esempio più importante è ⁹⁹Mo → ⁹⁹ᵐTc. La madre (2,7 giorni) è adeguata per trasporto e consegna, mentre la figlia (6 ore) è adatta per indagini sui pazienti."
    },
    {
      "question": "Come funziona il generatore ⁹⁹Mo/⁹⁹ᵐTc?",
      "options": {
        "A": "⁹⁹Mo è disciolto in soluzione acquosa",
        "B": "⁹⁹Mo è adsorbito su allumina ed eluito con soluzione fisiologica",
        "C": "⁹⁹Mo è separato per centrifugazione",
        "D": "⁹⁹Mo è estratto con solventi organici"
      },
      "id": 96,
      "answer": "B",
      "notes": "Nel generatore ⁹⁹Mo/⁹⁹ᵐTc, il ⁹⁹Mo è adsorbito su allumina. L'eluizione con soluzione fisiologica eluirà il ⁹⁹ᵐTc solubile in pochi millilitri di liquido."
    },
    {
      "question": "Cosa rappresenta l'attività specifica in radiofarmacia?",
      "options": {
        "A": "L'attività per volume di una preparazione",
        "B": "L'attività per massa di una preparazione",
        "C": "L'attività per densità di una preparazione",
        "D": "L'attività per peso di una preparazione"
      },
      "id": 97,
      "answer": "B",
      "notes": "L'attività specifica a è l'attività per massa di una preparazione, essenziale in radiofarmacia. Se il 100% contiene atomi radioattivi (a teorica), allora A/N = λ = ln(2)/T₁/₂."
    },
    {
      "question": "Cosa significa \"senza portatore\" (carrier-free) nella produzione di radionuclidi?",
      "options": {
        "A": "Il radionuclide viene trasportato in contenitori speciali",
        "B": "Gli atomi radioattivi sono prodotti e separati senza alcun isotopo stabile",
        "C": "Il processo non richiede catalizzatori",
        "D": "La separazione avviene senza solventi"
      },
      "id": 98,
      "answer": "B",
      "notes": "Un processo \"senza portatore\" (carrier-free) significa che gli atomi radioattivi sono prodotti e separati dal bersaglio senza alcun isotopo stabile, risultando in un'attività specifica finale elevata."
    },
    {
      "question": "Quali sono i tre tipi di errori di misura nelle radiazioni?",
      "options": {
        "A": "Lineari, esponenziali, logaritmici",
        "B": "Piccoli, medi, grandi",
        "C": "Grossolani, sistematici, casuali",
        "D": "Fisici, chimici, biologici"
      },
      "id": 99,
      "answer": "C",
      "notes": "I tre tipi di errori di misura sono: errori grossolani (blunders) - molto inaccurati e facili da identificare; errori sistematici - influenzano l'accuratezza; errori casuali - influenzano la precisione."
    },
    {
      "question": "Cosa caratterizza gli errori sistematici?",
      "options": {
        "A": "Producono risultati sempre diversi",
        "B": "Producono risultati che differiscono costantemente dai corretti di una quantità fissa",
        "C": "Sono facili da rilevare",
        "D": "Influenzano solo la velocità di misura"
      },
      "id": 100,
      "answer": "B",
      "notes": "Gli errori sistematici producono risultati che differiscono costantemente dai risultati corretti di una quantità fissa. Influenzano l'accuratezza, non sempre sono facili da rilevare e possono essere rilevati utilizzando standard di riferimento."
    },
    {
      "question": "Da cosa derivano gli errori casuali nelle misurazioni di radiazioni?",
      "options": {
        "A": "Solo da errori dell'operatore",
        "B": "Solo da malfunzionamenti dello strumento",
        "C": "Da variazione casuale della grandezza misurata e limitazioni fisiche del sistema",
        "D": "Solo da interferenze elettromagnetiche"
      },
      "id": 101,
      "answer": "C",
      "notes": "Gli errori casuali derivano da: variazione casuale effettiva della grandezza misurata e limitazioni fisiche del sistema di misura. Influenzano riproducibilità, precisione e incertezza delle misurazioni."
    },
    {
      "question": "Come varia l'errore casuale relativo in funzione dei conteggi?",
      "options": {
        "A": "Aumenta con i conteggi",
        "B": "Rimane costante",
        "C": "Diminuisce all'aumentare dei conteggi per pixel",
        "D": "Non dipende dai conteggi"
      },
      "id": 102,
      "answer": "C",
      "notes": "L'errore casuale relativo diminuisce all'aumentare dei conteggi per pixel. All'aumentare di Ntotale: aumentano i conteggi per pixel, diminuisce l'errore casuale e migliora la qualità dell'immagine visiva."
    },
    {
      "question": "Qual è la formula per calcolare la media sperimentale di N misurazioni indipendenti?",
      "options": {
        "A": "x̄ₑ = (x₁ + x₂ + ... + xₙ) × N",
        "B": "x̄ₑ = (x₁ + x₂ + ... + xₙ) / N",
        "C": "x̄ₑ = √(x₁ + x₂ + ... + xₙ)",
        "D": "x̄ₑ = N / (x₁ + x₂ + ... + xₙ)"
      },
      "id": 103,
      "answer": "B",
      "notes": "La media sperimentale di N misurazioni indipendenti x₁, x₂, x₃, ..., xₙ è data da: x̄ₑ = (x₁ + x₂ + ... + xₙ)/N = Σxᵢ/N."
    },
    {
      "question": "Cosa rappresenta l'inverso della deviazione standard frazionaria?",
      "options": {
        "A": "Il rapporto massa/energia",
        "B": "Il rapporto segnale/rumore",
        "C": "La frequenza di conteggio",
        "D": "L'efficienza del rivelatore"
      },
      "id": 104,
      "answer": "B",
      "notes": "La deviazione standard frazionaria è σₑF = σₑ/x̄ₑ. L'inverso di σₑF è denominato rapporto segnale/rumore, un parametro importante per valutare la qualità delle misurazioni."
    },
    {
      "question": "Quale distribuzione statistica si applica quando la probabilità di successo p è piccola?",
      "options": {
        "A": "Distribuzione binomiale",
        "B": "Distribuzione normale",
        "C": "Distribuzione di Poisson",
        "D": "Distribuzione esponenziale"
      },
      "id": 105,
      "answer": "C",
      "notes": "La distribuzione di Poisson è una semplificazione matematica della binomiale quando p è piccola. Deve essere usata per il conteggio nucleare quando il tempo di osservazione << T₁/₂ della sorgente e l'efficienza di rilevamento è bassa."
    },
    {
      "question": "Nel decadimento radioattivo a equilibrio, cosa rappresenta il rapporto A_D(t)/A_p(t) quando λ_D > λ_p?",
      "options": {
        "A": "È sempre uguale a 1",
        "B": "È una costante maggiore di 1",
        "C": "È una funzione decrescente del tempo",
        "D": "È sempre minore di 1"
      },
      "id": 106,
      "answer": "B",
      "notes": "Quando l'emivita del figlio è maggiore di quella del genitore (T₁/₂_D > T₁/₂_P), il rapporto A_D(t)/A_p(t) = λ_D/(λ_D - λ_p) = costante > 1."
    },
    {
      "question": "Quale modalità di decadimento radioattivo causa un aumento di Z senza variazione di A?",
      "options": {
        "A": "Decadimento α",
        "B": "Decadimento β⁻",
        "C": "Decadimento β⁺",
        "D": "Cattura elettronica"
      },
      "id": 107,
      "answer": "B",
      "notes": "Nel decadimento β⁻, un neutrone si trasforma in protone emettendo un elettrone e un antineutrino, causando Z → Z+1 ma A rimane costante."
    },
    {
      "question": "Nel decadimento α, quale è il range tipico delle particelle α nel tessuto?",
      "options": {
        "A": "1-10 cm",
        "B": "10-100 micron",
        "C": "1-10 mm",
        "D": "1-10 m"
      },
      "id": 108,
      "answer": "B",
      "notes": "Le particelle α hanno un range molto limitato nel tessuto di 10-100 micron, pur avendo energie di 4-9 MeV."
    },
    {
      "question": "L'energia di disintegrazione Q in un decadimento radioattivo è data da:",
      "options": {
        "A": "Q = [M(P) + M(D) + m]c²",
        "B": "Q = [M(P) - M(D) - m]c²",
        "C": "Q = [M(D) - M(P) - m]c²",
        "D": "Q = [M(P) - M(D) + m]c²"
      },
      "id": 109,
      "answer": "B",
      "notes": "L'energia Q rappresenta la differenza di massa a riposo tra genitore e prodotti: Q = [M(P) - M(D) - m]c², dove m sono le particelle emesse."
    },
    {
      "question": "La conversione interna nel decadimento gamma produce:",
      "options": {
        "A": "Solo fotoni caratteristici",
        "B": "Solo elettroni Auger",
        "C": "Un elettrone orbitale con energia specifica",
        "D": "Neutrini"
      },
      "id": 110,
      "answer": "C",
      "notes": "La conversione interna produce un elettrone orbitale con energia uguale all'energia del fotone gamma meno l'energia di legame dell'elettrone."
    },
    {
      "question": "Nell'interazione delle particelle cariche con la materia, l'energia di frenata si divide in:",
      "options": {
        "A": "s_col e s_rad",
        "B": "s_foto e s_compton",
        "C": "s_alpha e s_beta",
        "D": "s_elastica e s_anelastica"
      },
      "id": 111,
      "answer": "A",
      "notes": "L'energia di frenata totale è s_col + s_rad, dove s_col regola le interazioni con gli elettroni orbitali e s_rad con i nuclei."
    },
    {
      "question": "Il coefficiente di attenuazione lineare μ è definito come:",
      "options": {
        "A": "La frequenza per unità di area che un fotone interagisca",
        "B": "La probabilità per unità di lunghezza che un fotone interagisca",
        "C": "La densità per unità di volume che un fotone interagisca",
        "D": "La intensità per unità di superficie che un fotone interagisca"
      },
      "id": 112,
      "answer": "B",
      "notes": "μ rappresenta la 'probabilità per unità di lunghezza di cammino' che un fotone interagisca con l'assorbitore."
    },
    {
      "question": "Lo strato di valore metà (HVL) è lo spessore che attenua l'intensità del fascio del:",
      "options": {
        "A": "37.5%",
        "B": "75%",
        "C": "50%",
        "D": "100%"
      },
      "id": 113,
      "answer": "C",
      "notes": "HVL = ln2/μ = 0.693/μ è lo spessore che riduce l'intensità al 50% del valore iniziale."
    },
    {
      "question": "Il percorso libero medio (MFP) corrisponde a una attenuazione del:",
      "options": {
        "A": "47.400000000000006%",
        "B": "63.2%",
        "C": "94.80000000000001%",
        "D": "126.4%"
      },
      "id": 114,
      "answer": "B",
      "notes": "MFP = 1/μ corrisponde a una attenuazione del 63.2% (1-1/e = 0.632), lasciando il 36.8% dell'intensità iniziale."
    },
    {
      "question": "Nell'effetto fotoelettrico, l'energia del fotoelettrone espulso è:",
      "options": {
        "A": "Ek = hν",
        "B": "Ek = hν - EB",
        "C": "Ek = hν + EB",
        "D": "Ek = EB - hν"
      },
      "id": 115,
      "answer": "B",
      "notes": "L'energia cinetica del fotoelettrone è E_k = hν - E_B, dove hν è l'energia del fotone incidente ed E_B l'energia di legame."
    },
    {
      "question": "Il coefficiente di attenuazione fotoelettrico di massa τ/ρ è proporzionale a:",
      "options": {
        "A": "Z³/(hν)²",
        "B": "Z⁴/(hν)³",
        "C": "Z²/(hν)²",
        "D": "Z⁵/(hν)⁴"
      },
      "id": 116,
      "answer": "B",
      "notes": "τ/ρ ∼ Z⁴/(hν)³, mostrando forte dipendenza dal numero atomico e inversamente dal cubo dell'energia del fotone."
    },
    {
      "question": "Nello scattering di Rayleigh:",
      "options": {
        "A": "Il fotone perde energia significativa",
        "B": "Il fotone non perde energia ma cambia direzione",
        "C": "Il fotone viene completamente assorbito",
        "D": "Si produce una coppia elettrone-positrone"
      },
      "id": 117,
      "answer": "B",
      "notes": "Lo scattering di Rayleigh è elastico: il fotone non perde energia ma viene diffuso con un angolo relativamente piccolo."
    },
    {
      "question": "L'equazione fondamentale di Compton per lo spostamento di lunghezza d'onda è:",
      "options": {
        "A": "Δλ = λ_C(1 + cosθ)",
        "B": "Δλ = λ_C(1 - cosθ)",
        "C": "Δλ = λ_C(1 + sinθ)",
        "D": "Δλ = λ_C cosθ"
      },
      "id": 118,
      "answer": "B",
      "notes": "Δλ = λ_C(1 - cosθ), dove λ_C = h/(m_e c) = 0.024 Å è la lunghezza d'onda Compton dell'elettrone."
    },
    {
      "question": "Nell'effetto Compton, il massimo trasferimento di energia all'elettrone avviene quando:",
      "options": {
        "A": "θ = 0° (scattering in avanti)",
        "B": "θ = 90° (scattering laterale)",
        "C": "θ = 180° (backscattering)",
        "D": "θ = 45°"
      },
      "id": 119,
      "answer": "C",
      "notes": "Il massimo trasferimento di energia all'elettrone di rinculo avviene nel backscattering (θ = 180°)."
    },
    {
      "question": "La soglia energetica per la produzione di coppie nucleari è:",
      "options": {
        "A": "0.7665 MeV",
        "B": "1.022 MeV",
        "C": "1.533 MeV",
        "D": "2.044 MeV"
      },
      "id": 120,
      "answer": "B",
      "notes": "La produzione di coppie nucleari richiede E_γ > 2m_e c² = 1.022 MeV per creare una coppia elettrone-positrone."
    },
    {
      "question": "La soglia per la produzione di triplette è:",
      "options": {
        "A": "1.533 MeV",
        "B": "2.044 MeV",
        "C": "3.066 MeV",
        "D": "4.088 MeV"
      },
      "id": 121,
      "answer": "B",
      "notes": "La produzione di triplette nel campo di un elettrone orbitale richiede E_γ > 4m_e c² = 2.044 MeV."
    },
    {
      "question": "In radiobiologia, cosa si intende per ionizzazione?",
      "options": {
        "A": "L'elettrone viene portato a un livello energetico superiore",
        "B": "L'elettrone viene espulso dall'atomo",
        "C": "L'atomo emette un fotone",
        "D": "Il nucleo si divide in due parti"
      },
      "id": 122,
      "answer": "B",
      "notes": "La ionizzazione è il processo in cui l'elettrone riceve energia sufficiente per essere espulso dalla sua orbita, lasciando l'atomo ospite."
    },
    {
      "question": "Le modifiche chimiche iniziali dopo l'irradiazione avvengono su una scala temporale di circa:",
      "options": {
        "A": "10⁻¹² s",
        "B": "10⁻⁵ s",
        "C": "10⁻³ s",
        "D": "1 s"
      },
      "id": 123,
      "answer": "B",
      "notes": "Le modifiche chimiche avvengono su una scala di ~10⁻⁵ s, molto più lunga del tempo di attraversamento delle particelle originali."
    },
    {
      "question": "Le radiazioni gamma sono caratterizzate da:",
      "options": {
        "A": "Energia tipicamente > 18.75 keV",
        "B": "Energia tipicamente > 25 keV",
        "C": "Energia tipicamente > 37.5 keV",
        "D": "Energia tipicamente > 50 keV"
      },
      "id": 124,
      "answer": "B",
      "notes": "Le radiazioni gamma sono radiazioni elettromagnetiche ad alta energia, solitamente > 25 keV, senza massa né carica."
    },
    {
      "question": "Nel decadimento β⁻, l'energia media delle particelle β è circa:",
      "options": {
        "A": "1/4 dell'energia massima",
        "B": "1/3 dell'energia massima",
        "C": "1/2 dell'energia massima",
        "D": "2/3 dell'energia massima"
      },
      "id": 125,
      "answer": "B",
      "notes": "L'energia media delle particelle β⁻ è circa 1/3 dell'energia massima dello spettro continuo."
    },
    {
      "question": "Le particelle α hanno una massa circa:",
      "options": {
        "A": "1000 volte quella di una particella β",
        "B": "3500 volte quella di una particella β",
        "C": "7000 volte quella di una particella β",
        "D": "10000 volte quella di una particella β"
      },
      "id": 126,
      "answer": "C",
      "notes": "Le particelle α (nuclei di elio) hanno una massa circa 7000 volte maggiore di quella delle particelle β (elettroni)."
    },
    {
      "question": "Gli elettroni Auger sono caratterizzati da:",
      "options": {
        "A": "Alta energia e lungo raggio",
        "B": "Bassa energia e corto raggio",
        "C": "Alta energia e corto raggio",
        "D": "Bassa energia e lungo raggio"
      },
      "id": 127,
      "answer": "B",
      "notes": "Gli elettroni Auger sono particelle a bassa energia e corto raggio, spesso emesse a cascata da atomi eccitati."
    },
    {
      "question": "Il danno da azione diretta delle radiazioni rappresenta circa:",
      "options": {
        "A": "1/3 del danno totale per radiazioni a basso LET",
        "B": "2/3 del danno totale per radiazioni a basso LET",
        "C": "1/2 del danno totale per radiazioni a basso LET",
        "D": "3/4 del danno totale per radiazioni a basso LET"
      },
      "id": 128,
      "answer": "A",
      "notes": "Gli effetti diretti rappresentano circa 1/3 del danno per radiazioni a basso LET, mentre gli effetti indiretti rappresentano 2/3."
    },
    {
      "question": "Il rapporto di potenziamento dell'ossigeno (OER) per radiazioni a basso LET è circa:",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "id": 129,
      "answer": "C",
      "notes": "OER = D_ipossia/D_aria ≈ 3 per radiazioni a basso LET, mentre è ≈ 1 per radiazioni ad alto LET."
    },
    {
      "question": "Le rotture del doppio filamento del DNA (DSBs) sono critiche perché:",
      "options": {
        "A": "Sono facilmente riparabili",
        "B": "Non influenzano la sopravvivenza cellulare",
        "C": "Correlano con morte cellulare e carcinogenesi",
        "D": "Avvengono solo ad alte dosi"
      },
      "id": 130,
      "answer": "C",
      "notes": "Le DSBs svolgono un ruolo critico nella morte cellulare, carcinogenesi ed effetti ereditari, essendo più difficili da riparare."
    },
    {
      "question": "La riparazione NHEJ (Non-Homologous End Joining) opera principalmente durante:",
      "options": {
        "A": "Solo la fase S",
        "B": "Solo la fase G2",
        "C": "Tutto il ciclo cellulare, specialmente G1/S",
        "D": "Solo durante la mitosi"
      },
      "id": 131,
      "answer": "C",
      "notes": "NHEJ opera durante tutto il ciclo cellulare, specialmente in G1/S, riparando DSBs senza utilizzare omologia di sequenza."
    },
    {
      "question": "Il LET (Linear Energy Transfer) è definito come:",
      "options": {
        "A": "dE/dl - potenza media impartita per unità di area",
        "B": "dE/dl - energia media impartita per unità di lunghezza",
        "C": "dE/dl - forza media impartita per unità di volume",
        "D": "dE/dl - momento media impartita per unità di superficie"
      },
      "id": 132,
      "answer": "B",
      "notes": "LET = dE/dl rappresenta la velocità lineare con cui l'energia viene depositata nel mezzo dalle particelle secondarie."
    },
    {
      "question": "L'RBE (Relative Biological Effectiveness) massimo si verifica:",
      "options": {
        "A": "Ad alta dose",
        "B": "A dose zero",
        "C": "A dose intermedia",
        "D": "Non dipende dalla dose"
      },
      "id": 133,
      "answer": "B",
      "notes": "RBE_max si verifica a dose zero e corrisponde al rapporto α_H/α_L delle costanti di radiosensibilità lineare."
    },
    {
      "question": "Nel modello lineare-quadratico, la sopravvivenza cellulare è espressa da:",
      "options": {
        "A": "S = e^(-αd)",
        "B": "S = e^(-βd²)",
        "C": "S = e^(-αd - βd²)",
        "D": "S = e^(-αd + βd²)"
      },
      "id": 134,
      "answer": "C",
      "notes": "L'equazione base del modello LQ è S = e^(-αd - βd²), dove α e β sono i coefficienti di sensibilità lineare e quadratica."
    },
    {
      "question": "La dose biologica efficace (BED) per trattamenti acuti è:",
      "options": {
        "A": "BED = d(1 + d/(α/β))",
        "B": "BED = d(1 - d/(α/β))",
        "C": "BED = d + d²/(α/β)",
        "D": "BED = d - d²/(α/β)"
      },
      "id": 135,
      "answer": "A",
      "notes": "Per trattamenti acuti, BED = d(1 + d/(α/β)), dove d è la dose per frazione e α/β è il rapporto caratteristico del tessuto."
    },
    {
      "question": "Il rapporto α/β è tipicamente:",
      "options": {
        "A": "Più alto per tumori (5-15 Gy) che per tessuti normali (2-5 Gy)",
        "B": "Più alto per tumori (5-20 Gy) che per tessuti normali (2-5 Gy)",
        "C": "Più alto per tumori (5-30 Gy) che per tessuti normali (2-5 Gy)",
        "D": "Più alto per tumori (5-40 Gy) che per tessuti normali (2-5 Gy)"
      },
      "id": 136,
      "answer": "B",
      "notes": "Il rapporto α/β è sistematicamente più elevato per i tumori (5-20 Gy) rispetto ai tessuti normali a risposta tardiva (2-5 Gy)."
    },
    {
      "question": "Gli effetti stocastici delle radiazioni sono caratterizzati da:",
      "options": {
        "A": "Soglia di dose definita",
        "B": "Gravità proporzionale alla dose",
        "C": "Probabilità proporzionale alla dose",
        "D": "Manifestazione immediata"
      },
      "id": 137,
      "answer": "C",
      "notes": "Gli effetti stocastici (tumori, danni ereditari) hanno probabilità correlata alla dose ma gravità indipendente dalla dose ricevuta."
    },
    {
      "question": "Nella radioterapia mirata, l'indice terapeutico dipende da:",
      "options": {
        "A": "Solo la dose totale erogata",
        "B": "Solo il tipo di radiazione",
        "C": "Rapporto tra danno al tumore e ai tessuti sani",
        "D": "Solo la durata del trattamento"
      },
      "id": 138,
      "answer": "C",
      "notes": "L'indice terapeutico è una misura del danno al tumore rispetto al danno alle strutture sane critiche."
    },
    {
      "question": "I tessuti normali critici in radioterapia con radionuclidi includono principalmente:",
      "options": {
        "A": "Solo il midollo osseo",
        "B": "Midollo osseo, reni, fegato, tratto intestinale, polmoni",
        "C": "Solo i reni",
        "D": "Solo il fegato"
      },
      "id": 139,
      "answer": "B",
      "notes": "I principali organi critici sono midollo osseo, reni, fegato, tratto intestinale e polmoni, ciascuno con diversa radiosensibilità e tempo di manifestazione del danno."
    },
    {
      "question": "Per ottimizzare l'indice terapeutico, il range delle particelle deve essere scelto considerando:",
      "options": {
        "A": "Solo il costo del radionuclide",
        "B": "Il tipo di tumore (micrometastasi vs tumori voluminosi)",
        "C": "Solo l'emivita",
        "D": "Solo la disponibilità"
      },
      "id": 140,
      "answer": "B",
      "notes": "Per leucemie/micrometastasi sono preferibili particelle a corto raggio (α), mentre per tumori solidi sono utili emettitori β a medio-lungo raggio per l'effetto cross-fire."
    },
    {
      "question": "In una gamma camera, cosa garantisce l'allineamento corretto dei rivelatori in un sistema SPECT?",
      "options": {
        "A": "Acquisizione simultanea di tutte le proiezioni",
        "B": "Determinazione sperimentale del centro di rotazione usando una sorgente puntiforme decentrata",
        "C": "Utilizzo di algoritmi di ricostruzione 3D",
        "D": "Correzione degli eventi casuali"
      },
      "id": 141,
      "answer": "B",
      "notes": "Per identificare il corretto allineamento in SPECT si determina sperimentalmente il centro di rotazione posizionando una piccola sorgente puntiforme nel campo visivo in un punto decentrato. Le deviazioni dal pattern previsto vengono misurate nei sinogrammi."
    },
    {
      "question": "Nel metodo TEW (Triple Energy Window) per la correzione dello scattering in SPECT, le finestre energetiche ausiliarie servono per:",
      "options": {
        "A": "Aumentare la risoluzione energetica",
        "B": "Stimare la componente di dispersione nei dati di proiezione",
        "C": "Migliorare la sensibilità del rivelatore",
        "D": "Calibrare l'energia dei fotoni"
      },
      "id": 142,
      "answer": "B",
      "notes": "Il metodo TEW utilizza due finestre energetiche di scattering (una sopra e una sotto la finestra di picco dei fotoni) per stimare la componente di dispersione nella finestra del fotopicco utilizzando l'equazione TEW specifica."
    },
    {
      "question": "Nel meccanismo di annichilazione di positroni, la conservazione della quantità di moto garantisce che:",
      "options": {
        "A": "I due fotoni abbiano energia diversa",
        "B": "I due fotoni siano emessi esattamente a 180° l'uno dall'altro",
        "C": "Un solo fotone venga emesso",
        "D": "L'energia dei fotoni sia superiore a 511 keV"
      },
      "id": 143,
      "answer": "B",
      "notes": "La conservazione della quantità di moto, che è prossima a zero immediatamente prima dell'annichilazione, garantisce che entrambi i fotoni siano emessi quasi esattamente a 180° l'uno dall'altro, base fondamentale della PET."
    },
    {
      "question": "Quale scintillatore è diventato preferito per i sistemi PET 3D grazie al suo breve tempo di decadimento?",
      "options": {
        "A": "NaI(Tl)",
        "B": "BGO",
        "C": "LSO",
        "D": "CsI(Tl)"
      },
      "id": 144,
      "answer": "C",
      "notes": "L'LSO è diventato lo scintillatore preferito per progetti di scanner che operano senza setti interpiatto (3D), grazie al suo breve tempo di decadimento che permette di ridurre la finestra temporale di coincidenza e gli eventi casuali."
    },
    {
      "question": "Il NECR (Noise Equivalent Count Rate) in PET è dato dalla formula:",
      "options": {
        "A": "T²/(T+S+R)",
        "B": "T²/(T+S+2fR)",
        "C": "(T+S)²/R",
        "D": "T/(S+R)"
      },
      "id": 145,
      "answer": "B",
      "notes": "Il NECR si calcola con la formula T²/(T+S+2fR) dove T, S e R sono rispettivamente i tassi di conteggio delle coincidenze vere, diffuse e casuali, e f è la frazione della larghezza del sinogramma che interseca il fantoccio."
    },
    {
      "question": "In modalità 3D PET, la rimozione dei setti interplanari comporta:",
      "options": {
        "A": "Diminuzione della sensibilità e degli eventi diffusi",
        "B": "Aumento della sensibilità ma anche aumento di diffusione e coincidenze casuali",
        "C": "Migliore risoluzione spaziale",
        "D": "Riduzione del tempo morto"
      },
      "id": 146,
      "answer": "B",
      "notes": "La modalità 3D è associata a un'elevata sensibilità, ma anche a un aumento delle frazioni di diffusione (scatter) e di coincidenze casuali (random) rispetto alla modalità 2D."
    },
    {
      "question": "Nel tempo di volo (TOF) PET, la differenza di tempo tra i segnali registrati dai rivelatori A e B viene utilizzata per:",
      "options": {
        "A": "Calibrare l'energia dei fotoni",
        "B": "Stimare la posizione dell'evento di annichilazione lungo la linea di risposta",
        "C": "Correggere l'attenuazione",
        "D": "Ridurre il rumore statistico"
      },
      "id": 147,
      "answer": "B",
      "notes": "Con la PET a tempo di volo (TOF), la differenza di tempo tra i segnali registrati dai rivelatori viene utilizzata per stimare la posizione dell'evento di annichilazione lungo la linea di risposta, aggiungendo informazioni spaziali."
    },
    {
      "question": "Il fattore di attenuazione (AF) per una particolare LOR in PET dipende:",
      "options": {
        "A": "Dalla posizione della sorgente lungo la LOR",
        "B": "Solo dal materiale lungo la LOR ed è identico per qualsiasi posizione",
        "C": "Dall'energia del fotone primario",
        "D": "Dal tipo di rivelatore utilizzato"
      },
      "id": 148,
      "answer": "B",
      "notes": "Il fattore di attenuazione per una particolare LOR dipende solo dal materiale lungo la LOR ed è identico all'attenuazione subita da una sorgente esterna di fotoni da 511 keV lungo la stessa linea, indipendentemente dalla posizione della sorgente."
    },
    {
      "question": "Nella PET, per convertire le immagini da unità arbitrarie a concentrazione di attività assoluta è necessario:",
      "options": {
        "A": "Correzione dell'attenuazione",
        "B": "Normalizzazione dei dati",
        "C": "Un fattore di calibrazione determinato sperimentalmente",
        "D": "Correzione dello scatter"
      },
      "id": 149,
      "answer": "C",
      "notes": "Per convertire le immagini PET in unità di concentrazione di attività assoluta (Bq/mL) è necessario un fattore di calibrazione determinato sperimentalmente, solitamente usando un fantoccio cilindrico uniforme."
    },
    {
      "question": "L'accoppiamento della TC con i sistemi SPECT e PET offre principalmente:",
      "options": {
        "A": "Migliore risoluzione spaziale",
        "B": "Riduzione del rumore",
        "C": "Beneficio per la correzione dell'attenuazione e informazioni anatomiche",
        "D": "Aumento della sensibilità"
      },
      "id": 150,
      "answer": "C",
      "notes": "L'accoppiamento della TC offre un beneficio tecnico aggiuntivo per la correzione dell'attenuazione e fornisce informazioni anatomiche spazialmente registrate, particolarmente vantaggioso per la localizzazione e caratterizzazione della malattia."
    },
    {
      "question": "Secondo la IAEA, l'obiettivo principale della Division of Human Health è:",
      "options": {
        "A": "Produzione di radiofarmaci",
        "B": "Ricerca sui reattori nucleari",
        "C": "Prevenzione, diagnosi e trattamento medico",
        "D": "Controllo delle armi nucleari"
      },
      "id": 151,
      "answer": "C",
      "notes": "La Division of Human Health della IAEA si occupa di applicazioni della fisica nucleare in medicina per prevenzione, diagnosi e trattamento, includendo nutrizione, medicina nucleare, radioterapia e dosimetria/fisica medica."
    },
    {
      "question": "In radiologia diagnostica, il bianco in una radiografia indica:",
      "options": {
        "A": "Tessuti meno densi",
        "B": "Che più fotoni sono stati fermati",
        "C": "Presenza di aria",
        "D": "Tessuti normali"
      },
      "id": 152,
      "answer": "B",
      "notes": "In una radiografia il bianco indica che più fotoni sono stati fermati (tessuto denso ne fa passare meno), mentre il nero indica che ne sono stati fermati meno (tessuto meno denso ne fa passare di più)."
    },
    {
      "question": "L'adroterapia utilizza principalmente:",
      "options": {
        "A": "Solo raggi X ad alta energia",
        "B": "Protoni o ioni carbonio",
        "C": "Elettroni accelerati",
        "D": "Raggi gamma"
      },
      "id": 153,
      "answer": "B",
      "notes": "L'adroterapia utilizza protoni o ioni carbonio. In Italia ci sono due centri principali: Trento (solo protoni) e Pavia (anche ioni carbonio). Permette di trattare tumori altrimenti non trattabili ma richiede acceleratori molto grandi, costosi e complessi."
    },
    {
      "question": "La brachiterapia garantisce principalmente:",
      "options": {
        "A": "Minore costo del trattamento",
        "B": "Maggiore confinamento radioattivo consentendo maggiori radiazioni interne",
        "C": "Migliore imaging durante il trattamento",
        "D": "Riduzione del tempo di trattamento"
      },
      "id": 154,
      "answer": "B",
      "notes": "La brachiterapia utilizza piccole sorgenti radioattive convogliate nel paziente irradiando dall'interno, garantendo maggiore confinamento radioattivo e consentendo di introdurre nel corpo maggiori radiazioni rispetto alle tecniche esterne."
    },
    {
      "question": "I laboratori secondari di dosimetria sono coordinati dalla:",
      "options": {
        "A": "WHO",
        "B": "ICRP",
        "C": "IAEA",
        "D": "ICRU"
      },
      "id": 155,
      "answer": "C",
      "notes": "I laboratori secondari (89 in 77 nazioni diverse) rispetto ai 23 primari sono coordinati dalla IAEA per garantire la calibrazione degli strumenti rispetto allo standard globale e assicurare la tracciabilità della misura."
    },
    {
      "question": "L'auditing dosimetrico della IAEA verifica:",
      "options": {
        "A": "Solo la qualità delle immagini",
        "B": "L'accuratezza nella misurazione, erogazione e calibrazione della dose",
        "C": "La formazione del personale",
        "D": "La sicurezza delle strutture"
      },
      "id": 156,
      "answer": "B",
      "notes": "L'auditing dosimetrico consiste in verifiche indipendenti dell'accuratezza nella misurazione, erogazione e calibrazione della dose attraverso dosimetri irradiati di dosi prestabilite. Se la dose non rientra nei valori di tolleranza (5%) si ricerca la causa dell'errore."
    },
    {
      "question": "Il programma di cooperazione tecnica della IAEA supporta:",
      "options": {
        "A": "Solo la ricerca accademica",
        "B": "Progetti svolti in comune dagli stati membri con formazione e supporto diretto",
        "C": "Esclusivamente l'acquisto di strumentazione",
        "D": "Solo la medicina privata"
      },
      "id": 157,
      "answer": "B",
      "notes": "Il programma di cooperazione tecnica supporta progetti svolti in comune dagli stati membri in maniera diretta, importante per formazione e aggiornamento professionale del personale, associato al supporto diretto attraverso invio di esperti e acquisto di strumenti necessari."
    },
    {
      "question": "Il principale vantaggio dell'intelligenza artificiale in medicina nucleare secondo la IAEA è:",
      "options": {
        "A": "Riduzione dei costi",
        "B": "Accesso a dati del paziente a tutto tondo con aumento della potenza di calcolo",
        "C": "Sostituzione completa del personale medico",
        "D": "Eliminazione degli errori diagnostici"
      },
      "id": 158,
      "answer": "B",
      "notes": "L'interesse verso l'IA è cresciuto grazie alla diminuzione del costo della memoria digitale e l'aumento della potenza dei calcolatori, permettendo accesso a dati del paziente a tutto tondo. La IAEA si occupa della formazione per preparare il personale medico."
    },
    {
      "question": "La combinazione di informazioni PET e SPECT offre:",
      "options": {
        "A": "Solo informazioni anatomiche",
        "B": "Solo informazioni funzionali",
        "C": "Informazioni morfologiche e funzionali combinate",
        "D": "Riduzione della dose al paziente"
      },
      "id": 159,
      "answer": "C",
      "notes": "La SPECT da informazioni morfologiche mentre la PET da informazioni funzionali più precise. Combinando le informazioni PET e SPECT si uniscono informazioni morfologiche e funzionali per una valutazione completa."
    },
    {
      "question": "In radioterapia, il tubo a raggi X deve avere distanza più lunga rispetto alla diagnostica per:",
      "options": {
        "A": "Dare energia elevata ai fotoni (6-11.25 MeV)",
        "B": "Dare energia elevata ai fotoni (6-15 MeV)",
        "C": "Dare energia elevata ai fotoni (6-22.5 MeV)",
        "D": "Dare energia elevata ai fotoni (6-30 MeV)"
      },
      "id": 160,
      "answer": "B",
      "notes": "In radioterapia il tubo a raggi X deve avere distanza più lunga per dare energia elevata ai fotoni (6-15 MeV energia massima), mentre la guida d'onda per accelerare gli elettroni può essere più lunga di un metro."
    },
    {
      "question": "Che cos'è il tempo di volo (TOF) nella PET?",
      "options": {
        "A": "Il tempo di decadimento del radionuclide",
        "B": "La differenza nei tempi di rilevamento dei due fotoni di annichilazione per localizzare il sito dell'annichilazione",
        "C": "Il tempo necessario per acquisire un'immagine completa",
        "D": "Il tempo di circolazione del radiofarmaco"
      },
      "id": 161,
      "answer": "B",
      "notes": "Il TOF (Time-of-Flight) usa la differenza nei tempi di arrivo dei fotoni per localizzare con precisione il sito delle annichilazioni positrone-elettrone."
    },
    {
      "question": "Qual è il prerequisito principale per i sistemi PET TOF?",
      "options": {
        "A": "Bassa risoluzione spaziale",
        "B": "Alta risoluzione temporale",
        "C": "Bassa energia dei fotoni",
        "D": "Alta attività del radiofarmaco"
      },
      "id": 162,
      "answer": "B",
      "notes": "Un'alta risoluzione temporale è necessaria per misurare accuratamente le piccole differenze nei tempi di arrivo dei fotoni."
    },
    {
      "question": "La differenza media di tempo tra due rivelatori nella PET TOF è data da:",
      "options": {
        "A": "2Δx/c",
        "B": "Δx/c",
        "C": "x/c",
        "D": "c/Δx"
      },
      "id": 163,
      "answer": "A",
      "notes": "La formula è (x+Δx)/c - (x-Δx)/c = 2Δx/c, dove c è la velocità della luce."
    },
    {
      "question": "Il TOF ha potenziali benefici maggiori per:",
      "options": {
        "A": "Pazienti pediatrici",
        "B": "Imaging del cervello",
        "C": "Pazienti di grandi dimensioni",
        "D": "Studi cardiaci"
      },
      "id": 164,
      "answer": "C",
      "notes": "Il TOF è particolarmente vantaggioso nei pazienti di grandi dimensioni dove l'attenuazione e lo scatter sono elevati."
    },
    {
      "question": "Che cos'è la normalizzazione nella PET?",
      "options": {
        "A": "La correzione per il decadimento radioattivo",
        "B": "Una correzione software per compensare le variazioni di sensibilità tra diverse LOR",
        "C": "La calibrazione dell'energia dei fotoni",
        "D": "La rimozione del rumore di fondo"
      },
      "id": 165,
      "answer": "B",
      "notes": "La normalizzazione compensa le variazioni di sensibilità tra diverse linee di risposta (LOR), simile alla correzione di uniformità nella gamma camera."
    },
    {
      "question": "I file di normalizzazione sono:",
      "options": {
        "A": "Fattori di correzione additivi",
        "B": "Fattori di correzione moltiplicativi determinati sperimentalmente",
        "C": "Costanti fisiche universali",
        "D": "Valori teorici calcolati"
      },
      "id": 166,
      "answer": "B",
      "notes": "I file di normalizzazione sono fattori di correzione determinati sperimentalmente, applicati come termini moltiplicativi per ciascuna LOR."
    },
    {
      "question": "La correzione degli eventi casuali (randoms) è:",
      "options": {
        "A": "Opzionale per studi qualitativi",
        "B": "Essenziale per tutti gli studi quantitativi",
        "C": "Necessaria solo per alte attività",
        "D": "Automatica in tutti i sistemi"
      },
      "id": 167,
      "answer": "B",
      "notes": "La correzione degli eventi casuali è essenziale per tutti gli studi quantitativi ed è implementata di routine in quasi tutti i sistemi scanner."
    },
    {
      "question": "Il metodo di correzione dei randoms con circuito ritardato:",
      "options": {
        "A": "Identifica e rimuove singoli eventi casuali",
        "B": "Stima il numero medio di eventi casuali attesi",
        "C": "Elimina completamente gli eventi casuali",
        "D": "Aumenta la sensibilità del sistema"
      },
      "id": 168,
      "answer": "B",
      "notes": "Il canale ritardato non identifica singoli eventi casuali ma stima il numero medio di eventi casuali che ci si aspetta."
    },
    {
      "question": "Nella correzione per attenuazione PET, la probabilità di un evento di coincidenza:",
      "options": {
        "A": "Dipende dalla posizione della sorgente lungo la LOR",
        "B": "È indipendente dalla posizione della sorgente lungo la LOR",
        "C": "Varia linearmente con la distanza",
        "D": "È sempre costante"
      },
      "id": 169,
      "answer": "B",
      "notes": "A differenza della SPECT, nella PET la probabilità di coincidenza non dipende dalla posizione della sorgente lungo una particolare LOR."
    },
    {
      "question": "Il fattore di attenuazione (AF) per una LOR è dato da:",
      "options": {
        "A": "AF = e^(-μD)",
        "B": "AF = e^(-∫μ(x)dx)",
        "C": "AF = μ(x)",
        "D": "AF = 1/μ(x)"
      },
      "id": 170,
      "answer": "B",
      "notes": "Il fattore di attenuazione è AF = e^(-∫μ(x)dx) dove l'integrale è calcolato lungo la LOR."
    },
    {
      "question": "I sistemi di trasmissione per correzione di attenuazione possono usare:",
      "options": {
        "A": "Solo sorgenti di ⁶⁸Ge",
        "B": "Solo TC",
        "C": "Sorgenti rotanti (⁶⁸Ge, ¹³⁷Cs) o sistemi TC",
        "D": "Solo sorgenti di ¹³⁷Cs"
      },
      "id": 171,
      "answer": "C",
      "notes": "Sono stati sviluppati diversi sistemi: sorgenti rotanti a barra di ⁶⁸Ge, sorgenti puntiformi di ¹³⁷Cs, e sistemi basati su TC."
    },
    {
      "question": "Per la correzione di attenuazione in PET, le immagini TC devono essere:",
      "options": {
        "A": "Riscalate da unità Hounsfield a coefficienti di attenuazione per 383.25 keV",
        "B": "Riscalate da unità Hounsfield a coefficienti di attenuazione per 511 keV",
        "C": "Riscalate da unità Hounsfield a coefficienti di attenuazione per 766.5 keV",
        "D": "Riscalate da unità Hounsfield a coefficienti di attenuazione per 1022 keV"
      },
      "id": 172,
      "answer": "B",
      "notes": "Le immagini TC devono essere riscalate da unità Hounsfield (HU) a coefficienti di attenuazione lineare appropriati per 511 keV."
    },
    {
      "question": "Lo scatter è un problema maggiore in:",
      "options": {
        "A": "Acquisizioni 2-D",
        "B": "Acquisizioni 3-D",
        "C": "Studi statici",
        "D": "Studi dinamici"
      },
      "id": 173,
      "answer": "B",
      "notes": "Il contributo dello scatter è maggiore nelle acquisizioni 3-D rispetto a quelle 2-D, dove la collimazione fisica limita i fotoni dispersi."
    },
    {
      "question": "La correzione del tempo morto compensa:",
      "options": {
        "A": "Il decadimento del radionuclide",
        "B": "La perdita di sensibilità ad alti tassi di conteggio",
        "C": "L'attenuazione dei fotoni",
        "D": "Lo scatter dei fotoni"
      },
      "id": 174,
      "answer": "B",
      "notes": "La correzione del tempo morto compensa la perdita di sensibilità che si verifica quando un secondo fotone arriva mentre il precedente è ancora in elaborazione."
    },
    {
      "question": "Dopo la ricostruzione, le immagini PET hanno inizialmente unità di:",
      "options": {
        "A": "Becquerel per millilitro",
        "B": "Conteggi per voxel per secondo",
        "C": "Curie per grammo",
        "D": "Dose assorbita"
      },
      "id": 175,
      "answer": "B",
      "notes": "Dopo la ricostruzione, le immagini PET hanno unità arbitrarie, tipicamente conteggi per voxel per secondo."
    },
    {
      "question": "Il fattore di calibrazione CF per convertire in concentrazione di attività assoluta è:",
      "options": {
        "A": "CF = A/V × C/p",
        "B": "CF = A/V × p/C",
        "C": "CF = C × p/(A/V)",
        "D": "CF = (A/V) + C + p"
      },
      "id": 176,
      "answer": "B",
      "notes": "Il fattore di calibrazione è CF = (A/V) × (p/C), dove A/V è la concentrazione nota, C il dato medio per voxel, e p la frazione di positroni."
    },
    {
      "question": "La frazione di positroni per il ¹⁸F è:",
      "options": {
        "A": "0,90",
        "B": "0,95",
        "C": "0,97",
        "D": "1,00"
      },
      "id": 177,
      "answer": "C",
      "notes": "Il ¹⁸F, comunemente usato negli esperimenti di calibrazione, ha una frazione di positroni di 0,97."
    },
    {
      "question": "I sistemi combinati SPECT/TC e PET/TC offrono il vantaggio di:",
      "options": {
        "A": "Maggiore risoluzione spaziale",
        "B": "Immagini intrinsecamente registrate spazialmente",
        "C": "Minore dose al paziente",
        "D": "Tempi di acquisizione più brevi"
      },
      "id": 178,
      "answer": "B",
      "notes": "Il vantaggio principale è che le immagini delle due modalità sono intrinsecamente registrate senza bisogno di ulteriori manipolazioni."
    },
    {
      "question": "L'accoppiamento della TC con SPECT e PET offre un beneficio tecnico aggiuntivo per:",
      "options": {
        "A": "La ricostruzione dell'immagine",
        "B": "La correzione per attenuazione",
        "C": "Il controllo di qualità",
        "D": "La calibrazione dei detector"
      },
      "id": 179,
      "answer": "B",
      "notes": "La disponibilità di TC co-registrate è particolarmente vantaggiosa per la correzione per attenuazione."
    },
    {
      "question": "Nella SPECT, i principali vantaggi della correzione per attenuazione basata su TC sono:",
      "options": {
        "A": "Velocità e precisione",
        "B": "Maggiore accuratezza e affidabilità rispetto alle sorgenti di radionuclidi",
        "C": "Minore dose al paziente",
        "D": "Semplicità operativa"
      },
      "id": 180,
      "answer": "B",
      "notes": "I principali vantaggi sono una maggiore accuratezza e affidabilità rispetto alle sorgenti di radionuclidi tradizionali."
    },
    {
      "question": "Nella PET, il vantaggio principale della TC è:",
      "options": {
        "A": "Migliore qualità dell'immagine",
        "B": "Riduzione efficace della durata della procedura",
        "C": "Maggiore sensibilità",
        "D": "Minore costo"
      },
      "id": 181,
      "answer": "B",
      "notes": "Il vantaggio principale è una riduzione efficace della durata complessiva della procedura di scansione grazie alla rapidità delle immagini TC."
    },
    {
      "question": "L'adozione di strumenti SPECT/TC è stata più lenta rispetto a PET/TC probabilmente a causa di:",
      "options": {
        "A": "Problemi tecnici",
        "B": "Considerazioni sui costi",
        "C": "Mancanza di applicazioni cliniche",
        "D": "Problemi di sicurezza"
      },
      "id": 182,
      "answer": "B",
      "notes": "L'adozione di strumenti combinati SPECT/TC è stata più lenta rispetto a quella di PET/TC, probabilmente a causa di considerazioni sui costi."
    },
    {
      "question": "Secondo la lezione IAEA, l'agenzia nasce per:",
      "options": {
        "A": "Controllare le armi nucleari",
        "B": "Diffondere con il contributo dell'energia nucleare pace, salute e prosperità nel mondo",
        "C": "Regolamentare l'uso medico delle radiazioni",
        "D": "Sviluppare nuove tecnologie nucleari"
      },
      "id": 183,
      "answer": "B",
      "notes": "La IAEA nasce per diffondere con il contributo dell'energia nucleare pace, salute e prosperità nel mondo."
    },
    {
      "question": "La IAEA non è propriamente un'agenzia delle nazioni unite, ma:",
      "options": {
        "A": "Un'organizzazione privata",
        "B": "Un'organizzazione internazionale che riporta al consiglio di sicurezza e all'assemblea generale ONU",
        "C": "Un'agenzia governativa",
        "D": "Un centro di ricerca indipendente"
      },
      "id": 184,
      "answer": "B",
      "notes": "La IAEA è un'organizzazione internazionale che riporta direttamente al consiglio della sicurezza e all'assemblea generale delle nazioni unite."
    },
    {
      "question": "La Division of Human Health della IAEA si occupa di:",
      "options": {
        "A": "Solo radioterapia",
        "B": "Solo medicina nucleare",
        "C": "Prevenzione, diagnosi e trattamento",
        "D": "Solo ricerca"
      },
      "id": 185,
      "answer": "C",
      "notes": "La Division of Human Health si occupa di prevenzione, diagnosi e trattamento usando applicazioni della fisica nucleare."
    },
    {
      "question": "La sezione di Dosimetria e Fisica Medica della IAEA supporta quanti stati membri?",
      "options": {
        "A": "150",
        "B": "170",
        "C": "180",
        "D": "200"
      },
      "id": 186,
      "answer": "C",
      "notes": "La sezione supporta 180 stati membri nell'implementazione dell'utilizzo delle radiazioni ionizzanti in maniera sicura ed efficace."
    },
    {
      "question": "In radiologia diagnostica, il bianco in una radiografia indica che:",
      "options": {
        "A": "Meno fotoni sono stati fermati",
        "B": "Più fotoni sono stati fermati",
        "C": "I fotoni hanno attraversato senza interazione",
        "D": "C'è un errore nell'acquisizione"
      },
      "id": 187,
      "answer": "B",
      "notes": "Il bianco indica che più fotoni sono stati fermati, mentre il nero indica che ne sono stati fermati meno."
    },
    {
      "question": "Il range energetico tipico per la radiologia diagnostica è:",
      "options": {
        "A": "30-75 keV",
        "B": "30-100 keV",
        "C": "30-150 keV",
        "D": "30-200 keV"
      },
      "id": 188,
      "answer": "B",
      "notes": "Il range energetico per la radiologia diagnostica è tipicamente 30-100 keV."
    },
    {
      "question": "In radioterapia, l'energia massima dei fotoni può arrivare a:",
      "options": {
        "A": "6-11.25 MeV",
        "B": "6-15 MeV",
        "C": "6-22.5 MeV",
        "D": "6-30 MeV"
      },
      "id": 189,
      "answer": "B",
      "notes": "In radioterapia, l'energia massima può arrivare a 6-15 MeV per irraggiare efficacemente le masse tumorali."
    },
    {
      "question": "L'adroterapia utilizza:",
      "options": {
        "A": "Solo protoni",
        "B": "Solo ioni carbonio",
        "C": "Protoni o ioni carbonio",
        "D": "Solo elettroni"
      },
      "id": 190,
      "answer": "C",
      "notes": "L'adroterapia utilizza protoni o ioni carbonio. In Italia ci sono centri a Trento (solo protoni) e Pavia (anche ioni carbonio)."
    },
    {
      "question": "La brachiterapia utilizza:",
      "options": {
        "A": "Fascio di elettroni esterni",
        "B": "Piccole sorgenti radioattive introdotte nel paziente",
        "C": "Campi magnetici",
        "D": "Ultrasuoni"
      },
      "id": 191,
      "answer": "B",
      "notes": "La brachiterapia usa piccole sorgenti radioattive che vengono convogliate nel paziente irradiando dall'interno."
    },
    {
      "question": "Il Sistema Internazionale per le radiazioni ionizzanti è coordinato da quanti laboratori primari?",
      "options": {
        "A": "16",
        "B": "23",
        "C": "89",
        "D": "77"
      },
      "id": 192,
      "answer": "B",
      "notes": "Ci sono 23 laboratori primari nel mondo che possono misurare e definire direttamente lo standard della misura delle radiazioni."
    },
    {
      "question": "I laboratori secondari di calibrazione sono:",
      "options": {
        "A": "23 in 16 nazioni",
        "B": "89 in 77 nazioni",
        "C": "77 in 89 nazioni",
        "D": "16 in 23 nazioni"
      },
      "id": 193,
      "answer": "B",
      "notes": "Sono stati istituiti 89 laboratori secondari in 77 nazioni diverse per calibrare gli strumenti rispetto allo standard dei laboratori primari."
    },
    {
      "question": "L'auditing dosimetrico della IAEA verifica l'accuratezza con una tolleranza del:",
      "options": {
        "A": "3.75%",
        "B": "5%",
        "C": "7.5%",
        "D": "10%"
      },
      "id": 194,
      "answer": "B",
      "notes": "Se la dose non rientra nei valori di tolleranza del 5%, si ricerca la causa dell'errore e se necessario si interviene con esperti."
    },
    {
      "question": "Il Programma di Cooperazione Tecnica della IAEA include:",
      "options": {
        "A": "Solo formazione teorica",
        "B": "L'invio di esperti e l'acquisto di strumenti per gli ospedali",
        "C": "Solo supporto finanziario",
        "D": "Solo consulenza a distanza"
      },
      "id": 195,
      "answer": "B",
      "notes": "Il programma include l'invio di esperti nelle strutture e l'acquisto di strumenti necessari per gli ospedali."
    },
    {
      "question": "Negli ultimi anni, l'interesse verso l'intelligenza artificiale in medicina è cresciuto grazie a:",
      "options": {
        "A": "Nuove scoperte scientifiche",
        "B": "Diminuzione del costo della memoria digitale e aumento della potenza di calcolo",
        "C": "Maggiore disponibilità di personale specializzato",
        "D": "Cambiamenti normativi"
      },
      "id": 196,
      "answer": "B",
      "notes": "L'interesse è cresciuto grazie alla diminuzione del costo e dello spazio della memoria digitale e alla potenza dei calcolatori in costante aumento."
    },
    {
      "question": "Secondo la IAEA, l'intelligenza artificiale in campo medico:",
      "options": {
        "A": "È già ampiamente implementata",
        "B": "Non è ancora presente né opportunamente teoricamente supportata",
        "C": "È completamente sviluppata",
        "D": "È utilizzata solo in ricerca"
      },
      "id": 197,
      "answer": "B",
      "notes": "Nonostante il crescente interesse, l'IA non è ancora presente né opportunamente teoricamente supportata in campo medico."
    },
    {
      "question": "La IAEA si sta occupando di preparare il personale medico per l'IA attraverso:",
      "options": {
        "A": "Corsi universitari",
        "B": "Formazione e consapevolezza ospedaliera",
        "C": "Ricerca indipendente",
        "D": "Collaborazioni private"
      },
      "id": 198,
      "answer": "B",
      "notes": "La IAEA si sta occupando della formazione e della consapevolezza ospedaliera per preparare il personale medico all'inserimento dell'IA."
    },
    {
      "question": "L'accesso a 'dati del paziente a tutto tondo' è reso possibile da:",
      "options": {
        "A": "Nuove normative sulla privacy",
        "B": "L'aumento della potenza di calcolo e la diminuzione dei costi di memoria",
        "C": "Maggiore collaborazione tra ospedali",
        "D": "Nuovi protocolli medici"
      },
      "id": 199,
      "answer": "B",
      "notes": "L'accesso completo ai dati del paziente è reso possibile dall'aumento della potenza di calcolo e dalla diminuzione dei costi di memoria digitale."
    },
    {
      "question": "In radioterapia, il tubo a raggi X deve avere:",
      "options": {
        "A": "Distanza più breve per alta energia",
        "B": "Distanza più lunga per dare energia elevata ai fotoni",
        "C": "Stessa distanza della diagnostica",
        "D": "Distanza variabile in base al paziente"
      },
      "id": 200,
      "answer": "B",
      "notes": "In radioterapia il tubo a raggi X deve avere distanza più lunga per dare energia elevata ai fotoni (6-15 MeV), con la guida d'onda che può essere più lunga di un metro."
    }
  ]
};

module.exports = quizQuestions;
