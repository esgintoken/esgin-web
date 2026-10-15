export interface MediaArticle {
    id: string;
    partner: string;
    media: string;
    title: string;
    description: string;
    links: {
        label: string;
        url: string;
    }[];
}

export interface ProjectUpdate {
    id: string;
    partner: string;
    source: string;
    title: string;
    description: string;
    url: string;
}

export const mediaArticles: MediaArticle[] = [
    {
        id: "agrarus",
        partner: "ESGIN × PT Agraus Resources",
        media: "Investortrust.id",
        title: "ESGIN and Agrarus Resources Form Strategic Partnership to Strengthen Indonesia's Carbon Ecosystem",
        description:
            "Strategic collaboration to explore AI-powered Digital MRV, blockchain-based climate infrastructure, carbon credit development, and sustainable climate projects.",
        links: [
            {
                label: "Read Article",
                url: "https://investortrust.id/esg/109491/esgin-dan-agrarus-resources-jalin-kemitraan-perkuat-ekosistem-karbon-indonesia",
            },
        ],
    },
    {
        id: "aeki",
        partner: "ESGIN × AEKI",
        media: "Jakarta Daily",
        title: "ESGIN and Coffee Exporters Association Partner to Develop Green Coffee Economy and Carbon Projects in Lampung",
        description:
            "Partnership with the Indonesian Coffee Exporters Association (AEKI) to support sustainable coffee production, biochar development, and agricultural carbon projects.",
        links: [
            {
                label: "Read Article",
                url: "https://www.jakartadaily.id/market-finance/16217413792/esgin-and-coffee-exporters-association-partner-to-develop-green-coffee-economy-and-carbon-projects-in-lampung",
            },
        ],
    },
    {
        id: "adupi-idcta",
        partner: "ESGIN × ADUPI × IDCTA",
        media: "Investortrust.id",
        title: "ESGIN, ADUPI and IDCTA Collaborate to Digitalize Indonesia's Recycling Industry",
        description:
            "Collaboration to advance recycling industry digitalization through Digital MRV, material traceability, and circular economy infrastructure.",
        links: [
            {
                label: "Read Article",
                url: "https://investortrust.id/esg/112670/perkuat-digitalisasi-industri-daur-ulang-plastik-indonesia-didorong-punya-sistem-traceability",
            },
        ],
    },
    {
        id: "aspebindo",
        partner: "ESGIN × ASPEBINDO",
        media: "Jakarta Daily / Investortrust.id",
        title: "ESGIN and ASPEBINDO Strengthen Indonesia's Carbon Trading Ecosystem",
        description:
            "Strategic partnership to expand access to domestic and international carbon markets and support Indonesia's carbon trading ecosystem.",
        links: [
            {
                label: "Read on Jakarta Daily",
                url: "https://www.jakartadaily.id/market-finance/16217558774/esgin-and-aspebindo-sign-mou-to-develop-indonesias-carbon-trading-ecosystem",
            },
            {
                label: "Read on Investortrust",
                url: "https://investortrust.id/esg/114249/esgin-gandeng-aspebindo-perluas-akses-pasar-karbon-domestik-globa",
            },
        ],
    },
    {
        id: "lampung-tapioca",
        partner: "ESGIN — Lampung Carbon Projects",
        media: "IDXchannel",
        title: "23 Tapioca Mills in Lampung Involved in Carbon Reduction and Green Investment Projects",
        description:
            "Development of a methane reduction project pipeline involving 23 tapioca mills in Lampung, with an estimated potential of approximately 500,000 tCO₂e in annual emissions reductions.",
        links: [
            {
                label: "Read Article",
                url: "https://www.idxchannel.com/economics/23-pabrik-tapioka-di-lampung-dilibatkan-dalam-proyek-pengurangan-karbon-dan-investasi-hijau",
            },
        ],
    },
    {
        id: "heritage-group",
        partner: "ESGIN × Heritage Group",
        media: "Jakarta Daily",
        title: "ESGIN and Heritage Group Sign MoU on Cambodia Sustainable Agriculture and Carbon Projects",
        description:
            "Collaboration on sustainable rice farming, AWD methane reduction, biochar, Digital MRV, and agricultural carbon project development in Cambodia.",
        links: [
            {
                label: "Read Article",
                url: "https://www.jakartadaily.id/market-finance/16217669908/esgin-and-heritage-group-sign-mou-on-cambodia-sustainable-agriculture-carbon-projects",
            },
        ],
    },
];

export const projectUpdates: ProjectUpdate[] = [
    {
        id: "hkti-pptti",
        partner: "ESGIN × HKTI × PPTTI",
        source: "ESGIN Official Medium",
        title: "ESGIN Partners with HKTI and PPTTI to Expand Green Economy Projects in Lampung",
        description:
            "Project update on collaboration with agricultural and regional partners to expand climate-smart agriculture, biochar development, and agricultural carbon projects.",
        url: "https://medium.com/@esgintoken/project-update-esgin-partners-with-hkti-and-pptti-to-expand-green-economy-projects-in-lampung-ce17ba9ca59a",
    },
];
