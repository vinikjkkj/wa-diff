__d(
  "BizHomeAYMTTipsLoadedAction",
  ["BizHomeAYMTProvider", "BizHomeAYMTReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("BizHomeAYMTReducerPlugins").onTipsLoaded,
            n("BizHomeAYMTProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "BizHomeAYMTTipsLoadedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
