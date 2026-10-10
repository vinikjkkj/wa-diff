__d(
  "WAWebWriteHatchConnectors",
  [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchFirstPartyConnectors",
    "WAWebHatchJsonReaders",
    "WAWebHatchMessengerPinDecoder",
    "WAWebHatchVmConnection",
    "WAWebRequestHatchConnectors",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield q(function (t) {
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
        _.apply(this, arguments)
      );
    }
    var f = /^[A-Za-z0-9._:-]{1,128}$/,
      g = /^\d{6}$/;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!g.test(e))
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-connectors: Messenger unlock rejected malformed PIN",
                    ])),
                )
                .sendLogs("hatch-messenger-unlock-invalid-pin"),
              { kind: "failure" }
            );
          var t = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (t == null)
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-connectors: Messenger unlock has no VM session",
                    ])),
                )
                .sendLogs("hatch-messenger-unlock-no-session"),
              { kind: "failure" }
            );
          var n = yield t.messengerUnlock(e, {
            timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
          });
          return n.kind === "Ok"
            ? o("WAWebHatchMessengerPinDecoder").decodeHatchMessengerUnlock(
                n.value,
                !0,
              )
            : n.kind === "Rejected" && n.value !== void 0
              ? o("WAWebHatchMessengerPinDecoder").decodeHatchMessengerUnlock(
                  n.value,
                  !1,
                )
              : (o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-connectors: Messenger unlock did not return a readable result",
                      ])),
                  )
                  .sendLogs("hatch-messenger-unlock-failed"),
                { kind: "failure" });
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
          var n = o(
            "WAWebHatchFirstPartyConnectors",
          ).getHatchFirstPartyConnector(e);
          if (n == null) throw G("foa_auth_invalid_provider");
          var r = [];
          for (var a of t) {
            if (!f.test(a)) throw G("foa_auth_invalid_account");
            r.includes(a) || r.push(a);
          }
          if (r.length === 0) throw G("foa_auth_empty_accounts");
          yield q(function (e) {
            return e.foaAuthCallback(n.connectorId, r, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
          }, "foa_auth_callback");
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
          var t,
            n = o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(
              e,
            ),
            r = (t = n == null ? void 0 : n.connectorId) != null ? t : e;
          if (!f.test(r)) throw G("consent_auth_invalid_input");
          var a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (a == null) throw G("consent_auth_no_session");
          if (r === "meta_business") {
            var i = yield a.connectorConnect(r, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
            if (i.kind === "Ok" && z(i.value, r)) return;
            if (
              i.kind !== "Rejected" ||
              i.statusCode == null ||
              i.statusCode < 400 ||
              i.statusCode >= 500
            )
              throw G("meta_business_connect_failed");
          }
          yield V(function () {
            return a.consentAuthCallback(r, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
          }, "consent_auth_callback");
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
          var n = yield o(
            "WAWebRequestHatchConnectors",
          ).requestHatchWhatsAppSessionId();
          try {
            var r = yield q(function (t) {
              return t.connectorDisconnect(e, n);
            }, "disconnect").then(
              function (e) {
                return (t == null || t(!0), e);
              },
              function (e) {
                throw (t == null || t(!1), e);
              },
            );
            if (o("WAWebHatchJsonReaders").readBool(r, "disconnected") !== !0)
              throw G("disconnect_refused");
          } catch (t) {
            if (yield E(e)) throw t;
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
          if (n == null) throw G("accounts_link_malformed");
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
              throw G("account_unlink_refused");
          } catch (n) {
            if (yield x(e, t)) throw n;
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
          if (a == null) throw G("set_permissions_no_session");
          var i = yield a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
          if (i.kind === "Rejected") throw G("set_permissions_rejected");
          if (i.kind === "Failure" && !(yield N(e, t, n)))
            throw G("set_permissions_failure");
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
          if (n == null) throw G("reset_permissions_no_session");
          var r = yield n.connectorResetPermissions(e);
          if (O(r)) throw G("reset_permissions_rejected");
          var a = yield o(
            "WAWebRequestHatchConnectors",
          ).requestHatchConnectorPermissions(e);
          if (r.kind !== "Ok" && r.kind !== "Unreadable" && !A(t, a))
            throw G("reset_permissions_" + r.kind.toLowerCase());
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
            throw G("scope_link_malformed");
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
          if (n == null) throw G(t + "_no_session");
          return V(function () {
            return e(n);
          }, t);
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
          if (n.kind !== "Ok") throw G(t + "_" + n.kind.toLowerCase());
          return n.value;
        })),
        H.apply(this, arguments)
      );
    }
    function G(t) {
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
    function z(e, t) {
      return (
        o("WAWebHatchJsonReaders").readBool(e, "ok") !== !1 &&
        o("WAWebHatchJsonReaders").readBool(e, "connected") === !0 &&
        o("WAWebHatchJsonReaders").readTrimmedString(e, "id") === t
      );
    }
    ((l.completeHatchConnectorOAuth = p),
      (l.unlockHatchMessenger = h),
      (l.grantHatchFoaAccounts = C),
      (l.connectHatchConsentConnector = v),
      (l.disconnectHatchConnector = R),
      (l.requestHatchConnectorAccountLink = k),
      (l.unlinkHatchConnectorAccount = T),
      (l.setHatchConnectorPermissionMode = $),
      (l.resetHatchConnectorPermissions = M),
      (l.requestHatchConnectorScopeLink = B));
  },
  98,
);
