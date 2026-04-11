__d(
  "WAWebVoipThreadPoolManager",
  [
    "Promise",
    "WALogger",
    "WAWebPonyfillsIdleCallback",
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
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadPoolManager] pool empty, sync alloc 1 worker",
                      ])),
                  );
                  try {
                    n.allocateUnusedWorker();
                    var l = n.unusedWorkers[n.unusedWorkers.length - 1];
                    n.loadWasmModuleToWorker(l);
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ThreadPoolManager: Emergency worker allocation failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  }
                }
                var c = a.call(n),
                  d = e.getAvailableWorkerCount();
                return (
                  d <= 1
                    ? window.setTimeout(function () {
                        return e.ensurePoolCapacity();
                      }, 0)
                    : d <= x &&
                      o("WAWebPonyfillsIdleCallback").requestIdleCallback(
                        function () {
                          return t.ensurePoolCapacity();
                        },
                      ),
                  c
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
            for (var l = 0; l < i; l++) {
              var s = t.pop();
              s != null && s.close();
            }
            o("WALogger").LOG(
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
            );
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
              var a = r.unusedWorkers.length,
                i = r.runningWorkers.length,
                l = Date.now();
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
                a,
                i,
                a + i,
              );
              var s = [];
              try {
                for (var u = 0; u < t; u++)
                  (r.allocateUnusedWorker(),
                    s.push(r.unusedWorkers[r.unusedWorkers.length - 1]));
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
                    s.length,
                    t,
                    String(e),
                  ),
                  s.length === 0)
                ) {
                  this.$3 = !1;
                  return;
                }
              }
              var c = Date.now() - l,
                d = r.unusedWorkers.length,
                m = r.runningWorkers.length;
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadPoolManager] alloc done ",
                    "ms +",
                    " avail=",
                    " run=",
                    "",
                  ])),
                c.toFixed(2),
                s.length,
                d,
                m,
              );
              var p = Date.now(),
                _ = [],
                f = s.map(function (e, t) {
                  var n = Date.now();
                  return r.loadWasmModuleToWorker(e).then(function () {
                    var e = Date.now() - n;
                    _.length < 3 &&
                      _.push("Worker " + t + ": " + e.toFixed(2) + "ms");
                  });
                });
              (T || (T = n("Promise")))
                .all(f)
                .then(function () {
                  var e = Date.now() - p,
                    t = Date.now() - l,
                    n = r.unusedWorkers.length,
                    a = r.runningWorkers.length;
                  (_.length > 0 &&
                    o("WALogger").LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "[ThreadPoolManager] WASM load ",
                          "w: ",
                          "",
                        ])),
                      s.length,
                      _.join(", "),
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
                      a,
                      e.toFixed(2),
                      t.toFixed(2),
                    ));
                })
                .catch(function (e) {
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ThreadPoolManager: Pool growth error: ",
                        "",
                      ])),
                    String(e),
                  );
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
