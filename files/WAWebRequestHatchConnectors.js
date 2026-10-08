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
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
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
            t = E(),
            n = o("WAWebHatchGating").getHatchSupportedConnectActions(),
            a = yield S(function (e) {
              return e.connectors(n, { timeoutMs: u });
            }, "catalog"),
            i = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              a,
            );
          if (i == null) throw L("malformed_catalog", a);
          return (
            e === d &&
              t === E() &&
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
          var t = yield S(function (t) {
              return t.connectorPermissions(e, { timeoutMs: u });
            }, "permissions"),
            n = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(t);
          if (n == null) throw L("malformed_permissions", t);
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
          var t = yield y(),
            n = yield S(function (n) {
              return n.connectorConnectInfo(e, t);
            }, "connect_info"),
            r = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectAction(n);
          if (r == null) throw L("malformed_connect_info", null);
          return r;
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield S(function (e) {
                return e.chats({ timeoutMs: c });
              }, "chats"),
              t = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
                e,
                "whatsapp",
              );
            if (t == null) throw L("malformed_chats", null);
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield S(function (t) {
              return t.connectorAccounts(e, { timeoutMs: u });
            }, "accounts"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(t);
          if (n == null) throw L("malformed_accounts", null);
          return n;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw L(t + "_no_session", null);
          var r = yield e(n);
          if ((r.kind === "Failure" && (r = yield e(n)), r.kind !== "Ok"))
            throw L(t + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        R.apply(this, arguments)
      );
    }
    function L(t, n) {
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
    function E() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    ((l.requestHatchConnectors = m),
      (l.requestHatchConnectorPermissions = _),
      (l.requestHatchConnectAction = g),
      (l.requestHatchWhatsAppSessionId = y),
      (l.requestHatchConnectorAccounts = b));
  },
  98,
);
