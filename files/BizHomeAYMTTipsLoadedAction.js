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
