__d(
  "WAWebHatchSecureCredentialsVault",
  [
    "WALogger",
    "WAWebBoolFunc",
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 100,
      d = 5e3,
      m = { kind: "not_found" },
      p = { kind: "name_taken" },
      _ = new Set(["aborted", "channel", "credentials", "stale_generation"]),
      f = { kind: "context", value: null },
      g = {
        NO_CHANNEL: { raw: "transport.no_channel", reason: "transport" },
        TIMEOUT: { raw: "timed_out", reason: "timed_out" },
        TRANSPORT: { raw: "transport", reason: "transport" },
      },
      h = { raw: "stream_refused", reason: "stream_refused" },
      y = { raw: "malformed_response", reason: "malformed_response" },
      C = { raw: "unknown", reason: "unknown" };
    function b() {
      return v(null, new Set(), [], 0);
    }
    async function v(e, t, n, r) {
      if (r >= c) throw H("catalog_too_many_pages", C);
      var a = await O(function (t) {
        return t.credentialCatalog(e);
      }, "catalog");
      if (a.kind === "not_found") throw H("catalog_not_found", V(404));
      var i = o(
        "WAWebHatchSecureCredentialDecoder",
      ).decodeHatchSecureCredentialCatalogPage(a.value);
      if (i == null) throw H("catalog_malformed", y);
      var l = [].concat(n, i.items),
        s = i.nextCursor;
      if (s == null) return l;
      if (t.has(s)) throw H("catalog_cursor_repeated", C);
      return (t.add(s), v(s, t, l, r + 1));
    }
    async function S(e) {
      var t = await O(function (t) {
        return t.credentialDetails(e);
      }, "details");
      if (t.kind === "not_found") return m;
      var n = o(
        "WAWebHatchSecureCredentialDecoder",
      ).decodeHatchSecureCredentialDetails(t.value, e);
      if (n == null) throw H("details_malformed", y);
      return { kind: "ok", value: n };
    }
    async function R(e) {
      var t = [];
      (e.username != null &&
        t.push({ name: "username", protected: !0, value: e.username }),
        t.push({ name: "password", protected: !0, value: e.password }));
      var n = e.requestId == null ? null : await N(e.requestId, e.signal);
      if ((n == null ? void 0 : n.kind) === "no_session")
        throw H("capture_no_session", n.failure);
      var r = await B(
        function (r) {
          return r.credentialCapture(
            babelHelpers.extends(
              {},
              A(n == null ? void 0 : n.value),
              {
                fields: t,
                idempotency_key: e.idempotencyKey,
                label: null,
                lifetime: "persist",
              },
              e.operation != null ? { operation: e.operation } : {},
              { page_url: e.pageUrl },
            ),
          );
        },
        "capture",
        !1,
        e.signal,
      );
      if (r.kind === "not_found") throw H("capture_not_found", V(404));
      var a = o(
        "WAWebHatchSecureCredentialDecoder",
      ).decodeHatchSecureCredentialCaptureId(r.value);
      if (a == null) throw H("capture_malformed", y);
      return a;
    }
    async function L(e) {
      var t = [];
      if (
        (e.username != null && t.push({ name: "username", value: e.username }),
        e.password != null && t.push({ name: "password", value: e.password }),
        t.length === 0 && e.agentPermission == null)
      )
        return { kind: "ok", value: null };
      var n = await B(function (n) {
        return n.credentialUpdate(
          babelHelpers.extends(
            { fields: t, id: e.id },
            e.agentPermission == null
              ? {}
              : { agent_permission: e.agentPermission },
          ),
        );
      }, "update");
      if (n.kind === "not_found") return m;
      if (o("WAWebHatchJsonReaders").readBool(n.value, "updated") !== !0)
        throw H("update_refused", C);
      return { kind: "ok", value: null };
    }
    async function E(e) {
      var t = await B(function (t) {
        return t.credentialDelete(e);
      }, "delete");
      if (t.kind === "not_found") return m;
      if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
        throw H("delete_refused", C);
      return { kind: "ok", value: null };
    }
    async function k(e, t, n) {
      n === void 0 && (n = !1);
      var r = await x(
        babelHelpers.extends(
          { api_key: { key: t }, connector: e.connector, replace_existing: n },
          e.sessionId == null ? {} : { session_id: e.sessionId },
        ),
      );
      return r.kind === "name_taken"
        ? p
        : {
            kind: "registered",
            replaced:
              o("WAWebHatchJsonReaders").readBool(
                r.registration,
                "replaced",
              ) === !0,
          };
    }
    async function I(e, t, n, r) {
      var a;
      r === void 0 && (r = !1);
      var i = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        l = await x(
          o(
            "WAWebHatchCustomOAuthConnectorRequest",
          ).customOAuthConnectorRegisterBody(e, t, n, r),
        );
      if (l.kind === "name_taken") return p;
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
          await D(e.name, i),
          H(
            s === ""
              ? "register_no_authorize_url"
              : "register_unsafe_authorize_url",
            y,
          )
        );
      return {
        authorizeUrl: s,
        kind: "registered",
        replaced:
          o("WAWebHatchJsonReaders").readBool(l.registration, "replaced") ===
          !0,
      };
    }
    function T() {
      return (
        o("WAWebHatchFrontendGating").isHatchSecureCredentialsEnabled() &&
        o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()
      );
    }
    async function D(t, n) {
      var r = o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== n;
      if (!r) {
        var a = await B(function (e) {
          return (
            (r =
              o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== n),
            r
              ? Promise.resolve({ kind: "Ok", value: null })
              : e.connectorDisconnect(t, null)
          );
        }, "register_cleanup").then(function (e) {
          return (
            r ||
            (e.kind === "ok" &&
              o("WAWebHatchJsonReaders").readBool(e.value, "disconnected") ===
                !0)
          );
        }, o("WAWebBoolFunc").returnFalse);
        a ||
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-secure-credentials: register cleanup not confirmed",
                ])),
            )
            .sendLogs("hatch-secure-credentials-register-cleanup");
      }
    }
    async function x(e) {
      var t, n;
      if (!o("WAWebHatchFrontendGating").isHatchCustomConnectorsEnabled())
        throw H("register_disabled", C);
      var r = !1,
        a = await B(async function (t) {
          var n = await t.customConnectorRegister(e);
          return (
            (r =
              n.kind === "Rejected" &&
              n.errorCode === o("WAWebHatchVmApi").CUSTOM_CONNECTOR_NAME_TAKEN),
            r ? { kind: "Ok", value: null } : n
          );
        }, "register");
      if (r) return p;
      if (a.kind === "not_found") throw H("register_not_found", V(404));
      var i =
        (t = o("WAWebHatchJsonReaders").readObject(a.value, "result")) != null
          ? t
          : a.value;
      if (
        ((n = o("WAWebHatchJsonReaders").readString(i, "name")) != null
          ? n
          : "") === ""
      )
        throw H("register_unconfirmed", y);
      return { kind: "stored", registration: i };
    }
    async function $() {
      if (!T()) return [];
      var e = await O(function (e) {
        return e.customConnectorList();
      }, "custom_connectors");
      if (e.kind === "not_found")
        throw H("custom_connectors_not_found", V(404));
      var t = o("WAWebHatchCustomConnector").decodeHatchCustomConnectorList(
        e.value,
      );
      if (t == null) throw H("custom_connectors_malformed", y);
      return t;
    }
    async function P(e) {
      if (!T()) throw H("custom_connector_delete_disabled", C);
      if (!o("WAWebHatchCustomConnectorRequest").isHatchCustomConnectorName(e))
        throw H("custom_connector_delete_invalid", C);
      var t = await B(function (t) {
        return t.connectorDisconnect(e, null);
      }, "custom_connector_delete");
      if (t.kind === "not_found") return m;
      if (o("WAWebHatchJsonReaders").readBool(t.value, "disconnected") !== !0)
        throw H("custom_connector_delete_refused", C);
      return { kind: "ok", value: null };
    }
    async function N(e, t) {
      try {
        var n = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          t != null ? t : void 0,
        );
        if (n.kind !== "ready") {
          var r = W(n.failure, n.cause);
          return (
            F(r.raw),
            _.has(n.failure) ? { failure: r, kind: "no_session" } : f
          );
        }
        return { kind: "context", value: await M(n.api, e) };
      } catch (e) {
        return { kind: "context", value: F("read_failed") };
      }
    }
    async function M(e, t) {
      var n,
        r,
        a = Date.now() + d,
        i = function () {
          return { timeoutMs: a - Date.now() };
        },
        l = await w(function () {
          return e.chats(i());
        });
      if (l == null) return F("chats_read_failed");
      var s =
        (n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
          l,
          "whatsapp",
        )) == null
          ? void 0
          : n.chatId;
      if (s == null) return F("no_whatsapp_chat");
      var u = await w(function () {
        return e.chatMessage(s, t, i());
      });
      return u == null
        ? F("message_read_failed")
        : (r = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCaptureContext(u)) != null
          ? r
          : F("not_a_capture_card");
    }
    async function w(e) {
      var t = await e();
      return (
        t.kind === "Failure" && (t = await e()),
        t.kind === "Ok" ? t.value : null
      );
    }
    function A(e) {
      if (e == null) return {};
      var t = e.captureAuthorization,
        n = e.sessionId;
      return t == null
        ? { session_id: n }
        : { capture_authorization: t, session_id: n };
    }
    function F(e) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-secure-credentials: no capture context reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-secure-credentials-capture-context-missing"),
        null
      );
    }
    function O(e, t) {
      return B(e, t, !0);
    }
    async function B(e, t, n, r) {
      var o;
      n === void 0 && (n = !1);
      var a = await q(t, r),
        i = await e(a);
      if (U(i)) {
        if (((i = await e(await q(t, r))), U(i)))
          throw H(t + "_stream_refused", h);
      } else n && i.kind === "Failure" && (i = await e(a));
      if (i.kind === "Ok") return { kind: "ok", value: i.value };
      if (i.kind === "Rejected") {
        if (i.statusCode === 404) return m;
        throw H(t + "_rejected", V(i.statusCode));
      }
      throw H(
        t + "_" + i.kind.toLowerCase(),
        i.kind === "Failure" ? g[(o = i.reason) != null ? o : "TRANSPORT"] : y,
      );
    }
    function W(e, t) {
      return {
        raw: t == null ? "session." + e : "session." + e + "." + t,
        reason: "session",
      };
    }
    async function q(e, t) {
      var n = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
        t != null ? t : void 0,
      );
      if (n.kind !== "ready") throw H(e + "_no_session", W(n.failure, n.cause));
      return n.api;
    }
    function U(e) {
      return e.kind === "Failure" && e.reason === "NO_CHANNEL";
    }
    function V(e) {
      return { raw: e == null ? "http" : "http." + e, reason: "http" };
    }
    function H(e, t) {
      return (
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.requestHatchSecureCredentials = b),
      (l.requestHatchSecureCredentialDetails = S),
      (l.addHatchSecureCredential = R),
      (l.updateHatchSecureCredential = L),
      (l.deleteHatchSecureCredential = E),
      (l.registerHatchCustomConnector = k),
      (l.registerHatchCustomOAuthConnector = I),
      (l.requestHatchCustomConnectors = $),
      (l.deleteHatchCustomConnector = P));
  },
  98,
);
