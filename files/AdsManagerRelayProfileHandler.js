__d(
  "AdsManagerRelayProfileHandler",
  [
    "AdsMgmtPreloadingUtils",
    "FBLogger",
    "PreloadingEvent.flow",
    "adsIsGraphQLUsedCacheDebugModeFromURI",
    "adsIsPreloadingDebugModeFromURI",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = e.queryName;
      r("adsIsGraphQLUsedCacheDebugModeFromURI")() &&
        r("FBLogger")("ads_manager_relay_profiler").info(
          "Call Name: %s, Used Cache To Fulfill Response, Time taken: %s",
          n,
          t,
        );
    }
    function u(e, t, n, a, i) {
      var l = t.name,
        s = t.type;
      if (
        r("adsIsGraphQLUsedCacheDebugModeFromURI")() ||
        r("adsIsPreloadingDebugModeFromURI")()
      ) {
        var u,
          c = null;
        i != null && (c = i.endTime - i.startTime);
        var d = (u = t == null ? void 0 : t.error) != null ? u : n;
        r("FBLogger")("ads_manager_relay_profiler").info(
          "Call Name: %s, Preloading Event: %s, Preloading Event Type: %s%s, Time taken: %s%s",
          e,
          o("PreloadingEvent.flow").PreloadingEventName.getName(l),
          o("PreloadingEvent.flow").PreloadingEventType.getName(s),
          d != null ? ", Error: " + d.message : "",
          a,
          c != null ? ", Server time taken: " + c : "",
        );
      }
      o("AdsMgmtPreloadingUtils").defaultConfig.log(
        {
          api_request_source: null,
          call_name: e,
          endpoint: "graphql",
          error_type: s,
        },
        l,
      );
    }
    function c(t, n) {
      if (n == null) return function () {};
      var o = (e || (e = r("performanceNow")))();
      return function (t) {
        var a = (e || (e = r("performanceNow")))() - o;
        n.usedCache
          ? s(n, a)
          : n.hasPrefetcher &&
            n.prefetchingEvent != null &&
            u(n.queryName, n.prefetchingEvent, t, a, n.serverTimestamps);
      };
    }
    l.default = c;
  },
  98,
);
