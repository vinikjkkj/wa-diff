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
      E = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      k = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3,
      }),
      I = (function () {
        function t() {
          var e;
          ((this.playbackAudioContext = null),
            (this.playbackBuffer = null),
            (this.playbackParams = null),
            (this.audioPlaybackInitState = E.Uninitialized),
            (this.audioPlaybackInitResolvable = null),
            (this.implementation = null),
            (this.deviceChangeHandler = null));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_audio_playback_impl",
            ),
            n = (e = k.cast(t)) != null ? e : k.DEFAULT;
          e: {
            if (n === k.SCRIPT_PROCESSOR) {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackScriptProcessor",
              ).WAWebVoipAudioPlaybackScriptProcessor)();
              break e;
            }
            if (n === k.AUDIO_WORKLET) {
              this.implementation = new (o(
                "WAWebVoipAudioPlaybackWorklet",
              ).WAWebVoipAudioPlaybackWorklet)();
              break e;
            }
            if (n === k.SHARED_BUFFER_WORKLET) {
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
        }
        var a = t.prototype;
        return (
          (a.initPlaybackDriver = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = t.bits_per_sample,
                  l = t.channels,
                  m = t.frames_per_chunk,
                  p = t.sample_rate;
                if (this.audioPlaybackInitState !== E.Uninitialized) {
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
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
                ((this.audioPlaybackInitState = E.Initializing),
                  (this.audioPlaybackInitResolvable = new (o(
                    "WAResolvable",
                  ).Resolvable)()),
                  (this.playbackParams = {
                    sampleRate: p,
                    channels: l,
                    bitsPerSample: i,
                    framesPerChunk: m,
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
                      this.implementation.preloadWorkletModule(
                        this.playbackAudioContext,
                      ));
                  var h = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        try {
                          var e = yield o(
                            "WAWebAudioDeviceManager",
                          ).selectAudioOutputDevice();
                          e != null
                            ? (o("WALogger").LOG(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:AudioOutputHandleDeviceChange] Auto-switching output to device: ",
                                    "",
                                  ])),
                                e,
                              ),
                              yield a.switchOutputDevice(e))
                            : o("WALogger").WARN(
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:AudioOutputHandleDeviceChange] Output device change detected but new deviceId is null",
                                  ])),
                              );
                        } catch (e) {
                          o("WALogger").ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    (this.audioPlaybackInitState = E.Ready),
                    (g = this.audioPlaybackInitResolvable) == null ||
                      g.resolve());
                } catch (e) {
                  var y;
                  (o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initPlaybackDriver] error: ",
                        "",
                      ])),
                    e,
                  ),
                    (this.audioPlaybackInitState = E.Error),
                    (y = this.audioPlaybackInitResolvable) == null ||
                      y.reject(e),
                    yield this.cleanup());
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.startPlayback = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.audioPlaybackInitState === E.Initializing)
                try {
                  var e;
                  yield (e = this.audioPlaybackInitResolvable) == null
                    ? void 0
                    : e.promise;
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:startPlayback] error: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip: startPlayback error: ${error}");
                  return;
                }
              if (this.audioPlaybackInitState !== E.Ready) {
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
              var t = this.playbackParams;
              if (!t) {
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
              var n = this.playbackAudioContext;
              try {
                n && n.state === "suspended" && (yield n.resume());
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
              this.audioPlaybackInitState !== E.Ready &&
                o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopPlayback] invalid initialization. state = ",
                      "",
                    ])),
                  this.audioPlaybackInitState,
                );
              try {
                yield this.cleanup();
              } catch (e) {
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
                      (yield this.playbackAudioContext.close()),
                    (this.playbackAudioContext = null)));
              } finally {
                if (this.playbackBuffer != null) {
                  var t = this.playbackBuffer;
                  try {
                    yield o("WAWebAudioUtility").freeWasmBuffer(t);
                  } catch (e) {
                    o("WALogger").WARN(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopPlayback] error freeing WASM playback buffer: ",
                          "",
                        ])),
                      e,
                    );
                  }
                  this.playbackBuffer = null;
                }
                this.audioPlaybackInitState = E.Uninitialized;
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
          (a.switchOutputDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  (o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] switchOutputDevice called with deviceId: ",
                        "",
                      ])),
                    e,
                  ),
                  this.audioPlaybackInitState !== E.Ready)
                )
                  return (
                    o("WALogger").ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchOutputDevice] Cannot switch output device: playback not ready",
                        ])),
                    ),
                    !1
                  );
                var t = this.getAudioElement();
                if (t == null)
                  return (
                    o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchOutputDevice] Cannot switch output device: audio element not initialized",
                        ])),
                    ),
                    !1
                  );
                var n = yield o(
                  "WAWebAudioDeviceManager",
                ).switchAudioOutputDeviceInternal(e, t);
                return (
                  n
                    ? o("WALogger").LOG(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchOutputDevice] Successfully switched output to device: ",
                            "",
                          ])),
                        e,
                      )
                    : o("WALogger").ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchOutputDevice] Failed to switch output to device: ",
                            "",
                          ])),
                        e,
                      ),
                  n
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.WAWebVoipAudioPlaybackBase = I;
  },
  98,
);
