__d(
  "AdsAdObjectUtils",
  ["AdsPEAdgroupSelectors", "AdsPECampaignSelectors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n, r;
      if (t == null) return null;
      switch (e) {
        case "campaign":
          return t;
        case "ad_set":
          return (n = o("AdsPECampaignSelectors")
            .getCachedByFieldsSelector()(t, { campaign_id: null }, i.id)
            .getValue()) == null
            ? void 0
            : n.campaign_id;
        case "ad":
          return (r = o("AdsPEAdgroupSelectors")
            .getCachedByFieldsSelector()(t, { campaign_id: null }, i.id)
            .getValue()) == null
            ? void 0
            : r.campaign_id;
      }
      return null;
    }
    function s(e, t) {
      var n, r;
      if (t == null) return null;
      switch (e) {
        case "campaign":
          return null;
        case "ad_set":
          return (n = o("AdsPECampaignSelectors")
            .getCachedByFieldsSelector()(t, { id: null }, i.id)
            .getValue()) == null
            ? void 0
            : n.id;
        case "ad":
          return (r = o("AdsPEAdgroupSelectors")
            .getCachedByFieldsSelector()(t, { adset_id: null }, i.id)
            .getValue()) == null
            ? void 0
            : r.adset_id;
      }
      return null;
    }
    function u(e, t) {
      return t == null ? null : e === "ad" ? t : null;
    }
    ((l.getCampaignGroupID = e), (l.getCampaignID = s), (l.getAdgroupID = u));
  },
  98,
);
