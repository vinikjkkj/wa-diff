__d(
  "WAWebStorageCrashAnnotations",
  ["WAWebHeapCrashAnnotations", "WAWebLogForCrash", "WAWebSafeCrashAnnotation"],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 32,
      u = new Set(),
      c = null,
      d = !1,
      m = {},
      p = !1;
    function _(t, n) {
      return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulk",
        function () {
          if (n.length < e || u.size >= s) return null;
          var r = {
            t: t.name,
            n: n.length,
            h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
          };
          return (
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(r.h),
            u.add(r),
            y(),
            r
          );
        },
      );
    }
    function f(e, t) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulk",
        function () {
          e != null &&
            (u.delete(e),
            (c = {
              t: e.t,
              n: e.n,
              h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
              ms: Math.round(t),
            }),
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(c.h),
            y());
        },
      );
    }
    function g(e) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:resume",
        function () {
          ((m.m = e.message), C());
        },
      );
    }
    function h(e) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:resume",
        function () {
          ((m.pr = e.length), C());
        },
      );
    }
    function y() {
      if (!d) {
        d = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:bulk",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((d = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:bulk",
                    function () {
                      var e;
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:bulk",
                        JSON.stringify({
                          cur: (e = b()) != null ? e : void 0,
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
    function C() {
      if (!p) {
        p = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:resume",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((p = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:resume",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:resume",
                        JSON.stringify(m),
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
    function b() {
      return Array.from(u).reduce(function (e, t) {
        return e == null || t.n > e.n ? t : e;
      }, null);
    }
    ((l.startBulkWriteForCrash = _),
      (l.endBulkWriteForCrash = f),
      (l.logOfflineResumeMessagesForCrash = g),
      (l.logPeerReceiptRowsForCrash = h));
  },
  98,
);
