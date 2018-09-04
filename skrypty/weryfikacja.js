(function(window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
  var Weryfikacja = {
    czyAdresFirmowy: function(email) {
      return /.+@gmail\.com$/.test(email);
    }
  };

  Aplikacja.Weryfikacja = Weryfikacja;
  window.Aplikacja = Aplikacja;

})(window);
