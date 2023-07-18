## Pre-requisites
- Ruby ( https://www.ruby-lang.org/en/ )
- Bundler ( https://bundler.io/ )
- Clone https://github.com/DIKSHA-NCTE/diksha-docs repo, switch directory to the repo and run command `bundle install`. This will install all bundles mentioned in Gemfile.
- If you want to do UI development, following things are additionally required -
  - Node (https://nodejs.org/en/)
  - Gulp 3
  - switch directory to the repo and run command `npm install`. This will install all the packages mentioned in package.json.

## Workflow #######
- **For local development:**
  - run command `bundle exec jekyll serve` in terminal. and open url http://localhost:3000/
  - If doing any UI changes run command `gulp` in another terminal.
- **For Deployment:**
  - Once work is finished, you can close both above commands and run command `bundle exec jekyll build` to generate the site. The site will get generated in `_site` folder from there you can copy the code and replace with code base in `tenants/ntp` folder of https://github.com/DIKSHA-NCTE/diksha-tenant repo.
  - This generated site will now be ready to deploy on staging, preprod and prod.You can ask for deployment from DevOps team.