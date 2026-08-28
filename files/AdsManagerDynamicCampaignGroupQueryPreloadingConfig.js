__d(
  "AdsManagerDynamicCampaignGroupQueryPreloadingConfig",
  [
    "AdsManagerDynamicCampaignGroupQueryPreloadingConfigNoSpecsServerQuery.graphql",
    "AdsManagerDynamicCampaignGroupQueryPreloadingConfigTier2NoSpecsServerQuery.graphql",
    "AdsMgmtPreloadingUtils",
    "RelayPrefetchedStreamCache",
    "adsRelayHackPreloadersCreatePreloadingConfig",
    "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
    "arrayContainsArray",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
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
    var c = {
        subsetMatching: {
          matchesRegisteredPreloader: r(
            "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
          ),
          slicePrefetchedResponse: u,
        },
      },
      d =
        e !== void 0
          ? e
          : (e = n(
              "AdsManagerDynamicCampaignGroupQueryPreloadingConfigNoSpecsServerQuery.graphql",
            ));
    function m(e, t, n, a) {
      var i,
        l = d;
      return o("RelayPrefetchedStreamCache").subscribe(
        e,
        (i = l.params.id) != null ? i : "",
        {},
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
                  (a = a.campaign_groups_dynamic_tier_1_query_context) == null
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
                (i = i.campaign_groups_dynamic_tier_1_query_context) == null ||
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
    var p =
      s !== void 0
        ? s
        : (s = n(
            "AdsManagerDynamicCampaignGroupQueryPreloadingConfigTier2NoSpecsServerQuery.graphql",
          ));
    function _(e, t, n, a) {
      var i,
        l = p;
      return o("RelayPrefetchedStreamCache").subscribe(
        e,
        (i = l.params.id) != null ? i : "",
        {},
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
                  (a = a.campaign_groups_dynamic_tier_1_query_context) == null
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
                (i = i.campaign_groups_dynamic_tier_1_query_context) == null ||
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
    var f = r("adsRelayHackPreloadersCreatePreloadingConfig")(
        babelHelpers.extends(
          {
            getCustomSubscription: m,
            ignoreCriticalErrors: r("gkx")("1355"),
            ignoreIfServerDidntBeatJSExecution: !1,
            isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
            raceServerPreloader: !1,
          },
          c,
        ),
      ),
      g = r("adsRelayHackPreloadersCreatePreloadingConfig")(
        babelHelpers.extends(
          {
            getCustomSubscription: _,
            ignoreCriticalErrors: r("gkx")("1355"),
            ignoreIfServerDidntBeatJSExecution: !1,
            isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
            raceServerPreloader: !1,
          },
          c,
        ),
      );
    ((l.Tier1FieldsConfig = f), (l.Tier2FieldsConfig = g));
  },
  98,
);
