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
      m = {
        channel: { raw: "session.channel", reason: "session" },
        credentials: { raw: "session.credentials", reason: "session" },
        no_api: { raw: "session.no_api", reason: "session" },
        stale_generation: {
          raw: "session.stale_generation",
          reason: "session",
        },
        threw: { raw: "session.threw", reason: "session" },
      },
      p = { raw: "transport", reason: "transport" },
      _ = { raw: "malformed_response", reason: "malformed_response" },
      f = { raw: "unknown", reason: "unknown" },
      g = { Failure: p, Unreadable: _ };
    function h() {
      return y(null, new Set(), [], 0);
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r >= u) throw O("catalog_too_many_pages", f);
            var a = yield M(function (t) {
              return t.credentialCatalog(e);
            }, "catalog");
            if (a.kind === "not_found") throw O("catalog_not_found", F(404));
            var i = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCatalogPage(a.value);
            if (i == null) throw O("catalog_malformed", _);
            var l = [].concat(n, i.items),
              s = i.nextCursor;
            if (s == null) return l;
            if (t.has(s)) throw O("catalog_cursor_repeated", f);
            return (t.add(s), y(s, t, l, r + 1));
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield M(function (t) {
            return t.credentialDetails(e);
          }, "details");
          if (t.kind === "not_found") return d;
          var n = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialDetails(t.value, e);
          if (n == null) throw O("details_malformed", _);
          return { kind: "ok", value: n };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          (e.username != null &&
            t.push({ name: "username", protected: !0, value: e.username }),
            t.push({ name: "password", protected: !0, value: e.password }));
          var n = e.requestId == null ? null : yield T(e.requestId),
            r = yield w(function (r) {
              return r.credentialCapture(
                babelHelpers.extends({}, P(n), {
                  fields: t,
                  idempotency_key: e.idempotencyKey,
                  label: null,
                  lifetime: "persist",
                  page_url: e.pageUrl,
                }),
              );
            }, "capture");
          if (r.kind === "not_found") throw O("capture_not_found", F(404));
          var a = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialCaptureId(r.value);
          if (a == null) throw O("capture_malformed", _);
          return a;
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
          if (
            (e.username != null &&
              t.push({ name: "username", value: e.username }),
            e.password != null &&
              t.push({ name: "password", value: e.password }),
            t.length === 0 && e.agentPermission == null)
          )
            return { kind: "ok", value: null };
          var n = yield w(function (n) {
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
            throw O("update_refused", f);
          return { kind: "ok", value: null };
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
          var t = yield w(function (t) {
            return t.credentialDelete(e);
          }, "delete");
          if (t.kind === "not_found") return d;
          if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
            throw O("delete_refused", f);
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
          var t = Date.now() + c,
            n = function () {
              return { timeoutMs: t - Date.now() };
            };
          try {
            var r,
              a,
              i = yield x(function (e) {
                return e.chats(n());
              });
            if (i == null) return N("chats_read_failed");
            var l =
              (r = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
                i,
                "whatsapp",
              )) == null
                ? void 0
                : r.chatId;
            if (l == null) return N("no_whatsapp_chat");
            var s = yield x(function (t) {
              return t.chatMessage(l, e, n());
            });
            return s == null
              ? N("message_read_failed")
              : (a = o(
                    "WAWebHatchSecureCredentialDecoder",
                  ).decodeHatchSecureCredentialCaptureContext(s)) != null
                ? a
                : N("not_a_capture_card");
          } catch (e) {
            return N("read_failed");
          }
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
          var t = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (t == null) return null;
          var n = yield e(t);
          return (
            n.kind === "Failure" && (n = yield e(t)),
            n.kind === "Ok" ? n.value : null
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      if (e == null) return {};
      var t = e.captureAuthorization,
        n = e.sessionId;
      return t == null
        ? { session_id: n }
        : { capture_authorization: t, session_id: n };
    }
    function N(t) {
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
    function M(e, t) {
      return w(e, t, !0);
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = yield o(
            "WAWebHatchVmConnection",
          ).connectHatchVmApiWithResult();
          if (r.kind !== "ready") throw O(t + "_no_session", m[r.failure]);
          var a = r.api,
            i = yield e(a);
          if ((n && i.kind === "Failure" && (i = yield e(a)), i.kind === "Ok"))
            return { kind: "ok", value: i.value };
          if (i.kind === "Rejected") {
            if (i.statusCode === 404) return d;
            throw O(t + "_rejected", F(i.statusCode));
          }
          throw O(t + "_" + i.kind.toLowerCase(), g[i.kind]);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return { raw: e == null ? "http" : "http." + e, reason: "http" };
    }
    function O(e, t) {
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
    ((l.requestHatchSecureCredentials = h),
      (l.requestHatchSecureCredentialDetails = b),
      (l.addHatchSecureCredential = S),
      (l.updateHatchSecureCredential = L),
      (l.deleteHatchSecureCredential = k));
  },
  98,
);
