__d(
  "AdsMessengerSetSavedResponseIndexAction",
  [
    "AdsMessengerSavedResponseIndexProvider",
    "AdsUEditorAdgroupSavedResponseIndexReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorAdgroupSavedResponseIndexReducerPlugin"),
            n("AdsMessengerSavedResponseIndexProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsMessengerSetSavedResponseIndexActionPlugin",
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
