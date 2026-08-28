__d(
  "isMarketingMessageDirectSendCampaign",
  [
    "AdsObjectTypes",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = !1;
      switch (e) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP: {
          var a,
            l = o("AdsPECampaignGroupSelectors")
              .getCachedByFieldsSelector()(
                t,
                { is_direct_send_campaign: null },
                i.id,
              )
              .getValue();
          n =
            (a = l == null ? void 0 : l.is_direct_send_campaign) != null
              ? a
              : !1;
          break;
        }
        case r("AdsObjectTypes").CAMPAIGN: {
          var s,
            u = o("AdsPECampaignSelectors")
              .getCachedByFieldsSelector()(t, { campaign_id: null }, i.id)
              .getValue(),
            c =
              u != null
                ? o("AdsPECampaignGroupSelectors")
                    .getCachedByFieldsSelector()(
                      u.campaign_id,
                      { is_direct_send_campaign: null },
                      i.id,
                    )
                    .getValue()
                : null;
          n =
            (s = c == null ? void 0 : c.is_direct_send_campaign) != null
              ? s
              : !1;
          break;
        }
        case r("AdsObjectTypes").ADGROUP: {
          var d,
            m = o("AdsPEAdgroupSelectors")
              .getCachedByFieldsSelector()(t, { campaign_id: null }, i.id)
              .getValue(),
            p =
              m != null
                ? o("AdsPECampaignGroupSelectors")
                    .getCachedByFieldsSelector()(
                      m.campaign_id,
                      { is_direct_send_campaign: null },
                      i.id,
                    )
                    .getValue()
                : null;
          n =
            (d = p == null ? void 0 : p.is_direct_send_campaign) != null
              ? d
              : !1;
          break;
        }
      }
      return n;
    }
    l.default = e;
  },
  98,
);
