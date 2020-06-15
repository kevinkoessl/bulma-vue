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
                    html: "<h1>In dictum, nunc pellentesque rutrum sollicitudin.</h1><p>Sed suscipit tempus massa nec elementum. Ut a varius ligula. Proin ut venenatis elit. Vestibulum eget tortor in risus ultrices mattis. Duis eget risus ornare, malesuada lectus efficitur, malesuada lacus.</p>"
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
                    html: "<h2 style='text-align: center;'>Intro Text</h2><p>Proin aliquam nibh leo, sit amet hendrerit est porta id. Cras vel nisi ut ante pretium posuere a sit amet metus. Vestibulum sollicitudin velit et bibendum congue.</p>"
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
                    text: "Tempor semper lectus. Suspendisse egestas, est ac tincidunt placerat, elit lacus suscipit magna, id dignissim magna ligula laoreet ipsum. Quisque turpis ligula, iaculis in tincidunt eu, convallis sit amet sem. Vivamus ut dui eleifend, euismod dui et, tincidunt erat."
                }
            }, {
                type: "richtext",
                data: {
                    html: "<h1>Cras in justo non ligula euismod fermentum. Maecenas tincidunt justo et volutpat volutpat. Aenean imperdiet orci vel dui posuere tempus. Phasellus sit amet turpis dignissim, malesuada nisl et, viverra ante. Duis vestibulum, risus in vulputate porta, eros orci fermentum quam, sit amet blandit tellus urna id mauris. Nam rhoncus sit amet est eu egestas. Vivamus rhoncus justo at risus molestie, id consequat purus mollis.</h1> Nunc consequat neque eleifend diam eleifend viverra. Donec sollicitudin varius diam a fringilla. Nunc risus nibh, pellentesque a neque quis.</p>"
                }
            }
        ]
    }
]