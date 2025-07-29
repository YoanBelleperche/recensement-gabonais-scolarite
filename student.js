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
    "Tchibanga": { lat: -2.8500, lng: 11.0167 }
};

// Base de données des étudiants gaonais

const students = [
    {
        id: 1,
        identificationNumber: "GA240115001",
        firstName: "Jean-Baptiste",
        lastName: "NZOGHE",
        birthPlace: "Libreville, Estuaire",
        currentStatus: "Étudiant en Master",
        parcours: [
            {
                periode: "2018-2023",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence en Informatique",
                description: "Formation en développement logiciel et bases de données"
            },
            {
                periode: "2015-2018",
                etablissement: "Lycée Léon Mba",
                ville: "Libreville",
                niveau: "Baccalauréat Série C",
                description: "Spécialisation mathématiques et sciences physiques"
            },
            {
                periode: "2012-2015",
                etablissement: "Collège Sainte-Marie",
                ville: "Port-Gentil",
                niveau: "Collège",
                description: "Formation générale avec mention très bien"
            }
        ]
    },
    {
        id: 2,
        identificationNumber: "GA240315002",
        firstName: "Marie-Claire",
        lastName: "OBAME",
        birthPlace: "Port-Gentil, Ogooué-Maritime",
        currentStatus: "Professeure d'anglais",
        parcours: [
            {
                periode: "2020-2022",
                etablissement: "École Normale Supérieure",
                ville: "Libreville",
                niveau: "Master en Didactique",
                description: "Spécialisation en enseignement de l'anglais"
            },
            {
                periode: "2016-2020",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence LLCE Anglais",
                description: "Langues, littératures et civilisations étrangères"
            },
            {
                periode: "2013-2016",
                etablissement: "Lycée National Léon Mba",
                ville: "Libreville",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option anglais renforcé"
            }
        ]
    },
    {
        id: 3,
        identificationNumber: "GA240712003",
        firstName: "Paul",
        lastName: "MOUGANDA",
        birthPlace: "Franceville, Haut-Ogooué",
        currentStatus: "Ingénieur pétrolier",
        parcours: [
            {
                periode: "2019-2022",
                etablissement: "Institut Africain d'Informatique",
                ville: "Libreville",
                niveau: "Master en Génie Pétrolier",
                description: "Spécialisation en exploration et production"
            },
            {
                periode: "2015-2019",
                etablissement: "École Polytechnique de Masuku",
                ville: "Franceville",
                niveau: "Ingénieur Généraliste",
                description: "Formation pluridisciplinaire en sciences de l'ingénieur"
            },
            {
                periode: "2012-2015",
                etablissement: "Lycée Technique Omar Bongo",
                ville: "Franceville",
                niveau: "Baccalauréat Série D",
                description: "Sciences et techniques industrielles"
            }
        ]
    },
    {
        id: 4,
        identificationNumber: "GA240520004",
        firstName: "Sandrine",
        lastName: "MOUSSOUNDA",
        birthPlace: "Oyem, Woleu-Ntem",
        currentStatus: "Médecin généraliste",
        parcours: [
            {
                periode: "2021-2024",
                etablissement: "CHU de Libreville",
                ville: "Libreville",
                niveau: "Internat en Médecine",
                description: "Spécialisation en médecine générale"
            },
            {
                periode: "2014-2021",
                etablissement: "Faculté de Médecine UOB",
                ville: "Libreville",
                niveau: "Doctorat en Médecine",
                description: "Formation médicale complète avec stages hospitaliers"
            },
            {
                periode: "2011-2014",
                etablissement: "Lycée Immaculée Conception",
                ville: "Libreville",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et de la terre"
            }
        ]
    },
    {
        id: 5,
        identificationNumber: "GA240828005",
        firstName: "Rodrigue",
        lastName: "KOUMBA",
        birthPlace: "Lambaréné, Moyen-Ogooué",
        currentStatus: "Avocat d'affaires",
        parcours: [
            {
                periode: "2020-2022",
                etablissement: "École des Avocats",
                ville: "Libreville",
                niveau: "CAPA",
                description: "Certificat d'aptitude à la profession d'avocat"
            },
            {
                periode: "2016-2020",
                etablissement: "Faculté de Droit UOB",
                ville: "Libreville",
                niveau: "Master en Droit des Affaires",
                description: "Spécialisation en droit commercial et des sociétés"
            },
            {
                periode: "2013-2016",
                etablissement: "Lycée d'Oyem",
                ville: "Oyem",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option économie et gestion"
            }
        ]
    },
    {
        id: 6,
        identificationNumber: "GA241103006",
        firstName: "Ornella",
        lastName: "NDONG",
        birthPlace: "Bitam, Woleu-Ntem",
        currentStatus: "Architecte",
        parcours: [
            {
                periode: "2017-2022",
                etablissement: "École d'Architecture",
                ville: "Libreville",
                niveau: "Master en Architecture",
                description: "Conception architecturale et urbanisme tropical"
            },
            {
                periode: "2014-2017",
                etablissement: "Université des Sciences et Techniques",
                ville: "Franceville",
                niveau: "Licence en Génie Civil",
                description: "Fondements techniques de la construction"
            },
            {
                periode: "2011-2014",
                etablissement: "Lycée Technique de Lambaréné",
                ville: "Lambaréné",
                niveau: "Baccalauréat STI",
                description: "Sciences et technologies industrielles"
            }
        ]
    },
    {
        id: 7,
        identificationNumber: "GA241205007",
        firstName: "Patrick",
        lastName: "ONDO",
        birthPlace: "Mouila, Ngounié",
        currentStatus: "Professeur de mathématiques",
        parcours: [
            {
                periode: "2019-2021",
                etablissement: "École Normale Supérieure",
                ville: "Libreville",
                niveau: "Master en Didactique des Mathématiques",
                description: "Formation pédagogique approfondie"
            },
            {
                periode: "2015-2019",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence en Mathématiques",
                description: "Formation théorique et appliquée en mathématiques"
            },
            {
                periode: "2012-2015",
                etablissement: "Lycée de Mouila",
                ville: "Mouila",
                niveau: "Baccalauréat Série C",
                description: "Mathématiques et sciences physiques"
            }
        ]
    },
    {
        id: 8,
        identificationNumber: "GA240607008",
        firstName: "Sylvie",
        lastName: "MEKAME",
        birthPlace: "Tchibanga, Nyanga",
        currentStatus: "Pharmacienne",
        parcours: [
            {
                periode: "2018-2023",
                etablissement: "Faculté de Pharmacie UOB",
                ville: "Libreville",
                niveau: "Doctorat en Pharmacie",
                description: "Formation complète en sciences pharmaceutiques"
            },
            {
                periode: "2015-2018",
                etablissement: "Lycée Technique de Tchibanga",
                ville: "Tchibanga",
                niveau: "Baccalauréat Série D",
                description: "Sciences de la vie et chimie"
            },
            {
                periode: "2012-2015",
                etablissement: "Collège de Tchibanga",
                ville: "Tchibanga",
                niveau: "Collège",
                description: "Formation générale avec excellence en sciences"
            }
        ]
    },
    {
        id: 9,
        identificationNumber: "GA240702009",
        firstName: "Clément",
        lastName: "BIBANG",
        birthPlace: "Libreville, Estuaire",
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
                etablissement: "Lycée Immaculée Conception",
                ville: "Libreville",
                niveau: "Baccalauréat Série A",
                description: "Littéraire avec option économie ou anglais"
            }
        ]
    },
    {
        id: 10,
        identificationNumber: "GA240819010",
        firstName: "Estelle",
        lastName: "MENGUE",
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
        id: 11,
        identificationNumber: "GA240611011",
        firstName: "François",
        lastName: "ANGUE",
        birthPlace: "Port-Gentil, Ogooué-Maritime",
        currentStatus: "Étudiant en Master",
        parcours: [
            {
                periode: "2021-2024",
                etablissement: "Université Omar Bongo",
                ville: "Libreville",
                niveau: "Licence en Informatique",
                description: "Formation en développement logiciel et bases de données"
            },
            {
                periode: "2018-2021",
                etablissement: "Collège Sainte-Marie",
                ville: "Port-Gentil",
                niveau: "Baccalauréat Série C",
                description: "Mathématiques et sciences physiques"
            }
        ]
    },
    {
        id: 12,
        identificationNumber: "GA240903012",
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
        id: 13,
        identificationNumber: "GA240725013",
        firstName: "Alain",
        lastName: "MBOUMBA",
        birthPlace: "Lambaréné, Moyen-Ogooué",
        currentStatus: "Chercheur",
        parcours: [
            {
                periode: "2021-2024",
                etablissement: "Université des Sciences et Techniques",
                ville: "Franceville",
                niveau: "Master en Génie Civil",
                description: "Fondements techniques de la construction"
            },
            {
                periode: "2018-2021",
                etablissement: "Lycée Technique de Lambaréné",
                ville: "Lambaréné",
                niveau: "Baccalauréat STI",
                description: "Sciences et technologies industrielles"
            }
        ]
    },
    {
        id: 14,
        identificationNumber: "GA240818014",
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
    {
        id: 15,
        identificationNumber: "GA240604015",
        firstName: "Thierry",
        lastName: "EDOU",
        birthPlace: "Tchibanga, Nyanga",
        currentStatus: "Pharmacien",
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