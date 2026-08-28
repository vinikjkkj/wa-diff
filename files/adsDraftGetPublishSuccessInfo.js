__d(
  "adsDraftGetPublishSuccessInfo",
  ["adsDraftGetLevelsWithCounts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a = e.every(function (e) {
          return e.action === "add";
        }),
        i = r("adsDraftGetLevelsWithCounts")(e),
        l = ((t = i.ad) == null ? void 0 : t.success) || 0,
        s = ((n = i.ad_set) == null ? void 0 : n.success) || 0,
        u = ((o = i.campaign) == null ? void 0 : o.success) || 0;
      return {
        is_new_fragment: a,
        current_action_ads_count: l,
        current_action_campaigns_count: s,
        current_action_campaign_groups_count: u,
      };
    }
    l.default = e;
  },
  98,
);
