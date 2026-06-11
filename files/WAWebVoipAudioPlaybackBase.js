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
    "asyncToGeneratorRuntime",
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
        var a = t.prototype;
        return (
          (a.initPlaybackDriver = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  a = e.bits_per_sample,
                  i = e.channels,
                  l = e.frames_per_chunk,
                  p = e.sample_rate;
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
                    yield this.cleanup());
                  return;
                }
                ((this.audioPlaybackInitState = D.Initializing),
                  (this.audioPlaybackInitResolvable = new (o(
                    "WAResolvable",
                  ).Resolvable)()),
                  (this.playbackParams = {
                    sampleRate: p,
                    channels: i,
                    bitsPerSample: a,
                    framesPerChunk: l,
                  }));
                var _ = this.playbackParams;
                try {
                  var f, g;
                  ((this.playbackAudioContext = new AudioContext({
                    sampleRate: _.sampleRate,
                    latencyHint: "interactive",
                  })),
                    o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                      o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                        .WORKLET_PRELOAD,
                    ) &&
                      ((f = this.implementation) == null
                        ? void 0
                        : f.preloadWorkletModule) != null &&
                      this.playbackAudioContext != null &&
                      this.playbackAudioContext.state !== "suspended" &&
                      this.implementation.preloadWorkletModule(
                        this.playbackAudioContext,
                      ));
                  var h = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        try {
                          var e = o(
                              "WAWebAudioDeviceManager",
                            ).getCurrentSelectedAudioOutputDevice(),
                            n = yield o(
                              "WAWebAudioDeviceManager",
                            ).selectAudioOutputDevice();
                          n != null && n !== e
                            ? (o("WALogger").LOG(
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:AudioOutputHandleDeviceChange] Auto-switching output to device: ",
                                    "",
                                  ])),
                                n,
                              ),
                              yield t.switchOutputDevice(n, !0))
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
                      },
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })();
                  ((this.deviceChangeHandler = r("WAWebDebounce")(h, 500)),
                    navigator.mediaDevices &&
                      navigator.mediaDevices.addEventListener(
                        "devicechange",
                        this.deviceChangeHandler,
                      ),
                    (this.audioPlaybackInitState = D.Ready),
                    (g = this.audioPlaybackInitResolvable) == null ||
                      g.resolve());
                } catch (e) {
                  var y;
                  (o("WALogger").ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initPlaybackDriver] error: ",
                        "",
                      ])),
                    e,
                  ),
                    (this.audioPlaybackInitState = D.Error),
                    (y = this.audioPlaybackInitResolvable) == null ||
                      y.reject(e),
                    yield this.cleanup());
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startPlayback = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.audioPlaybackInitState === D.Initializing)
                try {
                  var e;
                  yield (e = this.audioPlaybackInitResolvable) == null
                    ? void 0
                    : e.promise;
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
              if (this.audioPlaybackInitState !== D.Ready) {
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
                  yield n.resume(),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlayback] AudioContext resumed successfully",
                      ])),
                  ));
                var r = t.framesPerChunk * 4;
                ((this.playbackBuffer =
                  yield o("WAWebAudioUtility").mallocWasmBuffer(r)),
                  this.implementation != null &&
                    (yield this.implementation.startAudioPlayback({
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
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.stopPlayback = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.audioPlaybackInitState !== D.Ready &&
                o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopPlayback] invalid initialization. state = ",
                      "",
                    ])),
                  this.audioPlaybackInitState,
                );
              try {
                yield this.cleanup();
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
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.cleanup = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  (yield this.implementation.stopAudioPlayback()),
                  this.playbackAudioContext &&
                    (this.playbackAudioContext.state !== "closed" &&
                      this.playbackAudioContext
                        .close()
                        .then(function () {})
                        .catch(function (e) {
                          o("WALogger").WARN(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:cleanup] playback AudioContext close error (non-fatal): ",
                                "",
                              ])),
                            String(e),
                          );
                        }),
                    (this.playbackAudioContext = null)));
              } finally {
                if (this.playbackBuffer != null) {
                  var t = this.playbackBuffer;
                  try {
                    yield o("WAWebAudioUtility").freeWasmBuffer(t);
                  } catch (e) {
                    o("WALogger").WARN(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlayback] error freeing WASM playback buffer: ",
                          "",
                        ])),
                      e,
                    );
                  }
                  this.playbackBuffer = null;
                }
                this.audioPlaybackInitState = D.Uninitialized;
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getAudioElement = function () {
            return this.implementation != null
              ? this.implementation.getAudioElement()
              : null;
          }),
          (a.getEstimatedOutputLagSamples = function () {
            var e, t;
            return (e =
              (t = this.implementation) == null
                ? void 0
                : t.getEstimatedOutputLagSamples()) != null
              ? e
              : 0;
          }),
          (a.switchOutputDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (
                  (o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] switchOutputDevice called with deviceId: ",
                        "",
                      ])),
                    e,
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
                      t === !0 ? "" : ", saving preference",
                    ),
                    t !== !0 &&
                      o(
                        "WAWebAudioDeviceManager",
                      ).saveAudioOutputDevicePreference(
                        e,
                        "AV:switchOutputDevice",
                      ),
                    !1
                  );
                var n = this.implementation;
                if (n == null)
                  return (
                    o("WALogger").WARN(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchOutputDevice] playback implementation not initialized",
                          "",
                        ])),
                      t === !0 ? "" : ", saving preference",
                    ),
                    t !== !0 &&
                      o(
                        "WAWebAudioDeviceManager",
                      ).saveAudioOutputDevicePreference(
                        e,
                        "AV:switchOutputDevice",
                      ),
                    !1
                  );
                var r =
                  n.switchOutputDevice != null
                    ? yield n.switchOutputDevice(e, t)
                    : yield o(
                        "WAWebAudioDeviceManager",
                      ).switchAudioOutputDeviceInternal(
                        e,
                        n.getAudioElement(),
                        t,
                      );
                return (
                  r
                    ? o("WALogger").LOG(
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchOutputDevice] Successfully switched output to device: ",
                            "",
                          ])),
                        e,
                      )
                    : o("WALogger").ERROR(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchOutputDevice] Failed to switch output to device: ",
                            "",
                          ])),
                        e,
                      ),
                  r
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.consumeAudioPlaybackMetrics = function () {
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
    l.WAWebVoipAudioPlaybackBase = $;
  },
  98,
);
