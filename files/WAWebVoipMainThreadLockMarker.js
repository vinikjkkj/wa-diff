__d(
  "WAWebVoipMainThreadLockMarker",
  ["WAWebLocalStorage", "WAWebVoipMainThreadLockArm"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "fs_cleanup",
        "fs_recovery_read",
        "fs_recovery_cleanup",
        "jsworker_create",
        "sctp_thread_create",
        "playback_stop",
        "capture_stop",
        "playback_start",
        "capture_start",
      ],
      s = 6e5,
      u = "wa_voip_lock_marker:",
      c = 1,
      d = new Map(),
      m = null,
      p = 0,
      _ = !1;
    function f() {
      var e = m != null ? m : k();
      return ((m = e), e);
    }
    function g(e) {
      return "" + u + e;
    }
    function h(e, t, n) {
      p++;
      var r = f(),
        a = {
          monotonicStartedAt: self.performance.now(),
          site: e,
          startedAt: Date.now(),
          token: r + "." + p,
        },
        i = {
          a: o("WAWebVoipMainThreadLockArm").getMainThreadLockArm(),
          c: n == null ? void 0 : n.caller,
          i: n == null ? void 0 : n.initState,
          k: a.token,
          m: t,
          s: r,
          t: a.startedAt,
          v: c,
          x: 0,
        };
      return (R(e, i), t === "offload" && v(e, i), a);
    }
    function y(e) {
      return (
        d.delete(e.token),
        L(e.site) === e.token && b(e.site),
        self.performance.now() - e.monotonicStartedAt
      );
    }
    function C(e) {
      return E(null, function (t) {
        return t.getItem(g(e));
      });
    }
    function b(e) {
      E(void 0, function (t) {
        return t.removeItem(g(e));
      });
    }
    function v(e, t) {
      (d.set(t.k, { record: t, site: e }),
        !(_ || typeof window == "undefined") &&
          ((_ = !0), window.addEventListener("pagehide", S)));
    }
    function S() {
      d.forEach(function (e, t) {
        var n = e.record,
          r = e.site;
        L(r) === t && R(r, babelHelpers.extends({}, n, { x: 1 }));
      });
    }
    function R(e, t) {
      E(void 0, function (n) {
        return n.setItem(g(e), JSON.stringify(t));
      });
    }
    function L(e) {
      var t = C(e);
      if (t == null) return null;
      try {
        var n = JSON.parse(t),
          r = n != null && typeof n == "object" ? n.k : null;
        return typeof r == "string" ? r : null;
      } catch (e) {
        return null;
      }
    }
    function E(e, t) {
      var n = r("WAWebLocalStorage");
      if (n == null) return e;
      try {
        return t(n);
      } catch (t) {
        return e;
      }
    }
    function k() {
      try {
        var e = self.crypto.getRandomValues(new Uint32Array(2));
        return "" + e[0].toString(36) + e[1].toString(36);
      } catch (e) {
        return Date.now().toString(36);
      }
    }
    ((l.MAIN_THREAD_LOCK_SITES = e),
      (l.MAIN_THREAD_LOCK_OFFLOAD_TIMEOUT_MS = s),
      (l.getMainThreadLockPageSession = f),
      (l.getMainThreadLockMarkerKey = g),
      (l.startMainThreadLockMarker = h),
      (l.finishMainThreadLockMarker = y),
      (l.readMainThreadLockMarkerValue = C),
      (l.removeMainThreadLockMarker = b));
  },
  98,
);
