(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};

  function Furgonetka(identyfikator, bazadanych){
    this.identyfikator = identyfikator;
    this.bazadanych = bazadanych;
  }

Furgonetka.prototype.zlozZamowienie = function(zamowienie){
  console.log('Złóż zamówienie dla: ' + zamowienie.email);
  this.bazadanych.dodaj(zamowienie.email, zamowienie);
};

Furgonetka.prototype.zrealizujZamowienie = function(idklienta){
  console.log('Zrealizowane zamówienie dla ' + idklienta);
  this.bazadanych.usun(idklienta);
}

Furgonetka.prototype.drukujZamowienie = function(){
  var tablicaKlientow = Object.keys(this.bazadanych.pobierzWszystko());
  console.log('Furgonetka nr ' + this.identyfikator + ' ma niezrealizowane zamowienia: ');
  tablicaKlientow.forEach(function(id) {
    console.log(this.bazadanych.pobierz(id));
  }.bind(this));
};

  Aplikacja.Furgonetka = Furgonetka;
  window.Aplikacja = Aplikacja;
})(window);
