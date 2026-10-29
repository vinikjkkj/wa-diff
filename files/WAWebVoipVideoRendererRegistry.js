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
    "WAWebVoipSelfPreviewVideoFrameSupport",
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
    "justknobx",
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
      H,
      G = 30,
      z = 5e3,
      j = 500;
    function K(e) {
      var t,
        n,
        r =
          (t = (n = e.wid) == null ? void 0 : n.toLogString()) != null
            ? t
            : "self";
      return e.isScreenShare() ? r + " (screen share)" : r;
    }
    function Q(e) {
      var t = Number.parseFloat(e);
      return Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0;
    }
    function X() {
      try {
        return r("justknobx")._("6845");
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: VideoRendererRegistry: self-preview VideoFrame JK unavailable, using fallback=true: ",
                "",
              ])),
            String(t),
          ),
          !0
        );
      }
    }
    var Y = (function () {
        function e() {
          ((this.$15 = new Map()),
            (this.$10 = new Map()),
            (this.$8 = new Map()),
            (this.$9 = new WeakSet()),
            (this.$37 = new Map()),
            (this.$1 = null),
            (this.$3 = null),
            (this.$48 = { brightness: 0, sharpening: 0 }),
            (this.$50 = !1),
            (this.$51 = 0),
            (this.$32 = new Map()),
            (this.$33 = new Set()),
            (this.$35 = new Map()),
            (this.$30 = new Map()),
            (this.$34 = new Map()),
            (this.$11 = new Set()),
            (this.$36 = new Set()),
            (this.$13 = new (o(
              "WAWebVoipAVSyncController",
            ).WAWebVoipAVSyncController)()),
            (this.$24 = !1),
            (this.$53 = null),
            (this.$5 = []),
            (this.$17 = new Map()),
            (this.$20 = new Map()),
            (this.$41 = new Map()),
            (this.$40 = new Set()),
            (this.$39 = new Set()),
            (this.$54 = 0),
            (this.$18 = new (o(
              "WAWebVoipVideoDecodeOrderTracker",
            ).WAWebVoipVideoDecodeOrderTracker)()),
            (this.$45 = 0));
        }
        var t = e.prototype;
        return (
          (t.init = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              try {
                this.$1 = yield this.$2();
              } catch (e) {
                (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] detection failed, fallback RASTER: ",
                      "",
                    ])),
                  e,
                ),
                  (this.$1 = o(
                    "WAWebVoipVideoRendererInterface",
                  ).WAWebVoipVideoRendererType.RASTER));
              }
              if (
                ((this.$3 = this.$4(this.$1)),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                      return e.onDecoderFatalError();
                    },
                  ),
                this.$5.length > 0)
              ) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] flushing ",
                      " pending",
                    ])),
                  this.$5.length,
                );
                for (var t of this.$5) {
                  var n = t.canvas,
                    r = t.portalMode;
                  this.$6(n, r);
                }
                this.$5 = [];
              }
              o(
                "WAWebVoipSelfPreviewVideoFrameSupport",
              ).updateSelfPreviewVideoFrameSupport(this.$7());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$7 = function () {
            var e = this.$3;
            return (
              e != null &&
              e !==
                o("WAWebVoipVideoRendererInterface")
                  .WAWebVoipVideoRendererThreadingMode.MAIN_THREAD &&
              (this.$1 ===
                o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                  .WEBCODECS_H264 ||
                this.$1 ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.VIDEOFRAME) &&
              X()
            );
          }),
          (t.getRendererType = function () {
            var e = this.$1;
            if (e == null)
              throw r("err")("init() must be called before getRendererType");
            return e;
          }),
          (t.registerVideoCanvas = function (t, n) {
            if (this.$1 == null || this.$3 == null) {
              (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] init() pending, queuing canvas",
                  ])),
              ),
                this.$5.push({ canvas: t, portalMode: n }));
              return;
            }
            this.$6(t, n);
          }),
          (t.assignSourceToCanvas = function (t) {
            var e = t.canvas,
              n = t.mirror,
              r = t.source,
              a = this.$8.get(e);
            (a != null &&
              a !== r &&
              (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] reassign ",
                    " from ",
                    "",
                  ])),
                r.key,
                a.key,
              ),
              this.unassignSourceFromCanvas(a, e)),
              a !== r && this.$9.delete(e));
            var i = this.$10.get(r),
              l = i == null || i.size === 0;
            (l && this.$11.delete(r) && this.$12(r),
              i ? i.set(e, n) : this.$10.set(r, new Map([[e, n]])),
              this.$8.set(e, r),
              this.$13.removeParticipant(r),
              this.$14(r, "assign_canvas"));
          }),
          (t.unassignSourceFromCanvas = function (t, n) {
            var e = this.$10.get(t);
            if (!(e == null || !e.has(n))) {
              (e.delete(n), this.$8.delete(n), this.$9.delete(n));
              var r = this.$15.get(n);
              (r == null || r.reset(), e.size === 0 && this.$16(t));
            }
          }),
          (t.unassignCanvas = function (t) {
            var e = this.$8.get(t);
            e != null
              ? this.unassignSourceFromCanvas(e, t)
              : o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: Canvas not found in registry",
                    ])),
                );
          }),
          (t.pauseRenderingForSource = function (t) {
            (this.$17.set(t, !1),
              this.$18.resetSource(t, window.performance.now()),
              this.$19(t));
          }),
          (t.resumeRenderingForSource = function (t) {
            var e = this.$17.get(t);
            e != null &&
              (this.$17.delete(t),
              (e || this.$20.has(t)) && this.$14(t, "resume_rendering"));
          }),
          (t.onPeerVideoInactive = function (t) {
            this.$18.resetSource(t, window.performance.now());
          }),
          (t.$19 = function (t) {
            this.$1 !==
              o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                .WEBCODECS_H264 ||
              o("WAWebABProps").getABPropConfigValue(
                "enable_webcodec_require_keyframe",
              ) !== !0 ||
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] resetWebCodecs ",
                    " \u2014 await keyframe",
                  ])),
                t.key,
              ),
              this.$18.resetSource(t, window.performance.now()),
              this.$21(t));
          }),
          (t.$21 = function (t) {
            this.$20.set(t, 0);
            var e = this.$10.get(t);
            if (e)
              for (var n of e) {
                var a = n[0],
                  i = this.$15.get(a);
                (i instanceof
                  o("WAWebVoipVideoWebCodecsRenderer")
                    .WAWebVoipVideoWebCodecsRenderer ||
                  i instanceof r("WAWebVoipVideoOffThreadRendererStub")) &&
                  i.requireKeyframe();
              }
          }),
          (t.unregisterVideoCanvas = function (t) {
            (this.unassignCanvas(t),
              this.$22(t),
              (this.$5 = this.$5.filter(function (e) {
                return e.canvas !== t;
              })));
          }),
          (t.onVideoFrameWasmToJs = function (t, n, r, a, i, l, s, u) {
            var e;
            this.$23(t, r, a, i);
            var c =
              (e = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) !=
              null
                ? e
                : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
            if (
              (!t.isSelf() && !this.$24 && !this.$13.isEnabled() && this.$25(),
              this.$13.isEnabled() && !t.isSelf())
            ) {
              this.$13.enqueueVideoFrame({
                source: t,
                frameBuffer: n,
                width: r,
                height: a,
                orientation: i,
                format: c,
                timestamp: s,
                isKeyFrame: u,
              });
              return;
            }
            this.$26(t, n, r, a, i, c, s, u);
          }),
          (t.onSelfPreviewVideoFrame = function (t, n, r, a) {
            var e = o(
              "WAWebVoipVideoRenderSource",
            ).WAWebVoipVideoRenderSource.self(
              o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
            );
            try {
              this.$23(e, n, r, a);
              var i = this.$10.get(e);
              if (i == null || this.$27(e, n, r, !1)) return;
              var l = this.$28(i, t, a);
              this.$29(e, l, window.performance.now());
            } finally {
              t.close();
            }
          }),
          (t.$23 = function (t, n, r, a) {
            var e;
            t.isSelf()
              ? o("WAWebVoipPerfMeasurement").endMeasurement(
                  o("WAWebVoipPerfMeasurement").PerfMeasurement
                    .FIRST_CAMERA_FRAME,
                )
              : o("WAWebVoipPerfMeasurement").endMeasurement(
                  o("WAWebVoipPerfMeasurement").PerfMeasurement
                    .FIRST_PEER_FRAME,
                );
            var i = this.$30.get(t);
            i != null
              ? ((i.frameCount += 1),
                (i.lastFrameTimestampMs = window.performance.now()),
                (i.lastWidth = n),
                (i.lastHeight = r))
              : this.$30.set(t, {
                  frameCount: 1,
                  lastFrameTimestampMs: window.performance.now(),
                  lastWidth: n,
                  lastHeight: r,
                });
            var l =
              (e = o("WAWebVoipMediaEnums").Orientation.cast(a)) != null
                ? e
                : o("WAWebVoipMediaEnums").Orientation.Normal;
            this.$31(t, l, n, r);
            var s =
                l === o("WAWebVoipMediaEnums").Orientation.Rotate90 ||
                l === o("WAWebVoipMediaEnums").Orientation.Rotate270,
              u = s ? r : n,
              c = s ? n : r,
              d = this.$32.get(t);
            if (d == null || d.width !== u || d.height !== c) {
              this.$32.set(t, { width: u, height: c });
              for (var m of this.$33) m(t, u, c);
            }
          }),
          (t.$31 = function (t, n, r, a) {
            var e = this.$34.get(t),
              i = Date.now(),
              l = e == null || e.orientation !== n;
            if (
              o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
                elapsedMsSinceLastLog: e == null ? 0 : i - e.loggedAtMs,
                hasLoggedSnapshot: e != null,
                orientationStateChanged: l,
              })
            ) {
              this.$34.set(t, { loggedAtMs: i, orientation: n });
              var s = t.isSelf() ? 1 : 0,
                u = n;
              l
                ? o("WALogger").WARN(
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
                  )
                : o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.getVideoDimensions = function (t) {
            var e;
            return (e = this.$32.get(t)) != null ? e : null;
          }),
          (t.hasCanvasForSource = function (t) {
            var e = this.$10.get(t);
            return e != null && e.size > 0;
          }),
          (t.getDecodeStatsForSource = function (t) {
            var e;
            return (e = this.$30.get(t)) != null ? e : null;
          }),
          (t.getLastPaintTimestampMsForSource = function (t) {
            var e;
            return (e = this.$35.get(t)) != null ? e : null;
          }),
          (t.addVideoDimensionChangeListener = function (t) {
            var e = this;
            return (
              this.$33.add(t),
              function () {
                e.$33.delete(t);
              }
            );
          }),
          (t.hasReceivedFirstFrameForSource = function (t) {
            return this.$11.has(t);
          }),
          (t.resetFirstFrameReceivedForSource = function (t) {
            this.$11.delete(t) && this.$12(t);
          }),
          (t.addFirstFrameReceivedListener = function (t) {
            var e = this;
            return (
              this.$36.add(t),
              function () {
                e.$36.delete(t);
              }
            );
          }),
          (t.hasRenderedFirstFrameForCanvas = function (t) {
            return this.$9.has(t);
          }),
          (t.addFirstFrameRenderedListenerForCanvas = function (t, n) {
            var e = this,
              r = this.$37.get(t);
            return (
              r == null && ((r = new Set()), this.$37.set(t, r)),
              r.add(n),
              function () {
                var o, a;
                ((o = r) == null || o.delete(n),
                  ((a = r) == null ? void 0 : a.size) === 0 &&
                    e.$37.get(t) === r &&
                    e.$37.delete(t));
              }
            );
          }),
          (t.$12 = function (t) {
            for (var e of this.$36)
              try {
                e(t);
              } catch (e) {
                o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: firstFrameReceivedListener error: ",
                      "",
                    ])),
                  e,
                );
              }
          }),
          (t.$38 = function (t) {
            var e;
            if (!(!this.$8.has(t) || this.$9.has(t))) {
              this.$9.add(t);
              var n = Array.from((e = this.$37.get(t)) != null ? e : []);
              for (var r of n)
                try {
                  r();
                } catch (e) {
                  o("WALogger").ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: canvas first-frame listener error: ",
                        "",
                      ])),
                    e,
                  );
                }
            }
          }),
          (t.onCanvasResize = function (t, n, r) {
            try {
              var e = this.$15.get(t);
              if (!e) return;
              e.onCanvasResize(n, r);
            } catch (e) {
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: onCanvasResize : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (t.setCoverFit = function (t, n) {
            try {
              var e = this.$15.get(t);
              if (!e) return;
              e.setCoverFit(n);
            } catch (e) {
              o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: setCoverFit : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (t.setZoom = function (t, n) {
            try {
              var e;
              (e = this.$15.get(t)) == null || e.setZoom(n);
            } catch (e) {
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: setZoom : ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (t.requestKeyFrameForCanvas = function (t) {
            var e = this.$8.get(t);
            e != null && this.$14(e, "canvas_request");
          }),
          (t.$14 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 && (t = "unspecified");
                var n = e.wid;
                if (n != null) {
                  if (!n.isUser()) {
                    this.$39.has(e) ||
                      (this.$39.add(e),
                      o("WALogger")
                        .WARN(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
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
                  if (!this.$40.has(e)) {
                    var i = this.$41.get(e);
                    if (!(i != null && a - i < j)) {
                      (this.$40.add(e), this.$41.set(e, a));
                      try {
                        var l = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        if ((l == null ? void 0 : l.type) !== "web") return;
                        var s = yield l.requestKeyFrame(n, e.isScreenShare());
                        s !== 0 &&
                          o("WALogger").ERROR(
                            R ||
                              (R = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: VideoRendererRegistry: requestKeyFrameForSource failed: ",
                                "",
                              ])),
                            s,
                          );
                      } catch (e) {
                        o("WALogger")
                          .ERROR(
                            L ||
                              (L = babelHelpers.taggedTemplateLiteralLoose([
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
                        this.$40.delete(e);
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
          (t.$26 = function (t, n, r, o, a, i, l, s) {
            var e = this.$10.get(t);
            if (e && !this.$27(t, r, o, s)) {
              var u = window.performance.now();
              this.$42(e, t, i, l, s, u);
              var c = this.$43(e, t, n, r, o, a, i, l, s);
              this.$29(t, c, u);
            }
          }),
          (t.$29 = function (t, n, r) {
            (n &&
              (this.$35.set(t, r), t.isSelf() || this.$18.markRendered(t, r)),
              n && !this.$11.has(t) && (this.$11.add(t), this.$12(t)));
          }),
          (t.$27 = function (t, n, r, a) {
            if (this.$17.has(t)) return (a && this.$17.set(t, !0), !0);
            var e = this.$20.get(t);
            if (e != null)
              if (a)
                (o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe rcvd ",
                      " after ",
                      " drops \u2014 resume",
                    ])),
                  t.key,
                  e,
                ),
                  this.$20.delete(t));
              else {
                if (e < G) return (this.$20.set(t, e + 1), !0);
                (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[VideoRendererRegistry] keyframe timeout ",
                      " ",
                      " drops \u2014 reactive",
                    ])),
                  t.key,
                  G,
                ),
                  this.$20.delete(t));
              }
            return n % 2 !== 0 || r % 2 !== 0
              ? (o("WALogger").ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.$42 = function (t, n, r, a, i, l) {
            if (
              !(
                n.isSelf() ||
                r !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264 ||
                !this.$44(t)
              )
            ) {
              (this.$45 === 0 && this.$46(), this.$45++);
              var e = this.$18.observe({
                  isKeyFrame: i,
                  nowMs: l,
                  rtpTimestamp: a,
                  source: n,
                }),
                s = e.episodeStarted;
              s &&
                o("WALogger").WARN(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: VideoRendererRegistry: out-of-order delta frame for ",
                      " ts=",
                      ", decoder reference chain broken until next keyframe",
                    ])),
                  K(n),
                  a,
                );
            }
          }),
          (t.$46 = function () {
            var e = o("WAWebVoipGatingUtils").isAvSyncStrictFifoDrainEnabled()
              ? 1
              : 0;
            return (this.$18.setOrderingMode(e), e);
          }),
          (t.$44 = function (t) {
            for (var e of t.keys()) if (this.$15.has(e)) return !0;
            return !1;
          }),
          (t.$43 = function (t, n, r, a, i, l, s, u, c) {
            var e = !1;
            for (var d of t.entries()) {
              var m = d[0],
                p = d[1],
                _ = this.$15.get(m);
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
                    this.$14(n, "renderer_need_keyframe");
                    continue;
                  }
                  o("WALogger").ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: renderFrame: ",
                        "",
                      ])),
                    e,
                  );
                }
            }
            return e;
          }),
          (t.$28 = function (t, n, a) {
            if (
              this.$3 ===
              o("WAWebVoipVideoRendererInterface")
                .WAWebVoipVideoRendererThreadingMode.MAIN_THREAD
            )
              return !1;
            var e = !1;
            for (var i of t.entries()) {
              var l,
                s = i[0],
                u = i[1],
                c = this.$15.get(s);
              if (c instanceof r("WAWebVoipVideoOffThreadRendererStub")) {
                var d = c.renderVideoFrame({
                  frame: n,
                  mirror: u,
                  orientation:
                    (l = o("WAWebVoipMediaEnums").Orientation.cast(a)) != null
                      ? l
                      : o("WAWebVoipMediaEnums").Orientation.Normal,
                });
                (d === "failed" &&
                  (o("WALogger").WARN(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: self-preview VideoFrame transfer failed, capture returns to bytes",
                      ])),
                  ),
                  o(
                    "WAWebVoipSelfPreviewVideoFrameSupport",
                  ).updateSelfPreviewVideoFrameSupport(!1)),
                  (e = e || d === "sent"));
              }
            }
            return e;
          }),
          (t.$4 = function (t) {
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
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] threadingMode=",
                    " (compat)",
                  ])),
                e,
              ),
              e
            );
          }),
          (t.$2 = (function () {
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.$6 = function (t, n) {
            try {
              var e;
              if (this.$15.has(t)) throw r("err")("canvas already registered");
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
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
                (this.$15.set(t, l), this.$47(t, l));
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
              (this.$15.set(t, c), this.$47(t, c));
            } catch (e) {
              o("WALogger").ERROR(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: registerCanvasToRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (t.$47 = function (t, n) {
            var e = this;
            (n.setRenderCallback(function () {
              e.$38(t);
            }),
              n.setVideoEnhancement(this.$48.brightness, this.$48.sharpening),
              this.$49());
          }),
          (t.$49 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!this.$50) {
                this.$50 = !0;
                var e = this.$51;
                try {
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  if ((t == null ? void 0 : t.type) !== "web") return;
                  var r = yield (H || (H = n("Promise"))).all([
                      t.getVoipParam("options.video_brightness_setting"),
                      t.getVoipParam("options.video_sharpening_setting"),
                    ]),
                    a = r[0],
                    i = r[1];
                  if (e !== this.$51) return;
                  var l = Q(a),
                    s = Q(i);
                  ((this.$48 = { brightness: l, sharpening: s }),
                    o("WALogger").LOG(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "[VideoRendererRegistry] video enhancement brightness=",
                          " sharpening=",
                          "",
                        ])),
                      l,
                      s,
                    ));
                  for (var u of this.$15.values()) u.setVideoEnhancement(l, s);
                } catch (e) {
                  o("WALogger").ERROR(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.resetVideoEnhancementState = function () {
            (this.$51++,
              (this.$50 = !1),
              (this.$48 = { brightness: 0, sharpening: 0 }),
              this.$34.clear());
            for (var e of this.$15.values()) e.setVideoEnhancement(0, 0);
          }),
          (t.reloadVideoEnhancement = function () {
            (this.$51++, (this.$50 = !1), this.$49());
          }),
          (t.$52 = function (t, n) {
            var e = this,
              r = o("WAWebVoipGatingUtils").isAvSyncStrictFifoDrainEnabled(),
              a = this.$46();
            (o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: VideoRendererRegistry: enabling A/V sync, sampleRate=",
                  " orderingMode=",
                  "",
                ])),
              t,
              a,
            ),
              this.$13.enable(
                t,
                function (t, n, r, o, a, i, l, s) {
                  e.$26(t, n, r, o, a, i, l, s);
                },
                n,
                function (t) {
                  (o("WALogger").WARN(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VideoRendererRegistry: AV sync video reset for ",
                        ", requesting keyframe",
                      ])),
                    t.key,
                  ),
                    e.$19(t),
                    e.$14(t, "av_sync_video_reset"));
                },
                { strictFifoDrain: r },
              ),
              (this.$53 = function (t) {
                e.$13.reset();
              }),
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
                "speakerDeviceSelectionChanged",
                this.$53,
              ));
          }),
          (t.disableAVSync = function () {
            this.$13.isEnabled() &&
              (o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: disabling A/V sync",
                  ])),
              ),
              this.$13.disable());
            var e = this.$53;
            (e != null &&
              (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                e,
              ),
              (this.$53 = null)),
              (this.$24 = !1));
          }),
          (t.consumeAVSyncMetrics = function () {
            return this.$13.consumeMetrics();
          }),
          (t.peekPerParticipantAVSyncMetrics = function (t) {
            return this.$13.peekPerParticipantMetrics(t);
          }),
          (t.onDecoderFatalError = function () {
            this.$54++;
          }),
          (t.consumeWebCodecsFatalErrorCount = function () {
            var e = this.$54;
            return ((this.$54 = 0), e);
          }),
          (t.consumeWebCodecsDecodeOrderMetrics = function () {
            var e = this.$18.consume(window.performance.now()),
              t = this.$45;
            return ((this.$45 = 0), t === 0 ? null : e);
          }),
          (t.removeParticipantAVSync = function (t) {
            var e = window.performance.now();
            for (var n of [
              o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
              o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                .SCREEN_SHARE,
            ]) {
              var r = o(
                "WAWebVoipVideoRenderSource",
              ).WAWebVoipVideoRenderSource.peer(t, n);
              (this.$13.removeParticipant(r), this.$18.resetSource(r, e));
            }
          }),
          (t.$25 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$24 = !0;
              try {
                var e,
                  t = yield o(
                    "WAWebVoipAudioCaptureAndPlayback",
                  ).waitForPlaybackStart(z);
                if (!t) {
                  ((this.$24 = !1),
                    o("WALogger").WARN(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: VideoRendererRegistry: timed out waiting ",
                          "ms for audio playback start before enabling A/V sync",
                        ])),
                      z,
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
                this.$52(r, function () {
                  var e = n.getAudioPlaybackTimestamp(),
                    t = o(
                      "WAWebVoipAudioCaptureAndPlayback",
                    ).getEstimatedPlaybackOutputLagSamples();
                  return Math.max(0, e - t);
                });
              } catch (e) {
                ((this.$24 = !1),
                  o("WALogger").ERROR(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.$16 = function (t) {
            (this.$55(t), this.$11.delete(t) && this.$12(t));
          }),
          (t.$55 = function (t) {
            (this.$10.delete(t),
              this.$17.delete(t),
              this.$20.delete(t),
              this.$41.delete(t),
              this.$40.delete(t),
              this.$39.delete(t),
              this.$32.delete(t),
              this.$34.delete(t),
              this.$30.delete(t),
              this.$35.delete(t),
              this.$18.resetSource(t, window.performance.now()));
          }),
          (t.$22 = function (t) {
            try {
              var e = this.$15.get(t);
              if (!e) return;
              (e.cleanup(),
                this.$15.delete(t),
                this.$9.delete(t),
                this.$37.delete(t));
              var n = this.$8.get(t);
              if (n != null) {
                this.$8.delete(t);
                var r = this.$10.get(n);
                r != null &&
                  (r.delete(t),
                  r.size === 0 && (this.$55(n), this.$11.delete(n)));
              }
              o("WALogger").LOG(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "[VideoRendererRegistry] unregister canvas, left=",
                    "",
                  ])),
                this.$15.size,
              );
            } catch (e) {
              o("WALogger").ERROR(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VideoRendererRegistry: unregisterCanvasFromRegistry: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          e
        );
      })(),
      J = new Y();
    ((l.WAWebVoipVideoRendererRegistry = Y), (l.videoRendererRegistry = J));
  },
  98,
);
