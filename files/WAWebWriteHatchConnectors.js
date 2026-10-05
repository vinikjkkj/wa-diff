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
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield E(function (t) {
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield E(function (t) {
              return t.connectorDisconnect(e);
            }, "disconnect");
            if (o("WAWebHatchJsonReaders").readBool(t, "disconnected") !== !0)
              throw I("disconnect_refused");
          } catch (t) {
            if (yield _(e)) throw t;
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-connectors: disconnect failed but the catalog shows it landed",
                  ])),
              )
              .sendLogs("hatch-connectors-disconnect-landed");
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectors()
        .then(
          function (t) {
            return t.some(function (t) {
              return t.id === e && t.state === "connected";
            });
          },
          function () {
            return !0;
          },
        );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield E(function (t) {
              return t.connectorAccountsLink(e);
            }, "accounts_link"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccountLinkUrl(t);
          if (n == null) throw I("accounts_link_malformed");
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
          try {
            var n = yield E(function (n) {
              return n.connectorAccountUnlink(e, t);
            }, "account_unlink");
            if (o("WAWebHatchJsonReaders").readBool(n, "unlinked") !== !0)
              throw I("account_unlink_refused");
          } catch (n) {
            if (yield C(e, t)) throw n;
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-connectors: unlink failed but the accounts show it landed",
                  ])),
              )
              .sendLogs("hatch-connectors-unlink-landed");
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
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
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (a == null) throw I("set_permissions_no_session");
          var i = yield a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
          if (i.kind === "Rejected") throw I("set_permissions_rejected");
          if (i.kind === "Failure" && !(yield S(e, t, n)))
            throw I("set_permissions_failure");
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
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
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield E(function (n) {
              return n.connectorScopeLink(e, t);
            }, "scope_link"),
            r = o("WAWebHatchJsonReaders").readTrimmedString(n, "link_url");
          if (r === "") return null;
          if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(r))
            throw I("scope_link_malformed");
          return r;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (n == null) throw I(t + "_no_session");
          var r = yield e(n);
          if (r.kind !== "Ok") throw I(t + "_" + r.kind.toLowerCase());
          return r.value;
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
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
    ((l.completeHatchConnectorOAuth = c),
      (l.disconnectHatchConnector = m),
      (l.requestHatchConnectorAccountLink = f),
      (l.unlinkHatchConnectorAccount = h),
      (l.setHatchConnectorPermissionMode = b),
      (l.requestHatchConnectorScopeLink = R));
  },
  98,
);
