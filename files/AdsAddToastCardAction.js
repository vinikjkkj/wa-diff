__d(
  "AdsAddToastCardAction",
  [
    "AdsToastCardDataProvider",
    "AdsToastCardsAddReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsToastCardsAddReducerPlugin"),
            n("AdsToastCardDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsAddToastCardActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsAddToastCardActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "ADS_ADD_TOAST_CARD",
    );
    a.exports = e;
  },
  null,
);
