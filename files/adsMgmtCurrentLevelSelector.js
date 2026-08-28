__d(
  "adsMgmtCurrentLevelSelector",
  [
    "AdsPENavigationUtils",
    "AdsSelectionLevelSelectors",
    "adsCreateSelector",
    "adsPEManageAdsSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsPEManageAdsSectionSelector"),
          o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
        ],
        function (t, n) {
          return t
            ? t === "CAMPAIGN_OVERVIEW"
              ? "campaignGroup"
              : t === "PACKAGE_AD_CREATION"
                ? n === "ad"
                  ? "adgroup"
                  : n === "ad_set"
                    ? "campaign"
                    : n === "campaign"
                      ? "campaignGroup"
                      : null
                : r("AdsPENavigationUtils").navSectionToLevelMap.get(t) || null
            : null;
        },
        { name: i.id + ".adsMgmtCurrentLevelSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
