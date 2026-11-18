__d(
  "WAWebLazyLoadCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 9999,
      s = 40,
      u = 0,
      c = 0,
      d = 0,
      m = 0,
      p = "",
      _ = !1;
    function f(t) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:lazyFail",
        function () {
          var n = Math.round(self.performance.now() / 1e3);
          (u === 0 && (d = n),
            (u = Math.min(u + 1, e)),
            navigator.onLine === !1 && (c = Math.min(c + 1, e)),
            (m = n),
            (p = t.slice(0, s)),
            g());
        },
      );
    }
    function g() {
      if (!_) {
        _ = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:lazyFail",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((_ = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:lazyFail",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:lazyFail",
                        JSON.stringify({
                          n: u,
                          o: c || void 0,
                          c: p,
                          f: d,
                          l: m,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (_ = !1);
      }
    }
    l.annotateCrashWithLazyLoadFailure = f;
  },
  98,
);
