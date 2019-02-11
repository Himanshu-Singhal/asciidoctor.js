
const glob = require('glob');
const asciidoctor = require('asciidoctor.js')();
glob('./**/*.adoc', {}, function (err, files) {
  files.forEach(function (adocfile) {
    // let numOfSlashes = (adocfile.match(/\//g) || []).length;
    // let myCssPath = "";
    // for (let i = 0; i < numOfSlashes - 1; i++) {
    //     myCssPath += "../";
    // }

    // html = Asciidoctor.convert_file (adocfile);
    //  to_file: false, header_footer: true
    // puts html


    asciidoctor.convertFile(adocfile, { attributes: { stylesdir: '/css', stylesheet: 'asciidoctor.css' } });
  });
});


// const glob = require('glob');
// const asciidoctor = require('asciidoctor.js')();
// glob('./**/*.adoc', {}, function (err, files) {
//     files.forEach(function (adocfile) {
//         let numOfSlashes = (adocfile.match(/\//g) || []).length;
//         let myCssPath = "";
//         for (let i = 0; i < numOfSlashes - 1; i++) {
//             myCssPath += "../";
//         }
//         asciidoctor.convertFile(adocfile, { attributes: { stylesdir: myCssPath, stylesheet: 'asciidoctor.css' } });
//     });
// });
