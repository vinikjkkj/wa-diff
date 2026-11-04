__d(
  "WAWebRequestHatchConnectors",
  [
    "Promise",
    "WAAbortError",
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ++m,
            n = W(),
            r = o("WAWebHatchGating").getHatchSupportedConnectActions(),
            a = yield P(
              function (e) {
                return e.connectors(r, { timeoutMs: c });
              },
              "catalog",
              e,
            ),
            i = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              a,
            );
          if (i == null) throw O("malformed_catalog", a);
          return (B(t, n, i), i);
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
          var t = ++m,
            r = W(),
            a = yield (u || (u = n("Promise"))).allSettled([
              P(
                function (e) {
                  return e.settingsConnectors({ timeoutMs: c });
                },
                "settings_catalog",
                e,
              ),
              P(
                function (e) {
                  return e.permissions({ timeoutMs: c });
                },
                "sentinel_permissions",
                e,
              ),
            ]),
            i = a[0],
            l = a[1];
          if (i.status === "rejected") throw i.reason;
          var s = o(
            "WAWebHatchConnectorsListDecoder",
          ).decodeHatchConnectorsList(i.value);
          if (s == null) throw O("malformed_settings_catalog", i.value);
          if ((B(t, r, s), l.status === "rejected")) throw l.reason;
          return o(
            "WAWebHatchConnectorsEligibility",
          ).listHatchPermissionsConnectors(
            s,
            o(
              "WAWebHatchPermissionConnectorsDecoder",
            ).decodeHatchPermissionConnectors(l.value),
          );
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
          var n = yield P(
              function (t) {
                return t.connectorPermissions(e, { timeoutMs: c });
              },
              "permissions",
              t,
            ),
            r = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(n);
          if (r == null) throw O("malformed_permissions", n);
          return r;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield A("connect_info", t),
            r = yield I(n),
            a = yield M(
              n,
              function (t) {
                return t.connectorConnectInfo(e, r, { timeoutMs: c });
              },
              "connect_info",
            ),
            i = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectInfo(a);
          if (i == null) throw O("malformed_connect_info", null);
          return babelHelpers.extends({}, i, { action: q(i.action) });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield C(e, t)).action;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield P(
              function (t) {
                return t.foaAccounts(e, { timeoutMs: c });
              },
              "foa_accounts",
              t,
            ),
            r = o("WAWebHatchFoaAccountsDecoder").decodeHatchFoaAccounts(n, e);
          if (r == null) throw O("malformed_foa_accounts", null);
          return r;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield A("chats", e);
          } catch (e) {
            return $(e);
          }
          return I(t);
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
          try {
            var t = yield M(
                e,
                function (e) {
                  return e.chats({ timeoutMs: d });
                },
                "chats",
              ),
              n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
                t,
                "whatsapp",
              );
            if (n == null) throw O("malformed_chats", null);
            return n.chatId;
          } catch (e) {
            return $(e);
          }
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
          var n = yield P(
              function (t) {
                return t.connectorAccounts(e, { timeoutMs: c });
              },
              "accounts",
              t,
            ),
            r = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(n);
          if (r == null) throw O("malformed_accounts", null);
          return r;
        })),
        x.apply(this, arguments)
      );
    }
    function $(t) {
      if (t instanceof o("WAAbortError").AbortError) throw t;
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: session lookup failed, confirmation goes to the primary chat",
              ])),
          )
          .sendLogs("hatch-connectors-session-lookup-failed"),
        null
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return M(yield A(t, n), e, t);
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield t(e);
          if ((r.kind === "Failure" && (r = yield t(e)), r.kind !== "Ok"))
            throw O(n + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            t != null ? t : new AbortController().signal,
          );
          if ((t == null ? void 0 : t.aborted) === !0)
            throw new (o("WAAbortError").AbortError)();
          if (n.kind === "ready") return n.api;
          throw O(e + "_no_session", n);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: VM read failed reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-connectors-read-failed"),
        r("err")("hatch connectors read failed: %s", e)
      );
    }
    function B(e, t, n) {
      e === m && t === W() && r("WAWebHatchConnectorsSnapshot").replace(n);
    }
    function W() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    function q(e) {
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
      (l.readHatchWhatsAppSessionId = I),
      (l.requestHatchConnectorAccounts = D));
  },
  98,
);
