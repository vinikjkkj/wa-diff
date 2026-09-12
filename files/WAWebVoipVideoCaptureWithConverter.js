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
      j = 3,
      K = 15,
      Q = 30,
      X = 2,
      Y = 0.9,
      J = (function () {
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
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = 0),
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
          (a.$6 = function (n, r) {
            if (
              !(
                this.$4 != null ||
                this.$5 >=
                  o("WAWebVoipVideoCaptureSourceRect")
                    .MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS
              )
            ) {
              var t = o(
                "WAWebVoipVideoCaptureSourceRect",
              ).probeVideoSourceContentRect(n, this.$5);
              this.$5 = t.detectionAttempts;
              var a = this.$5,
                i = t.sourceContentRect;
              i != null &&
                ((this.$4 = i),
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
              function* (e) {
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
                  this.consecutiveErrors >= j && !this.isStopped)
                ) {
                  var i = yield this.attemptFallbackRecovery(r);
                  i && a(n);
                  return;
                }
                !this.isStopped &&
                  this.mediaCaptureStream != null &&
                  this.converter != null &&
                  a(n);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$7 = function (t) {
            var e = t.height,
              n = t.videoElement,
              r = t.width,
              o = this.$2;
            if (o != null && o.width === r && o.height === e) return o;
            this.$8();
            var a = n.ownerDocument.createElement("canvas");
            ((a.width = r), (a.height = e));
            var i = a.getContext("2d");
            return i == null
              ? null
              : ((i.imageSmoothingEnabled = !0),
                (this.$2 = a),
                (this.$3 = i),
                a);
          }),
          (a.$8 = function () {
            var e = this.$2;
            (e != null && ((e.width = 0), (e.height = 0)),
              (this.$2 = null),
              (this.$3 = null));
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
                          (z || (z = n("Promise")))
                            .resolve(a.cleanup())
                            .catch(r("WAWebNoop")),
                        !1)
                      : ((this.converter = a),
                        (this.primaryConverter = null),
                        (this.usingFallback = !0),
                        this.fallbackConverter != null &&
                          this.fallbackConverter !== a &&
                          (z || (z = n("Promise")))
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
                          (z || (z = n("Promise")))
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
                  n != null && (yield ne(n)));
                var a = yield ee(e);
                return this.isStopped
                  ? (yield ne(a), !1)
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
                  yield (z || (z = n("Promise"))).all(i));
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
                  this.$8(),
                  (this.$4 = null),
                  (this.$5 = 0),
                  o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
                  yield this.__initVideoCapture({ width: _, height: c }));
                var f = p.getVideoTracks()[0],
                  g =
                    f == null ||
                    f.getSettings == null ||
                    (a = f.getSettings()) == null
                      ? void 0
                      : a.facingMode,
                  h = r("nullthrows")(this.converter).getConverterName(),
                  T = "voip: [AV:startVideoCapture (" + h + ")]";
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " facingMode=",
                      "",
                    ])),
                  T,
                  g != null ? g : "unknown",
                );
                var D =
                    (i =
                      (l = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                      null
                        ? void 0
                        : l.document) != null
                      ? i
                      : null,
                  x = D != null ? D : document;
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element owner: ",
                      "",
                    ])),
                  T,
                  D != null ? "popout" : "main",
                );
                var $ = Z();
                if ($) {
                  var P = this.mediaCaptureStream;
                  P != null &&
                    ((P.videoElement.srcObject = null),
                    P.videoElement.remove());
                }
                this.mediaCaptureStream = {
                  mediaStream: p,
                  videoElement: x.createElement("video"),
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
                  var M = x.body;
                  if (M == null)
                    throw (
                      o("WALogger")
                        .ERROR(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " no document body to host capture video",
                            ])),
                          T,
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
                  (this.$6(N, T),
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video element ready",
                      ])),
                    T,
                  ),
                  !!(yield this.ensureVideoBufferCapacity(
                    t.getNV12FrameSize(this.width, this.height),
                    T,
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
                    O =
                      o("WAWebABProps").getABPropConfigValue(
                        "enable_web_voip_dynamic_fps_throttle",
                      ) === !0,
                    B = (function () {
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
                                  S ||
                                    (S =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        ": Video capture not ready, canceling frame capture",
                                      ])),
                                  T,
                                );
                                return;
                              }
                              if (A.readyState < A.HAVE_CURRENT_DATA) {
                                (o("WALogger").WARN(
                                  R ||
                                    (R =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " Video not ready yet, skipping frame capture",
                                      ])),
                                  T,
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
                              if (O) {
                                var l = o(
                                  "WAWebVoipEncodeTargetFpsState",
                                ).getEncodeTargetFps();
                                if (l > 0) {
                                  var s = Math.max(K, Math.min(Q, l + X)),
                                    c = (1e3 / s) * Y,
                                    p = self.performance.now(),
                                    _ = p - u.lastCaptureTime;
                                  if (_ < c) {
                                    e(i);
                                    return;
                                  }
                                  u.lastCaptureTime = p;
                                }
                              }
                              var f = A;
                              try {
                                var g, h;
                                u.$6(A, T);
                                var y = u.$4,
                                  C =
                                    y != null
                                      ? o(
                                          "WAWebVoipVideoCaptureSourceRect",
                                        ).getVideoElementSourceCropRect(A, y)
                                      : null,
                                  b =
                                    (g = y == null ? void 0 : y.width) != null
                                      ? g
                                      : A.videoWidth,
                                  v =
                                    (h = y == null ? void 0 : y.height) != null
                                      ? h
                                      : A.videoHeight,
                                  D = o(
                                    "WAWebVoipVideoCaptureSourceRect",
                                  ).closestEven(b),
                                  x = o(
                                    "WAWebVoipVideoCaptureSourceRect",
                                  ).closestEven(v),
                                  $ =
                                    C != null ||
                                    D !== A.videoWidth ||
                                    x !== A.videoHeight;
                                if (D !== n || x !== a) {
                                  if (
                                    (o("WALogger").LOG(
                                      L ||
                                        (L =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "Video dims ",
                                              "x",
                                              " mismatch ",
                                              "x",
                                              ", skip",
                                            ],
                                          )),
                                      D,
                                      x,
                                      n,
                                      a,
                                    ),
                                    yield u.__initVideoCapture({
                                      width: D,
                                      height: x,
                                    }),
                                    !(yield u.ensureVideoBufferCapacity(
                                      t.getNV12FrameSize(u.width, u.height),
                                      T,
                                    )))
                                  )
                                    return;
                                  ((u.consecutiveErrors = 0), e(i));
                                  return;
                                }
                                if (C != null) {
                                  var P = u.$7({
                                      height: x,
                                      videoElement: A,
                                      width: D,
                                    }),
                                    N = u.$3;
                                  if (P != null && N != null)
                                    (N.drawImage(
                                      A,
                                      C.x,
                                      C.y,
                                      C.width,
                                      C.height,
                                      0,
                                      0,
                                      D,
                                      x,
                                    ),
                                      (f = P));
                                  else {
                                    var M = o(
                                        "WAWebVoipVideoCaptureSourceRect",
                                      ).getImageBitmapResizeOptionsForSourceCropRect(
                                        C,
                                        D,
                                        x,
                                      ),
                                      w = yield createImageBitmap(
                                        A,
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
                                  if (u.isStopped || !u.converter) return;
                                } else if ($) {
                                  var B, W;
                                  if (
                                    ((f = yield createImageBitmap(
                                      A,
                                      (B = y == null ? void 0 : y.x) != null
                                        ? B
                                        : 0,
                                      (W = y == null ? void 0 : y.y) != null
                                        ? W
                                        : 0,
                                      D,
                                      x,
                                    )),
                                    u.isStopped || !u.converter)
                                  )
                                    return;
                                }
                                if (!u.converter) return;
                                var q;
                                try {
                                  q = yield u.converter.convertVideoToNV12(f);
                                } catch (t) {
                                  yield u.handleCaptureError({
                                    error: t,
                                    frameInterval: i,
                                    logPrefix: T,
                                    requestCallback: e,
                                  });
                                  return;
                                }
                                u.consecutiveErrors = 0;
                                var U = o("WAWebVoipMediaEnums").Orientation
                                  .Normal;
                                if (
                                  (u.$1 < 3 &&
                                    (u.$1++,
                                    o("WALogger").LOG(
                                      E ||
                                        (E =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "",
                                              " [orient] frame#",
                                              " sent=",
                                              " reason=display-upright converter=",
                                              "x",
                                              "",
                                            ],
                                          )),
                                      T,
                                      u.$1,
                                      U,
                                      n,
                                      a,
                                    )),
                                  !(yield u.ensureVideoBufferCapacity(
                                    q.byteLength,
                                    T,
                                  )))
                                )
                                  return;
                                if (u.videoBuffer != null) {
                                  var V = u.videoBuffer;
                                  (F.GROWABLE_HEAP_U8().set(q, V),
                                    F[m](
                                      V,
                                      q.length,
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
                                      k ||
                                        (k =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "",
                                              " video buffer not initialized",
                                            ],
                                          )),
                                      T,
                                    )
                                    .sendLogs(
                                      "voip: wasm: video buffer not initialized",
                                    );
                                var H = o(
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
                                  H,
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
                                T,
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
                        return u.$9(B);
                      }, 0)
                    : A &&
                      A.addEventListener(
                        "loadeddata",
                        function () {
                          return u.$9(B);
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
          (a.$9 = function (t) {
            var e = this,
              r = document.visibilityState === "visible",
              a = function () {
                (z || (z = n("Promise"))).resolve(t(i)).catch(function (e) {
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
                    (yield ne(this.videoBuffer),
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
    function Z() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_video_capture_dom_attach",
        ) !== !1
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return t._malloc(e);
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        re.apply(this, arguments)
      );
    }
    ((l.getImageBitmapResizeOptionsForSourceCropRect = (G = o(
      "WAWebVoipVideoCaptureSourceRect",
    )).getImageBitmapResizeOptionsForSourceCropRect),
      (l.getVideoElementSourceCropRect = G.getVideoElementSourceCropRect),
      (l.getVideoSourceContentRect = G.getVideoSourceContentRect),
      (l.probeVideoSourceContentRect = G.probeVideoSourceContentRect),
      (l.WAWebVoipVideoCaptureWithConverter = J));
  },
  98,
);
