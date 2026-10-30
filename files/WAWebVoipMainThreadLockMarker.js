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
      s = "wa_voip_lock_marker:",
      u = 1,
      c = new Map(),
      d = null,
      m = 0,
      p = !1;
    function _() {
      var e = d != null ? d : E();
      return ((d = e), e);
    }
    function f(e) {
      return "" + s + e;
    }
    function g(e, t, n) {
      m++;
      var r = _(),
        a = {
          monotonicStartedAt: self.performance.now(),
          site: e,
          startedAt: Date.now(),
          token: r + "." + m,
        },
        i = {
          a: o("WAWebVoipMainThreadLockArm").getMainThreadLockArm(),
          c: n == null ? void 0 : n.caller,
          i: n == null ? void 0 : n.initState,
          k: a.token,
          m: t,
          s: r,
          t: a.startedAt,
          v: u,
          x: 0,
        };
      return (S(e, i), t === "offload" && b(e, i), a);
    }
    function h(e) {
      return (
        c.delete(e.token),
        R(e.site) === e.token && C(e.site),
        self.performance.now() - e.monotonicStartedAt
      );
    }
    function y(e) {
      return L(null, function (t) {
        return t.getItem(f(e));
      });
    }
    function C(e) {
      L(void 0, function (t) {
        return t.removeItem(f(e));
      });
    }
    function b(e, t) {
      (c.set(t.k, { record: t, site: e }),
        !(p || typeof window == "undefined") &&
          ((p = !0), window.addEventListener("pagehide", v)));
    }
    function v() {
      c.forEach(function (e, t) {
        var n = e.record,
          r = e.site;
        R(r) === t && S(r, babelHelpers.extends({}, n, { x: 1 }));
      });
    }
    function S(e, t) {
      L(void 0, function (n) {
        return n.setItem(f(e), JSON.stringify(t));
      });
    }
    function R(e) {
      var t = y(e);
      if (t == null) return null;
      try {
        var n = JSON.parse(t),
          r = n != null && typeof n == "object" ? n.k : null;
        return typeof r == "string" ? r : null;
      } catch (e) {
        return null;
      }
    }
    function L(e, t) {
      var n = r("WAWebLocalStorage");
      if (n == null) return e;
      try {
        return t(n);
      } catch (t) {
        return e;
      }
    }
    function E() {
      try {
        var e = self.crypto.getRandomValues(new Uint32Array(2));
        return "" + e[0].toString(36) + e[1].toString(36);
      } catch (e) {
        return Date.now().toString(36);
      }
    }
    ((l.MAIN_THREAD_LOCK_SITES = e),
      (l.getMainThreadLockPageSession = _),
      (l.getMainThreadLockMarkerKey = f),
      (l.startMainThreadLockMarker = g),
      (l.finishMainThreadLockMarker = h),
      (l.readMainThreadLockMarkerValue = y),
      (l.removeMainThreadLockMarker = C));
  },
  98,
);
