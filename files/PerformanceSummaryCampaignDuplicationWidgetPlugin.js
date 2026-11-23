__d(
  "PerformanceSummaryCampaignDuplicationWidgetPlugin",
  [
    "AdsInterfacesRouter",
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryCampaignDuplicationContainer.react",
    "qex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "campaignDuplicationCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .CampaignDuplicationCard,
        isEnabled: function (t) {
          return t.currentLevel === "campaign" && c();
        },
        ContentComponent: function () {
          return s.jsx(
            r("PerformanceSummaryCampaignDuplicationContainer.react"),
            {},
          );
        },
        logKey: "campaign_duplication",
      };
    function c() {
      var e = r("AdsInterfacesRouter").get().getQueryParams();
      return e.nav_entry_point !== "igfa_first_campaign_view_insights"
        ? !1
        : r("qex")._("1619") === !0;
    }
    var d = u;
    l.default = d;
  },
  98,
);
