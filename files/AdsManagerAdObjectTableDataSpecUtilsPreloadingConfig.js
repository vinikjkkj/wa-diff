__d(
  "AdsManagerAdObjectTableDataSpecUtilsPreloadingConfig",
  [
    "AdsManagerLiveData",
    "AdsMgmtPreloadingUtils",
    "GraphQLIncludeAdgroupActiveStudies.relayprovider",
    "RelayPrefetchedStreamCache",
    "adsRelayHackPreloadersCreatePreloadingConfig",
    "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
    "arrayContainsArray",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r =
          (n = t.ad_campaign_group_search) == null
            ? void 0
            : n.ad_campaign_groups;
      if (r == null) return t;
      var o = new Set(e.ids),
        a = r.filter(function (e) {
          return o.has(e.id);
        });
      return { ad_campaign_group_search: { ad_campaign_groups: a } };
    }
    var s = {
      subsetMatching: {
        matchesRegisteredPreloader: r(
          "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
        ),
        slicePrefetchedResponse: e,
      },
    };
    function u(e, t, n, a) {
      var i,
        l =
          o(
            "AdsManagerLiveData",
          ).AdsManagerLiveDataCampaignGroupThrowOnFieldErrorQueryNoSpecs,
        s = {},
        u = {
          __relay_internal__pv__GraphQLIncludeAdgroupActiveStudiesrelayprovider:
            r("GraphQLIncludeAdgroupActiveStudies.relayprovider").get(),
        };
      return o("RelayPrefetchedStreamCache").subscribe(
        e,
        (i = l.params.id) != null ? i : "",
        babelHelpers.extends({}, s, u),
        babelHelpers.extends({}, n, {
          next: function (o) {
            var e,
              a,
              i,
              l = o.data,
              s =
                (e =
                  l == null ||
                  (a = l.xfb_ads_ui_root) == null ||
                  (a = a.campaign_groups_live_data_query_context) == null
                    ? void 0
                    : a.campaign_group_ids) != null
                  ? e
                  : [],
              u = Array.isArray(t.ids) ? t.ids : [];
            if (u.length === 0 || !r("arrayContainsArray")(s, u)) {
              n.complete();
              return;
            }
            var c =
                l == null ||
                (i = l.xfb_ads_ui_root) == null ||
                (i = i.campaign_groups_live_data_query_context) == null ||
                (i = i.campaign_groups) == null
                  ? void 0
                  : i.nodes,
              d = c != null ? { nodes: c } : null;
            return n.next({ data: d != null ? d : { nodes: [] } });
          },
        }),
        l.params.name,
        a,
      );
    }
    var c = r("adsRelayHackPreloadersCreatePreloadingConfig")(
      babelHelpers.extends(
        {
          getCustomSubscription: u,
          ignoreCriticalErrors: r("gkx")("1355"),
          ignoreIfServerDidntBeatJSExecution: !1,
          isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
          raceServerPreloader: !1,
        },
        s,
      ),
    );
    l.default = c;
  },
  98,
);
