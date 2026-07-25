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
    "WAWebVoipSharedBufferCaptureProcessorConfig",
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
      S = 8192,
      R = (function (t) {
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
                var _ = yield this.$WAWebVoipVideoDesktopCaptureImpl$p_1();
                if (_ == null) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] stream failed, canceling",
                      ])),
                  ),
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_2());
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
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_2());
                  return;
                }
                var b = C.getAudioTracks();
                if (b.length > 0)
                  try {
                    yield this.$WAWebVoipVideoDesktopCaptureImpl$p_3(C);
                  } catch (e) {
                    (yield this.$WAWebVoipVideoDesktopCaptureImpl$p_4(),
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
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t,
                n,
                r = this;
              if (this.desktopStream == null) {
                var a = this.activeDesktopStream,
                  i = a == null ? void 0 : a.getVideoTracks().at(0);
                if (a != null && (i == null ? void 0 : i.readyState) === "live")
                  return (
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startDesktopCapture] reusing session stream across driver restart",
                        ])),
                    ),
                    a
                  );
              }
              (this.releaseDesktopStream(),
                this.desktopStream ||
                  (yield this.preflightAcquireDesktopStream()));
              var l =
                (e = yield (t = this.desktopStream) == null
                  ? void 0
                  : t.streamPromise) != null
                  ? e
                  : null;
              return (
                (this.desktopStream = null),
                l == null
                  ? null
                  : ((this.activeDesktopStream = l),
                    (n = l.getVideoTracks().at(0)) == null ||
                      n.addEventListener("ended", function () {
                        (o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[AV:startDesktopCapture] stream ended, stopping",
                            ])),
                        ),
                          r.$WAWebVoipVideoDesktopCaptureImpl$p_2());
                      }),
                    l)
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_2 = (function () {
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
              this.activeDesktopStream = null;
            }
          }),
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_3 = (function () {
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
                    s = S;
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
                  var h = u.GROWABLE_HEAP_U8();
                  h.fill(0, _, _ + p);
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
                  var b = new (v || (v = n("Promise")))(function (e) {
                      C.port.onmessage = function (t) {
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
                    R = yield o("WAPromiseDelays").withTimeout(
                      b,
                      5e3,
                      o("WAWebBoolFunc").returnFalse,
                    );
                  if (R === !1)
                    throw r("err")(
                      "AudioWorklet processor not ready within 5s",
                    );
                  var L = u.GROWABLE_HEAP_F32();
                  (C.port.postMessage({
                    type: "initSharedBuffer",
                    heapBuffer: L.buffer,
                    heapBufferOffset: _,
                    bufferSize: s,
                    targetSampleRate: l,
                  }),
                    d.connect(C));
                  var E = u.startSystemAudioReaderThread(_, s, i);
                  if (!E)
                    throw r("err")(
                      "Failed to start system audio reader thread",
                    );
                  (C.port.postMessage({ type: "start" }),
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.$WAWebVoipVideoDesktopCaptureImpl$p_4 = (function () {
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
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
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
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:systemAudio] buffer free failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("system-audio-buffer-free-failed");
                }
                this.systemAudioSabBuffer = null;
              }
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
              (yield this.$WAWebVoipVideoDesktopCaptureImpl$p_4(),
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
      L = new R();
    l.WAWebVoipVideoDesktopCapture = L;
  },
  98,
);
