__d(
  "WAWebHatchSecureCredentialsVault",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureCredentialDecoder",
    "WAWebHatchSecureCredentialVaultError",
    "WAWebHatchVmConnection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = { kind: "not_found" },
      c = { raw: "session", reason: "session" },
      d = { raw: "transport", reason: "transport" },
      m = { raw: "malformed_response", reason: "malformed_response" },
      p = { raw: "unknown", reason: "unknown" },
      _ = { Failure: d, Unreadable: m };
    function f() {
      return g(null, new Set(), [], 0);
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r >= s) throw x("catalog_too_many_pages", p);
            var a = yield k(function (t) {
              return t.credentialCatalog(e);
            }, "catalog");
            if (a.kind === "not_found") throw x("catalog_not_found", D(404));
            var i = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCatalogPage(a.value);
            if (i == null) throw x("catalog_malformed", m);
            var l = [].concat(n, i.items),
              u = i.nextCursor;
            if (u == null) return l;
            if (t.has(u)) throw x("catalog_cursor_repeated", p);
            return (t.add(u), g(u, t, l, r + 1));
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield k(function (t) {
            return t.credentialDetails(e);
          }, "details");
          if (t.kind === "not_found") return u;
          var n = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialDetails(t.value, e);
          if (n == null) throw x("details_malformed", m);
          return { kind: "ok", value: n };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          (e.username != null &&
            t.push({ name: "username", protected: !0, value: e.username }),
            t.push({ name: "password", protected: !0, value: e.password }));
          var n = yield I(function (n) {
            return n.credentialCapture({
              fields: t,
              idempotency_key: e.idempotencyKey,
              label: null,
              lifetime: "persist",
              page_url: e.pageUrl,
            });
          }, "capture");
          if (n.kind === "not_found") throw x("capture_not_found", D(404));
          var r = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialCaptureId(n.value);
          if (r == null) throw x("capture_malformed", m);
          return r;
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
          if (
            (e.username != null &&
              t.push({ name: "username", value: e.username }),
            e.password != null &&
              t.push({ name: "password", value: e.password }),
            t.length === 0 && e.agentPermission == null)
          )
            return { kind: "ok", value: null };
          var n = yield I(function (n) {
            return n.credentialUpdate(
              babelHelpers.extends(
                { fields: t, id: e.id },
                e.agentPermission == null
                  ? {}
                  : { agent_permission: e.agentPermission },
              ),
            );
          }, "update");
          if (n.kind === "not_found") return u;
          if (o("WAWebHatchJsonReaders").readBool(n.value, "updated") !== !0)
            throw x("update_refused", p);
          return { kind: "ok", value: null };
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
          var t = yield I(function (t) {
            return t.credentialDelete(e);
          }, "delete");
          if (t.kind === "not_found") return u;
          if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
            throw x("delete_refused", p);
          return { kind: "ok", value: null };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I(e, t, !0);
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (r == null) throw x(t + "_no_session", c);
          var a = yield e(r);
          if ((n && a.kind === "Failure" && (a = yield e(r)), a.kind === "Ok"))
            return { kind: "ok", value: a.value };
          if (a.kind === "Rejected") {
            if (a.statusCode === 404) return u;
            throw x(t + "_rejected", D(a.statusCode));
          }
          throw x(t + "_" + a.kind.toLowerCase(), _[a.kind]);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return { raw: e == null ? "http" : "http." + e, reason: "http" };
    }
    function x(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-secure-credentials: vault call failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-secure-credentials-vault-failed"),
        new (o(
          "WAWebHatchSecureCredentialVaultError",
        ).HatchSecureCredentialVaultError)(n)
      );
    }
    ((l.requestHatchSecureCredentials = f),
      (l.requestHatchSecureCredentialDetails = y),
      (l.addHatchSecureCredential = b),
      (l.updateHatchSecureCredential = S),
      (l.deleteHatchSecureCredential = L));
  },
  98,
);
