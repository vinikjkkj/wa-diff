__d(
  "WAWebVoipAudioPlaybackBase",
  [
    "$InternalEnum",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebDebounce",
    "WAWebUA",
    "WAWebVoipAudioPlaybackScriptProcessor",
    "WAWebVoipAudioPlaybackSharedBufferWorklet",
    "WAWebVoipAudioPlaybackWorklet",
    "WAWebVoipPerfOptimizations",
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
      I,
      T = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      D = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      }),
      x = (function () {
        function t() {
          var t;
          ((this.playbackAudioContext = null),
            (this.playbackBuffer = null),
            (this.playbackParams = null),
            (this.audioPlaybackInitState = T.Uninitialized),
            (this.audioPlaybackInitResolvable = null),
            (this.implementation = null),
            (this.deviceChangeHandler = null));
          var n = o("WAWebABProps").getABPropConfigValue(
              "web_voip_audio_playback_impl",
            ),
            r = (t = D.cast(n)) != null ? t : D.DEFAULT;
          o("WAWebUA").UA.isFirefox && (r = D.SCRIPT_PROCESSOR);
          e: {
            if (r === D.SCRIPT_PROCESSOR) {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackScriptProcessor",
              ).WAWebVoipAudioPlaybackScriptProcessor)();
              break e;
            }
            if (r === D.AUDIO_WORKLET) {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackWorklet",
              ).WAWebVoipAudioPlaybackWorklet)();
              break e;
            }
            if (r === D.SHARED_BUFFER_WORKLET) {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackSharedBufferWorklet",
              ).WAWebVoipAudioPlaybackSharedBufferWorklet)();
              break e;
            }
            {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackSharedBufferWorklet",
              ).WAWebVoipAudioPlaybackSharedBufferWorklet)();
              break e;
            }
          }
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:AudioPlayback] using implementation: ",
                "",
              ])),
            o("WAWebUA").UA.isFirefox
              ? "script-processor (Firefox override)"
              : n != null
                ? n
                : "default",
          );
        }
        var n = t.prototype;
        return (
          (n.initPlaybackDriver = async function (t) {
            var e = this,
              n = t.bits_per_sample,
              a = t.channels,
              i = t.frames_per_chunk,
              l = t.sample_rate;
            if (this.audioPlaybackInitState !== T.Uninitialized) {
              (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initPlaybackDriver] invalid initialization. state = ",
                      "",
                    ])),
                  this.audioPlaybackInitState,
                )
                .sendLogs(
                  "voip: invalid playback initialization. state = ${this.audioPlaybackInitState}",
                ),
                await this.cleanup());
              return;
            }
            ((this.audioPlaybackInitState = T.Initializing),
              (this.audioPlaybackInitResolvable = new (o(
                "WAResolvable",
              ).Resolvable)()),
              (this.playbackParams = {
                sampleRate: l,
                channels: a,
                bitsPerSample: n,
                framesPerChunk: i,
              }));
            var p = this.playbackParams;
            try {
              var _, f;
              ((this.playbackAudioContext = new AudioContext({
                sampleRate: p.sampleRate,
                latencyHint: "interactive",
              })),
                o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                  o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                    .WORKLET_PRELOAD,
                ) &&
                  ((_ = this.implementation) == null
                    ? void 0
                    : _.preloadWorkletModule) != null &&
                  this.playbackAudioContext != null &&
                  this.playbackAudioContext.state !== "suspended" &&
                  this.implementation.preloadWorkletModule(
                    this.playbackAudioContext,
                  ));
              var g = async function () {
                try {
                  var t = o(
                      "WAWebAudioDeviceManager",
                    ).getCurrentSelectedAudioOutputDevice(),
                    n = await o(
                      "WAWebAudioDeviceManager",
                    ).selectAudioOutputDevice();
                  n != null && n !== t
                    ? (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:AudioOutputHandleDeviceChange] Auto-switching output to device: ",
                            "",
                          ])),
                        n,
                      ),
                      await e.switchOutputDevice(n, !0))
                    : n == null &&
                      o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:AudioOutputHandleDeviceChange] Output device change detected but new deviceId is null",
                          ])),
                      );
                } catch (e) {
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioOutputHandleDeviceChange] Output device change handler error: ",
                        "",
                      ])),
                    e,
                  );
                }
              };
              ((this.deviceChangeHandler = r("WAWebDebounce")(g, 500)),
                navigator.mediaDevices &&
                  navigator.mediaDevices.addEventListener(
                    "devicechange",
                    this.deviceChangeHandler,
                  ),
                (this.audioPlaybackInitState = T.Ready),
                (f = this.audioPlaybackInitResolvable) == null || f.resolve());
            } catch (e) {
              var h;
              (o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initPlaybackDriver] error: ",
                    "",
                  ])),
                e,
              ),
                (this.audioPlaybackInitState = T.Error),
                (h = this.audioPlaybackInitResolvable) == null || h.reject(e),
                await this.cleanup());
            }
          }),
          (n.startPlayback = async function () {
            if (this.audioPlaybackInitState === T.Initializing)
              try {
                var e;
                await ((e = this.audioPlaybackInitResolvable) == null
                  ? void 0
                  : e.promise);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlayback] error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip: startPlayback error: ${error}");
                return;
              }
            if (this.audioPlaybackInitState !== T.Ready) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] invalid initialization. state = ",
                      "",
                    ])),
                  this.audioPlaybackInitState,
                )
                .sendLogs(
                  "voip: startPlayback invalid initialization. state = ${this.audioPlaybackInitState}",
                );
              return;
            }
            if (!this.playbackAudioContext) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] audio context is null",
                    ])),
                )
                .sendLogs("voip: startPlayback audio context is null");
              return;
            }
            var t = this.playbackParams;
            if (!t) {
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] playback parameters are null",
                    ])),
                )
                .sendLogs("voip: startPlayback playback parameters are null");
              return;
            }
            var n = this.playbackAudioContext;
            try {
              n &&
                n.state === "suspended" &&
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] resuming suspended AudioContext",
                    ])),
                ),
                await n.resume(),
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] AudioContext resumed successfully",
                    ])),
                ));
              var r = t.framesPerChunk * 4;
              ((this.playbackBuffer =
                await o("WAWebAudioUtility").mallocWasmBuffer(r)),
                this.implementation != null &&
                  (await this.implementation.startAudioPlayback({
                    audioContext: n,
                    sampleRate: t.sampleRate,
                    channels: t.channels,
                    framesPerChunk: t.framesPerChunk,
                    playbackBuffer: this.playbackBuffer,
                  })));
            } catch (e) {
              if (
                (o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] failed to start audio playback: ",
                      "",
                    ])),
                  e,
                ),
                !(n && n.state === "suspended"))
              )
                throw e;
            }
          }),
          (n.stopPlayback = async function () {
            this.audioPlaybackInitState !== T.Ready &&
              o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopPlayback] invalid initialization. state = ",
                    "",
                  ])),
                this.audioPlaybackInitState,
              );
            try {
              await this.cleanup();
            } catch (e) {
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopPlayback] error: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (n.cleanup = async function () {
            try {
              if (this.deviceChangeHandler != null) {
                var e;
                ((e = navigator.mediaDevices) == null ||
                  e.removeEventListener(
                    "devicechange",
                    this.deviceChangeHandler,
                  ),
                  (this.deviceChangeHandler = null));
              }
              (this.implementation != null &&
                (await this.implementation.stopAudioPlayback()),
                this.playbackAudioContext &&
                  (this.playbackAudioContext.state !== "closed" &&
                    (await this.playbackAudioContext.close()),
                  (this.playbackAudioContext = null)));
            } finally {
              if (this.playbackBuffer != null) {
                var t = this.playbackBuffer;
                try {
                  await o("WAWebAudioUtility").freeWasmBuffer(t);
                } catch (e) {
                  o("WALogger").WARN(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopPlayback] error freeing WASM playback buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
                this.playbackBuffer = null;
              }
              this.audioPlaybackInitState = T.Uninitialized;
            }
          }),
          (n.getAudioElement = function () {
            return this.implementation != null
              ? this.implementation.getAudioElement()
              : null;
          }),
          (n.getEstimatedOutputLagSamples = function () {
            var e, t;
            return (e =
              (t = this.implementation) == null
                ? void 0
                : t.getEstimatedOutputLagSamples()) != null
              ? e
              : 0;
          }),
          (n.switchOutputDevice = async function (t, n) {
            if (
              (o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchOutputDevice] switchOutputDevice called with deviceId: ",
                    "",
                  ])),
                t,
              ),
              this.audioPlaybackInitState !== T.Ready)
            )
              return (
                o("WALogger").WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchOutputDevice] playback not ready",
                      "",
                    ])),
                  n === !0 ? "" : ", saving preference",
                ),
                n !== !0 &&
                  o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(
                    t,
                    "AV:switchOutputDevice",
                  ),
                !1
              );
            var e = this.implementation;
            if (e == null)
              return (
                o("WALogger").WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchOutputDevice] playback implementation not initialized",
                      "",
                    ])),
                  n === !0 ? "" : ", saving preference",
                ),
                n !== !0 &&
                  o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(
                    t,
                    "AV:switchOutputDevice",
                  ),
                !1
              );
            var r =
              e.switchOutputDevice != null
                ? await e.switchOutputDevice(t, n)
                : await o(
                    "WAWebAudioDeviceManager",
                  ).switchAudioOutputDeviceInternal(t, e.getAudioElement(), n);
            return (
              r
                ? o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] Successfully switched output to device: ",
                        "",
                      ])),
                    t,
                  )
                : o("WALogger").ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] Failed to switch output to device: ",
                        "",
                      ])),
                    t,
                  ),
              r
            );
          }),
          (n.consumeAudioPlaybackMetrics = function () {
            var e,
              t,
              n,
              r =
                (e =
                  (t = this.implementation) == null ||
                  t.consumePlaybackMetrics == null
                    ? void 0
                    : t.consumePlaybackMetrics()) != null
                  ? e
                  : null;
            if (r == null) return null;
            var o = this.playbackAudioContext,
              a =
                o != null && typeof o.baseLatency == "number"
                  ? Math.round(o.baseLatency * 1e3)
                  : null;
            return babelHelpers.extends({}, r, {
              webAudioCtxBaseLatencyMs: a,
              webAudioPlatformDelayMs:
                r.webAudioRbDelayAvgMs +
                (a != null ? a : 0) +
                ((n = r.webAudioCtxOutputLatencyAvgMs) != null ? n : 0),
            });
          }),
          t
        );
      })();
    l.WAWebVoipAudioPlaybackBase = x;
  },
  98,
);
