__d(
  "WAWebVoipVideoDesktopCapture",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipAudioCaptureSharedBufferWorklet",
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
      C = 8192,
      b = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "desktop"),
            (e.captureParams = null),
            (e.desktopStream = null),
            (e.systemAudioContext = null),
            (e.systemAudioSourceNode = null),
            (e.systemAudioWorkletNode = null),
            (e.systemAudioSabBuffer = null),
            (e.systemAudioTracks = []),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.preflightAcquireDesktopStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              return (
                (this.desktopStream = {
                  streamPromise: o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    {
                      type: "desktop",
                      params:
                        (e = o("WAWebVoipVideoCameraCapture")
                          .WAWebVoipVideoCameraCapture.captureParams) != null
                          ? e
                          : void 0,
                    },
                  ),
                }),
                this.desktopStream.streamPromise
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.startDesktopCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a,
                  i,
                  l,
                  m = t.height,
                  p = t.maxFps,
                  _ = t.width;
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startDesktopCapture] w=",
                      " h=",
                      " fps=",
                      "",
                    ])),
                  _,
                  m,
                  p,
                ),
                  this.desktopStream ||
                    (yield this.preflightAcquireDesktopStream()));
                var f = yield (a = this.desktopStream) == null
                  ? void 0
                  : a.streamPromise;
                if (((this.desktopStream = null), f == null)) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] stream failed, canceling",
                      ])),
                  );
                  var g = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  (g == null ? void 0 : g.type) === "web" &&
                    (yield g.stopScreenShare());
                  return;
                }
                var h = f.getVideoTracks().at(0),
                  y = h == null ? void 0 : h.getSettings(),
                  C = (i = y == null ? void 0 : y.width) != null ? i : _,
                  b = (l = y == null ? void 0 : y.height) != null ? l : m;
                ((C !== _ || b !== m) &&
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] actual=",
                        "x",
                        " req=",
                        "x",
                        "",
                      ])),
                    C,
                    b,
                    _,
                    m,
                  ),
                  (this.captureParams = { width: C, height: b, maxFps: p }),
                  h == null ||
                    h.addEventListener(
                      "ended",
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[AV:startDesktopCapture] stream ended, stopping",
                              ])),
                          );
                          var e = yield o(
                            "WAWebVoipStackInterface",
                          ).getVoipStackInterface();
                          (e == null ? void 0 : e.type) === "web" &&
                            (yield e.stopScreenShare());
                        },
                      ),
                    ),
                  yield this.__startCapture({
                    getMediaStream: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          return f;
                        },
                      );
                      function t() {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    onVideoDataFnType: "onDesktopCaptureDataFromJs",
                    width: C,
                    height: b,
                    maxFps: p,
                  }));
                var v = f.getAudioTracks();
                if (v.length > 0)
                  try {
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_1(f);
                  } catch (e) {
                    (yield this.$WAWebVoipVideoDesktopCaptureImpl$p_2(),
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
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_1 = (function () {
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
                    s = C;
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:systemAudio] starting capture",
                      ])),
                  );
                  var u = o("WAWebAudioUtility").getCachedWasmModule();
                  if (!u) throw r("err")("WASM module not initialized");
                  var c = new AudioContext({ sampleRate: l });
                  this.systemAudioContext = c;
                  var d = c.createMediaStreamSource(e);
                  this.systemAudioSourceNode = d;
                  var _ = 8,
                    f = _ + s * Float32Array.BYTES_PER_ELEMENT,
                    g = yield o("WAWebAudioUtility").mallocWasmBuffer(f);
                  this.systemAudioSabBuffer = g;
                  var h = u.GROWABLE_HEAP_U8();
                  h.fill(0, g, g + f);
                  var b = o(
                      "WAWebVoipAudioCaptureSharedBufferWorklet",
                    ).getSharedBufferCaptureProcessorCode(),
                    v = new Blob([b], { type: "application/javascript" }),
                    S = URL.createObjectURL(v);
                  try {
                    yield c.audioWorklet.addModule(S);
                  } finally {
                    URL.revokeObjectURL(S);
                  }
                  var R = new AudioWorkletNode(
                    c,
                    "voip-shared-buffer-capture-processor",
                    { numberOfInputs: 1, numberOfOutputs: 0 },
                  );
                  this.systemAudioWorkletNode = R;
                  var L = new (y || (y = n("Promise")))(function (e) {
                      R.port.onmessage = function (t) {
                        var n = t.data;
                        typeof n != "object" ||
                          n == null ||
                          (n.type === "ready"
                            ? e()
                            : o(
                                "WAWebVoipAudioCaptureSharedBufferWorklet",
                              ).handleSharedBufferWorkletDiagnostics(
                                n,
                                "SystemAudio",
                              ));
                      };
                    }),
                    E = yield o("WAPromiseDelays").withTimeout(
                      L,
                      5e3,
                      o("WAWebBoolFunc").returnFalse,
                    );
                  if (E === !1)
                    throw r("err")(
                      "AudioWorklet processor not ready within 5s",
                    );
                  var k = u.GROWABLE_HEAP_F32();
                  (R.port.postMessage({
                    type: "initSharedBuffer",
                    heapBuffer: k.buffer,
                    heapBufferOffset: g,
                    bufferSize: s,
                    targetSampleRate: l,
                  }),
                    d.connect(R));
                  var I = u.startSystemAudioReaderThread(g, s, i);
                  if (!I)
                    throw r("err")(
                      "Failed to start system audio reader thread",
                    );
                  (R.port.postMessage({ type: "start" }),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.systemAudioWorkletNode;
              if (e) {
                (e.port.postMessage({ type: "stop" }),
                  e.disconnect(),
                  (this.systemAudioWorkletNode = null));
                try {
                  var t;
                  (t = o("WAWebAudioUtility").getCachedWasmModule()) == null ||
                    t.stopSystemAudioReaderThread();
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:systemAudio] reader stop failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("system-audio-reader-stop-failed");
                }
              }
              for (var n of this.systemAudioTracks) n.stop();
              if (
                ((this.systemAudioTracks = []),
                this.systemAudioSourceNode &&
                  (this.systemAudioSourceNode.disconnect(),
                  (this.systemAudioSourceNode = null)),
                this.systemAudioContext &&
                  (this.systemAudioContext.close().catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:systemAudio] context close failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("system-audio-context-close-failed");
                  }),
                  (this.systemAudioContext = null)),
                this.systemAudioSabBuffer != null)
              ) {
                try {
                  yield o("WAWebAudioUtility").freeWasmBuffer(
                    this.systemAudioSabBuffer,
                  );
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:systemAudio] buffer free failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("system-audio-buffer-free-failed");
                }
                this.systemAudioSabBuffer = null;
              }
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:systemAudio] capture stopped",
                  ])),
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.__cleanup = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield this.$WAWebVoipVideoDesktopCaptureImpl$p_2(),
                yield t.prototype.__cleanup.call(this),
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
      v = new b();
    l.WAWebVoipVideoDesktopCapture = v;
  },
  98,
);
