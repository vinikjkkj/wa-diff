__d(
  "CombinedCampaign-combined_adgroups-resolver",
  [
    "AdsAdgroupCombinedListStore",
    "AdsDML",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsLoadStateUtils_LEGACY",
    "AdsRelayReadInteropHostIDUtils",
    "adsUEditorSlowSelectorsLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function () {
        return o(
          "AdsAdgroupCombinedListStore",
        ).AdsAdgroupCombinedListStore.getForCampaignsSelector.getStores();
      }, o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore.getForCampaignsSelector),
      s = o("AdsDML")
        .Query({ name: i.id, liveResolverDMLQuery: !0 })
        .Derived(function (t) {
          var n = t.vars,
            r = n.account_id,
            a = n.adObjectLevel,
            i = n.hostID,
            l = n.ids,
            s = n.limit;
          if (i == null || l == null) return [];
          var u = [],
            c = e()([r, l]);
          return (
            Array.from(c.values()).forEach(function (e) {
              if (o("AdsLoadStateUtils_LEGACY").isLoaded(e)) {
                var t;
                (t = u).push.apply(t, e.list);
              }
            }),
            s != null && (u = u.slice(0, s)),
            u.map(function (e) {
              return {
                id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
                  e,
                  i,
                  a,
                ),
              };
            })
          );
        });
    function u(e, t) {
      var n,
        r = e.hostID;
      return o("adsUEditorSlowSelectorsLogging").logAdgroupOverfetching(
        o("AdsDML").subscribeQueryLive(s, {
          account_id: (n = e.campaign.account_id) != null ? n : "",
          adObjectLevel: e.adObjectLevel,
          hostID: r,
          ids: e.campaign.id == null ? null : [e.campaign.id],
          limit: t.limit,
        }),
      );
    }
    l.combined_adgroups_slow = u;
  },
  98,
);
