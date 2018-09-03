(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
var $ = window.jQuery;
  function ObslugaFormularza(selektor){

if(!selektor){
  throw new Error('Brak selektora');
}
this.$elementFormularza = $(selektor);

if(this.$elementFormularza.length === 0){
  throw new Error('Brak elementów odpowiadających selektorowi: ' + selektor);
}
  }

ObslugaFormularza.prototype.dodajObslugeWysylki = function(fn) {
  console.log('Utworzenie obslugi zdarzenia submit formularza');

  this.$elementFormularza.on('submit', function(zdarzenie) {
    zdarzenie.preventDefault();
    var dane = {};
    $(this).serializeArray().forEach(function(element) {
      dane[element.name] = element.value;
      console.log('Element ' + element.name + ' ma wartość ' + element.value);
    });
    console.log(dane);
    fn(dane);
    this.reset();
    this.elements[0].focus();
  });
};

  Aplikacja.ObslugaFormularza = ObslugaFormularza;
  window.Aplikacja = Aplikacja;
})(window);
