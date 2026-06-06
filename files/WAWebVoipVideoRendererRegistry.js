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
            (this.$19 = new Map()),
            (this.$20 = new Set()),
            (this.$9 = new Set()),
            (this.$24 = new Set()),
            (this.$11 = new (o(
              "WAWebVoipAVSyncController",
            ).WAWebVoipAVSyncController)()),
            (this.$21 = !1),
            (this.$30 = null),
            (this.$5 = []),
            (this.$15 = new Map()),
            (this.$17 = new Map()),
            (this.$26 = new Map()),
            (this.$25 = new Set()),
            (this.$31 = 0));
        }
        var n = t.prototype;
        return (
          (n.init = async function () {
            var t = this;
            try {
              this.$1 = await this.$2();
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
          }),
          (n.getRendererType = function () {
            var e = this.$1;
            if (e == null)
              throw r("err")("init() must be called before getRendererType");
            return e;
          }),
          (n.registerVideoCanvas = function (t, n) {
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
          (n.assignJidToCanvas = function (t, n, r) {
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
          (n.unassignJidFromCanvas = function (t, n) {
            var e = this.$8.get(t);
            if (!(e == null || !e.has(n))) {
              var r = this.$13.get(n);
              (r == null || r.reset(),
                e.delete(n),
                this.$7.delete(n),
                e.size === 0 && this.$14(t));
            }
          }),
          (n.unassignCanvas = function (t) {
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
          (n.pauseRenderingForJid = function (t) {
            (this.$15.set(t, !1), this.$16(t));
          }),
          (n.resumeRenderingForJid = function (t) {
            var e = this.$15.get(t);
            e != null &&
              (this.$15.delete(t),
              (e || this.$17.has(t)) && this.$12(t, "resume_rendering"));
          }),
          (n.$16 = function (t) {
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
          (n.unregisterVideoCanvas = function (t) {
            (this.unassignCanvas(t),
              this.$18(t),
              (this.$5 = this.$5.filter(function (e) {
                return e.canvas !== t;
              })));
          }),
          (n.onVideoFrameWasmToJs = function (t, n, r, a, i, l, s, u) {
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
              f = this.$19.get(t);
            if (f == null || f.width !== p || f.height !== _) {
              this.$19.set(t, { width: p, height: _ });
              for (var g of this.$20) g(t, p, _);
            }
            var h =
              (c = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) !=
              null
                ? c
                : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (
              (t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid &&
                !this.$21 &&
                !this.$11.isEnabled() &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_platform_av_sync",
                ) === !0 &&
                this.$22(),
              this.$11.isEnabled() &&
                t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid)
            ) {
              this.$11.enqueueVideoFrame({
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
            this.$23(t, n, r, a, i, h, s, u);
          }),
          (n.getVideoDimensions = function (t) {
            var e;
            return (e = this.$19.get(t)) != null ? e : null;
          }),
          (n.hasCanvasForJid = function (t) {
            var e = this.$8.get(t);
            return e != null && e.size > 0;
          }),
          (n.addVideoDimensionChangeListener = function (t) {
            var e = this;
            return (
              this.$20.add(t),
              function () {
                e.$20.delete(t);
              }
            );
          }),
          (n.hasReceivedFirstFrameForJid = function (t) {
            return this.$9.has(t);
          }),
          (n.addFirstFrameReceivedListener = function (t) {
            var e = this;
            return (
              this.$24.add(t),
              function () {
                e.$24.delete(t);
              }
            );
          }),
          (n.$10 = function (t) {
            for (var e of this.$24)
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
          (n.onCanvasResize = function (t, n, r) {
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
          (n.setCoverFit = function (t, n) {
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
          (n.requestKeyFrameForCanvas = function (t) {
            var e = this.$7.get(t);
            e != null && this.$12(e, "canvas_request");
          }),
          (n.$12 = async function (t, n) {
            if (
              (n === void 0 && (n = "unspecified"),
              t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid)
            ) {
              var e = Date.now();
              if (!this.$25.has(t)) {
                var r = this.$26.get(t);
                if (!(r != null && e - r < A)) {
                  (this.$25.add(t), this.$26.set(t, e));
                  try {
                    var a = await o(
                      "WAWebVoipStackInterface",
                    ).getVoipStackInterface();
                    if ((a == null ? void 0 : a.type) !== "web") return;
                    var i = await a.requestKeyFrame(t);
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
                    this.$25.delete(t);
                  }
                }
              }
            }
          }),
          (n.$23 = function (t, n, r, o, a, i, l, s) {
            var e = this.$8.get(t);
            if (e && !this.$27(t, r, o, s)) {
              var u = this.$28(e, t, n, r, o, a, i, l, s);
              u && !this.$9.has(t) && (this.$9.add(t), this.$10(t));
            }
          }),
          (n.$27 = function (t, n, r, a) {
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
          (n.$28 = function (t, n, r, a, i, l, s, u, c) {
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
          (n.$4 = function (t) {
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
          (n.$2 = async function () {
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
              : ((await o(
                  "WAWebVoipVideoWebCodecsRenderer",
                ).WAWebVoipVideoWebCodecsRenderer.checkAvailability())
                  ? (n = o("WAWebVoipVideoRendererInterface")
                      .WAWebVoipVideoRendererType.WEBCODECS_H264)
                  : (await r(
                        "WAWebVoipVideoWebGPURenderer",
                      ).checkAvailability())
                    ? (n = o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.WEBGPU)
                    : r("WAWebVoipVideoWebGLRenderer").checkAvailability()
                      ? (n = o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGL)
                      : (await o(
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
          }),
          (n.$6 = function (t, n) {
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
          (n.$29 = function (t, n) {
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
                  e.$23(t, n, r, o, a, i, l, s);
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
              (this.$30 = function (t) {
                e.$11.reset();
              }),
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                this.$30,
              ));
          }),
          (n.disableAVSync = function () {
            this.$11.isEnabled() &&
              (o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync",
                  ])),
              ),
              this.$11.disable());
            var e = this.$30;
            (e != null &&
              (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                e,
              ),
              (this.$30 = null)),
              (this.$21 = !1));
          }),
          (n.consumeAVSyncMetrics = function () {
            return this.$11.consumeMetrics();
          }),
          (n.peekPerParticipantAVSyncMetrics = function (t) {
            return this.$11.peekPerParticipantMetrics(t);
          }),
          (n.onDecoderFatalError = function () {
            this.$31++;
          }),
          (n.consumeWebCodecsFatalErrorCount = function () {
            var e = this.$31;
            return ((this.$31 = 0), e);
          }),
          (n.removeParticipantAVSync = function (t) {
            this.$11.removeParticipant(t);
          }),
          (n.$22 = async function () {
            this.$21 = !0;
            try {
              var e,
                t = await o(
                  "WAWebVoipAudioCaptureAndPlayback",
                ).waitForPlaybackStart(w);
              if (!t) {
                ((this.$21 = !1),
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
                  await o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                r =
                  (e = o(
                    "WAWebVoipAudioPlaybackState",
                  ).getPlaybackSampleRate()) != null
                    ? e
                    : 16e3;
              this.$29(r, function () {
                var e = n.getAudioPlaybackTimestamp(),
                  t = o(
                    "WAWebVoipAudioCaptureAndPlayback",
                  ).getEstimatedPlaybackOutputLagSamples();
                return Math.max(0, e - t);
              });
            } catch (e) {
              ((this.$21 = !1),
                o("WALogger").ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: initAVSync failed: ",
                      "",
                    ])),
                  e,
                ));
            }
          }),
          (n.$14 = function (t) {
            (this.$32(t), this.$9.delete(t) && this.$10(t));
          }),
          (n.$32 = function (t) {
            (this.$8.delete(t),
              this.$15.delete(t),
              this.$17.delete(t),
              this.$26.delete(t),
              this.$25.delete(t),
              this.$19.delete(t));
          }),
          (n.$18 = function (t) {
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
                  r.size === 0 && (this.$32(n), this.$9.delete(n)));
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
