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

        var tests = [{ descrizione: 'dovrebbe restituire un array vuoto in caso il testo sia vuoto',
                       input: '',
                       output: [] },
                     { descrizione: 'dovrebbe restituire la tag per un testo con una tag',
                       input: '#test',
                       output: ['#test'] },
                     { descrizione: 'dovrebbe restituire un array con i 3 tags',
                       input: '#test #ciao #mocha',
                       output: ['#test', '#ciao', '#mocha'] },
                     { descrizione: 'dovrebbe restituire le stesse tag a prescindere dagli spazi',
                       input: '#test       #ciao',
                       output: ['#test', '#ciao'] },
                     { descrizione: 'dovrebbe estrarre tag anche in presenza di altro testo',
                       input: 'oggi sono al #lavoro e poi #gioco',
                       output: ['#lavoro', '#gioco'] },
                     { descrizione: 'dovrebbe estrarre tag anche se sono attaccate',
                       input: 'oggi sono al #lavoro#gioco',
                       output: ['#lavoro', '#gioco'] }];

        tests.forEach(function(test) {
           it(test.descrizione, function() {
               var nota = new Nota(test.input);
               expect( nota.tag() ).to.eql( test.output );
           });
        });
    });

});
