__d(
  "AdsPEFilterChangedAction",
  ["Laminar", "ifRequired_FOR_LAMINAR_CODEGEN"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsCreativeTablePerfScenarioLoggerPlugins",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsCreativeTablePerfScenarioLoggerPlugins.AdsCreativeTableAbandonLoggerPlugin",
                e.AdsCreativeTableAbandonLoggerPlugin,
                {},
                ["AdsCreativeReportingRegistry"],
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsPEFilterChangedActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsPEFilterChangedActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "PowerEditor.FILTER.CHANGED",
    );
    a.exports = e;
  },
  null,
);
