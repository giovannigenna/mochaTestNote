var expect      = require('chai').expect;
var BloccoNote  = require('../src/bloccoNote.js');

describe('Blocco note', function() {

    it('dovrebbe emettere un evento quando viene aggiunta una nota', function( finito ) {

        var nota = {ciao:"hola"};
        var bloccoNote = new BloccoNote();

        bloccoNote.on('notaAggiunta', function(notaAggiunta) {

            expect(notaAggiunta).to.equal(nota);

            finito();

        });

        bloccoNote.aggiungi( nota );
    });

});
