__d(
  "WAWebVoipSctpDataChannelThread",
  [
    "Promise",
    "WALogger",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
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
      E = 262144,
      k = 8,
      I = (function () {
        function r(t) {
          ((this.$4 = !1), (this.$5 = null), (this.$1 = t));
          var n = t.startJsWorkerThread(),
            r = t.getJsWorkerPThreadId(n);
          ((this.$2 = n),
            (this.$3 = r),
            (this.worker = o("WorkerMessagePort").CastWorkerMessagePort(
              t.PThread.pthreads[r],
            )),
            (this.$4 = !0),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread created, threadId: ",
                  "",
                ])),
              r,
            ));
        }
        r.create = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Creating pthread for DC I/O",
                ])),
            );
            var e =
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                ),
              t = new r(e),
              n = yield t.initRingBuffer();
            return (
              n ||
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Ring buffer init failed, using main thread",
                    ])),
                ),
              t
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })();
        var a = r.prototype;
        return (
          (a.transferChannel = function (t, n, r, a, i) {
            if (!this.$4)
              return (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Cannot transfer channel - thread not active",
                    ])),
                ),
                !1
              );
            try {
              return (
                this.worker.postMessage(
                  {
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "transferDataChannel",
                    channel: t,
                    connectionId: n,
                    ip: r,
                    port: a,
                    enableStats: i,
                  },
                  [t],
                ),
                !0
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Failed to transfer channel ",
                      ": ",
                      "",
                    ])),
                  n,
                  e,
                ),
                !1
              );
            }
          }),
          (a.sendPacket = function (t, n) {
            if (!this.$4) return !1;
            try {
              return (
                this.worker.postMessage(
                  {
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "sendPacket",
                    connectionId: t,
                    data: n,
                  },
                  [n],
                ),
                !0
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Failed to send packet on ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                ),
                !1
              );
            }
          }),
          (a.closeChannel = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "closeDataChannel",
                connectionId: t,
              });
          }),
          (a.isActive = function () {
            return this.$4;
          }),
          (a.getVoipWasm = function () {
            return this.$1;
          }),
          (a.ping = function () {
            if (!this.$4) {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Cannot ping - thread not active",
                  ])),
              );
              return;
            }
            this.worker.postMessage({
              type: "cmd",
              cmd: "jsWorkerCmd",
              jsWorkerCmd: "ping",
              timestamp: Date.now(),
            });
          }),
          (a.setRemoveRelayPortOverride = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "setRemoveRelayPortOverride",
                enabled: t,
              });
          }),
          (a.setSctpTimeoutMs = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "setSctpTimeoutMs",
                ms: t,
              });
          }),
          (a.updateIceRtt = function (t, n, r) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "updateIceRtt",
                rttMs: t,
                relayIp: n,
                relayPort: r,
              });
          }),
          (a.joinThread = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              for (var e = 50, r = 0; r < e; r++) {
                var a = this.$1.tryJoinJsWorkerThread(this.$2);
                if (a === 0) return !0;
                yield new (L || (L = n("Promise")))(function (e) {
                  t.setTimeout(function () {
                    e();
                  }, 100);
                });
              }
              return (
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] joinThread max retries (",
                      "), stuck",
                    ])),
                  e,
                ),
                (this.$4 = !1),
                !1
              );
            });
            function r() {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (a.initRingBuffer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!this.$4)
                return (
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Cannot init ring buffer - thread not active",
                      ])),
                  ),
                  !1
                );
              var e = this.$1,
                t = E,
                n = t + k;
              try {
                var r = yield o("WAWebAudioUtility").mallocWasmBuffer(n);
                if (r == null || r === 0)
                  return (
                    o("WALogger").WARN(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [DCThread] Failed to allocate ring buffer",
                        ])),
                    ),
                    !1
                  );
                var a = e.GROWABLE_HEAP_U8();
                a.fill(0, r, r + n);
                var i = e.initSctpRingBuffer(r, t);
                return i
                  ? ((this.$5 = r),
                    this.worker.postMessage({
                      type: "cmd",
                      cmd: "jsWorkerCmd",
                      jsWorkerCmd: "initRingBuffer",
                      heapBuffer: a.buffer,
                      heapBufferOffset: r,
                      dataSize: t,
                    }),
                    !0)
                  : (o("WALogger").WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [DCThread] C++ initSctpRingBuffer failed",
                        ])),
                    ),
                    yield o("WAWebAudioUtility").freeWasmBuffer(r),
                    !1);
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Ring buffer init failed: ",
                        "",
                      ])),
                    e,
                  ),
                  this.$5 != null &&
                    (this.shutdownRingBuffer(),
                    yield this.freeRingBufferMemory()),
                  !1
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.shutdownRingBuffer = function () {
            var e = this.$5;
            if (e != null) {
              try {
                this.$1.shutdownSctpRingBuffer();
              } catch (e) {
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] shutdownSctpRingBuffer error: ",
                      "",
                    ])),
                  e,
                );
              }
              this.$4 &&
                this.worker.postMessage({
                  type: "cmd",
                  cmd: "jsWorkerCmd",
                  jsWorkerCmd: "shutdownRingBuffer",
                });
            }
          }),
          (a.freeRingBufferMemory = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.$5;
              if (e != null) {
                this.$5 = null;
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(e);
                } catch (e) {
                  o("WALogger").WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Ring buffer free error: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.shutdown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$4) {
                (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Shutting down pthread",
                    ])),
                ),
                  this.shutdownRingBuffer(),
                  (this.$4 = !1),
                  this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "shutdown",
                  }));
                var e = yield this.joinThread();
                (e
                  ? yield this.freeRingBufferMemory()
                  : o("WALogger").WARN(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [DCThread] Skip ring buffer free - join timed out",
                        ])),
                    ),
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Pthread shutdown complete",
                      ])),
                  ));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })();
    l.default = I;
  },
  98,
);
