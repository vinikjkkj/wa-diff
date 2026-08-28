__d(
  "AdsManagerRelayEnvironment",
  [
    "AMRelayRequestMetadataEvent",
    "AdsDataAtom",
    "AdsManagerRelayLogger",
    "AdsManagerRelayProfileHandler",
    "AdsManagerRelayQueryResponseCache",
    "AdsManagerRelayRecordSource",
    "CometRelayQueryProfiler",
    "CometRootInitServerFlag",
    "CurrentUser",
    "LSRelayEnvironmentConfig",
    "ReactiveExecutorBatcher",
    "RelayFBHandlerProvider",
    "RelayFBOperationLoader",
    "RelayFBScheduler",
    "RelayFieldLogger",
    "RelayModern",
    "configureRelayForAds",
    "cr:10881",
    "cr:1121434",
    "cr:1141",
    "cr:19594",
    "cr:37580",
    "cr:3810",
    "cr:534",
    "cr:6742",
    "createRelayAdsManagerNetwork",
    "createRelayAdsManagerNetworkFetch",
    "createRelayFBSubscribeFunction",
    "forEachObject",
    "getRelayFBMissingFieldHandlers",
    "gkx",
    "liveQueryFetch",
    "liveQueryFetchWithWWWInitial",
    "relay-runtime",
    "relay-runtime/util/RelayProfiler",
    "relayFBGetDataID",
    "requireWeak",
    "resolveImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    (r("configureRelayForAds")(),
      o("relay-runtime/util/RelayProfiler").attachProfileHandler(
        "fetchRelayQuery",
        r("AdsManagerRelayProfileHandler"),
      ),
      o("CometRelayQueryProfiler").install());
    function s() {
      var e = {};
      return (
        o("AMRelayRequestMetadataEvent").call(e),
        r("requireWeak")("PEAppContext", function (t) {
          e.__aaid = t.getEventDataForLogging().ad_account_id;
        }),
        r("requireWeak")("QPLUserFlow", function (t) {
          var n = t.getActiveFlowIDs();
          n.length > 0 && (e.qpl_active_flow_ids = n.sort().join(","));
        }),
        e
      );
    }
    function u() {
      var e = {},
        t = s();
      return (
        r("forEachObject")(t, function (t, n) {
          e[n] = Array.isArray(t) ? JSON.stringify(t) : t;
        }),
        e
      );
    }
    var c = r("createRelayAdsManagerNetwork")(
        r("createRelayAdsManagerNetworkFetch")({
          getAdditionalData: u,
          getStoreSize: function () {
            return o("AdsManagerRelayRecordSource").source.size();
          },
          liveQueryFetchFn: r("liveQueryFetch"),
          liveQueryFetchWithWWWInitialFn: r("liveQueryFetchWithWWWInitial"),
          queryResponseCache: o("AdsManagerRelayQueryResponseCache")
            .QueryResponseCache,
          retryDelays: [500, 1e3, 2e3],
        }),
        r("createRelayFBSubscribeFunction")({
          queryResponseCache: o("AdsManagerRelayQueryResponseCache")
            .QueryResponseCache,
        }),
        r("ReactiveExecutorBatcher"),
      ),
      d = n("cr:1121434") != null ? n("cr:1121434")() : null,
      m =
        n("cr:534") != null ? n("cr:534").createRelayPerformanceLogger() : null,
      p =
        n("cr:6742") != null
          ? n("cr:6742")(function () {
              return o("AdsManagerRelayRecordSource").source.size();
            })
          : null,
      _ = n("cr:10881") != null ? n("cr:10881")() : null,
      f = n("cr:1141") != null ? n("cr:1141")() : null;
    function g() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.filter(Boolean);
      return r.length === 0
        ? null
        : function (e) {
            r.forEach(function (t) {
              t(e);
            });
          };
    }
    var h = n("cr:37580") != null ? n("cr:37580")() : null,
      y = o("AdsManagerRelayLogger").createAdsManagerRelayLogger(
        g(d, m, p, _, n("cr:19594"), f, h),
      );
    r("gkx")("21154") &&
      (o(
        "relay-runtime",
      ).RelayFeatureFlags.ENABLE_FIELD_GRANULAR_NOTIFICATIONS = !0);
    var C = new (
      n("cr:3810") != null ? n("cr:3810") : o("relay-runtime").Store
    )(o("AdsManagerRelayRecordSource").source, {
      gcReleaseBufferSize: 10,
      gcScheduler: r("resolveImmediate"),
      getDataID: r("relayFBGetDataID"),
      log: y,
      operationLoader: r("RelayFBOperationLoader"),
      queryCacheExpirationTime: 1e3 * 60 * 5,
    });
    C.holdGC();
    var b = r("RelayModern").createEnvironment({
        actorID: r("CurrentUser").getAccountID(),
        configName: "AdsManagerRelayEnvironment",
        getDataID: r("relayFBGetDataID"),
        handlerProvider: r("RelayFBHandlerProvider"),
        isServer: o("CometRootInitServerFlag").isServerEnvironment(),
        log: y,
        missingFieldHandlers: r("getRelayFBMissingFieldHandlers")(),
        network: c,
        normalizeResponse: o("LSRelayEnvironmentConfig").normalizeResponse,
        operationLoader: r("RelayFBOperationLoader"),
        relayFieldLogger: o("RelayFieldLogger").create(),
        scheduler: r("RelayFBScheduler"),
        store: C,
      }),
      v = r("gkx")("4772");
    (e || (e = r("AdsDataAtom"))).registerBatchingCallback(function (e) {
      if (v) {
        var t = C.getEpoch(),
          n = !1;
        (r("ReactiveExecutorBatcher").executeBatchedUpdates(function () {
          n = C.batchLiveStateUpdatesWithoutNotify(e);
        }),
          n && t === C.getEpoch() && C.notify());
      } else
        C.batchLiveStateUpdates(function () {
          r("ReactiveExecutorBatcher").executeBatchedUpdates(e);
        });
    });
    var S = b;
    l.default = S;
  },
  98,
);
