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
          var t = yield B(function (t) {
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
    var m = /^[A-Za-z0-9._:-]{1,128}$/,
      p = 6e4;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
            "WAWebHatchFirstPartyConnectors",
          ).getHatchFirstPartyConnector(e);
          if (n == null) throw j("foa_auth_invalid_provider");
          var r = [];
          for (var a of t) {
            if (!m.test(a)) throw j("foa_auth_invalid_account");
            r.includes(a) || r.push(a);
          }
          if (r.length === 0) throw j("foa_auth_empty_accounts");
          yield B(function (e) {
            return e.foaAuthCallback(n.connectorId, r, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
          }, "foa_auth_callback");
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(
              e,
            ),
            a = (n = r == null ? void 0 : r.connectorId) != null ? n : e;
          if (!m.test(a)) throw j("consent_auth_invalid_input");
          var i = yield q("consent_auth"),
            l = yield o(
              "WAWebRequestHatchConnectors",
            ).readHatchWhatsAppSessionId(i);
          if ((t == null || t.isWanted == null ? void 0 : t.isWanted()) === !1)
            throw o("WAWebHatchWriteError").createHatchWriteError(
              "consent_auth_cancelled",
            );
          if (a === "meta_business") {
            var s = yield i.connectorConnect(a, l, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
            if (s.kind === "Ok" && K(s.value, a)) return;
            if (
              s.kind !== "Rejected" ||
              s.statusCode == null ||
              s.statusCode < 400 ||
              s.statusCode >= 500
            )
              throw j("meta_business_connect_failed");
          }
          var u = yield V(function () {
            return i.consentAuthCallback(a, l, { timeoutMs: p });
          }, "consent_auth_callback");
          if (
            o("WAWebHatchJsonReaders").readTrimmedString(u, "status") !==
            "connected"
          )
            throw j("consent_auth_callback_not_connected");
        })),
        h.apply(this, arguments)
      );
    }
    var y = /^[a-z0-9_-]{1,64}$/;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.trim();
          if (!y.test(e) || r === "") throw j("api_key_auth_invalid_input");
          var a = yield G(function () {
            return o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
              new AbortController().signal,
            );
          }, "api_key_auth_vm_connect_failed");
          if (a.kind !== "ready") throw j("api_key_auth_no_session");
          var i = a.api,
            l = yield G(function () {
              return o(
                "WAWebRequestHatchConnectors",
              ).readHatchWhatsAppSessionId(i);
            }, "api_key_auth_session_lookup_failed"),
            s = yield V(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  return yield i.apiKeyAuthCallback(e, r, l, {
                    timeoutMs: o("WAWebRequestHatchConnectors")
                      .CONNECTORS_TIMEOUT_MS,
                  });
                } catch (e) {
                  throw j("api_key_auth_callback_failure");
                }
              }),
              "api_key_auth_callback",
            );
          if (o("WAWebHatchJsonReaders").readBool(s, "ok") !== !0)
            throw j("api_key_auth_refused");
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
          var n = yield q("disconnect").catch(function (e) {
              throw (t == null || t(!1), e);
            }),
            r = yield o(
              "WAWebRequestHatchConnectors",
            ).readHatchWhatsAppSessionId(n);
          try {
            var a = yield V(function () {
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
              throw j("disconnect_refused");
          } catch (t) {
            if (yield R(e)) throw t;
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectors()
        .then(function (t) {
          return t.some(function (t) {
            return t.id === e && t.state === "connected";
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield B(function (t) {
              return t.connectorAccountsLink(e);
            }, "accounts_link"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccountLinkUrl(t);
          if (n == null) throw j("accounts_link_malformed");
          return n;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield B(function (n) {
              return n.connectorAccountUnlink(e, t);
            }, "account_unlink");
            if (o("WAWebHatchJsonReaders").readBool(n, "unlinked") !== !0)
              throw j("account_unlink_refused");
          } catch (n) {
            if (yield T(e, t)) throw n;
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectorAccounts(e)
        .then(function (e) {
          return e.some(function (e) {
            return e.accountId === t;
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (a == null) throw j("set_permissions_no_session");
          var i = yield a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
          if (i.kind === "Rejected") throw j("set_permissions_rejected");
          if (i.kind === "Failure" && !(yield $(e, t, n)))
            throw j("set_permissions_failure");
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
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
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw j("reset_permissions_no_session");
          var r = yield n.connectorResetPermissions(e);
          if (A(r)) throw j("reset_permissions_rejected");
          var a = yield o(
            "WAWebRequestHatchConnectors",
          ).requestHatchConnectorPermissions(e);
          if (
            r.kind !== "Ok" &&
            r.kind !== "Unreadable" &&
            !M(t, a) &&
            o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).hasHatchConnectorUserOverrides(a)
          )
            throw j("reset_permissions_" + r.kind.toLowerCase());
          return a;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      var n = new Set(
        w(t)
          .filter(function (e) {
            return e.modeSource === "default";
          })
          .map(function (e) {
            return e.key;
          }),
      );
      return w(e).some(function (e) {
        return e.modeSource === "user_override" && n.has(e.key);
      });
    }
    function w(e) {
      return e.flatMap(function (e) {
        return e.groups.flatMap(function (e) {
          return e.methods;
        });
      });
    }
    function A(e) {
      if (e.kind !== "Rejected" || e.statusCode == null) return !1;
      var t = e.statusCode;
      return t >= 400 && t < 500 && t !== 408 && t !== 429;
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield B(function (n) {
              return n.connectorScopeLink(e, t);
            }, "scope_link"),
            r = o("WAWebHatchJsonReaders").readTrimmedString(n, "link_url");
          if (r === "") return null;
          if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(r))
            throw j("scope_link_malformed");
          return r;
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw j(t + "_no_session");
          return V(function () {
            return e(n);
          }, t);
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            new AbortController().signal,
          );
          if (t.kind !== "ready") throw j(e + "_no_session");
          return t.api;
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e();
          if (n.kind !== "Ok")
            throw j(t + "_" + n.kind.toLowerCase(), {
              httpStatus: n.kind === "Rejected" ? n.statusCode : void 0,
              vmFailure: n.kind === "Failure" ? n.reason : void 0,
            });
          return n.value;
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield e();
          } catch (e) {
            throw e instanceof o("WAAbortError").AbortError ? e : j(t);
          }
        })),
        z.apply(this, arguments)
      );
    }
    function j(t, n) {
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
    function K(e, t) {
      return (
        o("WAWebHatchJsonReaders").readBool(e, "ok") !== !1 &&
        o("WAWebHatchJsonReaders").readBool(e, "connected") === !0 &&
        o("WAWebHatchJsonReaders").readTrimmedString(e, "id") === t
      );
    }
    ((l.completeHatchConnectorOAuth = c),
      (l.grantHatchFoaAccounts = _),
      (l.connectHatchConsentConnector = g),
      (l.connectHatchApiKeyConnector = C),
      (l.disconnectHatchConnector = v),
      (l.requestHatchConnectorAccountLink = L),
      (l.unlinkHatchConnectorAccount = k),
      (l.setHatchConnectorPermissionMode = D),
      (l.resetHatchConnectorPermissions = P),
      (l.requestHatchConnectorScopeLink = F));
  },
  98,
);
