__d(
  "WAWebHeapCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1048576,
      s = 110,
      u = 0,
      c = 0;
    function d() {
      var t = p(p(self.performance, "memory"), "usedJSHeapSize");
      return typeof t == "number" ? Math.round(t / e) : void 0;
    }
    function m(e) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:heapPeak",
        function () {
          if (!(e == null || e <= 0 || e * 100 < u * s)) {
            var t = Math.round(self.performance.now() / 1e3),
              n = JSON.stringify({
                mb: e,
                s: t,
                g:
                  u > 0
                    ? Math.round(((e - u) * 60) / Math.max(1, t - c))
                    : void 0,
              });
            (o("WAWebLogForCrash").onLogForCrashReady(function () {
              return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                "wa:heapPeak",
                function () {
                  return o("WAWebLogForCrash").logForCrash("wa:heapPeak", n);
                },
              );
            }),
              (u = e),
              (c = t));
          }
        },
      );
    }
    function p(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    ((l.readUsedHeapMB = d), (l.noteUsedHeapMBForCrash = m));
  },
  98,
);
