__d(
  "RelayFBEnvironmentDefinitions",
  [
    "RelayFBConsoleLog",
    "RelayFBEnvironmentActorID",
    "RelayFBGCScheduler",
    "RelayFBHandlerProvider",
    "RelayFBOperationLoader",
    "RelayFBScheduler",
    "RelayFieldLogger",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "createRelayFBSubscribeFunction",
    "getRelayFBMissingFieldHandlers",
    "liveQueryFetchWithWWWInitialWrapper",
    "relay-runtime",
    "relayFBGetDataID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "actorID",
        "handlerProvider",
        "log",
        "missingFieldHandlers",
        "operationLoader",
        "storeClass",
        "store",
        "relayFieldLogger",
        "scheduler",
        "getDataID",
      ],
      s = ["networkConfig"];
    function u(t) {
      var n,
        a,
        i = t.actorID,
        l = t.handlerProvider,
        u = l === void 0 ? r("RelayFBHandlerProvider") : l,
        c = t.log,
        d =
          c === void 0 ? ((n = t.log) != null ? n : r("RelayFBConsoleLog")) : c,
        m = t.missingFieldHandlers,
        p = m === void 0 ? r("getRelayFBMissingFieldHandlers")() : m,
        _ = t.operationLoader,
        f = _ === void 0 ? r("RelayFBOperationLoader") : _,
        g = t.storeClass,
        h = g === void 0 ? o("relay-runtime").Store : g,
        y = t.store,
        C =
          y === void 0
            ? new h(new (o("relay-runtime").RecordSource)(), {
                gcReleaseBufferSize: 10,
                gcScheduler: r("RelayFBGCScheduler"),
                getDataID:
                  (a = t.getDataID) != null ? a : r("relayFBGetDataID"),
                log: d,
                operationLoader: r("RelayFBOperationLoader"),
                queryCacheExpirationTime: 300 * 1e3,
              })
            : y,
        b = t.relayFieldLogger,
        v = b === void 0 ? o("RelayFieldLogger").create() : b,
        S = t.scheduler,
        R = S === void 0 ? r("RelayFBScheduler") : S,
        L = t.getDataID,
        E = L === void 0 ? r("relayFBGetDataID") : L,
        k = babelHelpers.objectWithoutPropertiesLoose(t, e),
        I = { actorID: i };
      if (k.network)
        return new (o("relay-runtime").Environment)(
          babelHelpers.extends({}, k, {
            getDataID: E,
            handlerProvider: u,
            log: d,
            missingFieldHandlers: p,
            operationLoader: f,
            options: I,
            relayFieldLogger: v,
            scheduler: R,
            store: C,
          }),
        );
      var T,
        D,
        x = k.networkConfig,
        $ = babelHelpers.objectWithoutPropertiesLoose(k, s),
        P =
          (T = x == null ? void 0 : x.queryResponseCache) != null
            ? T
            : new (o("relay-runtime").QueryResponseCache)({
                size: 10,
                ttl: 300 * 1e3,
              }),
        N =
          (D = x == null ? void 0 : x.liveQueryFetchWithWWWInitialFn) != null
            ? D
            : r("liveQueryFetchWithWWWInitialWrapper"),
        M = r("createRelayFBNetwork")(
          r("createRelayFBNetworkFetch")(
            babelHelpers.extends({}, x, {
              actorID: i,
              liveQueryFetchWithWWWInitialFn: N,
              queryResponseCache: P,
            }),
          ),
          r("createRelayFBSubscribeFunction")({
            actorID: i,
            queryResponseCache: P,
          }),
        );
      return new (o("relay-runtime").Environment)(
        babelHelpers.extends({}, $, {
          getDataID: E,
          handlerProvider: u,
          log: d,
          missingFieldHandlers: p,
          network: M,
          operationLoader: f,
          options: I,
          relayFieldLogger: v,
          scheduler: R,
          store: C,
        }),
      );
    }
    function c(e) {
      var t = new Map();
      return {
        commitLocalUpdateForEachEnvironment: function (n) {
          var e = function () {
            var e = r[1];
            e.commitUpdate(function (t) {
              n(o("RelayFBEnvironmentActorID").getActorID(e), e, t);
            });
          };
          for (var r of t) e();
        },
        getForActorID: function (r, o) {
          var n = r + (o != null ? o : ""),
            a = t.get(n);
          return (a || ((a = u(e(r, o))), t.set(n, a)), a);
        },
      };
    }
    ((l.createEnvironment = u), (l.createEnvironmentFactory = c));
  },
  98,
);
