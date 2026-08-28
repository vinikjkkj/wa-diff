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
        g = t.store,
        h =
          g === void 0
            ? new (o("relay-runtime").Store)(
                new (o("relay-runtime").RecordSource)(),
                {
                  gcReleaseBufferSize: 10,
                  gcScheduler: r("RelayFBGCScheduler"),
                  getDataID:
                    (a = t.getDataID) != null ? a : r("relayFBGetDataID"),
                  log: d,
                  operationLoader: r("RelayFBOperationLoader"),
                  queryCacheExpirationTime: 300 * 1e3,
                },
              )
            : g,
        y = t.relayFieldLogger,
        C = y === void 0 ? o("RelayFieldLogger").create() : y,
        b = t.scheduler,
        v = b === void 0 ? r("RelayFBScheduler") : b,
        S = t.getDataID,
        R = S === void 0 ? r("relayFBGetDataID") : S,
        L = babelHelpers.objectWithoutPropertiesLoose(t, e),
        E = { actorID: i };
      if (L.network)
        return new (o("relay-runtime").Environment)(
          babelHelpers.extends({}, L, {
            getDataID: R,
            handlerProvider: u,
            log: d,
            missingFieldHandlers: p,
            operationLoader: f,
            options: E,
            relayFieldLogger: C,
            scheduler: v,
            store: h,
          }),
        );
      var k,
        I,
        T = L.networkConfig,
        D = babelHelpers.objectWithoutPropertiesLoose(L, s),
        x =
          (k = T == null ? void 0 : T.queryResponseCache) != null
            ? k
            : new (o("relay-runtime").QueryResponseCache)({
                size: 10,
                ttl: 300 * 1e3,
              }),
        $ =
          (I = T == null ? void 0 : T.liveQueryFetchWithWWWInitialFn) != null
            ? I
            : r("liveQueryFetchWithWWWInitialWrapper"),
        P = r("createRelayFBNetwork")(
          r("createRelayFBNetworkFetch")(
            babelHelpers.extends({}, T, {
              actorID: i,
              liveQueryFetchWithWWWInitialFn: $,
              queryResponseCache: x,
            }),
          ),
          r("createRelayFBSubscribeFunction")({
            actorID: i,
            queryResponseCache: x,
          }),
        );
      return new (o("relay-runtime").Environment)(
        babelHelpers.extends({}, D, {
          getDataID: R,
          handlerProvider: u,
          log: d,
          missingFieldHandlers: p,
          network: P,
          operationLoader: f,
          options: E,
          relayFieldLogger: C,
          scheduler: v,
          store: h,
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
