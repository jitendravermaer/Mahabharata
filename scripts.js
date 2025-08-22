let currentLanguage = 'english';

const translations = {
    hindi: {
        title: "🏹 महाभारत अनुक्रमणिका",
        subtitle: "भारत का महानतम महाकाव्य - संपूर्ण महाभारत ग्रंथ की अनुक्रमणिका",
        expandMore: "और पढ़ें ▼",
        showLess: "कम दिखाएं ▲",
        readChapter: "📖 अध्याय पढ़ें",
        legendPandava: "पांडव घटनाएं",
        legendKaurava: "कौरव घटनाएं",
        legendDivine: "दिव्य हस्तक्षेप",
        legendWar: "युद्ध घटनाएं"
    },
    english: {
        title: "🏹 Mahabharata Index",
        subtitle: "The Greatest Epic of Ancient India - Complete Mahabharata Granth Index",
        expandMore: "Learn More ▼",
        showLess: "Show Less ▲",
        readChapter: "📖 Read Chapter",
        legendPandava: "Pandava Events",
        legendKaurava: "Kaurava Events",
        legendDivine: "Divine Interventions",
        legendWar: "War Events"
    },
    sanskrit: {
        title: "🏹 महाभारत अनुक्रमणिका",
        subtitle: "भारतस्य महत्तमं महाकाव्यम् - संपूर्ण महाभारत ग्रन्थस्य अनुक्रमणिका",
        expandMore: "अधिकं जानीहि ▼",
        showLess: "न्यूनं दर्शयतु ▲",
        readChapter: "📖 अध्यायं पठत",
        legendPandava: "पाण्डव घटनाः",
        legendKaurava: "कौरव घटनाः",
        legendDivine: "दिव्य हस्तक्षेपाः",
        legendWar: "युद्ध घटनाः"
    }
};

function changeLanguage(lang) {
    currentLanguage = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    // Update title and subtitle
    document.getElementById('main-title').textContent = translations[lang].title;
    document.getElementById('subtitle').textContent = translations[lang].subtitle;

    // Update all elements with data attributes
    document.querySelectorAll('[data-english]').forEach(element => {
        if (element.hasAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });

    // Update legend
    const legendItems = document.querySelectorAll('.legend-item span');
    if (legendItems.length >= 4) {
        legendItems[0].textContent = translations[lang].legendPandava;
        legendItems[1].textContent = translations[lang].legendKaurava;
        legendItems[2].textContent = translations[lang].legendDivine;
        legendItems[3].textContent = translations[lang].legendWar;
    }
}

function toggleDetails(eventElement) {
    const details = eventElement.querySelector('.event-details');
    const button = eventElement.querySelector('.expand-btn');

    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        button.textContent = translations[currentLanguage].expandMore;
    } else {
        // Close all other expanded details first
        document.querySelectorAll('.event-details.expanded').forEach(detail => {
            detail.classList.remove('expanded');
            detail.parentElement.querySelector('.expand-btn').textContent = translations[currentLanguage].expandMore;
        });

        details.classList.add('expanded');
        button.textContent = translations[currentLanguage].showLess;

        // Smooth scroll to the event
        eventElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

function readChapter(chapterRef) {
    const chapterMap = {
        'adi-parva-1': {
            hindi: 'आदि पर्व - अध्याय 1-62: शांतनु उपाख्यान, कुरु वंश की उत्पत्ति',
            english: 'Adi Parva - Chapters 1-62: Shantanu Upakhyana, Origin of Kuru Dynasty',
            sanskrit: 'आदिपर्व - अध्यायाः १-६२: शान्तनूपाख्यानम्, कुरुवंशस्य उत्पत्तिः'
        },
        'adi-parva-2': {
            hindi: 'आदि पर्व - अध्याय 63-127: धृतराष्ट्र और पांडु का जन्म',
            english: 'Adi Parva - Chapters 63-127: Birth of Dhritarashtra and Pandu',
            sanskrit: 'आदिपर्व - अध्यायाः ६३-१२७: धृतराष्ट्रस्य पाण्डोश्च जन्म'
        },
        'adi-parva-4': {
            hindi: 'आदि पर्व - अध्याय 128-173: पांडवों का जन्म और शिक्षा',
            english: 'Adi Parva - Chapters 128-173: Birth and Education of Pandavas',
            sanskrit: 'आदिपर्व - अध्यायाः १२८-१७३: पाण्डवानां जन्म शिक्षा च'
        },
        'sabha-parva': {
            hindi: 'सभा पर्व - अध्याय 1-81: द्यूत क्रीड़ा और वनवास',
            english: 'Sabha Parva - Chapters 1-81: Game of Dice and Exile',
            sanskrit: 'सभापर्व - अध्यायाः १-८१: द्यूतक्रीडा वनवासश्च'
        },
        'vana-parva': {
            hindi: 'वन पर्व - अध्याय 1-324: वनवास के बारह वर्ष',
            english: 'Vana Parva - Chapters 1-324: Twelve Years of Forest Exile',
            sanskrit: 'वनपर्व - अध्यायाः १-३२४: द्वादश वर्षाणि वनवासस्य'
        },
        'udyoga-parva': {
            hindi: 'उद्योग पर्व - अध्याय 1-197: युद्ध की तैयारी और कृष्ण का शांति मिशन',
            english: 'Udyoga Parva - Chapters 1-197: War Preparations and Krishna\'s Peace Mission',
            sanskrit: 'उद्योगपर्व - अध्यायाः १-१९७: युद्धस्य तैयारी कृष्णस्य शान्तिमिशन च'
        },
        'bhishma-parva': {
            hindi: 'भीष्म पर्व - अध्याय 1-117: भगवद्गीता और युद्ध के पहले 10 दिन',
            english: 'Bhishma Parva - Chapters 1-117: Bhagavad Gita and First 10 Days of War',
            sanskrit: 'भीष्मपर्व - अध्यायाः १-११७: भगवद्गीता युद्धस्य प्रथम दश दिनानि च'
        },
        'drona-parva': {
            hindi: 'द्रोण पर्व - अध्याय 1-203: युद्ध के दिन 11-15',
            english: 'Drona Parva - Chapters 1-203: Days 11-15 of War',
            sanskrit: 'द्रोणपर्व - अध्यायाः १-२०३: युद्धस्य एकादश-पञ्चदश दिनानि'
        },
        'karna-parva': {
            hindi: 'कर्ण पर्व - अध्याय 1-96: युद्ध के दिन 16-17',
            english: 'Karna Parva - Chapters 1-96: Days 16-17 of War',
            sanskrit: 'कर्णपर्व - अध्यायाः १-९६: युद्धस्य षोडश-सप्तदश दिनानि'
        },
        'shalya-parva': {
            hindi: 'शल्य पर्व - अध्याय 1-64: युद्ध का अंतिम दिन',
            english: 'Shalya Parva - Chapters 1-64: Final Day of War',
            sanskrit: 'शल्यपर्व - अध्यायाः १-६४: युद्धस्य अन्तिम दिनम्'
        },
        'swargarohana-parva': {
            hindi: 'स्वर्गारोहण पर्व - अध्याय 1-5: स्वर्ग की यात्रा',
            english: 'Swargarohana Parva - Chapters 1-5: Journey to Heaven',
            sanskrit: 'स्वर्गारोहणपर्व - अध्यायाः १-५: स्वर्गस्य यात्रा'
        }
    };

    const chapterInfo = chapterMap[chapterRef] || chapterMap['adi-parva-1'];
    const demoText = {
        hindi: 'यह एक डेमो है। वास्तविक कार्यान्वयन में यहाँ पूरा अध्याय खुलेगा।',
        english: 'This is a demo. In actual implementation, the full chapter would open here.',
        sanskrit: 'एतत् प्रदर्शनम् अस्ति। वास्तविके कार्यान्वयने अत्र पूर्णः अध्यायः उद्घाट्यते।'
    };

    alert(`${chapterInfo[currentLanguage]}\n\n${demoText[currentLanguage]}`);
}

// Add entrance animations
window.addEventListener('load', function () {
    const events = document.querySelectorAll('.timeline-event');
    events.forEach((event, index) => {
        event.style.opacity = '0';
        event.style.transform = 'translateY(50px)';

        setTimeout(() => {
            event.style.transition = 'all 0.6s ease';
            event.style.opacity = '1';
            event.style.transform = 'translateY(0)';
        }, index * 300);
    });
});

// Add subtle parallax effect
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const timeline = document.querySelector('.timeline-line');
    if (timeline) {
        timeline.style.transform = `translateX(-50%) translateY(${scrolled * 0.1}px)`;
    }
});

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'96e9bef7717f1beb',t:'MTc1NTEwNDE4OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
