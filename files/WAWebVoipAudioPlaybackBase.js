__d(
  "WAWebVoipAudioPlaybackBase",
  [
    "$InternalEnum",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBoolFunc",
    "WAWebDebounce",
    "WAWebUA",
    "WAWebVoipAudioContextResume",
    "WAWebVoipAudioPlaybackScriptProcessor",
    "WAWebVoipAudioPlaybackSharedBufferWorklet",
    "WAWebVoipAudioPlaybackWorklet",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipSharedCallAudioContext",
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
      T,
      D = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      x = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      }),
      $ = (function () {
        function t() {
          var t;
          ((this.playbackAudioContext = null),
            (this.playbackBuffer = null),
            (this.playbackParams = null),
            (this.audioPlaybackInitState = D.Uninitialized),
            (this.audioPlaybackInitResolvable = null),
            (this.implementation = null),
            (this.deviceChangeHandler = null));
          var n = o("WAWebABProps").getABPropConfigValue(
              "web_voip_audio_playback_impl",
            ),
            r = (t = x.cast(n)) != null ? t : x.DEFAULT;
          o("WAWebUA").UA.isFirefox && (r = x.SCRIPT_PROCESSOR);
          e: {
            if (r === x.SCRIPT_PROCESSOR) {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackScriptProcessor",
              ).WAWebVoipAudioPlaybackScriptProcessor)();
              break e;
            }
            if (r === x.AUDIO_WORKLET) {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackWorklet",
              ).WAWebVoipAudioPlaybackWorklet)();
              break e;
            }
            if (r === x.SHARED_BUFFER_WORKLET) {
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
            if (this.audioPlaybackInitState !== D.Uninitialized) {
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
            ((this.audioPlaybackInitState = D.Initializing),
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
              (await o("WAWebAudioUtility").initWasmModule(),
                (this.playbackAudioContext = P(p.sampleRate)),
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
                (this.audioPlaybackInitState = D.Ready),
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
                (this.audioPlaybackInitState = D.Error),
                (h = this.audioPlaybackInitResolvable) == null || h.reject(e),
                await this.cleanup());
            }
          }),
          (n.startPlayback = async function (t) {
            var e = t != null ? t : o("WAWebBoolFunc").returnFalse;
            if ((await this.$1(e)) && !e()) {
              if (this.audioPlaybackInitState !== D.Ready) {
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlayback] audio context is null",
                      ])),
                  )
                  .sendLogs("voip: startPlayback audio context is null");
                return;
              }
              var n = this.playbackParams;
              if (!n) {
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlayback] playback parameters are null",
                      ])),
                  )
                  .sendLogs("voip: startPlayback playback parameters are null");
                return;
              }
              var r = this.playbackAudioContext;
              await this.$2(r, n, e);
            }
          }),
          (n.$1 = async function (t) {
            if (t()) return !1;
            if (this.audioPlaybackInitState !== D.Initializing) return !0;
            try {
              var e;
              return (
                await ((e = this.audioPlaybackInitResolvable) == null
                  ? void 0
                  : e.promise),
                !t()
              );
            } catch (e) {
              return (
                t() ||
                  o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startPlayback] error: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: startPlayback error: ${error}"),
                !1
              );
            }
          }),
          (n.$2 = async function (t, n, r) {
            try {
              if (t.state === "suspended") {
                if (
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlayback] resuming suspended AudioContext",
                      ])),
                  ),
                  await o(
                    "WAWebVoipAudioContextResume",
                  ).resumeAudioContextLoggingDelays(t, "startPlayback"),
                  r())
                )
                  return;
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] AudioContext resumed successfully",
                    ])),
                );
              }
              var e = n.framesPerChunk * 4,
                a = await o("WAWebAudioUtility").mallocWasmBuffer(e);
              if (((this.playbackBuffer = a), r())) {
                await this.$3(a);
                return;
              }
              if (
                this.implementation != null &&
                (await this.implementation.startAudioPlayback({
                  audioContext: t,
                  sampleRate: n.sampleRate,
                  channels: n.channels,
                  framesPerChunk: n.framesPerChunk,
                  playbackBuffer: a,
                  isStartCancelled: r,
                }),
                r())
              )
                return;
            } catch (e) {
              if (r()) return;
              if (
                (o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlayback] failed to start audio playback: ",
                      "",
                    ])),
                  e,
                ),
                t.state !== "suspended")
              )
                throw e;
            }
          }),
          (n.$3 = async function (t) {
            if (this.playbackBuffer === t) {
              this.playbackBuffer = null;
              try {
                await o("WAWebAudioUtility").freeWasmBuffer(t);
              } catch (e) {
                o("WALogger").WARN(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopPlayback] error freeing WASM playback buffer: ",
                      "",
                    ])),
                  e,
                );
              }
            }
          }),
          (n.stopPlayback = async function (t) {
            this.audioPlaybackInitState !== D.Ready &&
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopPlayback] invalid initialization. state = ",
                    "",
                  ])),
                this.audioPlaybackInitState,
              );
            try {
              await this.cleanup(t);
            } catch (e) {
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:stopPlayback] error: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (n.cleanup = async function (t) {
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
                (await this.implementation.stopAudioPlayback(void 0, t)),
                this.playbackAudioContext &&
                  (!o(
                    "WAWebVoipSharedCallAudioContext",
                  ).releaseSharedCallAudioContext(
                    "playback",
                    this.playbackAudioContext,
                  ) &&
                    this.playbackAudioContext.state !== "closed" &&
                    this.playbackAudioContext
                      .close()
                      .then(function () {})
                      .catch(function (e) {
                        o("WALogger").WARN(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:cleanup] playback AudioContext close error (non-fatal): ",
                              "",
                            ])),
                          String(e),
                        );
                      }),
                  (this.playbackAudioContext = null)));
            } finally {
              if (this.playbackBuffer != null) {
                var n = this.playbackBuffer;
                await this.$3(n);
              }
              this.audioPlaybackInitState = D.Uninitialized;
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
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchOutputDevice] switchOutputDevice called with deviceId: ",
                    "",
                  ])),
                t,
              ),
              this.audioPlaybackInitState !== D.Ready)
            )
              return (
                o("WALogger").WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] Successfully switched output to device: ",
                        "",
                      ])),
                    t,
                  )
                : o("WALogger").ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
    function P(e) {
      var t, n;
      return (t =
        (n = o("WAWebVoipSharedCallAudioContext").acquireSharedCallAudioContext(
          "playback",
          e,
        )) != null
          ? n
          : o("WAWebVoipCallAudioUnlock").takeUnlockedAudioContext(
              "playback",
              e,
            )) != null
        ? t
        : new AudioContext({ sampleRate: e, latencyHint: "interactive" });
    }
    l.WAWebVoipAudioPlaybackBase = $;
  },
  98,
);
