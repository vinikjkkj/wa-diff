__d(
  "AdsAdgroupDraftFragmentsDataProviderPlugin",
  [
    "AdsAdgroupLiveStoreFieldGranularProxy",
    "AdsApplicationIDs",
    "AdsDraftFragmentStoreStateUtils",
    "AdsMgmtQPLLogger",
    "adsPENavStateSelector",
    "ifRequired",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (r("adsPENavStateSelector")().tool === "REPORTING") return e;
      var n = e;
      return (
        o("AdsMgmtQPLLogger").addPoint(
          r("qpl")._(41484307, "4396"),
          "REDUCE_START",
        ),
        o("AdsMgmtQPLLogger").markerAnnotate(r("qpl")._(41484307, "4396"), {
          string: { action_type: t.actionType },
        }),
        r("ifRequired")(
          "AdsAdgroupDraftFragmentReducer",
          function (r) {
            n = r(e, t);
          },
          function () {},
        ),
        o("AdsMgmtQPLLogger").addPoint(
          r("qpl")._(41484307, "4396"),
          "REDUCE_END",
        ),
        o("AdsMgmtQPLLogger").markerAnnotate(r("qpl")._(41484307, "4396"), {
          string: { action_type: t.actionType },
        }),
        n
      );
    }
    var s = {
        initialState: o("AdsDraftFragmentStoreStateUtils").create(
          "ad",
          r("AdsAdgroupLiveStoreFieldGranularProxy"),
          r("AdsApplicationIDs").ADS_POWER_EDITOR,
        ),
        legacyFluxReduce: function (n, r) {
          var t = n,
            a = e(n, r);
          return (
            o(
              "AdsDraftFragmentStoreStateUtils",
            ).validateStoreStateAfterMutations(t, a, r),
            a
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
