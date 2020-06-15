export const mainNavigation = [
    {
        "name": "Portfolio",
        "path": "/portfolio",
        "children": []
    },
    {
        "name": "Über uns",
        "path": "/ueber-uns",
        "children": []
    },
    {
        "name": "Kontakt",
        "path": "/kontakt",
        "children": []
    },
    {
        "name": "Downloads",
        "path": "/downloads",
        "children": []
    }
]

export const footerNavigation = [
    {
        "name": "Murteldt Additive Solutions",
        "path": "/",
        "children": [
            {
                "name": "Portfolio",
                "path": "/portfolio"
            },
            {
                "name": "Kontakt",
                "path": "/kontakt"
            }
        ]
    },
    {
        "name": "Rechtliches",
        "path": "",
        "children": [
            {
                "name": "Datenschutz",
                "path": "/Datenschutz"
            },
            {
                "name": "Impressum",
                "path": "/Impressum"
            },
            {
                "name": "AGB",
                "path": "/AGB"
            },
            {
                "name": "AEB",
                "path": "/AEB"
            }
        ]
    },
]

export const contentNavigation = [
    {
        "name": "Beratung",
        "path": "/beratung",
        "children": [
            {
                "name": "Produktionsverfahren",
                "path": "produtionsverfahren"
            },
            {
                "name": "Datenformate",
                "path": "/datenformate"
            }
        ]
    },
    {
        "name": "Konstruktion",
        "path": "/Konstruktion",
        "children": [
            {
                "name": "Datenentwicklung (CAD)",
                "path": "/datenentwicklung"
            },
            {
                "name": "Datenscan",
                "path": "/datenscan"
            }
        ]
    },
    {
        "name": "Produktion",
        "path": "/produktion",
        "children": [
            {
                "name": "Produktbeispiele",
                "path": "/produktbeispiele"
            },
            {
                "name": "Materialien",
                "path": "/Materialien"
            }
        ]
    }
];

export const cmsPages = [
    {
        name: "ueber-uns",
        content: [
            {
                type: "img",
                data: {
                    src: "https://via.placeholder.com/720x400/DEF3EE/999999?text=Über-uns"
                }
            },
            {
                type: "text",
                data: {
                    text: "Lorem Ipsum Dolor Sit Amet"
                }
            }, {
                type: "richtext",
                data: {
                    html: "<h1>Wow, this is amazing</h1><p>Lorem ipsum dolor sit amet</p>"
                }
            }
        ]
    },
    {
        name: "portfolio",
        content: [
            {
                type: "richtext",
                data: {
                    html: "<h2 style='text-align: center;'>Intro Text</h2><p>Lorem ipsum dolor sit amet</p>"
                }
            },
            {
                type: "img",
                data: {
                    src: "https://via.placeholder.com/720x400/BDBDBD/999999?Text=Portfolio"
                }
            },
            {
                type: "text",
                data: {
                    text: "Weisse, die Tour vonne Kneipe nache Hütte bin ich vollsteif abgelatscht. Hier siehts aus wie bei Hempels unterm Sofa! Ker guck Dir ma dat süße Stöppken an. Geh mal wech mit Deine Plautze. Komm wir gehn Mittach essen. Und mach mir keine Fissematenten! Ker dat macht mich feddich! Getz is ma Ruhe im Kabuff! Geh mir getz nich auffe Pimpanellen! Dann is ma richtich Trallafitti. Mach hier nich son Killefitt! Was guckse denn so bedröppelt? Kannse dem Ömmaken ma über de Straße helfen? Da kommse nich gut bei wech, dat sach ich Dir. Da verlierste doch den Überblick bei dem ganzen Kuddelmuddel. Getz mach den Apparillo aus! Sach ma! Dat is doch pille-palle. Dat kannse Dir abschminken. Dann is ma richtich Trallafitti."
                }
            }, {
                type: "richtext",
                data: {
                    html: "<h1>Ich muss gleich wieder auffe Maloche. Komm annen Tisch, gleich gibbet Essen.</h1><p>Lorem ipsum dolor sit amet</p>"
                }
            }
        ]
    }
]