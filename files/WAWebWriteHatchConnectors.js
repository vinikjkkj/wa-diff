__d(
  "WAWebWriteHatchConnectors",
  [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
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
          var t = yield x(function (t) {
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
            var t = yield x(function (t) {
              return t.connectorDisconnect(e);
            }, "disconnect");
            if (o("WAWebHatchJsonReaders").readBool(t, "disconnected") !== !0)
              throw P("disconnect_refused");
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
        .then(function (t) {
          return t.some(function (t) {
            return t.id === e && t.state === "connected";
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield x(function (t) {
              return t.connectorAccountsLink(e);
            }, "accounts_link"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccountLinkUrl(t);
          if (n == null) throw P("accounts_link_malformed");
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
            var n = yield x(function (n) {
              return n.connectorAccountUnlink(e, t);
            }, "account_unlink");
            if (o("WAWebHatchJsonReaders").readBool(n, "unlinked") !== !0)
              throw P("account_unlink_refused");
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
        .then(function (e) {
          return e.some(function (e) {
            return e.accountId === t;
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (a == null) throw P("set_permissions_no_session");
          var i = yield a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
          if (i.kind === "Rejected") throw P("set_permissions_rejected");
          if (i.kind === "Failure" && !(yield S(e, t, n)))
            throw P("set_permissions_failure");
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectorPermissions(e)
        .then(function (e) {
          return e.some(function (e) {
            return e.groups.some(function (e) {
              return e.methods.some(function (e) {
                return e.key === t && e.mode === n;
              });
            });
          });
        }, o("WAWebBoolFunc").returnFalse);
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw P("reset_permissions_no_session");
          var r = yield n.connectorResetPermissions(e);
          if (I(r)) throw P("reset_permissions_rejected");
          var a = yield o(
            "WAWebRequestHatchConnectors",
          ).requestHatchConnectorPermissions(e);
          if (r.kind !== "Ok" && r.kind !== "Unreadable" && !E(t, a))
            throw P("reset_permissions_" + r.kind.toLowerCase());
          return a;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n = new Set(
        k(t)
          .filter(function (e) {
            return e.modeSource === "default";
          })
          .map(function (e) {
            return e.key;
          }),
      );
      return k(e).some(function (e) {
        return e.modeSource === "user_override" && n.has(e.key);
      });
    }
    function k(e) {
      return e.flatMap(function (e) {
        return e.groups.flatMap(function (e) {
          return e.methods;
        });
      });
    }
    function I(e) {
      if (e.kind !== "Rejected" || e.statusCode == null) return !1;
      var t = e.statusCode;
      return t >= 400 && t < 500 && t !== 408 && t !== 429;
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield x(function (n) {
              return n.connectorScopeLink(e, t);
            }, "scope_link"),
            r = o("WAWebHatchJsonReaders").readTrimmedString(n, "link_url");
          if (r === "") return null;
          if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(r))
            throw P("scope_link_malformed");
          return r;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw P(t + "_no_session");
          var r = yield e(n);
          if (r.kind !== "Ok") throw P(t + "_" + r.kind.toLowerCase());
          return r.value;
        })),
        $.apply(this, arguments)
      );
    }
    function P(t) {
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
      (l.resetHatchConnectorPermissions = R),
      (l.requestHatchConnectorScopeLink = T));
  },
  98,
);
