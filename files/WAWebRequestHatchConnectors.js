__d(
  "WAWebRequestHatchConnectors",
  [
    "Promise",
    "WALogger",
    "WAWebHatchBoundChatDecoder",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchConnectorPermissionsDecoder",
    "WAWebHatchConnectorsEligibility",
    "WAWebHatchConnectorsListDecoder",
    "WAWebHatchConnectorsSnapshot",
    "WAWebHatchFoaAccountsDecoder",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchPermissionConnectorsDecoder",
    "WAWebHatchVmConnection",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 3e4,
      d = 3e3,
      m = 0;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++m,
            t = N(),
            n = o("WAWebHatchGating").getHatchSupportedConnectActions(),
            r = yield D(function (e) {
              return e.connectors(n, { timeoutMs: c });
            }, "catalog"),
            a = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              r,
            );
          if (a == null) throw $("malformed_catalog", r);
          return (P(e, t, a), a);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++m,
            t = N(),
            r = yield (u || (u = n("Promise"))).allSettled([
              D(function (e) {
                return e.settingsConnectors({ timeoutMs: c });
              }, "settings_catalog"),
              D(function (e) {
                return e.permissions({ timeoutMs: c });
              }, "sentinel_permissions"),
            ]),
            a = r[0],
            i = r[1];
          if (a.status === "rejected") throw a.reason;
          var l = o(
            "WAWebHatchConnectorsListDecoder",
          ).decodeHatchConnectorsList(a.value);
          if (l == null) throw $("malformed_settings_catalog", a.value);
          if ((P(e, t, l), i.status === "rejected")) throw i.reason;
          return o(
            "WAWebHatchConnectorsEligibility",
          ).listHatchPermissionsConnectors(
            l,
            o(
              "WAWebHatchPermissionConnectorsDecoder",
            ).decodeHatchPermissionConnectors(i.value),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield D(function (t) {
              return t.connectorPermissions(e, { timeoutMs: c });
            }, "permissions"),
            n = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(t);
          if (n == null) throw $("malformed_permissions", t);
          return n;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield E(),
            n = yield D(function (n) {
              return n.connectorConnectInfo(e, t, { timeoutMs: c });
            }, "connect_info"),
            r = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectInfo(n);
          if (r == null) throw $("malformed_connect_info", null);
          return babelHelpers.extends({}, r, { action: M(r.action) });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield C(e)).action;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield D(function (t) {
              return t.foaAccounts(e, { timeoutMs: c });
            }, "foa_accounts"),
            n = o("WAWebHatchFoaAccountsDecoder").decodeHatchFoaAccounts(t, e);
          if (n == null) throw $("malformed_foa_accounts", null);
          return n;
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield D(function (e) {
                return e.chats({ timeoutMs: d });
              }, "chats"),
              t = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
                e,
                "whatsapp",
              );
            if (t == null) throw $("malformed_chats", null);
            return t.chatId;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-connectors: session lookup failed, confirmation goes to the primary chat",
                    ])),
                )
                .sendLogs("hatch-connectors-session-lookup-failed"),
              null
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield D(function (t) {
              return t.connectorAccounts(e, { timeoutMs: c });
            }, "accounts"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(t);
          if (n == null) throw $("malformed_accounts", null);
          return n;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw $(t + "_no_session", null);
          var r = yield e(n);
          if ((r.kind === "Failure" && (r = yield e(n)), r.kind !== "Ok"))
            throw $(t + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        x.apply(this, arguments)
      );
    }
    function $(t, n) {
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
    function P(e, t, n) {
      e === m && t === N() && r("WAWebHatchConnectorsSnapshot").replace(n);
    }
    function N() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    function M(e) {
      if (e.kind === "unsupported") return e;
      var t = o("WAWebHatchGating").getHatchSupportedConnectActions();
      return t.length === 0 || t.includes(e.kind)
        ? e
        : { kind: "unsupported", wireType: e.kind };
    }
    ((l.CONNECTORS_TIMEOUT_MS = c),
      (l.requestHatchConnectors = p),
      (l.requestHatchPermissionsConnectors = f),
      (l.requestHatchConnectorPermissions = h),
      (l.requestHatchConnectInfo = C),
      (l.requestHatchConnectAction = v),
      (l.requestHatchFoaAccounts = R),
      (l.requestHatchWhatsAppSessionId = E),
      (l.requestHatchConnectorAccounts = I));
  },
  98,
);
