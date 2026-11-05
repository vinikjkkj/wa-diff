__d(
  "WAWebWriteHatchConnectors",
  [
    "WAAbortError",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchConnectorPermissionsDecoder",
    "WAWebHatchFirstPartyConnectors",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchWriteError",
    "WAWebRequestHatchConnectors",
    "asyncToGeneratorRuntime",
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
          var t = yield O(function (t) {
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
    var m = /^[A-Za-z0-9._:-]{1,128}$/;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
            "WAWebHatchFirstPartyConnectors",
          ).getHatchFirstPartyConnector(e);
          if (n == null) throw z("foa_auth_invalid_provider");
          var r = [];
          for (var a of t) {
            if (!m.test(a)) throw z("foa_auth_invalid_account");
            r.includes(a) || r.push(a);
          }
          if (r.length === 0) throw z("foa_auth_empty_accounts");
          yield O(function (e) {
            return e.foaAuthCallback(n.connectorId, r, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
          }, "foa_auth_callback");
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
          var t,
            n = o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(
              e,
            ),
            r = (t = n == null ? void 0 : n.connectorId) != null ? t : e;
          if (!m.test(r)) throw z("consent_auth_invalid_input");
          var a = yield W("consent_auth"),
            i = yield o(
              "WAWebRequestHatchConnectors",
            ).readHatchWhatsAppSessionId(a);
          if (r === "meta_business") {
            var l = yield a.connectorConnect(r, i, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
            if (l.kind === "Ok" && j(l.value, r)) return;
            if (
              l.kind !== "Rejected" ||
              l.statusCode == null ||
              l.statusCode < 400 ||
              l.statusCode >= 500
            )
              throw z("meta_business_connect_failed");
          }
          yield U(function () {
            return a.consentAuthCallback(r, i, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
          }, "consent_auth_callback");
        })),
        g.apply(this, arguments)
      );
    }
    var h = /^[a-z0-9_-]{1,64}$/;
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.trim();
          if (!h.test(e) || r === "") throw z("api_key_auth_invalid_input");
          var a = yield H(function () {
            return o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
              new AbortController().signal,
            );
          }, "api_key_auth_vm_connect_failed");
          if (a.kind !== "ready") throw z("api_key_auth_no_session");
          var i = a.api,
            l = yield H(function () {
              return o(
                "WAWebRequestHatchConnectors",
              ).readHatchWhatsAppSessionId(i);
            }, "api_key_auth_session_lookup_failed"),
            s = yield U(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  return yield i.apiKeyAuthCallback(e, r, l, {
                    timeoutMs: o("WAWebRequestHatchConnectors")
                      .CONNECTORS_TIMEOUT_MS,
                  });
                } catch (e) {
                  throw z("api_key_auth_callback_failure");
                }
              }),
              "api_key_auth_callback",
            );
          if (o("WAWebHatchJsonReaders").readBool(s, "ok") !== !0)
            throw z("api_key_auth_refused");
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield W("disconnect").catch(function (e) {
              throw (t == null || t(!1), e);
            }),
            r = yield o(
              "WAWebRequestHatchConnectors",
            ).readHatchWhatsAppSessionId(n);
          try {
            var a = yield U(function () {
              return n.connectorDisconnect(e, r);
            }, "disconnect").then(
              function (e) {
                return (t == null || t(!0), e);
              },
              function (e) {
                throw (t == null || t(!1), e);
              },
            );
            if (o("WAWebHatchJsonReaders").readBool(a, "disconnected") !== !0)
              throw z("disconnect_refused");
          } catch (t) {
            if (yield S(e)) throw t;
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectors()
        .then(function (t) {
          return t.some(function (t) {
            return t.id === e && t.state === "connected";
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield O(function (t) {
              return t.connectorAccountsLink(e);
            }, "accounts_link"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccountLinkUrl(t);
          if (n == null) throw z("accounts_link_malformed");
          return n;
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
          try {
            var n = yield O(function (n) {
              return n.connectorAccountUnlink(e, t);
            }, "account_unlink");
            if (o("WAWebHatchJsonReaders").readBool(n, "unlinked") !== !0)
              throw z("account_unlink_refused");
          } catch (n) {
            if (yield I(e, t)) throw n;
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
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectorAccounts(e)
        .then(function (e) {
          return e.some(function (e) {
            return e.accountId === t;
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (a == null) throw z("set_permissions_no_session");
          var i = yield a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
          if (i.kind === "Rejected") throw z("set_permissions_rejected");
          if (i.kind === "Failure" && !(yield x(e, t, n)))
            throw z("set_permissions_failure");
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
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
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw z("reset_permissions_no_session");
          var r = yield n.connectorResetPermissions(e);
          if (w(r)) throw z("reset_permissions_rejected");
          var a = yield o(
            "WAWebRequestHatchConnectors",
          ).requestHatchConnectorPermissions(e);
          if (
            r.kind !== "Ok" &&
            r.kind !== "Unreadable" &&
            !N(t, a) &&
            o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).hasHatchConnectorUserOverrides(a)
          )
            throw z("reset_permissions_" + r.kind.toLowerCase());
          return a;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      var n = new Set(
        M(t)
          .filter(function (e) {
            return e.modeSource === "default";
          })
          .map(function (e) {
            return e.key;
          }),
      );
      return M(e).some(function (e) {
        return e.modeSource === "user_override" && n.has(e.key);
      });
    }
    function M(e) {
      return e.flatMap(function (e) {
        return e.groups.flatMap(function (e) {
          return e.methods;
        });
      });
    }
    function w(e) {
      if (e.kind !== "Rejected" || e.statusCode == null) return !1;
      var t = e.statusCode;
      return t >= 400 && t < 500 && t !== 408 && t !== 429;
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield O(function (n) {
              return n.connectorScopeLink(e, t);
            }, "scope_link"),
            r = o("WAWebHatchJsonReaders").readTrimmedString(n, "link_url");
          if (r === "") return null;
          if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(r))
            throw z("scope_link_malformed");
          return r;
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw z(t + "_no_session");
          return U(function () {
            return e(n);
          }, t);
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            new AbortController().signal,
          );
          if (t.kind !== "ready") throw z(e + "_no_session");
          return t.api;
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e();
          if (n.kind !== "Ok")
            throw z(t + "_" + n.kind.toLowerCase(), {
              httpStatus: n.kind === "Rejected" ? n.statusCode : void 0,
              vmFailure: n.kind === "Failure" ? n.reason : void 0,
            });
          return n.value;
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield e();
          } catch (e) {
            throw e instanceof o("WAAbortError").AbortError ? e : z(t);
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(t, n) {
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
        o("WAWebHatchWriteError").createHatchWriteError(t, n)
      );
    }
    function j(e, t) {
      return (
        o("WAWebHatchJsonReaders").readBool(e, "ok") !== !1 &&
        o("WAWebHatchJsonReaders").readBool(e, "connected") === !0 &&
        o("WAWebHatchJsonReaders").readTrimmedString(e, "id") === t
      );
    }
    ((l.completeHatchConnectorOAuth = c),
      (l.grantHatchFoaAccounts = p),
      (l.connectHatchConsentConnector = f),
      (l.connectHatchApiKeyConnector = y),
      (l.disconnectHatchConnector = b),
      (l.requestHatchConnectorAccountLink = R),
      (l.unlinkHatchConnectorAccount = E),
      (l.setHatchConnectorPermissionMode = T),
      (l.resetHatchConnectorPermissions = $),
      (l.requestHatchConnectorScopeLink = A));
  },
  98,
);
