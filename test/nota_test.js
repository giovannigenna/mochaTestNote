var expect = require('chai').expect;
var Nota   = require('../src/nota.js');

describe('Nota', function() {

    describe('Alla creazione', function() {

        it('Dovrebbe prendere un testo ed esporlo come proprietà', function() {
           var nota = new Nota('testo di prova');
            expect(nota).to.have.property('testo', 'testo di prova');
        });

        it('Solleva eccezione se manca il testo', function() {
           expect(function() {
               var nota = new Nota();
           }).to.throw(Error);
        });

        it('dovrebbe accettare un testo composto da un solo zero', function() {
           var nota = new Nota(0);
            expect(nota).to.have.property('testo', '0');
        });

    });

});
