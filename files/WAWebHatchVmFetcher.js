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
      g = "hatch_vm",
      h = "invalid",
      y = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i;
    function C(t) {
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
    function b(e) {
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
    function v(e, t) {
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
    function S(e) {
      var t = e.trim();
      return y.test(t) ? t : null;
    }
    function R(e) {
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
      return S(o);
    }
    function L(e) {
      if (typeof e != "string") return null;
      var t = e.trim();
      return t === "" ? null : t;
    }
    function E(e) {
      return e == null || e === g;
    }
    function k(e, t) {
      if (!Array.isArray(e))
        return (
          C("vm_list"),
          {
            cause: "malformed",
            detail: "VM credential response omitted vm_list",
            kind: "failure",
          }
        );
      var n = [],
        r = [],
        o = new Set(),
        a = !1;
      for (var i of e) {
        var l = x(i, t);
        l.kind === "ok"
          ? n.push(l.entry)
          : (r.push(l.detail), o.add(l.field), a || (a = T(i)));
      }
      for (var s of o) C(s);
      return I({ droppedDecisiveEntry: a, entries: n, invalidDetails: r });
    }
    function I(e) {
      var t = e.droppedDecisiveEntry,
        n = e.entries,
        r = e.invalidDetails;
      return t
        ? {
            cause: "malformed",
            detail: "VM credential response had an invalid default or typed VM",
            kind: "failure",
          }
        : n.length === 0 && r.length > 0
          ? { cause: "malformed", detail: r[0], kind: "failure" }
          : { entries: n, kind: "ok" };
    }
    function T(e) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? !1
        : e.default === !0 || (e.vm_type != null && !E(e.vm_type));
    }
    function D(e) {
      return e == null ? null : typeof e == "string" ? e : h;
    }
    function x(e, t) {
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
        s = D(r.vm_type),
        u = r.vm_auth_token,
        c = r.vm_notary_tokens,
        d = r.notary_token_expiration_ts;
      if (typeof o != "string" || o.trim() === "")
        return {
          detail: "VM entry omitted its gateway URL",
          field: "vm_ws_url",
          kind: "failure",
        };
      var m = o.trim();
      if (typeof u != "string" || u.trim() === "")
        return {
          detail: "VM entry omitted its auth token",
          field: "vm_auth_token",
          kind: "failure",
        };
      var p = u.trim();
      if (c == null || typeof c != "object" || Array.isArray(c))
        return {
          detail: "VM entry omitted its notary tokens",
          field: "vm_notary_tokens",
          kind: "failure",
        };
      if (typeof d != "number" || !Number.isFinite(d) || d < 0 || d > f)
        return {
          detail: "VM entry had an invalid notary expiration",
          field: "notary_token_expiration_ts",
          kind: "failure",
        };
      var _ = typeof i == "string" ? i.trim() : "",
        g = _ !== "",
        h = g ? S(_) : R(m),
        y = (n = L(c["/v1/noise"])) != null ? n : L(c["/"]),
        C = d * 1e3;
      return h == null
        ? {
            detail: g
              ? "VM entry had an invalid VM id"
              : "VM entry had an invalid gateway host",
            field: g ? "vm_id" : "vm_ws_url",
            kind: "failure",
          }
        : y == null
          ? {
              detail: "VM entry omitted its Noise notary token",
              field: "vm_notary_tokens",
              kind: "failure",
            }
          : C <= t
            ? {
                detail: "VM entry had an expired notary token",
                field: "notary_token_expiration_ts",
                kind: "failure",
              }
            : {
                entry: {
                  gatewayUrl: m,
                  isDefault: a,
                  notaryExpiresAtMs: C,
                  notaryToken: y,
                  state: l,
                  vmAuthToken: p,
                  vmId: h,
                  vmType: s,
                },
                kind: "ok",
              };
    }
    var $ = (function () {
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
              return {
                cause: "empty_token",
                detail: "ABRA token is empty",
                kind: "failure",
              };
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
                  b(a ? "timeout" : "transport"),
                  {
                    cause: a ? "timeout" : "network",
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
                  cause: "forbidden",
                  detail:
                    "ABRA token is stale or not scoped for Hatch VM discovery",
                  kind: "failure",
                };
              if (!o.ok)
                return {
                  cause: "http",
                  detail: "VM credential request returned HTTP " + o.status,
                  kind: "failure",
                };
              var i;
              try {
                i = yield o.json();
              } catch (e) {
                var l = n.signal.aborted;
                return (
                  b(l ? "timeout" : "not_json"),
                  {
                    cause: l ? "timeout" : "malformed",
                    detail: l
                      ? "VM credential request timed out"
                      : "VM credential response was not JSON",
                    kind: "failure",
                  }
                );
              }
              return i == null || typeof i != "object" || Array.isArray(i)
                ? {
                    cause: "malformed",
                    detail: "VM credential response was invalid",
                    kind: "failure",
                  }
                : k(i.vm_list, this.$2());
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
          return this.$3({
            abraToken: t,
            body: { hatchling_vm_type: m, notary_token: !0 },
            label: "lease",
            url: p,
          });
        }),
        (t.wake = function (t, n) {
          return this.$3({
            abraToken: t,
            body: { retry_count: 0, vm_id: n },
            label: "wake",
            url: _,
          });
        }),
        (t.$3 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.abraToken,
              n = e.body,
              r = e.label,
              o = e.url,
              a = t.trim();
            if (a === "")
              return {
                cause: "empty_token",
                detail: "ABRA token is empty",
                kind: "failure",
              };
            var i = new AbortController(),
              l = self.setTimeout(function () {
                return i.abort();
              }, c),
              s;
            try {
              s = yield this.$1(o, {
                body: JSON.stringify(n),
                headers: {
                  Accept: "application/json",
                  Authorization: "Bearer " + a,
                  "Content-Type": "application/json",
                },
                method: "POST",
                signal: i.signal,
              });
            } catch (e) {
              var u = i.signal.aborted;
              return (
                v(r, u ? "timeout" : "transport"),
                {
                  cause: u ? "timeout" : "network",
                  detail: u
                    ? "VM " + r + " request timed out"
                    : "VM " + r + " request failed",
                  kind: "failure",
                }
              );
            } finally {
              self.clearTimeout(l);
            }
            if (s.status === 401)
              return {
                detail: "ABRA token was refused for the VM " + r,
                kind: "unauthorized",
              };
            if (!s.ok) {
              var d = "VM " + r + " request returned HTTP " + s.status;
              return s.status === 404
                ? { detail: d, kind: "not_found" }
                : {
                    cause: s.status === 403 ? "forbidden" : "http",
                    detail: d,
                    kind: "failure",
                  };
            }
            return { kind: "ok" };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    ((l.extractVmId = R),
      (l.isStandardVmType = E),
      (l.WAWebHatchVmFetcher = $));
  },
  98,
);
