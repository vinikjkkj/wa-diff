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
    );
    a.exports = e;
  },
  null,
);
