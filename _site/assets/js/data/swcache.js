const resource = [
  /* --- CSS --- */
  '/blog-jekyll/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/blog-jekyll/app.js',
  '/blog-jekyll/sw.js',

  /* --- HTML --- */
  '/blog-jekyll/index.html',
  '/blog-jekyll/404.html',

  
    '/blog-jekyll/categories/',
  
    '/blog-jekyll/tags/',
  
    '/blog-jekyll/archives/',
  
    '/blog-jekyll/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/blog-jekyll/assets/img/favicons/android-chrome-192x192.png',
    '/blog-jekyll/assets/img/favicons/android-chrome-512x512.png',
    '/blog-jekyll/assets/img/favicons/apple-touch-icon.png',
    '/blog-jekyll/assets/img/favicons/favicon-16x16.png',
    '/blog-jekyll/assets/img/favicons/favicon-32x32.png',
    '/blog-jekyll/assets/img/favicons/favicon.ico',
    '/blog-jekyll/assets/img/favicons/mstile-150x150.png',
    '/blog-jekyll/assets/js/dist/categories.min.js',
    '/blog-jekyll/assets/js/dist/commons.min.js',
    '/blog-jekyll/assets/js/dist/home.min.js',
    '/blog-jekyll/assets/js/dist/misc.min.js',
    '/blog-jekyll/assets/js/dist/page.min.js',
    '/blog-jekyll/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

