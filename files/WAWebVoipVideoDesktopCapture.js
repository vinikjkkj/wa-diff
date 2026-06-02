__d(
  "WAWebVoipVideoDesktopCapture",
  [
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
      y = 8192,
      C = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.preflightAcquireDesktopStream = async function () {
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
          }),
          (a.startDesktopCapture = async function (n) {
            var t,
              a,
              i,
              l = n.height,
              m = n.maxFps,
              p = n.width;
            (o("WALogger").LOG(
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
            ),
              this.desktopStream ||
                (await this.preflightAcquireDesktopStream()));
            var _ = await ((t = this.desktopStream) == null
              ? void 0
              : t.streamPromise);
            if (((this.desktopStream = null), _ == null)) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startDesktopCapture] stream failed, canceling",
                  ])),
              );
              var f = await o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              (f == null ? void 0 : f.type) === "web" &&
                (await f.stopScreenShare());
              return;
            }
            var g = _.getVideoTracks().at(0),
              h = g == null ? void 0 : g.getSettings(),
              y = (a = h == null ? void 0 : h.width) != null ? a : p,
              C = (i = h == null ? void 0 : h.height) != null ? i : l;
            ((y !== p || C !== l) &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startDesktopCapture] actual=",
                    "x",
                    " req=",
                    "x",
                    "",
                  ])),
                y,
                C,
                p,
                l,
              ),
              (this.captureParams = { width: y, height: C, maxFps: m }),
              g == null ||
                g.addEventListener("ended", async function () {
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] stream ended, stopping",
                      ])),
                  );
                  var e = await o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  (e == null ? void 0 : e.type) === "web" &&
                    (await e.stopScreenShare());
                }),
              await this.__startCapture({
                getMediaStream: async function () {
                  return _;
                },
                onVideoDataFnType: "onDesktopCaptureDataFromJs",
                width: y,
                height: C,
                maxFps: m,
              }));
            var b = _.getAudioTracks();
            if (b.length > 0)
              try {
                await this.$WAWebVoipVideoDesktopCaptureImpl$p_1(_);
              } catch (e) {
                (await this.$WAWebVoipVideoDesktopCaptureImpl$p_2(),
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
          }),
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_1 = async function (t) {
            var e = t.getAudioTracks();
            if (e.length !== 0) {
              this.systemAudioTracks = e;
              var n = o("WAWebVoipAudioCaptureAndPlayback").getCaptureParams(),
                a = n.framesPerChunk,
                i = n.sampleRate,
                l = y;
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:systemAudio] starting capture",
                  ])),
              );
              var s = o("WAWebAudioUtility").getCachedWasmModule();
              if (!s) throw r("err")("WASM module not initialized");
              var u = new AudioContext({ sampleRate: i });
              this.systemAudioContext = u;
              var c = u.createMediaStreamSource(t);
              this.systemAudioSourceNode = c;
              var d = 8,
                _ = d + l * Float32Array.BYTES_PER_ELEMENT,
                f = await o("WAWebAudioUtility").mallocWasmBuffer(_);
              this.systemAudioSabBuffer = f;
              var g = s.GROWABLE_HEAP_U8();
              g.fill(0, f, f + _);
              var h = o(
                  "WAWebVoipAudioCaptureSharedBufferWorklet",
                ).getSharedBufferCaptureProcessorCode(),
                C = new Blob([h], { type: "application/javascript" }),
                b = URL.createObjectURL(C);
              try {
                await u.audioWorklet.addModule(b);
              } finally {
                URL.revokeObjectURL(b);
              }
              var v = new AudioWorkletNode(
                u,
                "voip-shared-buffer-capture-processor",
                { numberOfInputs: 1, numberOfOutputs: 0 },
              );
              this.systemAudioWorkletNode = v;
              var S = new Promise(function (e) {
                  v.port.onmessage = function (t) {
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
                R = await o("WAPromiseDelays").withTimeout(
                  S,
                  5e3,
                  o("WAWebBoolFunc").returnFalse,
                );
              if (R === !1)
                throw r("err")("AudioWorklet processor not ready within 5s");
              var L = s.GROWABLE_HEAP_F32();
              (v.port.postMessage({
                type: "initSharedBuffer",
                heapBuffer: L.buffer,
                heapBufferOffset: f,
                bufferSize: l,
                targetSampleRate: i,
              }),
                c.connect(v));
              var E = s.startSystemAudioReaderThread(f, l, a);
              if (!E)
                throw r("err")("Failed to start system audio reader thread");
              (v.port.postMessage({ type: "start" }),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:systemAudio] capture started",
                    ])),
                ));
            }
          }),
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_2 = async function () {
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
              this.systemAudioContext)
            ) {
              try {
                await this.systemAudioContext.close();
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:systemAudio] context close failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("system-audio-context-close-failed");
              }
              this.systemAudioContext = null;
            }
            if (this.systemAudioSabBuffer != null) {
              try {
                await o("WAWebAudioUtility").freeWasmBuffer(
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
          }),
          (a.__cleanup = async function () {
            (await this.$WAWebVoipVideoDesktopCaptureImpl$p_2(),
              await t.prototype.__cleanup.call(this),
              (this.desktopStream = null));
          }),
          n
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      b = new C();
    l.WAWebVoipVideoDesktopCapture = b;
  },
  98,
);
