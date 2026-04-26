__d(
  "WAWebVoipVideoCaptureWithConverter",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRendererInterface",
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
      G;
    function z(e, t, n) {
      return e.width === t && e.height === n
        ? null
        : { resizeWidth: t, resizeHeight: n };
    }
    var j = 3,
      K = 15,
      Q = 30,
      X = 2,
      Y = 0.9,
      J = 3,
      Z = 5,
      ee = 60;
    function te(e) {
      return e - (e % 2);
    }
    function ne(e, t, n) {
      return e <= 0 || t <= 0 || n <= 0 ? 0 : te(Math.floor((e * n) / t));
    }
    function re(e, t, n) {
      var r = Math.min(t, Math.max(0, e.x)),
        o = Math.min(n, Math.max(0, e.y)),
        a = Math.max(r, Math.min(t, e.x + e.width)),
        i = Math.max(o, Math.min(n, e.y + e.height));
      return {
        x: r,
        y: o,
        width: te(Math.max(0, a - r)),
        height: te(Math.max(0, i - o)),
      };
    }
    function oe(e) {
      var t = e.codedHeight,
        n = e.codedWidth,
        r = e.height,
        o = e.visibleHeight,
        a = e.visibleWidth,
        i = e.width,
        l = e.x,
        s = e.y;
      return (
        i > 0 &&
        r > 0 &&
        a > 0 &&
        o > 0 &&
        n > 0 &&
        t > 0 &&
        (a !== n || o !== t || l !== 0 || s !== 0)
      );
    }
    function ae(e) {
      var t = r("WAWebVoipVideoFrameCtor")();
      if (t == null) return null;
      var n = null;
      try {
        n = new t(e, { timestamp: 0 });
        var o = n.visibleRect,
          a = te(n.displayWidth),
          i = te(n.displayHeight),
          l = te(n.codedWidth),
          s = te(n.codedHeight),
          u = {
            x: o != null ? Math.floor(o.x) : 0,
            y: o != null ? Math.floor(o.y) : 0,
            width:
              o != null
                ? Math.max(0, Math.floor(o.width))
                : Math.max(0, Math.floor(n.displayWidth)),
            height:
              o != null
                ? Math.max(0, Math.floor(o.height))
                : Math.max(0, Math.floor(n.displayHeight)),
          },
          c = re(u, l, s),
          d = {
            x: c.x,
            y: c.y,
            width: ne(a, u.width, c.width),
            height: ne(i, u.height, c.height),
            visibleWidth: c.width,
            visibleHeight: c.height,
            codedWidth: l,
            codedHeight: s,
          };
        return oe(d) ? d : null;
      } catch (e) {
        return null;
      } finally {
        if (n != null)
          try {
            n.close();
          } catch (e) {}
      }
    }
    function ie(e) {
      return e <= J || e % Z === 0;
    }
    function le(e, t) {
      if (t >= ee) return { detectionAttempts: t, sourceContentRect: null };
      var n = t + 1;
      return ie(n)
        ? { detectionAttempts: n, sourceContentRect: ae(e) }
        : { detectionAttempts: n, sourceContentRect: null };
    }
    function se(e, t) {
      var n = Math.floor(e.videoWidth),
        r = Math.floor(e.videoHeight);
      if (n <= 0 || r <= 0 || t.codedWidth <= 0 || t.codedHeight <= 0)
        return null;
      var o = n / t.codedWidth,
        a = r / t.codedHeight,
        i = Math.max(0, Math.floor(t.x * o)),
        l = Math.max(0, Math.floor(t.y * a)),
        s = Math.max(0, n - i),
        u = Math.max(0, r - l),
        c = Math.min(s, Math.ceil(t.visibleWidth * o)),
        d = Math.min(u, Math.ceil(t.visibleHeight * a));
      return c <= 0 || d <= 0 ? null : { x: i, y: l, width: c, height: d };
    }
    var ue = (function () {
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
          (this.$1 = !1),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = null),
          (this.$7 = 0),
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
        (a.$8 = function (n, r) {
          if (!(this.$6 != null || this.$7 >= ee)) {
            var t = le(n, this.$7);
            this.$7 = t.detectionAttempts;
            var a = this.$7,
              i = t.sourceContentRect;
            i != null &&
              ((this.$6 = i),
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              if (
                (o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video processing error: ",
                      "",
                    ])),
                  t,
                  e,
                ),
                this.consecutiveErrors++,
                this.consecutiveErrors >= j && !this.isStopped)
              ) {
                var a = yield this.attemptFallbackRecovery(t);
                a && n(r);
                return;
              }
              !this.isStopped &&
                this.mediaCaptureStream != null &&
                this.converter != null &&
                n(r);
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$9 = function (t, n, r) {
          var e = this.$4;
          if (e != null && e.width === n && e.height === r) return e;
          this.$10();
          var o = t.ownerDocument.createElement("canvas");
          ((o.width = n), (o.height = r));
          var a = o.getContext("2d");
          return a == null
            ? null
            : ((a.imageSmoothingEnabled = !0), (this.$4 = o), (this.$5 = a), o);
        }),
        (a.$10 = function () {
          var e = this.$4;
          (e != null && ((e.width = 0), (e.height = 0)),
            (this.$4 = null),
            (this.$5 = null));
        }),
        (a.attemptFallbackRecovery = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (this.usingFallback)
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " already on fallback converter, stopping capture loop",
                    ])),
                  e,
                ),
                (this.isStopped = !0),
                !1
              );
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                      (G || (G = n("Promise")))
                        .resolve(a.cleanup())
                        .catch(r("WAWebNoop")),
                    !1)
                  : ((this.converter = a),
                    (this.primaryConverter = null),
                    (this.usingFallback = !0),
                    this.fallbackConverter != null &&
                      this.fallbackConverter !== a &&
                      (G || (G = n("Promise")))
                        .resolve(this.fallbackConverter.cleanup())
                        .catch(r("WAWebNoop")),
                    (this.fallbackConverter = null),
                    (this.consecutiveErrors = 0),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " switched to fallback converter: ",
                          "",
                        ])),
                      e,
                      a.getConverterName(),
                    ),
                    t != null &&
                      (G || (G = n("Promise")))
                        .resolve(t.cleanup())
                        .catch(function (t) {
                          o("WALogger").WARN(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                n != null && (yield me(n)));
              var a = yield ce(e);
              return this.isStopped
                ? (yield me(a), !1)
                : ((this.videoBuffer = a),
                  (this.videoBufferSize = e),
                  r > 0 &&
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
              r = e.width;
            ((this.width = te(r)), (this.height = te(t)));
            var a = [];
            (this.converter && a.push(this.converter.cleanup()),
              this.fallbackConverter &&
                a.push(this.fallbackConverter.cleanup()),
              yield (G || (G = n("Promise"))).all(a));
            var i,
              l = !1;
            try {
              i = yield this.createConverter(this.width, this.height);
            } catch (e) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                    "",
                  ])),
                e,
              );
              var s = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              if (s != null)
                ((i = s),
                  (l = !0),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initVideoCapture] Using fallback converter: ",
                        "",
                      ])),
                    i.getConverterName(),
                  ));
              else throw e;
            }
            if (this.isStopped) {
              yield i.cleanup();
              return;
            }
            if (
              ((this.converter = i),
              (this.primaryConverter = i),
              o("WAWebUA").UA.isSafari && !l)
            ) {
              var u = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              u != null && (this.fallbackConverter = u);
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
              s = this,
              u,
              c,
              d = e.height,
              m = e.maxFps,
              p = e.onVideoDataFnType,
              _ = e.stream,
              f = e.width;
            ((this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.consecutiveErrors = 0),
              (this.usingFallback = !1),
              (this.$2 = 0),
              (this.$3 = 0),
              this.$10(),
              (this.$6 = null),
              (this.$7 = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              yield this.__initVideoCapture({ width: f, height: d }));
            var g = _.getVideoTracks()[0],
              h =
                g == null ||
                g.getSettings == null ||
                (a = g.getSettings()) == null
                  ? void 0
                  : a.facingMode;
            this.$1 = h === "environment";
            var T = f,
              D = d,
              x = r("nullthrows")(this.converter).getConverterName(),
              $ = "voip: [AV:startVideoCapture (" + x + ")]";
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " facingMode=",
                  "",
                ])),
              $,
              h != null ? h : "unknown",
            );
            var P =
                (i =
                  (l = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : l.document) != null
                  ? i
                  : null,
              N = P != null ? P : document;
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              $,
              P != null ? "popout" : "main",
            ),
              (this.mediaCaptureStream = {
                mediaStream: _,
                videoElement: N.createElement("video"),
              }));
            var M = this.mediaCaptureStream.videoElement;
            if (
              ((M.srcObject = _),
              (M.autoplay = !0),
              (M.muted = !0),
              (M.playsInline = !0),
              M.addEventListener(
                "loadedmetadata",
                function () {
                  ((s.$2 = o("WAWebVoipMediaEnums").detectSensorOffset(
                    T,
                    D,
                    M.videoWidth,
                    M.videoHeight,
                  )),
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " [orient] sensorOffset cached: ",
                          " track=",
                          "x",
                          " videoEl=",
                          "x",
                          "",
                        ])),
                      $,
                      s.$2,
                      T,
                      D,
                      M.videoWidth,
                      M.videoHeight,
                    ));
                },
                { once: !0 },
              ),
              yield (u = this.mediaCaptureStream) == null
                ? void 0
                : u.videoElement.play(),
              this.$8(M, $),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready",
                  ])),
                $,
              ),
              !!(yield this.ensureVideoBufferCapacity(
                t.getNV12FrameSize(this.width, this.height),
                $,
              )))
            ) {
              var w =
                  (c = this.mediaCaptureStream) == null
                    ? void 0
                    : c.videoElement,
                A =
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                F =
                  o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_dynamic_fps_throttle",
                  ) === !0,
                O = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (!s.isCaptureInProgress) {
                        s.isCaptureInProgress = !0;
                        var n = s.width,
                          a = s.height,
                          i = 1e3 / m;
                        try {
                          if (s.isStopped) return;
                          if (!s.mediaCaptureStream || !w || !s.converter) {
                            o("WALogger").ERROR(
                              S ||
                                (S = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Video capture not ready, canceling frame capture",
                                ])),
                              $,
                            );
                            return;
                          }
                          if (w.readyState < w.HAVE_CURRENT_DATA) {
                            (o("WALogger").WARN(
                              R ||
                                (R = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  " Video not ready yet, skipping frame capture",
                                ])),
                              $,
                            ),
                              e(i));
                            return;
                          }
                          if (
                            w.readyState < 2 ||
                            w.videoWidth === 0 ||
                            w.videoHeight === 0
                          )
                            throw r("err")(
                              "Video element not ready for capture",
                            );
                          if (F) {
                            var l = o(
                              "WAWebVoipEncodeTargetFpsState",
                            ).getEncodeTargetFps();
                            if (l > 0) {
                              var u = Math.max(K, Math.min(Q, l + X)),
                                c = (1e3 / u) * Y,
                                d = self.performance.now(),
                                _ = d - s.lastCaptureTime;
                              if (_ < c) {
                                e(i);
                                return;
                              }
                              s.lastCaptureTime = d;
                            }
                          }
                          var f = w;
                          try {
                            var g, h;
                            s.$8(w, $);
                            var y = s.$6,
                              C = y != null ? se(w, y) : null,
                              b =
                                (g = y == null ? void 0 : y.width) != null
                                  ? g
                                  : w.videoWidth,
                              v =
                                (h = y == null ? void 0 : y.height) != null
                                  ? h
                                  : w.videoHeight,
                              T = te(b),
                              D = te(v),
                              x =
                                C != null ||
                                T !== w.videoWidth ||
                                D !== w.videoHeight;
                            if (T !== n || D !== a) {
                              if (
                                (o("WALogger").LOG(
                                  L ||
                                    (L =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Video dims ",
                                        "x",
                                        " mismatch ",
                                        "x",
                                        ", skip",
                                      ])),
                                  T,
                                  D,
                                  n,
                                  a,
                                ),
                                yield s.__initVideoCapture({
                                  width: T,
                                  height: D,
                                }),
                                !(yield s.ensureVideoBufferCapacity(
                                  t.getNV12FrameSize(s.width, s.height),
                                  $,
                                )))
                              )
                                return;
                              ((s.consecutiveErrors = 0), e(i));
                              return;
                            }
                            if (C != null) {
                              var P = s.$9(w, T, D),
                                N = s.$5;
                              if (P != null && N != null)
                                (N.drawImage(
                                  w,
                                  C.x,
                                  C.y,
                                  C.width,
                                  C.height,
                                  0,
                                  0,
                                  T,
                                  D,
                                ),
                                  (f = P));
                              else {
                                var M = z(C, T, D),
                                  O = yield createImageBitmap(
                                    w,
                                    C.x,
                                    C.y,
                                    C.width,
                                    C.height,
                                  );
                                if (M == null) f = O;
                                else
                                  try {
                                    f = yield createImageBitmap(O, M);
                                  } finally {
                                    O.close();
                                  }
                              }
                              if (s.isStopped || !s.converter) return;
                            } else if (x) {
                              var B, W;
                              if (
                                ((f = yield createImageBitmap(
                                  w,
                                  (B = y == null ? void 0 : y.x) != null
                                    ? B
                                    : 0,
                                  (W = y == null ? void 0 : y.y) != null
                                    ? W
                                    : 0,
                                  T,
                                  D,
                                )),
                                s.isStopped || !s.converter)
                              )
                                return;
                            }
                            if (!s.converter) return;
                            var q;
                            try {
                              q = yield s.converter.convertVideoToNV12(f);
                            } catch (t) {
                              yield s.handleCaptureError(t, $, e, i);
                              return;
                            }
                            s.consecutiveErrors = 0;
                            var U = o(
                              "WAWebVoipMediaEnums",
                            ).computeVideoOrientation(s.$2, s.$1);
                            if (s.$3 < 3) {
                              var V;
                              s.$3++;
                              var H =
                                (V = globalThis.screen) == null ||
                                (V = V.orientation) == null
                                  ? void 0
                                  : V.angle;
                              o("WALogger").LOG(
                                E ||
                                  (E = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " [orient] frame#",
                                    " screenAngle=",
                                    " sent=",
                                    " sensorOffset=",
                                    " isBackCamera=",
                                    " converter=",
                                    "x",
                                    "",
                                  ])),
                                $,
                                s.$3,
                                String(H),
                                U,
                                s.$2,
                                String(s.$1),
                                n,
                                a,
                              );
                            }
                            if (
                              !(yield s.ensureVideoBufferCapacity(
                                q.byteLength,
                                $,
                              ))
                            )
                              return;
                            if (s.videoBuffer != null) {
                              var G = s.videoBuffer;
                              (A.GROWABLE_HEAP_U8().set(q, G),
                                A[p](
                                  G,
                                  q.length,
                                  n,
                                  a,
                                  m,
                                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                    .NV12,
                                  U,
                                ));
                            } else
                              o("WALogger")
                                .ERROR(
                                  k ||
                                    (k =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " video buffer not initialized",
                                      ])),
                                  $,
                                )
                                .sendLogs(
                                  "voip: wasm: video buffer not initialized",
                                );
                            (o(
                              "WAWebVoipVideoRendererRegistry",
                            ).videoRendererRegistry.onVideoFrameWasmToJs(
                              o("WAWebVoipVideoRendererInterface")
                                .selfPreviewJid,
                              q.buffer,
                              n,
                              a,
                              U,
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
                            I ||
                              (I = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " video processing error: ",
                                "",
                              ])),
                            $,
                            t,
                          ),
                            !s.isStopped &&
                              s.mediaCaptureStream != null &&
                              s.converter != null &&
                              e(i));
                        } finally {
                          s.isCaptureInProgress = !1;
                        }
                      }
                    },
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })();
              w && w.readyState >= w.HAVE_CURRENT_DATA
                ? window.setTimeout(function () {
                    return s.$11(O);
                  }, 0)
                : w &&
                  w.addEventListener(
                    "loadeddata",
                    function () {
                      return s.$11(O);
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
        (a.$11 = function (t) {
          var e = this,
            r = document.visibilityState === "visible",
            a = function () {
              (G || (G = n("Promise"))).resolve(t(i)).catch(function (e) {
                o("WALogger").WARN(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
                          x ||
                            (x = babelHelpers.taggedTemplateLiteralLoose([
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
                          $ ||
                            ($ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:VideoCapture] switchBackToPrimary error: ",
                              "",
                            ])),
                          e,
                        );
                      })),
                a());
            };
            if (
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_anr_optimizations",
              )
            )
              try {
                u.setTimeout(c, 0);
              } catch (e) {
                window.setTimeout(c, 0);
              }
            else c();
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
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
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                      ])),
                  ),
                  yield this.switchToFallbackConverter())
                : !e &&
                  this.usingFallback &&
                  this.primaryConverter &&
                  (o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
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
              F || (F = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              r,
            ),
              (this.isStopped = !0),
              (this.lastCaptureTime = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps());
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
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up active converter",
                      ])),
                    r,
                  )),
                c != null &&
                  !d.has(c) &&
                  (yield c.cleanup(),
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
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
                  (yield me(this.videoBuffer),
                    o("WALogger").LOG(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " freed WASM video buffer",
                        ])),
                      r,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
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
          return t._malloc(e);
        })),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        pe.apply(this, arguments)
      );
    }
    ((l.getImageBitmapResizeOptionsForSourceCropRect = z),
      (l.getVideoSourceContentRect = ae),
      (l.probeVideoSourceContentRect = le),
      (l.getVideoElementSourceCropRect = se),
      (l.WAWebVoipVideoCaptureWithConverter = ue));
  },
  98,
);
