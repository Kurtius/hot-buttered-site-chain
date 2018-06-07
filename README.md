# hot-buttered-site-chain
Build a static site with some hot buttered soul!


## Setup
- clone
- install [*node*](https://nodejs.org/en/download/)
- run `npm install`
- setup `gulpconfig.js` variables
- create `build` folder (change name & location @ `gulpconfig.js`)
- run `gulp` for development
- run `gulp build` to create deploy-ready files
- [listen to isaac…](https://www.youtube.com/watch?v=tNRNCzq7Jrw)

![Isaac!](https://e-cdns-images.dzcdn.net/images/artist/af1a899718e2e624fd337c5177a2c224/528x528-000000-80-0-0.jpg)

## Resources
The content and template files are parsed with [Metalsmith](http://www.metalsmith.io/).
We use [Handlebars](https://handlebarsjs.com/) templates (`./components/templates`) with some helpers (`./components/templates/helpers`)
The content is written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and 
[Frontmatter](https://jekyllrb.com/docs/frontmatter/) (`./components/content`) and the folder structure defines the sitemap. [Gulp](https://gulpjs.com/) does the rest of the work and parses the css, js and assets. We tried to be explicit in naming and commenting the source files in dev mode and will be brief (and ugly) in deploy mode.
