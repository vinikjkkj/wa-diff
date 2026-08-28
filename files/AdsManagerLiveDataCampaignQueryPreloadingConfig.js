__d(
  "AdsManagerLiveDataCampaignQueryPreloadingConfig",
  [
    "AdsManagerLiveDataCampaignQueryPreloadingConfigNoSpecsQuery.graphql",
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
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "AdsManagerLiveDataCampaignQueryPreloadingConfigNoSpecsQuery.graphql",
            ));
    function u(e, t) {
      var n = t.nodes;
      if (n == null) return t;
      var r = new Set(e.ids);
      return {
        nodes: n.filter(function (e) {
          return r.has(e.id);
        }),
      };
    }
    function c(e, t, n, a) {
      var i,
        l = s,
        u = {},
        c = {
          __relay_internal__pv__GraphQLIncludeAdgroupActiveStudiesrelayprovider:
            r("GraphQLIncludeAdgroupActiveStudies.relayprovider").get(),
        };
      return o("RelayPrefetchedStreamCache").subscribe(
        e,
        (i = l.params.id) != null ? i : "",
        babelHelpers.extends({}, u, c),
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
                  (a = a.campaigns_live_table_context) == null
                    ? void 0
                    : a.campaign_ids) != null
                  ? e
                  : [],
              u = Array.isArray(t.ids) ? t.ids : [],
              c = !1;
            if (
              (u.length > 0 && r("arrayContainsArray")(s, u) && (c = !0), !c)
            ) {
              n.complete();
              return;
            }
            var d =
                l == null ||
                (i = l.xfb_ads_ui_root) == null ||
                (i = i.campaigns_live_table_context) == null ||
                (i = i.campaigns) == null
                  ? void 0
                  : i.nodes,
              m = d != null ? { nodes: d } : null;
            return n.next({ data: m != null ? m : { nodes: [] } });
          },
        }),
        l.params.name,
        a,
      );
    }
    var d = r("adsRelayHackPreloadersCreatePreloadingConfig")({
      getCustomSubscription: c,
      ignoreCriticalErrors: r("gkx")("1355"),
      ignoreIfServerDidntBeatJSExecution: !1,
      isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
      subsetMatching: {
        matchesRegisteredPreloader: r(
          "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
        ),
        slicePrefetchedResponse: u,
      },
    });
    l.default = d;
  },
  98,
);
