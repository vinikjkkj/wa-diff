__d(
  "WAWebVoipSctpDataChannelThread",
  [
    "Promise",
    "WALogger",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipMainThreadLockODS",
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
      I = 262144,
      T = 8,
      D = (function () {
        function a(t) {
          ((this.$4 = !1),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = !1),
            (this.$1 = t),
            o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix(
              "sctp_thread_create",
            ));
          var n = o("WAWebVoipMainThreadLockMarker").startMainThreadLockMarker(
              "sctp_thread_create",
              "main",
            ),
            a = 0;
          try {
            a = t.startJsWorkerThread();
          } finally {
            o("WAWebVoipMainThreadLockODS").logMainThreadLockCallDuration(
              "sctp_thread_create",
              o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(n),
            );
          }
          if (a === 0)
            throw r("err")("voip: [DCThread] startJsWorkerThread failed");
          var i = t.getJsWorkerPThreadId(a);
          ((this.$2 = a),
            (this.$3 = i),
            (this.worker = o("WorkerMessagePort").CastWorkerMessagePort(
              t.PThread.pthreads[i],
            )),
            (this.$4 = !0),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread created, threadId: ",
                  "",
                ])),
              i,
            ));
        }
        a.create = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e === void 0 ? {} : e,
              n = t.initRing,
              r = n === void 0 ? !0 : n;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Creating pthread for DC I/O",
                ])),
            );
            var i =
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                ),
              l = new a(i);
            return (r && (yield l.ensureRingBuffer()), l);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })();
        var i = a.prototype;
        return (
          (i.ensureRingBuffer = function () {
            var e = this;
            return this.$7
              ? (k || (k = n("Promise"))).resolve(!1)
              : this.$5 != null
                ? (k || (k = n("Promise"))).resolve(!0)
                : (this.$6 == null &&
                    (this.$6 = this.initRingBuffer()
                      .catch(function (e) {
                        return (
                          o("WALogger").WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [DCThread] Ring buffer init threw: ",
                                "",
                              ])),
                            String(e),
                          ),
                          !1
                        );
                      })
                      .then(function (t) {
                        return (
                          t ||
                            ((e.$7 = !0),
                            e.$4 &&
                              o("WALogger").WARN(
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [DCThread] Ring buffer init failed, using main thread",
                                  ])),
                              )),
                          t
                        );
                      })
                      .finally(function () {
                        e.$6 = null;
                      })),
                  this.$6);
          }),
          (i.transferChannel = function (t) {
            var e = t.channel,
              n = t.connectionId,
              r = t.ip,
              a = t.port,
              i = t.standby,
              l = i === void 0 ? !1 : i;
            if (!this.$4)
              return (
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Cannot transfer channel - thread not active",
                    ])),
                ),
                !1
              );
            try {
              return (
                l
                  ? this.worker.postMessage(
                      {
                        type: "cmd",
                        cmd: "jsWorkerCmd",
                        jsWorkerCmd: "transferStandbyDataChannel",
                        channel: e,
                        connectionId: n,
                        ip: r,
                        port: a,
                      },
                      [e],
                    )
                  : this.worker.postMessage(
                      {
                        type: "cmd",
                        cmd: "jsWorkerCmd",
                        jsWorkerCmd: "transferDataChannel",
                        channel: e,
                        connectionId: n,
                        ip: r,
                        port: a,
                      },
                      [e],
                    ),
                !0
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.sendPacket = function (t, n) {
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.activateChannel = function (t) {
            if (!this.$4) return !1;
            try {
              return (
                this.worker.postMessage({
                  type: "cmd",
                  cmd: "jsWorkerCmd",
                  jsWorkerCmd: "activateDataChannel",
                  connectionId: t,
                }),
                !0
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Failed to activate channel ",
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
          (i.closeChannel = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "closeDataChannel",
                connectionId: t,
              });
          }),
          (i.isActive = function () {
            return this.$4;
          }),
          (i.getVoipWasm = function () {
            return this.$1;
          }),
          (i.ping = function () {
            if (!this.$4) {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.setRemoveRelayPortOverride = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "setRemoveRelayPortOverride",
                enabled: t,
              });
          }),
          (i.setSctpTimeoutMs = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "setSctpTimeoutMs",
                ms: t,
              });
          }),
          (i.setRelayParkedTxIdleMs = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "setRelayParkedTxIdleMs",
                ms: t,
              });
          }),
          (i.updateIceRtt = function (t, n, r) {
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
          (i.joinThread = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              for (var e = 50, r = 0; r < e; r++) {
                var a = this.$1.tryJoinJsWorkerThread(this.$2);
                if (a === 0) return !0;
                yield new (k || (k = n("Promise")))(function (e) {
                  t.setTimeout(function () {
                    e();
                  }, 100);
                });
              }
              return (
                o("WALogger").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.initRingBuffer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!this.$4)
                return (
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Cannot init ring buffer - thread not active",
                      ])),
                  ),
                  !1
                );
              var e = this.$1,
                t = I,
                n = t + T;
              try {
                var r = yield o("WAWebAudioUtility").mallocWasmBuffer(n);
                if (r == null || r === 0)
                  return (
                    o("WALogger").WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [DCThread] Failed to allocate ring buffer",
                        ])),
                    ),
                    !1
                  );
                if (!this.$4)
                  return (yield o("WAWebAudioUtility").freeWasmBuffer(r), !1);
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
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [DCThread] C++ initSctpRingBuffer failed",
                        ])),
                    ),
                    yield o("WAWebAudioUtility").freeWasmBuffer(r),
                    !1);
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.shutdownRingBuffer = function () {
            var e = this.$5;
            if (e != null) {
              try {
                this.$1.shutdownSctpRingBuffer();
              } catch (e) {
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.freeRingBufferMemory = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.$5;
              if (e != null) {
                this.$5 = null;
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(e);
                } catch (e) {
                  o("WALogger").WARN(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.shutdown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$4) {
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [DCThread] Skip ring buffer free - join timed out",
                        ])),
                    ),
                  o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
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
          a
        );
      })();
    l.default = D;
  },
  98,
);
