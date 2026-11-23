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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(e) {
      var t = await x(function (t) {
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
    }
    async function d(e) {
      await x(function (t) {
        return t.oauthCallback(e);
      }, "oauth_error");
    }
    var m = /^[A-Za-z0-9._:-]{1,128}$/,
      p = 6e4;
    async function _(e, t) {
      var n = o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(
        e,
      );
      if (n == null) throw M("foa_auth_invalid_provider");
      var r = [];
      for (var a of t) {
        if (!m.test(a)) throw M("foa_auth_invalid_account");
        r.includes(a) || r.push(a);
      }
      if (r.length === 0) throw M("foa_auth_empty_accounts");
      await x(function (e) {
        return e.foaAuthCallback(n.connectorId, r, {
          timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
        });
      }, "foa_auth_callback");
    }
    async function f(e, t) {
      var n,
        r = o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(e),
        a = (n = r == null ? void 0 : r.connectorId) != null ? n : e;
      if (!m.test(a)) throw M("consent_auth_invalid_input");
      var i = await $("consent_auth"),
        l = await o("WAWebRequestHatchConnectors").readHatchWhatsAppSessionId(
          i,
        );
      if ((t == null || t.isWanted == null ? void 0 : t.isWanted()) === !1)
        throw o("WAWebHatchWriteError").createHatchWriteError(
          "consent_auth_cancelled",
        );
      if (a === "meta_business") {
        var s = await i.connectorConnect(a, l, {
          timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
        });
        if (s.kind === "Ok" && w(s.value, a)) return;
        if (
          s.kind !== "Rejected" ||
          s.statusCode == null ||
          s.statusCode < 400 ||
          s.statusCode >= 500
        )
          throw M("meta_business_connect_failed");
      }
      var u = await P(function () {
        return i.consentAuthCallback(a, l, { timeoutMs: p });
      }, "consent_auth_callback");
      if (
        o("WAWebHatchJsonReaders").readTrimmedString(u, "status") !==
        "connected"
      )
        throw M("consent_auth_callback_not_connected");
    }
    var g = /^[a-z0-9_-]{1,64}$/;
    async function h(e, t) {
      var n = t.trim();
      if (!g.test(e) || n === "") throw M("api_key_auth_invalid_input");
      var r = await N(function () {
        return o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          new AbortController().signal,
        );
      }, "api_key_auth_vm_connect_failed");
      if (r.kind !== "ready") throw M("api_key_auth_no_session");
      var a = r.api,
        i = await N(function () {
          return o("WAWebRequestHatchConnectors").readHatchWhatsAppSessionId(a);
        }, "api_key_auth_session_lookup_failed"),
        l = await P(async function () {
          try {
            return await a.apiKeyAuthCallback(e, n, i, {
              timeoutMs: o("WAWebRequestHatchConnectors").CONNECTORS_TIMEOUT_MS,
            });
          } catch (e) {
            throw M("api_key_auth_callback_failure");
          }
        }, "api_key_auth_callback");
      if (o("WAWebHatchJsonReaders").readBool(l, "ok") !== !0)
        throw M("api_key_auth_refused");
    }
    async function y(t, n) {
      var r = await $("disconnect").catch(function (e) {
          throw (n == null || n(!1), e);
        }),
        a = await o("WAWebRequestHatchConnectors").readHatchWhatsAppSessionId(
          r,
        );
      try {
        var i = await P(function () {
          return r.connectorDisconnect(t, a);
        }, "disconnect").then(
          function (e) {
            return (n == null || n(!0), e);
          },
          function (e) {
            throw (n == null || n(!1), e);
          },
        );
        if (o("WAWebHatchJsonReaders").readBool(i, "disconnected") !== !0)
          throw M("disconnect_refused");
      } catch (n) {
        if (await C(t)) throw n;
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: disconnect failed but the catalog shows it landed",
              ])),
          )
          .sendLogs("hatch-connectors-disconnect-landed");
      }
    }
    function C(e) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectors()
        .then(function (t) {
          return t.some(function (t) {
            return t.id === e && t.state === "connected";
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    async function b(e) {
      var t = await x(function (t) {
          return t.connectorAccountsLink(e);
        }, "accounts_link"),
        n = o(
          "WAWebHatchConnectorAccountsDecoder",
        ).decodeHatchConnectorAccountLinkUrl(t);
      if (n == null) throw M("accounts_link_malformed");
      return n;
    }
    async function v(e, t) {
      try {
        var n = await x(function (n) {
          return n.connectorAccountUnlink(e, t);
        }, "account_unlink");
        if (o("WAWebHatchJsonReaders").readBool(n, "unlinked") !== !0)
          throw M("account_unlink_refused");
      } catch (n) {
        if (await S(e, t)) throw n;
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: unlink failed but the accounts show it landed",
              ])),
          )
          .sendLogs("hatch-connectors-unlink-landed");
      }
    }
    function S(e, t) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectorAccounts(e)
        .then(function (e) {
          return e.some(function (e) {
            return e.accountId === t;
          });
        }, o("WAWebBoolFunc").returnTrue);
    }
    async function R(e, t, n) {
      var r,
        a = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (a == null) throw M("set_permissions_no_session");
      var i = await a.connectorSetPermissions(e, ((r = {}), (r[t] = n), r));
      if (i.kind === "Rejected") throw M("set_permissions_rejected");
      if (i.kind === "Failure" && !(await L(e, t, n)))
        throw M("set_permissions_failure");
    }
    function L(e, t, n) {
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
    async function E(e, t) {
      var n = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (n == null) throw M("reset_permissions_no_session");
      var r = await n.connectorResetPermissions(e);
      if (T(r)) throw M("reset_permissions_rejected");
      var a = await o(
        "WAWebRequestHatchConnectors",
      ).requestHatchConnectorPermissions(e);
      if (
        r.kind !== "Ok" &&
        r.kind !== "Unreadable" &&
        !k(t, a) &&
        o(
          "WAWebHatchConnectorPermissionsDecoder",
        ).hasHatchConnectorUserOverrides(a)
      )
        throw M("reset_permissions_" + r.kind.toLowerCase());
      return a;
    }
    function k(e, t) {
      var n = new Set(
        I(t)
          .filter(function (e) {
            return e.modeSource === "default";
          })
          .map(function (e) {
            return e.key;
          }),
      );
      return I(e).some(function (e) {
        return e.modeSource === "user_override" && n.has(e.key);
      });
    }
    function I(e) {
      return e.flatMap(function (e) {
        return e.groups.flatMap(function (e) {
          return e.methods;
        });
      });
    }
    function T(e) {
      if (e.kind !== "Rejected" || e.statusCode == null) return !1;
      var t = e.statusCode;
      return t >= 400 && t < 500 && t !== 408 && t !== 429;
    }
    async function D(e, t) {
      var n = await x(function (n) {
          return n.connectorScopeLink(e, t);
        }, "scope_link"),
        r = o("WAWebHatchJsonReaders").readTrimmedString(n, "link_url");
      if (r === "") return null;
      if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(r))
        throw M("scope_link_malformed");
      return r;
    }
    async function x(e, t) {
      var n = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (n == null) throw M(t + "_no_session");
      return P(function () {
        return e(n);
      }, t);
    }
    async function $(e) {
      var t = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
        new AbortController().signal,
      );
      if (t.kind !== "ready") throw M(e + "_no_session");
      return t.api;
    }
    async function P(e, t) {
      var n = await e();
      if (n.kind !== "Ok")
        throw M(t + "_" + n.kind.toLowerCase(), {
          httpStatus: n.kind === "Rejected" ? n.statusCode : void 0,
          vmFailure: n.kind === "Failure" ? n.reason : void 0,
        });
      return n.value;
    }
    async function N(e, t) {
      try {
        return await e();
      } catch (e) {
        throw e instanceof o("WAAbortError").AbortError ? e : M(t);
      }
    }
    function M(e, t) {
      return (
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: VM write failed reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-connectors-write-failed"),
        o("WAWebHatchWriteError").createHatchWriteError(e, t)
      );
    }
    function w(e, t) {
      return (
        o("WAWebHatchJsonReaders").readBool(e, "ok") !== !1 &&
        o("WAWebHatchJsonReaders").readBool(e, "connected") === !0 &&
        o("WAWebHatchJsonReaders").readTrimmedString(e, "id") === t
      );
    }
    ((l.completeHatchConnectorOAuth = c),
      (l.forwardHatchConnectorOAuthError = d),
      (l.grantHatchFoaAccounts = _),
      (l.connectHatchConsentConnector = f),
      (l.connectHatchApiKeyConnector = h),
      (l.disconnectHatchConnector = y),
      (l.requestHatchConnectorAccountLink = b),
      (l.unlinkHatchConnectorAccount = v),
      (l.setHatchConnectorPermissionMode = R),
      (l.resetHatchConnectorPermissions = E),
      (l.requestHatchConnectorScopeLink = D));
  },
  98,
);
