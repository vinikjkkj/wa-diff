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
            if (r >= d) throw le("catalog_too_many_pages", b);
            var a = yield Z(function (t) {
              return t.credentialCatalog(e);
            }, "catalog");
            if (a.kind === "not_found") throw le("catalog_not_found", ie(404));
            var i = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCatalogPage(a.value);
            if (i == null) throw le("catalog_malformed", C);
            var l = [].concat(n, i.items),
              s = i.nextCursor;
            if (s == null) return l;
            if (t.has(s)) throw le("catalog_cursor_repeated", b);
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
          var t = yield Z(function (t) {
            return t.credentialDetails(e);
          }, "details");
          if (t.kind === "not_found") return p;
          var n = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialDetails(t.value, e);
          if (n == null) throw le("details_malformed", C);
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
          var n = e.requestId == null ? null : yield G(e.requestId, e.signal);
          if ((n == null ? void 0 : n.kind) === "no_session")
            throw le("capture_no_session", n.failure);
          var r = yield ee(
            function (r) {
              return r.credentialCapture(
                babelHelpers.extends({}, Y(n == null ? void 0 : n.value), {
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
          if (r.kind === "not_found") throw le("capture_not_found", ie(404));
          var a = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialCaptureId(r.value);
          if (a == null) throw le("capture_malformed", C);
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
          var n = yield ee(function (n) {
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
            throw le("update_refused", b);
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
          var t = yield ee(function (t) {
            return t.credentialDelete(e);
          }, "delete");
          if (t.kind === "not_found") return p;
          if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
            throw le("delete_refused", b);
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
          var r = yield B(
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
              l = yield B(
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
                yield F(e.name, i),
                le(
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
    function A() {
      return (
        o("WAWebHatchFrontendGating").isHatchSecureCredentialsEnabled() &&
        o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r =
            o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t;
          if (!r) {
            var a = yield ee(function (a) {
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, r;
          if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
            throw le("register_disabled", b);
          var a = !1,
            i = yield ee(
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
          if (i.kind === "not_found") throw le("register_not_found", ie(404));
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
            throw le("register_unconfirmed", C);
          return { kind: "stored", registration: l };
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!A()) return [];
          var e = yield Z(function (e) {
            return e.customConnectorList();
          }, "custom_connectors");
          if (e.kind === "not_found")
            throw le("custom_connectors_not_found", ie(404));
          var t = o("WAWebHatchCustomConnector").decodeHatchCustomConnectorList(
            e.value,
          );
          if (t == null) throw le("custom_connectors_malformed", C);
          return t;
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
          if (!A()) throw le("custom_connector_delete_disabled", b);
          if (
            !o("WAWebHatchCustomConnectorRequest").isHatchCustomConnectorName(e)
          )
            throw le("custom_connector_delete_invalid", b);
          var t = yield ee(function (t) {
            return t.connectorDisconnect(e, null);
          }, "custom_connector_delete");
          if (t.kind === "not_found") return p;
          if (
            o("WAWebHatchJsonReaders").readBool(t.value, "disconnected") !== !0
          )
            throw le("custom_connector_delete_refused", b);
          return { kind: "ok", value: null };
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
            var n = yield o(
              "WAWebHatchVmConnection",
            ).connectHatchVmApiWithResult(t != null ? t : void 0);
            if (n.kind !== "ready") {
              var r = ne(n.failure, n.cause);
              return (
                J(r.raw),
                f.has(n.failure) ? { failure: r, kind: "no_session" } : g
              );
            }
            return { kind: "context", value: yield j(n.api, e) };
          } catch (e) {
            return { kind: "context", value: J("read_failed") };
          }
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
          var n,
            r,
            a = Date.now() + m,
            i = function () {
              return { timeoutMs: a - Date.now() };
            },
            l = yield Q(function () {
              return e.chats(i());
            });
          if (l == null) return J("chats_read_failed");
          var s =
            (n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
              l,
              "whatsapp",
            )) == null
              ? void 0
              : n.chatId;
          if (s == null) return J("no_whatsapp_chat");
          var u = yield Q(function () {
            return e.chatMessage(s, t, i());
          });
          return u == null
            ? J("message_read_failed")
            : (r = o(
                  "WAWebHatchSecureCredentialDecoder",
                ).decodeHatchSecureCredentialCaptureContext(u)) != null
              ? r
              : J("not_a_capture_card");
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e();
          return (
            t.kind === "Failure" && (t = yield e()),
            t.kind === "Ok" ? t.value : null
          );
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      if (e == null) return {};
      var t = e.captureAuthorization,
        n = e.sessionId;
      return t == null
        ? { session_id: n }
        : { capture_authorization: t, session_id: n };
    }
    function J(t) {
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
    function Z(e, t) {
      return ee(e, t, !0);
    }
    function ee(e, t, n, r) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o;
            n === void 0 && (n = !1);
            var a = yield re(t, r),
              i = yield e(a);
            if (ae(i)) {
              if (((i = yield e(yield re(t, r))), ae(i)))
                throw le(t + "_stream_refused", y);
            } else n && i.kind === "Failure" && (i = yield e(a));
            if (i.kind === "Ok") return { kind: "ok", value: i.value };
            if (i.kind === "Rejected") {
              if (i.statusCode === 404) return p;
              throw le(t + "_rejected", ie(i.statusCode));
            }
            throw le(
              t + "_" + i.kind.toLowerCase(),
              i.kind === "Failure"
                ? h[(o = i.reason) != null ? o : "TRANSPORT"]
                : C,
            );
          },
        )),
        te.apply(this, arguments)
      );
    }
    function ne(e, t) {
      return {
        raw: t == null ? "session." + e : "session." + e + "." + t,
        reason: "session",
      };
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            t != null ? t : void 0,
          );
          if (n.kind !== "ready")
            throw le(e + "_no_session", ne(n.failure, n.cause));
          return n.api;
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return e.kind === "Failure" && e.reason === "NO_CHANNEL";
    }
    function ie(e) {
      return { raw: e == null ? "http" : "http." + e, reason: "http" };
    }
    function le(e, t) {
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
      (l.requestHatchCustomConnectors = q),
      (l.deleteHatchCustomConnector = V));
  },
  98,
);
