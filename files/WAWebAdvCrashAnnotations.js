__d(
  "WAWebAdvCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 32,
      u = new Set(),
      c = null,
      d = !1;
    function m(t) {
      return o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:adv",
        function () {
          if (t < e || u.size >= s) return null;
          var n = { n: t };
          return (u.add(n), _(), n);
        },
      );
    }
    function p(e, t) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:adv",
        function () {
          e != null && (u.delete(e), (c = { n: e.n, ms: Math.round(t) }), _());
        },
      );
    }
    function _() {
      if (!d) {
        d = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:adv",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((d = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:adv",
                    function () {
                      var e = Array.from(u).reduce(function (e, t) {
                        return e + t.n;
                      }, 0);
                      o("WAWebLogForCrash").logForCrash(
                        "wa:adv",
                        JSON.stringify({
                          cur: e > 0 ? e : void 0,
                          last: c != null ? c : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (d = !1);
      }
    }
    ((l.annotateCrashWithAdvSyncStart = m),
      (l.annotateCrashWithAdvSyncEnd = p));
  },
  98,
);
