__d(
  "WAWebVoipVideoDesktopCapture",
  [
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
    "WAWebVoipSharedBufferRingQuarantine",
    "WAWebVoipSharedBufferRingRelease",
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
      y,
      C,
      b,
      v,
      S = 8192,
      R = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.preflightAcquireDesktopStream = async function (t) {
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
                    targetWindow: t,
                  },
                ),
              }),
              this.desktopStream.streamPromise
            );
          }),
          (a.startDesktopCapture = async function (n) {
            var t,
              a,
              i = n.height,
              l = n.maxFps,
              m = n.width;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[AV:startDesktopCapture] w=",
                  " h=",
                  " fps=",
                  "",
                ])),
              m,
              i,
              l,
            );
            var p = await this.$WAWebVoipVideoDesktopCaptureImpl$p_3();
            if (p == null) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startDesktopCapture] stream failed, canceling",
                  ])),
              ),
                await this.$WAWebVoipVideoDesktopCaptureImpl$p_4());
              return;
            }
            var _ = p.getVideoTracks().at(0),
              f = _ == null ? void 0 : _.getSettings(),
              g = (t = f == null ? void 0 : f.width) != null ? t : m,
              h = (a = f == null ? void 0 : f.height) != null ? a : i;
            ((g !== m || h !== i) &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startDesktopCapture] actual=",
                    "x",
                    " req=",
                    "x",
                    "",
                  ])),
                g,
                h,
                m,
                i,
              ),
              (this.captureParams = { width: g, height: h, maxFps: l }));
            var y = p.clone();
            if (
              (await this.__startCapture({
                getMediaStream: async function () {
                  return y;
                },
                onVideoDataFnType: "onDesktopCaptureDataFromJs",
                width: g,
                height: h,
                maxFps: l,
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
                await this.$WAWebVoipVideoDesktopCaptureImpl$p_4());
              return;
            }
            var C = y.getAudioTracks();
            if (C.length > 0)
              try {
                await this.$WAWebVoipVideoDesktopCaptureImpl$p_5(y);
              } catch (e) {
                (await this.$WAWebVoipVideoDesktopCaptureImpl$p_6(),
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
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_3 = async function () {
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
                (await this.preflightAcquireDesktopStream()));
            var s =
              (e = await ((t = this.desktopStream) == null
                ? void 0
                : t.streamPromise)) != null
                ? e
                : null;
            if (((this.desktopStream = null), s == null)) return null;
            this.activeDesktopStream = s;
            var u =
              (n = s.getVideoTracks().at(0)) == null ? void 0 : n.getSettings();
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
          }),
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_4 = async function () {
            var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
            (e == null ? void 0 : e.type) === "web" &&
              (await e.stopScreenShare());
          }),
          (a.releaseDesktopStream = function () {
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
          (a.releasePreflightDesktopStream = function () {
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
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_5 = async function (t) {
            var e = t.getAudioTracks();
            if (e.length !== 0) {
              this.systemAudioTracks = e;
              var n = o("WAWebVoipAudioCaptureAndPlayback").getCaptureParams(),
                a = n.framesPerChunk,
                i = n.sampleRate,
                l = S;
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
                m = d + l * Float32Array.BYTES_PER_ELEMENT,
                p = await o("WAWebAudioUtility").mallocWasmBuffer(m);
              this.systemAudioSabBuffer = p;
              var _ = s.GROWABLE_HEAP_U8();
              _.fill(0, p, p + m);
              var f = r(
                "WAWebVoipSharedBufferCaptureProcessorConfig",
              ).module_url;
              if (f === "")
                throw r("err")(
                  "voip: [AV:SystemAudio] Missing worklet module url",
                );
              await u.audioWorklet.addModule(f);
              var y = new AudioWorkletNode(
                u,
                "voip-shared-buffer-capture-processor",
                { numberOfInputs: 1, numberOfOutputs: 0 },
              );
              this.systemAudioWorkletNode = y;
              var C = new (o("WAResolvable").Resolvable)();
              this.$WAWebVoipVideoDesktopCaptureImpl$p_1 = C;
              var b = new Promise(function (e) {
                  y.port.onmessage = function (t) {
                    var n = t.data;
                    typeof n != "object" ||
                      n == null ||
                      (n.type === "ready"
                        ? e()
                        : n.type === "stopped"
                          ? C.resolve()
                          : o(
                              "WAWebVoipAudioCaptureSharedBufferWorklet",
                            ).handleSharedBufferWorkletDiagnostics(
                              n,
                              "SystemAudio",
                            ));
                  };
                }),
                v = await o("WAPromiseDelays").withTimeout(
                  b,
                  5e3,
                  o("WAWebBoolFunc").returnFalse,
                );
              if (v === !1)
                throw r("err")("AudioWorklet processor not ready within 5s");
              var R = s.GROWABLE_HEAP_F32();
              (y.port.postMessage({
                type: "initSharedBuffer",
                heapBuffer: R.buffer,
                heapBufferOffset: p,
                bufferSize: l,
                targetSampleRate: i,
                doorbellOffset: s.getAudioDoorbellPtr(),
                doorbellChunkSamples: a,
              }),
                (this.$WAWebVoipVideoDesktopCaptureImpl$p_2 = !0),
                c.connect(y));
              var L = s.startSystemAudioReaderThread(p, l, a);
              if (!L)
                throw r("err")("Failed to start system audio reader thread");
              (o(
                "WAWebVoipSharedBufferRingQuarantine",
              ).releaseHeldSharedBufferRings("system", p),
                y.port.postMessage({ type: "start" }),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:systemAudio] capture started",
                    ])),
                ));
            }
          }),
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_6 = async function () {
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
              await this.$WAWebVoipVideoDesktopCaptureImpl$p_8(l, t, i)),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:systemAudio] capture stopped",
                  ])),
              ));
          }),
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_7 = function () {
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
          (a.$WAWebVoipVideoDesktopCaptureImpl$p_8 = async function (t, n, a) {
            var e = n != null && a != null ? Promise.race([n, a]) : n;
            try {
              await o(
                "WAWebVoipSharedBufferRingRelease",
              ).freeRingBufferAfterWorkletStop(t, e, "SystemAudio");
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
          }),
          (a.__cleanup = async function () {
            var e = this.desktopStream;
            (await this.$WAWebVoipVideoDesktopCaptureImpl$p_6(),
              await t.prototype.__cleanup.call(this),
              (!o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled() ||
                this.desktopStream === e) &&
                (this.desktopStream = null));
          }),
          n
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      L = new R();
    l.WAWebVoipVideoDesktopCapture = L;
  },
  98,
);
