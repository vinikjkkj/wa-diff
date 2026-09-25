__d(
  "WAWebVoipJsWorkerThread",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
    "err",
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
      g = 0,
      h = 10,
      y = 28,
      C = 71,
      b = 4,
      v = 100,
      S = 1e4,
      R = 5e3,
      L = 10 * 6e4,
      E = 6e4,
      k = (function () {
        function e() {
          ((this.$1 = self.performance.now()), (this.$2 = 0));
        }
        var t = e.prototype;
        return (
          (t.elapsedMs = function () {
            return this.$2;
          }),
          (t.sleep = function (t) {
            var e = this;
            return o("WAPromiseDelays")
              .delayMs(t)
              .then(function () {
                var n = self.performance.now(),
                  r = n - e.$1;
                ((e.$1 = n), (e.$2 += Math.min(Math.max(r, t), E)));
              });
          }),
          e
        );
      })(),
      I = (function () {
        function a(e, t) {
          if (
            (t === void 0 && (t = "legacy-pj"),
            (this.$8 = null),
            (this.$7 = "busy"),
            (this.$9 = !1),
            (this.$1 = e),
            (this.$2 = t),
            t === "pre-init"
              ? (this.$3 = e.startPreInitJsWorkerThread())
              : (this.$3 = e.startJsWorkerThread()),
            this.$3 === 0)
          )
            throw r("err")("voip: failed to create JsWorkerThread");
          ((this.$4 =
            t === "pre-init" ? this.$3 : e.getJsWorkerPThreadId(this.$3)),
            (this.$5 = e.PThread.pthreads[this.$4]),
            (this.worker = o("WorkerMessagePort").CastWorkerMessagePort(
              this.$5,
            )),
            (this.$6 = o(
              "WAWebVoipPthreadHardening",
            ).isVoipWorkerLifecycleHardeningEnabled()));
        }
        a.create = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              t === void 0 && (t = "legacy-pj");
              var n =
                e != null
                  ? e
                  : yield o("WAWebBackendApi").frontendSendAndReceive(
                      "initializeVoipWasm",
                    );
              return new a(n, t);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })();
        var i = a.prototype;
        return (
          (i.getWorkerID = function () {
            return o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(
              this.worker,
            );
          }),
          (i.discardUnloadedWorker = function () {
            var t = this.$1.PThread;
            ((this.$7 = "unjoinable"),
              (this.$8 = (f || (f = n("Promise"))).resolve()),
              (this.$9 = !0),
              t.pthreads[this.$4] === this.$5 && delete t.pthreads[this.$4]);
            var r = t.runningWorkers.indexOf(this.$5);
            (r >= 0 && t.runningWorkers.splice(r, 1),
              Reflect.set(this.worker, "pthread_ptr", 0));
            try {
              this.worker.close();
            } catch (t) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [JsWorkerThread] closing unloaded worker threw: ",
                    "",
                  ])),
                String(t),
              );
            }
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [JsWorkerThread] discarded thread ",
                  " on worker ",
                  " that never loaded",
                ])),
              this.$4,
              String(this.getWorkerID()),
            );
          }),
          (i.joinJsWorkerThread = function () {
            if (!this.$6) return this.$10();
            if (this.$7 !== "busy") return (f || (f = n("Promise"))).resolve();
            var e = this.$8;
            if (e != null) return e;
            var t = this.$11();
            return ((this.$8 = t), t);
          }),
          (i.$10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              this.$12() !== g &&
                t.setTimeout(function () {
                  e.$10();
                }, v);
            });
            function r() {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (i.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = new k();
              if ((yield this.$13(e, S, b, v), this.$7 === "busy"))
                throw (
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [JsWorkerThread] join still busy after ",
                        "ms; releasing callers",
                      ])),
                    e.elapsedMs(),
                  ),
                  this.$14(e).catch(function (e) {
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [JsWorkerThread] background reclaim failed: ",
                          "",
                        ])),
                      String(e),
                    );
                  }),
                  new (o("WACustomError").TimeoutError)(
                    "voip: JsWorkerThread join timed out after " + S + "ms",
                  )
                );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$14 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  (yield e.sleep(R),
                  yield this.$13(e, L, R, R),
                  this.$7 !== "busy")
                ) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [JsWorkerThread] late join completed after ",
                        "ms",
                      ])),
                    e.elapsedMs(),
                  );
                  return;
                }
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [JsWorkerThread] thread never became joinable within ",
                      "ms; abandoning",
                    ])),
                  L,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$13 = function (t, r, o, a) {
            var e = this;
            return this.$15() !== "busy" || t.elapsedMs() >= r
              ? (f || (f = n("Promise"))).resolve()
              : t.sleep(o).then(function () {
                  return e.$13(t, r, Math.min(o * 2, a), a);
                });
          }),
          (i.$15 = function () {
            if (this.$7 !== "busy") return this.$7;
            var e = this.$12();
            return e === h
              ? "busy"
              : (e === g
                  ? (this.$7 = "joined")
                  : ((this.$7 = "unjoinable"), this.$16(e)),
                this.$7);
          }),
          (i.$16 = function (t) {
            if (t === C || t === y) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [JsWorkerThread] nothing to join (tryjoin=",
                    ")",
                  ])),
                t,
              );
              return;
            }
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [JsWorkerThread] unexpected tryjoin result ",
                  "; treating the thread as unjoinable",
                ])),
              t,
            );
          }),
          (i.$12 = function () {
            return this.$2 === "pre-init"
              ? this.$1.tryJoinPreInitJsWorkerThread(this.$3)
              : this.$1.tryJoinJsWorkerThread(this.$3);
          }),
          (i.shutdown = function () {
            return this.$6
              ? (this.$9 ||
                  ((this.$9 = !0),
                  this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "shutdown",
                  })),
                this.joinJsWorkerThread())
              : this.$17();
          }),
          (i.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "shutdown",
              }),
                yield this.$10());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })();
    l.default = I;
  },
  98,
);
