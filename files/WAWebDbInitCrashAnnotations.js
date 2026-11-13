__d(
  "WAWebDbInitCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = new Set(),
      u = null,
      c = !1;
    function d(t, n, r) {
      return o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:dbInit",
        function () {
          if (s.size >= e) return null;
          var o = {
            value: { db: t, f: n != null ? n : void 0, t: r },
            startMs: self.performance.now(),
          };
          return (s.add(o), p(), o);
        },
      );
    }
    function m(e) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:dbInit",
        function () {
          var t, n;
          if (!(e == null || !s.delete(e))) {
            var r = babelHelpers.extends({}, e.value, {
              ms: Math.round(self.performance.now() - e.startMs),
            });
            ((u == null ||
              ((t = r.ms) != null ? t : 0) > ((n = u.ms) != null ? n : 0)) &&
              (u = r),
              p());
          }
        },
      );
    }
    function p() {
      if (!c) {
        c = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:dbInit",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((c = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:dbInit",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:dbInit",
                        JSON.stringify({
                          cur: Array.from(s, function (e) {
                            return e.value;
                          })[0],
                          max: u != null ? u : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (c = !1);
      }
    }
    ((l.annotateCrashWithDbInitStart = d), (l.annotateCrashWithDbInitEnd = m));
  },
  98,
);
