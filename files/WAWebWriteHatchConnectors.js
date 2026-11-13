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
          var t = yield q(function (t) {
            return t.oauthCallback(e);
          }, "oauth_callback");
          return (function (e) {
            return e === ""
              ? "failed"
              : e === "connected"
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
          yield q(function (t) {
            return t.oauthCallback(e);
          }, "oauth_error");
        })),
        p.apply(this, arguments)
      );
    }
    var _ = /^[A-Za-z0-9._:-]{1,128}$/,
      f = 6e4;
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
            "WAWebHatchFirstPartyConnectors",
          ).getHatchFirstPartyConnector(e);
          if (n == null) throw Q("foa_auth_invalid_provider");
          var r = [];
          for (var a of t) {
            if (!_.test(a)) throw Q("foa_auth_invalid_account");
            r.includes(a) || r.push(a);
          }
          if (r.length === 0) throw Q("foa_auth_empty_accounts");
          yield q(function (e) {
            return e.foaAuthCallback(n.connectorId, r, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
          }, "foa_auth_callback");
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
          var n,
            r = o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(
              e,
            ),
            a = (n = r == null ? void 0 : r.connectorId) != null ? n : e;
          if (!_.test(a)) throw Q("consent_auth_invalid_input");
          var i = yield V("consent_auth"),
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
            if (s.kind === "Ok" && X(s.value, a)) return;
            if (
              s.kind !== "Rejected" ||
              s.statusCode == null ||
              s.statusCode < 400 ||
              s.statusCode >= 500
            )
              throw Q("meta_business_connect_failed");
          }
          var u = yield G(function () {
            return i.consentAuthCallback(a, l, { timeoutMs: f });
          }, "consent_auth_callback");
          if (
            o("WAWebHatchJsonReaders").readTrimmedString(u, "status") !==
            "connected"
          )
            throw Q("consent_auth_callback_not_connected");
        })),
        C.apply(this, arguments)
      );
    }
    var b = /^[a-z0-9_-]{1,64}$/;
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.trim();
          if (!b.test(e) || r === "") throw Q("api_key_auth_invalid_input");
          var a = yield j(function () {
            return o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
              new AbortController().signal,
            );
          }, "api_key_auth_vm_connect_failed");
          if (a.kind !== "ready") throw Q("api_key_auth_no_session");
          var i = a.api,
            l = yield j(function () {
              return o(
                "WAWebRequestHatchConnectors",
              ).readHatchWhatsAppSessionId(i);
            }, "api_key_auth_session_lookup_failed"),
            s = yield G(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  return yield i.apiKeyAuthCallback(e, r, l, {
                    timeoutMs: o("WAWebRequestHatchConnectors")
                      .CONNECTORS_TIMEOUT_MS,
                  });
                } catch (e) {
                  throw Q("api_key_auth_callback_failure");
                }
              }),
              "api_key_auth_callback",
            );
          if (o("WAWebHatchJsonReaders").readBool(s, "ok") !== !0)
            throw Q("api_key_auth_refused");
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
          var n = yield V("disconnect").catch(function (e) {
              throw (t == null || t(!1), e);
            }),
            r = yield o(
              "WAWebRequestHatchConnectors",
            ).readHatchWhatsAppSessionId(n);
          try {
            var a = yield G(function () {
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
              throw Q("disconnect_refused");
          } catch (t) {
            if (yield E(e)) throw t;
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectors()
        .then(function (t) {
          return t.some(function (t) {
            return t.id === e && t.state === "connected";
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield q(function (t) {
              return t.connectorAccountsLink(e);
            }, "accounts_link"),
            n = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccountLinkUrl(t);
          if (n == null) throw Q("accounts_link_malformed");
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
          try {
            var n = yield q(function (n) {
              return n.connectorAccountUnlink(e, t);
            }, "account_unlink");
            if (o("WAWebHatchJsonReaders").readBool(n, "unlinked") !== !0)
              throw Q("account_unlink_refused");
          } catch (n) {
            if (yield x(e, t)) throw n;
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectorAccounts(e)
        .then(function (e) {
          return e.some(function (e) {
            return e.accountId === t;
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (a == null) throw Q("set_permissions_no_session");
          var i = yield a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
          if (i.kind === "Rejected") throw Q("set_permissions_rejected");
          if (i.kind === "Failure" && !(yield N(e, t, n)))
            throw Q("set_permissions_failure");
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
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
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw Q("reset_permissions_no_session");
          var r = yield n.connectorResetPermissions(e);
          if (O(r)) throw Q("reset_permissions_rejected");
          var a = yield o(
            "WAWebRequestHatchConnectors",
          ).requestHatchConnectorPermissions(e);
          if (
            r.kind !== "Ok" &&
            r.kind !== "Unreadable" &&
            !A(t, a) &&
            o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).hasHatchConnectorUserOverrides(a)
          )
            throw Q("reset_permissions_" + r.kind.toLowerCase());
          return a;
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      var n = new Set(
        F(t)
          .filter(function (e) {
            return e.modeSource === "default";
          })
          .map(function (e) {
            return e.key;
          }),
      );
      return F(e).some(function (e) {
        return e.modeSource === "user_override" && n.has(e.key);
      });
    }
    function F(e) {
      return e.flatMap(function (e) {
        return e.groups.flatMap(function (e) {
          return e.methods;
        });
      });
    }
    function O(e) {
      if (e.kind !== "Rejected" || e.statusCode == null) return !1;
      var t = e.statusCode;
      return t >= 400 && t < 500 && t !== 408 && t !== 429;
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield q(function (n) {
              return n.connectorScopeLink(e, t);
            }, "scope_link"),
            r = o("WAWebHatchJsonReaders").readTrimmedString(n, "link_url");
          if (r === "") return null;
          if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(r))
            throw Q("scope_link_malformed");
          return r;
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (n == null) throw Q(t + "_no_session");
          return G(function () {
            return e(n);
          }, t);
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            new AbortController().signal,
          );
          if (t.kind !== "ready") throw Q(e + "_no_session");
          return t.api;
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
          var n = yield e();
          if (n.kind !== "Ok")
            throw Q(t + "_" + n.kind.toLowerCase(), {
              httpStatus: n.kind === "Rejected" ? n.statusCode : void 0,
              vmFailure: n.kind === "Failure" ? n.reason : void 0,
            });
          return n.value;
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield e();
          } catch (e) {
            throw e instanceof o("WAAbortError").AbortError ? e : Q(t);
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(t, n) {
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
    function X(e, t) {
      return (
        o("WAWebHatchJsonReaders").readBool(e, "ok") !== !1 &&
        o("WAWebHatchJsonReaders").readBool(e, "connected") === !0 &&
        o("WAWebHatchJsonReaders").readTrimmedString(e, "id") === t
      );
    }
    ((l.completeHatchConnectorOAuth = c),
      (l.forwardHatchConnectorOAuthError = m),
      (l.grantHatchFoaAccounts = g),
      (l.connectHatchConsentConnector = y),
      (l.connectHatchApiKeyConnector = v),
      (l.disconnectHatchConnector = R),
      (l.requestHatchConnectorAccountLink = k),
      (l.unlinkHatchConnectorAccount = T),
      (l.setHatchConnectorPermissionMode = $),
      (l.resetHatchConnectorPermissions = M),
      (l.requestHatchConnectorScopeLink = B));
  },
  98,
);
