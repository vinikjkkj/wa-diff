__d(
  "WAWebHeapCrashAnnotations",
  ["WAWebLogForCrash", "WAWebSafeCrashAnnotation"],
  function (t, n, r, o, a, i, l) {
    var e = 1048576,
      s = 110,
      u = 0;
    function c() {
      var t = m(m(self.performance, "memory"), "usedJSHeapSize");
      return typeof t == "number" ? Math.round(t / e) : void 0;
    }
    function d(e) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:heapPeak",
        function () {
          if (!(e == null || e <= 0 || e * 100 < u * s)) {
            var t = JSON.stringify({
              mb: e,
              s: Math.round(self.performance.now() / 1e3),
            });
            (o("WAWebLogForCrash").onLogForCrashReady(function () {
              return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                "wa:heapPeak",
                function () {
                  return o("WAWebLogForCrash").logForCrash("wa:heapPeak", t);
                },
              );
            }),
              (u = e));
          }
        },
      );
    }
    function m(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    ((l.readUsedHeapMB = c), (l.noteUsedHeapMBForCrash = d));
  },
  98,
);
