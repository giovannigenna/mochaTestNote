var Nota = function( testo ) {
    if(testo === undefined) { throw new Error() }

    this.testo = '' + testo;
}

Nota.prototype.tag = function() {
    return this.testo.split(/(?=#)|\s+/)
                     .filter( function(parola) { return parola.charAt(0) == '#'; } )
                     .map( function(parola) { return parola.replace(/[.;,|]+$/, ''); });

}


module.exports = Nota
