var util = require('util');
var EventEmitter = require('events').EventEmitter;

var BloccoNote = function() {
    this.note = [];

}

util.inherits(BloccoNote, EventEmitter);

BloccoNote.prototype.aggiungi = function( nota ) {
    this.note.push( nota );
    this.emit('notaAggiunta', nota);
}

module.exports = BloccoNote
