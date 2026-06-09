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
      N,
      M = 30,
      w = 5e3,
      A = 500,
      F = (function () {
        function t() {
          ((this.$13 = new Map()),
            (this.$8 = new Map()),
            (this.$7 = new Map()),
            (this.$1 = null),
            (this.$3 = null),
            (this.$20 = new Map()),
            (this.$21 = new Set()),
            (this.$25 = new Map()),
            (this.$19 = new Map()),
            (this.$9 = new Set()),
            (this.$26 = new Set()),
            (this.$11 = new (o(
              "WAWebVoipAVSyncController",
            ).WAWebVoipAVSyncController)()),
            (this.$22 = !1),
            (this.$32 = null),
            (this.$5 = []),
            (this.$15 = new Map()),
            (this.$17 = new Map()),
            (this.$28 = new Map()),
            (this.$27 = new Set()),
            (this.$33 = 0));
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
            var a = this.$8.get(t),
              i = a == null || a.size === 0;
            (i && this.$9.delete(t) && this.$10(t),
              a ? a.set(n, r) : this.$8.set(t, new Map([[n, r]])),
              this.$7.set(n, t),
              this.$11.removeParticipant(t),
              this.$12(t, "assign_canvas"));
          }),
          (a.unassignJidFromCanvas = function (t, n) {
            var e = this.$8.get(t);
            if (!(e == null || !e.has(n))) {
              var r = this.$13.get(n);
              (r == null || r.reset(),
                e.delete(n),
                this.$7.delete(n),
                e.size === 0 && this.$14(t));
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
            (this.$15.set(t, !1), this.$16(t));
          }),
          (a.resumeRenderingForJid = function (t) {
            var e = this.$15.get(t);
            e != null &&
              (this.$15.delete(t),
              (e || this.$17.has(t)) && this.$12(t, "resume_rendering"));
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
                this.$17.set(t, 0));
              var e = this.$8.get(t);
              if (e)
                for (var n of e) {
                  var a = n[0],
                    i = this.$13.get(a);
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
              this.$18(t),
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
            var d = this.$19.get(t);
            d != null
              ? ((d.frameCount += 1),
                (d.lastFrameTimestampMs = window.performance.now()),
                (d.lastWidth = r),
                (d.lastHeight = a))
              : this.$19.set(t, {
                  frameCount: 1,
                  lastFrameTimestampMs: window.performance.now(),
                  lastWidth: r,
                  lastHeight: a,
                });
            var m =
                (e = o("WAWebVoipMediaEnums").Orientation.cast(i)) != null
                  ? e
                  : o("WAWebVoipMediaEnums").Orientation.Normal,
              p =
                m === o("WAWebVoipMediaEnums").Orientation.Rotate90 ||
                m === o("WAWebVoipMediaEnums").Orientation.Rotate270,
              _ = p ? a : r,
              f = p ? r : a,
              g = this.$20.get(t);
            if (g == null || g.width !== _ || g.height !== f) {
              this.$20.set(t, { width: _, height: f });
              for (var h of this.$21) h(t, _, f);
            }
            var y =
              (c = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) !=
              null
                ? c
                : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (
              (t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid &&
                !this.$22 &&
                !this.$11.isEnabled() &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_platform_av_sync",
                ) === !0 &&
                this.$23(),
              this.$11.isEnabled() &&
                t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid)
            ) {
              this.$11.enqueueVideoFrame({
                userJid: t,
                frameBuffer: n,
                width: r,
                height: a,
                orientation: i,
                format: y,
                timestamp: s,
                isKeyFrame: u,
              });
              return;
            }
            this.$24(t, n, r, a, i, y, s, u);
          }),
          (a.getVideoDimensions = function (t) {
            var e;
            return (e = this.$20.get(t)) != null ? e : null;
          }),
          (a.hasCanvasForJid = function (t) {
            var e = this.$8.get(t);
            return e != null && e.size > 0;
          }),
          (a.getDecodeStatsForJid = function (t) {
            var e;
            return (e = this.$19.get(t)) != null ? e : null;
          }),
          (a.getLastPaintTimestampMsForJid = function (t) {
            var e;
            return (e = this.$25.get(t)) != null ? e : null;
          }),
          (a.addVideoDimensionChangeListener = function (t) {
            var e = this;
            return (
              this.$21.add(t),
              function () {
                e.$21.delete(t);
              }
            );
          }),
          (a.hasReceivedFirstFrameForJid = function (t) {
            return this.$9.has(t);
          }),
          (a.addFirstFrameReceivedListener = function (t) {
            var e = this;
            return (
              this.$26.add(t),
              function () {
                e.$26.delete(t);
              }
            );
          }),
          (a.$10 = function (t) {
            for (var e of this.$26)
              try {
                e(t);
              } catch (e) {
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: firstFrameReceivedListener error: ",
                      "",
                    ])),
                  e,
                );
              }
          }),
          (a.onCanvasResize = function (t, n, r) {
            try {
              var e = this.$13.get(t);
              if (!e) return;
              e.onCanvasResize(n, r);
            } catch (e) {
              o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: onCanvasResize : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.setCoverFit = function (t, n) {
            try {
              var e = this.$13.get(t);
              if (!e) return;
              e.setCoverFit(n);
            } catch (e) {
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: setCoverFit : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.requestKeyFrameForCanvas = function (t) {
            var e = this.$7.get(t);
            e != null && this.$12(e, "canvas_request");
          }),
          (a.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (
                  (t === void 0 && (t = "unspecified"),
                  e !== o("WAWebVoipVideoRendererInterface").selfPreviewJid)
                ) {
                  var n = Date.now();
                  if (!this.$27.has(e)) {
                    var r = this.$28.get(e);
                    if (!(r != null && n - r < A)) {
                      (this.$27.add(e), this.$28.set(e, n));
                      try {
                        var a = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        if ((a == null ? void 0 : a.type) !== "web") return;
                        var i = yield a.requestKeyFrame(e);
                        i !== 0 &&
                          o("WALogger").ERROR(
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: VideoRendererRegistry: requestKeyFrameForJid failed: ",
                                "",
                              ])),
                            i,
                          );
                      } finally {
                        this.$27.delete(e);
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
          (a.$24 = function (t, n, r, o, a, i, l, s) {
            var e = this.$8.get(t);
            if (e && !this.$29(t, r, o, s)) {
              var u = this.$30(e, t, n, r, o, a, i, l, s);
              (u && this.$25.set(t, window.performance.now()),
                u && !this.$9.has(t) && (this.$9.add(t), this.$10(t)));
            }
          }),
          (a.$29 = function (t, n, r, a) {
            if (this.$15.has(t)) return (a && this.$15.set(t, !0), !0);
            var e = this.$17.get(t);
            if (e != null)
              if (a)
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe rcvd ",
                      " after ",
                      " drops \u2014 resume",
                    ])),
                  t,
                  e,
                ),
                  this.$17.delete(t));
              else {
                if (e < M) return (this.$17.set(t, e + 1), !0);
                (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe timeout ",
                      " ",
                      " drops \u2014 reactive",
                    ])),
                  t,
                  M,
                ),
                  this.$17.delete(t));
              }
            return n % 2 !== 0 || r % 2 !== 0
              ? (o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] renderFrame: odd frame ",
                      "x",
                      "",
                    ])),
                  n,
                  r,
                ),
                !0)
              : !1;
          }),
          (a.$30 = function (t, n, r, a, i, l, s, u, c) {
            var e = !1;
            for (var d of t.entries()) {
              var m = d[0],
                p = d[1],
                _ = this.$13.get(m);
              if (_)
                try {
                  var f;
                  (_.renderFrame(
                    r,
                    a,
                    i,
                    (f = o("WAWebVoipMediaEnums").Orientation.cast(l)) != null
                      ? f
                      : o("WAWebVoipMediaEnums").Orientation.Normal,
                    p,
                    s,
                    u,
                    c,
                  ),
                    (e = !0));
                } catch (e) {
                  if (
                    e instanceof
                    o("WAWebVoipVideoWebCodecsRenderer").KeyFrameNeededError
                  ) {
                    this.$12(n, "renderer_need_keyframe");
                    continue;
                  }
                  o("WALogger").ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: renderFrame: ",
                        "",
                      ])),
                    e,
                  );
                }
            }
            return e;
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
              var e;
              if (this.$13.has(t)) throw r("err")("canvas already registered");
              var a = this.$1,
                i = this.$3;
              if (a == null || i == null)
                throw r("err")(
                  "init() must be called before registering canvases",
                );
              if (
                i !==
                o("WAWebVoipVideoRendererInterface")
                  .WAWebVoipVideoRendererThreadingMode.MAIN_THREAD
              ) {
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] offthread ",
                      " ",
                      " portal=",
                      "",
                    ])),
                  a,
                  i,
                  n,
                );
                var l = new (r("WAWebVoipVideoOffThreadRendererStub"))(
                  t,
                  a,
                  i,
                  n,
                );
                this.$13.set(t, l);
                return;
              }
              var s = (e = t.ownerDocument) == null ? void 0 : e.defaultView,
                u =
                  s != null && s !== self && typeof s.VideoDecoder == "function"
                    ? s.VideoDecoder
                    : void 0,
                c =
                  a ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBCODECS_H264
                    ? new (o(
                        "WAWebVoipVideoWebCodecsRenderer",
                      ).WAWebVoipVideoWebCodecsRenderer)(t, u)
                    : a ===
                        o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGPU
                      ? new (r("WAWebVoipVideoWebGPURenderer"))(t)
                      : a ===
                          o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.WEBGL
                        ? new (r("WAWebVoipVideoWebGLRenderer"))(t)
                        : a ===
                            o("WAWebVoipVideoRendererInterface")
                              .WAWebVoipVideoRendererType.VIDEOFRAME
                          ? new (o(
                              "WAWebVoipVideoRasterRenderer",
                            ).WAWebVoipVideoFrameRenderer)(t)
                          : new (o(
                              "WAWebVoipVideoRasterRenderer",
                            ).WAWebVoipVideoRasterRenderer)(t);
              this.$13.set(t, c);
            } catch (e) {
              o("WALogger").ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: registerCanvasToRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.$31 = function (t, n) {
            var e = this;
            (o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererRegistry: enabling A/V sync, sampleRate=",
                  "",
                ])),
              t,
            ),
              this.$11.enable(
                t,
                function (t, n, r, o, a, i, l, s) {
                  e.$24(t, n, r, o, a, i, l, s);
                },
                n,
                function (t) {
                  (o("WALogger").WARN(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: AV sync video reset for ",
                        ", requesting keyframe",
                      ])),
                    t,
                  ),
                    e.$16(t),
                    e.$12(t, "av_sync_video_reset"));
                },
              ),
              (this.$32 = function (t) {
                e.$11.reset();
              }),
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                this.$32,
              ));
          }),
          (a.disableAVSync = function () {
            this.$11.isEnabled() &&
              (o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync",
                  ])),
              ),
              this.$11.disable());
            var e = this.$32;
            (e != null &&
              (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                e,
              ),
              (this.$32 = null)),
              (this.$22 = !1));
          }),
          (a.consumeAVSyncMetrics = function () {
            return this.$11.consumeMetrics();
          }),
          (a.peekPerParticipantAVSyncMetrics = function (t) {
            return this.$11.peekPerParticipantMetrics(t);
          }),
          (a.onDecoderFatalError = function () {
            this.$33++;
          }),
          (a.consumeWebCodecsFatalErrorCount = function () {
            var e = this.$33;
            return ((this.$33 = 0), e);
          }),
          (a.removeParticipantAVSync = function (t) {
            this.$11.removeParticipant(t);
          }),
          (a.$23 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$22 = !0;
              try {
                var e,
                  t = yield o(
                    "WAWebVoipAudioCaptureAndPlayback",
                  ).waitForPlaybackStart(w);
                if (!t) {
                  ((this.$22 = !1),
                    o("WALogger").WARN(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererRegistry: timed out waiting ",
                          "ms for audio playback start before enabling A/V sync",
                        ])),
                      w,
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
                this.$31(r, function () {
                  var e = n.getAudioPlaybackTimestamp(),
                    t = o(
                      "WAWebVoipAudioCaptureAndPlayback",
                    ).getEstimatedPlaybackOutputLagSamples();
                  return Math.max(0, e - t);
                });
              } catch (e) {
                ((this.$22 = !1),
                  o("WALogger").ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$14 = function (t) {
            (this.$34(t), this.$9.delete(t) && this.$10(t));
          }),
          (a.$34 = function (t) {
            (this.$8.delete(t),
              this.$15.delete(t),
              this.$17.delete(t),
              this.$28.delete(t),
              this.$27.delete(t),
              this.$20.delete(t),
              this.$19.delete(t),
              this.$25.delete(t));
          }),
          (a.$18 = function (t) {
            try {
              var e = this.$13.get(t);
              if (!e) return;
              (e.cleanup(), this.$13.delete(t));
              var n = this.$7.get(t);
              if (n != null) {
                this.$7.delete(t);
                var r = this.$8.get(n);
                r != null &&
                  (r.delete(t),
                  r.size === 0 && (this.$34(n), this.$9.delete(n)));
              }
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] unregister canvas, left=",
                    "",
                  ])),
                this.$13.size,
              );
            } catch (e) {
              o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
      O = new F();
    ((l.WAWebVoipVideoRendererRegistry = F), (l.videoRendererRegistry = O));
  },
  98,
);
