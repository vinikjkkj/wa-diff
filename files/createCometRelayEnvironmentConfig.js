__d(
  "createCometRelayEnvironmentConfig",
  [
    "ActorURIConfig",
    "CometMissingFieldHandlers",
    "CometRelayPerfStore",
    "CometRootInitServerFlag",
    "LSRelayEnvironmentConfig",
    "RelayAPIConfig",
    "RelayFBOperationLoader",
    "RelayFieldLogger",
    "cometHandlerProvider",
    "cometPrefetchVideoDashV2",
    "cometWrapNetworkObservable",
    "cr:1121434",
    "cr:13458",
    "cr:1467370",
    "cr:17286",
    "cr:21303",
    "cr:27596",
    "cr:534",
    "cr:5655",
    "cr:851",
    "createCometStore",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "createRelayFBSubscribeFunction",
    "createRelayQPLLogger",
    "liveQueryFetch",
    "liveQueryFetchWithWWWInitial",
    "relay-runtime",
    "relayFBGetDataID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("RelayAPIConfig").actorID === e && t == null ? " DEFAULT" : "",
        o = t == null ? "" : " - " + t;
      return "CometRelayEnvironment (" + String(e) + o + ")" + n;
    }
    function s(e, t) {
      var a = {
          actorID: e,
          batchResponseChunks: !0,
          getAdditionalData: function () {
            var t = {};
            return (
              e != null && (t[r("ActorURIConfig").PARAMETER_ACTOR] = e),
              r("RelayAPIConfig").useXController === !1 &&
                r("RelayAPIConfig").accessToken !== "" &&
                (t.access_token = r("RelayAPIConfig").accessToken),
              t
            );
          },
          getAdditionalHeaders:
            n("cr:13458") != null
              ? n("cr:13458")()
              : function () {
                  return {};
                },
          graphURI: t,
          liveQueryFetchFn: r("liveQueryFetch"),
          liveQueryFetchWithWWWInitialFn: r("liveQueryFetchWithWWWInitial"),
          wrapObservableFn: r("cometWrapNetworkObservable")(),
        },
        i =
          !o("CometRootInitServerFlag").isServerEnvironment() &&
          n("cr:21303") != null
            ? n("cr:21303")(a)
            : r("createRelayFBNetworkFetch")(a),
        l = r("createRelayFBNetwork")(
          i,
          u(e),
          null,
          r("cometPrefetchVideoDashV2"),
        );
      return o("LSRelayEnvironmentConfig").injectLSRelayHandler(l, void 0);
    }
    function u(e) {
      var t = r("createRelayFBSubscribeFunction")({ actorID: e });
      return n("cr:27596") != null ? n("cr:27596")(t) : t;
    }
    function c() {
      var e = n("cr:1121434") != null ? n("cr:1121434")() : null,
        t =
          n("cr:534") != null
            ? n("cr:534").createRelayPerformanceLogger()
            : null,
        a =
          r("createRelayQPLLogger") == null
            ? void 0
            : r("createRelayQPLLogger")();
      return function (r) {
        (e && e(r),
          n("cr:5655") && n("cr:5655").log(r),
          o("CometRelayPerfStore").log(r),
          n("cr:851") && n("cr:851").log(r),
          n("cr:17286") && n("cr:17286").log(r),
          t && t(r),
          a != null && a(r));
      };
    }
    function d(t, a) {
      var i,
        l,
        u = t.actorID,
        d = t.graphURI,
        m = c(),
        p = a == null ? void 0 : a.extraLoggingFunction,
        _ = p
          ? function (e) {
              (m(e), p(e));
            }
          : m;
      return {
        UNSTABLE_defaultRenderPolicy: "partial",
        actorID: u,
        configName: e(u),
        getDataID: r("relayFBGetDataID"),
        handlerProvider: r("cometHandlerProvider"),
        isServer: o("CometRootInitServerFlag").isServerEnvironment(),
        log: _,
        missingFieldHandlers: r("CometMissingFieldHandlers"),
        network: (i = a == null ? void 0 : a.network) != null ? i : s(u, d),
        normalizeResponse:
          o("LSRelayEnvironmentConfig") == null
            ? void 0
            : o("LSRelayEnvironmentConfig").normalizeResponse,
        operationLoader: r("RelayFBOperationLoader"),
        operationTracker: new (o(
          "relay-runtime",
        ).__internal.OperationTracker)(),
        relayFieldLogger: o("RelayFieldLogger").create(),
        scheduler: n("cr:1467370"),
        store:
          (l = a == null ? void 0 : a.store) != null
            ? l
            : r("createCometStore")(_),
      };
    }
    ((l.createCometEnvironmentConfigName = e),
      (l.createCometNetwork = s),
      (l.createCometEnvironmentLogFn = c),
      (l.createCometRelayEnvironmentConfig = d));
  },
  98,
);
