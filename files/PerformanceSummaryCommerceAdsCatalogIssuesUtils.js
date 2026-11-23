__d(
  "PerformanceSummaryCommerceAdsCatalogIssuesUtils",
  [
    "$InternalEnum",
    "AdsPerformanceSummaryTypes",
    "AdsPerformanceSummaryWidgetContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext,
      u = n("$InternalEnum")({
        ShopsAdsCatalogIssuesCard: "shops_ads_perfsum_catalog_issues_card",
        CommerceDynamicAdsCatalogIssuesCard:
          "commerce_dynamic_ads_perfsum_catalog_issues_card",
        UnknownCatalogIssuesCard: "unknown_perfsum_catalog_issues_card",
      });
    function c() {
      var e = s(r("AdsPerformanceSummaryWidgetContext")),
        t = e.name;
      return t == null
        ? u.UnknownCatalogIssuesCard
        : t ===
            o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
              .ShopsAdsCatalogIssues
          ? u.ShopsAdsCatalogIssuesCard
          : t ===
              o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
                .CommerceDynamicAdsCatalogIssues
            ? u.CommerceDynamicAdsCatalogIssuesCard
            : u.UnknownCatalogIssuesCard;
    }
    l.useCatalogIssuesReferrer = c;
  },
  98,
);
