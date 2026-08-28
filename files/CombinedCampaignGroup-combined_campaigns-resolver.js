__d(
  "CombinedCampaignGroup-combined_campaigns-resolver",
  [
    "AdsAdObjectRelayIDUtils",
    "AdsDML",
    "AdsRelayReadInteropHostIDUtils",
    "adsMatchedCampaignIDsWithBidStrategyChangeBySelectedCampaignGroupsSelector",
    "adsUEditorSlowSelectorsLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDML")
      .Query({ name: i.id, liveResolverDMLQuery: !0 })
      .Derived(function (e) {
        var t = o(
            "adsMatchedCampaignIDsWithBidStrategyChangeBySelectedCampaignGroupsSelector",
          ).dmlGetCampaignIDsByCampaignGroupIDsSelector(),
          n = e.vars,
          r = n.account_id,
          a = n.adObjectLevel,
          i = n.campaign_group_ids,
          l = n.campaign_ids,
          s = n.hostID,
          u = n.limit;
        if (s == null || r == null) return null;
        e.data.L2CampaignList({
          accountID: r,
          campaignGroupIDs: i.filter(Boolean),
        });
        var c = t(r, i.filter(Boolean)),
          d = [],
          m = l;
        return (
          m != null
            ? (d = c
                .filter(function (e) {
                  return m.includes(e);
                })
                .map(function (e) {
                  return {
                    id: o(
                      "AdsRelayReadInteropHostIDUtils",
                    ).encodeRelayIDWithHostID(e, s, a),
                  };
                }))
            : (d = c.map(function (e) {
                return {
                  id: o(
                    "AdsRelayReadInteropHostIDUtils",
                  ).encodeRelayIDWithHostID(e, s, a),
                };
              })),
          u != null && (d = d.slice(0, u)),
          d
        );
      });
    function s(t, n) {
      var r,
        a,
        i = t.hostID,
        l =
          (r =
            (a = n.relayIDs) == null
              ? void 0
              : a
                  .map(function (e) {
                    return o("AdsAdObjectRelayIDUtils").decodeAdObjectRelayID(
                      e,
                    );
                  })
                  .map(function (e) {
                    var t = e.id;
                    return t;
                  })) != null
            ? r
            : n.ids;
      return o("adsUEditorSlowSelectorsLogging").logLiveResolverOverfetching(
        o("AdsDML").subscribeQueryLive(e, {
          account_id: t.campaignGroup.account_id,
          adObjectLevel: t.adObjectLevel,
          campaign_group_ids: [t.campaignGroup.id],
          campaign_ids: l,
          hostID: i,
          limit: n.limit,
        }),
        "campaigns",
      );
    }
    function u(t, n) {
      var r = t.hostID;
      return o("adsUEditorSlowSelectorsLogging").logLiveResolverOverfetching(
        o("AdsDML").subscribeQueryLive(e, {
          account_id: t.campaignGroup.account_id,
          adObjectLevel: t.adObjectLevel,
          campaign_group_ids: [t.campaignGroup.id],
          campaign_ids: null,
          hostID: r,
          limit: n.limit,
        }),
        "campaigns",
      );
    }
    ((l.combined_campaigns = s), (l.combined_campaigns_slow = u));
  },
  98,
);
