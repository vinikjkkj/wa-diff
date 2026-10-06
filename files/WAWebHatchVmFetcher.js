__d(
  "WAWebHatchVmFetcher",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4,
      c = "https://hatch-api.meta.ai/hatch/fetch_vms?notary_token=true",
      d = 4294967295,
      m = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i;
    function p(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm-credentials: response rejected field ",
              "",
            ])),
          t,
        )
        .sendLogs("hatch-vm-credentials-rejected-field");
    }
    function _(e) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm-credentials: request failed reason=",
              "",
            ])),
          e,
        )
        .sendLogs("hatch-vm-credentials-request-failed");
    }
    function f(e) {
      var t = e.trim();
      return m.test(t) ? t : null;
    }
    function g(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return null;
      }
      var n = ".metaaivm.com",
        r = t.hostname.toLowerCase();
      if (!r.endsWith(n)) return null;
      var o = r.slice(0, -n.length);
      return f(o);
    }
    function h(e) {
      if (typeof e != "string") return null;
      var t = e.trim();
      return t === "" ? null : t;
    }
    function y(e, t) {
      var n;
      if (e == null || typeof e != "object" || Array.isArray(e))
        return {
          detail: "VM entry was not an object",
          field: "entry",
          kind: "failure",
        };
      var r = e,
        o = r.vm_ws_url,
        a = r.default === !0,
        i = r.vm_id,
        l = typeof r.vm_state == "string" ? r.vm_state : null,
        s = r.vm_auth_token,
        u = r.vm_notary_tokens,
        c = r.notary_token_expiration_ts;
      if (typeof o != "string" || o.trim() === "")
        return {
          detail: "VM entry omitted its gateway URL",
          field: "vm_ws_url",
          kind: "failure",
        };
      var m = o.trim();
      if (typeof s != "string" || s.trim() === "")
        return {
          detail: "VM entry omitted its auth token",
          field: "vm_auth_token",
          kind: "failure",
        };
      var p = s.trim();
      if (u == null || typeof u != "object" || Array.isArray(u))
        return {
          detail: "VM entry omitted its notary tokens",
          field: "vm_notary_tokens",
          kind: "failure",
        };
      if (typeof c != "number" || !Number.isFinite(c) || c < 0 || c > d)
        return {
          detail: "VM entry had an invalid notary expiration",
          field: "notary_token_expiration_ts",
          kind: "failure",
        };
      var _ = typeof i == "string" ? i.trim() : "",
        y = _ !== "",
        C = y ? f(_) : g(m),
        b = (n = h(u["/v1/noise"])) != null ? n : h(u["/"]),
        v = c * 1e3;
      return C == null
        ? {
            detail: y
              ? "VM entry had an invalid VM id"
              : "VM entry had an invalid gateway host",
            field: y ? "vm_id" : "vm_ws_url",
            kind: "failure",
          }
        : b == null
          ? {
              detail: "VM entry omitted its Noise notary token",
              field: "vm_notary_tokens",
              kind: "failure",
            }
          : v <= t
            ? {
                detail: "VM entry had an expired notary token",
                field: "notary_token_expiration_ts",
                kind: "failure",
              }
            : {
                entry: {
                  gatewayUrl: m,
                  isDefault: a,
                  notaryExpiresAtMs: v,
                  notaryToken: b,
                  state: l,
                  vmAuthToken: p,
                  vmId: C,
                },
                kind: "ok",
              };
    }
    var C = (function () {
      function e(e, t) {
        (t === void 0 &&
          (t = function () {
            return Date.now();
          }),
          (this.$1 = e),
          (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.fetch = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.trim();
            if (t === "")
              return { detail: "ABRA token is empty", kind: "failure" };
            var n = new AbortController(),
              r = self.setTimeout(function () {
                return n.abort();
              }, u);
            try {
              var o;
              try {
                o = yield this.$1(c, {
                  headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + t,
                  },
                  method: "GET",
                  signal: n.signal,
                });
              } catch (e) {
                var a = n.signal.aborted;
                return (
                  _(a ? "timeout" : "transport"),
                  {
                    detail: a
                      ? "VM credential request timed out"
                      : "VM credential request failed",
                    kind: "failure",
                  }
                );
              }
              if (o.status === 401)
                return {
                  detail: "ABRA token was refused",
                  kind: "unauthorized",
                };
              if (o.status === 403)
                return {
                  detail:
                    "ABRA token is stale or not scoped for Hatch VM discovery",
                  kind: "failure",
                };
              if (!o.ok)
                return {
                  detail: "VM credential request returned HTTP " + o.status,
                  kind: "failure",
                };
              var i;
              try {
                i = yield o.json();
              } catch (e) {
                var l = n.signal.aborted;
                return (
                  _(l ? "timeout" : "not_json"),
                  {
                    detail: l
                      ? "VM credential request timed out"
                      : "VM credential response was not JSON",
                    kind: "failure",
                  }
                );
              }
              if (i == null || typeof i != "object" || Array.isArray(i))
                return {
                  detail: "VM credential response was invalid",
                  kind: "failure",
                };
              var s = i.vm_list;
              if (!Array.isArray(s))
                return (
                  p("vm_list"),
                  {
                    detail: "VM credential response omitted vm_list",
                    kind: "failure",
                  }
                );
              var d = [],
                m = [],
                f = new Set(),
                g = this.$2();
              for (var h of s) {
                var C = y(h, g);
                C.kind === "ok"
                  ? d.push(C.entry)
                  : (m.push(C.detail), f.add(C.field));
              }
              for (var b of f) p(b);
              if (d.length === 0) {
                var v;
                return {
                  detail:
                    (v = m[0]) != null
                      ? v
                      : "VM credential response contained no entries",
                  kind: "failure",
                };
              }
              return { entries: d, kind: "ok" };
            } finally {
              self.clearTimeout(r);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    ((l.extractVmId = g), (l.WAWebHatchVmFetcher = C));
  },
  98,
);
