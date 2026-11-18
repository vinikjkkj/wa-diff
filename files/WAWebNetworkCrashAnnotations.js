__d(
  "WAWebNetworkCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 999,
      s = !1,
      u = 1,
      c = 0,
      d = 0,
      m = !1;
    function p() {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:net",
        function () {
          s ||
            ((s = !0),
            (u = g()),
            self.addEventListener("online", f),
            self.addEventListener("offline", f),
            h());
        },
      );
    }
    function _() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:net",
        function () {
          s && h();
        },
      );
    }
    function f() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:net",
        function () {
          ((u = g()),
            (c = Math.min(c + 1, e)),
            (d = Math.round(self.performance.now() / 1e3)),
            h());
        },
      );
    }
    function g() {
      return navigator.onLine === !1 ? 0 : 1;
    }
    function h() {
      if (!m) {
        m = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:net",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((m = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:net",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:net",
                        JSON.stringify({
                          on: u,
                          n: c || void 0,
                          s: c > 0 ? d : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (m = !1);
      }
    }
    ((l.annotateCrashWithNetworkState = p),
      (l.rewriteNetworkStateForCrash = _));
  },
  98,
);
