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
      m = 64,
      p = 1e3,
      _ = 32,
      f = 1e3,
      g = new Set(),
      h = null,
      y = !1,
      C = new WeakMap(),
      b = new WeakMap(),
      v = new Map(),
      S = !1,
      R = !1,
      L = null,
      E = {},
      k = !1,
      I = new Set(),
      T = null,
      D = !1;
    function x(e, t) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:bulk",
        function () {
          C.set(t, e.slice(0, d));
        },
      );
    }
    function $(t, n) {
      return (
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:bulkSum",
          function () {
            return V(t.name, n.length);
          },
        ),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:bulk",
          function () {
            if (n.length < e || g.size >= s) return null;
            var r = {
              t: t.name,
              c: C.get(n),
              n: n.length,
              h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
            };
            return (
              o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(r.h),
              g.add(r),
              U(),
              r
            );
          },
        )
      );
    }
    function P(e, t) {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulk",
        function () {
          e != null &&
            (g.delete(e),
            (h = {
              t: e.t,
              c: e.c,
              n: e.n,
              h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
              ms: Math.round(t),
            }),
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(h.h),
            U());
        },
      );
    }
    function N(e) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:resume",
        function () {
          ((E.m = e.message), z());
        },
      );
    }
    function M(e) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:resume",
        function () {
          ((E.pr = e.length), z());
        },
      );
    }
    function w(e, t) {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:idbRead",
        function () {
          b.set(t, e.slice(0, m));
        },
      );
    }
    function A(e, t, n, r, a) {
      return (
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:idbRead",
          function () {
            var i = {
                t: e.name,
                op: t,
                c: a != null ? b.get(a) : void 0,
                k: n != null ? n : void 0,
              },
              l = self.performance.now(),
              s = !1,
              u =
                n != null && n >= p
                  ? null
                  : self.setTimeout(function () {
                      return o(
                        "WAWebSafeCrashAnnotation",
                      ).runCrashAnnotationSafely("wa:idbRead", function () {
                        s || F(i);
                      });
                    }, f),
              c = function (t) {
                return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                  "wa:idbRead",
                  function () {
                    var e;
                    ((s = !0),
                      u != null && self.clearTimeout(u),
                      O(
                        i,
                        (e = t == null ? void 0 : t.length) != null ? e : 0,
                        self.performance.now() - l,
                      ));
                  },
                );
              };
            (r.then(c, function () {
              return c(null);
            }),
              u == null && F(i));
          },
        ),
        r
      );
    }
    function F(e) {
      if (I.size >= _) {
        var t,
          n,
          r = q();
        if (
          r == null ||
          ((t = r.k) != null ? t : 0) > ((n = e.k) != null ? n : 0)
        )
          return;
        I.delete(r);
      }
      ((e.h = o("WAWebHeapCrashAnnotations").readUsedHeapMB()),
        o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(e.h),
        I.add(e),
        B());
    }
    function O(e, t, n) {
      var r = I.delete(e);
      if (t >= p)
        ((T = {
          t: e.t,
          op: e.op,
          c: e.c,
          n: t,
          h: o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
          ms: Math.round(n),
        }),
          o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(T.h));
      else if (!r) return;
      B();
    }
    function B() {
      if (!D) {
        D = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:idbRead",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((D = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:idbRead",
                    function () {
                      var e;
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:idbRead",
                        JSON.stringify({
                          cur: (e = W()) != null ? e : void 0,
                          last: T != null ? T : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (D = !1);
      }
    }
    function W() {
      return Array.from(I).reduce(function (e, t) {
        var n, r;
        return e == null ||
          ((n = t.k) != null ? n : 0) > ((r = e.k) != null ? r : 0)
          ? t
          : e;
      }, null);
    }
    function q() {
      return Array.from(I).reduce(function (e, t) {
        var n, r;
        return e == null ||
          ((n = t.k) != null ? n : 0) < ((r = e.k) != null ? r : 0)
          ? t
          : e;
      }, null);
    }
    function U() {
      if (!y) {
        y = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:bulk",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((y = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:bulk",
                    function () {
                      var e;
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:bulk",
                        JSON.stringify({
                          cur: (e = j()) != null ? e : void 0,
                          last: h != null ? h : void 0,
                        }),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (y = !1);
      }
    }
    function V(e, t) {
      var n = v.get(e);
      (n == null ? v.set(e, [1, t]) : ((n[0] += 1), (n[1] += t)), H());
    }
    function H() {
      if (!(S || R)) {
        var e = L == null ? 0 : L + u - self.performance.now();
        if (e <= 0) {
          G();
          return;
        }
        (self.setTimeout(function () {
          ((R = !1),
            o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:bulkSum",
              G,
            ));
        }, e),
          (R = !0));
      }
    }
    function G() {
      S = !0;
      var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:bulkSum",
        function () {
          return (
            o("WAWebLogForCrash").onLogForCrashReady(function () {
              ((S = !1),
                (L = self.performance.now()),
                o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                  "wa:bulkSum",
                  function () {
                    return o("WAWebLogForCrash").logForCrash(
                      "wa:bulkSum",
                      JSON.stringify(
                        Object.fromEntries(
                          Array.from(v)
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
      e !== !0 && (S = !1);
    }
    function z() {
      if (!k) {
        k = !0;
        var e = o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
          "wa:resume",
          function () {
            return (
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                ((k = !1),
                  o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:resume",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:resume",
                        JSON.stringify(E),
                      );
                    },
                  ));
              }),
              !0
            );
          },
        );
        e !== !0 && (k = !1);
      }
    }
    function j() {
      return Array.from(g).reduce(function (e, t) {
        return e == null || t.n > e.n ? t : e;
      }, null);
    }
    ((l.annotateCrashWithBulkWriteCaller = x),
      (l.annotateCrashWithBulkWriteStart = $),
      (l.annotateCrashWithBulkWriteEnd = P),
      (l.annotateCrashWithOfflineResumeMessages = N),
      (l.annotateCrashWithPeerReceiptRows = M),
      (l.annotateCrashWithIdbReadCaller = w),
      (l.annotateCrashWithIdbRead = A));
  },
  98,
);
