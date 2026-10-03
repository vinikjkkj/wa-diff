__d(
  "WAWebRequestHatchConnectors",
  [
    "WALogger",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorPermissionsDecoder",
    "WAWebHatchConnectorsListDecoder",
    "WAWebHatchVmSession",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f(function (e) {
              return e.connectors({ timeoutMs: s });
            }, "catalog"),
            t = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              e,
            );
          if (t == null) throw h("malformed_catalog", e);
          return t;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(function (t) {
              return t.connectorPermissions(e, { timeoutMs: s });
            }, "permissions"),
            n = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(t);
          if (n == null) throw h("malformed_permissions", t);
          return n;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(function (t) {
              return t.connectorConnectInfo(e);
            }, "connect_info"),
            n = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectAction(t);
          if (n == null) throw h("malformed_connect_info", null);
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (n == null) throw h(t + "_no_session", null);
          var r = yield e(n);
          if ((r.kind === "Failure" && (r = yield e(n)), r.kind !== "Ok"))
            throw h(t + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        g.apply(this, arguments)
      );
    }
    function h(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: VM read failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-connectors-read-failed"),
        r("err")("hatch connectors read failed: %s", t)
      );
    }
    ((l.requestHatchConnectors = u),
      (l.requestHatchConnectorPermissions = d),
      (l.requestHatchConnectAction = p));
  },
  98,
);
