__d(
  "WAWebVoipVideoCaptureWithConverter",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipDualStreamScreenShareState",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPresentationFrameNormalizer",
    "WAWebVoipVideoCaptureSourceRect",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoFrameProcessor",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
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
      G,
      z,
      j,
      K,
      Q,
      X,
      Y = 3,
      J = 15,
      Z = 30,
      ee = 2,
      te = 0.9,
      ne = "orientation";
    function re(e) {
      var t = e.isBackCamera,
        n = e.isScreenShare,
        r = e.requestedHeight,
        a = e.requestedWidth,
        i = e.screenAngle,
        l = e.screenType,
        s = e.sensorOffset,
        u = e.sensorOffsetInitialized,
        c = e.videoHeight,
        d = e.videoWidth;
      if (n || !u) return null;
      var m = o("WAWebVoipMediaEnums").computeVideoOrientationForAngle(s, t, i),
        p = o(
          "WAWebVoipPresentationFrameNormalizer",
        ).resolvePresentationFrameTransform({
          fallbackOrientation: m,
          frameHeight: c,
          frameRotation: 0,
          frameWidth: d,
          isScreenShare: n,
          requestedHeight: r,
          requestedWidth: a,
          screenType: l,
          sensorOffsetInitialized: u,
        });
      return p == null || p.counterRotationDegrees === 180
        ? null
        : {
            counterRotationDegrees: p.counterRotationDegrees,
            orientation: m,
            outputHeight: o("WAWebVoipVideoCaptureSourceRect").closestEven(
              p.outputHeight,
            ),
            outputWidth: o("WAWebVoipVideoCaptureSourceRect").closestEven(
              p.outputWidth,
            ),
          };
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.failureLog,
            n = e.isCurrent,
            a = e.processor,
            i = e.source;
          if (
            a == null ||
            !o("WAWebVoipVideoFrameProcessor").shouldProcessFrame(a)
          )
            return { image: i, release: r("WAWebNoop") };
          var l = null,
            s = null;
          try {
            var u = r("WAWebVoipVideoFrameCtor")();
            if (u == null) throw r("err")("VideoFrame is not available");
            ((l = new u(i, {
              timestamp: Math.round(self.performance.now() * 1e3),
            })),
              (s = yield a.process(l)));
          } catch (e) {
            var c;
            return (
              (c = l) == null || c.close(),
              t.isLogged ||
                ((t.isLogged = !0),
                o("WALogger").ERROR(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:capture] frame processing failed, skipping frames until it works: ",
                      "",
                    ])),
                  e,
                )),
              null
            );
          }
          if (((t.isLogged = !1), s == null)) return null;
          if (!n()) return (s.close(), null);
          var d = s;
          return {
            image: d,
            release: function () {
              return d.close();
            },
          };
        })),
        ae.apply(this, arguments)
      );
    }
    var ie = (function () {
      function t() {
        ((this.converter = null),
          (this.mediaCaptureStream = null),
          (this.animationFrameId = null),
          (this.animationFrameWindow = null),
          (this.timeoutFrameId = null),
          (this.timeoutFrameWindow = null),
          (this.visibilityChangeListener = null),
          (this.popoutVisibilityChangeListener = null),
          (this.videoBuffer = null),
          (this.videoBufferSize = 0),
          (this.$1 = 0),
          (this.$2 = !1),
          (this.$3 = 0),
          (this.$4 = !1),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = null),
          (this.$8 = null),
          (this.$9 = !1),
          (this.$10 = null),
          (this.$11 = null),
          (this.$12 = null),
          (this.$13 = 0),
          (this.$14 = null),
          (this.$15 = 0),
          (this.$16 = { isLogged: !1 }),
          (this.isStopped = !1),
          (this.isCaptureInProgress = !1),
          (this.primaryConverter = null),
          (this.fallbackConverter = null),
          (this.converterSwitchInProgress = !1),
          (this.numReconcileRequested = 0),
          (this.usingFallback = !1),
          (this.width = 0),
          (this.height = 0),
          (this.lastCaptureTime = 0),
          (this.consecutiveErrors = 0));
      }
      var a = t.prototype;
      return (
        (a.$17 = function (t) {
          return !this.isStopped && t === this.$15;
        }),
        (a.$18 = function (n, r) {
          if (
            !(
              this.$12 != null ||
              this.$13 >=
                o("WAWebVoipVideoCaptureSourceRect")
                  .MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS
            )
          ) {
            var t = o(
              "WAWebVoipVideoCaptureSourceRect",
            ).probeVideoSourceContentRect(n, this.$13);
            this.$13 = t.detectionAttempts;
            var a = this.$13,
              i = t.sourceContentRect;
            i != null &&
              ((this.$12 = i),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " source content rect detected by frame ",
                    ": origin=",
                    ",",
                    " display=",
                    "x",
                    " coded=",
                    "x",
                    "",
                  ])),
                r,
                a,
                i.x,
                i.y,
                i.width,
                i.height,
                i.codedWidth,
                i.codedHeight,
              ));
          }
        }),
        (a.handleCaptureError = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.error,
              n = e.frameInterval,
              r = e.logPrefix,
              a = e.requestCallback;
            if (
              (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video processing error: ",
                    "",
                  ])),
                r,
                t,
              ),
              this.consecutiveErrors++,
              this.consecutiveErrors >= Y && !this.isStopped)
            ) {
              var i = yield this.attemptFallbackRecovery(r);
              i && a(n);
              return;
            }
            !this.isStopped &&
              this.mediaCaptureStream != null &&
              this.converter != null &&
              a(n);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$19 = function (t) {
          var e = t.height,
            n = t.videoElement,
            r = t.width,
            o = this.$10;
          if (o != null && o.width === r && o.height === e) return o;
          this.$20();
          var a = n.ownerDocument.createElement("canvas");
          ((a.width = r), (a.height = e));
          var i = a.getContext("2d");
          return i == null
            ? null
            : ((i.imageSmoothingEnabled = !0),
              (this.$10 = a),
              (this.$11 = i),
              a);
        }),
        (a.$20 = function () {
          var e = this.$10;
          (e != null && ((e.width = 0), (e.height = 0)),
            (this.$10 = null),
            (this.$11 = null));
        }),
        (a.$21 = function () {
          var e = this.$7;
          (e != null && ((e.width = 0), (e.height = 0)),
            (this.$7 = null),
            (this.$8 = null));
        }),
        (a.$22 = function (t, n) {
          var e, r;
          if (this.$9) return null;
          if (!this.$4) {
            var a = t.videoWidth,
              i = t.videoHeight;
            a > 0 &&
              i > 0 &&
              ((this.$3 = o("WAWebVoipMediaEnums").detectSensorOffset({
                trackHeight: this.$6,
                trackWidth: this.$5,
                videoElHeight: i,
                videoElWidth: a,
              })),
              (this.$4 = !0));
          }
          var l = globalThis.screen,
            s = l != null ? l[ne] : null;
          return re({
            isBackCamera: this.$2,
            isScreenShare: n,
            requestedHeight: this.$6,
            requestedWidth: this.$5,
            screenAngle: (e = s == null ? void 0 : s.angle) != null ? e : null,
            screenType: (r = s == null ? void 0 : s.type) != null ? r : null,
            sensorOffset: this.$3,
            sensorOffsetInitialized: this.$4,
            videoHeight: t.videoHeight,
            videoWidth: t.videoWidth,
          });
        }),
        (a.$23 = function (t) {
          var e = t.element,
            n = t.image,
            r = t.rotation,
            o = t.sourceHeight,
            a = t.sourceWidth,
            i = r.counterRotationDegrees,
            l = r.outputHeight,
            s = r.outputWidth;
          if (this.$7 == null || this.$7.width !== s || this.$7.height !== l) {
            this.$21();
            var u = e.ownerDocument.createElement("canvas");
            ((u.width = s), (u.height = l));
            var c = u.getContext("2d");
            if (c == null) return null;
            ((c.imageSmoothingEnabled = !0), (this.$7 = u), (this.$8 = c));
          }
          var d = this.$8;
          return d == null
            ? null
            : (d.setTransform(1, 0, 0, 1, 0, 0),
              d.clearRect(0, 0, s, l),
              i === 90
                ? (d.translate(s, 0), d.rotate(Math.PI / 2))
                : i === 180
                  ? (d.translate(s, l), d.rotate(Math.PI))
                  : (d.translate(0, l), d.rotate(-Math.PI / 2)),
              d.drawImage(n, 0, 0, a, o),
              d.setTransform(1, 0, 0, 1, 0, 0),
              this.$7);
        }),
        (a.$24 = function (t) {
          var e = t.height,
            n = t.maxFps,
            r = t.nv12Data,
            a = t.onVideoDataFnType,
            i = t.orientation,
            l = t.voipWasm,
            s = t.width;
          if (this.videoBuffer != null) {
            var c = this.videoBuffer;
            (l.GROWABLE_HEAP_U8().set(r, c),
              l[a](
                c,
                r.length,
                s,
                e,
                n,
                o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                i,
              ));
          } else
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: video buffer not initialized",
                  ])),
              )
              .sendLogs("voip: wasm: video buffer not initialized");
          var d = o(
            "WAWebVoipVideoRenderSource",
          ).WAWebVoipVideoRenderSource.self(
            a === "onDesktopCaptureDataFromJs" &&
              o(
                "WAWebVoipDualStreamScreenShareState",
              ).isSelfDualStreamScreenShareActive()
              ? o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                  .SCREEN_SHARE
              : o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                  .CAMERA,
          );
          o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.onVideoFrameWasmToJs(
            d,
            r.buffer,
            s,
            e,
            i,
            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
            0,
            !1,
          );
        }),
        (a.$25 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = this,
              r = e.counterRotation,
              a = e.element,
              i = e.frameInterval,
              l = e.generation,
              s = e.height,
              u = e.logPrefix,
              m = e.maxFps,
              p = e.onVideoDataFnType,
              _ = e.requestCallback,
              f = e.voipWasm,
              g = e.width,
              h = a.videoWidth,
              y = a.videoHeight,
              C = yield oe({
                failureLog: this.$16,
                isCurrent: function () {
                  return n.$17(l);
                },
                processor: this.$14,
                source: a,
              });
            if (C == null) return (_(i), !0);
            var b;
            try {
              b = this.$23({
                element: a,
                image: C.image,
                rotation: r,
                sourceHeight: y,
                sourceWidth: h,
              });
            } finally {
              C.release();
            }
            if (b == null)
              return (
                (this.$9 = !0),
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " counter-rotation canvas unavailable; falling back to legacy crop path (video may be cropped/mis-rotated)",
                      ])),
                    u,
                  )
                  .sendLogs("voip-withconverter-rotation-canvas-unavailable"),
                !1
              );
            var v = r.orientation,
              S = r.outputHeight,
              R = r.outputWidth;
            if (R !== g || S !== s)
              return (
                yield this.__initVideoCapture({ height: S, width: R }),
                yield this.ensureVideoBufferCapacity(
                  t.getNV12FrameSize(this.width, this.height),
                  u,
                ),
                (this.consecutiveErrors = 0),
                _(i),
                !0
              );
            var L = this.converter;
            if (L == null) return !0;
            var E;
            try {
              E = yield L.convertVideoToNV12(b);
            } catch (e) {
              return (
                yield this.handleCaptureError({
                  error: e,
                  frameInterval: i,
                  logPrefix: u,
                  requestCallback: _,
                }),
                !0
              );
            }
            return (
              (this.consecutiveErrors = 0),
              this.isStopped ||
                this.converter == null ||
                (this.$1 < 3 &&
                  (this.$1++,
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " [orient] frame#",
                        " sent=",
                        " reason=counter-rotated converter=",
                        "x",
                        " counterRotation=",
                        "",
                      ])),
                    u,
                    this.$1,
                    v,
                    g,
                    s,
                    r.counterRotationDegrees,
                  )),
                !(yield this.ensureVideoBufferCapacity(E.byteLength, u))) ||
                this.isStopped ||
                this.converter == null ||
                (this.$24({
                  height: s,
                  maxFps: m,
                  nv12Data: E,
                  onVideoDataFnType: p,
                  orientation: v,
                  voipWasm: f,
                  width: g,
                }),
                _(i)),
              !0
            );
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })()),
        (a.attemptFallbackRecovery = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (this.usingFallback)
              return (
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " already on fallback converter, stopping capture loop",
                    ])),
                  e,
                ),
                (this.isStopped = !0),
                !1
              );
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " ",
                  " consecutive errors, attempting fallback converter",
                ])),
              e,
              this.consecutiveErrors,
            );
            var t = this.converter;
            try {
              var a =
                this.fallbackConverter != null && this.fallbackConverter !== t
                  ? this.fallbackConverter
                  : yield this.createFallbackConverter(this.width, this.height);
              if (a != null)
                return this.isStopped
                  ? (a !== this.fallbackConverter &&
                      (X || (X = n("Promise")))
                        .resolve(a.cleanup())
                        .catch(r("WAWebNoop")),
                    !1)
                  : ((this.converter = a),
                    (this.primaryConverter = null),
                    (this.usingFallback = !0),
                    this.fallbackConverter != null &&
                      this.fallbackConverter !== a &&
                      (X || (X = n("Promise")))
                        .resolve(this.fallbackConverter.cleanup())
                        .catch(r("WAWebNoop")),
                    (this.fallbackConverter = null),
                    (this.consecutiveErrors = 0),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " switched to fallback converter: ",
                          "",
                        ])),
                      e,
                      a.getConverterName(),
                    ),
                    t != null &&
                      (X || (X = n("Promise")))
                        .resolve(t.cleanup())
                        .catch(function (t) {
                          o("WALogger").WARN(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " old converter cleanup error: ",
                                "",
                              ])),
                            e,
                            t,
                          );
                        }),
                    !0);
            } catch (t) {
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " fallback converter creation failed: ",
                    "",
                  ])),
                e,
                t,
              );
            }
            return (
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " no fallback available, stopping capture loop",
                  ])),
                e,
              ),
              (this.isStopped = !0),
              !1
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.createConverter = function (t, n) {
          throw r("err")("createConverter not implemented by subclass");
        }),
        (a.clearScheduledCapture = function () {
          if (this.animationFrameId != null) {
            var e;
            (((e = this.animationFrameWindow) != null
              ? e
              : window
            ).cancelAnimationFrame(this.animationFrameId),
              (this.animationFrameId = null),
              (this.animationFrameWindow = null));
          }
          if (this.timeoutFrameId != null) {
            var t;
            (((t = this.timeoutFrameWindow) != null ? t : window).clearTimeout(
              this.timeoutFrameId,
            ),
              (this.timeoutFrameId = null),
              (this.timeoutFrameWindow = null));
          }
        }),
        (a.getCaptureSchedulerWindow = function () {
          var e;
          return o(
            "WAWebVoipPopoutWindowState",
          ).getIsPopoutWindowActiveAndVisible() &&
            (e = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null
            ? e
            : window;
        }),
        (a.shouldScheduleWithAnimationFrame = function (t) {
          if (t === window) return document.visibilityState === "visible";
          try {
            return t.document.visibilityState === "visible";
          } catch (e) {
            return !1;
          }
        }),
        (a.createFallbackConverter = function (t, n) {
          return null;
        }),
        (a.ensureVideoBufferCapacity = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (this.videoBuffer != null && this.videoBufferSize >= e)
                return !0;
              var n = this.videoBuffer,
                r = this.videoBufferSize;
              ((this.videoBuffer = null),
                (this.videoBufferSize = 0),
                n != null && (yield ce(n)));
              var a = yield se(e);
              return this.isStopped
                ? (yield ce(a), !1)
                : ((this.videoBuffer = a),
                  (this.videoBufferSize = e),
                  r > 0 &&
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " resized WASM video buffer ",
                          " -> ",
                          "",
                        ])),
                      t,
                      r,
                      e,
                    ),
                  !0);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.__initVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.height,
              a = e.width;
            ((this.width = o("WAWebVoipVideoCaptureSourceRect").closestEven(a)),
              (this.height = o("WAWebVoipVideoCaptureSourceRect").closestEven(
                t,
              )));
            var i = [];
            (this.converter && i.push(this.converter.cleanup()),
              this.fallbackConverter &&
                i.push(this.fallbackConverter.cleanup()),
              yield (X || (X = n("Promise"))).all(i));
            var l,
              s = !1;
            try {
              if (
                ((l = yield this.createConverter(this.width, this.height)),
                (l.isAlive == null ? void 0 : l.isAlive()) === !1)
              )
                throw r("err")("primary converter device is not alive");
            } catch (e) {
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                    "",
                  ])),
                e,
              );
              var u = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              if (u != null)
                ((l = u),
                  (s = !0),
                  o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initVideoCapture] Using fallback converter: ",
                        "",
                      ])),
                    l.getConverterName(),
                  ));
              else throw e;
            }
            if (this.isStopped) {
              yield l.cleanup();
              return;
            }
            if (
              ((this.converter = l),
              (this.primaryConverter = l),
              o("WAWebUA").UA.isSafari && !s)
            ) {
              var c = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              c != null && (this.fallbackConverter = c);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.startVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var a,
              i,
              l,
              s,
              u = this,
              c = e.height,
              d = e.maxFps,
              m = e.onVideoDataFnType,
              p = e.stream,
              _ = e.videoFrameProcessor,
              f = e.width,
              g = ++this.$15;
            ((this.$16 = { isLogged: !1 }),
              (this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.consecutiveErrors = 0),
              (this.usingFallback = !1),
              (this.$1 = 0),
              this.$20(),
              this.$21(),
              (this.$9 = !1),
              (this.$4 = !1),
              (this.$3 = 0),
              (this.$5 = f),
              (this.$6 = c),
              (this.$12 = null),
              (this.$13 = 0),
              (this.$14 = m === "onVideoDataFromJs" && _ != null ? _ : null),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              yield this.__initVideoCapture({ width: f, height: c }));
            var h = p.getVideoTracks()[0],
              y =
                h == null ||
                h.getSettings == null ||
                (a = h.getSettings()) == null
                  ? void 0
                  : a.facingMode;
            this.$2 = y === "environment";
            var C = r("nullthrows")(this.converter).getConverterName(),
              b = "voip: [AV:startVideoCapture (" + C + ")]";
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " facingMode=",
                  "",
                ])),
              b,
              y != null ? y : "unknown",
            );
            var $ =
                (i =
                  (l = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : l.document) != null
                  ? i
                  : null,
              P = $ != null ? $ : document;
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              b,
              $ != null ? "popout" : "main",
            );
            var N = le();
            if (N) {
              var M = this.mediaCaptureStream;
              M != null &&
                ((M.videoElement.srcObject = null), M.videoElement.remove());
            }
            this.mediaCaptureStream = {
              mediaStream: p,
              videoElement: P.createElement("video"),
            };
            var w = this.mediaCaptureStream.videoElement;
            if (
              ((w.srcObject = p),
              (w.autoplay = !0),
              (w.muted = !0),
              (w.playsInline = !0),
              N)
            ) {
              (w.setAttribute("aria-hidden", "true"),
                (w.style.cssText =
                  "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"));
              var A = P.body;
              if (A == null)
                throw (
                  o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " no document body to host capture video",
                        ])),
                      b,
                    )
                    .sendLogs("voip-withconverter-capture-no-body"),
                  r("err")("No document body to host capture video")
                );
              A.appendChild(w);
            }
            o(
              "WAWebCoreActionsODS",
            ).logCallVideoCaptureWithConverterPlayAttempt(N);
            try {
              var F;
              (yield (F = this.mediaCaptureStream) == null
                ? void 0
                : F.videoElement.play(),
                o(
                  "WAWebCoreActionsODS",
                ).logCallVideoCaptureWithConverterPlaySuccess(N));
            } catch (e) {
              throw (
                o(
                  "WAWebCoreActionsODS",
                ).logCallVideoCaptureWithConverterPlayFailure(N),
                e
              );
            }
            if (
              (this.$18(w, b),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready",
                  ])),
                b,
              ),
              !!(yield this.ensureVideoBufferCapacity(
                t.getNV12FrameSize(this.width, this.height),
                b,
              )))
            ) {
              var O =
                  (s = this.mediaCaptureStream) == null
                    ? void 0
                    : s.videoElement,
                B =
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                W = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (!(u.isCaptureInProgress || g !== u.$15)) {
                        u.isCaptureInProgress = !0;
                        var n = u.width,
                          a = u.height,
                          i = 1e3 / d;
                        try {
                          if (u.isStopped) return;
                          if (!u.mediaCaptureStream || !O || !u.converter) {
                            o("WALogger").ERROR(
                              E ||
                                (E = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Video capture not ready, canceling frame capture",
                                ])),
                              b,
                            );
                            return;
                          }
                          if (O.readyState < O.HAVE_CURRENT_DATA) {
                            (o("WALogger").WARN(
                              k ||
                                (k = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  " Video not ready yet, skipping frame capture",
                                ])),
                              b,
                            ),
                              e(i));
                            return;
                          }
                          if (
                            O.readyState < 2 ||
                            O.videoWidth === 0 ||
                            O.videoHeight === 0
                          )
                            throw r("err")(
                              "Video element not ready for capture",
                            );
                          var l = o(
                            "WAWebVoipEncodeTargetFpsState",
                          ).getEncodeTargetFps();
                          if (l > 0) {
                            var s = Math.max(J, Math.min(Z, l + ee)),
                              c = (1e3 / s) * te,
                              p = self.performance.now(),
                              _ = p - u.lastCaptureTime;
                            if (_ < c) {
                              e(i);
                              return;
                            }
                            u.lastCaptureTime = p;
                          }
                          var f = O;
                          try {
                            var h,
                              y,
                              C = m === "onDesktopCaptureDataFromJs",
                              v = u.$22(O, C);
                            if (v != null) {
                              var S = yield u.$25({
                                counterRotation: v,
                                element: O,
                                frameInterval: i,
                                generation: g,
                                height: a,
                                logPrefix: b,
                                maxFps: d,
                                onVideoDataFnType: m,
                                requestCallback: e,
                                voipWasm: B,
                                width: n,
                              });
                              if (S) return;
                            }
                            u.$18(O, b);
                            var R = u.$12,
                              L =
                                R != null
                                  ? o(
                                      "WAWebVoipVideoCaptureSourceRect",
                                    ).getVideoElementSourceCropRect(O, R)
                                  : null,
                              $ =
                                (h = R == null ? void 0 : R.width) != null
                                  ? h
                                  : O.videoWidth,
                              P =
                                (y = R == null ? void 0 : R.height) != null
                                  ? y
                                  : O.videoHeight,
                              N = o(
                                "WAWebVoipVideoCaptureSourceRect",
                              ).closestEven($),
                              M = o(
                                "WAWebVoipVideoCaptureSourceRect",
                              ).closestEven(P),
                              w =
                                L != null ||
                                N !== O.videoWidth ||
                                M !== O.videoHeight;
                            if (N !== n || M !== a) {
                              if (
                                (o("WALogger").LOG(
                                  I ||
                                    (I =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Video dims ",
                                        "x",
                                        " mismatch ",
                                        "x",
                                        ", skip",
                                      ])),
                                  N,
                                  M,
                                  n,
                                  a,
                                ),
                                yield u.__initVideoCapture({
                                  width: N,
                                  height: M,
                                }),
                                !(yield u.ensureVideoBufferCapacity(
                                  t.getNV12FrameSize(u.width, u.height),
                                  b,
                                )))
                              )
                                return;
                              ((u.consecutiveErrors = 0), e(i));
                              return;
                            }
                            if (L != null) {
                              var A = u.$19({
                                  height: M,
                                  videoElement: O,
                                  width: N,
                                }),
                                F = u.$11;
                              if (A != null && F != null)
                                (F.drawImage(
                                  O,
                                  L.x,
                                  L.y,
                                  L.width,
                                  L.height,
                                  0,
                                  0,
                                  N,
                                  M,
                                ),
                                  (f = A));
                              else {
                                var W = o(
                                    "WAWebVoipVideoCaptureSourceRect",
                                  ).getImageBitmapResizeOptionsForSourceCropRect(
                                    L,
                                    N,
                                    M,
                                  ),
                                  q = yield createImageBitmap(
                                    O,
                                    L.x,
                                    L.y,
                                    L.width,
                                    L.height,
                                  );
                                if (W == null) f = q;
                                else
                                  try {
                                    f = yield createImageBitmap(q, W);
                                  } finally {
                                    q.close();
                                  }
                              }
                              if (u.isStopped || !u.converter) return;
                            } else if (w) {
                              var U, V;
                              if (
                                ((f = yield createImageBitmap(
                                  O,
                                  (U = R == null ? void 0 : R.x) != null
                                    ? U
                                    : 0,
                                  (V = R == null ? void 0 : R.y) != null
                                    ? V
                                    : 0,
                                  N,
                                  M,
                                )),
                                u.isStopped || !u.converter)
                              )
                                return;
                            }
                            var H = yield oe({
                              failureLog: u.$16,
                              isCurrent: function () {
                                return u.$17(g);
                              },
                              processor: u.$14,
                              source: f,
                            });
                            if (H == null) {
                              e(i);
                              return;
                            }
                            var G;
                            try {
                              var z = u.converter;
                              if (!z) return;
                              G = yield z.convertVideoToNV12(H.image);
                            } catch (t) {
                              yield u.handleCaptureError({
                                error: t,
                                frameInterval: i,
                                logPrefix: b,
                                requestCallback: e,
                              });
                              return;
                            } finally {
                              H.release();
                            }
                            u.consecutiveErrors = 0;
                            var j = o("WAWebVoipMediaEnums").Orientation.Normal;
                            if (
                              (u.$1 < 3 &&
                                (u.$1++,
                                o("WALogger").LOG(
                                  T ||
                                    (T =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " [orient] frame#",
                                        " sent=",
                                        " reason=display-upright converter=",
                                        "x",
                                        "",
                                      ])),
                                  b,
                                  u.$1,
                                  j,
                                  n,
                                  a,
                                )),
                              !(yield u.ensureVideoBufferCapacity(
                                G.byteLength,
                                b,
                              )))
                            )
                              return;
                            if (u.videoBuffer != null) {
                              var K = u.videoBuffer;
                              (B.GROWABLE_HEAP_U8().set(G, K),
                                B[m](
                                  K,
                                  G.length,
                                  n,
                                  a,
                                  d,
                                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                    .NV12,
                                  j,
                                ));
                            } else
                              o("WALogger")
                                .ERROR(
                                  D ||
                                    (D =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " video buffer not initialized",
                                      ])),
                                  b,
                                )
                                .sendLogs(
                                  "voip: wasm: video buffer not initialized",
                                );
                            var Q = o(
                              "WAWebVoipVideoRenderSource",
                            ).WAWebVoipVideoRenderSource.self(
                              m === "onDesktopCaptureDataFromJs" &&
                                o(
                                  "WAWebVoipDualStreamScreenShareState",
                                ).isSelfDualStreamScreenShareActive()
                                ? o("WAWebVoipVideoRenderSource")
                                    .WAWebVoipVideoRenderStream.SCREEN_SHARE
                                : o("WAWebVoipVideoRenderSource")
                                    .WAWebVoipVideoRenderStream.CAMERA,
                            );
                            (o(
                              "WAWebVoipVideoRendererRegistry",
                            ).videoRendererRegistry.onVideoFrameWasmToJs(
                              Q,
                              G.buffer,
                              n,
                              a,
                              j,
                              o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                .NV12,
                              0,
                              !1,
                            ),
                              e(i));
                          } finally {
                            f instanceof ImageBitmap && f.close();
                          }
                        } catch (t) {
                          (o("WALogger").ERROR(
                            x ||
                              (x = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " video processing error: ",
                                "",
                              ])),
                            b,
                            t,
                          ),
                            !u.isStopped &&
                              u.mediaCaptureStream != null &&
                              u.converter != null &&
                              e(i));
                        } finally {
                          g === u.$15 && (u.isCaptureInProgress = !1);
                        }
                      }
                    },
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })();
              O && O.readyState >= O.HAVE_CURRENT_DATA
                ? window.setTimeout(function () {
                    return u.$26(W, g);
                  }, 0)
                : O &&
                  O.addEventListener(
                    "loadeddata",
                    function () {
                      return u.$26(W, g);
                    },
                    { once: !0 },
                  );
            }
          });
          function a(t) {
            return e.apply(this, arguments);
          }
          return a;
        })()),
        (a.$26 = function (t, r) {
          var e = this;
          if (this.$17(r)) {
            var a = document.visibilityState === "visible",
              i = function () {
                (X || (X = n("Promise"))).resolve(t(l)).catch(function (e) {
                  o("WALogger").WARN(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:captureFrame] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              },
              l = function (n) {
                if (e.$17(r)) {
                  e.clearScheduledCapture();
                  var t = e.getCaptureSchedulerWindow(),
                    o = e.shouldScheduleWithAnimationFrame(t);
                  o
                    ? ((e.animationFrameWindow = t),
                      (e.animationFrameId = t.requestAnimationFrame(
                        function () {
                          ((e.animationFrameId = null),
                            (e.animationFrameWindow = null),
                            (e.timeoutFrameWindow = t),
                            (e.timeoutFrameId = t.setTimeout(function () {
                              ((e.timeoutFrameId = null),
                                (e.timeoutFrameWindow = null),
                                i());
                            }, n)));
                        },
                      )))
                    : ((e.timeoutFrameWindow = t),
                      (e.timeoutFrameId = t.setTimeout(function () {
                        ((e.timeoutFrameId = null),
                          (e.timeoutFrameWindow = null),
                          i());
                      }, n)));
                }
              };
            (this.visibilityChangeListener &&
              document.removeEventListener(
                "visibilitychange",
                this.visibilityChangeListener,
              ),
              this.popoutVisibilityChangeListener &&
                o(
                  "WAWebVoipPopoutWindowState",
                ).WAWebVoipUiPopoutWindowEventEmitter.off(
                  "popoutWindowVisibilityChanged",
                  this.popoutVisibilityChangeListener,
                ));
            var s = function (n) {
              var t, l;
              (e.clearScheduledCapture(),
                (a = document.visibilityState === "visible"));
              var s = o(
                  "WAWebVoipPopoutWindowState",
                ).getIsPopoutWindowActiveAndVisible(),
                u = a || s,
                c = e.getCaptureSchedulerWindow();
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:VideoCapture] ",
                    " visible=",
                    " popout=",
                    " converter=",
                    " scheduler=",
                    "",
                  ])),
                n,
                String(a),
                String(s),
                (t =
                  (l = e.converter) == null ? void 0 : l.getConverterName()) !=
                  null
                  ? t
                  : "none",
                c === window ? "main" : "popout",
              );
              var d = function () {
                e.$17(r) &&
                  (o("WAWebUA").UA.isSafari &&
                    e.fallbackConverter &&
                    (!u && !e.usingFallback
                      ? e.switchToFallbackConverter().catch(function (e) {
                          o("WALogger").WARN(
                            N ||
                              (N = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:VideoCapture] switchToFallback error: ",
                                "",
                              ])),
                            e,
                          );
                        })
                      : u &&
                        e.usingFallback &&
                        e.switchBackToPrimaryConverter().catch(function (e) {
                          o("WALogger").WARN(
                            M ||
                              (M = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:VideoCapture] switchBackToPrimary error: ",
                                "",
                              ])),
                            e,
                          );
                        })),
                  i());
              };
              try {
                c.setTimeout(d, 0);
              } catch (e) {
                window.setTimeout(d, 0);
              }
            };
            ((this.visibilityChangeListener = function () {
              s("visibilitychange");
            }),
              document.addEventListener(
                "visibilitychange",
                this.visibilityChangeListener,
              ),
              (this.popoutVisibilityChangeListener = function (e) {
                s("popoutVisibilitychange=" + e.visibilityState);
              }),
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.on(
                "popoutWindowVisibilityChanged",
                this.popoutVisibilityChangeListener,
              ),
              i());
          }
        }),
        (a.switchToFallbackConverter = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(
                !this.fallbackConverter ||
                this.usingFallback ||
                this.converterSwitchInProgress
              )
            ) {
              this.converterSwitchInProgress = !0;
              try {
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:VideoCapture] Switching to fallback converter ",
                      "",
                    ])),
                  this.fallbackConverter.getConverterName(),
                );
                var e = this.primaryConverter;
                ((this.converter = this.fallbackConverter),
                  (this.usingFallback = !0),
                  e && (yield e.cleanup()));
              } finally {
                ((this.converterSwitchInProgress = !1),
                  this.numReconcileRequested++);
                try {
                  yield this.reconcileState();
                } finally {
                  this.numReconcileRequested--;
                }
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.switchBackToPrimaryConverter = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(
                !this.primaryConverter ||
                !this.usingFallback ||
                this.converterSwitchInProgress
              )
            ) {
              this.converterSwitchInProgress = !0;
              try {
                var e = yield this.createConverter(this.width, this.height),
                  t = this.primaryConverter;
                ((this.primaryConverter = e),
                  (this.converter = e),
                  (this.usingFallback = !1),
                  o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] Switched back to primary converter ",
                        "",
                      ])),
                    e.getConverterName(),
                  ),
                  t && (yield t.cleanup()));
              } finally {
                ((this.converterSwitchInProgress = !1),
                  this.numReconcileRequested++);
                try {
                  yield this.reconcileState();
                } finally {
                  this.numReconcileRequested--;
                }
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.reconcileState = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!this.converterSwitchInProgress) {
              if (this.numReconcileRequested > 1) {
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:VideoCapture] max reconcile limit, skip",
                    ])),
                );
                return;
              }
              var e =
                document.visibilityState !== "visible" &&
                !o(
                  "WAWebVoipPopoutWindowState",
                ).getIsPopoutWindowActiveAndVisible();
              e && !this.usingFallback && this.fallbackConverter
                ? (o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                      ])),
                  ),
                  yield this.switchToFallbackConverter())
                : !e &&
                  this.usingFallback &&
                  this.primaryConverter &&
                  (o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> primary",
                      ])),
                  ),
                  yield this.switchBackToPrimaryConverter());
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.stopVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t,
              n =
                (e =
                  (t = this.converter) == null
                    ? void 0
                    : t.getConverterName()) != null
                  ? e
                  : "unknown",
              r = "voip: stopVideoCapture (" + n + ")";
            (o("WALogger").LOG(
              W || (W = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              r,
            ),
              (this.isStopped = !0),
              this.$15++,
              (this.lastCaptureTime = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              this.$21(),
              (this.$4 = !1));
            try {
              (this.clearScheduledCapture(),
                this.visibilityChangeListener &&
                  (document.removeEventListener(
                    "visibilitychange",
                    this.visibilityChangeListener,
                  ),
                  (this.visibilityChangeListener = null)),
                this.popoutVisibilityChangeListener &&
                  (o(
                    "WAWebVoipPopoutWindowState",
                  ).WAWebVoipUiPopoutWindowEventEmitter.off(
                    "popoutWindowVisibilityChanged",
                    this.popoutVisibilityChangeListener,
                  ),
                  (this.popoutVisibilityChangeListener = null)));
              var a = this.mediaCaptureStream;
              if (a) {
                var i = a.mediaStream.getTracks();
                (i.forEach(function (e) {
                  e.stop();
                }),
                  o("WALogger").LOG(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stopped ",
                        " tracks: ",
                        "",
                      ])),
                    r,
                    i.length,
                    i.slice(0, 3).map(function (e) {
                      return e.kind;
                    }),
                  ));
                var l = a.videoElement;
                ((l.srcObject = null),
                  l.remove(),
                  (this.mediaCaptureStream = null),
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stopped video stream",
                      ])),
                    r,
                  ));
              }
              var s = this.primaryConverter,
                u = this.converter,
                c = this.fallbackConverter,
                d = new Set();
              (s != null &&
                (yield s.cleanup(),
                d.add(s),
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaned up primary converter",
                    ])),
                  r,
                )),
                u != null &&
                  !d.has(u) &&
                  (yield u.cleanup(),
                  d.add(u),
                  o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up active converter",
                      ])),
                    r,
                  )),
                c != null &&
                  !d.has(c) &&
                  (yield c.cleanup(),
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up fallback converter",
                      ])),
                    r,
                  )),
                (this.primaryConverter = null),
                (this.converter = null),
                (this.fallbackConverter = null));
            } finally {
              if (this.videoBuffer != null)
                try {
                  (yield ce(this.videoBuffer),
                    o("WALogger").LOG(
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " freed WASM video buffer",
                        ])),
                      r,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " error freeing WASM video buffer: ",
                        "",
                      ])),
                    r,
                    e,
                  );
                }
              ((this.videoBuffer = null), (this.videoBufferSize = 0));
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.getNV12FrameSize = function (t, n) {
          return Math.floor(t * n * 1.5);
        }),
        t
      );
    })();
    function le() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_video_capture_dom_attach",
        ) !== !1
      );
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return t._malloc(e);
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        de.apply(this, arguments)
      );
    }
    ((l.getImageBitmapResizeOptionsForSourceCropRect = (Q = o(
      "WAWebVoipVideoCaptureSourceRect",
    )).getImageBitmapResizeOptionsForSourceCropRect),
      (l.getVideoElementSourceCropRect = Q.getVideoElementSourceCropRect),
      (l.getVideoSourceContentRect = Q.getVideoSourceContentRect),
      (l.probeVideoSourceContentRect = Q.probeVideoSourceContentRect),
      (l.resolveConverterCaptureRotation = re),
      (l.prepareConversionSource = oe),
      (l.WAWebVoipVideoCaptureWithConverter = ie));
  },
  98,
);
