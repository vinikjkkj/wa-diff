__d(
  "WAWebHatchSecureCredentialsVault",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureCredentialDecoder",
    "WAWebHatchVmSession",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = { kind: "not_found" };
    function c() {
      return d(null, new Set(), [], 0);
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r >= s) throw L("catalog_too_many_pages");
            var a = yield v(function (t) {
              return t.credentialCatalog(e);
            }, "catalog");
            if (a.kind === "not_found") throw L("catalog_not_found");
            var i = o(
              "WAWebHatchSecureCredentialDecoder",
            ).decodeHatchSecureCredentialCatalogPage(a.value);
            if (i == null) throw L("catalog_malformed");
            var l = [].concat(n, i.items),
              u = i.nextCursor;
            if (u == null) return l;
            if (t.has(u)) throw L("catalog_cursor_repeated");
            return (t.add(u), d(u, t, l, r + 1));
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield v(function (t) {
            return t.credentialDetails(e);
          }, "details");
          if (t.kind === "not_found") return u;
          var n = o(
            "WAWebHatchSecureCredentialDecoder",
          ).decodeHatchSecureCredentialDetails(t.value, e);
          if (n == null) throw L("details_malformed");
          return { kind: "ok", value: n };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield S(function (t) {
              return t.credentialCapture({
                fields: [
                  { name: "username", protected: !0, value: e.username },
                  { name: "password", protected: !0, value: e.password },
                ],
                idempotency_key: e.idempotencyKey,
                label: null,
                lifetime: "persist",
                page_url: e.pageUrl,
              });
            }, "capture"),
            n =
              t.kind === "ok"
                ? o(
                    "WAWebHatchSecureCredentialDecoder",
                  ).decodeHatchSecureCredentialCaptureId(t.value)
                : null;
          if (n == null) throw L("capture_malformed");
          return n;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          if (
            (e.username != null &&
              t.push({ name: "username", value: e.username }),
            e.password != null &&
              t.push({ name: "password", value: e.password }),
            t.length === 0 && e.agentPermission == null)
          )
            return { kind: "ok", value: null };
          var n = yield S(function (n) {
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
            throw L("update_refused");
          return { kind: "ok", value: null };
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield S(function (t) {
            return t.credentialDelete(e);
          }, "delete");
          if (t.kind === "not_found") return u;
          if (o("WAWebHatchJsonReaders").readBool(t.value, "deleted") !== !0)
            throw L("delete_refused");
          return { kind: "ok", value: null };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S(e, t, !0);
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (r == null) throw L(t + "_no_session");
          var a = yield e(r);
          if ((n && a.kind === "Failure" && (a = yield e(r)), a.kind === "Ok"))
            return { kind: "ok", value: a.value };
          if (a.kind === "Rejected" && a.statusCode === 404) return u;
          throw L(t + "_" + a.kind.toLowerCase());
        })),
        R.apply(this, arguments)
      );
    }
    function L(t) {
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
        r("err")("hatch secure credentials vault call failed: %s", t)
      );
    }
    ((l.requestHatchSecureCredentials = c),
      (l.requestHatchSecureCredentialDetails = p),
      (l.addHatchSecureCredential = f),
      (l.updateHatchSecureCredential = h),
      (l.deleteHatchSecureCredential = C));
  },
  98,
);
