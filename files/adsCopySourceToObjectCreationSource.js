__d(
  "adsCopySourceToObjectCreationSource",
  ["AdDraftFragmentSource", "AdsCopySource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (
        e === r("AdsCopySource").PASTE_FROM_CLIPBOARD
          ? t === "campaign"
            ? (n = r(
                "AdDraftFragmentSource",
              ).DUPLICATE_CAMPAIGN_GROUP_FROM_CLIPBOARD)
            : t === "ad_set"
              ? (n = r(
                  "AdDraftFragmentSource",
                ).DUPLICATE_CAMPAIGN_FROM_CLIPBOARD)
              : (n = r("AdDraftFragmentSource").DUPLICATE_AD_FROM_CLIPBOARD)
          : e === r("AdsCopySource").ODAX_DUPLICATE
            ? (n = r("AdDraftFragmentSource").ODAX_DUPLICATE)
            : e === r("AdsCopySource").ODAX_EDITOR_DUPLICATE
              ? (n = r("AdDraftFragmentSource").ODAX_EDITOR_DUPLICATE)
              : e === r("AdsCopySource").SUGGESTED_ADS
                ? (n = r("AdDraftFragmentSource").SUGGESTED_ADS)
                : e === r("AdsCopySource").UPGRADE_DUPLICATE
                  ? (n = r("AdDraftFragmentSource").UPGRADE_DUPLICATE)
                  : e === r("AdsCopySource").UPGRADE_PACKAGE_DUPLICATE
                    ? (n = r("AdDraftFragmentSource").UPGRADE_PACKAGE_DUPLICATE)
                    : e === r("AdsCopySource").QUICK_DUPLICATE_REDIRECT
                      ? (n = r(
                          "AdDraftFragmentSource",
                        ).QUICK_DUPLICATE_REDIRECT)
                      : e === r("AdsCopySource").COPY_PASTE_REDIRECT
                        ? (n = r("AdDraftFragmentSource").COPY_PASTE_REDIRECT)
                        : e === r("AdsCopySource").ASC_FRAGMENTATION_MFR
                          ? (n = r(
                              "AdDraftFragmentSource",
                            ).ASC_FRAGMENTATION_MFR)
                          : e === r("AdsCopySource").QUICK_DUPLICATE_UPGRADE
                            ? (n = r(
                                "AdDraftFragmentSource",
                              ).QUICK_DUPLICATE_UPGRADE)
                            : e === r("AdsCopySource").COPY_PASTE_UPGRADE
                              ? (n = r(
                                  "AdDraftFragmentSource",
                                ).COPY_PASTE_UPGRADE)
                              : e ===
                                  r("AdsCopySource").OPTIMAL_START_INTERRUPTION
                                ? (n = r(
                                    "AdDraftFragmentSource",
                                  ).OPTIMAL_START_ENTRY_POINT)
                                : e ===
                                    r("AdsCopySource").OPTIMAL_START_CREATION
                                  ? (n = r(
                                      "AdDraftFragmentSource",
                                    ).OPTIMAL_START_CREATION)
                                  : e ===
                                      r("AdsCopySource").PLR_PE_RECOMMENDATION
                                    ? (n = r(
                                        "AdDraftFragmentSource",
                                      ).PRODUCT_INSIGHTS_PE_DUPLICATION)
                                    : t === "campaign"
                                      ? (n = r(
                                          "AdDraftFragmentSource",
                                        ).CLICK_CAMPAIGN_GROUP_DUPLICATE)
                                      : t === "ad_set"
                                        ? (n = r(
                                            "AdDraftFragmentSource",
                                          ).CLICK_CAMPAIGN_DUPLICATE)
                                        : (n = r(
                                            "AdDraftFragmentSource",
                                          ).CLICK_AD_DUPLICATE),
        n
      );
    }
    l.default = e;
  },
  98,
);
