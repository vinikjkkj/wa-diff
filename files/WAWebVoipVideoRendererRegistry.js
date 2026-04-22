__d(
  "WAWebVoipVideoRendererRegistry",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceEvents",
    "WAWebBackendApi",
    "WAWebVoipAVSyncController",
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
      I = (function () {
        function t() {
          ((this.$11 = new Map()),
            (this.$8 = new Map()),
            (this.$7 = new Map()),
            (this.$1 = null),
            (this.$3 = null),
            (this.$14 = new Map()),
            (this.$15 = new Set()),
            (this.$9 = new (o(
              "WAWebVoipAVSyncController",
            ).WAWebVoipAVSyncController)()),
            (this.$16 = !1),
            (this.$20 = null),
            (this.$5 = []),
            (this.$12 = new Map()),
            (this.$21 = 0));
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
              this.$10(t));
          }),
          (a.unassignJidFromCanvas = function (t, n) {
            var e = this.$8.get(t);
            if (e != null) {
              if (e.has(n)) {
                var r = this.$11.get(n);
                (e.delete(n), this.$7.delete(n), r == null || r.reset());
              }
              e.size === 0 && (this.$8.delete(t), this.$12.delete(t));
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
            this.$12.set(t, !1);
          }),
          (a.resumeRenderingForJid = function (t) {
            var e = this.$12.get(t);
            e != null && (this.$12.delete(t), e && this.$10(t));
          }),
          (a.unregisterVideoCanvas = function (t) {
            (this.unassignCanvas(t),
              this.$13(t),
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
              f = this.$14.get(t);
            if (f == null || f.width !== p || f.height !== _) {
              this.$14.set(t, { width: p, height: _ });
              for (var g of this.$15) g(t, p, _);
            }
            var h =
              (c = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) !=
              null
                ? c
                : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (
              (t !== o("WAWebVoipVideoRendererInterface").selfPreviewJid &&
                !this.$16 &&
                !this.$9.isEnabled() &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_platform_av_sync",
                ) === !0 &&
                this.$17(),
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
            this.$18(t, n, r, a, i, h, s, u);
          }),
          (a.getVideoDimensions = function (t) {
            var e;
            return (e = this.$14.get(t)) != null ? e : null;
          }),
          (a.addVideoDimensionChangeListener = function (t) {
            var e = this;
            return (
              this.$15.add(t),
              function () {
                e.$15.delete(t);
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: setCoverFit : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.requestKeyFrameForCanvas = function (t) {
            var e = this.$7.get(t);
            e != null && this.$10(e);
          }),
          (a.$10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e !== o("WAWebVoipVideoRendererInterface").selfPreviewJid) {
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  if ((t == null ? void 0 : t.type) === "web") {
                    var n = yield t.requestKeyFrame(e);
                    n !== 0 &&
                      o("WALogger").ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: VideoRendererRegistry: requestKeyFrameForJid failed: ",
                            "",
                          ])),
                        n,
                      );
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$18 = function (t, n, r, a, i, l, s, u) {
            var e = this.$8.get(t);
            if (e) {
              if (this.$12.has(t)) {
                u && this.$12.set(t, !0);
                return;
              }
              if (r % 2 !== 0 || a % 2 !== 0) {
                o("WALogger").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] renderFrame: odd frame ",
                      "x",
                      "",
                    ])),
                  r,
                  a,
                );
                return;
              }
              for (var c of e.entries()) {
                var d = c[0],
                  m = c[1],
                  p = this.$11.get(d);
                if (p)
                  try {
                    var _;
                    p.renderFrame(
                      n,
                      r,
                      a,
                      (_ = o("WAWebVoipMediaEnums").Orientation.cast(i)) != null
                        ? _
                        : o("WAWebVoipMediaEnums").Orientation.Normal,
                      m,
                      l,
                      s,
                      u,
                    );
                  } catch (e) {
                    if (
                      e instanceof
                      o("WAWebVoipVideoWebCodecsRenderer").KeyFrameNeededError
                    ) {
                      this.$10(t);
                      continue;
                    }
                    o("WALogger").ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
              var e;
              return (
                (yield o(
                  "WAWebVoipVideoWebCodecsRenderer",
                ).WAWebVoipVideoWebCodecsRenderer.checkAvailability())
                  ? (e = o("WAWebVoipVideoRendererInterface")
                      .WAWebVoipVideoRendererType.WEBCODECS_H264)
                  : (yield r(
                        "WAWebVoipVideoWebGPURenderer",
                      ).checkAvailability())
                    ? (e = o("WAWebVoipVideoRendererInterface")
                        .WAWebVoipVideoRendererType.WEBGPU)
                    : r("WAWebVoipVideoWebGLRenderer").checkAvailability()
                      ? (e = o("WAWebVoipVideoRendererInterface")
                          .WAWebVoipVideoRendererType.WEBGL)
                      : (yield o(
                            "WAWebVoipVideoRasterRenderer",
                          ).WAWebVoipVideoFrameRenderer.checkAvailability())
                        ? (e = o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.VIDEOFRAME)
                        : (e = o("WAWebVoipVideoRendererInterface")
                            .WAWebVoipVideoRendererType.RASTER),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] rendererType=",
                      " (compat)",
                    ])),
                  e,
                ),
                e
              );
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: registerCanvasToRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.$19 = function (t, n) {
            var e = this;
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererRegistry: enabling A/V sync, sampleRate=",
                  "",
                ])),
              t,
            ),
              this.$9.enable(
                t,
                function (t, n, r, o, a, i, l, s) {
                  e.$18(t, n, r, o, a, i, l, s);
                },
                n,
              ),
              (this.$20 = function (t) {
                e.$9.reset();
              }),
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                this.$20,
              ));
          }),
          (a.disableAVSync = function () {
            this.$9.isEnabled() &&
              (o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync",
                  ])),
              ),
              this.$9.disable());
            var e = this.$20;
            (e != null &&
              (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                e,
              ),
              (this.$20 = null)),
              (this.$16 = !1));
          }),
          (a.consumeAVSyncMetrics = function () {
            return this.$9.consumeMetrics();
          }),
          (a.onDecoderFatalError = function () {
            this.$21++;
          }),
          (a.consumeWebCodecsFatalErrorCount = function () {
            var e = this.$21;
            return ((this.$21 = 0), e);
          }),
          (a.removeParticipantAVSync = function (t) {
            this.$9.removeParticipant(t);
          }),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$16 = !0;
              try {
                var e,
                  t =
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "initializeVoipWasm",
                    ),
                  n =
                    (e = o(
                      "WAWebVoipAudioPlaybackState",
                    ).getPlaybackSampleRate()) != null
                      ? e
                      : 16e3;
                this.$19(n, function () {
                  return t.getAudioPlaybackTimestamp();
                });
              } catch (e) {
                ((this.$16 = !1),
                  o("WALogger").ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$13 = function (t) {
            try {
              var e = this.$11.get(t);
              if (!e) return;
              (e.cleanup(),
                this.$11.delete(t),
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] unregister canvas, left=",
                      "",
                    ])),
                  this.$11.size,
                ));
            } catch (e) {
              o("WALogger").ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
      T = new I();
    ((l.WAWebVoipVideoRendererRegistry = I), (l.videoRendererRegistry = T));
  },
  98,
);
