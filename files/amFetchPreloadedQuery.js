__d(
  "amFetchPreloadedQuery",
  [
    "AdsManagerRelayClientPreloadedData",
    "AdsManagerRelayClientPreloaderEventsConsoleLogger",
    "fetchPreloadedQuery",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l = babelHelpers.extends({}, a, {
          fetchPolicy:
            (i = a == null ? void 0 : a.fetchPolicy) != null
              ? i
              : "network-only",
        }),
        s = o("AdsManagerRelayClientPreloadedData").get(
          e,
          t,
          n,
          l,
          null,
          r("AdsManagerRelayClientPreloaderEventsConsoleLogger"),
        );
      if (s == null) {
        var u;
        return o("relay-runtime").fetchQuery(e, t, n, {
          fetchPolicy: l.fetchPolicy,
          networkCacheConfig: (u = l.networkCacheConfig) != null ? u : void 0,
        });
      }
      return (
        o("AdsManagerRelayClientPreloadedData").addDataConsumer(
          e,
          t,
          n,
          l,
          r("AdsManagerRelayClientPreloaderEventsConsoleLogger"),
        ),
        r("fetchPreloadedQuery")(e, t, s)
      );
    }
    l.default = e;
  },
  98,
);
