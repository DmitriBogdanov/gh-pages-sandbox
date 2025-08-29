// __________________________________ CONTENTS ___________________________________
// 
//    Modification script which adjusts '<- back to README.md' links so they point
//    to home page instead of README when viewed though a website, without this we
//    would just get 404 (since README resides outside of the docs folder).
// _______________________________________________________________________________

[...document.querySelectorAll("a[href='..'")]
    .forEach(el => el.setAttribute('href', 'index.html'))
