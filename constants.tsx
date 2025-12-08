import { 
  Factory, 
  DraftingCompass, 
  Zap, 
  Droplets, 
  Building2, 
  Wrench, 
  BarChart3, 
  Leaf,
  Lightbulb,
  Cog,
  FileCheck
} from 'lucide-react';

// URL DU LOGO PRINCIPAL
export const COMPANY_LOGO = "/NL-Solutions-Logo-Main.png";

export const NAV_LINKS = [
  { name: 'Accueil', id: 'home' },
  { name: 'Expertise', id: 'expertise' },
  { name: 'Projets', id: 'projects' },
  { name: 'Références', id: 'references' },
  { name: 'Contact', id: 'contact' },
];

export const STATS = [
  { value: "+20", label: "Ans de Benchmark", sub: "Dans Différents Secteurs" },
  { value: "+70", label: "Clients", sub: "Partenaires Fidèles" },
  { value: "+100", label: "Projets & Contrats", sub: "Réussis" },
  { value: "+60", label: "MMAD", sub: "Subventions Obtenues" },
];

export const SERVICES = [
  {
    id: 'bei',
    title: "BEI (Bureau d'Etudes Industriel)",
    shortDescription: "Votre Parcours vers l'Excellence Industrielle",
    description: "Le pôle BEI est dédié à l'optimisation de la performance industrielle. Nous intervenons de la stratégie d'investissement jusqu'à l'excellence opérationnelle sur le terrain. Notre approche combine expertise technique et ingénierie financière pour maximiser votre retour sur investissement.",
    icon: <Factory className="w-8 h-8 text-nl-yellow" />,
    heroImage: "/BEI/image1.png",
    gallery: [
      "/BEI/image1.png",
      "/BEI/image2.png"
    ],
    features: [
      {
        title: "Assistance Industrielle Complète",
        desc: "Du Montage de Projet, au Schéma Directeur jusqu'au Levé des Fonds et Obtention des SUBVENTIONS."
      },
      {
        title: "Performance & Rendement",
        desc: "Améliorez vos Performances et Maximisez Votre Rendement Industriel."
      },
      {
        title: "Transformation Processus",
        desc: "Etudes, Ingénierie & Transformation des processus industriels. Compétitivité Cost."
      }
    ],
    methodology: [
      { title: "Audit & Diagnostic", text: "Analyse approfondie de l'existant (SWOT, Flux, Coûts).", icon: <BarChart3 /> },
      { title: "Stratégie & Roadmap", text: "Définition du plan directeur et des investissements.", icon: <Lightbulb /> },
      { title: "Mise en œuvre", text: "Accompagnement opérationnel et pilotage de projet.", icon: <Cog /> },
      { title: "Mesure & Pérennisation", text: "Mise en place de KPI et standards de travail.", icon: <FileCheck /> }
    ]
  },
  {
    id: 'bet',
    title: "BET (Bureau d'Etudes Technique)",
    shortDescription: "Ingénierie Technique et Multisectorielle Tout Corps d'Etat",
    description: "Notre pôle BET assure la maîtrise d'œuvre technique de vos projets de construction et d'aménagement. De la structure complexe aux réseaux de fluides, nous garantissons la conformité, la sécurité et la durabilité de vos installations.",
    icon: <DraftingCompass className="w-8 h-8 text-nl-blue" />,
    heroImage: "/BET/image5.png",
    gallery: [
      "/BET/image5.png",
      "/BET/image6.png",
      "/BET/image8.png"
    ],
    features: [
      {
        title: "Structures & Charpente",
        desc: "Bâtir la Solidité et la Sécurité de Vos Projets (Charpente & Béton Armé)."
      },
      {
        title: "Études en Électricité",
        desc: "Donner de la Puissance & l'Efficience à Vos Solutions d'Energies Innovantes."
      },
      {
        title: "Expertise en Fluides",
        desc: "Solutions fiables garantissant l'Optimisation de la Gestion de vos Flux."
      }
    ],
    methodology: [
      { title: "Avant-Projet (APS/APD)", text: "Conception préliminaire et chiffrage estimatif.", icon: <DraftingCompass /> },
      { title: "Etudes d'Exécution", text: "Calculs de structure, plans de ferraillage et réseaux.", icon: <Wrench /> },
      { title: "Suivi de Chantier", text: "Contrôle de conformité et pilotage des entreprises.", icon: <Building2 /> },
      { title: "Réception", text: "Assistance aux opérations de réception et DOE.", icon: <FileCheck /> }
    ]
  }
];

// Mapping des images spécifiques par projet
// Les images sont organisées dans /public/Secteur [Nom]/ par secteur
const PROJECT_IMAGES: Record<string, string[]> = {
  // BEI - Papeterie
  "bei-papier": [
    "/Secteur Papeterie/image10.png",
    "/Secteur Papeterie/image11.png"
  ],
  // BEI - Plasturgie
  "bei-plasturgie": [
    "/Secteur Plasturgie/image12.jpeg",
    "/Secteur Plasturgie/image13.jpeg",
    "/Secteur Plasturgie/image14.jpeg"
  ],
  // BEI - Parachimie
  "bei-parachimie": [
    "/Secteur Parachimie/image15.jpeg"
  ],
  // BEI - Semi-Public (P21 Ain Cheggag)
  "bei-semipublic": [
    "/Secteur semi-public/image16.jpeg",
    "/Secteur semi-public/image17.jpeg",
    "/Secteur semi-public/image18.jpeg"
  ],
  // BEI - Emballage
  "bei-emballage": [
    "/Secteur Emballage/image19.png",
    "/Secteur Emballage/image20.jpeg",
    "/Secteur Emballage/image21.jpeg"
  ],
  // BEI - Agro-alimentaire
  "bei-agro": [
    "/Secteur Agro-alimentaire/image22.png",
    "/Secteur Agro-alimentaire/image23.jpeg",
    "/Secteur Agro-alimentaire/image24.png"
  ],
  // BET - Infrastructure (Centre International d'Exposition de Fès)
  "bet-infra": [
    "/Secteur semi-public Etudes TCE Centre International d'Exposition de Fès/image25.jpeg",
    "/Secteur semi-public Etudes TCE Centre International d'Exposition de Fès/image26.png"
  ],
  // BET - Grande Distribution
  "bet-retail": [
    "/Secteur Grande Distribution  Etudes TCE magasins de vente plusieurs villes/image27.jpeg",
    "/Secteur Grande Distribution  Etudes TCE magasins de vente plusieurs villes/image28.jpeg",
    "/Secteur Grande Distribution  Etudes TCE magasins de vente plusieurs villes/image29.jpeg",
    "/Secteur Grande Distribution  Etudes TCE magasins de vente plusieurs villes/image30.png"
  ],
  // BET - Industrie Lourde
  "bet-lourde": [
    "/Secteur Industrie Lourde/image31.jpeg",
    "/Secteur Industrie Lourde/image32.jpeg",
    "/Secteur Industrie Lourde/image33.jpeg"
  ],
  // BET - Plate Forme (Complexe Frigorifique Dakhla)
  "bet-logistique": [
    "/Secteur Plate Forme/image34.jpeg",
    "/Secteur Plate Forme/image35.png"
  ],
  // BET - Santé
  "bet-sante": [
    "/Secteur Santé/image36.jpeg",
    "/Secteur Santé/image37.jpeg",
    "/Secteur Santé/image38.jpeg",
    "/Secteur Santé/image39.jpeg",
    "/Secteur Santé/image40.jpeg",
    "/Secteur Santé/image41.png"
  ],
  // BET - BTP
  "bet-batiment": [
    "/Secteur BTP/image42.jpeg",
    "/Secteur BTP/image43.jpeg",
    "/Secteur BTP/image44.jpeg",
    "/Secteur BTP/image45.jpeg"
  ]
};

// Helper pour obtenir les images de galerie spécifiques au projet
const getGallery = (projectId: string) => {
  // Si des images spécifiques existent pour ce projet, les utiliser
  if (PROJECT_IMAGES[projectId]) {
    return PROJECT_IMAGES[projectId];
  }
  // Sinon, utiliser des images par défaut
  return [
    `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&seed=${projectId}1`,
    `https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&seed=${projectId}2`,
    `/devlope.png`
  ];
};

export const PROJECTS = [
  // BEI PROJECTS
  {
    id: "bei-papier",
    category: "BEI - Industrie Papier",
    title: "Secteur Papeterie : Assistance Industrielle Projet Co-Génération Turbine 3MW",
    desc: "Assistance Industrielle Projet Co-Génération Turbine 3MW.",
    fullDescription: "Dans le cadre d'une modernisation majeure pour un leader du secteur papetier, NL Solutions a piloté l'intégration d'une centrale de co-génération. Ce projet complexe a nécessité une analyse approfondie des flux énergétiques existants pour dimensionner une turbine de 3MW capable de couvrir 80% des besoins électriques du site tout en produisant la vapeur nécessaire au séchage du papier. Notre intervention a permis de réduire drastiquement la facture énergétique et d'améliorer l'empreinte carbone de l'usine.",
    details: ["Bridge Plan (Optimisation arrêt usine - 1mois)", "Commissionning & Optimisation des coûts d'energie de + 40%", "40 MMAD d'investissement"],
    image: "/Secteur Papeterie/image10.png",
    gallery: getGallery("bei-papier")
  },
  {
    id: "bei-plasturgie",
    category: "BEI - Plasturgie",
    title: "Secteur Plasturgie : Audit Industriel & Supply Chain – Due Diligence MITSUI (Multinationale Japonaise)",
    desc: "Audit Industriel & Supply Chain – Due Diligence MITSUI (Multinationale Japonaise).",
    fullDescription: "Mandatés pour une mission de Due Diligence technique dans le cadre d'un rapprochement stratégique, nous avons audité l'ensemble de la chaîne de valeur d'un géant de la plasturgie. L'étude a couvert l'état des équipements d'injection, l'efficience de la supply chain et la conformité QHSE. Le schéma directeur sur 10 ans que nous avons livré a servi de feuille de route pour débloquer un potentiel de croissance à deux chiffres.",
    details: ["Cartographie des processus industriels", "Audit des performances productivité", "Evaluation de l'Asset Industrielle", "Schéma Directeur (sur 10ans) et besoins en capacités industrielles", "CA Groupe 2,000 MMAD"],
    image: "/Secteur Plasturgie/image12.jpeg",
    gallery: getGallery("bei-plasturgie")
  },
  {
    id: "bei-parachimie",
    category: "BEI - Parachimie",
    title: "Secteur Parachimie : Organisation des processus fabrication",
    desc: "Organisation des processus fabrication.",
    fullDescription: "Pour ce projet en parachimie, l'objectif était clair : préparer l'entreprise aux standards internationaux pour l'export. Nous avons re-engineeré les flux de production, éliminé les goulots d'étranglement et mis en place des indicateurs de performance (KPI) en temps réel. Résultat : une augmentation de la capacité de production de 25% sans investissement machine majeur, uniquement par l'excellence opérationnelle.",
    details: ["Mise à niveau des processus de production", "Elaboration des P&IDs", "Elaboration des Dossiers techniques", "+50 MMAD de CA pour des nouveaux contrats à l'international"],
    image: "/Secteur Parachimie/image15.jpeg",
    gallery: getGallery("bei-parachimie")
  },
  {
    id: "bei-semipublic",
    category: "BEI - Semi-Public",
    title: "Secteur semi-public : Accompagnement de la Fédération de Cuir et la Chambre de Commerce de Fès pour la nouvelle P21 Ain Cheggag",
    desc: "Accompagnement de la Fédération de Cuir et la Chambre de Commerce de Fès pour la nouvelle P21 Ain Cheggag.",
    fullDescription: "Un projet d'envergure nationale visant à structurer la filière du cuir dans la région de Fès. NL Solutions a accompagné la Fédération de Cuir et la Chambre de Commerce de Fès dans la définition technique du Parc Industriel Intégré (P2I) Ain Cheggag. Nous avons assisté plus de 30 industriels dans le montage de leurs dossiers techniques et financiers pour l'installation dans cette nouvelle zone, sécurisant ainsi un écosystème industriel cohérent et performant.",
    details: ["+30 Projets d'unités industrielles dans la filiale de cuir", "+15 Projets d'unités industrielles en agro-alimentaire, métallique, parachimie, services,...", "+ 400 MMAD d'investissement", "+ 40 MMAD de subventions d'état à ce jour"],
    image: "/Secteur semi-public/image16.jpeg",
    gallery: getGallery("bei-semipublic")
  },
  {
    id: "bei-emballage",
    category: "BEI - Emballage",
    title: "Secteur Emballage : Lean Manufacturing Offset – « Mouwakaba » MarocPME",
    desc: "Lean Manufacturing Offset – « Mouwakaba » MarocPME.",
    fullDescription: "Intervention ciblée Lean Manufacturing dans une imprimerie industrielle d'emballage. Via le programme Mouwakaba, nous avons déployé les outils 5S et SMED pour réduire les temps de changement de série. L'impact sur le coût de revient a été immédiat, redonnant de la compétitivité à l'entreprise face à la concurrence internationale.",
    details: ["Réduction de coûts de production de + 15%", "Réduction des délais de + 30%", "+10 MMAD d'impact cost"],
    image: "/Secteur Emballage/image19.png",
    gallery: getGallery("bei-emballage")
  },
  {
    id: "bei-agro",
    category: "BEI - Agro-Alimentaire",
    title: "Secteur Agro-alimentaire : Assistance industrielle plusieurs axes stratégiques",
    desc: "Assistance industrielle plusieurs axes stratégiques.",
    fullDescription: "Accompagnement complet d'une unité agro-alimentaire en pleine expansion. Assistance industrielle sur plusieurs axes stratégiques incluant la conception du Re-Layout de l'usine pour intégrer de nouvelles lignes de conditionnement, la définition du Schéma Directeur Industriel sur 5 ans, l'ingénierie technique, les facilities et le ReLayout de l'usine. Nous avons également mené une Due Diligence pour le compte de FIPAR (Groupe CDG) – Opération à 300 MMAD.",
    details: ["Schéma Directeur Industriel 5ans", "Ingénierie technique, facilities et ReLayout de l'usine", "Due Diligence pour le Compte de FIPAR (Groupe CDG) – Opération à 300 MMAD"],
    image: "/Secteur Agro-alimentaire/image22.png",
    gallery: getGallery("bei-agro")
  },

  // BET PROJECTS
  {
    id: "bet-infra",
    category: "BET - Secteur semi-public",
    title: "Secteur semi-public : Etudes TCE Centre International d'Exposition de Fès",
    desc: "Etudes techniques, suivi de réalisation et réception des travaux d'un hall des expositions de 8000 m² + Annexes (Gros œuvres, charpente métallique et lots techniques).",
    fullDescription: "Etudes techniques, suivi de réalisation et réception des travaux d'un hall des expositions de 8000 m² + Annexes (Gros œuvres, charpente métallique et lots techniques). Conception structurelle et suivi technique pour un hall d'exposition de 8000 m² sans appui intermédiaire. Le défi résidait dans la conception d'une charpente métallique complexe capable de supporter de grandes portées tout en restant esthétique et économique. Notre mission a couvert les études d'exécution et le suivi rigoureux du chantier.",
    details: ["Etudes techniques, suivi de réalisation et réception des travaux d'un hall des expositions de 8000 m² + Annexes (Gros œuvres, charpente métallique et lots techniques)", "Montant du marché travaux + 25 MMAD"],
    image: "/Secteur semi-public Etudes TCE Centre International d'Exposition de Fès/image25.jpeg",
    gallery: getGallery("bet-infra")
  },
  {
    id: "bet-retail",
    category: "BET - Grande Distribution",
    title: "Secteur Grande Distribution : Etudes TCE magasins de vente plusieurs villes",
    desc: "Etudes TCE magasins de vente plusieurs villes.",
    fullDescription: "Partenaire technique pour le déploiement de surfaces de vente retail (type Decathlon). Nous assurons les études Tout Corps d'État (TCE) : électricité, climatisation, sécurité incendie et structure. Notre rôle est de garantir la conformité aux normes strictes de l'enseigne et la délivrance du certificat de conformité dans des délais serrés.",
    details: ["Etudes TCE (Tous Corps d'Etat: Béton armé, Charpente, Electricité, Fluides)", "Suivi des conformités des travaux", "Certificat de conformité"],
    image: "/Secteur Grande Distribution .png",
    gallery: getGallery("bet-retail")
  },
  {
    id: "bet-lourde",
    category: "BET - Industrie Lourde",
    title: "Secteur Industrie Lourde : Réhabilitation dalle et charpente usine",
    desc: "Réhabilitation dalle et charpente usine.",
    fullDescription: "Projet de haute technicité en milieu sidérurgique. Il s'agissait de réhabiliter la dalle supportant un four à arc électrique (EAF) soumise à des températures de 1700°C et des vibrations extrêmes. L'étude a nécessité des calculs de structure avancés et l'utilisation de bétons réfractaires spéciaux, ainsi que le renforcement de la charpente environnante.",
    details: ["Etude spéciale (hors fascicules et normes) de la dalle EAF exposée aux flux thermiques du four à électrodes (1700°C)", "Etudes de Réhabilitation de la charpente métallique de l'usine"],
    image: "/Secteur Industrie Lourde/image31.jpeg",
    gallery: getGallery("bet-lourde")
  },
  {
    id: "bet-logistique",
    category: "BET - Plate Forme",
    title: "Secteur Plate Forme : Etudes TCE Complexe Frigorifique Dakhla",
    desc: "Etudes TCE Complexe Frigorifique Dakhla.",
    fullDescription: "Conception intégrale d'un complexe frigorifique moderne à Dakhla. Au-delà de la structure, l'enjeu était l'efficacité énergétique pour la production de froid. Nous avons intégré une installation solaire en toiture pour alimenter les compresseurs, réduisant ainsi les coûts d'exploitation de manière significative.",
    details: ["Etudes structures: GO et charpente", "Etudes des lots techniques: Electricité • Fluides • VRD •", "Installation solaire"],
    image: "/Secteur Plate Forme/image34.jpeg",
    gallery: getGallery("bet-logistique")
  },
  {
    id: "bet-sante",
    category: "BET - Santé",
    title: "Secteur Santé : Etudes TCE Plusieurs Polycliniques et Complexes Hospitaliers",
    desc: "Etudes TCE Plusieurs Polycliniques et Complexes Hospitaliers.",
    fullDescription: "Maîtrise d'œuvre technique pour des établissements de santé. La gestion des flux (patients, personnel, déchets, stérile) et la technicité des réseaux (gaz médicaux, traitement d'air bloc opératoire) sont au cœur de nos études. Nous garantissons des installations fiables et maintenables pour la sécurité des patients.",
    details: ["Gestion Tout Corps d'Etat", "Etudes structure: GO et charpente", "Etudes des lots techniques: Electricité • Fluides • VRD •", "Implantation des Machines"],
    image: "/Secteur Santé/image36.jpeg",
    gallery: getGallery("bet-sante")
  },
  {
    id: "bet-batiment",
    category: "BET - BTP",
    title: "Secteur BTP : Etudes TCE Plusieurs Bâtiments et Complexes",
    desc: "Etudes TCE Plusieurs Bâtiments et Complexes.",
    fullDescription: "Coordination et pilotage de projets immobiliers complexes (bureaux, résidentiel haut standing). Notre mission OPC (Ordonnancement, Pilotage et Coordination) assure le respect du planning et la synthèse technique entre les différents corps de métier pour éviter les conflits sur le chantier.",
    details: ["Gestion & Coordination Tout Corps d'Etat", "Etudes structure: GO et charpente", "Etudes des lots techniques: Electricité • Fluides •", "VRD • Divers"],
    image: "/Secteur BTP/image42.jpeg",
    gallery: getGallery("bet-batiment")
  }
];

// Helper pour générer des placeholders de logos propres (Theme Sombre)
// Background: #1e293b (Slate-800), Text: #94a3b8 (Slate-400)
const getLogo = (text: string) => `https://placehold.co/300x120/1e293b/94a3b8?text=${encodeURIComponent(text)}&font=oswald`;

// Mapping des logos disponibles dans le dossier public
// Les logos sont organisés par catégories dans /logos_categorises/
const LOGO_MAP: Record<string, string> = {
  // Clients principaux (multinationales et grandes structures)
  "OCP Group": "/logos_categorises/clients_principaux/PMP_-OCP_Group.png",
  "OCP": "/logos_categorises/clients_principaux/PMP_-OCP_Group.png",
  "PMP / OCP Group": "/logos_categorises/clients_principaux/PMP_-OCP_Group.png",
  "International Paper": "/logos_categorises/clients_principaux/IP-CMCP.png",
  "IP-CMCP": "/logos_categorises/clients_principaux/IP-CMCP.png",
  "MITSUI": "/logos_categorises/clients_principaux/MITSUI.png",
  "SICDA": "/logos_categorises/clients_principaux/SICDA.png",
  "EGFI": "/logos_categorises/clients_principaux/EGFI.png",
  "CMGP Group": "/logos_categorises/clients_principaux/CMGP Group.png",
  "TAVEX": "/logos_categorises/clients_principaux/TAVEX.png",
  "Maroc Modis / Group Triumph": "/logos_categorises/clients_principaux/Maroc Modis.png",
  "Maroc Modis": "/logos_categorises/clients_principaux/Maroc Modis.png",
  "BEWTR": "/logos_categorises/clients_principaux/BEWTR.png",
  "Maghreb Steel": "/logos_categorises/clients_principaux/Maghreb Steel.png",
  "Decathlon Maroc": "/logos_categorises/clients_principaux/Decathlon Maroc.png",
  "Decathlon": "/logos_categorises/clients_principaux/Decathlon Maroc.png",
  "Mainetti": "/logos_categorises/clients_principaux/Mainetti.png",
  
  // Entreprises marocaines
  "AMAROC": "/logos_categorises/entreprises_marocaines/AMAROC.png",
  "2KM Label": "/logos_categorises/entreprises_marocaines/2KM Label.png",
  "Smile Piscine": "/logos_categorises/entreprises_marocaines/Smile Piscine.png",
  "CMAEF Refrigeration": "/logos_categorises/entreprises_marocaines/CMAEF.png",
  "CMAEF": "/logos_categorises/entreprises_marocaines/CMAEF.png",
  
  // Pôle agroalimentaire
  "Safilait": "/logos_categorises/agroalimentaire/Safilait.png",
  "Indusalim": "/logos_categorises/agroalimentaire/Indusalim.png",
  "Ciocap": "/logos_categorises/agroalimentaire/Ciocap.png",
  "Confins du Maroc": "/logos_categorises/agroalimentaire/Confins.png",
  "Confins": "/logos_categorises/agroalimentaire/Confins.png",
  "SoniaMa": "/logos_categorises/agroalimentaire/SoniaMa.png",
  "Soniama": "/logos_categorises/agroalimentaire/SoniaMa.png",
  "MarSeaFood": "/logos_categorises/agroalimentaire/MarSeaFood.png",
  
  // Collaborateurs
  "CRI": "/logos_categorises/collaborateurs/CRI.png",
  "AMDIE": "/logos_categorises/collaborateurs/AMDIE.png",
  "Maroc PME": "/logos_categorises/collaborateurs/Maroc PME.png",
  "Ministère de l'Industrie": "/logos_categorises/collaborateurs/Ministere.png",
  "Ministère de l'Industrie et du Commerce": "/logos_categorises/collaborateurs/Ministere.png",
  "Ministere": "/logos_categorises/collaborateurs/Ministere.png",
  "CCIS Fès-Meknès": "/logos_categorises/collaborateurs/CCIS Fès-Meknès.png",
  
  // Références existantes (logos non catégorisés)
  "Capital Invest": "/Capital Invest.png",
  "ST Microelectronics": "/St.jpg",
  "Aluminium du Maroc": "/aluminiumaroc.jpg",
  "Bati Alu": "/Batialu.jpg",
  "LGMC Industries": "/LGMC.png",
  "Upline Group": "/UPLINE.png",
  "Horizon Pro": "/Hoorizon.png",
  "Maison Bencherif": "/MB maison (1).png",
  "Le Plastique": "/la plasque.png",
  "IMALUM": "/Imalume.png",
  "Sofacuis": "/sofacuis-1.png",
  "Domaines Lezar": "/domaines lezar.png",
  "Mutandis": "/Mutandis (1).png",
};

// Fonction pour obtenir le logo (réel si disponible, sinon placeholder)
const getClientLogo = (name: string): string => {
  return LOGO_MAP[name] || getLogo(name);
};

// Références organisées par catégories
export const CLIENTS_PRINCIPAUX = [
  { name: "IP-CMCP", logo: getClientLogo("International Paper"), url: "https://www.internationalpaper.com/" },
  { name: "PMP / OCP Group", logo: getClientLogo("OCP"), url: "https://www.ocpgroup.ma/" },
  { name: "MITSUI", logo: getClientLogo("MITSUI"), url: "https://www.mitsui.com/" },
  { name: "SICDA", logo: getClientLogo("SICDA"), url: "https://sicda.ma/" },
  { name: "EGFI", logo: getClientLogo("EGFI"), url: "https://egfimaroc.com/" },
  { name: "CMGP Group", logo: getClientLogo("CMGP Group"), url: "https://cmgp-group.com/" },
  { name: "TAVEX", logo: getClientLogo("TAVEX"), url: "https://tavex.eu/" },
  { name: "Maroc Modis / Group Triumph", logo: getClientLogo("Maroc Modis"), url: null },
  { name: "BEWTR", logo: getClientLogo("BEWTR"), url: "https://www.bewtr.com/" },
  { name: "Maghreb Steel", logo: getClientLogo("Maghreb Steel"), url: "https://www.maghrebsteel.ma/" },
  { name: "Decathlon", logo: getClientLogo("Decathlon"), url: "https://www.decathlon.ma/" },
  { name: "Mainetti", logo: getClientLogo("Mainetti"), url: "https://www.mainetti.com/" },
];

export const ENTREPRISES_MAROCAINES = [
  { name: "AMAROC", logo: getClientLogo("AMAROC"), url: "https://www.croplife.ma/les-membres-de-bureau/logo-amaroc/" },
  { name: "2KM Label", logo: getClientLogo("2KM Label"), url: "https://www.lemorau.com/fr/marocaine-2km-label-investit-dans-lemorau/" },
  { name: "Smile Piscine", logo: getClientLogo("Smile Piscine"), url: "https://smilepiscine.com/" },
  { name: "CMAEF", logo: getClientLogo("CMAEF Refrigeration"), url: null },
];

export const POLE_AGROALIMENTAIRE = [
  { name: "Safilait", logo: getClientLogo("Safilait"), url: "http://www.jibal.ma/en/" },
  { name: "Indusalim", logo: getClientLogo("Indusalim"), url: null },
  { name: "Ciocap", logo: getClientLogo("Ciocap"), url: "https://www.ciocap.com/" },
  { name: "Confins", logo: getClientLogo("Confins du Maroc"), url: null },
  { name: "Sonia Ma", logo: getClientLogo("Soniama"), url: null },
  { name: "MarSeaFood", logo: getClientLogo("MarSeaFood"), url: null },
];

export const COLLABORATEURS = [
  { name: "CRI", logo: getClientLogo("CRI"), url: "https://www.cri-invest.ma/" },
  { name: "AMDIE", logo: getClientLogo("AMDIE"), url: "https://amdie.gov.ma/" },
  { name: "Maroc PME", logo: getClientLogo("Maroc PME"), url: "https://marocpme.gov.ma/" },
  { name: "Ministère de l'Industrie et du Commerce", logo: getClientLogo("Ministere"), url: "https://www.mcinet.gov.ma/" },
  { name: "CCIS Fès-Meknès", logo: getClientLogo("CCIS Fès-Meknès"), url: "https://ccisfm.ma/" },
  { name: "Mutandis", logo: getClientLogo("Mutandis"), url: "https://mutandis.com/" },
];

// Toutes les références combinées (pour compatibilité)
export const CLIENT_REFERENCES = [
  ...CLIENTS_PRINCIPAUX,
  ...ENTREPRISES_MAROCAINES,
  ...POLE_AGROALIMENTAIRE,
  ...COLLABORATEURS,
];

export const CONTACT_INFO = {
  phone: "+212 6 79 11 11 91",
  emails: ["nl1000solutions@gmail.com", "nabil.lahloua@gmail.com"],
  addresses: [
    {
      city: "Casablanca (Siège)",
      line: "61 Avenue Lalla Yacout Angle Mustapha El Mâani 2eme Etage N°62"
    },
    {
      city: "Fès (Succursale)",
      line: "134 Lot Riad Azzaitoun R.A.C. Étage 1 Rte Ain Chkef"
    }
  ]
};