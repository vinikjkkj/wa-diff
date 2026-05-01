__d(
  "WAWebVoipVideoRendererRegistry",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceEvents",
    "WAWebBackendApi",
    "WAWebVoipAVSyncController",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipAudioPlaybackState",
    "WAWebVoipMediaEnums",
    "WAWebVoipPerfMeasurement",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoOffThreadRendererStub",
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipVideoWebGLRenderer",
    "WAWebVoipVideoWebGPURenderer",
    "WAWebVoipWindowMetrics",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
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
      D,
      x,
      $,
      P,
      N = 30,
      M = 5e3,
      w = 500,
      A = (function () {
        function t() {
          ((this.$11 = new Map()),
            (this.$8 = new Map()),
            (this.$7 = new Map()),
            (this.$1 = null),
            (this.$3 = null),
            (this.$18 = new Map()),
            (this.$19 = new Set()),
            (this.$9 = new (o(
              "WAWebVoipAVSyncController",
            ).WAWebVoipAVSyncController)()),
            (this.$20 = !1),
            (this.$24 = null),
            (this.$5 = []),
            (this.$12 = new Map()),
            (this.$13 = new Map()),
            (this.$14 = new Map()),
            (this.$15 = new Set()),
            (this.$25 = 0));
        }
        var a = t.prototype;
        return (
          (a.init = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this;
              try {
                this.$1 = yield this.$2();
              } catch (t) {
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] detection failed, fallback RASTER: ",
                      "",
                    ])),
                  t,
                ),
                  (this.$1 = o(
                    "WAWebVoipVideoRendererInterface",
                  ).WAWebVoipVideoRendererType.RASTER));
              }
              if (
                ((this.$3 = this.$4(this.$1)),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] init type=",
                      " mode=",
                      "",
                    ])),
                  this.$1,
                  this.$3,
                ),
                this.$1 != null &&
                  o("WAWebVoipWindowMetrics").setRendererType(this.$1, this.$3),
                this.$3 ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererThreadingMode.MAIN_THREAD &&
                  o("WAWebVoipVideoWebCodecsRenderer").setFatalErrorCallback(
                    function () {
                      return t.onDecoderFatalError();
                    },
                  ),
                this.$5.length > 0)
              ) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] flushing ",
                      " pending",
                    ])),
                  this.$5.length,
                );
                for (var n of this.$5) {
                  var r = n.canvas,
                    a = n.portalMode;
                  this.$6(r, a);
                }
                this.$5 = [];
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getRendererType = function () {
            var e = this.$1;
            if (e == null)
              throw r("err")("init() must be called before getRendererType");
            return e;
          }),
          (a.registerVideoCanvas = function (t, n) {
            if (this.$1 == null || this.$3 == null) {
              (o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] init() pending, queuing canvas",
                  ])),
              ),
                this.$5.push({ canvas: t, portalMode: n }));
              return;
            }
            this.$6(t, n);
          }),
          (a.assignJidToCanvas = function (t, n, r) {
            var e = this.$7.get(n);
            e != null &&
              e !== t &&
              (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] reassign ",
                    " from ",
                    "",
                  ])),
                t,
                e,
              ),
              this.unassignJidFromCanvas(e, n));
            var a = this.$8.get(t);
            (a ? a.set(n, r) : this.$8.set(t, new Map([[n, r]])),
              this.$7.set(n, t),
              this.$9.removeParticipant(t),
              this.$10(t, "assign_canvas"));
          }),
          (a.unassignJidFromCanvas = function (t, n) {
            var e = this.$8.get(t);
            if (e != null) {
              if (e.has(n)) {
                var r = this.$11.get(n);
                (e.delete(n), this.$7.delete(n), r == null || r.reset());
              }
              e.size === 0 &&
                (this.$8.delete(t),
                this.$12.delete(t),
                this.$13.delete(t),
                this.$14.delete(t),
                this.$15.delete(t));
            }
          }),
          (a.unassignCanvas = function (t) {
            var e = this.$7.get(t);
            e != null
              ? this.unassignJidFromCanvas(e, t)
              : o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: Canvas not found in registry",
                    ])),
                );
          }),
          (a.pauseRenderingForJid = function (t) {
            (this.$12.set(t, !1), this.$16(t));
          }),
          (a.resumeRenderingForJid = function (t) {
            var e = this.$12.get(t);
            e != null &&
              (this.$12.delete(t),
              (e || this.$13.has(t)) && this.$10(t, "resume_rendering"));
          }),
          (a.$16 = function (t) {
            if (
              !(
                this.$1 !==
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBCODECS_H264 ||
                o("WAWebABProps").getABPropConfigValue(
                  "enable_webcodec_require_keyframe",
                ) !== !0
              )
            ) {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] resetWebCodecs ",
                    " \u2014 await keyframe",
                  ])),
                t,
              ),
                this.$13.set(t, 0));
              var e = this.$8.get(t);
              if (e)
                for (var n of e) {
                  var a = n[0],
                    i = this.$11.get(a);
                  (i instanceof
                    o("WAWebVoipVideoWebCodecsRenderer")
                      .WAWebVoipVideoWebCodecsRenderer ||
                    i instanceof r("WAWebVoipVideoOffThreadRendererStub")) &&
                    i.requireKeyframe();
                }
            }
          }),
          (a.unregisterVideoCanvas = function (t) {
            (this.unassignCanvas(t),
              this.$17(t),
              (this.$5 = this.$5.filter(function (e) {
                return e.canvas !== t;
              })));
          }),
          (a.onVideoFrameWasmToJs = function (t, n, r, a, i, l, s, u) {
            var e, c;
            t === o("WAWebVoipVideoRendererInterface").selfPreviewJid
              ? o("WAWebVoipPerfMeasurement").endMeasurement(
                  o("WAWebVoipPerfMeasurement").PerfMeasurement
                    .FIRST_CAMERA_FRAME,
                )
              : o("WAWebVoipPerfMeasurement").endMeasurement(
                  o("WAWebVoipPerfMeasurement").PerfMeasurement
                    .FIRST_PEER_FRAME,
                );
            var d =
                (e = o("WAWebVoipMediaEnums").Orientation.cast(i)) != null
                  ? e
                  : o("WAWebVoipMediaEnums").Orientation.Normal,
              m =
                d === o("WAWebVoipMediaEnums").Orientation.Rotate90 ||
                d === o("WAWebVoipMediaEnums").Orientation.Rotate270,
              p = m ? a : r,
              _ = m ? r : a,
              f = this.$18.get(t);
            if (f == null || f.width !== p || f.height !== _) {
              this.$18.set(t, { width: p, height: _ });
              for (var g of this.$19) g(t, p, _);
            }
            var h =
              (c = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) !=
              null
                ? c
                : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (
              (t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid &&
                !this.$20 &&
                !this.$9.isEnabled() &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_platform_av_sync",
                ) === !0 &&
                this.$21(),
              this.$9.isEnabled() &&
                t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid)
            ) {
              this.$9.enqueueVideoFrame({
                userJid: t,
                frameBuffer: n,
                width: r,
                height: a,
                orientation: i,
                format: h,
                timestamp: s,
                isKeyFrame: u,
              });
              return;
            }
            this.$22(t, n, r, a, i, h, s, u);
          }),
          (a.getVideoDimensions = function (t) {
            var e;
            return (e = this.$18.get(t)) != null ? e : null;
          }),
          (a.addVideoDimensionChangeListener = function (t) {
            var e = this;
            return (
              this.$19.add(t),
              function () {
                e.$19.delete(t);
              }
            );
          }),
          (a.onCanvasResize = function (t, n, r) {
            try {
              var e = this.$11.get(t);
              if (!e) return;
              e.onCanvasResize(n, r);
            } catch (e) {
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: onCanvasResize : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.setCoverFit = function (t, n) {
            try {
              var e = this.$11.get(t);
              if (!e) return;
              e.setCoverFit(n);
            } catch (e) {
              o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: setCoverFit : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.requestKeyFrameForCanvas = function (t) {
            var e = this.$7.get(t);
            e != null && this.$10(e, "canvas_request");
          }),
          (a.$10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (
                  (t === void 0 && (t = "unspecified"),
                  e !== o("WAWebVoipVideoRendererInterface").selfPreviewJid)
                ) {
                  var n = Date.now();
                  if (!this.$15.has(e)) {
                    var r = this.$14.get(e);
                    if (!(r != null && n - r < w)) {
                      (this.$15.add(e), this.$14.set(e, n));
                      try {
                        var a = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        if ((a == null ? void 0 : a.type) !== "web") return;
                        var i = yield a.requestKeyFrame(e);
                        i !== 0 &&
                          o("WALogger").ERROR(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: VideoRendererRegistry: requestKeyFrameForJid failed: ",
                                "",
                              ])),
                            i,
                          );
                      } finally {
                        this.$15.delete(e);
                      }
                    }
                  }
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$22 = function (t, n, r, a, i, l, s, u) {
            var e = this.$8.get(t);
            if (e) {
              if (this.$12.has(t)) {
                u && this.$12.set(t, !0);
                return;
              }
              var c = this.$13.get(t);
              if (c != null)
                if (u)
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] keyframe rcvd ",
                        " after ",
                        " drops \u2014 resume",
                      ])),
                    t,
                    c,
                  ),
                    this.$13.delete(t));
                else if (c < N) {
                  this.$13.set(t, c + 1);
                  return;
                } else
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] keyframe timeout ",
                        " ",
                        " drops \u2014 reactive",
                      ])),
                    t,
                    N,
                  ),
                    this.$13.delete(t));
              if (r % 2 !== 0 || a % 2 !== 0) {
                o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] renderFrame: odd frame ",
                      "x",
                      "",
                    ])),
                  r,
                  a,
                );
                return;
              }
              for (var d of e.entries()) {
                var m = d[0],
                  p = d[1],
                  _ = this.$11.get(m);
                if (_)
                  try {
                    var f;
                    _.renderFrame(
                      n,
                      r,
                      a,
                      (f = o("WAWebVoipMediaEnums").Orientation.cast(i)) != null
                        ? f
                        : o("WAWebVoipMediaEnums").Orientation.Normal,
                      p,
                      l,
                      s,
                      u,
                    );
                  } catch (e) {
                    if (
                      e instanceof
                      o("WAWebVoipVideoWebCodecsRenderer").KeyFrameNeededError
                    ) {
                      this.$10(t, "renderer_need_keyframe");
                      continue;
                    }
                    o("WALogger").ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererRegistry: renderFrame: ",
                          "",
                        ])),
                      e,
                    );
                  }
              }
            }
          }),
          (a.$4 = function (t) {
            var e;
            return (
              r("WAWebVoipVideoOffThreadRendererStub").checkAvailability()
                ? t ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBGL
                  ? (e = o("WAWebVoipVideoRendererInterface")
                      .WAWebVoipVideoRendererThreadingMode.POOLED_WORKERS)
                  : (e = o("WAWebVoipVideoRendererInterface")
                      .WAWebVoipVideoRendererThreadingMode.SINGLE_WORKER)
                : (e = o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererThreadingMode.MAIN_THREAD),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] threadingMode=",
                    " (compat)",
                  ])),
                e,
              ),
              e
            );
          }),
          (a.$2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = o("WAWebABProps").getABPropConfigValue(
                  "web_voip_video_renderer",
                ),
                n =
                  (e = o(
                    "WAWebVoipVideoRendererInterface",
                  ).WAWebVoipVideoRendererType.cast(t)) != null
                    ? e
                    : o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.DEFAULT;
              return n !==
                o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                  .DEFAULT
                ? (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] rendererType=",
                        " (ABProp)",
                      ])),
                    n,
                  ),
                  n)
                : ((yield o(
                    "WAWebVoipVideoWebCodecsRenderer",
                  ).WAWebVoipVideoWebCodecsRenderer.checkAvailability())
                    ? (n = o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.WEBCODECS_H264)
                    : (yield r(
                          "WAWebVoipVideoWebGPURenderer",
                        ).checkAvailability())
                      ? (n = o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGPU)
                      : r("WAWebVoipVideoWebGLRenderer").checkAvailability()
                        ? (n = o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.WEBGL)
                        : (yield o(
                              "WAWebVoipVideoRasterRenderer",
                            ).WAWebVoipVideoFrameRenderer.checkAvailability())
                          ? (n = o("WAWebVoipVideoRendererInterface")
                              .WAWebVoipVideoRendererType.VIDEOFRAME)
                          : (n = o("WAWebVoipVideoRendererInterface")
                              .WAWebVoipVideoRendererType.RASTER),
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] rendererType=",
                        " (compat)",
                      ])),
                    n,
                  ),
                  n);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = function (t, n) {
            try {
              if (this.$11.has(t)) throw r("err")("canvas already registered");
              var e = this.$1,
                a = this.$3;
              if (e == null || a == null)
                throw r("err")(
                  "init() must be called before registering canvases",
                );
              if (
                a !==
                o("WAWebVoipVideoRendererInterface")
                  .WAWebVoipVideoRendererThreadingMode.MAIN_THREAD
              ) {
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] offthread ",
                      " ",
                      " portal=",
                      "",
                    ])),
                  e,
                  a,
                  n,
                );
                var i = new (r("WAWebVoipVideoOffThreadRendererStub"))(
                  t,
                  e,
                  a,
                  n,
                );
                this.$11.set(t, i);
                return;
              }
              var l =
                e ===
                o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                  .WEBCODECS_H264
                  ? new (o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer)(t)
                  : e ===
                      o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.WEBGPU
                    ? new (r("WAWebVoipVideoWebGPURenderer"))(t)
                    : e ===
                        o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGL
                      ? new (r("WAWebVoipVideoWebGLRenderer"))(t)
                      : e ===
                          o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.VIDEOFRAME
                        ? new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoFrameRenderer)(t)
                        : new (o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoRasterRenderer)(t);
              this.$11.set(t, l);
            } catch (e) {
              o("WALogger").ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: registerCanvasToRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.$23 = function (t, n) {
            var e = this;
            (o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererRegistry: enabling A/V sync, sampleRate=",
                  "",
                ])),
              t,
            ),
              this.$9.enable(
                t,
                function (t, n, r, o, a, i, l, s) {
                  e.$22(t, n, r, o, a, i, l, s);
                },
                n,
                function (t) {
                  (o("WALogger").WARN(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: AV sync video reset for ",
                        ", requesting keyframe",
                      ])),
                    t,
                  ),
                    e.$16(t),
                    e.$10(t, "av_sync_video_reset"));
                },
              ),
              (this.$24 = function (t) {
                e.$9.reset();
              }),
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                this.$24,
              ));
          }),
          (a.disableAVSync = function () {
            this.$9.isEnabled() &&
              (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync",
                  ])),
              ),
              this.$9.disable());
            var e = this.$24;
            (e != null &&
              (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                e,
              ),
              (this.$24 = null)),
              (this.$20 = !1));
          }),
          (a.consumeAVSyncMetrics = function () {
            return this.$9.consumeMetrics();
          }),
          (a.onDecoderFatalError = function () {
            this.$25++;
          }),
          (a.consumeWebCodecsFatalErrorCount = function () {
            var e = this.$25;
            return ((this.$25 = 0), e);
          }),
          (a.removeParticipantAVSync = function (t) {
            this.$9.removeParticipant(t);
          }),
          (a.$21 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$20 = !0;
              try {
                var e,
                  t = yield o(
                    "WAWebVoipAudioCaptureAndPlayback",
                  ).waitForPlaybackStart(M);
                if (!t) {
                  ((this.$20 = !1),
                    o("WALogger").WARN(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererRegistry: timed out waiting ",
                          "ms for audio playback start before enabling A/V sync",
                        ])),
                      M,
                    ));
                  return;
                }
                var n =
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "initializeVoipWasm",
                    ),
                  r =
                    (e = o(
                      "WAWebVoipAudioPlaybackState",
                    ).getPlaybackSampleRate()) != null
                      ? e
                      : 16e3;
                this.$23(r, function () {
                  var e = n.getAudioPlaybackTimestamp(),
                    t = o(
                      "WAWebVoipAudioCaptureAndPlayback",
                    ).getEstimatedPlaybackOutputLagSamples();
                  return Math.max(0, e - t);
                });
              } catch (e) {
                ((this.$20 = !1),
                  o("WALogger").ERROR(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: initAVSync failed: ",
                        "",
                      ])),
                    e,
                  ));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = function (t) {
            try {
              var e = this.$11.get(t);
              if (!e) return;
              (e.cleanup(), this.$11.delete(t));
              var n = this.$7.get(t);
              if (n != null) {
                this.$7.delete(t);
                var r = this.$8.get(n);
                r != null && (r.delete(t), r.size === 0 && this.$8.delete(n));
              }
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] unregister canvas, left=",
                    "",
                  ])),
                this.$11.size,
              );
            } catch (e) {
              o("WALogger").ERROR(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: unregisterCanvasFromRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          t
        );
      })(),
      F = new A();
    ((l.WAWebVoipVideoRendererRegistry = A), (l.videoRendererRegistry = F));
  },
  98,
);
