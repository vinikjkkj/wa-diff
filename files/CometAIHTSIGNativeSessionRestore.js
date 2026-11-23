__d(
  "CometAIHTSIGNativeSessionRestore",
  ["ExecutionEnvironment", "Promise", "WebStorage", "justknobx", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "igMaisaEnsureSession",
      d = "igMaisaEnsureSessionResult",
      m = 2,
      p = 3e3,
      _ = "maisa_native_session_restore:";
    function f() {
      var e;
      if (!(s || (s = r("ExecutionEnvironment"))).canUseDOM) return null;
      var t = Reflect.get(window, "webkit"),
        n = t == null || (e = t.messageHandlers) == null ? void 0 : e[c],
        o = n == null ? void 0 : n.postMessage;
      return n == null ||
        typeof o != "function" ||
        r("justknobx")._("6510") === !0
        ? null
        : function (e) {
            return o.call(n, e);
          };
    }
    function g() {
      return f() != null;
    }
    var h = "igMaisaSessionRestoreUnavailableReason",
      y = new Set(["param_off"]);
    function C() {
      if (f() != null) return "bridge";
      if (!(s || (s = r("ExecutionEnvironment"))).canUseDOM)
        return "unreported";
      var e = Reflect.get(window, h);
      return typeof e == "string" && y.has(e) ? e : "unreported";
    }
    function b(e) {
      return _ + e;
    }
    function v(e) {
      var t,
        n = (u || (u = r("WebStorage"))).getSessionStorage();
      if (n == null) return "no_storage";
      var o = b(e),
        a = Number((t = n.getItem(o)) != null ? t : "0");
      if (!Number.isFinite(a) || a >= m) return "attempt_cap";
      var i = String(a + 1);
      return (u || (u = r("WebStorage"))).setItemGuarded(n, o, i) != null ||
        n.getItem(o) !== i
        ? "no_storage"
        : null;
    }
    function S(t) {
      var o = f();
      if (o == null)
        return (e || (e = n("Promise"))).resolve({
          ok: !1,
          reason: "no_bridge",
        });
      if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
        var a = v(t);
        if (a != null)
          return (e || (e = n("Promise"))).resolve({ ok: !1, reason: a });
        var i = r("uuidv4")();
        return new (e || (e = n("Promise")))(function (e) {
          var n = null,
            r = function (t) {
              if (t instanceof CustomEvent) {
                var e = t.detail;
                e == null ||
                  typeof e != "object" ||
                  e.requestID !== i ||
                  a({
                    ok: e.ok === !0,
                    reason: typeof e.reason == "string" ? e.reason : null,
                  });
              }
            },
            a = function (o) {
              (window.removeEventListener(d, r),
                n != null && window.clearTimeout(n),
                e(o));
            };
          (window.addEventListener(d, r),
            (n = window.setTimeout(function () {
              return a({ ok: !1, reason: "timeout" });
            }, p)));
          try {
            o({ requestID: i, threadID: t });
          } catch (e) {
            a({ ok: !1, reason: "post_failed" });
          }
        });
      }
      return (e || (e = n("Promise"))).resolve({ ok: !1, reason: "no_bridge" });
    }
    ((l.MAX_NATIVE_SESSION_RESTORES_PER_THREAD = m),
      (l.NATIVE_SESSION_RESTORE_TIMEOUT_MS = p),
      (l.hasNativeSessionRestoreBridge = g),
      (l.getNativeSessionRestoreAvailability = C),
      (l.restoreSessionViaNativeBridge = S));
  },
  98,
);
