__d(
  "WAWebRequestHatchConnectors",
  [
    "WALogger",
    "WAWebHatchBoundChatDecoder",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchConnectorPermissionsDecoder",
    "WAWebHatchConnectorsListDecoder",
    "WAWebHatchConnectorsSnapshot",
    "WAWebHatchFoaAccountsDecoder",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchMessengerPinDecoder",
    "WAWebHatchVmConnection",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4,
      c = 3e3,
      d = 0;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++d,
            t = $(),
            n = o("WAWebHatchGating").getHatchSupportedConnectActions(),
            a = yield T(function (e) {
              return e.connectors(n, { timeoutMs: u });
            }, "catalog"),
            i = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              a,
            );
          if (i == null) throw x("malformed_catalog", a);
          return (
            e === d &&
              t === $() &&
              r("WAWebHatchConnectorsSnapshot").replace(i),
            i
          );
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
          var t = yield T(function (t) {
              return t.connectorPermissions(e, { timeoutMs: u });
            }, "permissions"),
            n = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(t);
          if (n == null) throw x("malformed_permissions", t);
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
          var t = yield S(),
            n = yield T(function (n) {
              return n.connectorConnectInfo(e, t, { timeoutMs: u });
            }, "connect_info"),
            r = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectInfo(n);
          if (r == null) throw x("malformed_connect_info", null);
          return babelHelpers.extends({}, r, { action: P(r.action) });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield g(e)).action;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield T(function (t) {
              return t.foaAccounts(e, { timeoutMs: u });
            }, "foa_accounts"),
            n = o("WAWebHatchFoaAccountsDecoder").decodeHatchFoaAccounts(t, e);
          if (n == null) throw x("malformed_foa_accounts", null);
          return n;
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield T(function (e) {
                return e.chats({ timeoutMs: c });
              }, "chats"),
              t = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
                e,
                "whatsapp",
              );
            if (t == null) throw x("malformed_chats", null);
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
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield T(function (e) {
              return e.messengerPinStatus({ timeoutMs: u });
            }, "messenger_pin_status"),
            t = o(
              "WAWebHatchMessengerPinDecoder",
            ).decodeHatchMessengerPinStatus(e);
          if (t == null) throw x("malformed_messenger_pin_status", null);
          return t;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield T(function (t) {
              return t.connectorAccounts(e, { timeoutMs: u });
            }, "accounts"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(t);
          if (n == null) throw x("malformed_accounts", null);
          return n;
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw x(t + "_no_session", null);
          var r = yield e(n);
          if ((r.kind === "Failure" && (r = yield e(n)), r.kind !== "Ok"))
            throw x(t + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        D.apply(this, arguments)
      );
    }
    function x(t, n) {
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
    function $() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    function P(e) {
      if (e.kind === "unsupported") return e;
      var t = o("WAWebHatchGating").getHatchSupportedConnectActions();
      return t.length === 0 || t.includes(e.kind)
        ? e
        : { kind: "unsupported", wireType: e.kind };
    }
    ((l.CONNECTORS_TIMEOUT_MS = u),
      (l.requestHatchConnectors = m),
      (l.requestHatchConnectorPermissions = _),
      (l.requestHatchConnectInfo = g),
      (l.requestHatchConnectAction = y),
      (l.requestHatchFoaAccounts = b),
      (l.requestHatchWhatsAppSessionId = S),
      (l.requestHatchMessengerHasPin = L),
      (l.requestHatchConnectorAccounts = k));
  },
  98,
);
