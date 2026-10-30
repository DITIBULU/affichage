/* =====================================================================
   CONFIGURATION DE L'AFFICHAGE  ·  EKRAN AYARLARI
   Modifiez ce fichier puis rechargez la page (touche F5) sur la télé.
   L'écran se recharge aussi tout seul chaque nuit à 3h30.

   Les textes s'écrivent en deux langues : { fr: "…", tr: "…" }
   ===================================================================== */
window.CONFIG = {

  languePrincipale: "tr",   // "tr" = turc en grand, français en dessous · "fr" = l'inverse

  mosquee: {
    nom: "Mosquée DITIB de Montargis",
    nomTr: "DITIB Montargis Camii",
    ville: "Montargis",
    logo: "logo.jpg"
  },

  position: { latitude: 47.9977, longitude: 2.7327, fuseau: "Europe/Paris" },

  /* ---------- Calcul des horaires de prière ----------
     Réglage par défaut : méthode Diyanet (İmsak 18°, Yatsı 17°, avec les
     « temkin » : Güneş -7, Öğle +5, İkindi +4, Akşam +7 minutes).
     Si la mosquée a le calendrier officiel DITIB, remplissez plutôt le
     fichier horaires-officiels.js : ses horaires sont alors prioritaires. */
  calcul: {
    angleFajr: 18,
    angleIsha: 17,
    asr: "standard",            // "standard" ou "hanafi"
    ajustements: { fajr: 0, chourouk: -7, dhuhr: 5, asr: 4, maghrib: 7, isha: 0 },
    ishaApresMaghrib: null
  },

  /* Heure de début de la prière : 0 = à l'heure exacte de l'ezan,
     nombre = minutes après l'ezan, heure fixe "HH:MM",
     ou "gunes-30" = 30 minutes avant Güneş (Sabah namazı) */
  iqama: { fajr: "gunes-30", dhuhr: 0, asr: 0, maghrib: 0, isha: 0 },
  afficherKamet: false,     // true = afficher une 2e colonne « Kamet » dans le tableau
  ecranAvantKamet: 15,      // l'écran « Namaza kalan süre » apparaît au plus 15 min avant le début

  /* Vendredi : Cuma namazı remplace Öğle */
  joumoua: { heure: "13:30", dureeKhutba: 30 },

  dureeEcranPriere: 10,     // minutes d'écran « Prière en cours » après le kamet
  hijriAjustement: 0,       // décaler la date hégirienne de +1 / -1 jour si besoin

  durees: { annonces: 15, conduites: 18, hadiths: 20, affiches: 12, meteo: 12 },
  meteoToutesLes: 6,

  /* ---------- Bandeau défilant ---------- */
  bandeau: [
    { fr: "Bienvenue dans votre mosquée", tr: "Camimize hoş geldiniz — Esselâmü aleyküm" },
    { fr: "Mettez votre téléphone en silencieux", tr: "Telefonunuzu sessize alınız" },
    { fr: "Stationnez sans gêner les riverains", tr: "Komşuları rahatsız etmeden park ediniz" },
    { fr: "Gardez les salles d'ablutions propres", tr: "Abdesthaneleri temiz bırakınız" },
    { fr: "Sortez calmement après les prières du soir et du matin", tr: "Akşam ve sabah namazlarından sonra sessizce çıkınız" }
  ],

  /* ---------- Annonces (texte) ----------
     du / au (facultatifs) : l'annonce n'apparaît qu'entre ces dates.       */
  annonces: [
    {
      etiquette: { fr: "Exemple d'annonce", tr: "Örnek duyuru" },
      titre: { fr: "Cours de Coran pour les enfants", tr: "Çocuklar için Kur'an kursu" },
      texte: { fr: "Les inscriptions sont ouvertes. Renseignez-vous après la prière.",
               tr: "Kayıtlar başladı. Namazdan sonra bilgi alabilirsiniz." },
      details: [ { fr: "Mercredi et samedi", tr: "Çarşamba ve Cumartesi" },
                 { fr: "Salle de cours", tr: "Ders salonu" } ]
      // du: "2026-11-01", au: "2026-12-15"
    }
  ],

  /* ---------- Affiches (images JPG / PNG dans le dossier « affiches ») ---------- */
  affiches: [
    { fichier: "affiches/stationnement.svg" },
    { fichier: "affiches/sabah-namazi.webp" },
    { fichier: "affiches/chaussettes.svg" },
    { fichier: "affiches/telephone.svg" },
    { fichier: "affiches/exemple-affiche.svg" }
    // { fichier: "affiches/kermesse.jpg", du: "2026-11-01", au: "2026-11-20" }
  ],

  /* ---------- Bonnes conduites · Camide edep ----------
     icone : chaussettes, rangs, parking, telephone, chaussures, devant, voisinage, enfants */
  conduites: [
    {
      icone: "rangs",
      titre: { fr: "Serrez et alignez les rangs", tr: "Safları sık ve düzgün tutunuz" },
      points: [
        { fr: "Épaule contre épaule, pied contre pied", tr: "Omuz omuza, ayak ayağa" },
        { fr: "Complétez d'abord le premier rang", tr: "Önce ön safı tamamlayınız" },
        { fr: "Alignez-vous sur la ligne du tapis", tr: "Halıdaki çizgiye göre hizalanınız" }
      ],
      reference: {
        fr: "« Égalisez vos rangs, car l'égalisation des rangs fait partie de l'accomplissement de la prière. »",
        tr: "« Saflarınızı düz tutunuz; çünkü safları düzgün tutmak namazı ikame etmenin bir parçasıdır. »",
        source: "Al-Bukhârî / Buhârî (723)"
      }
    },
    {
      icone: "chaussures",
      titre: { fr: "Chaussures et propreté", tr: "Ayakkabılar ve temizlik" },
      points: [
        { fr: "Rangez vos chaussures dans les casiers", tr: "Ayakkabılarınızı dolaplara yerleştiriniz" },
        { fr: "Laissez les salles d'ablutions propres et sèches", tr: "Abdesthaneleri temiz ve kuru bırakınız" },
        { fr: "Respectez les tapis, lieu de prosternation", tr: "Secde edilen halılara özen gösteriniz" }
      ]
    },
    {
      icone: "voisinage",
      titre: { fr: "Respectez le voisinage", tr: "Komşularımıza saygılı olalım" },
      points: [
        { fr: "Sortez calmement et parlez à voix basse", tr: "Camiden sessizce çıkınız, alçak sesle konuşunuz" },
        { fr: "Pas de klaxon ni de portières claquées la nuit", tr: "Gece korna çalmayınız, kapıları çarpmayınız" }
      ]
    },
    {
      icone: "enfants",
      titre: { fr: "Accompagnez vos enfants", tr: "Çocuklarınıza eşlik ediniz" },
      points: [
        { fr: "Gardez-les près de vous pendant la prière", tr: "Namaz sırasında onları yanınızda tutunuz" },
        { fr: "La mosquée est aussi leur maison : apprenez-leur à la respecter", tr: "Cami onların da evidir: ona saygıyı öğretiniz" }
      ]
    }
  ],

  /* ---------- Hadiths · Hadis-i Şerifler ----------
     Faites valider les textes et traductions par l'imam avant diffusion. */
  hadiths: [
    { ar: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
      fr: "Les actes ne valent que par les intentions.",
      tr: "Ameller ancak niyetlere göredir.",
      source: "Al-Bukhârî / Buhârî (1), Muslim / Müslim (1907)" },
    /* Autres hadiths mis de côté (un seul hadith affiché pour l instant).
       Pour en réactiver, déplacez-les au-dessus de cette ligne.
    { ar: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
      fr: "Ton sourire à ton frère est une aumône.",
      tr: "Kardeşinin yüzüne gülümsemen senin için bir sadakadır.",
      source: "At-Tirmidhî / Tirmizî (1956)" },
    { ar: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      fr: "Aucun de vous n'est vraiment croyant tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même.",
      tr: "Sizden biriniz, kendisi için istediğini kardeşi için de istemedikçe gerçek anlamda iman etmiş olmaz.",
      source: "Al-Bukhârî / Buhârî (13), Muslim / Müslim (45)" },
    { ar: "الطُّهُورُ شَطْرُ الْإِيمَانِ",
      fr: "La purification est la moitié de la foi.",
      tr: "Temizlik imanın yarısıdır.",
      source: "Muslim / Müslim (223)" },
    { ar: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
      fr: "Que celui qui croit en Allah et au Jour dernier dise du bien ou qu'il se taise.",
      tr: "Allah'a ve âhiret gününe iman eden, ya hayır söylesin ya da sussun.",
      source: "Al-Bukhârî / Buhârî (6018), Muslim / Müslim (47)" },
    { ar: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      fr: "Le musulman est celui dont les musulmans sont à l'abri de sa langue et de sa main.",
      tr: "Müslüman, dilinden ve elinden Müslümanların emin olduğu kimsedir.",
      source: "Al-Bukhârî / Buhârî (10), Muslim / Müslim (40)" },
    { ar: "صَلَاةُ الْجَمَاعَةِ تَفْضُلُ صَلَاةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً",
      fr: "La prière en groupe surpasse la prière individuelle de vingt-sept degrés.",
      tr: "Cemaatle kılınan namaz, tek başına kılınan namazdan yirmi yedi derece daha faziletlidir.",
      source: "Al-Bukhârî / Buhârî (645), Muslim / Müslim (650)" },
    { ar: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
      fr: "La bonne parole est une aumône.",
      tr: "Güzel söz sadakadır.",
      source: "Al-Bukhârî / Buhârî (2989), Muslim / Müslim (1009)" }
    */
  ]
};
