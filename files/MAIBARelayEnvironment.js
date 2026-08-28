__d(
  "MAIBARelayEnvironment",
  [
    "ConstUriUtils",
    "RelayAPIConfig",
    "RelayFBEnvironment",
    "RelayFBResponseCache",
    "RelayModern",
    "URI",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "createRelayFBSubscribeFunction",
    "getCrossOriginTransport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("ConstUriUtils").getUri("/api/graphql/"),
      u = r("RelayFBEnvironment").getStore(),
      c = r("createRelayFBNetwork")(
        r("createRelayFBNetworkFetch")({
          customHeaders: { "X-FB-RELAY-ENV": "MAIBARelayEnvironment" },
          fetchTimeout: 60 * 1e3 * 10,
          graphURI: new (e || (e = r("URI")))(
            s == null ? void 0 : s.toString(),
          ),
          queryResponseCache: r("RelayFBResponseCache"),
          transportBuilder: function () {
            var e = r("getCrossOriginTransport").withCredentials();
            return e;
          },
        }),
        r("createRelayFBSubscribeFunction")({
          queryResponseCache: r("RelayFBResponseCache"),
        }),
      ),
      d = o("RelayModern").createEnvironment({
        actorID: r("RelayAPIConfig").actorID,
        configName: "GenAITenantRelayEnvironment",
        network: c,
        store: u,
      });
    l.MAIBARelayEnvironment = d;
  },
  98,
);
