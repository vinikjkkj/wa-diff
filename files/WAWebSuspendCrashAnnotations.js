__d(
  "WAWebSuspendCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 120,
      s = 999,
      u = null,
      c = !1,
      d = 0,
      m = 0,
      p = 0,
      _ = 0,
      f = 0,
      g = 0,
      h = !1,
      y = !1;
    function C(t) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:suspend",
        function () {
          b();
          var n = { wallMs: Date.now(), pageMs: self.performance.now() },
            r = c || document.hidden === !0;
          c = document.hidden === !0;
          var o = u;
          if (((u = n), o != null)) {
            var a = Math.round((n.wallMs - o.wallMs - t) / 1e3);
            if (!(a < e)) {
              var i = Math.round((n.pageMs - o.pageMs - t) / 1e3);
              (r
                ? ((d = Math.min(d + 1, s)), (m = Math.max(m, a)))
                : i >= e
                  ? (p = Math.min(p + 1, s))
                  : (_ = Math.min(_ + 1, s)),
                (f = Math.round(n.pageMs / 1e3)),
                R());
            }
          }
        },
      );
    }
    function b() {
      h ||
        ((h = !0),
        document.addEventListener("visibilitychange", v),
        document.addEventListener("resume", S));
    }
    function v() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:suspend",
        function () {
          document.hidden === !0 && (c = !0);
        },
      );
    }
    function S() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:suspend",
        function () {
          ((c = !0),
            (g = Math.min(g + 1, s)),
            (f = Math.round(self.performance.now() / 1e3)),
            R());
        },
      );
    }
    function R() {
      if (!y) {
        y = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:suspend",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((y = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:suspend",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:suspend",
                        JSON.stringify({
                          n: d || void 0,
                          g: m || void 0,
                          b: p || void 0,
                          j: _ || void 0,
                          f: g || void 0,
                          s: f,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (y = !1);
      }
    }
    l.annotateCrashWithRefreshTick = C;
  },
  98,
);
