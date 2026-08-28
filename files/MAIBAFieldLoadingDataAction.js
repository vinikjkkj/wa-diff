__d(
  "MAIBAFieldLoadingDataAction",
  [
    "Laminar",
    "MAIBAFieldLoadingDataProvider",
    "MAIBAFieldLoadingDataReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("MAIBAFieldLoadingDataReducerPlugin"),
            n("MAIBAFieldLoadingDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "MAIBAFieldLoadingDataActionPlugin",
    );
    a.exports = e;
  },
  null,
);
