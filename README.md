# Migration Script from Prismic to Contentful

### Requirements:

- Node JS 18

You can [get NodeJS 18 here](https://nodejs.org/en/download/current/).

It is advised to use NVM to switch between versions.

You can [get NVM here](https://github.com/nvm-sh/nvm).

### Set Up

#### 1. Clone the Repository

`git clone git@github.com:osehmathias/prismic-contentful-migration.git`

#### 2. Install NPM Packages

`npm i`

#### 3. Install the Prismic CLI and log in

Install the Prismic CLI:

`npm install -global prismic-cli`

Log in to Prismic:

`prismic login`

This will open a browser prompt where you can log in to Prismic.

#### 4. Install the Contentful CLI and log in

Install the Contentful CLI:

`npm install -g contentful-cli`

Log in to Contentful:

`contentful login`

This will open a browser window where you can log in to Contentful. The access token that is generated will grant you permissions to the space that your account has permissions for.

After you log in, you will receive an access token. Copy this and paste it into the terminal. You are logged in. The token is saved on your system.

You can log out with:

`contentful logout`

### Running a Migration

This script has been set up for the following types:

- accountant
- blogpost
- country
- integration
- page

To run a migration, use this command:

`node migrate.js -t ${type} -l {lang}`

where `${type}` is one of the content types described above and

where `${lang}` is the language ID for a locale in Prismic
