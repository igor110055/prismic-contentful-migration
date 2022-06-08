# Migration Script from Prismic to Contentful

## Running a Migration

This script has been set up for the following types:

- accountant
- blogpost
- country
- integration
- page

To run a migration, use this command:

```
node migrate.js -t ${type} -l {lang}
```

where `${type}` is one of the content types described above and

where `${lang}` is the language ID for a locale in Prismic

## Set Up

### Requirements:

- [Node JS 18](https://nodejs.org/en/download/current/)

[Get NVM](https://github.com/nvm-sh/nvm) to manage versions if necessary.

#### 1. Clone the Repository

```
git clone git@github.com:osehmathias/prismic-contentful-migration.git
```

#### 2. Install NPM Packages

```
npm i
```

#### 3. Install the Prismic CLI and log in

Install the Prismic CLI:

```
npm install -global prismic-cli
```

Log in to Prismic:

```
prismic login
```

This will open a browser prompt where you can log in to Prismic.

#### 4. Install the Contentful CLI and log in

Install the Contentful CLI:

```
npm install -g contentful-cli
```

Log in to Contentful:

```
contentful login
```

This will open a browser window where you can log in to Contentful. The access token that is generated will grant you permissions to the space that your account has permissions for.

After you log in, you will receive an access token. Copy this and paste it into the terminal. You are logged in. The token is saved on your system.

You can log out with:

```
contentful logout
```

#### 5. Create a .env at the root of the project

Create a `.env` file at the root of the project which has the following values:

```
PRISMIC_REPOSITORY
CONTENTFUL_SPACE_ID
CONTENTFUL_SPACE_ENVIRONMENT
```

#### 6. Run migration

Use the commands listed above to run the migration.

The migration is rate limited by Contentful to 5 put requests per second.

## SAMPLE SHAPE OF PRISMIC REQUEST

```
{
  uid: 'cosmostation',
  firstPublished: '2022-04-14T09:45:27+0000',
  lastPublished: '2022-06-06T10:32:24+0000',
  seo: {
    title: 'How to Connect Cosmostation and Koinly',
    description: 'Connect Cosmostation to Koinly in minutes! Follow our step by step instructions and get your Cosmostation taxes done fast!'
  },
  name: 'Cosmostation',
  type: 'Wallets',
  icon: {
    alt: 'Cosmostation Wallet Logo',
    url: 'https://images.prismic.io/koinly-marketing/8b5ce3d2-7948-4ad1-b7bf-f3e1d89f0d85_Cosmostation.png?auto=compress,format'
  },
  hasCsv: true,
  hasApi: true,
  priority: null
} [
  { type: 'youtube_video', content: [ [Object] ] },
  { type: 'text_section', content: [ [Object], [Object] ] },
  {
    type: 'text_section',
    content: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ]
  },
  { type: 'info_text', content: [ [Object] ] },
  {
    type: 'text_section',
    content: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  },
  { type: 'info_text', content: [ [Object] ] },
  {
    type: 'text_section',
    content: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  }
]
```

# SAMPLE SHAPE OF CONTENTFUL REQUEST

```
[
  {
    "metadata": {
      "tags": []
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "j87ef669ynf4"
        }
      },
      "id": "4fpnfq6bwRumakMRLebkUm",
      "type": "Entry",
      "createdAt": "2022-06-08T01:29:54.093Z",
      "updatedAt": "2022-06-08T06:45:31.558Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 27,
      "publishedAt": "2022-06-08T06:45:31.558Z",
      "firstPublishedAt": "2022-06-08T04:45:58.672Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "1FOB32e06VuonhXCIGonv1"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "1FOB32e06VuonhXCIGonv1"
        }
      },
      "publishedCounter": 2,
      "version": 28,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "1FOB32e06VuonhXCIGonv1"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "integration"
        }
      }
    },
    "fields": {
      "seo": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "JseAficaTTQ51LdOJBBfc"
          }
        }
      },
      "slug": {
        "en-US": "cosmostation"
      },
      "name": {
        "en-US": "Cosmostation"
      },
      "type": {
        "en-US": "Blockchain"
      },
      "title": {
        "en-US": "How to Connect Cosmostation and Koinly"
      },
      "subtitle": {
        "en-US": "Connect Cosmostation to Koinly in minutes! Follow our step by step instructions and get your Cosmostation taxes done fast!"
      },
      "icon": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "5jHcIIhunTFTv5sTDlJeCW"
          }
        }
      },
      "csv": {
        "en-US": true
      },
      "api": {
        "en-US": true
      },
      "priority": {
        "en-US": 1
      },
      "youTubeLink": {
        "en-US": "https://youtu.be/MTq7Cg3tTsI"
      },
      "content": {
        "en-US": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "How to connect Cosmostation with Koinly",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-2"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Cosmostation is a popular web and desktop wallet that lets investors stake crypto and earn on a wide variety of Cosmos SDK blockchains, as well as transfer and store crypto assets like ATOM, OSMO and more. Whatever your Cosmostation investments, Koinly can help make your crypto tax simple. Koinly connects to Cosmostation via API or by uploading a CSV file of your transaction history. Here's how.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-3"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "How to connect Cosmostation to Koinly via API",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-2"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "You'll need to get your wallet address for each blockchain you interact with from Cosmostation - for example Cosmos, Kava, Secret and Osmosis. The instructions will be similar for each - so we'll use Cosmos as our example.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "On Cosmostation",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-3"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "1. ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "Log in ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [],
                  "value": "to your Cosmostation mobile wallet.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "2. In the top right corner, select the ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "switch wallet icon",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [],
                  "value": ".",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {
                "target": {
                  "sys": {
                    "id": "ruTLsNboQ9cNfouPzKSjB",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": [],
              "nodeType": "embedded-asset-block"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "3. Select your ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "Cosmos wallet",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [],
                  "value": ".",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {
                "target": {
                  "sys": {
                    "id": "1JCHD5wrEOWAAZHkSUDyOO",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": [],
              "nodeType": "embedded-asset-block"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "4. Select your ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "wallet address ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [],
                  "value": "in the top of the screen.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {
                "target": {
                  "sys": {
                    "id": "78YBDhyRnRnaUOV1vVWG7n",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": [],
              "nodeType": "embedded-asset-block"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "5. Select ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "copy",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [],
                  "value": ".",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {
                "target": {
                  "sys": {
                    "id": "2X57hU9gg7U0qz4y7zAMNv",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": [],
              "nodeType": "embedded-asset-block"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "6. Head over to Koinly.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "On Koinly",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-3"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Log in to Koinly and go to the ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "wallets ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": "page.",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Select ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "add new wallet",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Search for ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "Cosmostation",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Select ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "set up auto sync",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Search ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "Cosmos",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Select ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "Cosmos (ATOM)",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "Paste ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": "your Cosmos wallet address from Cosmostation.",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Select ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "import",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                }
              ],
              "nodeType": "ordered-list"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "value": "Good to know\n",
                      "nodeType": "text"
                    },
                    {
                      "data": {},
                      "marks": [],
                      "value": "If you use your Cosmostation wallet to interact with multiple blockchains, you'll need to get your Cosmostation wallet address for each blockchain you interact with using Cosmostation and add them to Koinly. In Cosmostation, just switch to the wallet you want to connect instead. Then when you're adding your wallet to Koinly, just select the corresponding blockchain. For example, you could select your Kava wallet in Cosmostation and you'd then search for the Kava blockchain in Koinly when adding your wallet address. Make sure you do this for each blockchain you interact with using Cosmostation to get your complete transaction history.",
                      "nodeType": "text"
                    }
                  ],
                  "nodeType": "paragraph"
                }
              ],
              "nodeType": "blockquote"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "How to connect Cosmostation to Koinly via CSV",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-2"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Cosmostation don't offer a simple export CSV file option within their mobile app. However, you can get a CSV file of your Cosmostation transaction history from many blockchain explorers which you can then upload to Koinly. Once you've got your CSV file, here's how to upload it.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "On Koinly",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-3"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Sign up or login into Koinly and head to ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "wallets",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Add a new wallet: ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "Cosmostation.",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Select ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "import from file.",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "value": "Upload ",
                          "nodeType": "text"
                        },
                        {
                          "data": {},
                          "marks": [],
                          "value": "your CSV file(s).",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                }
              ],
              "nodeType": "ordered-list"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "value": "Good to know\n",
                      "nodeType": "text"
                    },
                    {
                      "data": {},
                      "marks": [],
                      "value": "Double check your staking rewards are tagged correctly in Koinly for your country’s tax rules - in most countries, staking rewards are taxed as income.",
                      "nodeType": "text"
                    }
                  ],
                  "nodeType": "paragraph"
                }
              ],
              "nodeType": "blockquote"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "How do I check if my Cosmostation import is accurate?",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-2"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Something looking strange with your Cosmostation data import? Not to worry, we've got plenty of help available:",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Search our help forum - there's lots of useful guides to resolve common issues.",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Go to our discussion boards - we might have already resolved the same issue for another user.",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Talk to us on social media - we’re on Twitter and Reddit.",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                },
                {
                  "data": {},
                  "content": [
                    {
                      "data": {},
                      "content": [
                        {
                          "data": {},
                          "marks": [],
                          "value": "Contact us on email or live chat. ",
                          "nodeType": "text"
                        }
                      ],
                      "nodeType": "paragraph"
                    }
                  ],
                  "nodeType": "list-item"
                }
              ],
              "nodeType": "unordered-list"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "It's really helpful to use our Getting Started Guide before reviewing your transactions. This can help you identify and resolve any issues in no time at all.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-3"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": []
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "j87ef669ynf4"
        }
      },
      "id": "JseAficaTTQ51LdOJBBfc",
      "type": "Entry",
      "createdAt": "2022-06-08T04:45:44.632Z",
      "updatedAt": "2022-06-08T04:45:51.474Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 2,
      "publishedAt": "2022-06-08T04:45:51.474Z",
      "firstPublishedAt": "2022-06-08T04:45:51.474Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "1FOB32e06VuonhXCIGonv1"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "1FOB32e06VuonhXCIGonv1"
        }
      },
      "publishedCounter": 1,
      "version": 3,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "1FOB32e06VuonhXCIGonv1"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "seo"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "How to Connect Cosmostation and Koinly"
      },
      "description": {
        "en-US": "Connect Cosmostation to Koinly in minutes! Follow our step by step instructions and get your Cosmostation taxes done fast!"
      }
    }
  }
]
```
