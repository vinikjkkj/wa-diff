__d(
  "WAWebHatchSecureCredentialsVault",
  [
    "WALogger",
    "WAWebHatchBoundChatDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureCredentialDecoder",
    "WAWebHatchSecureCredentialVaultError",
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
      m = new Set(["aborted", "channel", "credentials", "stale_generation"]),
      p = { kind: "context", value: null },
      _ = {
        NO_CHANNEL: { raw: "transport.no_channel", reason: "transport" },
        TIMEOUT: { raw: "timed_out", reason: "timed_out" },
        TRANSPORT: { raw: "transport", reason: "transport" },
      },
      f = { raw: "stream_refused", reason: "stream_refused" },
      g = { raw: "malformed_response", reason: "malformed_response" },
      h = { raw: "unknown", reason: "unknown" };
    function y() {
      return C(null, new Set(), [], 0);
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r >= u) throw G("catalog_too_many_pages", h);
            var a = yield F(function (t) {
              return t.credentialCatalog(e);
            }, "catalog");
            if (a.kind === "not_found") throw G("catalog_not_found", H(404));
            var i = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCatalogPage(a.value);
            if (i == null) throw G("catalog_malformed", g);
            var l = [].concat(n, i.items),
              s = i.nextCursor;
            if (s == null) return l;
            if (t.has(s)) throw G("catalog_cursor_repeated", h);
            return (t.add(s), C(s, t, l, r + 1));
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield F(function (t) {
            return t.credentialDetails(e);
          }, "details");
          if (t.kind === "not_found") return d;
          var n = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialDetails(t.value, e);
          if (n == null) throw G("details_malformed", g);
          return { kind: "ok", value: n };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          (e.username != null &&
            t.push({ name: "username", protected: !0, value: e.username }),
            t.push({ name: "password", protected: !0, value: e.password }));
          var n = e.requestId == null ? null : yield D(e.requestId, e.signal);
          if ((n == null ? void 0 : n.kind) === "no_session")
            throw G("capture_no_session", n.failure);
          var r = yield O(
            function (r) {
              return r.credentialCapture(
                babelHelpers.extends({}, w(n == null ? void 0 : n.value), {
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
          if (r.kind === "not_found") throw G("capture_not_found", H(404));
          var a = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialCaptureId(r.value);
          if (a == null) throw G("capture_malformed", g);
          return a;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          if (
            (e.username != null &&
              t.push({ name: "username", value: e.username }),
            e.password != null &&
              t.push({ name: "password", value: e.password }),
            t.length === 0 && e.agentPermission == null)
          )
            return { kind: "ok", value: null };
          var n = yield O(function (n) {
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
            throw G("update_refused", h);
          return { kind: "ok", value: null };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield O(function (t) {
            return t.credentialDelete(e);
          }, "delete");
          if (t.kind === "not_found") return d;
          if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
            throw G("delete_refused", h);
          return { kind: "ok", value: null };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o(
              "WAWebHatchVmConnection",
            ).connectHatchVmApiWithResult(t != null ? t : void 0);
            if (n.kind !== "ready") {
              var r = W(n.failure, n.cause);
              return (
                A(r.raw),
                m.has(n.failure) ? { failure: r, kind: "no_session" } : p
              );
            }
            return { kind: "context", value: yield $(n.api, e) };
          } catch (e) {
            return { kind: "context", value: A("read_failed") };
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = Date.now() + c,
            i = function () {
              return { timeoutMs: a - Date.now() };
            },
            l = yield N(function () {
              return e.chats(i());
            });
          if (l == null) return A("chats_read_failed");
          var s =
            (n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
              l,
              "whatsapp",
            )) == null
              ? void 0
              : n.chatId;
          if (s == null) return A("no_whatsapp_chat");
          var u = yield N(function () {
            return e.chatMessage(s, t, i());
          });
          return u == null
            ? A("message_read_failed")
            : (r = o(
                  "WAWebHatchSecureCredentialDecoder",
                ).decodeHatchSecureCredentialCaptureContext(u)) != null
              ? r
              : A("not_a_capture_card");
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e();
          return (
            t.kind === "Failure" && (t = yield e()),
            t.kind === "Ok" ? t.value : null
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      if (e == null) return {};
      var t = e.captureAuthorization,
        n = e.sessionId;
      return t == null
        ? { session_id: n }
        : { capture_authorization: t, session_id: n };
    }
    function A(t) {
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
    function F(e, t) {
      return O(e, t, !0);
    }
    function O(e, t, n, r) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o;
            n === void 0 && (n = !1);
            var a = yield q(t, r),
              i = yield e(a);
            if (V(i)) {
              if (((i = yield e(yield q(t, r))), V(i)))
                throw G(t + "_stream_refused", f);
            } else n && i.kind === "Failure" && (i = yield e(a));
            if (i.kind === "Ok") return { kind: "ok", value: i.value };
            if (i.kind === "Rejected") {
              if (i.statusCode === 404) return d;
              throw G(t + "_rejected", H(i.statusCode));
            }
            throw G(
              t + "_" + i.kind.toLowerCase(),
              i.kind === "Failure"
                ? _[(o = i.reason) != null ? o : "TRANSPORT"]
                : g,
            );
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return {
        raw: t == null ? "session." + e : "session." + e + "." + t,
        reason: "session",
      };
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            t != null ? t : void 0,
          );
          if (n.kind !== "ready")
            throw G(e + "_no_session", W(n.failure, n.cause));
          return n.api;
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return e.kind === "Failure" && e.reason === "NO_CHANNEL";
    }
    function H(e) {
      return { raw: e == null ? "http" : "http." + e, reason: "http" };
    }
    function G(e, t) {
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
    ((l.requestHatchSecureCredentials = y),
      (l.requestHatchSecureCredentialDetails = v),
      (l.addHatchSecureCredential = R),
      (l.updateHatchSecureCredential = E),
      (l.deleteHatchSecureCredential = I));
  },
  98,
);
