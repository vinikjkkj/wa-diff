__d(
  "PerformanceSummaryMarketingMessagesGuidanceCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "CometPlaceholder.react",
    "PerformanceSummaryMarketingMessagesGuidanceCard.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "marketingMessagesGuidanceCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .MarketingMessagesGuidanceCard,
        isEnabled: function (t) {
          return (
            t.selectedIDsByLevel.has("ad_set") ||
            t.selectedIDsByLevel.has("campaign")
          );
        },
        ContentComponent: function (t) {
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: s.jsx(
              r("PerformanceSummaryMarketingMessagesGuidanceCard.react"),
              { selectedIDsByLevel: t.selectedIDsByLevel },
            ),
          });
        },
        logKey: "marketing_messages_guidance",
      },
      c = u;
    l.default = c;
  },
  98,
);
