__d(
  "WAWebStorageCrashAnnotations",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebHeapCrashAnnotations",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 32,
      u = 5e3,
      c = 5,
      d = 64,
      m = 1e3,
      p = 32,
      _ = 1e3,
      f = new Set(),
      g = null,
      h = !1,
      y = new WeakMap(),
      C = new Map(),
      b = !1,
      v = !1,
      S = null,
      R = {},
      L = !1,
      E = new Set(),
      k = null,
      I = !1;
    function T(e, t) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:bulk",
        function () {
          y.set(t, e.slice(0, d));
        },
      );
    }
    function D(t, n) {
      return (
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:bulkSum",
          function () {
            return W(t.name, n.length);
          },
        ),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:bulk",
          function () {
            if (n.length < e || f.size >= s) return null;
            var r = {
              t: t.name,
              c: y.get(n),
              n: n.length,
              h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
            };
            return (
              o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(r.h),
              f.add(r),
              B(),
              r
            );
          },
        )
      );
    }
    function x(e, t) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulk",
        function () {
          e != null &&
            (f.delete(e),
            (g = {
              t: e.t,
              c: e.c,
              n: e.n,
              h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
              ms: Math.round(t),
            }),
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(g.h),
            B());
        },
      );
    }
    function $(e) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:resume",
        function () {
          ((R.m = e.message), V());
        },
      );
    }
    function P(e) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:resume",
        function () {
          ((R.pr = e.length), V());
        },
      );
    }
    function N(e, t, n, r) {
      return (
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:idbRead",
          function () {
            var a = { t: e.name, op: t, k: n != null ? n : void 0 },
              i = self.performance.now(),
              l = !1,
              s =
                n != null && n >= m
                  ? null
                  : self.setTimeout(function () {
                      return o(
                        "WAWebSafeCrashAnnotation",
                      ).runCrashAnnotationSafely("wa:idbRead", function () {
                        l || M(a);
                      });
                    }, _),
              u = function (t) {
                return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                  "wa:idbRead",
                  function () {
                    var e;
                    ((l = !0),
                      s != null && self.clearTimeout(s),
                      w(
                        a,
                        (e = t == null ? void 0 : t.length) != null ? e : 0,
                        self.performance.now() - i,
                      ));
                  },
                );
              };
            (r.then(u, function () {
              return u(null);
            }),
              s == null && M(a));
          },
        ),
        r
      );
    }
    function M(e) {
      if (E.size >= p) {
        var t,
          n,
          r = O();
        if (
          r == null ||
          ((t = r.k) != null ? t : 0) > ((n = e.k) != null ? n : 0)
        )
          return;
        E.delete(r);
      }
      ((e.h = o("WAWebHeapCrashAnnotations").readUsedHeapMB()),
        o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(e.h),
        E.add(e),
        A());
    }
    function w(e, t, n) {
      var r = E.delete(e);
      if (t >= m)
        ((k = {
          t: e.t,
          op: e.op,
          n: t,
          h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
          ms: Math.round(n),
        }),
          o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(k.h));
      else if (!r) return;
      A();
    }
    function A() {
      if (!I) {
        I = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:idbRead",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((I = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:idbRead",
                    function () {
                      var e;
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:idbRead",
                        JSON.stringify({
                          cur: (e = F()) != null ? e : void 0,
                          last: k != null ? k : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (I = !1);
      }
    }
    function F() {
      return Array.from(E).reduce(function (e, t) {
        var n, r;
        return e == null ||
          ((n = t.k) != null ? n : 0) > ((r = e.k) != null ? r : 0)
          ? t
          : e;
      }, null);
    }
    function O() {
      return Array.from(E).reduce(function (e, t) {
        var n, r;
        return e == null ||
          ((n = t.k) != null ? n : 0) < ((r = e.k) != null ? r : 0)
          ? t
          : e;
      }, null);
    }
    function B() {
      if (!h) {
        h = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:bulk",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((h = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:bulk",
                    function () {
                      var e;
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:bulk",
                        JSON.stringify({
                          cur: (e = H()) != null ? e : void 0,
                          last: g != null ? g : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (h = !1);
      }
    }
    function W(e, t) {
      var n = C.get(e);
      (n == null ? C.set(e, [1, t]) : ((n[0] += 1), (n[1] += t)), q());
    }
    function q() {
      if (!(b || v)) {
        var e = S == null ? 0 : S + u - self.performance.now();
        if (e <= 0) {
          U();
          return;
        }
        (self.setTimeout(function () {
          ((v = !1),
            o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:bulkSum",
              U,
            ));
        }, e),
          (v = !0));
      }
    }
    function U() {
      b = !0;
      var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulkSum",
        function () {
          return (
            o("WAWebLogForCrash").onLogForCrashReady(function () {
              ((b = !1),
                (S = self.performance.now()),
                o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                  "wa:bulkSum",
                  function () {
                    return o("WAWebLogForCrash").logForCrash(
                      "wa:bulkSum",
                      JSON.stringify(
                        Object.fromEntries(
                          Array.from(C)
                            .sort(function (e, t) {
                              var n = e[1],
                                r = t[1];
                              return r[1] - n[1];
                            })
                            .slice(0, c),
                        ),
                      ),
                    );
                  },
                ));
            }),
            !0
          );
        },
      );
      e !== !0 && (b = !1);
    }
    function V() {
      if (!L) {
        L = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:resume",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((L = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:resume",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:resume",
                        JSON.stringify(R),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (L = !1);
      }
    }
    function H() {
      return Array.from(f).reduce(function (e, t) {
        return e == null || t.n > e.n ? t : e;
      }, null);
    }
    ((l.annotateCrashWithBulkWriteCaller = T),
      (l.annotateCrashWithBulkWriteStart = D),
      (l.annotateCrashWithBulkWriteEnd = x),
      (l.annotateCrashWithOfflineResumeMessages = $),
      (l.annotateCrashWithPeerReceiptRows = P),
      (l.annotateCrashWithIdbRead = N));
  },
  98,
);
