__d(
  "WAWebVoipVideoDesktopCapture",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebNoop",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipAudioCaptureSharedBufferWorklet",
    "WAWebVoipPthreadHardening",
    "WAWebVoipScreenShareSurfaceState",
    "WAWebVoipSharedBufferCaptureProcessorConfig",
    "WAWebVoipSharedBufferRingRelease",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoCaptureBase",
    "asyncToGeneratorRuntime",
    "err",
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
      R = 8192,
      L = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "desktop"),
            (e.captureParams = null),
            (e.desktopStream = null),
            (e.activeDesktopStream = null),
            (e.systemAudioContext = null),
            (e.systemAudioSourceNode = null),
            (e.systemAudioWorkletNode = null),
            (e.systemAudioSabBuffer = null),
            (e.systemAudioTracks = []),
            (e.$WAWebVoipVideoDesktopCaptureImpl$p_1 = null),
            (e.$WAWebVoipVideoDesktopCaptureImpl$p_2 = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.preflightAcquireDesktopStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                return (
                  (this.desktopStream = {
                    streamPromise: o("WAWebBackendApi").frontendSendAndReceive(
                      "voipAcquireMediaStream",
                      {
                        type: "desktop",
                        params:
                          (t = o("WAWebVoipVideoCameraCapture")
                            .WAWebVoipVideoCameraCapture.captureParams) != null
                            ? t
                            : void 0,
                        targetWindow: e,
                      },
                    ),
                  }),
                  this.desktopStream.streamPromise
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.startDesktopCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a,
                  i,
                  l = t.height,
                  m = t.maxFps,
                  p = t.width;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startDesktopCapture] w=",
                      " h=",
                      " fps=",
                      "",
                    ])),
                  p,
                  l,
                  m,
                );
                var _ = yield this.$WAWebVoipVideoDesktopCaptureImpl$p_3();
                if (_ == null) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] stream failed, canceling",
                      ])),
                  ),
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_4());
                  return;
                }
                var f = _.getVideoTracks().at(0),
                  g = f == null ? void 0 : f.getSettings(),
                  h = (a = g == null ? void 0 : g.width) != null ? a : p,
                  y = (i = g == null ? void 0 : g.height) != null ? i : l;
                ((h !== p || y !== l) &&
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] actual=",
                        "x",
                        " req=",
                        "x",
                        "",
                      ])),
                    h,
                    y,
                    p,
                    l,
                  ),
                  (this.captureParams = { width: h, height: y, maxFps: m }));
                var C = _.clone();
                if (
                  (yield this.__startCapture({
                    getMediaStream: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          return C;
                        },
                      );
                      function t() {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    onVideoDataFnType: "onDesktopCaptureDataFromJs",
                    width: h,
                    height: y,
                    maxFps: m,
                  }),
                  this.captureInitState !==
                    o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready)
                ) {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] capture pipeline not ready, canceling share",
                      ])),
                  ),
                    this.releaseDesktopStream(),
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_4());
                  return;
                }
                var b = C.getAudioTracks();
                if (b.length > 0)
                  try {
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_5(C);
                  } catch (e) {
                    (yield this.$WAWebVoipVideoDesktopCaptureImpl$p_6(),
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[AV:systemAudio] failed to start",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("system-audio-start-failed"));
                  }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t,
                n,
                r,
                a = this;
              if (this.desktopStream == null) {
                var i = this.activeDesktopStream,
                  l = i == null ? void 0 : i.getVideoTracks().at(0);
                if (i != null && (l == null ? void 0 : l.readyState) === "live")
                  return (
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startDesktopCapture] reusing session stream across driver restart",
                        ])),
                    ),
                    i
                  );
              }
              (this.releaseDesktopStream(),
                this.desktopStream ||
                  (yield this.preflightAcquireDesktopStream()));
              var s =
                (e = yield (t = this.desktopStream) == null
                  ? void 0
                  : t.streamPromise) != null
                  ? e
                  : null;
              if (((this.desktopStream = null), s == null)) return null;
              this.activeDesktopStream = s;
              var u =
                (n = s.getVideoTracks().at(0)) == null
                  ? void 0
                  : n.getSettings();
              return (
                o("WAWebVoipScreenShareSurfaceState").setSelfScreenShareSurface(
                  u == null ? void 0 : u.displaySurface,
                ),
                (r = s.getVideoTracks().at(0)) == null ||
                  r.addEventListener("ended", function () {
                    (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startDesktopCapture] stream ended, stopping",
                        ])),
                    ),
                      a.$WAWebVoipVideoDesktopCaptureImpl$p_4());
                  }),
                s
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              (e == null ? void 0 : e.type) === "web" &&
                (yield e.stopScreenShare());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.releaseDesktopStream = function () {
            var e = this.activeDesktopStream;
            if (e != null) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:releaseDesktopStream] releasing screen-share stream",
                  ])),
              );
              for (var t of e.getTracks()) t.stop();
              ((this.activeDesktopStream = null),
                o("WAWebVoipScreenShareSurfaceState").setSelfScreenShareSurface(
                  null,
                ));
            }
          }),
          (i.releasePreflightDesktopStream = function () {
            var e = this.desktopStream;
            e != null &&
              ((this.desktopStream = null),
              e.streamPromise
                .then(function (e) {
                  if (e != null) {
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:releasePreflightDesktopStream] releasing unconsumed screen-share stream",
                        ])),
                    );
                    for (var t of e.getTracks()) t.stop();
                  }
                })
                .catch(r("WAWebNoop")));
          }),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.getAudioTracks();
                if (t.length !== 0) {
                  this.systemAudioTracks = t;
                  var a = o(
                      "WAWebVoipAudioCaptureAndPlayback",
                    ).getCaptureParams(),
                    i = a.framesPerChunk,
                    l = a.sampleRate,
                    s = R;
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:systemAudio] starting capture",
                      ])),
                  );
                  var u = o("WAWebAudioUtility").getCachedWasmModule();
                  if (!u) throw r("err")("WASM module not initialized");
                  var c = new AudioContext({ sampleRate: l });
                  this.systemAudioContext = c;
                  var d = c.createMediaStreamSource(e);
                  this.systemAudioSourceNode = d;
                  var m = 8,
                    p = m + s * Float32Array.BYTES_PER_ELEMENT,
                    _ = yield o("WAWebAudioUtility").mallocWasmBuffer(p);
                  this.systemAudioSabBuffer = _;
                  var f = u.GROWABLE_HEAP_U8();
                  f.fill(0, _, _ + p);
                  var y = r(
                    "WAWebVoipSharedBufferCaptureProcessorConfig",
                  ).module_url;
                  if (y === "")
                    throw r("err")(
                      "voip: [AV:SystemAudio] Missing worklet module url",
                    );
                  yield c.audioWorklet.addModule(y);
                  var C = new AudioWorkletNode(
                    c,
                    "voip-shared-buffer-capture-processor",
                    { numberOfInputs: 1, numberOfOutputs: 0 },
                  );
                  this.systemAudioWorkletNode = C;
                  var b = new (o("WAResolvable").Resolvable)();
                  this.$WAWebVoipVideoDesktopCaptureImpl$p_1 = b;
                  var v = new (S || (S = n("Promise")))(function (e) {
                      C.port.onmessage = function (t) {
                        var n = t.data;
                        typeof n != "object" ||
                          n == null ||
                          (n.type === "ready"
                            ? e()
                            : n.type === "stopped"
                              ? b.resolve()
                              : o(
                                  "WAWebVoipAudioCaptureSharedBufferWorklet",
                                ).handleSharedBufferWorkletDiagnostics(
                                  n,
                                  "SystemAudio",
                                ));
                      };
                    }),
                    L = yield o("WAPromiseDelays").withTimeout(
                      v,
                      5e3,
                      o("WAWebBoolFunc").returnFalse,
                    );
                  if (L === !1)
                    throw r("err")(
                      "AudioWorklet processor not ready within 5s",
                    );
                  var E = u.GROWABLE_HEAP_F32();
                  (C.port.postMessage({
                    type: "initSharedBuffer",
                    heapBuffer: E.buffer,
                    heapBufferOffset: _,
                    bufferSize: s,
                    targetSampleRate: l,
                  }),
                    (this.$WAWebVoipVideoDesktopCaptureImpl$p_2 = !0),
                    d.connect(C));
                  var k = u.startSystemAudioReaderThread(_, s, i);
                  if (!k)
                    throw r("err")(
                      "Failed to start system audio reader thread",
                    );
                  (C.port.postMessage({ type: "start" }),
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:systemAudio] capture started",
                        ])),
                    ));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.systemAudioWorkletNode,
                t = this.$WAWebVoipVideoDesktopCaptureImpl$p_7();
              if (e) {
                (e.port.postMessage({ type: "stop" }),
                  e.disconnect(),
                  (this.systemAudioWorkletNode = null));
                try {
                  var n;
                  (n = o("WAWebAudioUtility").getCachedWasmModule()) == null ||
                    n.stopSystemAudioReaderThread();
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:systemAudio] reader stop failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("system-audio-reader-stop-failed");
                }
              }
              for (var a of this.systemAudioTracks) a.stop();
              ((this.systemAudioTracks = []),
                this.systemAudioSourceNode &&
                  (this.systemAudioSourceNode.disconnect(),
                  (this.systemAudioSourceNode = null)));
              var i = null;
              this.systemAudioContext &&
                ((i = this.systemAudioContext.close().catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:systemAudio] context close failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("system-audio-context-close-failed");
                })),
                (this.systemAudioContext = null));
              var l = this.systemAudioSabBuffer;
              (l != null &&
                ((this.systemAudioSabBuffer = null),
                yield this.$WAWebVoipVideoDesktopCaptureImpl$p_8(l, t, i)),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:systemAudio] capture stopped",
                    ])),
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_7 = function () {
            var e,
              t = this.$WAWebVoipVideoDesktopCaptureImpl$p_2
                ? (e = this.$WAWebVoipVideoDesktopCaptureImpl$p_1) == null
                  ? void 0
                  : e.promise
                : null;
            return (
              (this.$WAWebVoipVideoDesktopCaptureImpl$p_1 = null),
              (this.$WAWebVoipVideoDesktopCaptureImpl$p_2 = !1),
              t
            );
          }),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a) {
                var i =
                  t != null && a != null
                    ? (S || (S = n("Promise"))).race([t, a])
                    : t;
                try {
                  yield o(
                    "WAWebVoipSharedBufferRingRelease",
                  ).freeRingBufferAfterWorkletStop(e, i, "SystemAudio");
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:systemAudio] buffer free failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("system-audio-buffer-free-failed");
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.__cleanup = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.desktopStream;
              (yield this.$WAWebVoipVideoDesktopCaptureImpl$p_6(),
                yield t.prototype.__cleanup.call(this),
                (!o(
                  "WAWebVoipPthreadHardening",
                ).isVoipWorkerLifecycleHardeningEnabled() ||
                  this.desktopStream === e) &&
                  (this.desktopStream = null));
            });
            function r() {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          a
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      E = new L();
    l.WAWebVoipVideoDesktopCapture = E;
  },
  98,
);
