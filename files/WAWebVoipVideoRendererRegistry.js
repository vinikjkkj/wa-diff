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
    "WAWebVoipGatingUtils",
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
    "getErrorSafe",
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
      U,
      V,
      H = 30,
      G = 5e3,
      z = 500;
    function j(e) {
      var t,
        n,
        r =
          (t = (n = e.wid) == null ? void 0 : n.toLogString()) != null
            ? t
            : "self";
      return e.isScreenShare() ? r + " (screen share)" : r;
    }
    function K(e) {
      var t = Number.parseFloat(e);
      return Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0;
    }
    var Q = (function () {
        function t() {
          ((this.$14 = new Map()),
            (this.$9 = new Map()),
            (this.$7 = new Map()),
            (this.$8 = new WeakSet()),
            (this.$32 = new Map()),
            (this.$1 = null),
            (this.$3 = null),
            (this.$44 = { brightness: 0, sharpening: 0 }),
            (this.$46 = !1),
            (this.$47 = 0),
            (this.$24 = new Map()),
            (this.$25 = new Set()),
            (this.$30 = new Map()),
            (this.$22 = new Map()),
            (this.$29 = new Map()),
            (this.$10 = new Set()),
            (this.$31 = new Set()),
            (this.$12 = new (o(
              "WAWebVoipAVSyncController",
            ).WAWebVoipAVSyncController)()),
            (this.$26 = !1),
            (this.$49 = null),
            (this.$5 = []),
            (this.$16 = new Map()),
            (this.$19 = new Map()),
            (this.$36 = new Map()),
            (this.$35 = new Set()),
            (this.$34 = new Set()),
            (this.$50 = 0),
            (this.$17 = new (o(
              "WAWebVoipVideoDecodeOrderTracker",
            ).WAWebVoipVideoDecodeOrderTracker)()),
            (this.$41 = 0));
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
            this.$1 !==
              o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                .WEBCODECS_H264 ||
              o("WAWebABProps").getABPropConfigValue(
                "enable_webcodec_require_keyframe",
              ) !== !0 ||
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] resetWebCodecs ",
                    " \u2014 await keyframe",
                  ])),
                t.key,
              ),
              this.$17.resetSource(t, window.performance.now()),
              this.$20(t));
          }),
          (a.$20 = function (t) {
            if (
              (this.$19.set(t, 0),
              this.$1 ===
                o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                  .WEBCODECS_H264)
            ) {
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
              this.$21(t),
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
            var d = this.$22.get(t);
            d != null
              ? ((d.frameCount += 1),
                (d.lastFrameTimestampMs = window.performance.now()),
                (d.lastWidth = r),
                (d.lastHeight = a))
              : this.$22.set(t, {
                  frameCount: 1,
                  lastFrameTimestampMs: window.performance.now(),
                  lastWidth: r,
                  lastHeight: a,
                });
            var m =
              (e = o("WAWebVoipMediaEnums").Orientation.cast(i)) != null
                ? e
                : o("WAWebVoipMediaEnums").Orientation.Normal;
            this.$23(t, m, r, a);
            var p =
                m === o("WAWebVoipMediaEnums").Orientation.Rotate90 ||
                m === o("WAWebVoipMediaEnums").Orientation.Rotate270,
              _ = p ? a : r,
              f = p ? r : a,
              g = this.$24.get(t);
            if (g == null || g.width !== _ || g.height !== f) {
              this.$24.set(t, { width: _, height: f });
              for (var h of this.$25) h(t, _, f);
            }
            var y =
              (c = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) !=
              null
                ? c
                : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (
              (!t.isSelf() && !this.$26 && !this.$12.isEnabled() && this.$27(),
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
            this.$28(t, n, r, a, i, y, s, u);
          }),
          (a.$23 = function (t, n, r, a) {
            var e = this.$29.get(t),
              i = Date.now(),
              l = e == null || e.orientation !== n;
            if (
              o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
                elapsedMsSinceLastLog: e == null ? 0 : i - e.loggedAtMs,
                hasLoggedSnapshot: e != null,
                orientationStateChanged: l,
              })
            ) {
              this.$29.set(t, { loggedAtMs: i, orientation: n });
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
            return (e = this.$24.get(t)) != null ? e : null;
          }),
          (a.hasCanvasForSource = function (t) {
            var e = this.$9.get(t);
            return e != null && e.size > 0;
          }),
          (a.getDecodeStatsForSource = function (t) {
            var e;
            return (e = this.$22.get(t)) != null ? e : null;
          }),
          (a.getLastPaintTimestampMsForSource = function (t) {
            var e;
            return (e = this.$30.get(t)) != null ? e : null;
          }),
          (a.addVideoDimensionChangeListener = function (t) {
            var e = this;
            return (
              this.$25.add(t),
              function () {
                e.$25.delete(t);
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
              this.$31.add(t),
              function () {
                e.$31.delete(t);
              }
            );
          }),
          (a.hasRenderedFirstFrameForCanvas = function (t) {
            return this.$8.has(t);
          }),
          (a.addFirstFrameRenderedListenerForCanvas = function (t, n) {
            var e = this,
              r = this.$32.get(t);
            return (
              r == null && ((r = new Set()), this.$32.set(t, r)),
              r.add(n),
              function () {
                var o, a;
                ((o = r) == null || o.delete(n),
                  ((a = r) == null ? void 0 : a.size) === 0 &&
                    e.$32.get(t) === r &&
                    e.$32.delete(t));
              }
            );
          }),
          (a.$11 = function (t) {
            for (var e of this.$31)
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
          (a.$33 = function (t) {
            var e;
            if (!(!this.$7.has(t) || this.$8.has(t))) {
              this.$8.add(t);
              var n = Array.from((e = this.$32.get(t)) != null ? e : []);
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
                    this.$34.has(e) ||
                      (this.$34.add(e),
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
                  var a = Date.now();
                  if (!this.$35.has(e)) {
                    var i = this.$36.get(e);
                    if (!(i != null && a - i < z)) {
                      (this.$35.add(e), this.$36.set(e, a));
                      try {
                        var l = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        if ((l == null ? void 0 : l.type) !== "web") return;
                        var s = yield l.requestKeyFrame(n, e.isScreenShare());
                        s !== 0 &&
                          o("WALogger").ERROR(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: VideoRendererRegistry: requestKeyFrameForSource failed: ",
                                "",
                              ])),
                            s,
                          );
                      } catch (e) {
                        o("WALogger")
                          .ERROR(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: VideoRendererRegistry: requestKeyFrameForSource threw reason=",
                                "",
                              ])),
                            t,
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("voip-keyframe-request-threw", {
                            sampling: 0.01,
                          });
                      } finally {
                        this.$35.delete(e);
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
          (a.$28 = function (t, n, r, o, a, i, l, s) {
            var e = this.$9.get(t);
            if (e && !this.$37(t, r, o, s)) {
              var u = window.performance.now(),
                c = this.$38(e, t, i, l, s, u);
              if (!c) {
                var d = this.$39(e, t, n, r, o, a, i, l, s);
                (d &&
                  (this.$30.set(t, u),
                  t.isSelf() || this.$17.markRendered(t, u)),
                  d && !this.$10.has(t) && (this.$10.add(t), this.$11(t)));
              }
            }
          }),
          (a.$37 = function (t, n, r, a) {
            if (this.$16.has(t)) return (a && this.$16.set(t, !0), !0);
            var e = this.$19.get(t);
            if (e != null)
              if (a)
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe rcvd ",
                      " after ",
                      " drops \u2014 resume",
                    ])),
                  t.key,
                  e,
                ),
                  this.$19.delete(t));
              else {
                if (e < H) return (this.$19.set(t, e + 1), !0);
                (o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe timeout ",
                      " ",
                      " drops \u2014 reactive",
                    ])),
                  t.key,
                  H,
                ),
                  this.$19.delete(t));
              }
            return n % 2 !== 0 || r % 2 !== 0
              ? (o("WALogger").ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$38 = function (t, n, r, a, i, l) {
            if (
              n.isSelf() ||
              r !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264 ||
              !this.$40(t)
            )
              return !1;
            (this.$41 === 0 && this.$42(), this.$41++);
            var e = this.$17.observe(n, a, i, l),
              s = e.episodeStarted,
              u = e.outOfOrder;
            return (
              s &&
                o("WALogger").WARN(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: out-of-order delta frame for ",
                      " ts=",
                      ", decoder reference chain broken until next keyframe",
                    ])),
                  j(n),
                  a,
                ),
              !u ||
              !o("WAWebVoipGatingUtils").isDropOutOfOrderVideoFramesEnabled()
                ? !1
                : (o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[VideoRendererRegistry] dropping out-of-order frame ",
                        " \u2014 await keyframe",
                      ])),
                    j(n),
                  ),
                  this.$20(n),
                  this.$13(n, "out_of_order_frame"),
                  !0)
            );
          }),
          (a.$42 = function () {
            var e =
              (o("WAWebVoipGatingUtils").isAvSyncStrictFifoDrainEnabled()
                ? 1
                : 0) +
              (o("WAWebVoipGatingUtils").isDropOutOfOrderVideoFramesEnabled()
                ? 2
                : 0);
            return (this.$17.setOrderingMode(e), e);
          }),
          (a.$40 = function (t) {
            for (var e of t.keys()) if (this.$14.has(e)) return !0;
            return !1;
          }),
          (a.$39 = function (t, n, r, a, i, l, s, u, c) {
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
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
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
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
                (this.$14.set(t, l), this.$43(t, l));
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
              (this.$14.set(t, c), this.$43(t, c));
            } catch (e) {
              o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: registerCanvasToRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.$43 = function (t, n) {
            var e = this;
            (n.setRenderCallback(function () {
              e.$33(t);
            }),
              n.setVideoEnhancement(this.$44.brightness, this.$44.sharpening),
              this.$45());
          }),
          (a.$45 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!this.$46) {
                this.$46 = !0;
                var e = this.$47;
                try {
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  if ((t == null ? void 0 : t.type) !== "web") return;
                  var r = yield (V || (V = n("Promise"))).all([
                      t.getVoipParam("options.video_brightness_setting"),
                      t.getVoipParam("options.video_sharpening_setting"),
                    ]),
                    a = r[0],
                    i = r[1];
                  if (e !== this.$47) return;
                  var l = K(a),
                    s = K(i);
                  ((this.$44 = { brightness: l, sharpening: s }),
                    o("WALogger").LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
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
            (this.$47++,
              (this.$46 = !1),
              (this.$44 = { brightness: 0, sharpening: 0 }),
              this.$29.clear());
            for (var e of this.$14.values()) e.setVideoEnhancement(0, 0);
          }),
          (a.reloadVideoEnhancement = function () {
            (this.$47++, (this.$46 = !1), this.$45());
          }),
          (a.$48 = function (t, n) {
            var e = this,
              r = o("WAWebVoipGatingUtils").isAvSyncStrictFifoDrainEnabled(),
              a = this.$42();
            (o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererRegistry: enabling A/V sync, sampleRate=",
                  " orderingMode=",
                  "",
                ])),
              t,
              a,
            ),
              this.$12.enable(
                t,
                function (t, n, r, o, a, i, l, s) {
                  e.$28(t, n, r, o, a, i, l, s);
                },
                n,
                function (t) {
                  (o("WALogger").WARN(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: AV sync video reset for ",
                        ", requesting keyframe",
                      ])),
                    t.key,
                  ),
                    e.$18(t),
                    e.$13(t, "av_sync_video_reset"));
                },
                { strictFifoDrain: r },
              ),
              (this.$49 = function (t) {
                e.$12.reset();
              }),
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                this.$49,
              ));
          }),
          (a.disableAVSync = function () {
            this.$12.isEnabled() &&
              (o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync",
                  ])),
              ),
              this.$12.disable());
            var e = this.$49;
            (e != null &&
              (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                e,
              ),
              (this.$49 = null)),
              (this.$26 = !1));
          }),
          (a.consumeAVSyncMetrics = function () {
            return this.$12.consumeMetrics();
          }),
          (a.peekPerParticipantAVSyncMetrics = function (t) {
            return this.$12.peekPerParticipantMetrics(t);
          }),
          (a.onDecoderFatalError = function () {
            this.$50++;
          }),
          (a.consumeWebCodecsFatalErrorCount = function () {
            var e = this.$50;
            return ((this.$50 = 0), e);
          }),
          (a.consumeWebCodecsDecodeOrderMetrics = function () {
            var e = this.$17.consume(window.performance.now()),
              t = this.$41;
            return ((this.$41 = 0), t === 0 ? null : e);
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
          (a.$27 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$26 = !0;
              try {
                var e,
                  t = yield o(
                    "WAWebVoipAudioCaptureAndPlayback",
                  ).waitForPlaybackStart(G);
                if (!t) {
                  ((this.$26 = !1),
                    o("WALogger").WARN(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererRegistry: timed out waiting ",
                          "ms for audio playback start before enabling A/V sync",
                        ])),
                      G,
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
                this.$48(r, function () {
                  var e = n.getAudioPlaybackTimestamp(),
                    t = o(
                      "WAWebVoipAudioCaptureAndPlayback",
                    ).getEstimatedPlaybackOutputLagSamples();
                  return Math.max(0, e - t);
                });
              } catch (e) {
                ((this.$26 = !1),
                  o("WALogger").ERROR(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
            (this.$51(t), this.$10.delete(t) && this.$11(t));
          }),
          (a.$51 = function (t) {
            (this.$9.delete(t),
              this.$16.delete(t),
              this.$19.delete(t),
              this.$36.delete(t),
              this.$35.delete(t),
              this.$34.delete(t),
              this.$24.delete(t),
              this.$29.delete(t),
              this.$22.delete(t),
              this.$30.delete(t),
              this.$17.resetSource(t, window.performance.now()));
          }),
          (a.$21 = function (t) {
            try {
              var e = this.$14.get(t);
              if (!e) return;
              (e.cleanup(),
                this.$14.delete(t),
                this.$8.delete(t),
                this.$32.delete(t));
              var n = this.$7.get(t);
              if (n != null) {
                this.$7.delete(t);
                var r = this.$9.get(n);
                r != null &&
                  (r.delete(t),
                  r.size === 0 && (this.$51(n), this.$10.delete(n)));
              }
              o("WALogger").LOG(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] unregister canvas, left=",
                    "",
                  ])),
                this.$14.size,
              );
            } catch (e) {
              o("WALogger").ERROR(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
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
      X = new Q();
    ((l.WAWebVoipVideoRendererRegistry = Q), (l.videoRendererRegistry = X));
  },
  98,
);
