__d(
  "WAWebRequestHatchConnectors",
  [
    "WALogger",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
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
          var e = yield h(function (e) {
              return e.connectors({ timeoutMs: s });
            }, "catalog"),
            t = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              e,
            );
          if (t == null) throw C("malformed_catalog", e);
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
          var t = yield h(function (t) {
              return t.connectorPermissions(e, { timeoutMs: s });
            }, "permissions"),
            n = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(t);
          if (n == null) throw C("malformed_permissions", t);
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
          var t = yield h(function (t) {
              return t.connectorConnectInfo(e);
            }, "connect_info"),
            n = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectAction(t);
          if (n == null) throw C("malformed_connect_info", null);
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield h(function (t) {
              return t.connectorAccounts(e, { timeoutMs: s });
            }, "accounts"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(t);
          if (n == null) throw C("malformed_accounts", null);
          return n;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (n == null) throw C(t + "_no_session", null);
          var r = yield e(n);
          if ((r.kind === "Failure" && (r = yield e(n)), r.kind !== "Ok"))
            throw C(t + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        y.apply(this, arguments)
      );
    }
    function C(t, n) {
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
      (l.requestHatchConnectAction = p),
      (l.requestHatchConnectorAccounts = f));
  },
  98,
);
