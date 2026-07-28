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
    "WAWebVoipScreenShareStreamKey",
    "WAWebVoipVideoCaptureSourceRect",
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
      G,
      z,
      j,
      K = 3,
      Q = 15,
      X = 30,
      Y = 2,
      J = 0.9,
      Z = (function () {
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
            if (
              !(
                this.$6 != null ||
                this.$7 >=
                  o("WAWebVoipVideoCaptureSourceRect")
                    .MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS
              )
            ) {
              var t = o(
                "WAWebVoipVideoCaptureSourceRect",
              ).probeVideoSourceContentRect(n, this.$7);
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
                  this.consecutiveErrors >= K && !this.isStopped)
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
          (a.$9 = function (t) {
            var e = t.height,
              n = t.videoElement,
              r = t.width,
              o = this.$4;
            if (o != null && o.width === r && o.height === e) return o;
            this.$10();
            var a = n.ownerDocument.createElement("canvas");
            ((a.width = r), (a.height = e));
            var i = a.getContext("2d");
            return i == null
              ? null
              : ((i.imageSmoothingEnabled = !0),
                (this.$4 = a),
                (this.$5 = i),
                a);
          }),
          (a.$10 = function () {
            var e = this.$4;
            (e != null && ((e.width = 0), (e.height = 0)),
              (this.$4 = null),
              (this.$5 = null));
          }),
          (a.attemptFallbackRecovery = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
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
                    this.fallbackConverter != null &&
                    this.fallbackConverter !== t
                      ? this.fallbackConverter
                      : yield this.createFallbackConverter(
                          this.width,
                          this.height,
                        );
                  if (a != null)
                    return this.isStopped
                      ? (a !== this.fallbackConverter &&
                          (j || (j = n("Promise")))
                            .resolve(a.cleanup())
                            .catch(r("WAWebNoop")),
                        !1)
                      : ((this.converter = a),
                        (this.primaryConverter = null),
                        (this.usingFallback = !0),
                        this.fallbackConverter != null &&
                          this.fallbackConverter !== a &&
                          (j || (j = n("Promise")))
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
                          (j || (j = n("Promise")))
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
              },
            );
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
              (((t = this.timeoutFrameWindow) != null
                ? t
                : window
              ).clearTimeout(this.timeoutFrameId),
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
                  n != null && (yield re(n)));
                var a = yield te(e);
                return this.isStopped
                  ? (yield re(a), !1)
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
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.height,
                  a = e.width;
                ((this.width = o("WAWebVoipVideoCaptureSourceRect").closestEven(
                  a,
                )),
                  (this.height = o(
                    "WAWebVoipVideoCaptureSourceRect",
                  ).closestEven(t)));
                var i = [];
                (this.converter && i.push(this.converter.cleanup()),
                  this.fallbackConverter &&
                    i.push(this.fallbackConverter.cleanup()),
                  yield (j || (j = n("Promise"))).all(i));
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startVideoCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var a,
                  i,
                  l,
                  s = this,
                  u,
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
                  (this.$2 = 0),
                  (this.$3 = 0),
                  this.$10(),
                  (this.$6 = null),
                  (this.$7 = 0),
                  o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
                  yield this.__initVideoCapture({ width: _, height: c }));
                var f = p.getVideoTracks()[0],
                  g =
                    f == null ||
                    f.getSettings == null ||
                    (a = f.getSettings()) == null
                      ? void 0
                      : a.facingMode;
                this.$1 = g === "environment";
                var h = _,
                  D = c,
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
                  g != null ? g : "unknown",
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
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element owner: ",
                      "",
                    ])),
                  $,
                  P != null ? "popout" : "main",
                );
                var M = ee();
                if (M) {
                  var w = this.mediaCaptureStream;
                  w != null &&
                    ((w.videoElement.srcObject = null),
                    w.videoElement.remove());
                }
                this.mediaCaptureStream = {
                  mediaStream: p,
                  videoElement: N.createElement("video"),
                };
                var A = this.mediaCaptureStream.videoElement;
                if (
                  ((A.srcObject = p),
                  (A.autoplay = !0),
                  (A.muted = !0),
                  (A.playsInline = !0),
                  M)
                ) {
                  (A.setAttribute("aria-hidden", "true"),
                    (A.style.cssText =
                      "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"));
                  var F = N.body;
                  if (F == null)
                    throw (
                      o("WALogger")
                        .ERROR(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " no document body to host capture video",
                            ])),
                          $,
                        )
                        .sendLogs("voip-withconverter-capture-no-body"),
                      r("err")("No document body to host capture video")
                    );
                  F.appendChild(A);
                }
                (A.addEventListener(
                  "loadedmetadata",
                  function () {
                    ((s.$2 = o("WAWebVoipMediaEnums").detectSensorOffset({
                      trackHeight: D,
                      trackWidth: h,
                      videoElHeight: A.videoHeight,
                      videoElWidth: A.videoWidth,
                    })),
                      o("WALogger").LOG(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
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
                        h,
                        D,
                        A.videoWidth,
                        A.videoHeight,
                      ));
                  },
                  { once: !0 },
                ),
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallVideoCaptureWithConverterPlayAttempt(M));
                try {
                  var O;
                  (yield (O = this.mediaCaptureStream) == null
                    ? void 0
                    : O.videoElement.play(),
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallVideoCaptureWithConverterPlaySuccess(M));
                } catch (e) {
                  throw (
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallVideoCaptureWithConverterPlayFailure(M),
                    e
                  );
                }
                if (
                  (this.$8(A, $),
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
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
                  var B =
                      (u = this.mediaCaptureStream) == null
                        ? void 0
                        : u.videoElement,
                    W =
                      yield o("WAWebBackendApi").frontendSendAndReceive(
                        "initializeVoipWasm",
                      ),
                    q =
                      o("WAWebABProps").getABPropConfigValue(
                        "enable_web_voip_dynamic_fps_throttle",
                      ) === !0,
                    U = (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          if (!s.isCaptureInProgress) {
                            s.isCaptureInProgress = !0;
                            var n = s.width,
                              a = s.height,
                              i = 1e3 / d;
                            try {
                              if (s.isStopped) return;
                              if (!s.mediaCaptureStream || !B || !s.converter) {
                                o("WALogger").ERROR(
                                  R ||
                                    (R =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        ": Video capture not ready, canceling frame capture",
                                      ])),
                                  $,
                                );
                                return;
                              }
                              if (B.readyState < B.HAVE_CURRENT_DATA) {
                                (o("WALogger").WARN(
                                  L ||
                                    (L =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " Video not ready yet, skipping frame capture",
                                      ])),
                                  $,
                                ),
                                  e(i));
                                return;
                              }
                              if (
                                B.readyState < 2 ||
                                B.videoWidth === 0 ||
                                B.videoHeight === 0
                              )
                                throw r("err")(
                                  "Video element not ready for capture",
                                );
                              if (q) {
                                var l = o(
                                  "WAWebVoipEncodeTargetFpsState",
                                ).getEncodeTargetFps();
                                if (l > 0) {
                                  var u = Math.max(Q, Math.min(X, l + Y)),
                                    c = (1e3 / u) * J,
                                    p = self.performance.now(),
                                    _ = p - s.lastCaptureTime;
                                  if (_ < c) {
                                    e(i);
                                    return;
                                  }
                                  s.lastCaptureTime = p;
                                }
                              }
                              var f = B;
                              try {
                                var g, h;
                                s.$8(B, $);
                                var y = s.$6,
                                  C =
                                    y != null
                                      ? o(
                                          "WAWebVoipVideoCaptureSourceRect",
                                        ).getVideoElementSourceCropRect(B, y)
                                      : null,
                                  b =
                                    (g = y == null ? void 0 : y.width) != null
                                      ? g
                                      : B.videoWidth,
                                  v =
                                    (h = y == null ? void 0 : y.height) != null
                                      ? h
                                      : B.videoHeight,
                                  S = o(
                                    "WAWebVoipVideoCaptureSourceRect",
                                  ).closestEven(b),
                                  D = o(
                                    "WAWebVoipVideoCaptureSourceRect",
                                  ).closestEven(v),
                                  x =
                                    C != null ||
                                    S !== B.videoWidth ||
                                    D !== B.videoHeight;
                                if (S !== n || D !== a) {
                                  if (
                                    (o("WALogger").LOG(
                                      E ||
                                        (E =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "Video dims ",
                                              "x",
                                              " mismatch ",
                                              "x",
                                              ", skip",
                                            ],
                                          )),
                                      S,
                                      D,
                                      n,
                                      a,
                                    ),
                                    yield s.__initVideoCapture({
                                      width: S,
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
                                  var P = s.$9({
                                      height: D,
                                      videoElement: B,
                                      width: S,
                                    }),
                                    N = s.$5;
                                  if (P != null && N != null)
                                    (N.drawImage(
                                      B,
                                      C.x,
                                      C.y,
                                      C.width,
                                      C.height,
                                      0,
                                      0,
                                      S,
                                      D,
                                    ),
                                      (f = P));
                                  else {
                                    var M = o(
                                        "WAWebVoipVideoCaptureSourceRect",
                                      ).getImageBitmapResizeOptionsForSourceCropRect(
                                        C,
                                        S,
                                        D,
                                      ),
                                      w = yield createImageBitmap(
                                        B,
                                        C.x,
                                        C.y,
                                        C.width,
                                        C.height,
                                      );
                                    if (M == null) f = w;
                                    else
                                      try {
                                        f = yield createImageBitmap(w, M);
                                      } finally {
                                        w.close();
                                      }
                                  }
                                  if (s.isStopped || !s.converter) return;
                                } else if (x) {
                                  var A, F;
                                  if (
                                    ((f = yield createImageBitmap(
                                      B,
                                      (A = y == null ? void 0 : y.x) != null
                                        ? A
                                        : 0,
                                      (F = y == null ? void 0 : y.y) != null
                                        ? F
                                        : 0,
                                      S,
                                      D,
                                    )),
                                    s.isStopped || !s.converter)
                                  )
                                    return;
                                }
                                if (!s.converter) return;
                                var O;
                                try {
                                  O = yield s.converter.convertVideoToNV12(f);
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
                                    k ||
                                      (k =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "",
                                            " [orient] frame#",
                                            " screenAngle=",
                                            " sent=",
                                            " sensorOffset=",
                                            " isBackCamera=",
                                            " converter=",
                                            "x",
                                            "",
                                          ],
                                        )),
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
                                    O.byteLength,
                                    $,
                                  ))
                                )
                                  return;
                                if (s.videoBuffer != null) {
                                  var G = s.videoBuffer;
                                  (W.GROWABLE_HEAP_U8().set(O, G),
                                    W[m](
                                      G,
                                      O.length,
                                      n,
                                      a,
                                      d,
                                      o("WAWebVoipMediaEnums")
                                        .WAWebVoipVideoFormat.NV12,
                                      U,
                                    ));
                                } else
                                  o("WALogger")
                                    .ERROR(
                                      I ||
                                        (I =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "",
                                              " video buffer not initialized",
                                            ],
                                          )),
                                      $,
                                    )
                                    .sendLogs(
                                      "voip: wasm: video buffer not initialized",
                                    );
                                var z =
                                  m === "onDesktopCaptureDataFromJs" &&
                                  o(
                                    "WAWebVoipDualStreamScreenShareState",
                                  ).isSelfDualStreamScreenShareActive()
                                    ? o(
                                        "WAWebVoipScreenShareStreamKey",
                                      ).getScreenShareStreamKey(
                                        o("WAWebVoipVideoRendererInterface")
                                          .selfPreviewJid,
                                      )
                                    : o("WAWebVoipVideoRendererInterface")
                                        .selfPreviewJid;
                                (o(
                                  "WAWebVoipVideoRendererRegistry",
                                ).videoRendererRegistry.onVideoFrameWasmToJs(
                                  z,
                                  O.buffer,
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
                                T ||
                                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  B && B.readyState >= B.HAVE_CURRENT_DATA
                    ? window.setTimeout(function () {
                        return s.$11(U);
                      }, 0)
                    : B &&
                      B.addEventListener(
                        "loadeddata",
                        function () {
                          return s.$11(U);
                        },
                        { once: !0 },
                      );
                }
              },
            );
            function a(t) {
              return e.apply(this, arguments);
            }
            return a;
          })()),
          (a.$11 = function (t) {
            var e = this,
              r = document.visibilityState === "visible",
              a = function () {
                (j || (j = n("Promise"))).resolve(t(i)).catch(function (e) {
                  o("WALogger").WARN(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
                      (e.animationFrameId = t.requestAnimationFrame(
                        function () {
                          ((e.animationFrameId = null),
                            (e.animationFrameWindow = null),
                            (e.timeoutFrameWindow = t),
                            (e.timeoutFrameId = t.setTimeout(function () {
                              ((e.timeoutFrameId = null),
                                (e.timeoutFrameWindow = null),
                                a());
                            }, n)));
                        },
                      )))
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
                (t =
                  (i = e.converter) == null ? void 0 : i.getConverterName()) !=
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
                            $ ||
                              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                            P ||
                              (P = babelHelpers.taggedTemplateLiteralLoose([
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
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
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
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
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
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                        ])),
                    ),
                    yield this.switchToFallbackConverter())
                  : !e &&
                    this.usingFallback &&
                    this.primaryConverter &&
                    (o("WALogger").LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
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
                O || (O = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
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
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
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
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
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
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " cleaned up active converter",
                        ])),
                      r,
                    )),
                  c != null &&
                    !d.has(c) &&
                    (yield c.cleanup(),
                    o("WALogger").LOG(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
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
                    (yield re(this.videoBuffer),
                      o("WALogger").LOG(
                        H ||
                          (H = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " freed WASM video buffer",
                          ])),
                        r,
                      ));
                  } catch (e) {
                    o("WALogger").WARN(
                      G ||
                        (G = babelHelpers.taggedTemplateLiteralLoose([
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
    function ee() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_video_capture_dom_attach",
        ) !== !1
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return t._malloc(e);
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        oe.apply(this, arguments)
      );
    }
    ((l.getImageBitmapResizeOptionsForSourceCropRect = (z = o(
      "WAWebVoipVideoCaptureSourceRect",
    )).getImageBitmapResizeOptionsForSourceCropRect),
      (l.getVideoElementSourceCropRect = z.getVideoElementSourceCropRect),
      (l.getVideoSourceContentRect = z.getVideoSourceContentRect),
      (l.probeVideoSourceContentRect = z.probeVideoSourceContentRect),
      (l.WAWebVoipVideoCaptureWithConverter = Z));
  },
  98,
);
