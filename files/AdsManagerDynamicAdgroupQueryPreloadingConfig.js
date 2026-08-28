__d(
  "AdsManagerDynamicAdgroupQueryPreloadingConfig",
  [
    "AdsMgmtPreloadingUtils",
    "adsRelayHackPreloadersCreatePreloadingConfig",
    "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.nodes;
      if (n == null) return t;
      var r = new Set(e.ids);
      return {
        nodes: n.filter(function (e) {
          return r.has(e.id);
        }),
      };
    }
    var s = {
        subsetMatching: {
          matchesRegisteredPreloader: r(
            "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
          ),
          slicePrefetchedResponse: e,
        },
      },
      u = r("adsRelayHackPreloadersCreatePreloadingConfig")(
        babelHelpers.extends(
          {
            ignoreCriticalErrors: r("gkx")("1355"),
            ignoreIfServerDidntBeatJSExecution: !1,
            isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
            raceServerPreloader: !1,
          },
          s,
        ),
      );
    l.default = u;
  },
  98,
);
