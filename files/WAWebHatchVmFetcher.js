__d(
  "WAWebHatchVmFetcher",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 3e4,
      d = "https://hatch-api.meta.ai/hatch/fetch_vms?notary_token=true",
      m = 1,
      p = "https://hatch-api.meta.ai/hatch/lease_vm",
      _ = "https://hatch-api.meta.ai/hatch/vm/wake",
      f = 4294967295,
      g = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i;
    function h(t) {
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
    function y(e) {
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
    function C(e, t) {
      o("WALogger")
        .WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm-credentials: ",
              " request failed reason=",
              "",
            ])),
          e,
          t,
        )
        .sendLogs("hatch-vm-credentials-control-failed");
    }
    function b(e) {
      var t = e.trim();
      return g.test(t) ? t : null;
    }
    function v(e) {
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
      return b(o);
    }
    function S(e) {
      if (typeof e != "string") return null;
      var t = e.trim();
      return t === "" ? null : t;
    }
    function R(e, t) {
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
      var d = o.trim();
      if (typeof s != "string" || s.trim() === "")
        return {
          detail: "VM entry omitted its auth token",
          field: "vm_auth_token",
          kind: "failure",
        };
      var m = s.trim();
      if (u == null || typeof u != "object" || Array.isArray(u))
        return {
          detail: "VM entry omitted its notary tokens",
          field: "vm_notary_tokens",
          kind: "failure",
        };
      if (typeof c != "number" || !Number.isFinite(c) || c < 0 || c > f)
        return {
          detail: "VM entry had an invalid notary expiration",
          field: "notary_token_expiration_ts",
          kind: "failure",
        };
      var p = typeof i == "string" ? i.trim() : "",
        _ = p !== "",
        g = _ ? b(p) : v(d),
        h = (n = S(u["/v1/noise"])) != null ? n : S(u["/"]),
        y = c * 1e3;
      return g == null
        ? {
            detail: _
              ? "VM entry had an invalid VM id"
              : "VM entry had an invalid gateway host",
            field: _ ? "vm_id" : "vm_ws_url",
            kind: "failure",
          }
        : h == null
          ? {
              detail: "VM entry omitted its Noise notary token",
              field: "vm_notary_tokens",
              kind: "failure",
            }
          : y <= t
            ? {
                detail: "VM entry had an expired notary token",
                field: "notary_token_expiration_ts",
                kind: "failure",
              }
            : {
                entry: {
                  gatewayUrl: d,
                  isDefault: a,
                  notaryExpiresAtMs: y,
                  notaryToken: h,
                  state: l,
                  vmAuthToken: m,
                  vmId: g,
                },
                kind: "ok",
              };
    }
    var L = (function () {
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
              }, c);
            try {
              var o;
              try {
                o = yield this.$1(d, {
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
                  y(a ? "timeout" : "transport"),
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
                  y(l ? "timeout" : "not_json"),
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
                  h("vm_list"),
                  {
                    detail: "VM credential response omitted vm_list",
                    kind: "failure",
                  }
                );
              if (s.length === 0) return { entries: [], kind: "ok" };
              var u = [],
                m = [],
                p = new Set(),
                _ = this.$2();
              for (var f of s) {
                var g = R(f, _);
                g.kind === "ok"
                  ? u.push(g.entry)
                  : (m.push(g.detail), p.add(g.field));
              }
              for (var C of p) h(C);
              if (u.length === 0) {
                var b;
                return {
                  detail:
                    (b = m[0]) != null
                      ? b
                      : "VM credential response contained no entries",
                  kind: "failure",
                };
              }
              return { entries: u, kind: "ok" };
            } finally {
              self.clearTimeout(r);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.lease = function (t) {
          return this.$3(
            p,
            { hatchling_vm_type: m, notary_token: !0 },
            t,
            "lease",
          );
        }),
        (t.wake = function (t, n) {
          return this.$3(_, { retry_count: 0, vm_id: n }, t, "wake");
        }),
        (t.$3 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              var o = n.trim();
              if (o === "")
                return { detail: "ABRA token is empty", kind: "failure" };
              var a = new AbortController(),
                i = self.setTimeout(function () {
                  return a.abort();
                }, c),
                l;
              try {
                l = yield this.$1(e, {
                  body: JSON.stringify(t),
                  headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + o,
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  signal: a.signal,
                });
              } catch (e) {
                var s = a.signal.aborted;
                return (
                  C(r, s ? "timeout" : "transport"),
                  {
                    detail: s
                      ? "VM " + r + " request timed out"
                      : "VM " + r + " request failed",
                    kind: "failure",
                  }
                );
              } finally {
                self.clearTimeout(i);
              }
              if (l.status === 401)
                return {
                  detail: "ABRA token was refused for the VM " + r,
                  kind: "unauthorized",
                };
              if (!l.ok) {
                var u = "VM " + r + " request returned HTTP " + l.status;
                return l.status === 404
                  ? { detail: u, kind: "not_found" }
                  : { detail: u, kind: "failure" };
              }
              return { kind: "ok" };
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    ((l.extractVmId = v), (l.WAWebHatchVmFetcher = L));
  },
  98,
);
