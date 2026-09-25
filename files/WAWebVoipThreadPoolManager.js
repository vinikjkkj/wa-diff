__d(
  "WAWebVoipThreadPoolManager",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCoreActionsODS",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WAWebVoipQplHelpers",
    "WAWebVoipWaCallEnums",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q = !1;
    function U(e) {
      var t = e.length - 1;
      if (t < 0) return !1;
      if (o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(e[t]))
        return !0;
      for (var n = t - 1; n >= 0; n--)
        if (o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(e[n])) {
          var r = e[n];
          return ((e[n] = e[t]), (e[t] = r), !0);
        }
      return !1;
    }
    var V = 2,
      H = 4,
      G = 50,
      z = 3e4,
      j = 15e3,
      K = (function () {
        function t(e, t, n) {
          ((this.$3 = !1),
            (this.$4 = !1),
            (this.$6 = null),
            (this.$7 = new WeakSet()),
            (this.$1 = e),
            (this.$2 = t),
            (this.$5 = n));
        }
        var a = t.prototype;
        return (
          (a.init = function () {
            this.$2 &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ThreadPoolManager: Initialized (enabled=",
                    ")",
                  ])),
                String(this.$2),
              ),
              this.$8());
          }),
          (a.$8 = function () {
            var e = this;
            if (!(this.$4 || q)) {
              var t = this,
                n = this.$1.PThread,
                a = n.getNewWorker;
              ((n.getNewWorker = function () {
                var i = t.getAvailableWorkerCount();
                if (i === 0) {
                  var l = o("WAWebVoipQplHelpers").startVoipWorkerSetupQpl();
                  (o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(
                    l,
                    o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint
                      .EMERGENCY_ALLOC,
                  ),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[ThreadPoolManager] pool empty, sync alloc 1 worker",
                        ])),
                    ));
                  try {
                    n.allocateUnusedWorker();
                    var c = n.unusedWorkers[n.unusedWorkers.length - 1];
                    (e.$9(n, c),
                      e.$10(c),
                      o("WAWebVoipQplHelpers").endVoipWorkerSetupQplSuccess(l));
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ThreadPoolManager: Emergency worker allocation failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                      o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                        l,
                        "emergency_alloc_failed",
                      ));
                  }
                }
                e.$11(n);
                var d = a.call(n),
                  m = e.getAvailableWorkerCount();
                return (
                  m <= 1
                    ? window.setTimeout(function () {
                        return e.ensurePoolCapacity();
                      }, 0)
                    : m <= V &&
                      o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                        function () {
                          return t.ensurePoolCapacity();
                        },
                      ),
                  d
                );
              }),
                (q = !0),
                (this.$4 = !0));
              var i = this.getAvailableWorkerCount(),
                l = this.getRunningWorkerCount();
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] hook installed avail=",
                    " run=",
                    " total=",
                    "",
                  ])),
                i,
                l,
                i + l,
              );
            }
          }),
          (a.getAvailableWorkerCount = function () {
            return this.$1.PThread.unusedWorkers.length;
          }),
          (a.getRunningWorkerCount = function () {
            return this.$1.PThread.runningWorkers.length;
          }),
          (a.getTotalWorkerCount = function () {
            return (
              this.getAvailableWorkerCount() + this.getRunningWorkerCount()
            );
          }),
          (a.isEnabled = function () {
            return this.$2;
          }),
          (a.ensurePoolCapacity = function () {
            if (this.$2) {
              var e = this.getAvailableWorkerCount(),
                t = this.getRunningWorkerCount(),
                n = e + t;
              if (e <= V && n < G) {
                var r = Math.min(H, G - n);
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] low capacity avail=",
                      " +",
                      "",
                    ])),
                  e,
                  r,
                ),
                  this.$12(r));
              }
            }
          }),
          (a.warmPool = function (t) {
            if (this.$2) {
              var e = this.getTotalWorkerCount(),
                n = Math.min(t, G),
                r = Math.max(0, n - e);
              r > 0 &&
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ThreadPoolManager: Warming pool from ",
                      " to ",
                      " workers (+",
                      ")",
                    ])),
                  e,
                  n,
                  r,
                ),
                this.$12(r));
            }
          }),
          (a.logPoolStats = function () {
            var e = this.getAvailableWorkerCount(),
              t = this.getRunningWorkerCount();
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[ThreadPoolManager] stats avail=",
                  " run=",
                  " total=",
                  "",
                ])),
              e,
              t,
              e + t,
            );
          }),
          (a.onCallStateChanged = function (t) {
            var e = this;
            this.$2 &&
              (this.$13(),
              t === o("WAWebVoipWaCallEnums").CallState.None &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] call ended, shrink in ",
                      "ms",
                    ])),
                  z,
                ),
                (this.$6 = window.setTimeout(function () {
                  (e.$14(), (e.$6 = null));
                }, z))));
          }),
          (a.$13 = function () {
            this.$6 != null &&
              (window.clearTimeout(this.$6),
              (this.$6 = null),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ThreadPoolManager: Cancelled pending pool shrink",
                  ])),
              ));
          }),
          (a.$14 = function () {
            var e = this.$5,
              t = this.$1.PThread.unusedWorkers,
              n = this.getRunningWorkerCount(),
              r = this.getTotalWorkerCount();
            if (r <= e) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] pool=",
                    " <= target=",
                    "",
                  ])),
                r,
                e,
              );
              return;
            }
            var a = r - e,
              i = Math.min(a, t.length);
            if (i <= 0) {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] no unused to release unused=",
                    " run=",
                    "",
                  ])),
                t.length,
                n,
              );
              return;
            }
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[ThreadPoolManager] shrink ",
                  "->",
                  " -",
                  "",
                ])),
              r,
              e,
              i,
            );
            var l = o("WAWebVoipQplHelpers").startVoipWorkerSetupQpl();
            o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(
              l,
              o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint.POOL_SHRINK,
            );
            for (var s = 0; s < i; s++) {
              var u = t.pop();
              u != null && u.close();
            }
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[ThreadPoolManager] shrink done total=",
                  " unused=",
                  " run=",
                  "",
                ])),
              this.getTotalWorkerCount(),
              this.getAvailableWorkerCount(),
              this.getRunningWorkerCount(),
            ),
              o("WAWebVoipQplHelpers").endVoipWorkerSetupQplSuccess(l));
          }),
          (a.$12 = function (t) {
            var e = this;
            if (!(t <= 0)) {
              if (this.$3) {
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] grow dropped cnt=",
                      " (busy)",
                    ])),
                  t,
                );
                return;
              }
              var a = o(
                "WAWebVoipPthreadHardening",
              ).isVoipPoolHardeningEnabled();
              if (
                a &&
                o(
                  "WAWebVoipPthreadGlueFailureTracker",
                ).hasTerminalPthreadGlueFailure()
              ) {
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] grow skipped cnt=",
                      " (glue build mismatch latched)",
                    ])),
                  t,
                );
                return;
              }
              var i = this.$1.PThread;
              if (!i) {
                o("WALogger").ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] PThread unavailable, can't grow",
                    ])),
                );
                return;
              }
              this.$3 = !0;
              var l = o("WAWebVoipQplHelpers").startVoipWorkerSetupQpl();
              o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(
                l,
                o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint
                  .POOL_GROWTH_START,
              );
              var s = i.unusedWorkers.length,
                u = i.runningWorkers.length,
                c = Date.now();
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] grow +",
                    " avail=",
                    " run=",
                    " total=",
                    "",
                  ])),
                t,
                s,
                u,
                s + u,
              );
              var d = [];
              try {
                for (var m = 0; m < t; m++)
                  (i.allocateUnusedWorker(),
                    d.push(i.unusedWorkers[i.unusedWorkers.length - 1]));
              } catch (e) {
                if (
                  (o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] alloc fail ",
                        "/",
                        ": ",
                        "",
                      ])),
                    d.length,
                    t,
                    String(e),
                  ),
                  d.length === 0)
                ) {
                  ((this.$3 = !1),
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                      l,
                      "alloc_failed",
                    ));
                  return;
                }
              }
              var p = Date.now() - c,
                _ = i.unusedWorkers.length,
                f = i.runningWorkers.length;
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] alloc done ",
                    "ms +",
                    " avail=",
                    " run=",
                    "",
                  ])),
                p.toFixed(2),
                d.length,
                _,
                f,
              );
              var g = Date.now(),
                h = [],
                y = d.map(function (t, n) {
                  var r = Date.now(),
                    o = a ? e.$15(i, t) : e.$9(i, t);
                  return o.then(function () {
                    var e = Date.now() - r;
                    h.length < 3 &&
                      h.push("Worker " + n + ": " + e.toFixed(2) + "ms");
                  });
                }),
                C = a
                  ? (W || (W = n("Promise"))).allSettled(y).then(function (e) {
                      return e.filter(function (e) {
                        return e.status === "rejected";
                      }).length;
                    })
                  : (W || (W = n("Promise"))).all(y).then(function () {
                      return 0;
                    });
              C.then(function (e) {
                var t = Date.now() - g,
                  n = Date.now() - c,
                  r = i.unusedWorkers.length,
                  a = i.runningWorkers.length;
                if (
                  (h.length > 0 &&
                    o("WALogger").LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[ThreadPoolManager] WASM load ",
                          "w: ",
                          "",
                        ])),
                      d.length,
                      h.join(", "),
                    ),
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] grow done avail=",
                        " run=",
                        " failed=",
                        " wasmT=",
                        "ms totalT=",
                        "ms",
                      ])),
                    r,
                    a,
                    e,
                    t.toFixed(2),
                    n.toFixed(2),
                  ),
                  o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(
                    l,
                    o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint
                      .POOL_GROWTH_END,
                  ),
                  e === y.length)
                ) {
                  o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                    l,
                    "wasm_load_failed",
                  );
                  return;
                }
                if (e > 0) {
                  o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                    l,
                    "wasm_load_partial",
                  );
                  return;
                }
                o("WAWebVoipQplHelpers").endVoipWorkerSetupQplSuccess(l);
              })
                .catch(function (e) {
                  if (!a) {
                    (o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: ThreadPoolManager: Pool growth error: ",
                          "",
                        ])),
                      String(e),
                    ),
                      o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                        l,
                        "wasm_load_failed",
                      ));
                    return;
                  }
                  (o("WALogger")
                    .ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[ThreadPoolManager] grow bookkeeping failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-thread-pool-grow-bookkeeping"),
                    l.isActive() &&
                      o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                        l,
                        "grow_bookkeeping_error",
                      ));
                })
                .finally(function () {
                  e.$3 = !1;
                });
            }
          }),
          (a.$15 = function (t, n) {
            var e = this,
              r = this.$9(t, n),
              a = o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n);
            return o("WAWebVoipPthreadGlueFailureTracker")
              .failFastOnPthreadGlueFailure(
                o("WAPromiseTimeout").promiseTimeout(
                  r,
                  j,
                  "voip: pool worker " +
                    String(a) +
                    " did not load within " +
                    j +
                    "ms",
                ),
                "pthread_bootstrap",
                { workerID: a },
              )
              .catch(function (r) {
                throw (e.$16(t, n, r), r);
              });
          }),
          (a.$16 = function (t, n, r) {
            var e = r instanceof o("WACustomError").TimeoutError;
            e &&
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitThreadPoolWorkerLoadTimeout();
            var a = String(
              o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n),
            );
            if (!this.$17(t, n)) {
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] worker ",
                    " load gave up; already loaded, taken by a pthread or released by the tracker: ",
                    "",
                  ])),
                a,
                String(r),
              );
              return;
            }
            if (
              r instanceof o("WACustomError").TimeoutError &&
              (this.$18(n, r), !this.$17(t, n))
            ) {
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] worker ",
                    " pinned load timed out; released via the glue failure tracker",
                  ])),
                a,
              );
              return;
            }
            (this.$19(t, n),
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] released unloaded worker ",
                    " (",
                    "): ",
                    "",
                  ])),
                a,
                e ? "timeout" : "glue refused",
                String(r),
              ));
          }),
          (a.$17 = function (t, n) {
            return (
              t.unusedWorkers.includes(n) &&
              !o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(n) &&
              !o("WAWebVoipPthreadWorkerFields").isPthreadWorkerBound(n)
            );
          }),
          (a.$9 = function (t, n) {
            return (
              Reflect.get(this.$1, "pinWorkerGlue") === !0 && this.$7.add(n),
              t.loadWasmModuleToWorker(n)
            );
          }),
          (a.$11 = function (t) {
            !o("WAWebVoipPthreadHardening").isVoipPoolHardeningEnabled() ||
              U(t.unusedWorkers) ||
              this.$20(t);
          }),
          (a.$20 = function (t) {
            var e = t.unusedWorkers.at(-1);
            if (
              !(
                e == null ||
                !o(
                  "WAWebVoipPthreadGlueFailureTracker",
                ).isPinnedWorkerGlueUnpinnedForPage() ||
                !this.$7.has(e)
              )
            ) {
              var n = this.getTotalWorkerCount();
              if (n >= G) {
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] page unpinned and only pinned loads unused, but the pool is full (",
                      "/",
                      "); handing out pinned load ",
                      "",
                    ])),
                  n,
                  G,
                  String(
                    o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(e),
                  ),
                );
                return;
              }
              this.$21(t);
            }
          }),
          (a.$21 = function (t) {
            try {
              t.allocateUnusedWorker();
              var e = t.unusedWorkers[t.unusedWorkers.length - 1];
              (this.$9(t, e).catch(function (e) {
                o("WALogger")
                  .ERROR(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: unpinned hand-out worker load failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }),
                this.$10(e),
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] page unpinned and only pinned loads unused; allocated worker ",
                      " for the new pthread",
                    ])),
                  String(
                    o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(e),
                  ),
                ));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ThreadPoolManager: unpinned worker allocation failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
          }),
          (a.$10 = function (t) {
            o("WAWebVoipPthreadHardening").isVoipPoolHardeningEnabled() &&
              window.setTimeout(function () {
                o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(t) ||
                  o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).hasTerminalPthreadGlueFailure() ||
                  o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).hasPinnedGlueFailedForWorker(
                    o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(t),
                  ) ||
                  (o(
                    "WAWebCoreActionsODS",
                  ).logCallVoipInitThreadPoolEmergencyWorkerLoadTimeout(),
                  o("WALogger").LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] emergency worker ",
                        " has not loaded after ",
                        "ms",
                      ])),
                    String(
                      o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(t),
                    ),
                    j,
                  ));
              }, j);
          }),
          (a.$18 = function (t, n) {
            if (Reflect.get(this.$1, "pinWorkerGlue") === !0)
              try {
                o(
                  "WAWebVoipPthreadGlueFailureTracker",
                ).recordPthreadGlueFailure({
                  kind: "pinned_load_failed",
                  cause: "timed_out",
                  error: "stage=pool_grow_timeout " + n.message,
                  workerID: o(
                    "WAWebVoipPthreadWorkerFields",
                  ).getPthreadWorkerID(t),
                });
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: recording a pinned load timeout threw",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-thread-pool-pinned-timeout-record");
              }
          }),
          (a.$19 = function (t, n) {
            var e = t.unusedWorkers.indexOf(n);
            e >= 0 && t.unusedWorkers.splice(e, 1);
            try {
              n.close();
            } catch (e) {
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] close() threw for worker ",
                    ": ",
                    "",
                  ])),
                String(o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n)),
                String(e),
              );
            }
          }),
          t
        );
      })();
    l.default = K;
  },
  98,
);
