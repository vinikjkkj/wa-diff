__d(
  "MAIBASectionHighlightDataAction",
  [
    "Laminar",
    "MAIBASectionHighlightDataProvider",
    "MAIBASectionHighlightDataReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("MAIBASectionHighlightDataReducerPlugin"),
            n("MAIBASectionHighlightDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "MAIBASectionHighlightDataActionPlugin",
    );
    a.exports = e;
  },
  null,
);
