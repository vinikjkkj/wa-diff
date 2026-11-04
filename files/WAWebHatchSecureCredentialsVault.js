__d(
  "WAWebHatchSecureCredentialsVault",
  [
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
      u = 100,
      c = 5e3,
      d = { kind: "not_found" },
      m = { kind: "name_taken" },
      p = new Set(["aborted", "channel", "credentials", "stale_generation"]),
      _ = { kind: "context", value: null },
      f = {
        NO_CHANNEL: { raw: "transport.no_channel", reason: "transport" },
        TIMEOUT: { raw: "timed_out", reason: "timed_out" },
        TRANSPORT: { raw: "transport", reason: "transport" },
      },
      g = { raw: "stream_refused", reason: "stream_refused" },
      h = { raw: "malformed_response", reason: "malformed_response" },
      y = { raw: "unknown", reason: "unknown" };
    function C() {
      return b(null, new Set(), [], 0);
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r >= u) throw ne("catalog_too_many_pages", y);
            var a = yield K(function (t) {
              return t.credentialCatalog(e);
            }, "catalog");
            if (a.kind === "not_found") throw ne("catalog_not_found", te(404));
            var i = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCatalogPage(a.value);
            if (i == null) throw ne("catalog_malformed", h);
            var l = [].concat(n, i.items),
              s = i.nextCursor;
            if (s == null) return l;
            if (t.has(s)) throw ne("catalog_cursor_repeated", y);
            return (t.add(s), b(s, t, l, r + 1));
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield K(function (t) {
            return t.credentialDetails(e);
          }, "details");
          if (t.kind === "not_found") return d;
          var n = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialDetails(t.value, e);
          if (n == null) throw ne("details_malformed", h);
          return { kind: "ok", value: n };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          (e.username != null &&
            t.push({ name: "username", protected: !0, value: e.username }),
            t.push({ name: "password", protected: !0, value: e.password }));
          var n = e.requestId == null ? null : yield W(e.requestId, e.signal);
          if ((n == null ? void 0 : n.kind) === "no_session")
            throw ne("capture_no_session", n.failure);
          var r = yield Q(
            function (r) {
              return r.credentialCapture(
                babelHelpers.extends({}, z(n == null ? void 0 : n.value), {
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
          if (r.kind === "not_found") throw ne("capture_not_found", te(404));
          var a = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialCaptureId(r.value);
          if (a == null) throw ne("capture_malformed", h);
          return a;
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
          if (
            (e.username != null &&
              t.push({ name: "username", value: e.username }),
            e.password != null &&
              t.push({ name: "password", value: e.password }),
            t.length === 0 && e.agentPermission == null)
          )
            return { kind: "ok", value: null };
          var n = yield Q(function (n) {
            return n.credentialUpdate(
              babelHelpers.extends(
                { fields: t, id: e.id },
                e.agentPermission == null
                  ? {}
                  : { agent_permission: e.agentPermission },
              ),
            );
          }, "update");
          if (n.kind === "not_found") return d;
          if (o("WAWebHatchJsonReaders").readBool(n.value, "updated") !== !0)
            throw ne("update_refused", y);
          return { kind: "ok", value: null };
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
          var t = yield Q(function (t) {
            return t.credentialDelete(e);
          }, "delete");
          if (t.kind === "not_found") return d;
          if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
            throw ne("delete_refused", y);
          return { kind: "ok", value: null };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = yield M(
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
            ? m
            : {
                kind: "registered",
                replaced:
                  o("WAWebHatchJsonReaders").readBool(
                    r.registration,
                    "replaced",
                  ) === !0,
              };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, r) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a;
            r === void 0 && (r = !1);
            var i = yield M(
              o(
                "WAWebHatchCustomOAuthConnectorRequest",
              ).customOAuthConnectorRegisterBody(e, t, n, r),
            );
            if (i.kind === "name_taken") return m;
            var l =
              (a = o("WAWebHatchJsonReaders").readString(
                i.registration,
                "authorize_url",
              )) != null
                ? a
                : "";
            if (
              !o(
                "WAWebHatchCustomOAuthConnectorRequest",
              ).isSafeHatchCustomOAuthAuthorizeUrl(e, l)
            )
              throw ne("register_unsafe_authorize_url", h);
            return {
              authorizeUrl: l,
              kind: "registered",
              replaced:
                o("WAWebHatchJsonReaders").readBool(
                  i.registration,
                  "replaced",
                ) === !0,
            };
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, r;
          if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
            throw ne("register_disabled", y);
          var a = !1,
            i = yield Q(
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
          if (a) return m;
          if (i.kind === "not_found") throw ne("register_not_found", te(404));
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
            throw ne("register_unconfirmed", h);
          return { kind: "stored", registration: l };
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
            return [];
          var e = yield K(function (e) {
            return e.customConnectorList();
          }, "custom_connectors");
          if (e.kind === "not_found")
            throw ne("custom_connectors_not_found", te(404));
          var t = o("WAWebHatchCustomConnector").decodeHatchCustomConnectorList(
            e.value,
          );
          if (t == null) throw ne("custom_connectors_malformed", h);
          return t;
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
          if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
            throw ne("custom_connector_delete_disabled", y);
          if (
            !o("WAWebHatchCustomConnectorRequest").isHatchCustomConnectorName(e)
          )
            throw ne("custom_connector_delete_invalid", y);
          var t = yield Q(function (t) {
            return t.connectorDisconnect(e, null);
          }, "custom_connector_delete");
          if (t.kind === "not_found") return d;
          if (
            o("WAWebHatchJsonReaders").readBool(t.value, "disconnected") !== !0
          )
            throw ne("custom_connector_delete_refused", y);
          return { kind: "ok", value: null };
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o(
              "WAWebHatchVmConnection",
            ).connectHatchVmApiWithResult(t != null ? t : void 0);
            if (n.kind !== "ready") {
              var r = Y(n.failure, n.cause);
              return (
                j(r.raw),
                p.has(n.failure) ? { failure: r, kind: "no_session" } : _
              );
            }
            return { kind: "context", value: yield U(n.api, e) };
          } catch (e) {
            return { kind: "context", value: j("read_failed") };
          }
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
          var n,
            r,
            a = Date.now() + c,
            i = function () {
              return { timeoutMs: a - Date.now() };
            },
            l = yield H(function () {
              return e.chats(i());
            });
          if (l == null) return j("chats_read_failed");
          var s =
            (n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
              l,
              "whatsapp",
            )) == null
              ? void 0
              : n.chatId;
          if (s == null) return j("no_whatsapp_chat");
          var u = yield H(function () {
            return e.chatMessage(s, t, i());
          });
          return u == null
            ? j("message_read_failed")
            : (r = o(
                  "WAWebHatchSecureCredentialDecoder",
                ).decodeHatchSecureCredentialCaptureContext(u)) != null
              ? r
              : j("not_a_capture_card");
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e();
          return (
            t.kind === "Failure" && (t = yield e()),
            t.kind === "Ok" ? t.value : null
          );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      if (e == null) return {};
      var t = e.captureAuthorization,
        n = e.sessionId;
      return t == null
        ? { session_id: n }
        : { capture_authorization: t, session_id: n };
    }
    function j(t) {
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
    function K(e, t) {
      return Q(e, t, !0);
    }
    function Q(e, t, n, r) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o;
            n === void 0 && (n = !1);
            var a = yield J(t, r),
              i = yield e(a);
            if (ee(i)) {
              if (((i = yield e(yield J(t, r))), ee(i)))
                throw ne(t + "_stream_refused", g);
            } else n && i.kind === "Failure" && (i = yield e(a));
            if (i.kind === "Ok") return { kind: "ok", value: i.value };
            if (i.kind === "Rejected") {
              if (i.statusCode === 404) return d;
              throw ne(t + "_rejected", te(i.statusCode));
            }
            throw ne(
              t + "_" + i.kind.toLowerCase(),
              i.kind === "Failure"
                ? f[(o = i.reason) != null ? o : "TRANSPORT"]
                : h,
            );
          },
        )),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      return {
        raw: t == null ? "session." + e : "session." + e + "." + t,
        reason: "session",
      };
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            t != null ? t : void 0,
          );
          if (n.kind !== "ready")
            throw ne(e + "_no_session", Y(n.failure, n.cause));
          return n.api;
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return e.kind === "Failure" && e.reason === "NO_CHANNEL";
    }
    function te(e) {
      return { raw: e == null ? "http" : "http." + e, reason: "http" };
    }
    function ne(e, t) {
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
    ((l.requestHatchSecureCredentials = C),
      (l.requestHatchSecureCredentialDetails = S),
      (l.addHatchSecureCredential = L),
      (l.updateHatchSecureCredential = k),
      (l.deleteHatchSecureCredential = T),
      (l.registerHatchCustomConnector = x),
      (l.registerHatchCustomOAuthConnector = P),
      (l.requestHatchCustomConnectors = A),
      (l.deleteHatchCustomConnector = O));
  },
  98,
);
