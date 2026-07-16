__d(
  "WAWebVoipAudioCaptureSharedBufferWorklet",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebVoipSharedBufferCaptureProcessorConfig",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(t, n) {
      var r = t.type;
      if (r !== "sharedBufferReady")
        if (r === "resamplingConfigured")
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] resample ",
                "->",
                "Hz r=",
                "",
              ])),
            n,
            String(t.inputRate),
            String(t.targetRate),
            String(t.ratio),
          );
        else if (r === "overrunEnded")
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] overrun end ",
                " dropped ",
                "ms",
              ])),
            n,
            String(t.droppedFrames),
            String(t.durationMs),
          );
        else if (r === "diagnostics") {
          var a = t.overrunCount;
          typeof a == "number" &&
            a > 0 &&
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:",
                  "] Overruns: ",
                  ", available: ",
                  "/",
                  "",
                ])),
              n,
              a,
              String(t.availableSpace),
              String(t.bufferSize),
            );
          var i = t.fillMs;
          if (typeof i == "number") {
            var l =
              typeof t.audioWorkletTime == "number"
                ? t.audioWorkletTime.toFixed(2)
                : "n/a";
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:capture-skew] ",
                  " sab fill=",
                  "ms (",
                  "/",
                  " samples) totalFramesWritten=",
                  " workletTime=",
                  "s",
                ])),
              n,
              i.toFixed(1),
              String(t.bufferedSamples),
              String(t.bufferSize),
              String(t.totalFramesWritten),
              l,
            );
          }
        } else return !1;
      return !0;
    }
    var b = 8192,
      v = 8,
      S = (function () {
        function e() {
          var e = this;
          ((this.audioWorkletNode = null),
            (this.ringBufferPtr = null),
            (this.isProcessorReady = !1),
            (this.processorReadyResolvable = null),
            (this.mediaStreamSource = null),
            (this.workletPreloadPromise = null),
            (this.isWorkletPreloaded = !1),
            (this.preloadWorkletModule = function (t) {
              var n = r(
                "WAWebVoipSharedBufferCaptureProcessorConfig",
              ).module_url;
              if (n === "") {
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] Missing worklet module url, skipping preload",
                    ])),
                );
                return;
              }
              var a = t.audioWorklet
                .addModule(n)
                .then(function () {
                  ((e.isWorkletPreloaded = !0),
                    (e.workletPreloadPromise = null));
                })
                .catch(function (t) {
                  (o("WALogger").ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Worklet preload failed, will load during start: ",
                        "",
                      ])),
                    t,
                  ),
                    (e.isWorkletPreloaded = !1),
                    (e.workletPreloadPromise = null));
                });
              e.workletPreloadPromise = a;
            }));
        }
        var t = e.prototype;
        return (
          (t.startAudioCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = e.audioContext,
                  a = e.framesPerChunk,
                  i = e.mediaStreamSource;
                try {
                  var l = o("WAWebAudioUtility").getCachedWasmModule();
                  if (l == null)
                    throw r("err")(
                      "voip: [AV:SharedBuffer:Capture] WASM module not initialized",
                    );
                  var s = b,
                    u = s * Float32Array.BYTES_PER_ELEMENT + v;
                  this.ringBufferPtr =
                    yield o("WAWebAudioUtility").mallocWasmBuffer(u);
                  var c = this.ringBufferPtr;
                  if (c == null)
                    throw r("err")(
                      "voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer",
                    );
                  var d = l.GROWABLE_HEAP_U8();
                  if (
                    (d.fill(0, c, c + u),
                    this.workletPreloadPromise != null &&
                      (yield this.workletPreloadPromise),
                    !this.isWorkletPreloaded)
                  ) {
                    var m = r(
                      "WAWebVoipSharedBufferCaptureProcessorConfig",
                    ).module_url;
                    if (m === "")
                      throw r("err")(
                        "voip: [AV:SharedBuffer:Capture] Missing worklet module url",
                      );
                    yield n.audioWorklet.addModule(m);
                  }
                  this.audioWorkletNode = new AudioWorkletNode(
                    n,
                    "voip-shared-buffer-capture-processor",
                    { numberOfInputs: 1, numberOfOutputs: 0 },
                  );
                  var f = this.audioWorkletNode;
                  (f != null &&
                    (f.port.onmessage = function (e) {
                      var n = e.data;
                      if (!(typeof n != "object" || n == null))
                        if (n.type === "ready") {
                          var r;
                          ((t.isProcessorReady = !0),
                            (r = t.processorReadyResolvable) == null ||
                              r.resolve(),
                            (t.processorReadyResolvable = null));
                        } else C(n, "Capture");
                    }),
                    yield this.waitForProcessorReady());
                  var g = l.GROWABLE_HEAP_F32(),
                    h = g.buffer;
                  (f != null &&
                    f.port.postMessage({
                      type: "initSharedBuffer",
                      heapBuffer: h,
                      heapBufferOffset: c,
                      bufferSize: s,
                      targetSampleRate: e.sampleRate,
                    }),
                    (this.mediaStreamSource = i),
                    f != null && i.connect(f));
                  var y = window.performance.now(),
                    S = l.startAudioReaderThread(c, s, a),
                    R = window.performance.now() - y;
                  if (!S)
                    throw r("err")(
                      "voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread",
                    );
                  (f != null && f.port.postMessage({ type: "start" }),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Capture] capture started, [AV:capture-skew] startAudioReaderThread took ",
                          "ms",
                        ])),
                      R.toFixed(1),
                    ));
                } catch (e) {
                  throw (
                    o("WALogger").ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Capture] Failed to start capture: ",
                          "",
                        ])),
                      e,
                    ),
                    yield this.stopAudioCapture(),
                    r("err")(
                      "voip: [AV:SharedBuffer:Capture] Failed to start capture",
                    )
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.waitForProcessorReady = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this,
                t = 5e3;
              if (!this.isProcessorReady) {
                this.processorReadyResolvable = new (o(
                  "WAResolvable",
                ).Resolvable)();
                var n = window.setTimeout(function () {
                  e.processorReadyResolvable != null &&
                    (e.processorReadyResolvable.reject(
                      r("err")(
                        "voip: [AV:SharedBuffer:Capture] Processor failed to become ready within 5s",
                      ),
                    ),
                    (e.processorReadyResolvable = null));
                }, t);
                try {
                  var a;
                  yield (a = this.processorReadyResolvable) == null
                    ? void 0
                    : a.promise;
                } finally {
                  window.clearTimeout(n);
                }
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.stopAudioCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = o("WAWebAudioUtility").getCachedWasmModule();
                if (e != null)
                  try {
                    e.isAudioReaderThreadRunning() && e.stopAudioReaderThread();
                  } catch (e) {
                    o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Capture] reader stop err: ",
                          "",
                        ])),
                      e,
                    );
                  }
                if (
                  (this.audioWorkletNode != null &&
                    this.audioWorkletNode.port.postMessage({ type: "stop" }),
                  this.mediaStreamSource != null)
                ) {
                  try {
                    this.mediaStreamSource.disconnect();
                  } catch (e) {}
                  this.mediaStreamSource = null;
                }
                this.audioWorkletNode != null &&
                  (this.audioWorkletNode.disconnect(),
                  (this.audioWorkletNode = null));
                var t = this.ringBufferPtr;
                if (t != null) {
                  try {
                    yield o("WAWebAudioUtility").freeWasmBuffer(t);
                  } catch (e) {
                    o("WALogger").WARN(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedBuffer:Capture] Error freeing ring buffer: ",
                          "",
                        ])),
                      e,
                    );
                  }
                  this.ringBufferPtr = null;
                }
                ((this.isProcessorReady = !1),
                  (this.processorReadyResolvable = null),
                  (this.isWorkletPreloaded = !1),
                  (this.workletPreloadPromise = null));
              } catch (e) {
                o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] Cleanup error: ",
                      "",
                    ])),
                  e,
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.reconnect = function (t) {
            if (this.mediaStreamSource != null)
              try {
                this.mediaStreamSource.disconnect();
              } catch (e) {}
            ((this.mediaStreamSource = t),
              this.audioWorkletNode != null &&
                (t.connect(this.audioWorkletNode),
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:Capture] Reconnected to new stream",
                    ])),
                )));
          }),
          e
        );
      })();
    ((l.handleSharedBufferWorkletDiagnostics = C),
      (l.WAWebVoipAudioCaptureSharedBufferWorklet = S));
  },
  98,
);
