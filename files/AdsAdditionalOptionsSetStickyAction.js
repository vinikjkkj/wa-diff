__d(
  "AdsAdditionalOptionsSetStickyAction",
  [
    "AdsAdditionalOptionsDataProvider",
    "AdsAdditionalOptionsSetStickyReducerPlugin",
    "AdsFocusFrameworkStickyFieldsLoadedLoggerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdditionalOptionsSetStickyReducerPlugin"),
            n("AdsAdditionalOptionsDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsFocusFrameworkStickyFieldsLoadedLoggerPlugin",
            n("AdsFocusFrameworkStickyFieldsLoadedLoggerPlugin"),
            {},
          ),
        ];
      },
      "AdsAdditionalOptionsSetStickyActionPlugin",
    );
    a.exports = e;
  },
  null,
);
