(function(window) {
  'use strict';
  var SELEKTOR_FORMULARZA = '[data-zamowienie="formularz"]';
  var SELEKTOR_LISTY_ZAMOWIEN = '[data-zamowienie="listaZamowien"]';

  var Aplikacja = window.Aplikacja;
  var Furgonetka = Aplikacja.Furgonetka;
  var BazaDanych = Aplikacja.BazaDanych;

  var ObslugaFormularza = Aplikacja.ObslugaFormularza;

var ListaZamowien = Aplikacja.ListaZamowien;
  var mojaFurgonetka = new Furgonetka('abc-1001', new BazaDanych());
  window.mojaFurgonetka = mojaFurgonetka;

var listaZamowien = new ListaZamowien(SELEKTOR_LISTY_ZAMOWIEN);
listaZamowien.dodajObslugeKlikniecia(mojaFurgonetka.zrealizujZamowienie.bind(mojaFurgonetka));

  var obslugaFormularza = new ObslugaFormularza(SELEKTOR_FORMULARZA);
  obslugaFormularza.dodajObslugeWysylki(function(dane) {
  mojaFurgonetka.zlozZamowienie.call(mojaFurgonetka, dane);
  listaZamowien.dodajWiersz.call(listaZamowien, dane);
});

})(window);
