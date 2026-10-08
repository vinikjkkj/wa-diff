__d(
  "WAWebRequestHatchConnectors",
  [
    "WALogger",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchConnectorPermissionsDecoder",
    "WAWebHatchConnectorsListDecoder",
    "WAWebHatchConnectorsSnapshot",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmConnection",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 0;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++u,
            t = v(),
            n = o("WAWebHatchGating").getHatchSupportedConnectActions(),
            a = yield y(function (e) {
              return e.connectors(n, { timeoutMs: s });
            }, "catalog"),
            i = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              a,
            );
          if (i == null) throw b("malformed_catalog", a);
          return (
            e === u &&
              t === v() &&
              r("WAWebHatchConnectorsSnapshot").replace(i),
            i
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield y(function (t) {
              return t.connectorPermissions(e, { timeoutMs: s });
            }, "permissions"),
            n = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(t);
          if (n == null) throw b("malformed_permissions", t);
          return n;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield y(function (t) {
              return t.connectorConnectInfo(e);
            }, "connect_info"),
            n = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectAction(t);
          if (n == null) throw b("malformed_connect_info", null);
          return n;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield y(function (t) {
              return t.connectorAccounts(e, { timeoutMs: s });
            }, "accounts"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(t);
          if (n == null) throw b("malformed_accounts", null);
          return n;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw b(t + "_no_session", null);
          var r = yield e(n);
          if ((r.kind === "Failure" && (r = yield e(n)), r.kind !== "Ok"))
            throw b(t + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        C.apply(this, arguments)
      );
    }
    function b(t, n) {
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
    function v() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    ((l.requestHatchConnectors = c),
      (l.requestHatchConnectorPermissions = m),
      (l.requestHatchConnectAction = _),
      (l.requestHatchConnectorAccounts = g));
  },
  98,
);
