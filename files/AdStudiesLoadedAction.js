__d(
  "AdStudiesLoadedAction",
  ["AdStudiesLoadedReducerPlugin", "AdStudiesProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdStudiesLoadedReducerPlugin"),
            n("AdStudiesProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdStudiesLoadedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
