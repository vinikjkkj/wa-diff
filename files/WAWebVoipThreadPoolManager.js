__d(
  "WAWebVoipThreadPoolManager",
  [
    "Promise",
    "WALogger",
    "WAWebPonyfillsIdleCallback",
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
      D = !1,
      x = 2,
      $ = 4,
      P = 50,
      N = 3e4,
      M = (function () {
        function t(e, t, n) {
          ((this.$3 = !1),
            (this.$4 = !1),
            (this.$6 = null),
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
              this.$7());
          }),
          (a.$7 = function () {
            var e = this;
            if (!(this.$4 || D)) {
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
                    (n.loadWasmModuleToWorker(c),
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
                var d = a.call(n),
                  m = e.getAvailableWorkerCount();
                return (
                  m <= 1
                    ? window.setTimeout(function () {
                        return e.ensurePoolCapacity();
                      }, 0)
                    : m <= x &&
                      o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                        function () {
                          return t.ensurePoolCapacity();
                        },
                      ),
                  d
                );
              }),
                (D = !0),
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
              if (e <= x && n < P) {
                var r = Math.min($, P - n);
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
                  this.$8(r));
              }
            }
          }),
          (a.warmPool = function (t) {
            if (this.$2) {
              var e = this.getTotalWorkerCount(),
                n = Math.min(t, P),
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
                this.$8(r));
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
              (this.$9(),
              t === o("WAWebVoipWaCallEnums").CallState.None &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] call ended, shrink in ",
                      "ms",
                    ])),
                  N,
                ),
                (this.$6 = window.setTimeout(function () {
                  (e.$10(), (e.$6 = null));
                }, N))));
          }),
          (a.$9 = function () {
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
          (a.$10 = function () {
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
          (a.$8 = function (t) {
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
              var r = this.$1.PThread;
              if (!r) {
                o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadPoolManager] PThread unavailable, can't grow",
                    ])),
                );
                return;
              }
              this.$3 = !0;
              var a = o("WAWebVoipQplHelpers").startVoipWorkerSetupQpl();
              o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(
                a,
                o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint
                  .POOL_GROWTH_START,
              );
              var i = r.unusedWorkers.length,
                l = r.runningWorkers.length,
                s = Date.now();
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] grow +",
                    " avail=",
                    " run=",
                    " total=",
                    "",
                  ])),
                t,
                i,
                l,
                i + l,
              );
              var u = [];
              try {
                for (var c = 0; c < t; c++)
                  (r.allocateUnusedWorker(),
                    u.push(r.unusedWorkers[r.unusedWorkers.length - 1]));
              } catch (e) {
                if (
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] alloc fail ",
                        "/",
                        ": ",
                        "",
                      ])),
                    u.length,
                    t,
                    String(e),
                  ),
                  u.length === 0)
                ) {
                  ((this.$3 = !1),
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                      a,
                      "alloc_failed",
                    ));
                  return;
                }
              }
              var d = Date.now() - s,
                m = r.unusedWorkers.length,
                p = r.runningWorkers.length;
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] alloc done ",
                    "ms +",
                    " avail=",
                    " run=",
                    "",
                  ])),
                d.toFixed(2),
                u.length,
                m,
                p,
              );
              var _ = Date.now(),
                f = [],
                g = u.map(function (e, t) {
                  var n = Date.now();
                  return r.loadWasmModuleToWorker(e).then(function () {
                    var e = Date.now() - n;
                    f.length < 3 &&
                      f.push("Worker " + t + ": " + e.toFixed(2) + "ms");
                  });
                });
              (T || (T = n("Promise")))
                .all(g)
                .then(function () {
                  var e = Date.now() - _,
                    t = Date.now() - s,
                    n = r.unusedWorkers.length,
                    i = r.runningWorkers.length;
                  (f.length > 0 &&
                    o("WALogger").LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "[ThreadPoolManager] WASM load ",
                          "w: ",
                          "",
                        ])),
                      u.length,
                      f.join(", "),
                    ),
                    o("WALogger").LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[ThreadPoolManager] grow done avail=",
                          " run=",
                          " wasmT=",
                          "ms totalT=",
                          "ms",
                        ])),
                      n,
                      i,
                      e.toFixed(2),
                      t.toFixed(2),
                    ),
                    o("WAWebVoipQplHelpers").voipWorkerSetupQplAddPoint(
                      a,
                      o("WAWebVoipQplHelpers").VoipWorkerSetupQplPoint
                        .POOL_GROWTH_END,
                    ),
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplSuccess(a));
                })
                .catch(function (e) {
                  (o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: Pool growth error: ",
                        "",
                      ])),
                    String(e),
                  ),
                    o("WAWebVoipQplHelpers").endVoipWorkerSetupQplFail(
                      a,
                      "wasm_load_failed",
                    ));
                })
                .finally(function () {
                  e.$3 = !1;
                });
            }
          }),
          t
        );
      })();
    l.default = M;
  },
  98,
);
