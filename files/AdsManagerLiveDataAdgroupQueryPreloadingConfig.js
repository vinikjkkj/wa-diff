__d(
  "AdsManagerLiveDataAdgroupQueryPreloadingConfig",
  [
    "AdsManagerLiveDataAdgroupQueryPreloadingConfigNoSpecsQuery.graphql",
    "AdsManagerLiveDataAdgroupQueryPreloadingConfigTier3ServerNoSpecsQuery.graphql",
    "AdsMgmtPreloadingUtils",
    "RelayPrefetchedStreamCache",
    "adsRelayHackPreloadersCreatePreloadingConfig",
    "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
    "arrayContainsArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "AdsManagerLiveDataAdgroupQueryPreloadingConfigNoSpecsQuery.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n(
              "AdsManagerLiveDataAdgroupQueryPreloadingConfigTier3ServerNoSpecsQuery.graphql",
            ));
    function d(e, t) {
      var n = t.nodes;
      if (n == null) return t;
      var r = new Set(e.ids),
        o = n.filter(function (e) {
          return (e == null ? void 0 : e.id) != null && r.has(e.id);
        });
      return { nodes: o };
    }
    function m(e, t, n, a) {
      var i,
        l = u;
      return o("RelayPrefetchedStreamCache").subscribe(
        e,
        (i = l.params.id) != null ? i : "",
        { thumbnail_size: t.thumbnail_size },
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
                  (a = a.adgroups_live_data_query_context) == null
                    ? void 0
                    : a.adgroups_ids) != null
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
                (i = i.adgroups_live_data_query_context) == null ||
                (i = i.adgroups) == null
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
    function p(e, t, n, a) {
      var i,
        l = c;
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
                  (a = a.adgroups_live_data_query_context) == null
                    ? void 0
                    : a.adgroups_ids) != null
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
                (i = i.adgroups_live_data_query_context) == null ||
                (i = i.adgroups) == null
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
    var _ = r("adsRelayHackPreloadersCreatePreloadingConfig")({
        getCustomSubscription: m,
        ignoreCriticalErrors: !0,
        ignoreIfServerDidntBeatJSExecution: !1,
        isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
        subsetMatching: {
          matchesRegisteredPreloader: r(
            "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
          ),
          slicePrefetchedResponse: d,
        },
      }),
      f = r("adsRelayHackPreloadersCreatePreloadingConfig")({
        ignoreCriticalErrors: !0,
        ignoreIfServerDidntBeatJSExecution: !1,
        isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
        subsetMatching: {
          matchesRegisteredPreloader: r(
            "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
          ),
          slicePrefetchedResponse: d,
        },
      }),
      g = r("adsRelayHackPreloadersCreatePreloadingConfig")({
        getCustomSubscription: p,
        ignoreCriticalErrors: !0,
        ignoreIfServerDidntBeatJSExecution: !1,
        isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
        subsetMatching: {
          matchesRegisteredPreloader: r(
            "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
          ),
          slicePrefetchedResponse: d,
        },
      });
    ((l.Tier1FieldsConfig = _),
      (l.DefaultConfig = f),
      (l.Tier3FieldsConfig = g));
  },
  98,
);
