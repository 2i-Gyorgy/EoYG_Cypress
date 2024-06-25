This repo is about all about Cypress testing.
It contains tests against the 2i AssureTDG site, the Internet site and has the excercises from the EdgeWords training.

to start project run command in terminal:
npx cypress open

if cypress runs but doesn't show, refere to here: https://stackoverflow.com/questions/73191619/cypress-open-ui-not-visible

Before runing cypress test against AssureTDG:

1. navigat to TDG-Generic folder in terminal and run
2. `docker compose up`
   also create secrets file:
   /cypress/fixtures/logins_assureTDG.json
   with content:
   {
   "email": "<username>",
   "password": "<password>"
   }

To verify downloads I used cy-verify-downloads custom cypress command from npm package: https://www.npmjs.com/package/cy-verify-downloads
