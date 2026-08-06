__d(
  "CometDevToolsRelayInterop",
  [
    "CometDevToolsRelayEvents",
    "ConstUriUtils",
    "FBLogger",
    "RelayAPIConfig",
    "RelayFBNetworkLoggerController",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        ((e = {}),
        (e[(s = o("CometDevToolsRelayEvents")).EVENTS.INIT] = function (e, t) {
          c(t);
        }),
        (e[s.EVENTS.SET_PROD_ENDPOINT] = function (e) {
          var t,
            n,
            r =
              (t = o("ConstUriUtils").getUri(window.location.href)) == null
                ? void 0
                : t.addQueryParam("prod_graphql", String(e));
          window.location.href =
            (n = r == null ? void 0 : r.toString()) != null ? n : "";
        }),
        (e[s.EVENTS.REFRESH] = function () {
          location.reload(!0);
        }),
        (e[s.EVENTS.SET_NETWORK_LOGGER] = function (e, t) {
          (e === !0
            ? o("RelayFBNetworkLoggerController").enableLogging()
            : o("RelayFBNetworkLoggerController").disableLogging(),
            t.postMessage(
              o("CometDevToolsRelayEvents").EVENTS.GET_NETWORK_LOGGER,
              o("RelayFBNetworkLoggerController").isEnabled(),
            ));
        }),
        (e[s.EVENTS.DUMP_NETWORK_LOGGER] = function () {
          r("FBLogger")("comet_dev_tools_relay").info(
            String(o("RelayFBNetworkLoggerController").dumpLogs()),
          );
        }),
        e);
    function c(e) {
      (e.postMessage(
        o("CometDevToolsRelayEvents").EVENTS.GET_PROD_ENDPOINT,
        r("RelayAPIConfig").isProductionEndpoint === !0,
      ),
        e.postMessage(
          o("CometDevToolsRelayEvents").EVENTS.GET_NETWORK_LOGGER,
          o("RelayFBNetworkLoggerController").isEnabled(),
        ),
        e.postMessage(o("CometDevToolsRelayEvents").EVENTS.GET_IS_DEV, !1));
    }
    var d = "relay";
    function m(e) {
      (c(e),
        e.onMessage(function (t, n) {
          var r = u[t];
          r != null && r(n, e);
        }));
    }
    var p = { namespace: d, onConnection: m };
    l.default = p;
  },
  98,
);
