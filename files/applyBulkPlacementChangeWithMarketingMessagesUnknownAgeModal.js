__d(
  "applyBulkPlacementChangeWithMarketingMessagesUnknownAgeModal",
  [
    "AdsCampaignBulkEditStore",
    "AdsWAMMUnknownAgeModalShowAction",
    "WAMOStatusAdsManagerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        !o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMMUnknownAge()
      ) {
        t();
        return;
      }
      var n = r("AdsCampaignBulkEditStore").getState().rows,
        a = e.filter(function (e) {
          var t;
          return (
            ((t = n.get(e)) == null || (t = t.current.targeting) == null
              ? void 0
              : t.user_age_unknown) == null
          );
        });
      t();
      var l = r("AdsCampaignBulkEditStore").getState().rows,
        s = a.filter(function (e) {
          var t,
            n,
            r = (t = l.get(e)) == null ? void 0 : t.current;
          return (
            r != null &&
            ((n = r.targeting) == null ? void 0 : n.user_age_unknown) === !0 &&
            o(
              "WAMOStatusAdsManagerUtils",
            ).isOnlyMarketingMessagesSelectedFromCampaign(r)
          );
        }).length;
      s > 0 &&
        r("AdsWAMMUnknownAgeModalShowAction").dispatch(
          { adsetCount: s, isAlreadyUpdated: !1, isVisible: !0 },
          {
            line: "47",
            module:
              "applyBulkPlacementChangeWithMarketingMessagesUnknownAgeModal.js",
            moduleID: i.id,
          },
        );
    }
    l.default = e;
  },
  98,
);
