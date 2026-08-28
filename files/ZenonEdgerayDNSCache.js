__d(
  "ZenonEdgerayDNSCache",
  [
    "MediaOnlySdpInfoTypes",
    "WebStorage",
    "ZenonInfraActionsLogger",
    "ZenonODSLogger",
    "asyncToGeneratorRuntime",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "zenon_edgeray_dns_",
      u = 6e5,
      c = "meta-ai-realtime.facebook.com",
      d = 3e3,
      m = new Map(),
      p = new Map();
    function _() {
      var e = r("justknobx")._("4884"),
        t = e * 1e3;
      return { ttlMs: t > 0 ? t : u };
    }
    function f(e) {
      (e === void 0 && (e = c),
        r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          callType: "mw",
          checkpoint: "[ULLC DNS] warmUp started for " + e,
        }),
        k(e));
      var t = S(e);
      return (
        p.set(e, t),
        t.then(function () {
          (p.delete(e),
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              callType: "mw",
              checkpoint: "[ULLC DNS] warmUp completed for " + e,
            }));
        }),
        t
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = _(),
            n = m.get(e);
          if (n != null && n.ip4Address !== "") return n;
          var r = L(e, t.ttlMs);
          if (r != null && r.ip4Address !== "") return (m.set(e, r), r);
          var o = p.get(e);
          if (o != null) {
            try {
              yield o;
            } catch (e) {}
            var a = m.get(e);
            if (a != null && a.ip4Address !== "") return a;
          }
          return v(e, t);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      var a = m.get(e);
      if (a == null) {
        m.set(e, { ip4Address: t, ip6Address: n, resolvedAtMs: Date.now() });
        return;
      }
      var i = a.ip4Address,
        l = a.ip6Address;
      o("MediaOnlySdpInfoTypes").isGedgeUllcVipType(r)
        ? (i || (i = t), l || (l = n))
        : ((i = t), (l = n));
      var s = { ip4Address: i, ip6Address: l, resolvedAtMs: Date.now() };
      (m.set(e, s), E(e, s));
    }
    function C() {
      (m.clear(), p.clear());
    }
    function b() {
      return r("qex")._("5055") === !0;
    }
    function v(e, t) {
      var n = m.get(e);
      if (n != null) return n;
      var r = L(e, t.ttlMs);
      if (r != null) return (m.set(e, r), r);
      var o = { ip4Address: "", ip6Address: "", resolvedAtMs: Date.now() };
      return (m.set(e, o), o);
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new AbortController(),
            n = window.setTimeout(function () {
              return t.abort();
            }, d);
          try {
            (yield window.fetch("https://" + e + "/", {
              method: "HEAD",
              mode: "no-cors",
              signal: t.signal,
            }),
              r("ZenonODSLogger").logCounter("ullc_dns_warmup_fetch_success"));
          } catch (e) {
            r("ZenonODSLogger").logCounter("ullc_dns_warmup_fetch_completed");
          } finally {
            window.clearTimeout(n);
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(t, n) {
      var o = (e || (e = r("WebStorage"))).getAllowlistedKeyFromLocalStorage(
        s + t,
      );
      if (o == null) return null;
      try {
        var a,
          i,
          l = JSON.parse(o);
        return Date.now() - l.resolvedAtMs > n
          ? null
          : {
              ip4Address: (a = l.ip4) != null ? a : "",
              ip6Address: (i = l.ip6) != null ? i : "",
              resolvedAtMs: l.resolvedAtMs,
            };
      } catch (e) {
        return null;
      }
    }
    function E(t, n) {
      (e || (e = r("WebStorage"))).setAllowlistedKeyToLocalStorage(
        e.getLocalStorage(),
        s + t,
        JSON.stringify({
          ip4: n.ip4Address,
          ip6: n.ip6Address,
          resolvedAtMs: n.resolvedAtMs,
        }),
      );
    }
    function k(e) {
      try {
        var t = document.createElement("link");
        ((t.rel = "dns-prefetch"),
          (t.href = "//" + e),
          document.head
            ? document.head.appendChild(t)
            : r("ZenonODSLogger").logCounter("ullc_dns_prefetch_no_head"));
      } catch (e) {
        r("ZenonODSLogger").logCounter("ullc_dns_prefetch_failed");
      }
    }
    ((l.warmUp = f),
      (l.resolve = g),
      (l.updateFromServerResponse = y),
      (l.clearCache = C),
      (l.isEnabled = b));
  },
  98,
);
