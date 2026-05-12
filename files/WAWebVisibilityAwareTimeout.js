__d(
  "WAWebVisibilityAwareTimeout",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.absoluteMs,
        n = e.foregroundMs,
        r = e.onPause,
        o = e.onResume,
        a = e.onTimeout,
        i = self.performance.now(),
        l = !1,
        s = null,
        u = document.hidden,
        c = 0,
        d = document.hidden ? null : i,
        m = null,
        p = null,
        _ = function () {
          if (s != null) return s;
          var e = self.performance.now(),
            t = d,
            n = t != null ? e - t : 0;
          return { wallMs: e - i, visibleMs: c + n, wasBackgroundPaused: u };
        },
        f = function () {
          m != null && (window.clearTimeout(m), (m = null));
        },
        g = function () {
          p != null && (window.clearTimeout(p), (p = null));
        },
        h = function () {
          if (s != null) return s;
          ((l = !0),
            f(),
            g(),
            document.removeEventListener("visibilitychange", b));
          var e = self.performance.now(),
            t = d;
          return (
            t != null && ((c += e - t), (d = null)),
            (s = { wallMs: e - i, visibleMs: c, wasBackgroundPaused: u }),
            s
          );
        },
        y = function (t) {
          if (!l) {
            var e = h();
            a(t, e);
          }
        },
        C = function () {
          if ((f(), !document.hidden)) {
            var e = n - _().visibleMs;
            m = window.setTimeout(
              function () {
                return y("foreground");
              },
              Math.max(0, e),
            );
          }
        };
      function b() {
        if (!l) {
          var e = self.performance.now();
          if (document.hidden) {
            u = !0;
            var t = d;
            (t != null && ((c += e - t), (d = null)), f(), r != null && r(_()));
            return;
          }
          ((d = e), o != null && o(_()), C());
        }
      }
      return (
        document.addEventListener("visibilitychange", b),
        (p = window.setTimeout(function () {
          return y("absolute");
        }, t)),
        C(),
        { cancel: h, getElapsed: _ }
      );
    }
    i.startVisibilityAwareTimeout = e;
  },
  66,
);
