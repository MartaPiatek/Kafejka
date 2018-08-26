(function(window) {
  'use strict';
  var Aplikacja = window.Aplikacja;
  var Furgonetka = Aplikacja.Furgonetka;
  var BazaDanych = Aplikacja.BazaDanych;

  var mojaFurgonetka = new Furgonetka('abc-1001', new BazaDanych());
  window.mojaFurgonetka = mojaFurgonetka;

})(window);
