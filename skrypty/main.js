(function(window) {
  'use strict';
  var SELEKTOR_FORMULARZA = '[data-zamowienie="formularz"]';
  var Aplikacja = window.Aplikacja;
  var Furgonetka = Aplikacja.Furgonetka;
  var BazaDanych = Aplikacja.BazaDanych;

  var ObslugaFormularza = Aplikacja.ObslugaFormularza;

  var mojaFurgonetka = new Furgonetka('abc-1001', new BazaDanych());
  window.mojaFurgonetka = mojaFurgonetka;

  var obslugaFormularza = new ObslugaFormularza(SELEKTOR_FORMULARZA);
  obslugaFormularza.dodajObslugeWysylki(mojaFurgonetka.zlozZamowienie.bind(mojaFurgonetka));
  console.log(obslugaFormularza);

})(window);
