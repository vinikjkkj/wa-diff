__d(
  "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
  [
    "AdsWebToWhatsappDefaultedDataProvider",
    "AdsWebToWhatsappDefaultedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsWebToWhatsappDefaultedReducerPlugin"),
            n("AdsWebToWhatsappDefaultedDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorAdgroupWebToWhatsappDefaultedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
