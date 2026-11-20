__d(
  "WAWebPreLoginCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebAppScreen",
    "WAWebAppScreenTypes",
    "WAWebBoolFunc",
    "WAWebHeapCrashAnnotations",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 6e4,
      s = !1,
      u = null,
      c = 0,
      d = 1,
      m = null,
      p = null,
      _ = !1;
    function f(e) {
      s ||
        !g() ||
        o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:preLogin",
          function () {
            return h(o("WAWebAppScreen").getScreen(e));
          },
        );
    }
    function g() {
      return o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:preLogin",
        o("WAWebBoolFunc").returnTrue,
      ) === !0
        ? !0
        : (o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
            "wa:preLogin",
            C,
          ),
          !1);
    }
    function h(t) {
      if (t !== u) {
        if (
          ((u = t),
          (c = self.performance.now()),
          (d = 1),
          b({ s: t, m: 0 }),
          t === o("WAWebAppScreenTypes").AppScreen.MAIN)
        ) {
          ((s = !0), C());
          return;
        }
        m == null && (m = self.setInterval(y, e));
      }
    }
    function y() {
      g() &&
        o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:preLogin",
          function () {
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(
              o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
            );
            var t = u,
              n = Math.floor((self.performance.now() - c) / e);
            if (!(t == null || n < d)) {
              for (; d <= n; ) d *= 2;
              b({ s: t, m: n });
            }
          },
        );
    }
    function C() {
      m != null && (self.clearInterval(m), (m = null));
    }
    function b(e) {
      if (((p = e), !_)) {
        _ = !0;
        var t = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:preLogin",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((_ = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:preLogin",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:preLogin",
                        JSON.stringify(p),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        t !== !0 && (_ = !1);
      }
    }
    l.annotateCrashWithPreLoginScreen = f;
  },
  98,
);
