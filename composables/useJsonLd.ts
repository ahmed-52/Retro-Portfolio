
export const useJsonLd = () => {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ahmed Abdulla",
        "image": "https://ahmedabdulla.dev/ahmed400.jpg",
        "jobTitle": "Software Engineer & Researcher",
        "url": "https://ahmedabdulla.dev",
        "sameAs": [
            "https://www.linkedin.com/in/ahmedabdulla1/",
            "https://github.com/ahmed-52",
            "https://openreview.net/profile?id=~Ahmed_Abdulla1"
        ],
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Cornell University"
        },
"affiliation": [
    {
        "@type": "Organization",
        "name": "Cornell Lab of Ornithology",
        "url": "https://www.birds.cornell.edu"
    },
    {
        "@type": "Organization", 
        "name": "Datadog",
        "url": "https://www.datadoghq.com"
    },
    {
        "@type": "Organization", 
        "name": "Cornell Data Strategy",
        "url": "https://cornelldatastrategy.com"
    }
],
        "knowsAbout": [
            "Machine Learning",
            "Software Engineering",
            "Full Stack Development",
            "Time-Series Forecasting",
            "Computer Vision",
            "Bioacoustics",
            "Python",
            "Vue.js",
            "Nuxt",
            "React",
            "TypeScript"
        ],
    "birthPlace": {
        "@type": "Place",
        "name": "Yemen"
    },
    "nationality": {
        "@type": "Country",
        "name": "United States"
    }
    }

    const researchSchema = {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": "TempusBench: An Evaluation Framework for Time-Series Forecasting",
        "author": [
            { "@type": "Person", "name": "Denizalp Goktas" },
            { "@type": "Person", "name": "Gerardo Riaño-Briceño" },
            { "@type": "Person", "name": "Ahmed Abdulla", "url": "https://ahmedabdulla.dev" }
        ],
        "datePublished": "2025-09-23",
        "publication": {
            "@type": "PublicationEvent",
            "name": "NeurIPS 2025 Workshop on Recent Advances in Time Series Foundation Models",
            "url": "https://neurips.cc/virtual/2025/loc/san-diego/workshop/109585"
        },
        "url": "https://openreview.net/forum?id=3fMa060Ag5"
    }

    const projectsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "SoftwareSourceCode",
                "name": "JobLink",
              "description": "AI job tracker startup leveraging NLP and machine learning to automatically extract and organize job application data from Gmail using OAuth authentication.",
                "programmingLanguage": ["React", "TypeScript", "Flask", "Python"],
                "author": { "@type": "Person", "name": "Ahmed Abdulla" },
                "url": "https://joblink.one"

            },
            {
                "@type": "SoftwareSourceCode",
                "name": "Poultry Disease Detection",
                "description": "AI health monitor for poultry reaching 94% accuracy in disease detection.",
                "programmingLanguage": ["TensorFlow", "PyTorch", "Python"],
                "author": { "@type": "Person", "name": "Ahmed Abdulla" },
                "url": "https://github.com/farhan-439/avian_alert"
            }
        ]
    }

    useHead({
        script: [
            {
                type: 'application/ld+json',
                children: JSON.stringify([personSchema, researchSchema, projectsSchema])
            }
        ]
    })
}
