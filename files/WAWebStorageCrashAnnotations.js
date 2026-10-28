__d(
  "WAWebStorageCrashAnnotations",
  ["WAWebLogForCrash", "WAWebSafeCrashAnnotation"],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 32,
      u = 1024 * 1024,
      c = new Set(),
      d = null,
      m = !1,
      p = {},
      _ = !1;
    function f(t, n) {
      return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulk",
        function () {
          if (n.length < e || c.size >= s) return null;
          var r = { t: t.name, n: n.length, h: S() };
          return (c.add(r), C(), r);
        },
      );
    }
    function g(e, t) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulk",
        function () {
          e != null &&
            (c.delete(e),
            (d = { t: e.t, n: e.n, h: S(), ms: Math.round(t) }),
            C());
        },
      );
    }
    function h(e) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:resume",
        function () {
          ((p.m = e.message), b());
        },
      );
    }
    function y(e) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:resume",
        function () {
          ((p.pr = e.length), b());
        },
      );
    }
    function C() {
      if (!m) {
        m = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:bulk",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((m = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:bulk",
                    function () {
                      var e;
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:bulk",
                        JSON.stringify({
                          cur: (e = v()) != null ? e : void 0,
                          last: d != null ? d : void 0,
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
    function b() {
      if (!_) {
        _ = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:resume",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((_ = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:resume",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:resume",
                        JSON.stringify(p),
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
    function v() {
      return Array.from(c).reduce(function (e, t) {
        return e == null || t.n > e.n ? t : e;
      }, null);
    }
    function S() {
      var e = R(R(self.performance, "memory"), "usedJSHeapSize");
      return typeof e == "number" ? Math.round(e / u) : void 0;
    }
    function R(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    ((l.startBulkWriteForCrash = f),
      (l.endBulkWriteForCrash = g),
      (l.logOfflineResumeMessagesForCrash = h),
      (l.logPeerReceiptRowsForCrash = y));
  },
  98,
);
