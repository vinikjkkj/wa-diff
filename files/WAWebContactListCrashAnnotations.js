__d(
  "WAWebContactListCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 4,
      u = 0,
      c = 0,
      d = e,
      m = !1,
      p = !1,
      _ = null,
      f = null;
    function g(e) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:contactListRecompute",
        function () {
          var t = e.length;
          (u++,
            (c += t),
            m || (queueMicrotask(h), (m = !0)),
            u >= d && ((d *= s), (_ = { n: u, c: c }), y()));
        },
      );
    }
    function h() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:contactListRecompute",
        function () {
          m = !1;
          var t = { n: u, c: c };
          ((u = 0),
            (c = 0),
            (d = e),
            _ != null &&
              ((_ = null), (f == null || t.n > f.n) && (f = t), y()));
        },
      );
    }
    function y() {
      if (!p) {
        p = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:contactListRecompute",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((p = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:contactListRecompute",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:contactListRecompute",
                        JSON.stringify({
                          cur: _ != null ? _ : void 0,
                          max: f != null ? f : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (p = !1);
      }
    }
    l.annotateCrashWithContactListRecompute = g;
  },
  98,
);
