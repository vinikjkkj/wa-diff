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
      X = 3,
      Y = 15,
      J = 30,
      Z = 2,
      ee = 0.9,
      te = "orientation";
    function ne(e) {
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
    var re = (function () {
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
        (a.$14 = function (n, r) {
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
              this.consecutiveErrors >= X && !this.isStopped)
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
        (a.$15 = function (t) {
          var e = t.height,
            n = t.videoElement,
            r = t.width,
            o = this.$10;
          if (o != null && o.width === r && o.height === e) return o;
          this.$16();
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
        (a.$16 = function () {
          var e = this.$10;
          (e != null && ((e.width = 0), (e.height = 0)),
            (this.$10 = null),
            (this.$11 = null));
        }),
        (a.$17 = function () {
          var e = this.$7;
          (e != null && ((e.width = 0), (e.height = 0)),
            (this.$7 = null),
            (this.$8 = null));
        }),
        (a.$18 = function (t, n) {
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
            s = l != null ? l[te] : null;
          return ne({
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
        (a.$19 = function (t, n) {
          var e = n.counterRotationDegrees,
            r = n.outputHeight,
            o = n.outputWidth;
          if (this.$7 == null || this.$7.width !== o || this.$7.height !== r) {
            this.$17();
            var a = t.ownerDocument.createElement("canvas");
            ((a.width = o), (a.height = r));
            var i = a.getContext("2d");
            if (i == null) return null;
            ((i.imageSmoothingEnabled = !0), (this.$7 = a), (this.$8 = i));
          }
          var l = this.$8;
          return l == null
            ? null
            : (l.setTransform(1, 0, 0, 1, 0, 0),
              l.clearRect(0, 0, o, r),
              e === 90
                ? (l.translate(o, 0), l.rotate(Math.PI / 2))
                : e === 180
                  ? (l.translate(o, r), l.rotate(Math.PI))
                  : (l.translate(0, r), l.rotate(-Math.PI / 2)),
              l.drawImage(t, 0, 0, t.videoWidth, t.videoHeight),
              l.setTransform(1, 0, 0, 1, 0, 0),
              this.$7);
        }),
        (a.$20 = function (t) {
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
        (a.$21 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = e.counterRotation,
              r = e.element,
              a = e.frameInterval,
              i = e.height,
              l = e.logPrefix,
              s = e.maxFps,
              u = e.onVideoDataFnType,
              m = e.requestCallback,
              p = e.voipWasm,
              _ = e.width,
              f = this.$19(r, n);
            if (f == null)
              return (
                (this.$9 = !0),
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " counter-rotation canvas unavailable; falling back to legacy crop path (video may be cropped/mis-rotated)",
                      ])),
                    l,
                  )
                  .sendLogs("voip-withconverter-rotation-canvas-unavailable"),
                !1
              );
            var g = n.orientation,
              h = n.outputHeight,
              y = n.outputWidth;
            if (y !== _ || h !== i)
              return (
                yield this.__initVideoCapture({ height: h, width: y }),
                yield this.ensureVideoBufferCapacity(
                  t.getNV12FrameSize(this.width, this.height),
                  l,
                ),
                (this.consecutiveErrors = 0),
                m(a),
                !0
              );
            var C = this.converter;
            if (C == null) return !0;
            var b;
            try {
              b = yield C.convertVideoToNV12(f);
            } catch (e) {
              return (
                yield this.handleCaptureError({
                  error: e,
                  frameInterval: a,
                  logPrefix: l,
                  requestCallback: m,
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
                    l,
                    this.$1,
                    g,
                    _,
                    i,
                    n.counterRotationDegrees,
                  )),
                !(yield this.ensureVideoBufferCapacity(b.byteLength, l))) ||
                this.isStopped ||
                this.converter == null ||
                (this.$20({
                  height: i,
                  maxFps: s,
                  nv12Data: b,
                  onVideoDataFnType: u,
                  orientation: g,
                  voipWasm: p,
                  width: _,
                }),
                m(a)),
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
                      (Q || (Q = n("Promise")))
                        .resolve(a.cleanup())
                        .catch(r("WAWebNoop")),
                    !1)
                  : ((this.converter = a),
                    (this.primaryConverter = null),
                    (this.usingFallback = !0),
                    this.fallbackConverter != null &&
                      this.fallbackConverter !== a &&
                      (Q || (Q = n("Promise")))
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
                      (Q || (Q = n("Promise")))
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
                n != null && (yield le(n)));
              var a = yield ae(e);
              return this.isStopped
                ? (yield le(a), !1)
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
              yield (Q || (Q = n("Promise"))).all(i));
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
              _ = e.width;
            ((this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.consecutiveErrors = 0),
              (this.usingFallback = !1),
              (this.$1 = 0),
              this.$16(),
              this.$17(),
              (this.$9 = !1),
              (this.$4 = !1),
              (this.$3 = 0),
              (this.$5 = _),
              (this.$6 = c),
              (this.$12 = null),
              (this.$13 = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              yield this.__initVideoCapture({ width: _, height: c }));
            var f = p.getVideoTracks()[0],
              g =
                f == null ||
                f.getSettings == null ||
                (a = f.getSettings()) == null
                  ? void 0
                  : a.facingMode;
            this.$2 = g === "environment";
            var h = r("nullthrows")(this.converter).getConverterName(),
              y = "voip: [AV:startVideoCapture (" + h + ")]";
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " facingMode=",
                  "",
                ])),
              y,
              g != null ? g : "unknown",
            );
            var C =
                (i =
                  (l = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : l.document) != null
                  ? i
                  : null,
              b = C != null ? C : document;
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              y,
              C != null ? "popout" : "main",
            );
            var $ = oe();
            if ($) {
              var P = this.mediaCaptureStream;
              P != null &&
                ((P.videoElement.srcObject = null), P.videoElement.remove());
            }
            this.mediaCaptureStream = {
              mediaStream: p,
              videoElement: b.createElement("video"),
            };
            var N = this.mediaCaptureStream.videoElement;
            if (
              ((N.srcObject = p),
              (N.autoplay = !0),
              (N.muted = !0),
              (N.playsInline = !0),
              $)
            ) {
              (N.setAttribute("aria-hidden", "true"),
                (N.style.cssText =
                  "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"));
              var M = b.body;
              if (M == null)
                throw (
                  o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " no document body to host capture video",
                        ])),
                      y,
                    )
                    .sendLogs("voip-withconverter-capture-no-body"),
                  r("err")("No document body to host capture video")
                );
              M.appendChild(N);
            }
            o(
              "WAWebCoreActionsODS",
            ).logCallVideoCaptureWithConverterPlayAttempt($);
            try {
              var w;
              (yield (w = this.mediaCaptureStream) == null
                ? void 0
                : w.videoElement.play(),
                o(
                  "WAWebCoreActionsODS",
                ).logCallVideoCaptureWithConverterPlaySuccess($));
            } catch (e) {
              throw (
                o(
                  "WAWebCoreActionsODS",
                ).logCallVideoCaptureWithConverterPlayFailure($),
                e
              );
            }
            if (
              (this.$14(N, y),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready",
                  ])),
                y,
              ),
              !!(yield this.ensureVideoBufferCapacity(
                t.getNV12FrameSize(this.width, this.height),
                y,
              )))
            ) {
              var A =
                  (s = this.mediaCaptureStream) == null
                    ? void 0
                    : s.videoElement,
                F =
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                O = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (!u.isCaptureInProgress) {
                        u.isCaptureInProgress = !0;
                        var n = u.width,
                          a = u.height,
                          i = 1e3 / d;
                        try {
                          if (u.isStopped) return;
                          if (!u.mediaCaptureStream || !A || !u.converter) {
                            o("WALogger").ERROR(
                              E ||
                                (E = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Video capture not ready, canceling frame capture",
                                ])),
                              y,
                            );
                            return;
                          }
                          if (A.readyState < A.HAVE_CURRENT_DATA) {
                            (o("WALogger").WARN(
                              k ||
                                (k = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  " Video not ready yet, skipping frame capture",
                                ])),
                              y,
                            ),
                              e(i));
                            return;
                          }
                          if (
                            A.readyState < 2 ||
                            A.videoWidth === 0 ||
                            A.videoHeight === 0
                          )
                            throw r("err")(
                              "Video element not ready for capture",
                            );
                          var l = o(
                            "WAWebVoipEncodeTargetFpsState",
                          ).getEncodeTargetFps();
                          if (l > 0) {
                            var s = Math.max(Y, Math.min(J, l + Z)),
                              c = (1e3 / s) * ee,
                              p = self.performance.now(),
                              _ = p - u.lastCaptureTime;
                            if (_ < c) {
                              e(i);
                              return;
                            }
                            u.lastCaptureTime = p;
                          }
                          var f = A;
                          try {
                            var g,
                              h,
                              C = m === "onDesktopCaptureDataFromJs",
                              b = u.$18(A, C);
                            if (b != null) {
                              var v = yield u.$21({
                                counterRotation: b,
                                element: A,
                                frameInterval: i,
                                height: a,
                                logPrefix: y,
                                maxFps: d,
                                onVideoDataFnType: m,
                                requestCallback: e,
                                voipWasm: F,
                                width: n,
                              });
                              if (v) return;
                            }
                            u.$14(A, y);
                            var S = u.$12,
                              R =
                                S != null
                                  ? o(
                                      "WAWebVoipVideoCaptureSourceRect",
                                    ).getVideoElementSourceCropRect(A, S)
                                  : null,
                              L =
                                (g = S == null ? void 0 : S.width) != null
                                  ? g
                                  : A.videoWidth,
                              $ =
                                (h = S == null ? void 0 : S.height) != null
                                  ? h
                                  : A.videoHeight,
                              P = o(
                                "WAWebVoipVideoCaptureSourceRect",
                              ).closestEven(L),
                              N = o(
                                "WAWebVoipVideoCaptureSourceRect",
                              ).closestEven($),
                              M =
                                R != null ||
                                P !== A.videoWidth ||
                                N !== A.videoHeight;
                            if (P !== n || N !== a) {
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
                                  P,
                                  N,
                                  n,
                                  a,
                                ),
                                yield u.__initVideoCapture({
                                  width: P,
                                  height: N,
                                }),
                                !(yield u.ensureVideoBufferCapacity(
                                  t.getNV12FrameSize(u.width, u.height),
                                  y,
                                )))
                              )
                                return;
                              ((u.consecutiveErrors = 0), e(i));
                              return;
                            }
                            if (R != null) {
                              var w = u.$15({
                                  height: N,
                                  videoElement: A,
                                  width: P,
                                }),
                                O = u.$11;
                              if (w != null && O != null)
                                (O.drawImage(
                                  A,
                                  R.x,
                                  R.y,
                                  R.width,
                                  R.height,
                                  0,
                                  0,
                                  P,
                                  N,
                                ),
                                  (f = w));
                              else {
                                var B = o(
                                    "WAWebVoipVideoCaptureSourceRect",
                                  ).getImageBitmapResizeOptionsForSourceCropRect(
                                    R,
                                    P,
                                    N,
                                  ),
                                  W = yield createImageBitmap(
                                    A,
                                    R.x,
                                    R.y,
                                    R.width,
                                    R.height,
                                  );
                                if (B == null) f = W;
                                else
                                  try {
                                    f = yield createImageBitmap(W, B);
                                  } finally {
                                    W.close();
                                  }
                              }
                              if (u.isStopped || !u.converter) return;
                            } else if (M) {
                              var q, U;
                              if (
                                ((f = yield createImageBitmap(
                                  A,
                                  (q = S == null ? void 0 : S.x) != null
                                    ? q
                                    : 0,
                                  (U = S == null ? void 0 : S.y) != null
                                    ? U
                                    : 0,
                                  P,
                                  N,
                                )),
                                u.isStopped || !u.converter)
                              )
                                return;
                            }
                            if (!u.converter) return;
                            var V;
                            try {
                              V = yield u.converter.convertVideoToNV12(f);
                            } catch (t) {
                              yield u.handleCaptureError({
                                error: t,
                                frameInterval: i,
                                logPrefix: y,
                                requestCallback: e,
                              });
                              return;
                            }
                            u.consecutiveErrors = 0;
                            var H = o("WAWebVoipMediaEnums").Orientation.Normal;
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
                                  y,
                                  u.$1,
                                  H,
                                  n,
                                  a,
                                )),
                              !(yield u.ensureVideoBufferCapacity(
                                V.byteLength,
                                y,
                              )))
                            )
                              return;
                            if (u.videoBuffer != null) {
                              var G = u.videoBuffer;
                              (F.GROWABLE_HEAP_U8().set(V, G),
                                F[m](
                                  G,
                                  V.length,
                                  n,
                                  a,
                                  d,
                                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                    .NV12,
                                  H,
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
                                  y,
                                )
                                .sendLogs(
                                  "voip: wasm: video buffer not initialized",
                                );
                            var z = o(
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
                              z,
                              V.buffer,
                              n,
                              a,
                              H,
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
                            y,
                            t,
                          ),
                            !u.isStopped &&
                              u.mediaCaptureStream != null &&
                              u.converter != null &&
                              e(i));
                        } finally {
                          u.isCaptureInProgress = !1;
                        }
                      }
                    },
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })();
              A && A.readyState >= A.HAVE_CURRENT_DATA
                ? window.setTimeout(function () {
                    return u.$22(O);
                  }, 0)
                : A &&
                  A.addEventListener(
                    "loadeddata",
                    function () {
                      return u.$22(O);
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
        (a.$22 = function (t) {
          var e = this,
            r = document.visibilityState === "visible",
            a = function () {
              (Q || (Q = n("Promise"))).resolve(t(i)).catch(function (e) {
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
            i = function (n) {
              if (!e.isStopped) {
                e.clearScheduledCapture();
                var t = e.getCaptureSchedulerWindow(),
                  r = e.shouldScheduleWithAnimationFrame(t);
                r
                  ? ((e.animationFrameWindow = t),
                    (e.animationFrameId = t.requestAnimationFrame(function () {
                      ((e.animationFrameId = null),
                        (e.animationFrameWindow = null),
                        (e.timeoutFrameWindow = t),
                        (e.timeoutFrameId = t.setTimeout(function () {
                          ((e.timeoutFrameId = null),
                            (e.timeoutFrameWindow = null),
                            a());
                        }, n)));
                    })))
                  : ((e.timeoutFrameWindow = t),
                    (e.timeoutFrameId = t.setTimeout(function () {
                      ((e.timeoutFrameId = null),
                        (e.timeoutFrameWindow = null),
                        a());
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
          var l = function (n) {
            var t, i;
            (e.clearScheduledCapture(),
              (r = document.visibilityState === "visible"));
            var l = o(
                "WAWebVoipPopoutWindowState",
              ).getIsPopoutWindowActiveAndVisible(),
              s = r || l,
              u = e.getCaptureSchedulerWindow();
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
              String(r),
              String(l),
              (t = (i = e.converter) == null ? void 0 : i.getConverterName()) !=
                null
                ? t
                : "none",
              u === window ? "main" : "popout",
            );
            var c = function () {
              e.isStopped ||
                (o("WAWebUA").UA.isSafari &&
                  e.fallbackConverter &&
                  (!s && !e.usingFallback
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
                    : s &&
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
                a());
            };
            try {
              u.setTimeout(c, 0);
            } catch (e) {
              window.setTimeout(c, 0);
            }
          };
          ((this.visibilityChangeListener = function () {
            l("visibilitychange");
          }),
            document.addEventListener(
              "visibilitychange",
              this.visibilityChangeListener,
            ),
            (this.popoutVisibilityChangeListener = function (e) {
              l("popoutVisibilitychange=" + e.visibilityState);
            }),
            o(
              "WAWebVoipPopoutWindowState",
            ).WAWebVoipUiPopoutWindowEventEmitter.on(
              "popoutWindowVisibilityChanged",
              this.popoutVisibilityChangeListener,
            ),
            a());
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
              (this.lastCaptureTime = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              this.$17(),
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
                  (yield le(this.videoBuffer),
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
    function oe() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_video_capture_dom_attach",
        ) !== !1
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return t._malloc(e);
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        se.apply(this, arguments)
      );
    }
    ((l.getImageBitmapResizeOptionsForSourceCropRect = (K = o(
      "WAWebVoipVideoCaptureSourceRect",
    )).getImageBitmapResizeOptionsForSourceCropRect),
      (l.getVideoElementSourceCropRect = K.getVideoElementSourceCropRect),
      (l.getVideoSourceContentRect = K.getVideoSourceContentRect),
      (l.probeVideoSourceContentRect = K.probeVideoSourceContentRect),
      (l.resolveConverterCaptureRotation = ne),
      (l.WAWebVoipVideoCaptureWithConverter = re));
  },
  98,
);
