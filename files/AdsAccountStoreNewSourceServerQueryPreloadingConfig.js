__d(
  "AdsAccountStoreNewSourceServerQueryPreloadingConfig",
  [
    "AdsMgmtPreloadingUtils",
    "adsRelayHackPreloadersCreatePreloadingConfig",
    "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return t.ad_account == null
        ? t
        : {
            ad_account: {
              id: t == null || (n = t.ad_account) == null ? void 0 : n.id,
            },
          };
    }
    var s = r("adsRelayHackPreloadersCreatePreloadingConfig")({
        ignoreCriticalErrors: !0,
        ignoreIfServerDidntBeatJSExecution: !0,
        isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
        raceServerPreloader: !0,
        subsetMatching: {
          matchesRegisteredPreloader: r(
            "adsRelayHackPreloadersMatchesIDsSubsetPreloader",
          ),
          slicePrefetchedResponse: e,
        },
      }),
      u = r("adsRelayHackPreloadersCreatePreloadingConfig")({
        ignoreCriticalErrors: !0,
        ignoreIfServerDidntBeatJSExecution: !1,
        isScenarioOngoing: o("AdsMgmtPreloadingUtils").isScenarioOngoing,
        raceServerPreloader: r("gkx")("6068"),
      });
    ((l.idPreloadingConfig = s), (l.accountPreloadingConfig = u));
  },
  98,
);
