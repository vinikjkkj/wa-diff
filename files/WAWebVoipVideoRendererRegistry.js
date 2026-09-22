__d(
  "WAWebVoipVideoRendererRegistry",
  [
    "Promise",
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
    "WAWebVoipVideoDecodeOrderTracker",
    "WAWebVoipVideoOffThreadRendererStub",
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRenderSource",
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
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U = 30,
      V = 5e3,
      H = 500;
    function G(e) {
      var t,
        n,
        r =
          (t = (n = e.wid) == null ? void 0 : n.toLogString()) != null
            ? t
            : "self";
      return e.isScreenShare() ? r + " (screen share)" : r;
    }
    function z(e) {
      var t = Number.parseFloat(e);
      return Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0;
    }
    var j = (function () {
        function t() {
          ((this.$14 = new Map()),
            (this.$9 = new Map()),
            (this.$7 = new Map()),
            (this.$8 = new WeakSet()),
            (this.$31 = new Map()),
            (this.$1 = null),
            (this.$3 = null),
            (this.$42 = { brightness: 0, sharpening: 0 }),
            (this.$44 = !1),
            (this.$45 = 0),
            (this.$23 = new Map()),
            (this.$24 = new Set()),
            (this.$29 = new Map()),
            (this.$21 = new Map()),
            (this.$28 = new Map()),
            (this.$10 = new Set()),
            (this.$30 = new Set()),
            (this.$12 = new (o(
              "WAWebVoipAVSyncController",
            ).WAWebVoipAVSyncController)()),
            (this.$25 = !1),
            (this.$47 = null),
            (this.$5 = []),
            (this.$16 = new Map()),
            (this.$19 = new Map()),
            (this.$35 = new Map()),
            (this.$34 = new Set()),
            (this.$33 = new Set()),
            (this.$48 = 0),
            (this.$17 = new (o(
              "WAWebVoipVideoDecodeOrderTracker",
            ).WAWebVoipVideoDecodeOrderTracker)()),
            (this.$40 = 0));
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
          (a.assignSourceToCanvas = function (t) {
            var e = t.canvas,
              n = t.mirror,
              r = t.source,
              a = this.$7.get(e);
            (a != null &&
              a !== r &&
              (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] reassign ",
                    " from ",
                    "",
                  ])),
                r.key,
                a.key,
              ),
              this.unassignSourceFromCanvas(a, e)),
              a !== r && this.$8.delete(e));
            var i = this.$9.get(r),
              l = i == null || i.size === 0;
            (l && this.$10.delete(r) && this.$11(r),
              i ? i.set(e, n) : this.$9.set(r, new Map([[e, n]])),
              this.$7.set(e, r),
              this.$12.removeParticipant(r),
              this.$13(r, "assign_canvas"));
          }),
          (a.unassignSourceFromCanvas = function (t, n) {
            var e = this.$9.get(t);
            if (!(e == null || !e.has(n))) {
              (e.delete(n), this.$7.delete(n), this.$8.delete(n));
              var r = this.$14.get(n);
              (r == null || r.reset(), e.size === 0 && this.$15(t));
            }
          }),
          (a.unassignCanvas = function (t) {
            var e = this.$7.get(t);
            e != null
              ? this.unassignSourceFromCanvas(e, t)
              : o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: Canvas not found in registry",
                    ])),
                );
          }),
          (a.pauseRenderingForSource = function (t) {
            (this.$16.set(t, !1),
              this.$17.resetSource(t, window.performance.now()),
              this.$18(t));
          }),
          (a.resumeRenderingForSource = function (t) {
            var e = this.$16.get(t);
            e != null &&
              (this.$16.delete(t),
              (e || this.$19.has(t)) && this.$13(t, "resume_rendering"));
          }),
          (a.onPeerVideoInactive = function (t) {
            this.$17.resetSource(t, window.performance.now());
          }),
          (a.$18 = function (t) {
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
                t.key,
              ),
                this.$19.set(t, 0),
                this.$17.resetSource(t, window.performance.now()));
              var e = this.$9.get(t);
              if (e)
                for (var n of e) {
                  var a = n[0],
                    i = this.$14.get(a);
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
              this.$20(t),
              (this.$5 = this.$5.filter(function (e) {
                return e.canvas !== t;
              })));
          }),
          (a.onVideoFrameWasmToJs = function (t, n, r, a, i, l, s, u) {
            var e, c;
            t.isSelf()
              ? o("WAWebVoipPerfMeasurement").endMeasurement(
                  o("WAWebVoipPerfMeasurement").PerfMeasurement
                    .FIRST_CAMERA_FRAME,
                )
              : o("WAWebVoipPerfMeasurement").endMeasurement(
                  o("WAWebVoipPerfMeasurement").PerfMeasurement
                    .FIRST_PEER_FRAME,
                );
            var d = this.$21.get(t);
            d != null
              ? ((d.frameCount += 1),
                (d.lastFrameTimestampMs = window.performance.now()),
                (d.lastWidth = r),
                (d.lastHeight = a))
              : this.$21.set(t, {
                  frameCount: 1,
                  lastFrameTimestampMs: window.performance.now(),
                  lastWidth: r,
                  lastHeight: a,
                });
            var m =
              (e = o("WAWebVoipMediaEnums").Orientation.cast(i)) != null
                ? e
                : o("WAWebVoipMediaEnums").Orientation.Normal;
            this.$22(t, m, r, a);
            var p =
                m === o("WAWebVoipMediaEnums").Orientation.Rotate90 ||
                m === o("WAWebVoipMediaEnums").Orientation.Rotate270,
              _ = p ? a : r,
              f = p ? r : a,
              g = this.$23.get(t);
            if (g == null || g.width !== _ || g.height !== f) {
              this.$23.set(t, { width: _, height: f });
              for (var h of this.$24) h(t, _, f);
            }
            var y =
              (c = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) !=
              null
                ? c
                : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (
              (!t.isSelf() && !this.$25 && !this.$12.isEnabled() && this.$26(),
              this.$12.isEnabled() && !t.isSelf())
            ) {
              this.$12.enqueueVideoFrame({
                source: t,
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
            this.$27(t, n, r, a, i, y, s, u);
          }),
          (a.$22 = function (t, n, r, a) {
            var e = this.$28.get(t),
              i = Date.now(),
              l = e == null || e.orientation !== n;
            if (
              o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
                elapsedMsSinceLastLog: e == null ? 0 : i - e.loggedAtMs,
                hasLoggedSnapshot: e != null,
                orientationStateChanged: l,
              })
            ) {
              this.$28.set(t, { loggedAtMs: i, orientation: n });
              var s = t.isSelf() ? 1 : 0,
                u = n;
              l
                ? o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [orient_render_v1] self=",
                        " orientation=",
                        " coded=",
                        "x",
                        "",
                      ])),
                    s,
                    u,
                    r,
                    a,
                  )
                : o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [orient_render_v1] self=",
                        " orientation=",
                        " coded=",
                        "x",
                        "",
                      ])),
                    s,
                    u,
                    r,
                    a,
                  );
            }
          }),
          (a.getVideoDimensions = function (t) {
            var e;
            return (e = this.$23.get(t)) != null ? e : null;
          }),
          (a.hasCanvasForSource = function (t) {
            var e = this.$9.get(t);
            return e != null && e.size > 0;
          }),
          (a.getDecodeStatsForSource = function (t) {
            var e;
            return (e = this.$21.get(t)) != null ? e : null;
          }),
          (a.getLastPaintTimestampMsForSource = function (t) {
            var e;
            return (e = this.$29.get(t)) != null ? e : null;
          }),
          (a.addVideoDimensionChangeListener = function (t) {
            var e = this;
            return (
              this.$24.add(t),
              function () {
                e.$24.delete(t);
              }
            );
          }),
          (a.hasReceivedFirstFrameForSource = function (t) {
            return this.$10.has(t);
          }),
          (a.resetFirstFrameReceivedForSource = function (t) {
            this.$10.delete(t) && this.$11(t);
          }),
          (a.addFirstFrameReceivedListener = function (t) {
            var e = this;
            return (
              this.$30.add(t),
              function () {
                e.$30.delete(t);
              }
            );
          }),
          (a.hasRenderedFirstFrameForCanvas = function (t) {
            return this.$8.has(t);
          }),
          (a.addFirstFrameRenderedListenerForCanvas = function (t, n) {
            var e = this,
              r = this.$31.get(t);
            return (
              r == null && ((r = new Set()), this.$31.set(t, r)),
              r.add(n),
              function () {
                var o, a;
                ((o = r) == null || o.delete(n),
                  ((a = r) == null ? void 0 : a.size) === 0 &&
                    e.$31.get(t) === r &&
                    e.$31.delete(t));
              }
            );
          }),
          (a.$11 = function (t) {
            for (var e of this.$30)
              try {
                e(t);
              } catch (e) {
                o("WALogger").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: firstFrameReceivedListener error: ",
                      "",
                    ])),
                  e,
                );
              }
          }),
          (a.$32 = function (t) {
            var e;
            if (!(!this.$7.has(t) || this.$8.has(t))) {
              this.$8.add(t);
              var n = Array.from((e = this.$31.get(t)) != null ? e : []);
              for (var r of n)
                try {
                  r();
                } catch (e) {
                  o("WALogger").ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: canvas first-frame listener error: ",
                        "",
                      ])),
                    e,
                  );
                }
            }
          }),
          (a.onCanvasResize = function (t, n, r) {
            try {
              var e = this.$14.get(t);
              if (!e) return;
              e.onCanvasResize(n, r);
            } catch (e) {
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: onCanvasResize : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.setCoverFit = function (t, n) {
            try {
              var e = this.$14.get(t);
              if (!e) return;
              e.setCoverFit(n);
            } catch (e) {
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: setCoverFit : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.requestKeyFrameForCanvas = function (t) {
            var e = this.$7.get(t);
            e != null && this.$13(e, "canvas_request");
          }),
          (a.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 && (t = "unspecified");
                var n = e.wid;
                if (n != null) {
                  if (!n.isUser()) {
                    this.$33.has(e) ||
                      (this.$33.add(e),
                      o("WALogger")
                        .WARN(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: VideoRendererRegistry: keyframe request unsupported for non-user source=",
                              " reason=",
                              "",
                            ])),
                          e.key,
                          t,
                        )
                        .sendLogs("voip-keyframe-request-non-user-source"));
                    return;
                  }
                  var r = Date.now();
                  if (!this.$34.has(e)) {
                    var a = this.$35.get(e);
                    if (!(a != null && r - a < H)) {
                      (this.$34.add(e), this.$35.set(e, r));
                      try {
                        var i = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        if ((i == null ? void 0 : i.type) !== "web") return;
                        var l = yield i.requestKeyFrame(n, e.isScreenShare());
                        l !== 0 &&
                          o("WALogger").ERROR(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: VideoRendererRegistry: requestKeyFrameForSource failed: ",
                                "",
                              ])),
                            l,
                          );
                      } finally {
                        this.$34.delete(e);
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
          (a.$27 = function (t, n, r, o, a, i, l, s) {
            var e = this.$9.get(t);
            if (e && !this.$36(t, r, o, s)) {
              var u = window.performance.now();
              this.$37(e, t, i, l, s, u);
              var c = this.$38(e, t, n, r, o, a, i, l, s);
              (c &&
                (this.$29.set(t, u), t.isSelf() || this.$17.markRendered(t, u)),
                c && !this.$10.has(t) && (this.$10.add(t), this.$11(t)));
            }
          }),
          (a.$36 = function (t, n, r, a) {
            if (this.$16.has(t)) return (a && this.$16.set(t, !0), !0);
            var e = this.$19.get(t);
            if (e != null)
              if (a)
                (o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe rcvd ",
                      " after ",
                      " drops \u2014 resume",
                    ])),
                  t.key,
                  e,
                ),
                  this.$19.delete(t));
              else {
                if (e < U) return (this.$19.set(t, e + 1), !0);
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe timeout ",
                      " ",
                      " drops \u2014 reactive",
                    ])),
                  t.key,
                  U,
                ),
                  this.$19.delete(t));
              }
            return n % 2 !== 0 || r % 2 !== 0
              ? (o("WALogger").ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$37 = function (t, n, r, a, i, l) {
            if (
              !(
                n.isSelf() ||
                r !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264 ||
                !this.$39(t)
              )
            ) {
              this.$40++;
              var e = this.$17.observe(n, a, i, l),
                s = e.episodeStarted;
              s &&
                o("WALogger").WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: out-of-order delta frame for ",
                      " ts=",
                      ", decoder reference chain broken until next keyframe",
                    ])),
                  G(n),
                  a,
                );
            }
          }),
          (a.$39 = function (t) {
            for (var e of t.keys()) if (this.$14.has(e)) return !0;
            return !1;
          }),
          (a.$38 = function (t, n, r, a, i, l, s, u, c) {
            var e = !1;
            for (var d of t.entries()) {
              var m = d[0],
                p = d[1],
                _ = this.$14.get(m);
              if (_)
                try {
                  var f;
                  (_.renderFrame({
                    format: s,
                    frameBuffer: r,
                    height: i,
                    isKeyFrame: c,
                    mirror: p,
                    orientation:
                      (f = o("WAWebVoipMediaEnums").Orientation.cast(l)) != null
                        ? f
                        : o("WAWebVoipMediaEnums").Orientation.Normal,
                    timestamp: u,
                    width: a,
                  }),
                    (e = !0));
                } catch (e) {
                  if (
                    e instanceof
                    o("WAWebVoipVideoWebCodecsRenderer").KeyFrameNeededError
                  ) {
                    this.$13(n, "renderer_need_keyframe");
                    continue;
                  }
                  o("WALogger").ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
              if (this.$14.has(t)) throw r("err")("canvas already registered");
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
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] offthread ",
                      " ",
                      " portal=",
                      "",
                    ])),
                  a,
                  i,
                  n,
                );
                var l = new (r("WAWebVoipVideoOffThreadRendererStub"))({
                  canvas: t,
                  portalMode: n,
                  rendererType: a,
                  threadingMode: i,
                });
                (this.$14.set(t, l), this.$41(t, l));
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
              (this.$14.set(t, c), this.$41(t, c));
            } catch (e) {
              o("WALogger").ERROR(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: registerCanvasToRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.$41 = function (t, n) {
            var e = this;
            (n.setRenderCallback(function () {
              e.$32(t);
            }),
              n.setVideoEnhancement(this.$42.brightness, this.$42.sharpening),
              this.$43());
          }),
          (a.$43 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!this.$44) {
                this.$44 = !0;
                var e = this.$45;
                try {
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  if ((t == null ? void 0 : t.type) !== "web") return;
                  var r = yield (q || (q = n("Promise"))).all([
                      t.getVoipParam("options.video_brightness_setting"),
                      t.getVoipParam("options.video_sharpening_setting"),
                    ]),
                    a = r[0],
                    i = r[1];
                  if (e !== this.$45) return;
                  var l = z(a),
                    s = z(i);
                  ((this.$42 = { brightness: l, sharpening: s }),
                    o("WALogger").LOG(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "[VideoRendererRegistry] video enhancement brightness=",
                          " sharpening=",
                          "",
                        ])),
                      l,
                      s,
                    ));
                  for (var u of this.$14.values()) u.setVideoEnhancement(l, s);
                } catch (e) {
                  o("WALogger").ERROR(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: loadVideoEnhancement failed: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.resetVideoEnhancementState = function () {
            (this.$45++,
              (this.$44 = !1),
              (this.$42 = { brightness: 0, sharpening: 0 }),
              this.$28.clear());
            for (var e of this.$14.values()) e.setVideoEnhancement(0, 0);
          }),
          (a.reloadVideoEnhancement = function () {
            (this.$45++, (this.$44 = !1), this.$43());
          }),
          (a.$46 = function (t, n) {
            var e = this;
            (o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererRegistry: enabling A/V sync, sampleRate=",
                  "",
                ])),
              t,
            ),
              this.$12.enable(
                t,
                function (t, n, r, o, a, i, l, s) {
                  e.$27(t, n, r, o, a, i, l, s);
                },
                n,
                function (t) {
                  (o("WALogger").WARN(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: AV sync video reset for ",
                        ", requesting keyframe",
                      ])),
                    t.key,
                  ),
                    e.$18(t),
                    e.$13(t, "av_sync_video_reset"));
                },
              ),
              (this.$47 = function (t) {
                e.$12.reset();
              }),
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                this.$47,
              ));
          }),
          (a.disableAVSync = function () {
            this.$12.isEnabled() &&
              (o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync",
                  ])),
              ),
              this.$12.disable());
            var e = this.$47;
            (e != null &&
              (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                e,
              ),
              (this.$47 = null)),
              (this.$25 = !1));
          }),
          (a.consumeAVSyncMetrics = function () {
            return this.$12.consumeMetrics();
          }),
          (a.peekPerParticipantAVSyncMetrics = function (t) {
            return this.$12.peekPerParticipantMetrics(t);
          }),
          (a.onDecoderFatalError = function () {
            this.$48++;
          }),
          (a.consumeWebCodecsFatalErrorCount = function () {
            var e = this.$48;
            return ((this.$48 = 0), e);
          }),
          (a.consumeWebCodecsDecodeOrderMetrics = function () {
            var e = this.$17.consume(window.performance.now()),
              t = this.$40;
            return ((this.$40 = 0), t === 0 ? null : e);
          }),
          (a.removeParticipantAVSync = function (t) {
            var e = window.performance.now();
            for (var n of [
              o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
              o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                .SCREEN_SHARE,
            ]) {
              var r = o(
                "WAWebVoipVideoRenderSource",
              ).WAWebVoipVideoRenderSource.peer(t, n);
              (this.$12.removeParticipant(r), this.$17.resetSource(r, e));
            }
          }),
          (a.$26 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$25 = !0;
              try {
                var e,
                  t = yield o(
                    "WAWebVoipAudioCaptureAndPlayback",
                  ).waitForPlaybackStart(V);
                if (!t) {
                  ((this.$25 = !1),
                    o("WALogger").WARN(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererRegistry: timed out waiting ",
                          "ms for audio playback start before enabling A/V sync",
                        ])),
                      V,
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
                this.$46(r, function () {
                  var e = n.getAudioPlaybackTimestamp(),
                    t = o(
                      "WAWebVoipAudioCaptureAndPlayback",
                    ).getEstimatedPlaybackOutputLagSamples();
                  return Math.max(0, e - t);
                });
              } catch (e) {
                ((this.$25 = !1),
                  o("WALogger").ERROR(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$15 = function (t) {
            (this.$49(t), this.$10.delete(t) && this.$11(t));
          }),
          (a.$49 = function (t) {
            (this.$9.delete(t),
              this.$16.delete(t),
              this.$19.delete(t),
              this.$35.delete(t),
              this.$34.delete(t),
              this.$33.delete(t),
              this.$23.delete(t),
              this.$28.delete(t),
              this.$21.delete(t),
              this.$29.delete(t),
              this.$17.resetSource(t, window.performance.now()));
          }),
          (a.$20 = function (t) {
            try {
              var e = this.$14.get(t);
              if (!e) return;
              (e.cleanup(),
                this.$14.delete(t),
                this.$8.delete(t),
                this.$31.delete(t));
              var n = this.$7.get(t);
              if (n != null) {
                this.$7.delete(t);
                var r = this.$9.get(n);
                r != null &&
                  (r.delete(t),
                  r.size === 0 && (this.$49(n), this.$10.delete(n)));
              }
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] unregister canvas, left=",
                    "",
                  ])),
                this.$14.size,
              );
            } catch (e) {
              o("WALogger").ERROR(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
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
      K = new j();
    ((l.WAWebVoipVideoRendererRegistry = j), (l.videoRendererRegistry = K));
  },
  98,
);
