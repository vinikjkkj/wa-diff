__d(
  "AdFLEXAdsManagerConfigPlugin",
  ["fbt", "AdsConvergenceNuxContentUtils", "MarketingMessagesGKUtils", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        type: "flexConfig",
        key: "adsManager",
        tool: "MANAGE_ADS",
        excludedColumnPreset: "MARKETING_MESSAGES",
        getDeleteDraftDialogContent: function (t, n) {
          return o(
            "MarketingMessagesGKUtils",
          ).canAdAccountAccessMessageMarketingInfra()
            ? s._(
                /*BTDS*/ "Any changes made to messages or ads in this ad account {account name} [{Ad account ID}] that haven't yet been published will be discarded.",
                [
                  s._param("account name", u.jsx("strong", { children: t })),
                  s._param("Ad account ID", n),
                ],
              )
            : o("AdsConvergenceNuxContentUtils").getDeleteDraftDialogContent(
                t,
                n,
              );
        },
        filterCampaignGroupDraftTypeahead: function (t) {
          return t !== !0;
        },
        shouldHideMessageMarketingLiquiditySettings: !1,
      },
      d = c;
    l.default = d;
  },
  226,
);
