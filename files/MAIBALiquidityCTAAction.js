__d(
  "MAIBALiquidityCTAAction",
  ["Laminar", "MAIBALiquidityCTAProvider", "MAIBALiquidityCTAReducerPlugin"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("MAIBALiquidityCTAReducerPlugin"),
            n("MAIBALiquidityCTAProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "MAIBALiquidityCTAActionPlugin",
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
