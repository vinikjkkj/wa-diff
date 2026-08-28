__d(
  "AdsUEditorAdgroupWebsiteAddOnDefaultedAction",
  [
    "AdsWebsiteAddOnDefaultedDataProvider",
    "AdsWebsiteAddOnDefaultedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsWebsiteAddOnDefaultedReducerPlugin"),
            n("AdsWebsiteAddOnDefaultedDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorAdgroupWebsiteAddOnDefaultedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
