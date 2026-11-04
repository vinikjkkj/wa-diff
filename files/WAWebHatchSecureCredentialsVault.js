__d(
  "WAWebHatchSecureCredentialsVault",
  [
    "Promise",
    "WALogger",
    "WAWebHatchBoundChatDecoder",
    "WAWebHatchCustomConnector",
    "WAWebHatchCustomConnectorRequest",
    "WAWebHatchCustomOAuthConnectorRequest",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureCredentialDecoder",
    "WAWebHatchSecureCredentialVaultError",
    "WAWebHatchVmApi",
    "WAWebHatchVmConnection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 100,
      m = 5e3,
      p = { kind: "not_found" },
      _ = { kind: "name_taken" },
      f = new Set(["aborted", "channel", "credentials", "stale_generation"]),
      g = { kind: "context", value: null },
      h = {
        NO_CHANNEL: { raw: "transport.no_channel", reason: "transport" },
        TIMEOUT: { raw: "timed_out", reason: "timed_out" },
        TRANSPORT: { raw: "transport", reason: "transport" },
      },
      y = { raw: "stream_refused", reason: "stream_refused" },
      C = { raw: "malformed_response", reason: "malformed_response" },
      b = { raw: "unknown", reason: "unknown" };
    function v() {
      return S(null, new Set(), [], 0);
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r >= d) throw ie("catalog_too_many_pages", b);
            var a = yield J(function (t) {
              return t.credentialCatalog(e);
            }, "catalog");
            if (a.kind === "not_found") throw ie("catalog_not_found", ae(404));
            var i = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCatalogPage(a.value);
            if (i == null) throw ie("catalog_malformed", C);
            var l = [].concat(n, i.items),
              s = i.nextCursor;
            if (s == null) return l;
            if (t.has(s)) throw ie("catalog_cursor_repeated", b);
            return (t.add(s), S(s, t, l, r + 1));
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield J(function (t) {
            return t.credentialDetails(e);
          }, "details");
          if (t.kind === "not_found") return p;
          var n = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialDetails(t.value, e);
          if (n == null) throw ie("details_malformed", C);
          return { kind: "ok", value: n };
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
          var t = [];
          (e.username != null &&
            t.push({ name: "username", protected: !0, value: e.username }),
            t.push({ name: "password", protected: !0, value: e.password }));
          var n = e.requestId == null ? null : yield H(e.requestId, e.signal);
          if ((n == null ? void 0 : n.kind) === "no_session")
            throw ie("capture_no_session", n.failure);
          var r = yield Z(
            function (r) {
              return r.credentialCapture(
                babelHelpers.extends({}, X(n == null ? void 0 : n.value), {
                  fields: t,
                  idempotency_key: e.idempotencyKey,
                  label: null,
                  lifetime: "persist",
                  page_url: e.pageUrl,
                }),
              );
            },
            "capture",
            !1,
            e.signal,
          );
          if (r.kind === "not_found") throw ie("capture_not_found", ae(404));
          var a = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialCaptureId(r.value);
          if (a == null) throw ie("capture_malformed", C);
          return a;
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          if (
            (e.username != null &&
              t.push({ name: "username", value: e.username }),
            e.password != null &&
              t.push({ name: "password", value: e.password }),
            t.length === 0 && e.agentPermission == null)
          )
            return { kind: "ok", value: null };
          var n = yield Z(function (n) {
            return n.credentialUpdate(
              babelHelpers.extends(
                { fields: t, id: e.id },
                e.agentPermission == null
                  ? {}
                  : { agent_permission: e.agentPermission },
              ),
            );
          }, "update");
          if (n.kind === "not_found") return p;
          if (o("WAWebHatchJsonReaders").readBool(n.value, "updated") !== !0)
            throw ie("update_refused", b);
          return { kind: "ok", value: null };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield Z(function (t) {
            return t.credentialDelete(e);
          }, "delete");
          if (t.kind === "not_found") return p;
          if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
            throw ie("delete_refused", b);
          return { kind: "ok", value: null };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = yield O(
            babelHelpers.extends(
              {
                api_key: { key: t },
                connector: e.connector,
                replace_existing: n,
              },
              e.sessionId == null ? {} : { session_id: e.sessionId },
            ),
          );
          return r.kind === "name_taken"
            ? _
            : {
                kind: "registered",
                replaced:
                  o("WAWebHatchJsonReaders").readBool(
                    r.registration,
                    "replaced",
                  ) === !0,
              };
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a;
            r === void 0 && (r = !1);
            var i = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
              l = yield O(
                o(
                  "WAWebHatchCustomOAuthConnectorRequest",
                ).customOAuthConnectorRegisterBody(e, t, n, r),
              );
            if (l.kind === "name_taken") return _;
            var s =
              (a = o("WAWebHatchJsonReaders").readString(
                l.registration,
                "authorize_url",
              )) != null
                ? a
                : "";
            if (
              !o(
                "WAWebHatchCustomOAuthConnectorRequest",
              ).isSafeHatchCustomOAuthAuthorizeUrl(e, s)
            )
              throw (
                yield A(e.name, i),
                ie(
                  s === ""
                    ? "register_no_authorize_url"
                    : "register_unsafe_authorize_url",
                  C,
                )
              );
            return {
              authorizeUrl: s,
              kind: "registered",
              replaced:
                o("WAWebHatchJsonReaders").readBool(
                  l.registration,
                  "replaced",
                ) === !0,
            };
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r =
            o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t;
          if (!r) {
            var a = yield Z(function (a) {
              return (
                (r =
                  o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !==
                  t),
                r
                  ? (c || (c = n("Promise"))).resolve({
                      kind: "Ok",
                      value: null,
                    })
                  : a.connectorDisconnect(e, null)
              );
            }, "register_cleanup").then(
              function (e) {
                return (
                  r ||
                  (e.kind === "ok" &&
                    o("WAWebHatchJsonReaders").readBool(
                      e.value,
                      "disconnected",
                    ) === !0)
                );
              },
              function () {
                return !1;
              },
            );
            a ||
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-secure-credentials: register cleanup not confirmed",
                    ])),
                )
                .sendLogs("hatch-secure-credentials-register-cleanup");
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, r;
          if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
            throw ie("register_disabled", b);
          var a = !1,
            i = yield Z(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = yield t.customConnectorRegister(e);
                    return (
                      (a =
                        n.kind === "Rejected" &&
                        n.errorCode ===
                          o("WAWebHatchVmApi").CUSTOM_CONNECTOR_NAME_TAKEN),
                      a ? { kind: "Ok", value: null } : n
                    );
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              "register",
            );
          if (a) return _;
          if (i.kind === "not_found") throw ie("register_not_found", ae(404));
          var l =
            (t = o("WAWebHatchJsonReaders").readObject(i.value, "result")) !=
            null
              ? t
              : i.value;
          if (
            ((r = o("WAWebHatchJsonReaders").readString(l, "name")) != null
              ? r
              : "") === ""
          )
            throw ie("register_unconfirmed", C);
          return { kind: "stored", registration: l };
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
            return [];
          var e = yield J(function (e) {
            return e.customConnectorList();
          }, "custom_connectors");
          if (e.kind === "not_found")
            throw ie("custom_connectors_not_found", ae(404));
          var t = o("WAWebHatchCustomConnector").decodeHatchCustomConnectorList(
            e.value,
          );
          if (t == null) throw ie("custom_connectors_malformed", C);
          return t;
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
            throw ie("custom_connector_delete_disabled", b);
          if (
            !o("WAWebHatchCustomConnectorRequest").isHatchCustomConnectorName(e)
          )
            throw ie("custom_connector_delete_invalid", b);
          var t = yield Z(function (t) {
            return t.connectorDisconnect(e, null);
          }, "custom_connector_delete");
          if (t.kind === "not_found") return p;
          if (
            o("WAWebHatchJsonReaders").readBool(t.value, "disconnected") !== !0
          )
            throw ie("custom_connector_delete_refused", b);
          return { kind: "ok", value: null };
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
            var n = yield o(
              "WAWebHatchVmConnection",
            ).connectHatchVmApiWithResult(t != null ? t : void 0);
            if (n.kind !== "ready") {
              var r = te(n.failure, n.cause);
              return (
                Y(r.raw),
                f.has(n.failure) ? { failure: r, kind: "no_session" } : g
              );
            }
            return { kind: "context", value: yield z(n.api, e) };
          } catch (e) {
            return { kind: "context", value: Y("read_failed") };
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = Date.now() + m,
            i = function () {
              return { timeoutMs: a - Date.now() };
            },
            l = yield K(function () {
              return e.chats(i());
            });
          if (l == null) return Y("chats_read_failed");
          var s =
            (n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
              l,
              "whatsapp",
            )) == null
              ? void 0
              : n.chatId;
          if (s == null) return Y("no_whatsapp_chat");
          var u = yield K(function () {
            return e.chatMessage(s, t, i());
          });
          return u == null
            ? Y("message_read_failed")
            : (r = o(
                  "WAWebHatchSecureCredentialDecoder",
                ).decodeHatchSecureCredentialCaptureContext(u)) != null
              ? r
              : Y("not_a_capture_card");
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e();
          return (
            t.kind === "Failure" && (t = yield e()),
            t.kind === "Ok" ? t.value : null
          );
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      if (e == null) return {};
      var t = e.captureAuthorization,
        n = e.sessionId;
      return t == null
        ? { session_id: n }
        : { capture_authorization: t, session_id: n };
    }
    function Y(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-secure-credentials: no capture context reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-secure-credentials-capture-context-missing"),
        null
      );
    }
    function J(e, t) {
      return Z(e, t, !0);
    }
    function Z(e, t, n, r) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o;
            n === void 0 && (n = !1);
            var a = yield ne(t, r),
              i = yield e(a);
            if (oe(i)) {
              if (((i = yield e(yield ne(t, r))), oe(i)))
                throw ie(t + "_stream_refused", y);
            } else n && i.kind === "Failure" && (i = yield e(a));
            if (i.kind === "Ok") return { kind: "ok", value: i.value };
            if (i.kind === "Rejected") {
              if (i.statusCode === 404) return p;
              throw ie(t + "_rejected", ae(i.statusCode));
            }
            throw ie(
              t + "_" + i.kind.toLowerCase(),
              i.kind === "Failure"
                ? h[(o = i.reason) != null ? o : "TRANSPORT"]
                : C,
            );
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e, t) {
      return {
        raw: t == null ? "session." + e : "session." + e + "." + t,
        reason: "session",
      };
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            t != null ? t : void 0,
          );
          if (n.kind !== "ready")
            throw ie(e + "_no_session", te(n.failure, n.cause));
          return n.api;
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return e.kind === "Failure" && e.reason === "NO_CHANNEL";
    }
    function ae(e) {
      return { raw: e == null ? "http" : "http." + e, reason: "http" };
    }
    function ie(e, t) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-secure-credentials: vault call failed reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-secure-credentials-vault-failed"),
        new (o(
          "WAWebHatchSecureCredentialVaultError",
        ).HatchSecureCredentialVaultError)(t)
      );
    }
    ((l.requestHatchSecureCredentials = v),
      (l.requestHatchSecureCredentialDetails = L),
      (l.addHatchSecureCredential = k),
      (l.updateHatchSecureCredential = T),
      (l.deleteHatchSecureCredential = x),
      (l.registerHatchCustomConnector = P),
      (l.registerHatchCustomOAuthConnector = M),
      (l.requestHatchCustomConnectors = W),
      (l.deleteHatchCustomConnector = U));
  },
  98,
);
