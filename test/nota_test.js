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

    describe('.tag()', function() {

        it('dovrebbe restituire un array vuoto in caso il testo sia vuoto', function() {
            var nota = new Nota('');
            expect( nota.tag() ).to.eql( [] );
        });

        it('dovrebbe restituire la tag per un testo con una tag', function() {
            var nota = new Nota('#test');
            expect( nota.tag() ).to.eql( ['#test'] );
        });

        it('dovrebbe restituire la tag per un testo con una tag', function() {
            var nota = new Nota('#test #ciao #mocha');
            expect( nota.tag() ).to.eql( ['#test', '#ciao', '#mocha'] );
        });

    });

});
