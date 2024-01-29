/*


About lang type: // Opções: "dead", "natural", "modern", "colang", "colang-fictional"

About font.sourceType  //"local", "url", ou "none"
About font.url // URL only if se sourceType for "url"

*/



const translations = {
    "tlh": {
        "langtag": `tlh`,
		"type": "fictional",
        "script": "Latn",
        "lang": `tlhIngan Hol`,
		"langEnglish": "Klingon",
        "title": `Ptolemy V ghaH ta'pu' QIn rosetta QInHomDaq qon`,
        "quote": `QInHom vI' rosetta Daq ghaH ta'pu' QIn 'oH chenmoHlu'pu'bogh, demotic, 'ej QrI'qa' Hol, basalt mIwDaq, 'ej ghaH ta'pu', Qun'e' SuvwI', mIw chu'wI', cha', wej, 'ej loS pongDajDaq chen.`,
        "reference": `Ptolemy V ghaH ta'pu' QIn rosetta QInHomDaq, 196 B.C., British Museum.`,
        "direction": `ltr`,
		"charset": "",
		"unicodeSupport": true,
        "languageFamily": "Indo-European",
        "geographicRegion": "Global",     
        "font": {
            "name": "Custom Klingon Font",
            "sourceType": "url",
            "url": "https://example.com/custom-klingon-font" 
        },
        "fontFamily": "",
        "notes": "Klingon script (pIqaD) is not standardized in the Unicode. Custom fonts and mappings are used for representation",
		"validatedByExpert": false
    },
    "grc": {
        "langtag": "grc",
        "type": "dead",
        "script": "Grek",
        "lang": "ἙΛΛΗΝΙΚΗ",
        "langEnglish": "Klingon",
        "title": "ΔΟΓΜΑ ΤΟΥ ΦΑΡΑΩ ΠΤΟΛΕΜΑΙΟΥ Ε·ΕΠΙΓΕΓΡΑΜΜΕΝΟΝ ΕΠΙ ΤΗΣ ΛΙΘΟΥ ΤΗΣ ΡΟΣΕΤΤΑΣ",
        "quote": "ΑΝΤΙΓΡΑΦΑ ΤΟΥΤΟΥ ΤΟΥ ΔΟΓΜΑΤΟΣ ΚΟΠΗΣΕΤΑΙ ΕΝ ΙΕΡΟΓΛΥΦΟΙΣ ΔΗΜΟΤΙΚΗΙ ΚΑΙ ΕΛΛΗΝΙΣΤΙ ΕΠΙ ΠΛΑΚΩΝ ΒΑΣΑΛΤΟΥ ΚΑΙ ΤΕΘΗΣΕΤΑΙ ΕΝ ΤΟΙΣ ΠΡΩΤΟΙΣ ΔΕΥΤΕΡΟΙΣ ΚΑΙ ΤΡΙΤΟΙΣ ΤΑΞΕΙ ΝΑΟΙΣ ΠΑΡΑΛΛΗΛΩΣ ΤΩ ΑΓΑΛΜΑΤΙ ΤΟΥ ΠΤΟΛΕΜΑΙΟΥ ΤΟΥ ΑΕΙΖΩΟΥ ΘΕΟΥ·",
        "reference": "ΔΟΓΜΑΤΑ ΤΟΥ ΠΤΟΛΕΜΑΙΟΥ Ε·ΕΠΙ ΤΗΣ ΛΙΘΟΥ ΤΗΣ ΡΟΣΕΤΤΑΣ ΡΙΦ ΠΡΟ ΧΡΙΣΤΟΥ ΒΡΕΤΑΝΙΚΟΝ ΜΟΥΣΕΙΟΝ",
        "direction": "ltr",
        "charset": "",
        "unicodeSupport": true,
        "languageFamily": "Indo-European",
        "geographicRegion": "Global",       
        "font": {
            "name": "Custom Klingon Font",
            "sourceType": "url",
            "url": "https://example.com/custom-klingon-font"
        },
        "fontFamily": "",
        "notes": "",
        "validatedByExpert": false,
    },
    "egy": {
        "langtag": `egy`,
		"type": `dead`,
        "script": "Egyp",
        "lang": `Egipcio`,
		"langEnglish": "Egyptian",
        "title": `𓂧𓌅 𓉗𓇯 𓃾𓂝𓏴𓌅𓀠 𓀠𓃻𓏲𓏴𓃾 𓇯𓏴𓉗𓈖𓆓𓏴𓃾 𓏲𓇯𓃾𓆓𓂝𓏴 𓏲𓏴𓏲𓇯𓂝𓏴𓃾`,
        "quote": `𓂧𓌅 𓉗𓇯 𓃾𓂝𓏴𓌅𓀠 𓀠𓃻𓏲𓏴𓃾 𓇯𓏴𓉗𓈖𓆓𓏴𓃾 𓏲𓇯𓃾𓆓𓂝𓏴 𓏲𓏴𓏲𓇯𓂝𓏴𓃾. 𓃾𓀠𓃾 𓀠𓃻𓏲𓏴𓃾 𓉐𓉗𓉐𓌓𓂝𓌅𓃾 𓀠𓃻𓏲𓏴𓃾 𓇯𓌓𓉗𓌅𓂋𓏴𓃾 𓇯𓏴𓏲𓇯𓂝𓏴𓃾 𓂝𓆓 𓀠𓂝𓈖𓆓𓏲𓏴𓃾 𓏲𓉗𓃾𓁶𓏲𓏴𓃾 𓉐𓆓𓏲𓂋𓌓𓃾 𓂝𓆓 𓁹𓈖 𓌙𓏲 𓌓𓏲𓏴𓂋𓏲𓏴𓃾 𓁹𓈖 𓃾𓉗𓁶𓆓𓃾. 𓂧𓌅 𓉗𓇯 𓃾𓂝𓏴𓌅𓀠 𓀠𓃻𓏲𓏴𓃾 𓇯𓁶𓁹𓂝𓆓𓃾 𓏲𓀠𓈖𓏭𓈖𓏴𓃾. 𓃾𓀠𓃾 𓉗𓃾𓁶𓏲𓏴𓃾 𓉐𓉗𓉐𓌓𓂝𓌅𓃾 𓉗𓃾𓁶𓏲𓏴𓃾 𓇯𓁶𓁹𓂝𓆓𓃾 𓇯𓌅𓃾 𓏲𓁶𓏴𓃾 𓇯𓌙𓏲𓂝 𓈖𓆓 𓀠𓂧 𓃾𓆓𓌓𓃾 𓏲𓄤𓁹𓏲𓂝𓃾 𓉐𓏴𓁶 𓏲𓃻𓉐𓌅𓏴𓃾 𓈖𓇯𓁹𓆓𓏲𓏴𓃾`,
        "reference": `Decrees of Ptolemy V on the Rosetta Stone, 196 B.C., British Museum.`,
        "direction": `rtl`,
        "font-families": `'A Noto Sans Egyptian Hieroglyphs', sans-serif`,
        "charset": ``,
		"unicodeSupport": true,
        "languageFamily": "Afro-Asiatic",
        "geographicRegion": "North Africa",
		"font": {
            "name": "Custom Klingon Font",
            "sourceType": "url",
            "url": "https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" // URL apenas se sourceType for "url"
        },
		"fontFamily": "",
		"notes": "",
        "validatedByExpert": false
    },
    "gr": {
        "langtag": `gr`,
        "type": `modern`,
        "script": `Grek`,
        "lang": `Νέα Ελληνικά`,
        "title": `Διάταγμα του Φαραώ Πτολεμαίου Ε' χαραγμένο στην Πέτρα της Ροζέτας`,
        "quote": `Αντίγραφα αυτού του Διατάγματος θα πρέπει να χαραχθούν σε ιερογλυφικά, δημοτικά, και Ελληνικά σε πλάκες από βασάλτη και να τοποθετηθούν στους ναούς πρώτης, δεύτερης και τρίτης τάξης δίπλα στο άγαλμα του Πτολεμαίου, του αιώνια ζώντα θεού.`,
        "reference": `Διατάγματα του Πτολεμαίου Ε' στην Πέτρα της Ροζέτας, 196 π.Χ., Βρετανικό Μουσείο.`,
        "direction": `ltr`,
        "fontFamily": ``,
        "charset": `UTF-8`
    },
    "en": {
        "langtag": `en`,
        "type": `modern`,
        "script": `Latn`,
        "lang": `English`,
        "title": `Decree of Pharaoh Ptolemy V inscribed on the Rosetta Stone`,
        "quote": `Copies of this Decree shall be cut in hieroglyphs, demotic, and Greek on basalt slabs and placed in the first, second, and third-order temples alongside the statue of Ptolemy, the ever-living god.`,
        "reference": `Decrees of Ptolemy V on the Rosetta Stone, 196 B.C., British Museum.`,
        "direction": `ltr`,
        "fontFamily": ``,
        "charset": ``
    },
    "pt": {
        "langtag": `pt`,
        "type": `modern`,
        "script": `Latn`,
        "lang": `Português`,
        "title": `Decreto do Faraó Ptolomeu V inscrito na Pedra de Roseta`,
        "quote": `Este decreto será inscrito sobre uma estela de pedra nos caracteres sagrados e nativos e gregos e será erigida em cada um dos templos de primeiro, segundo e terceiro graus, ao lado da imagem do Rei Eterno.`,
        "reference": `Decretos de Ptolomeu V na Pedra de Roseta, 196 a.C., Museu Britânico.`,
        "direction": `ltr`,
        "fontFamily": ``
    },
    "ar": {
        "langtag": `ar`,
        "type": `modern`,
        "lang": `العربية`,
        "title": `مرسوم الفرعون بطليموس الخامس المنقوش على حجر رشيدة`,
        "quote": `سيتم قطع نسخ من هذا المرسوم بالهيروغليفية والديموتيك واليونانية على ألواح البازلت ووضعها في المعابده من الدرجة الأولى والثانية والثالثة بجوار تمثال بطليموس، إله الحياة الأبدية.`,
        "reference": `مراسيم بطليموس الخامس على حجر رشيدة، 196 قبل الميلاد، المتحف البريطاني.`,
        "direction": `rtl`,
        "fontFamily": ``
    },
    "ja": {
        "langtag": `ja`,
        "type": `modern`,
        "lang": `日本語`,
        "title": `ロゼッタストーンに刻まれたファラオ・プトレマイオス5世の布告`,
        "quote": `この布告のコピーは、バザルトの板にヒエログリフ、デモティック、ギリシャ語で刻まれ、第一、第二、第三階級の寺院に、永遠の神、プトレマイオスの像と並べて設置されます。`,
        "reference": "ロゼッタストーンに刻まれたプトレマイオス5世の布告、紀元前196年、ブリティッシュ・ミュージアム。",
        "direction": `vertical-rl`,
        "font": {
            "name": "Noto Sans Japanese",
            "sourceType": "url",
            "url": "https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&family=Noto+Sans+JP&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        },
        "fontFamily": `'Noto Sans JP', sans-serif`
    },
    "es": {
        "langtag": "es",
        "type": `modern`,
        "script": `Latn`,
        "lang": "Español",
        "title": "Decreto del Faraón Ptolomeo V inscrito en la Piedra Rosetta",
        "quote": "Copias de este Decreto serán talladas en jeroglíficos, demótico y griego en losas de basalto y colocadas en los templos de primer, segundo y tercer orden junto a la estatua de Ptolomeo, el dios eterno.",
        "reference": "Decretos de Ptolomeo V en la Piedra Rosetta, 196 a.C., Museo Británico.",
        "direction": "ltr",
        "fontFamily": ``
    },
    "fr": {
        "langtag": "fr",
        "type": `modern`,
        "script": `Latn`,
        "lang": "Français",
        "title": "Décret du Pharaon Ptolémée V inscrit sur la Pierre de Rosette",
        "quote": "Des copies de ce Décret seront gravées en hiéroglyphes, démotique et grec sur des dalles de basalte et placées dans les temples de premier, deuxième et troisième ordre à côté de la statue de Ptolémée, le dieu vivant éternel.",
        "reference": "Décrets de Ptolémée V sur la Pierre de Rosette, 196 av. J.-C., Musée Britannique.",
        "direction": "ltr",
        "fontFamily": ``
    },
    "ru": {
        "langtag": "ru",
        "type": `modern`,
        "lang": "Русский",
        "title": "Декрет фараона Птолемея V, выгравированный на Розеттском камне",
        "quote": "Копии этого Декрета будут вырезаны иероглифами, демотическим и греческим языками на базальтовых плитах и размещены в храмах первого, второго и третьего порядка рядом со статуей Птолемея, вечноживущего бога.",
        "reference": "Декреты Птолемея V на Розеттском камне, 196 год до н.э., Британский музей.",
        "direction": "ltr",
        "fontFamily": ``
    },
    "zh": {
        "langtag": "zh",
        "type": `modern`,
        "lang": "中文",
        "title": "刻在罗塞塔石碑上的托勒密五世法老的法令",
        "quote": "这项法令的副本将以象形文字、民用文字和希腊语刻在玄武岩石板上，并放置在一、二、三级神庙中，与托勒密永生之神的雕像并列。",
        "reference": "托勒密五世在罗塞塔石碑上的法令，公元前196年，大英博物馆。",
        "direction": "ltr",
        "fontFamily": ``
    },
    "hi": {
        "langtag": "hi",
        "type": `modern`,
        "lang": "हिन्दी",
        "title": "फिरौन प्तोलेमी पंचम की रोजेटा पत्थर पर अंकित डिक्री",
        "quote": "इस डिक्री की प्रतियां हाइरोग्लिफ़्स, डेमोटिक और ग्रीक में बेसाल्ट स्लैब पर कटी जाएंगी और पहले, दूसरे और तीसरे श्रेणी के मंदिरों में प्तोलेमी की मूर्ति के पास रखी जाएंगी, सदैव जीवित देवता।",
        "reference": "रोजेटा पत्थर पर प्तोलेमी पंचम की डिक्री, 196 ईसा पूर्व, ब्रिटिश संग्रहालय।",
        "direction": "ltr",
        "fontFamily": ``
    },
    "sw": {
        "langtag": "sw",
        "lang": "Kiswahili",
        "title": "Amri ya Farao Ptolemy V iliyochongwa kwenye Jiwe la Rosetta",
        "quote": "Nakala za Amri hii zitachongwa kwa herufi za hieroglyph, demotic na Kigiriki kwenye ubao wa mawe ya basalt na kuwekwa kwenye hekalu za daraja la kwanza, la pili na la tatu pamoja na sanamu ya Ptolemy, mungu aishiye milele.",
        "reference": "Amri za Ptolemy V kwenye Jiwe la Rosetta, 196 KK, Jumba la Makumbusho la Uingereza.",
        "direction": "ltr",
        "fontFamily": ``
    },
    "eo": {
        "langtag": `eo`,
        "lang": `Esperanto`,
        "title": `Dekreto de Faraono Ptolemeo la 5-a skribita sur la Rozeta Ŝtono`,
        "quote": `Kopioj de ĉi tiu Dekreto estu tajpitaj en hieroglifoj, demotikaj, kaj grekaj sur bazaltaĵoj kaj metitaj en la unuaj, duaj, kaj triaj ordaj temploj apud la statuo de Ptolemeo, la ĉiamviva dio.`,
        "reference": `Dekretoj de Ptolemeo la 5-a sur la Rozeta Ŝtono, 196 a.K., Brita Muzeo.`,
        "direction": `ltr`,
        "fontFamily": ``
    },
    "tlh": {
        "langtag": `tlh`,
        "lang": `tlhIngan Hol`,
        "title": `Ptolemy V ghaH ta'pu' QIn rosetta QInHomDaq qon`,
        "quote": `QInHom vI' rosetta Daq ghaH ta'pu' QIn 'oH chenmoHlu'pu'bogh, demotic, 'ej QrI'qa' Hol, basalt mIwDaq, 'ej ghaH ta'pu', Qun'e' SuvwI', mIw chu'wI', cha', wej, 'ej loS pongDajDaq chen.`,
        "reference": `Ptolemy V ghaH ta'pu' QIn rosetta QInHomDaq, 196 B.C., British Museum.`,
        "direction": `ltr`,
        "fontFamily": ``,
        "notes": "Klingon script (pIqaD) is not standardized in the Unicode. Custom fonts and mappings are used for representation."
    },
    "dth": {
        "langtag": `dth`,
        "lang": `Dothraki`,
        "title": `Ptolemy V ma Khalasaroon anni vekhat majin Rosetta vekhat kishi`,
        "quote": `Majin vekhat anni Ptolemy V, hieroglyphs, demotic, majin Athchomaroon, basalt kishoon anni vekhikh hajinaan, anna, akka, sen anni majin khalasares zhavvorsi Ptolemy, khal zhavvorsi.`,
        "reference": `Ptolemy V ma Khalasaroon anni vekhat Rosetta vekhat, 196 B.C., British Museum.`,
        "direction": `ltr`,
        "fontFamily": ``
    },
    "qya": {
        "langtag": `qya`,
        "lang": `Quenya`,
        "title": `Axan Pharaoh Ptolemy V ná raitaina Rosetta Ondonna`,
        "quote": `Lévai ya axan sina ná cárë hieroglyphs, demotic, ar Quenya lambë ná lambë basalt talamor ar panë mirë minya, atta, ar neldë aranwaistallo apacenya i sanwë Ptolemy, i oira Vala.`,
        "reference": `Axani Ptolemy V Rosetta Ondonna, Y.T. 196, British Museum.`,
        "direction": `ltr`,
        "fontFamily": ``
    }
}