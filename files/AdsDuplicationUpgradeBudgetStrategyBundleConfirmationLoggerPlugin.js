__d(
  "AdsDuplicationUpgradeBudgetStrategyBundleConfirmationLoggerPlugin",
  ["AdsBudgetStrategyBundleDUGKUtils", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t, n) {
          var e = t.copyRequests,
            a = n.bundleSelection;
          if (
            o(
              "AdsBudgetStrategyBundleDUGKUtils",
            ).isEligibleForBudgetStrategyBundleDUWithoutExposureLogging() &&
            a.selectedSolutionKey != null
          ) {
            var i,
              l = {
                adAccountIDs: e.map(function (e) {
                  var t = e.accountID;
                  return t;
                }),
                draftIDs: e.map(function (e) {
                  var t = e.draftID;
                  return t;
                }),
                sourceAdObjectIDs: e.flatMap(function (e) {
                  var t = e.ids;
                  return t;
                }),
              },
              s = JSON.stringify(l);
            r("AdsInterfacesLogger").log({
              data:
                ((i = {}),
                (i.sub_event = "budget_strategy_bundle_confirmed"),
                (i.message = s),
                i),
              eventName: "budget_flex_exp2",
            });
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
