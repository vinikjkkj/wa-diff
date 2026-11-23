__d(
  "AdsMessengerPhoneNumberUpdateAction",
  [
    "AdsMessengerPhoneNumberDataProvider",
    "AdsMessengerPhoneNumberUpdateReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMessengerPhoneNumberUpdateReducerPlugin"),
            n("AdsMessengerPhoneNumberDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsMessengerPhoneNumberUpdateActionPlugin",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
