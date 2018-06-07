/*
  Gulp configuration file.
  inhabited by source & build folder variables
  and gulp task configurations (tasks located in ./gulp/**)
*/

// default working repo setup
var src               = './components',
    content           = src + '/content',
    templates         = src + '/templates',
    assets            = src + '/assets',
    scripts           = src + '/scripts',
    styles            = src + '/styles';

// build repo outside of this project…
var build             = '../MY-STATIC-SITE',
    build_assets      = build +  '/assets';

// all gulp task configurations & settings will be found here
module.exports = {
  browserSync: {                                  // https://www.npmjs.com/package/browser-sync
    server: {
      baseDir: build
    },
    files: build,
    port: 1893,
    // https: true,
    open: "local",
    browser: "google chrome"
  },
  metalsmith: {                                   // https://www.npmjs.com/package/metalsmith
    src: src,
    dest: build,
    clean: false,
    metadata: {
      version: "0.0.0",
      title: "STATIC-SITE",
      name: "STATIC-SITE",
      shortname: "STATIC-SITE",
      // private: true,
      description: "description!",
      author: "Daniel Kurtius",
      site: {
        url: "https://STATIC-SITE/",
        lang: "de",
        locale: "de_DE",
        analyticsID: "UA-XXXXXXX",
        googleVerification: "XXXXXXX",
        "meta-canonical": "https://oSTATIC-SITE/"
      }
    },
    config: {
      contentRoot: "./content",
      assetRoot: "./sources/assets",
      scriptRoot: "./sources/scripts",
      styleRoot: "./sources/styles",
      layoutRoot: "./sources/layouts",
      destRoot: "./build"
    },
    plugins:{
      "metalsmith-drafts": true,                  // https://www.npmjs.com/package/metalsmith-drafts
      "metalsmith-collections": {                 // https://www.npmjs.com/package/metalsmith-collections
        category: {
          sortBy: "rank",
          reverse: false,
        },
        project: {
          sortBy: "rank",
          reverse: false,
        }
      },
      "metalsmith-markdown": {                    // https://github.com/segmentio/metalsmith-markdown"
        smartypants: true,
        gfm: true,
        tables: true
      },
      "metalsmith-permalinks": {                  // https://www.npmjs.com/package/metalsmith-permalinks
        pattern: ":url",
        relative: false
      },
      "metalsmith-register-helpers": {            // https://www.npmjs.com/package/metalsmith-register-helpers
        directory: templates + "/helpers"
      },
      "metalsmith-layouts": {                     // https://www.npmjs.com/package/metalsmith-layouts
        engine: "handlebars",
        directory: templates,
        partials: templates + "/partials",
        default: "static.hbs",
        rename: true
      },
      "metalsmith-sitemap": {                     // https://github.com/ExtraHop/metalsmith-sitemap
        hostname: "http://STATIC-SITE/",
      }
    }
  },
  scripts: {                                      // just moving & watching
    src: src + "/scripts/**/*.js",
    dest: build + "/js"
  },
  sass: {                                         // https://www.npmjs.com/package/gulp-sass
    src: src + "/styles/**",
    dest: build + "/css"
  },
  assets: {                                       // just moving & watching
    src: {
      root: src + "/assets/**",
      imgs: src + "/assets/images/**",
      fonts: src + "/assets/fonts/**",
      icons: src + "/assets/icons/**"
    },
    dest: {
      root: build_assets + "/",
      imgs: build_assets + "/img",
      fonts: build_assets + "/fonts",
      icons: build_assets + "/"
    }
  },
  minifyHTML: {                                   // https://www.npmjs.com/package/gulp-htmlmin
    src:  build + '/**/*.html',
    dest: build,
    options: {
      collapseWhitespace: true,
      removeComments: true
    }
  },
  minifyCSS: {                                    // https://www.npmjs.com/package/gulp-cleancss
    src: build + "/css/**/*.css",
    dest: build + "/css",
    options: {
      debug: true,
      processImport: true,
      // processImportFrom: ["!fonts.googleapis.com"],
      keepSpecialComments: '*' // '*',1,0
    }
  },
  purifyCSS: {                                    // https://github.com/purifycss/gulp-purifycss
    src:  build + "/css/**/*.css",
    dest: build + "/css",
    js:   build + "/**/*.js",
    html: build + "/**/*.html",
    options: {
      // rejected: true
    }
  },
  minifyJS: {                                     // https://www.npmjs.com/package/gulp-uglify
    src: src + "/scripts/**/*.js",
    dest: build + "/js",
    options: {
      preserveComments: 'license'
    }
  },
  minifySVG: {                                    // https://www.npmjs.com/package/gulp-svgo
    src: build + "/img/**",
    dest: build + "/img",
  },
};
