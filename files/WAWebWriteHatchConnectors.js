__d(
  "WAWebWriteHatchConnectors",
  [
    "WALogger",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmSession",
    "WAWebRequestHatchConnectors",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield R(function (t) {
            return t.oauthCallback(e.code, e.state);
          }, "oauth_callback");
          return t == null
            ? "connected"
            : (function (e) {
                return e === "connected"
                  ? "connected"
                  : e === "duplicate"
                    ? "duplicate"
                    : e === "failed"
                      ? "failed"
                      : "unknown";
              })(o("WAWebHatchJsonReaders").readTrimmedString(t, "status"));
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
          var t = yield R(function (t) {
            return t.connectorDisconnect(e);
          }, "disconnect");
          if (o("WAWebHatchJsonReaders").readBool(t, "disconnected") !== !0)
            throw E("disconnect_refused");
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
          var t = yield R(function (t) {
              return t.connectorAccountsLink(e);
            }, "accounts_link"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccountLinkUrl(t);
          if (n == null) throw E("accounts_link_malformed");
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
          try {
            var n = yield R(function (n) {
              return n.connectorAccountUnlink(e, t);
            }, "account_unlink");
            if (o("WAWebHatchJsonReaders").readBool(n, "unlinked") !== !0)
              throw E("account_unlink_refused");
          } catch (n) {
            if (yield h(e, t)) throw n;
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-connectors: unlink failed but the accounts show it landed",
                  ])),
              )
              .sendLogs("hatch-connectors-unlink-landed");
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectorAccounts(e)
        .then(
          function (e) {
            return e.some(function (e) {
              return e.accountId === t;
            });
          },
          function () {
            return !0;
          },
        );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (a == null) throw E("set_permissions_no_session");
          var i = yield a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
          if (i.kind === "Rejected") throw E("set_permissions_rejected");
          if (i.kind === "Failure" && !(yield b(e, t, n)))
            throw E("set_permissions_failure");
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectorPermissions(e)
        .then(
          function (e) {
            return e.some(function (e) {
              return e.groups.some(function (e) {
                return e.methods.some(function (e) {
                  return e.key === t && e.mode === n;
                });
              });
            });
          },
          function () {
            return !1;
          },
        );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield R(function (n) {
              return n.connectorScopeLink(e, t);
            }, "scope_link"),
            r = o("WAWebHatchJsonReaders").readTrimmedString(n, "link_url");
          if (r === "") return null;
          if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(r))
            throw E("scope_link_malformed");
          return r;
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
          var n = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (n == null) throw E(t + "_no_session");
          var r = yield e(n);
          if (r.kind !== "Ok") throw E(t + "_" + r.kind.toLowerCase());
          return r.value;
        })),
        L.apply(this, arguments)
      );
    }
    function E(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: VM write failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-connectors-write-failed"),
        r("err")("hatch connectors write failed: %s", t)
      );
    }
    ((l.completeHatchConnectorOAuth = u),
      (l.disconnectHatchConnector = d),
      (l.requestHatchConnectorAccountLink = p),
      (l.unlinkHatchConnectorAccount = f),
      (l.setHatchConnectorPermissionMode = y),
      (l.requestHatchConnectorScopeLink = v));
  },
  98,
);
