__d(
  "AdsMessengerPhoneNumberSwitchToggleAction",
  [
    "AdsMessengerPhoneNumberDataProvider",
    "AdsMessengerPhoneNumberSwitchToggleReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMessengerPhoneNumberSwitchToggleReducerPlugin"),
            n("AdsMessengerPhoneNumberDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsMessengerPhoneNumberSwitchToggleActionPlugin",
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
