// students.js - Base de données des étudiants gaonais

// Coordonnées géographiques des villes ganonaises
const cityCoordinates = {
    "Libreville": { lat: 0.3936, lng: 9.4603 },
    "Port-Gentil": { lat: -0.7193, lng: 8.7815 },
    "Franceville": { lat: -1.6313, lng: 13.5831 },
    "Oyem": { lat: 1.5999, lng: 11.5794 },
    "Lambaréné": { lat: -0.7002, lng: 10.2410 },
    "Bitam": { lat: 2.0776, lng: 11.4963 },
    "Mouila": { lat: -1.8633, lng: 11.0567 },
    "Tchibanga": { lat: -2.8500, lng: 11.0167 },

    // France
    "Paris": { lat: 48.8566, lng: 2.3522 },
    "Lyon": { lat: 45.7640, lng: 4.8357 },
    "Marseille": { lat: 43.2965, lng: 5.3698 },
    "Toulouse": { lat: 43.6047, lng: 1.4442 },
    "Bordeaux": { lat: 44.8378, lng: -0.5792 },
    "Lille": { lat: 50.6292, lng: 3.0573 },

    // Europe
    "London": { lat: 51.5074, lng: -0.1278 },
    "Berlin": { lat: 52.5200, lng: 13.4050 },
    "Madrid": { lat: 40.4168, lng: -3.7038 },
    "Rome": { lat: 41.9028, lng: 12.4964 },
    "Amsterdam": { lat: 52.3676, lng: 4.9041 },
    "Brussels": { lat: 50.8503, lng: 4.3517 },
    "Vienna": { lat: 48.2100, lng: 16.3738 },
    "Zurich": { lat: 47.3769, lng: 8.5417 },
    "Warsaw": { lat: 52.2297, lng: 21.0122 },
    "Prague": { lat: 50.0755, lng: 14.4378 },

    // États-Unis
    "New York": { lat: 40.7128, lng: -74.0060 },
    "Los Angeles": { lat: 34.0522, lng: -118.2437 },
    "Chicago": { lat: 41.8781, lng: -87.6298 },
    "Houston": { lat: 29.7604, lng: -95.3698 },
    "Miami": { lat: 25.7617, lng: -80.1918 },
    "San Francisco": { lat: 37.7749, lng: -122.4194 },
    "Washington D.C.": { lat: 38.9072, lng: -77.0369 },
    "Boston": { lat: 42.3601, lng: -71.0589 },

    // Canada
    "Montréal": { lat: 45.5017, lng: -73.5673 },

    // Asie
    "Tokyo": { lat: 35.6895, lng: 139.6917 },
    "Beijing": { lat: 39.9042, lng: 116.4074 },
    "Seoul": { lat: 37.5665, lng: 126.9780 },
    "Shanghai": { lat: 31.2304, lng: 121.4737 },
    "Singapore": { lat: 1.3521, lng: 103.8198 },
    "Bangkok": { lat: 13.7563, lng: 100.5018 },
    "New Delhi": { lat: 28.6139, lng: 77.2090 },

    // Afrique
    "Casablanca": { lat: 33.5731, lng: -7.5898 },
    "Rabat": { lat: 34.0209, lng: -6.8416 },
    "Marrakech": { lat: 31.6295, lng: -7.9811 },
    "Dakar": { lat: 14.7167, lng: -17.4677 },
    "Abidjan": { lat: 5.3599, lng: -4.0083 },
    "Accra": { lat: 5.6037, lng: -0.1870 },
    "Lagos": { lat: 6.5244, lng: 3.3792 },
    "Kinshasa": { lat: -4.4419, lng: 15.2663 },
    "Nairobi": { lat: -1.2921, lng: 36.8219 },
    "Addis Ababa": { lat: 9.1450, lng: 40.4897 },
    "Johannesburg": { lat: -26.2041, lng: 28.0473 },
    "Cape Town": { lat: -33.9249, lng: 18.4241 },
    "Algiers": { lat: 36.7538, lng: 3.0588 },
    "Tunis": { lat: 36.8065, lng: 10.1815 },
    "Cairo": { lat: 30.0444, lng: 31.2357 }
};

// Base de données des étudiants gabonais
const students = [
    {
        id: 1,
        identificationNumber: "GA190885001",
        firstName: "Jean-Baptiste",
        lastName: "NZOGHE",
        birthPlace: "Franceville, Haut-Ogooué",
        currentStatus: "Mécanicien automobile",
        parcours: [
            {
                periode: "2018-présent",
                etablissement: "Garage Total Franceville",
                ville: "Franceville",
                niveau: "Mécanicien chef d'équipe",
                description: "Réparation et maintenance véhicules légers et poids lourds"
            },
            {
                periode: "2015-2018",
                etablissement: "Atelier Mécanique Moderne",
                ville: "Franceville",
                niveau: "Mécanicien",
                description: "Diagnostic et réparation moteurs essence et diesel"
            },
            {
                periode: "2013-2015",
                etablissement: "Centre de Formation Professionnelle",
                ville: "Franceville",
                niveau: "CAP Mécanique Auto",
                description: "Formation technique en mécanique automobile"
            },
            {
                periode: "2009-2013",
                etablissement: "Lycée Technique de Franceville",
                ville: "Franceville",
                niveau: "Baccalauréat Technique F1",
                description: "Construction mécanique et électrotechnique"
            },
            {
                periode: "2005-2009",
                etablissement: "Collège Charles Lwanga",
                ville: "Franceville",
                niveau: "Collège",
                description: "Formation générale orientation scientifique"
            },
            {
                periode: "1999-2005",
                etablissement: "École Primaire Sainte-Marie",
                ville: "Franceville",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention assez bien"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital de Franceville",
                ville: "Franceville",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Franceville, Province du Haut-Ogooué"
            }
        ]
    },
    {
        id: 2,
        identificationNumber: "GA280492002",
        firstName: "Marie-Claire",
        lastName: "OBIANG",
        birthPlace: "Port-Gentil, Ogooué-Maritime",
        currentStatus: "Infirmière coordinatrice",
        parcours: [
            {
                periode: "2022-présent",
                etablissement: "Hôpital Européen Georges Pompidou",
                ville: "Paris",
                niveau: "Infirmière coordinatrice service cardiologie",
                description: "Coordination équipes soignantes et protocoles thérapeutiques"
            },
            {
                periode: "2019-2022",
                etablissement: "Hôpital Saint-Louis",
                ville: "Paris",
                niveau: "Infirmière diplômée d'État",
                description: "Soins infirmiers en service médecine interne"
            },
            {
                periode: "2018-2019",
                etablissement: "Préfecture de Paris",
                ville: "Paris",
                niveau: "Équivalence diplôme",
                description: "Reconnaissance diplôme gabonais et stage d'adaptation"
            },
            {
                periode: "2014-2018",
                etablissement: "Institut National des Sciences de la Santé",
                ville: "Libreville",
                niveau: "Diplôme d'État Infirmier",
                description: "Formation théorique et stages pratiques hospitaliers"
            },
            {
                periode: "2011-2014",
                etablissement: "Lycée Léon Mba",
                ville: "Libreville",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre mention bien"
            },
            {
                periode: "2007-2011",
                etablissement: "Collège Bessieux",
                ville: "Port-Gentil",
                niveau: "Collège",
                description: "Formation générale avec option biologie"
            },
            {
                periode: "2001-2007",
                etablissement: "École Primaire Port-Gentil Centre",
                ville: "Port-Gentil",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention très bien"
            },
            {
                periode: "Naissance",
                etablissement: "Clinique Mandji",
                ville: "Port-Gentil",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Port-Gentil, Province de l'Ogooué-Maritime"
            }
        ]
    },
    {
        id: 3,
        identificationNumber: "GA051087003",
        firstName: "Patrick",
        lastName: "MBOUMBA",
        birthPlace: "Libreville, Estuaire",
        currentStatus: "Ingénieur logiciel",
        parcours: [
            {
                periode: "2020-présent",
                etablissement: "Sony Interactive Entertainment",
                ville: "Tokyo",
                niveau: "Senior Software Engineer",
                description: "Développement systèmes gaming et optimisation performance"
            },
            {
                periode: "2018-2020",
                etablissement: "Rakuten Inc.",
                ville: "Tokyo",
                niveau: "Software Developer",
                description: "Développement applications e-commerce et APIs"
            },
            {
                periode: "2017-2018",
                etablissement: "École de langue japonaise Naganuma",
                ville: "Tokyo",
                niveau: "Certification JLPT N2",
                description: "Apprentissage intensif langue japonaise"
            },
            {
                periode: "2012-2017",
                etablissement: "École Supérieure d'Informatique ESIG",
                ville: "Libreville",
                niveau: "Master Génie Logiciel",
                description: "Spécialisation développement et architecture logicielle"
            },
            {
                periode: "2009-2012",
                etablissement: "École Supérieure d'Informatique ESIG",
                ville: "Libreville",
                niveau: "Licence Informatique",
                description: "Programmation, bases de données, réseaux informatiques"
            },
            {
                periode: "2006-2009",
                etablissement: "Lycée National Léon Mba",
                ville: "Libreville",
                niveau: "Baccalauréat Série C",
                description: "Mathématiques et sciences physiques mention bien"
            },
            {
                periode: "2002-2006",
                etablissement: "Collège Sainte-Marie",
                ville: "Libreville",
                niveau: "Collège",
                description: "Formation générale avec excellence en mathématiques"
            },
            {
                periode: "1996-2002",
                etablissement: "École Primaire Plaine-Orety",
                ville: "Libreville",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention excellent"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital Central de Libreville",
                ville: "Libreville",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Libreville, Province de l'Estuaire"
            }
        ]
    },
    {
        id: 4,
        identificationNumber: "GA150694004",
        firstName: "Nadège",
        lastName: "ONDO",
        birthPlace: "Bitam, Woleu-Ntem",
        currentStatus: "Vendeuse en boutique",
        parcours: [
            {
                periode: "2019-présent",
                etablissement: "Boutique Élégance",
                ville: "Bitam",
                niveau: "Vendeuse responsable",
                description: "Vente prêt-à-porter féminin et conseil clientèle"
            },
            {
                periode: "2016-2019",
                etablissement: "Marché Central de Bitam",
                ville: "Bitam",
                niveau: "Commerçante indépendante",
                description: "Commerce produits cosmétiques et accessoires"
            },
            {
                periode: "2012-2016",
                etablissement: "Lycée de Bitam",
                ville: "Bitam",
                niveau: "Baccalauréat Série A4",
                description: "Lettres et sciences humaines"
            },
            {
                periode: "2008-2012",
                etablissement: "Collège de Bitam",
                ville: "Bitam",
                niveau: "Collège",
                description: "Formation générale littéraire"
            },
            {
                periode: "2002-2008",
                etablissement: "École Primaire Publique de Bitam",
                ville: "Bitam",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention passable"
            },
            {
                periode: "Naissance",
                etablissement: "Dispensaire de Bitam",
                ville: "Bitam",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Bitam, Province du Woleu-Ntem"
            }
        ]
    },
    {
        id: 5,
        identificationNumber: "GA220381005",
        firstName: "André",
        lastName: "BEKALE",
        birthPlace: "Mouila, Ngounié",
        currentStatus: "Professeur de mathématiques",
        parcours: [
            {
                periode: "2015-présent",
                etablissement: "Lycée Jean-Baptiste Obiang",
                ville: "Lyon",
                niveau: "Professeur certifié mathématiques",
                description: "Enseignement classes de seconde à terminale"
            },
            {
                periode: "2013-2015",
                etablissement: "IUFM Lyon",
                ville: "Lyon",
                niveau: "Master MEEF Mathématiques",
                description: "Formation pédagogique et didactique disciplinaire"
            },
            {
                periode: "2010-2013",
                etablissement: "Université Claude Bernard Lyon 1",
                ville: "Lyon",
                niveau: "Licence Mathématiques",
                description: "Mathématiques pures et appliquées"
            },
            {
                periode: "2007-2010",
                etablissement: "Lycée National Omar Bongo",
                ville: "Libreville",
                niveau: "Baccalauréat Série C",
                description: "Mathématiques et sciences physiques mention très bien"
            },
            {
                periode: "2003-2007",
                etablissement: "Collège de Mouila",
                ville: "Mouila",
                niveau: "Collège",
                description: "Formation générale avec excellence en sciences exactes"
            },
            {
                periode: "1997-2003",
                etablissement: "École Primaire de Mouila",
                ville: "Mouila",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention très bien"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital de Mouila",
                ville: "Mouila",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Mouila, Province de la Ngounié"
            }
        ]
    },
    {
        id: 6,
        identificationNumber: "GA180999006",
        firstName: "Christelle",
        lastName: "NGUEMA",
        birthPlace: "Tchibanga, Nyanga",
        currentStatus: "Aide-soignante",
        parcours: [
            {
                periode: "2021-présent",
                etablissement: "EHPAD Les Jardins",
                ville: "Bordeaux",
                niveau: "Aide-soignante",
                description: "Soins d'hygiène et confort personnes âgées"
            },
            {
                periode: "2019-2021",
                etablissement: "Institut de Formation Aide-Soignant",
                ville: "Bordeaux",
                niveau: "Diplôme d'État Aide-Soignant",
                description: "Formation théorique et stages pratiques"
            },
            {
                periode: "2017-2019",
                etablissement: "Hôpital de Tchibanga",
                ville: "Tchibanga",
                niveau: "Agent hospitalier",
                description: "Assistance soignants et entretien locaux médicaux"
            },
            {
                periode: "2015-2017",
                etablissement: "Lycée de Tchibanga",
                ville: "Tchibanga",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre"
            },
            {
                periode: "2011-2015",
                etablissement: "Collège de Tchibanga",
                ville: "Tchibanga",
                niveau: "Collège",
                description: "Formation générale scientifique"
            },
            {
                periode: "2005-2011",
                etablissement: "École Primaire Sainte-Thérèse",
                ville: "Tchibanga",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention bien"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital Régional de Tchibanga",
                ville: "Tchibanga",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Tchibanga, Province de la Nyanga"
            }
        ]
    },
    {
        id: 7,
        identificationNumber: "GA090286007",
        firstName: "Rodrigue",
        lastName: "MINTSA",
        birthPlace: "Lambaréné, Moyen-Ogooué",
        currentStatus: "Chauffeur de taxi",
        parcours: [
            {
                periode: "2018-présent",
                etablissement: "Taxi Indépendant",
                ville: "Lambaréné",
                niveau: "Chauffeur professionnel",
                description: "Transport urbain et inter-urbain"
            },
            {
                periode: "2015-2018",
                etablissement: "Société de Transport Ogooué",
                ville: "Lambaréné",
                niveau: "Chauffeur salarié",
                description: "Transport personnel et marchandises"
            },
            {
                periode: "2014-2015",
                etablissement: "Auto-École Lambaréné",
                ville: "Lambaréné",
                niveau: "Permis transport public",
                description: "Certification conduite véhicules de transport"
            },
            {
                periode: "2001-2004",
                etablissement: "Lycée Albert Schweitzer",
                ville: "Lambaréné",
                niveau: "Classe de première",
                description: "Arrêt études pour raisons familiales"
            },
            {
                periode: "1997-2001",
                etablissement: "Collège de Lambaréné",
                ville: "Lambaréné",
                niveau: "Collège",
                description: "Formation générale"
            },
            {
                periode: "1991-1997",
                etablissement: "École Primaire Schweitzer",
                ville: "Lambaréné",
                niveau: "Primaire",
                description: "Certificat d'études primaires"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital Albert Schweitzer",
                ville: "Lambaréné",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Lambaréné, Province du Moyen-Ogooué"
            }
        ]
    },
    {
        id: 8,
        identificationNumber: "GA140690008",
        firstName: "Sylvie",
        lastName: "BIKORO",
        birthPlace: "Libreville, Estuaire",
        currentStatus: "Cuisinière en restauration",
        parcours: [
            {
                periode: "2020-présent",
                etablissement: "Restaurant Le Soleil d'Afrique",
                ville: "Marseille",
                niveau: "Chef de partie",
                description: "Cuisine traditionnelle africaine et française"
            },
            {
                periode: "2018-2020",
                etablissement: "Brasserie du Vieux-Port",
                ville: "Marseille",
                niveau: "Commis de cuisine",
                description: "Préparation plats et assistance chef cuisinier"
            },
            {
                periode: "2016-2018",
                etablissement: "Formation continue",
                ville: "Marseille",
                niveau: "CAP Cuisine",
                description: "Techniques culinaires et hygiène alimentaire"
            },
            {
                periode: "2008-2016",
                etablissement: "Restaurant Chez Mama",
                ville: "Libreville",
                niveau: "Cuisinière",
                description: "Cuisine locale et plats européens"
            },
            {
                periode: "2006-2008",
                etablissement: "Lycée Technique de Libreville",
                ville: "Libreville",
                niveau: "BEP Hôtellerie-Restauration",
                description: "Formation hôtelière et restauration"
            },
            {
                periode: "2002-2006",
                etablissement: "Collège Raponda-Walker",
                ville: "Libreville",
                niveau: "Collège",
                description: "Formation générale"
            },
            {
                periode: "1996-2002",
                etablissement: "École Primaire Nzeng-Ayong",
                ville: "Libreville",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention assez bien"
            },
            {
                periode: "Naissance",
                etablissement: "Maternité de Libreville",
                ville: "Libreville",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Libreville, Province de l'Estuaire"
            }
        ]
    },
    {
        id: 9,
        identificationNumber: "GA250885009",
        firstName: "Jules",
        lastName: "ESSONO",
        birthPlace: "Oyem, Woleu-Ntem",
        currentStatus: "Ingénieur forestier",
        parcours: [
            {
                periode: "2019-présent",
                etablissement: "Société Forestière du Gabon",
                ville: "Libreville",
                niveau: "Ingénieur forestier senior",
                description: "Gestion durable forêts et certification FSC"
            },
            {
                periode: "2016-2019",
                etablissement: "Ministère des Eaux et Forêts",
                ville: "Libreville",
                niveau: "Ingénieur forestier",
                description: "Contrôle exploitation forestière et reboisement"
            },
            {
                periode: "2010-2016",
                etablissement: "École Nationale des Eaux et Forêts",
                ville: "Libreville",
                niveau: "Ingénieur des Eaux et Forêts",
                description: "Formation sylviculture et gestion environnementale"
            },
            {
                periode: "2007-2010",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence Biologie",
                description: "Biologie végétale et écologie forestière"
            },
            {
                periode: "2004-2007",
                etablissement: "Lycée d'Oyem",
                ville: "Oyem",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre mention bien"
            },
            {
                periode: "2000-2004",
                etablissement: "Collège d'Oyem",
                ville: "Oyem",
                niveau: "Collège",
                description: "Formation générale scientifique"
            },
            {
                periode: "1994-2000",
                etablissement: "École Primaire d'Oyem",
                ville: "Oyem",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention très bien"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital Régional d'Oyem",
                ville: "Oyem",
                niveau: "Naissance",
                description: "Déclaration à la Mairie d'Oyem, Province du Woleu-Ntem"
            }
        ]
    },
    {
        id: 10,
        identificationNumber: "GA110491010",
        firstName: "Fatima",
        lastName: "MAVOUNGOU",
        birthPlace: "Port-Gentil, Ogooué-Maritime",
        currentStatus: "Secrétaire administrative",
        parcours: [
            {
                periode: "2017-présent",
                etablissement: "Mairie de Toulouse",
                ville: "Toulouse",
                niveau: "Secrétaire administrative",
                description: "Gestion dossiers administratifs et accueil public"
            },
            {
                periode: "2015-2017",
                etablissement: "Cabinet d'avocats Mercier & Associés",
                ville: "Toulouse",
                niveau: "Assistante juridique",
                description: "Rédaction actes et suivi dossiers clients"
            },
            {
                periode: "2013-2015",
                etablissement: "École Secrétariat Médical",
                ville: "Toulouse",
                niveau: "BTS Assistant de Gestion",
                description: "Gestion administrative et comptable"
            },
            {
                periode: "2009-2013",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence Administration",
                description: "Sciences administratives et gestion publique"
            },
            {
                periode: "2006-2009",
                etablissement: "Lycée Technique de Port-Gentil",
                ville: "Port-Gentil",
                niveau: "Baccalauréat Série G2",
                description: "Techniques administratives et gestion"
            },
            {
                periode: "2002-2006",
                etablissement: "Collège Bessieux",
                ville: "Port-Gentil",
                niveau: "Collège",
                description: "Formation générale"
            },
            {
                periode: "1996-2002",
                etablissement: "École Primaire Quartier Louis",
                ville: "Port-Gentil",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention bien"
            },
            {
                periode: "Naissance",
                etablissement: "Clinique Mandji",
                ville: "Port-Gentil",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Port-Gentil, Province de l'Ogooué-Maritime"
            }
        ]
    },
    {
        id: 11,
        identificationNumber: "GA240611011",
        firstName: "François",
        lastName: "ANGUE",
        birthPlace: "Port-Gentil, Ogooué-Maritime",
        currentStatus: "Data Analyst",
        parcours: [
            {
                periode: "2024-présent",
                etablissement: "Microsoft Corporation",
                ville: "New York",
                niveau: "Data Analyst",
                description: "Analyse données clients et intelligence business"
            },
            {
                periode: "2021-2024",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence en Informatique",
                description: "Formation en développement logiciel et bases de données"
            },
            {
                periode: "2018-2021",
                etablissement: "Lycée Technique de Port-Gentil",
                ville: "Port-Gentil",
                niveau: "Baccalauréat Série C",
                description: "Mathématiques et sciences physiques mention très bien"
            },
            {
                periode: "2014-2018",
                etablissement: "Collège Sainte-Marie",
                ville: "Port-Gentil",
                niveau: "Collège",
                description: "Formation générale orientation scientifique"
            },
            {
                periode: "2008-2014",
                etablissement: "École Primaire Port-Gentil Centre",
                ville: "Port-Gentil",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention excellent"
            },
            {
                periode: "Naissance",
                etablissement: "Clinique Mandji",
                ville: "Port-Gentil",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Port-Gentil, Province de l'Ogooué-Maritime"
            }
        ]
    },
    {
        id: 12,
        identificationNumber: "GA240903012",
        firstName: "Nadine",
        lastName: "OGANDAGA",
        birthPlace: "Oyem, Woleu-Ntem",
        currentStatus: "Sage-femme",
        parcours: [
            {
                periode: "2024-présent",
                etablissement: "Hôpital Mohammed V",
                ville: "Rabat",
                niveau: "Sage-femme",
                description: "Suivi grossesses et accouchements"
            },
            {
                periode: "2020-2023",
                etablissement: "Institut Supérieur des Sciences de la Santé",
                ville: "Casablanca",
                niveau: "Diplôme de Sage-femme",
                description: "Formation obstétrique et néonatologie"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée d'Oyem",
                ville: "Oyem",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre mention bien"
            },
            {
                periode: "2013-2017",
                etablissement: "Collège d'Oyem",
                ville: "Oyem",
                niveau: "Collège",
                description: "Formation générale scientifique"
            },
            {
                periode: "2007-2013",
                etablissement: "École Primaire d'Oyem",
                ville: "Oyem",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention bien"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital Régional d'Oyem",
                ville: "Oyem",
                niveau: "Naissance",
                description: "Déclaration à la Mairie d'Oyem, Province du Woleu-Ntem"
            }
        ]
    },
    {
        id: 13,
        identificationNumber: "GA240725013",
        firstName: "Alain",
        lastName: "MBOUMBA",
        birthPlace: "Lambaréné, Moyen-Ogooué",
        currentStatus: "Ingénieur BTP",
        parcours: [
            {
                periode: "2023-présent",
                etablissement: "Entreprise Générale du Sénégal",
                ville: "Dakar",
                niveau: "Ingénieur travaux publics",
                description: "Supervision chantiers infrastructures routières"
            },
            {
                periode: "2021-2024",
                etablissement: "Université des Sciences et Techniques",
                ville: "Franceville",
                niveau: "Master en Génie Civil",
                description: "Spécialisation infrastructures et bâtiments"
            },
            {
                periode: "2018-2021",
                etablissement: "Université des Sciences et Techniques",
                ville: "Franceville",
                niveau: "Licence Génie Civil",
                description: "Fondements techniques de la construction"
            },
            {
                periode: "2015-2018",
                etablissement: "Lycée Technique de Lambaréné",
                ville: "Lambaréné",
                niveau: "Baccalauréat STI",
                description: "Sciences et technologies industrielles mention assez bien"
            },
            {
                periode: "2011-2015",
                etablissement: "Collège de Lambaréné",
                ville: "Lambaréné",
                niveau: "Collège",
                description: "Formation générale technique"
            },
            {
                periode: "2005-2011",
                etablissement: "École Primaire Schweitzer",
                ville: "Lambaréné",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention assez bien"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital Albert Schweitzer",
                ville: "Lambaréné",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Lambaréné, Province du Moyen-Ogooué"
            }
        ]
    },
    {
        id: 14,
        identificationNumber: "GA240818014",
        firstName: "Léa",
        lastName: "NTSAME",
        birthPlace: "Mouila, Ngounié",
        currentStatus: "Professeure de français",
        parcours: [
            {
                periode: "2024-présent",
                etablissement: "Lycée Blaise Diagne",
                ville: "Dakar",
                niveau: "Professeure certifiée français",
                description: "Enseignement littérature française et africaine"
            },
            {
                periode: "2020-2023",
                etablissement: "École Normale Supérieure",
                ville: "Libreville",
                niveau: "Master en Lettres Modernes",
                description: "Spécialisation littérature francophone"
            },
            {
                periode: "2017-2020",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence Lettres Modernes",
                description: "Littérature française et linguistique"
            },
            {
                periode: "2014-2017",
                etablissement: "Lycée de Mouila",
                ville: "Mouila",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option anglais renforcé mention bien"
            },
            {
                periode: "2010-2014",
                etablissement: "Collège de Mouila",
                ville: "Mouila",
                niveau: "Collège",
                description: "Formation générale littéraire"
            },
            {
                periode: "2004-2010",
                etablissement: "École Primaire de Mouila",
                ville: "Mouila",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention très bien"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital de Mouila",
                ville: "Mouila",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Mouila, Province de la Ngounié"
            }
        ]
    },
    {
        id: 15,
        identificationNumber: "GA240604015",
        firstName: "Thierry",
        lastName: "EDOU",
        birthPlace: "Tchibanga, Nyanga",
        currentStatus: "Pharmacien clinicien",
        parcours: [
            {
                periode: "2024-présent",
                etablissement: "Hôpital Général de Montréal",
                ville: "Montréal",
                niveau: "Pharmacien clinicien",
                description: "Pharmacie hospitalière et conseil thérapeutique"
            },
            {
                periode: "2019-2024",
                etablissement: "Faculté de Pharmacie UOB",
                ville: "Libreville",
                niveau: "Doctorat en Pharmacie",
                description: "Formation complète en sciences pharmaceutiques"
            },
            {
                periode: "2016-2019",
                etablissement: "Lycée de Tchibanga",
                ville: "Tchibanga",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et chimie mention très bien"
            },
            {
                periode: "2012-2016",
                etablissement: "Collège de Tchibanga",
                ville: "Tchibanga",
                niveau: "Collège",
                description: "Formation générale scientifique"
            },
            {
                periode: "2006-2012",
                etablissement: "École Primaire Sainte-Thérèse",
                ville: "Tchibanga",
                niveau: "Primaire",
                description: "Certificat d'études primaires mention excellent"
            },
            {
                periode: "Naissance",
                etablissement: "Hôpital Régional de Tchibanga",
                ville: "Tchibanga",
                niveau: "Naissance",
                description: "Déclaration à la Mairie de Tchibanga, Province de la Nyanga"
            }
        ]
    },
    {
        id: 16,
        identificationNumber: "GA240911016",
        firstName: "Aline",
        lastName: "BILOGO",
        birthPlace: "Bitam, Woleu-Ntem",
        currentStatus: "Architecte",
        parcours: [
            {
                periode: "2020-2024",
                etablissement: "École d'Architecture",
                ville: "Libreville",
                niveau: "Master en Architecture",
                description: "Conception architecturale et urbanisme tropical"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée de Bitam",
                ville: "Bitam",
                niveau: "Baccalauréat STI",
                description: "Sciences et technologies industrielles"
            }
        ]
    },
    {
        id: 17,
        identificationNumber: "GA240706017",
        firstName: "Jean",
        lastName: "NZOGHE",
        birthPlace: "Libreville, Estuaire",
        currentStatus: "Étudiant en Master",
        parcours: [
            {
                periode: "2021-2024",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence en Mathématiques",
                description: "Formation théorique et appliquée en mathématiques"
            },
            {
                periode: "2018-2021",
                etablissement: "Lycée Léon Mba",
                ville: "Libreville",
                niveau: "Baccalauréat Série C",
                description: "Mathématiques et sciences physiques"
            }
        ]
    },
    {
        id: 18,
        identificationNumber: "GA240820018",
        firstName: "Marie",
        lastName: "OBAME",
        birthPlace: "Port-Gentil, Ogooué-Maritime",
        currentStatus: "Ingénieur",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "École Polytechnique de Masuku",
                ville: "Franceville",
                niveau: "Master en Génie Pétrolier",
                description: "Spécialisation en exploration et production"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée de Port-Gentil",
                ville: "Port-Gentil",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre"
            }
        ]
    },
    {
        id: 19,
        identificationNumber: "GA240613019",
        firstName: "Paul",
        lastName: "MOUGANDA",
        birthPlace: "Franceville, Haut-Ogooué",
        currentStatus: "Médecin",
        parcours: [
            {
                periode: "2019-2024",
                etablissement: "Faculté de Médecine UOB",
                ville: "Libreville",
                niveau: "Doctorat en Médecine",
                description: "Formation médicale complète avec stages hospitaliers"
            },
            {
                periode: "2016-2019",
                etablissement: "Lycée Technique Omar Bongo",
                ville: "Franceville",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre"
            }
        ]
    },
    {
        id: 20,
        identificationNumber: "GA240907020",
        firstName: "Sandrine",
        lastName: "MOUSSOUNDA",
        birthPlace: "Oyem, Woleu-Ntem",
        currentStatus: "Avocat",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "École des Avocats",
                ville: "Libreville",
                niveau: "Master en Droit des Affaires",
                description: "Spécialisation en droit commercial et des sociétés"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée d'Oyem",
                ville: "Oyem",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option économie et gestion"
            }
        ]
    },
    {
        id: 21,
        identificationNumber: "GA240709021",
        firstName: "Rodrigue",
        lastName: "KOUMBA",
        birthPlace: "Lambaréné, Moyen-Ogooué",
        currentStatus: "Informaticien",
        parcours: [
            {
                periode: "2021-2024",
                etablissement: "Institut Africain d'Informatique",
                ville: "Libreville",
                niveau: "Licence en Informatique",
                description: "Formation en développement logiciel et bases de données"
            },
            {
                periode: "2018-2021",
                etablissement: "Lycée Technique de Lambaréné",
                ville: "Lambaréné",
                niveau: "Baccalauréat Série C",
                description: "Mathématiques et sciences physiques"
            }
        ]
    },
    {
        id: 22,
        identificationNumber: "GA240815022",
        firstName: "Ornella",
        lastName: "NDONG",
        birthPlace: "Bitam, Woleu-Ntem",
        currentStatus: "Professeure",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "École Normale Supérieure",
                ville: "Libreville",
                niveau: "Master en Didactique",
                description: "Spécialisation en enseignement"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée de Bitam",
                ville: "Bitam",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option anglais renforcé"
            }
        ]
    },
        {
        id: 23,
        identificationNumber: "GA240622023",
        firstName: "Patrick",
        lastName: "ONDO",
        birthPlace: "Mouila, Ngounié",
        currentStatus: "Ingénieur",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "École Polytechnique de Masuku",
                ville: "Franceville",
                niveau: "Master en Génie Pétrolier",
                description: "Spécialisation en exploration et production"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée de Mouila",
                ville: "Mouila",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre"
            }
        ]
    },
    {
        id: 24,
        identificationNumber: "GA240913024",
        firstName: "Sylvie",
        lastName: "MEKAME",
        birthPlace: "Tchibanga, Nyanga",
        currentStatus: "Pharmacienne",
        parcours: [
            {
                periode: "2019-2024",
                etablissement: "Faculté de Pharmacie UOB",
                ville: "Libreville",
                niveau: "Doctorat en Pharmacie",
                description: "Formation complète en sciences pharmaceutiques"
            },
            {
                periode: "2016-2019",
                etablissement: "Collège de Tchibanga",
                ville: "Tchibanga",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et chimie"
            }
        ]
    },
    {
        id: 25,
        identificationNumber: "GA240705025",
        firstName: "Clément",
        lastName: "BIBANG",
        birthPlace: "Libreville, Estuaire",
        currentStatus: "Architecte",
        parcours: [
            {
                periode: "2020-2024",
                etablissement: "École d'Architecture",
                ville: "Libreville",
                niveau: "Master en Architecture",
                description: "Conception architecturale et urbanisme tropical"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée Léon Mba",
                ville: "Libreville",
                niveau: "Baccalauréat STI",
                description: "Sciences et technologies industrielles"
            }
        ]
    },
    {
        id: 26,
        identificationNumber: "GA240811026",
        firstName: "Estelle",
        lastName: "MENGUE",
        birthPlace: "Port-Gentil, Ogooué-Maritime",
        currentStatus: "Économiste",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Master en Droit des Affaires",
                description: "Spécialisation en droit commercial et des sociétés"
            },
            {
                periode: "2017-2020",
                etablissement: "Collège Sainte-Marie",
                ville: "Port-Gentil",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option économie ou anglais"
            }
        ]
    },
    {
        id: 27,
        identificationNumber: "GA240619027",
        firstName: "François",
        lastName: "ANGUE",
        birthPlace: "Franceville, Haut-Ogooué",
        currentStatus: "Journaliste",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "Université des Sciences et Techniques",
                ville: "Franceville",
                niveau: "Licence LLCE Anglais",
                description: "Langues, littératures et civilisations étrangères"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée Technique Omar Bongo",
                ville: "Franceville",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option anglais renforcé"
            }
        ]
    },
    {
        id: 28,
        identificationNumber: "GA240908028",
        firstName: "Nadine",
        lastName: "OGANDAGA",
        birthPlace: "Oyem, Woleu-Ntem",
        currentStatus: "Infirmier",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "CHU de Libreville",
                ville: "Libreville",
                niveau: "Licence en Sciences Infirmières",
                description: "Formation en soins infirmiers et gestion hospitalière"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée d'Oyem",
                ville: "Oyem",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre"
            }
        ]
    },
    {
        id: 29,
        identificationNumber: "GA240710029",
        firstName: "Alain",
        lastName: "MBOUMBA",
        birthPlace: "Lambaréné, Moyen-Ogooué",
        currentStatus: "Chercheur",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "Université des Sciences et Techniques",
                ville: "Franceville",
                niveau: "Master en Génie Civil",
                description: "Fondements techniques de la construction"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée Technique de Lambaréné",
                ville: "Lambaréné",
                niveau: "Baccalauréat STI",
                description: "Sciences et technologies industrielles"
            }
        ]
    },
    {
        id: 30,
        identificationNumber: "GA240816030",
        firstName: "Léa",
        lastName: "NTSAME",
        birthPlace: "Mouila, Ngounié",
        currentStatus: "Professeure",
        parcours: [
            {
                periode: "2020-2023",
                etablissement: "École Normale Supérieure",
                ville: "Libreville",
                niveau: "Master en Didactique",
                description: "Spécialisation en enseignement"
            },
            {
                periode: "2017-2020",
                etablissement: "Lycée de Mouila",
                ville: "Mouila",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option anglais renforcé"
            }
        ]
    },
];

// Exporter les données pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { students, cityCoordinates };
}