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

#### 6. The migration will run

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
