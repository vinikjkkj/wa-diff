__d(
  "PerformanceSummaryCreativeInsightsUnifiedWidgetPlugin",
  [
    "invariant",
    "AdsPerformanceSummaryTypes",
    "Timezone",
    "cr:18979",
    "gkx",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        type: "performanceSummaryWidget",
        key: "creativeInspirationInsightsUnifiedCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .CreativeInspirationInsightsUnifiedCard,
        isEnabled: function (t) {
          return (
            (t.currentLevel === "ad_set" || t.currentLevel === "campaign") &&
            r("isTruthy")(t.adAccount) &&
            t.selectedIdsAtCurrentLevel.length === 1 &&
            r("isTruthy")(t.selectedIdsAtCurrentLevel[0]) &&
            r("gkx")("28897") === !0
          );
        },
        ContentComponent: function (t) {
          var e, r, a, i, l;
          return (
            n("cr:18979") != null || s(0, 191673),
            u.jsx(n("cr:18979"), {
              accountId:
                (e = (r = t.adAccount) == null ? void 0 : r.account_id) != null
                  ? e
                  : "",
              level: t.currentLevel,
              selectedId: String(
                (a = t.selectedIdsAtCurrentLevel[0]) != null ? a : "",
              ),
              timezoneId:
                (i = (l = t.adAccount) == null ? void 0 : l.timezone_id) != null
                  ? i
                  : o("Timezone").getEnvironmentTimezoneID(),
            })
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
