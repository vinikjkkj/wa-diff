__d(
  "AdsVideoOpenSelectorDataAction",
  [
    "AdsVideoOpenSelectorDataLoggerPlugin",
    "AdsVideoOpenVideoPickerReducerPlugin",
    "AdsVideoPickerUIDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsVideoOpenVideoPickerReducerPlugin"),
            n("AdsVideoPickerUIDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsVideoOpenSelectorDataLoggerPlugin",
            n("AdsVideoOpenSelectorDataLoggerPlugin"),
            {},
          ),
        ];
      },
      "VIDEO.OPEN_SELECTOR",
    );
    a.exports = e;
  },
  null,
);
