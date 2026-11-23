__d(
  "WAWebVoipJsWorkerThread",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WorkerMessagePort",
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
      f = 0,
      g = 10,
      h = 28,
      y = 71,
      C = 4,
      b = 100,
      v = 1e4,
      S = 5e3,
      R = 10 * 6e4,
      L = 6e4,
      E = (function () {
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
                ((e.$1 = n), (e.$2 += Math.min(Math.max(r, t), L)));
              });
          }),
          e
        );
      })(),
      k = (function () {
        function n(e, t, n) {
          (t === void 0 && (t = "legacy-pj"),
            (this.$8 = null),
            (this.$7 = "busy"),
            (this.$9 = !1),
            (this.$1 = e),
            (this.$2 = t));
          var a = o("WAWebVoipMainThreadLockMarker").startMainThreadLockMarker(
            "jsworker_create",
            "main",
            {
              caller: n == null ? void 0 : n.caller,
              initState: n == null ? void 0 : n.initState,
            },
          );
          try {
            t === "pre-init"
              ? (this.$3 = e.startPreInitJsWorkerThread())
              : (this.$3 = e.startJsWorkerThread());
          } finally {
            var i = o(
              "WAWebVoipMainThreadLockMarker",
            ).finishMainThreadLockMarker(a);
            n == null ||
              n.onNativeStartFinished == null ||
              n.onNativeStartFinished(i);
          }
          if (this.$3 === 0)
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
        n.create = async function (t, r, a) {
          r === void 0 && (r = "legacy-pj");
          var e =
            t != null
              ? t
              : await o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                );
          return new n(e, r, a);
        };
        var a = n.prototype;
        return (
          (a.getWorkerID = function () {
            return o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(
              this.worker,
            );
          }),
          (a.discardUnloadedWorker = function () {
            var t = this.$1.PThread;
            ((this.$7 = "unjoinable"),
              (this.$8 = Promise.resolve()),
              (this.$9 = !0),
              t.pthreads[this.$4] === this.$5 && delete t.pthreads[this.$4]);
            var n = t.runningWorkers.indexOf(this.$5);
            (n >= 0 && t.runningWorkers.splice(n, 1),
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
          (a.joinJsWorkerThread = function () {
            if (!this.$6) return this.$10();
            if (this.$7 !== "busy") return Promise.resolve();
            var e = this.$8;
            if (e != null) return e;
            var t = this.$11();
            return ((this.$8 = t), t);
          }),
          (a.$10 = async function () {
            var e = this;
            this.$12() !== f &&
              t.setTimeout(function () {
                e.$10();
              }, b);
          }),
          (a.$11 = async function () {
            var e = new E();
            if ((await this.$13(e, v, C, b), this.$7 === "busy"))
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
                  "voip: JsWorkerThread join timed out after " + v + "ms",
                )
              );
          }),
          (a.$14 = async function (t) {
            if (
              (await t.sleep(S), await this.$13(t, R, S, S), this.$7 !== "busy")
            ) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [JsWorkerThread] late join completed after ",
                    "ms",
                  ])),
                t.elapsedMs(),
              );
              return;
            }
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [JsWorkerThread] thread never became joinable within ",
                  "ms; abandoning",
                ])),
              R,
            );
          }),
          (a.$13 = function (t, n, r, o) {
            var e = this;
            return this.$15() !== "busy" || t.elapsedMs() >= n
              ? Promise.resolve()
              : t.sleep(r).then(function () {
                  return e.$13(t, n, Math.min(r * 2, o), o);
                });
          }),
          (a.$15 = function () {
            if (this.$7 !== "busy") return this.$7;
            var e = this.$12();
            return e === g
              ? "busy"
              : (e === f
                  ? (this.$7 = "joined")
                  : ((this.$7 = "unjoinable"), this.$16(e)),
                this.$7);
          }),
          (a.$16 = function (t) {
            if (t === y || t === h) {
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
          (a.$12 = function () {
            return this.$2 === "pre-init"
              ? this.$1.tryJoinPreInitJsWorkerThread(this.$3)
              : this.$1.tryJoinJsWorkerThread(this.$3);
          }),
          (a.shutdown = function () {
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
          (a.$17 = async function () {
            (this.worker.postMessage({
              type: "cmd",
              cmd: "jsWorkerCmd",
              jsWorkerCmd: "shutdown",
            }),
              await this.$10());
          }),
          n
        );
      })();
    l.default = k;
  },
  98,
);
