__d(
  "WAWebVoipSctpDataChannelThread",
  [
    "WALogger",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipMainThreadLockODS",
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
      k = 262144,
      I = 8,
      T = (function () {
        function n(t) {
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
        n.create = async function (t) {
          var e = t === void 0 ? {} : t,
            r = e.initRing,
            a = r === void 0 ? !0 : r;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Creating pthread for DC I/O",
              ])),
          );
          var i =
              await o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              ),
            l = new n(i);
          return (a && (await l.ensureRingBuffer()), l);
        };
        var a = n.prototype;
        return (
          (a.ensureRingBuffer = function () {
            var e = this;
            return this.$7
              ? Promise.resolve(!1)
              : this.$5 != null
                ? Promise.resolve(!0)
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
          (a.transferChannel = function (t) {
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
          (a.activateChannel = function (t) {
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
          (a.ping = function () {
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
          (a.setRelayParkedTxIdleMs = function (t) {
            this.$4 &&
              this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "setRelayParkedTxIdleMs",
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
          (a.joinThread = async function () {
            for (var e = 50, n = 0; n < e; n++) {
              var r = this.$1.tryJoinJsWorkerThread(this.$2);
              if (r === 0) return !0;
              await new Promise(function (e) {
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
          }),
          (a.initRingBuffer = async function () {
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
              t = k,
              n = t + I;
            try {
              var r,
                a,
                i = await o("WAWebAudioUtility").mallocWasmBuffer(n);
              if (i == null || i === 0)
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
                return (await o("WAWebAudioUtility").freeWasmBuffer(i), !1);
              var l = e.GROWABLE_HEAP_U8();
              l.fill(0, i, i + n);
              var s = e.initSctpRingBuffer(i, t);
              if (!s)
                return (
                  o("WALogger").WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] C++ initSctpRingBuffer failed",
                      ])),
                  ),
                  await o("WAWebAudioUtility").freeWasmBuffer(i),
                  !1
                );
              this.$5 = i;
              var u =
                ((r = (a = e).isSctpRingBufferWakeOnWriteEnabled) == null
                  ? void 0
                  : r.call(a)) === !0;
              return (
                this.worker.postMessage({
                  type: "cmd",
                  cmd: "jsWorkerCmd",
                  jsWorkerCmd: "initRingBuffer",
                  heapBuffer: l.buffer,
                  heapBufferOffset: i,
                  dataSize: t,
                  wakeOnWrite: u,
                }),
                !0
              );
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
                  await this.freeRingBufferMemory()),
                !1
              );
            }
          }),
          (a.shutdownRingBuffer = function () {
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
          (a.freeRingBufferMemory = async function () {
            var e = this.$5;
            if (e != null) {
              this.$5 = null;
              try {
                await o("WAWebAudioUtility").freeWasmBuffer(e);
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
          }),
          (a.shutdown = async function () {
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
              var e = await this.joinThread();
              (e
                ? await this.freeRingBufferMemory()
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
          }),
          n
        );
      })();
    function D(e) {
      return e;
    }
    l.default = T;
  },
  98,
);
