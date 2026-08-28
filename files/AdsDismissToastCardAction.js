__d(
  "AdsDismissToastCardAction",
  [
    "AdsAdBuilderDismissToastCardReducerPlugin",
    "AdsAdBuilderToastCardProvider",
    "AdsToastCardDataProvider",
    "AdsToastCardsDismissReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdBuilderDismissToastCardReducerPlugin"),
            n("AdsAdBuilderToastCardProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsToastCardsDismissReducerPlugin"),
            n("AdsToastCardDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_DISMISS_TOAST_CARD",
    );
    a.exports = e;
  },
  null,
);
