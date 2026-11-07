__d(
  "WAWebSyncdCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
    "WAWebTemporaryStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "wa_crash_orphan_apply_loads",
      s = 1e3,
      u = 0,
      c = null,
      d = !1,
      m = null;
    function p() {
      return o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:orphanApply",
        function () {
          if ((c == null && (c = f()), u === 0)) {
            var t = d ? 0 : c;
            r("WAWebTemporaryStorage").setItem(e, String(Math.min(t + 1, s)));
          }
          return (u++, g(), { startMs: self.performance.now() });
        },
      );
    }
    function _(t) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:orphanApply",
        function () {
          t != null &&
            ((u = Math.max(u - 1, 0)),
            (m = Math.round(self.performance.now() - t.startMs)),
            g(),
            u === 0 && ((d = !0), r("WAWebTemporaryStorage").removeItem(e)));
        },
      );
    }
    function f() {
      var t,
        n = Number((t = r("WAWebTemporaryStorage").getItem(e)) != null ? t : 0);
      return Number.isInteger(n) && n > 0 ? Math.min(n, s) : 0;
    }
    function g() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:orphanApply",
        function () {
          return o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:orphanApply",
              function () {
                return o("WAWebLogForCrash").logForCrash(
                  "wa:orphanApply",
                  JSON.stringify({
                    cur: u > 0 ? u : void 0,
                    died: c != null ? c : 0,
                    ms: m != null ? m : void 0,
                  }),
                );
              },
            );
          });
        },
      );
    }
    ((l.annotateCrashWithOrphanApplyStart = p),
      (l.annotateCrashWithOrphanApplyEnd = _));
  },
  98,
);
