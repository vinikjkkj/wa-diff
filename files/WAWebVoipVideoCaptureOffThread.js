__d(
  "WAWebVoipVideoCaptureOffThread",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebUA",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipVideoFrameConsumedSignal",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipWebCodecsEncoderState",
    "asyncToGeneratorRuntime",
    "err",
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
      K;
    function Q(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: 3,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    function X(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: 1,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    var Y = 2;
    function J(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: Y,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    var Z = "orientation",
      ee = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      te = (function () {
        function t() {
          ((this.thread = null),
            (this.track = null),
            (this.$1 = null),
            (this.$2 = null),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = !1),
            (this.$8 = null),
            (this.$9 = !1),
            (this.$10 = !0),
            (this.$11 = null),
            (this.$12 = null),
            (this.$13 = null),
            (this.$14 = null),
            (this.$15 = null),
            (this.$16 = !1),
            (this.$17 = !1),
            (this.$18 = 0),
            (this.$19 = -1),
            (this.$20 = -1),
            (this.$21 = 0));
        }
        var a = t.prototype;
        return (
          (a.startVideoCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  a = this,
                  i = t.enableWebCodecsEncoderOutputWatchdog,
                  l = i === void 0 ? !1 : i,
                  b = t.height,
                  v = t.maxFps,
                  S = t.onVideoDataFnType,
                  R = t.stream,
                  L = t.width,
                  E = "voip: wasm: [AV:startVideoCapture (offthread)]";
                o("WALogger").LOG(
                  e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  E,
                );
                var k = { width: L, height: b, maxFps: v },
                  I = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled(),
                  T = S === "onDesktopCaptureDataFromJs",
                  D = I && o("WAWebUA").UA.isSafari && T,
                  x = I && !D;
                this.$7 =
                  x &&
                  !T &&
                  o("WAWebABProps").getABPropConfigValue(
                    "web_voip_video_presentation_orientation_fix",
                  );
                var $ = (function (e) {
                    return ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                      e.useVideoElementCapture === !0
                      ? o("WAWebVoipMediaEnums").VideoCapturePath
                          .VideoElementWebCodecs
                      : ((typeof e == "object" && e !== null) ||
                            typeof e == "function") &&
                          e.useVideoElementCapture === !1 &&
                          e.useWebCodecsEncoder === !0
                        ? o("WAWebVoipMediaEnums").VideoCapturePath
                            .WorkerWebCodecs
                        : o("WAWebVoipMediaEnums").VideoCapturePath.WorkerRaw;
                  })({ useVideoElementCapture: x, useWebCodecsEncoder: I }),
                  P = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " capture path: webcodecs=",
                      " outputWatchdog=",
                      " videoElement=",
                      " presentationOrientationFix=",
                      " safariScreenShareWorkerMSTP=",
                      " rVFC=",
                      " MSTP=",
                      "",
                    ])),
                  E,
                  String(I),
                  String(l),
                  String(x),
                  String(this.$7),
                  String(D),
                  String(P),
                  String(!x && "MediaStreamTrackProcessor" in window),
                ),
                  (this.track = R.getVideoTracks()[0]));
                var N =
                    (n = this.track) == null || n.getSettings == null
                      ? void 0
                      : n.getSettings(),
                  M = N == null ? void 0 : N.height,
                  w = N == null ? void 0 : N.width,
                  A = N == null ? void 0 : N.facingMode,
                  F = A === "environment";
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got video track, facingMode=",
                      "",
                    ])),
                  E,
                  A != null ? A : "unknown",
                );
                var O = null;
                if (x)
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " using video-element capture (WebCodecs)",
                      ])),
                    E,
                  );
                else if (!D && "MediaStreamTrackProcessor" in window) {
                  var B = this.track;
                  if (B == null) {
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null when creating MediaStreamTrackProcessor",
                          ])),
                        E,
                      )
                      .sendLogs("voip: off-thread: track null for processor");
                    return;
                  }
                  ((O = {
                    readable: yield new MediaStreamTrackProcessor({ track: B })
                      .readable,
                  }),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " (Chrome) got MediaStreamTrackProcessor readable",
                        ])),
                      E,
                    ));
                } else {
                  var W = this.track;
                  if (W == null) {
                    o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null for Safari capture path",
                          ])),
                        E,
                      )
                      .sendLogs("voip: off-thread: track null for safari");
                    return;
                  }
                  ((O = { track: W }), (this.track = null));
                }
                var q = yield r("WAWebVoipJsWorkerThread").create();
                ((this.thread = q),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Created worker thread",
                      ])),
                    E,
                  ),
                  (this.$5 = L),
                  (this.$6 = b),
                  (this.$3 = 0),
                  (this.$4 = !1),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " requested=",
                        "x",
                        " actualTrack=",
                        "x",
                        " isBackCamera=",
                        "",
                      ])),
                    E,
                    this.$5,
                    this.$6,
                    String(w != null ? w : "na"),
                    String(M != null ? M : "na"),
                    String(F),
                  ));
                var U = o("WAWebVoipMediaEnums").computeVideoOrientation(0, F);
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial device orientation: ",
                      "",
                    ])),
                  E,
                  U,
                ),
                  q.worker.postMessage(
                    {
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "startVideoCapture",
                      params: k,
                      captureObject: O,
                      onVideoDataFnType: S,
                      useWebCodecsEncoder: I,
                      videoElementCapture: x,
                      enableWebCodecsEncoderOutputWatchdog: l,
                      normalizeVideoElementPresentationFrames: this.$7,
                      initialOrientationValue: U,
                      isScreenShare: T,
                    },
                    O != null ? Object.values(O) : [],
                  ),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Sent startVideoCapture message to worker thread",
                      ])),
                    E,
                  ));
                var V = function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    l,
                    s = o("WAWebVoipMediaEnums").computeVideoOrientation(
                      a.$3,
                      F,
                    ),
                    u = globalThis.screen,
                    c = u != null ? u[Z] : null,
                    d = c == null ? void 0 : c.angle,
                    m = (e = a.$8) == null ? void 0 : e.videoHeight,
                    p = (t = a.$8) == null ? void 0 : t.videoWidth,
                    _ = {
                      actualTrackHeight: typeof M == "number" ? M : null,
                      actualTrackWidth: typeof w == "number" ? w : null,
                      capturePath: $,
                      isBackCamera: F,
                      isScreenShare: T,
                      maxTouchPoints:
                        (n =
                          (r = globalThis.navigator) == null
                            ? void 0
                            : r.maxTouchPoints) != null
                          ? n
                          : 0,
                      requestedHeight: a.$6,
                      requestedWidth: a.$5,
                      screenAngle: typeof d == "number" ? d : null,
                      screenType:
                        (i = c == null ? void 0 : c.type) != null ? i : null,
                      sensorOffset: a.$3,
                      videoHeight: typeof m == "number" && m > 0 ? m : null,
                      videoWidth: typeof p == "number" && p > 0 ? p : null,
                    };
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " [orient] screenAngle=",
                        " screenType=",
                        " sent=",
                        " sensorOffset=",
                        " isBackCamera=",
                        " capturePath=",
                        "",
                      ])),
                    E,
                    String(d),
                    (l = _.screenType) != null ? l : "unknown",
                    s,
                    a.$3,
                    String(F),
                    $,
                  ),
                    q.worker.postMessage({
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "updateDeviceOrientation",
                      diagnostics: _,
                      orientationValue: s,
                    }));
                };
                ((this.$2 = V),
                  window.addEventListener("orientationchange", V));
                try {
                  var H = globalThis.screen,
                    G = H != null ? H[Z] : null;
                  G == null || G.addEventListener("change", V);
                } catch (e) {}
                if ((V(), this.$1 != null && this.$1(), I)) {
                  this.$1 = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).subscribeToEncodeParamsChanges(function (e) {
                    q.worker.postMessage({
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "updateWebCodecsEncodeParams",
                      params: e,
                    });
                  });
                  var z = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).getAllWebCodecsEncodeParams();
                  for (var j of z) {
                    var K = j[0],
                      Q = j[1];
                    (o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " seeding encode params for stream ",
                          ": ",
                          "x",
                          " ",
                          "bps ",
                          "fps",
                        ])),
                      E,
                      K,
                      Q.targetWidth,
                      Q.targetHeight,
                      Q.targetBitrateBps,
                      Q.targetFps,
                    ),
                      q.worker.postMessage({
                        type: "jsWorkerCmd",
                        jsWorkerCmd: "updateWebCodecsEncodeParams",
                        params: Q,
                      }));
                  }
                }
                x && this.$22(R, q, P, F);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$22 = function (t, n, r, a) {
            var e,
              i,
              l,
              s = this,
              u = "voip: [AV:videoElementCapture]";
            ((this.$9 = !1),
              (this.$10 = !0),
              (this.$16 = !1),
              (this.$17 = !1),
              (this.$19 = -1),
              (this.$20 = -1),
              (this.$21 = 0),
              this.$8 != null &&
                ((this.$8.srcObject = null),
                this.$8.remove(),
                (this.$8 = null)));
            var c =
                (e =
                  (i = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : i.document) != null
                  ? e
                  : null,
              d = c != null ? c : document,
              m = d.createElement("video");
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              u,
              c != null ? "popout" : "main",
            ),
              (m.srcObject = t),
              (m.autoplay = !0),
              (m.muted = !0),
              (m.playsInline = !0),
              m.setAttribute("aria-hidden", "true"),
              (m.style.cssText =
                "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"));
            var p = (l = d.body) != null ? l : document.body;
            (p == null
              ? o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " no document body to host capture video; first-frame may stall",
                      ])),
                    u,
                  )
                  .sendLogs("voip-offthread-capture-no-body")
              : p.appendChild(m),
              (this.$8 = m),
              m.addEventListener(
                "loadedmetadata",
                function () {
                  ((s.$3 = o("WAWebVoipMediaEnums").detectSensorOffset({
                    trackHeight: s.$6,
                    trackWidth: s.$5,
                    videoElHeight: m.videoHeight,
                    videoElWidth: m.videoWidth,
                  })),
                    (s.$4 = !0),
                    o("WALogger").LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [orient] sensorOffset cached: ",
                          " track=",
                          "x",
                          " videoEl=",
                          "x",
                          "",
                        ])),
                      s.$3,
                      s.$5,
                      s.$6,
                      m.videoWidth,
                      m.videoHeight,
                    ),
                    s.$2 != null && s.$2());
                },
                { once: !0 },
              ),
              m.addEventListener("resize", function () {
                s.$2 != null && s.$2();
              }),
              this.$11 != null && this.$11(),
              (this.$11 = o(
                "WAWebVoipVideoFrameConsumedSignal",
              ).subscribeToVideoFrameConsumed(function () {
                s.$10 = !0;
              })));
            var _ = 33,
              f = ++this.$18,
              g = function (t) {
                if (
                  !(s.$9 || t !== s.$18) &&
                  (s.$23(m, n, a), !(s.$9 || t !== s.$18))
                ) {
                  var e = document.visibilityState === "visible",
                    i = o(
                      "WAWebVoipPopoutWindowState",
                    ).getIsPopoutWindowActiveAndVisible(),
                    l = e || i,
                    u = c != null ? i : e;
                  if (r && u)
                    m.requestVideoFrameCallback(function (e, n) {
                      var r = n.presentationTime;
                      s.$19 = typeof r == "number" ? r : -1;
                      var o = n.captureTime;
                      ((s.$20 = typeof o == "number" ? o : -1), g(t));
                    });
                  else if (l) {
                    var d;
                    ((s.$19 = -1), (s.$20 = -1));
                    var p =
                      i &&
                      (d = o("WAWebVoipPopoutWindowState").getPopoutWindow()) !=
                        null
                        ? d
                        : window;
                    p.requestAnimationFrame(function () {
                      return g(t);
                    });
                  } else
                    ((s.$19 = -1),
                      (s.$20 = -1),
                      (s.$15 = window.setTimeout(function () {
                        return g(t);
                      }, _)));
                }
              },
              h = function () {
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element playing, rVFC=",
                      "",
                    ])),
                  u,
                  String(r),
                ),
                  g(f));
              };
            ((this.$13 = function () {
              var e = document.visibilityState === "visible";
              (o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " visibility changed: ",
                    "",
                  ])),
                u,
                e ? "visible" : "hidden",
              ),
                (s.$19 = -1),
                (s.$20 = -1),
                s.$15 != null && (window.clearTimeout(s.$15), (s.$15 = null)));
              var t = ++s.$18;
              s.$9 || g(t);
            }),
              document.addEventListener("visibilitychange", this.$13),
              (this.$14 = function (e) {
                (o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " popout visibility changed: ",
                      " active=",
                      " hasWindow=",
                      "",
                    ])),
                  u,
                  e.visibilityState,
                  String(e.isCallActiveInPopoutWindow),
                  String(e.hasPopoutWindow),
                ),
                  (s.$19 = -1),
                  (s.$20 = -1),
                  s.$15 != null &&
                    (window.clearTimeout(s.$15), (s.$15 = null)));
                var t = ++s.$18;
                s.$9 || g(t);
              }),
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.on(
                "popoutWindowVisibilityChanged",
                this.$14,
              ),
              m.play().then(h, function (e) {
                (o("WALogger").ERROR(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element play failed, retrying: ",
                      "",
                    ])),
                  u,
                  e,
                ),
                  (s.$12 = window.setTimeout(function () {
                    ((s.$12 = null),
                      !s.$9 &&
                        m.play().then(h, function (e) {
                          o("WALogger").ERROR(
                            I ||
                              (I = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " play retry failed, no frames: ",
                                "",
                              ])),
                            u,
                            e,
                          );
                        }));
                  }, 500)));
              }));
          }),
          (a.$23 = function (t, n, a) {
            if (
              this.$10 &&
              !(
                t.readyState < t.HAVE_CURRENT_DATA ||
                t.videoWidth === 0 ||
                t.videoHeight === 0
              )
            )
              try {
                var e,
                  i = window.performance;
                try {
                  var l,
                    s = t.ownerDocument.defaultView;
                  i =
                    (l = s == null ? void 0 : s.performance) != null
                      ? l
                      : window.performance;
                } catch (e) {
                  this.$16 ||
                    (o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:capture-skew] owner-window performance unavailable, using main window performance: ",
                          "",
                        ])),
                      e,
                    ),
                    (this.$16 = !0));
                }
                var u = i.now(),
                  c = i.timeOrigin,
                  d = typeof c == "number" && c > 0,
                  m = d ? c : Date.now() - u;
                !d &&
                  !this.$17 &&
                  (o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] performance.timeOrigin unavailable, using Date.now fallback",
                      ])),
                  ),
                  (this.$17 = !0));
                var p = u,
                  _ = "construct";
                this.$20 > 0
                  ? ((p = this.$20), (_ = "capture"))
                  : this.$19 > 0 && ((p = this.$19), (_ = "presentation"));
                var f = m + p,
                  g = r("WAWebVoipVideoFrameCtor")();
                if (g == null) return;
                var h = new g(t, { timestamp: Math.round(f * 1e3) }),
                  y = globalThis.screen,
                  C = y != null ? y[Z] : null,
                  b = C == null ? void 0 : C.angle,
                  v = this.$7
                    ? {
                        fallbackOrientation: o(
                          "WAWebVoipMediaEnums",
                        ).computeVideoOrientationForAngle(
                          this.$3,
                          a,
                          typeof b == "number" ? b : null,
                        ),
                        frameRotation: fe(h),
                        screenAngle: typeof b == "number" ? b : null,
                        screenType:
                          (e = C == null ? void 0 : C.type) != null ? e : null,
                        sensorOffsetInitialized: this.$4,
                      }
                    : void 0;
                if ((this.$21++, v != null && this.$21 <= 3)) {
                  var S, R, L;
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [orient_pretransfer_v1] frame=",
                        "x",
                        " frameRot=",
                        " fallback=",
                        " screenAngle=",
                        " screenType=",
                        " sensorReady=",
                        " normalize=",
                        "",
                      ])),
                    h.displayWidth,
                    h.displayHeight,
                    String((S = v.frameRotation) != null ? S : "na"),
                    v.fallbackOrientation,
                    String((R = v.screenAngle) != null ? R : "na"),
                    (L = v.screenType) != null ? L : "na",
                    v.sensorOffsetInitialized ? 1 : 0,
                    this.$7 ? 1 : 0,
                  );
                }
                if (this.$21 % 150 === 0) {
                  var E =
                      this.$19 > 0 ? (u - this.$19).toFixed(1) + "ms" : "n/a",
                    k = this.$20 > 0 ? (u - this.$20).toFixed(1) + "ms" : "n/a";
                  o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] video frame#",
                        " presentToConstruct=",
                        " captureToConstruct=",
                        " tsSource=",
                        " tsEpochMs=",
                        " nowMs=",
                        "",
                      ])),
                    this.$21,
                    E,
                    k,
                    _,
                    f.toFixed(2),
                    u.toFixed(2),
                  );
                }
                ((this.$10 = !1),
                  n.worker.postMessage(
                    {
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "deliverVideoFrame",
                      frame: h,
                      frameMetadata: v,
                    },
                    [h],
                  ));
              } catch (e) {
                (o("WALogger").ERROR(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:videoElementCapture] frame capture failed, stopping loop: ",
                      "",
                    ])),
                  e,
                ),
                  (this.$9 = !0));
              }
          }),
          (a.stopVideoCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = "voip: stopVideoCapture (offthread)";
              if (
                (o("WALogger").LOG(
                  N || (N = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  e,
                ),
                (this.$9 = !0),
                (this.$4 = !1),
                this.$8 != null &&
                  ((this.$8.srcObject = null),
                  this.$8.remove(),
                  (this.$8 = null)),
                this.$11 != null && (this.$11(), (this.$11 = null)),
                this.$12 != null &&
                  (window.clearTimeout(this.$12), (this.$12 = null)),
                this.$15 != null &&
                  (window.clearTimeout(this.$15), (this.$15 = null)),
                this.$13 != null &&
                  (document.removeEventListener("visibilitychange", this.$13),
                  (this.$13 = null)),
                this.$14 != null &&
                  (o(
                    "WAWebVoipPopoutWindowState",
                  ).WAWebVoipUiPopoutWindowEventEmitter.off(
                    "popoutWindowVisibilityChanged",
                    this.$14,
                  ),
                  (this.$14 = null)),
                this.$2 != null)
              ) {
                window.removeEventListener("orientationchange", this.$2);
                try {
                  var t;
                  (t = screen) == null ||
                    (t = t.orientation) == null ||
                    t.removeEventListener("change", this.$2);
                } catch (e) {}
                this.$2 = null;
              }
              this.$1 != null && (this.$1(), (this.$1 = null));
              try {
                if (this.thread != null) {
                  var n = this.thread;
                  (n.worker.postMessage({
                    type: "jsWorkerCmd",
                    jsWorkerCmd: "stopVideoCapture",
                  }),
                    yield n.joinJsWorkerThread(),
                    (this.thread = null));
                }
              } finally {
                this.track != null && (this.track.stop(), (this.track = null));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      ne = !1,
      re = 0,
      oe = 1,
      ae = {
        actualTrackHeight: null,
        actualTrackWidth: null,
        capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
        isBackCamera: !1,
        isScreenShare: !1,
        maxTouchPoints: 0,
        requestedHeight: re,
        requestedWidth: re,
        screenAngle: null,
        screenType: null,
        sensorOffset: 0,
        videoHeight: null,
        videoWidth: null,
      },
      ie = 0,
      le = null;
    function se(e, t) {
      (e !== oe &&
        Q(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          oe,
          e,
        ),
        (oe = e),
        t != null && (ae = t));
    }
    var ue = new Map();
    function ce() {
      return ne;
    }
    function de(e) {
      ne = e;
    }
    function me() {
      return oe;
    }
    function pe(e) {
      oe = e;
    }
    function _e(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = ae,
        _ =
          (a = r == null ? void 0 : r.screenAngle) != null ? a : p.screenAngle,
        f = (i = r == null ? void 0 : r.screenType) != null ? i : p.screenType;
      if (
        !(
          p.capturePath === o("WAWebVoipMediaEnums").VideoCapturePath.Unknown ||
          p.isScreenShare ||
          p.requestedHeight === re ||
          p.requestedWidth === re
        )
      ) {
        var g = [
            t.frameRotation,
            t.orientation,
            t.source,
            n,
            p.isBackCamera,
            p.maxTouchPoints,
            _,
            f,
            p.sensorOffset,
          ].join("|"),
          h = Date.now(),
          y = g !== le,
          C = le != null;
        if (
          o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
            elapsedMsSinceLastLog: h - ie,
            hasLoggedSnapshot: C,
            orientationStateChanged: y,
          })
        ) {
          ((le = g), (ie = h));
          var b = p.capturePath,
            v = t.source,
            S =
              "voip: [orient_snapshot_v1] path=" +
              b +
              " frameRot=" +
              String((l = t.frameRotation) != null ? l : "na") +
              " fallback=" +
              n +
              " chosen=" +
              t.orientation +
              " source=" +
              v +
              " screenAngle=" +
              String(_ != null ? _ : "na") +
              " screenType=" +
              (f != null ? f : "na") +
              " sensorOffset=" +
              p.sensorOffset +
              " back=" +
              (p.isBackCamera ? 1 : 0) +
              " touchPoints=" +
              p.maxTouchPoints +
              " screenShare=" +
              (p.isScreenShare ? 1 : 0) +
              " requested=" +
              p.requestedWidth +
              "x" +
              p.requestedHeight +
              " actualTrack=" +
              String((s = p.actualTrackWidth) != null ? s : "na") +
              "x" +
              String((u = p.actualTrackHeight) != null ? u : "na") +
              " video=" +
              String((c = p.videoWidth) != null ? c : "na") +
              "x" +
              String((d = p.videoHeight) != null ? d : "na") +
              " format=" +
              ((m = e.format) != null ? m : "na") +
              " coded=" +
              e.codedWidth +
              "x" +
              e.codedHeight +
              " display=" +
              e.displayWidth +
              "x" +
              e.displayHeight;
          y
            ? J(w || (w = babelHelpers.taggedTemplateLiteralLoose(["", ""])), S)
            : Q(
                A || (A = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                S,
              );
        }
      }
    }
    function fe(e) {
      var t = e.rotation;
      return typeof t == "number" ? t : null;
    }
    function ge(e, t) {
      var n,
        r = t != null ? t.frameRotation : fe(e),
        a = (n = t == null ? void 0 : t.fallbackOrientation) != null ? n : oe,
        i = o("WAWebVoipMediaEnums").resolveVideoFrameOrientation(r, a);
      return (_e(e, i, a, t), i.orientation);
    }
    var he = null;
    function ye(e) {
      he = e;
    }
    function Ce(e, t) {
      var n = he;
      if (n == null) {
        e.close();
        return;
      }
      n(e, t)
        .catch(function (e) {
          X(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [webcodec-encode] deliverVideoFrame error: ",
                "",
              ])),
            e,
          );
        })
        .finally(function () {
          try {
            e.close();
          } catch (e) {}
          globalThis.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoFrameConsumed",
          });
        });
    }
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.captureObject,
            a = e.initialOrientationValue,
            i = e.onVideoDataFnType,
            l = e.params,
            s = e.voipWasm,
            u = "voip: wasm: [AV:startVideoCaptureInWorker]",
            c = i === "onDesktopCaptureDataFromJs";
          try {
            var d = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  try {
                    var t = o(
                      "WAWebVoipMediaEnums",
                    ).formatEnumFromVideoFrameFormat(e.format);
                    if (
                      t !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12
                    ) {
                      var n;
                      throw r("err")(
                        "Unsupported video frame format " +
                          ((n = e.format) != null ? n : "null"),
                      );
                    }
                    var a = ge(e);
                    (f < 3 &&
                      (f++,
                      Q(
                        W ||
                          (W = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " [orient] frame#",
                            " orientation=",
                            " frameSize=",
                            "x",
                            "",
                          ])),
                        u,
                        f,
                        a,
                        l.width,
                        l.height,
                      )),
                      yield e.copyTo(_),
                      s.GROWABLE_HEAP_U8().set(_, p),
                      s[i](p, m, l.width, l.height, l.maxFps, t, a),
                      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                        {
                          userJid: o("WAWebVoipVideoRendererInterface")
                            .selfPreviewJid,
                          frameBuffer: _.buffer,
                          width: l.width,
                          height: l.height,
                          format: t,
                          orientation: a,
                          timestamp: 0,
                          isKeyFrame: !1,
                          isScreenShare: c,
                        },
                      ));
                  } catch (e) {
                    X(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video processing error: ",
                          "",
                        ])),
                      u,
                      e,
                    );
                  }
                },
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
            (Q(O || (O = babelHelpers.taggedTemplateLiteralLoose(["", ""])), u),
              (ne = !1),
              a != null &&
                ((oe = a),
                Q(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial orientation: ",
                      "",
                    ])),
                  u,
                  a,
                )));
            var m = Math.floor(l.width * l.height * 1.5),
              p = s._malloc(m),
              _ = new Uint8Array(m),
              f = 0;
            try {
              var g =
                t.readable ||
                (yield new MediaStreamTrackProcessor({ track: t.track })
                  .readable);
              Q(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " got MediaStreamTrackProcessor readable",
                  ])),
                u,
              );
              var h = g.getReader();
              for (
                Q(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " starting capture loop",
                    ])),
                  u,
                );
                !ne;
              ) {
                var y = yield h.read(),
                  C = y.done,
                  b = y.value;
                try {
                  if (C || !b) {
                    ne = !0;
                    break;
                  }
                  yield d(b);
                } finally {
                  b && b.close();
                }
              }
            } finally {
              s._free(p);
            }
          } catch (e) {
            X(
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video capture error: ",
                  "",
                ])),
              u,
              e,
            );
          } finally {
            try {
              s.exitJsWorkerThread();
            } catch (e) {
              X(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exitJsWorkerThread error: ",
                    "",
                  ])),
                u,
                e,
              );
            }
            Q(
              z ||
                (z = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " exit capture worker thread",
                ])),
              u,
            );
          }
        })),
        ve.apply(this, arguments)
      );
    }
    function Se() {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
          (Q(j || (j = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e),
            (ne = !0),
            (oe = 1),
            (ae = {
              actualTrackHeight: null,
              actualTrackWidth: null,
              capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
              isBackCamera: !1,
              isScreenShare: !1,
              maxTouchPoints: 0,
              requestedHeight: re,
              requestedWidth: re,
              screenAngle: null,
              screenType: null,
              sensorOffset: 0,
              videoHeight: null,
              videoWidth: null,
            }),
            ue.clear(),
            (ie = 0),
            (le = null),
            Q(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " completed successfully",
                ])),
              e,
            ));
        })),
        Re.apply(this, arguments)
      );
    }
    ((l.CaptureInitState = ee),
      (l.WAWebVoipVideoCaptureOffThread = te),
      (l.updateDeviceOrientationInWorker = se),
      (l.encodedFrameOrientations = ue),
      (l.getStopCapture = ce),
      (l.updateStopCapture = de),
      (l.getCurrentWorkerOrientation = me),
      (l.updateCurrentWorkerOrientation = pe),
      (l.getVideoFrameRotation = fe),
      (l.getFrameOrientation = ge),
      (l.registerCaptureAndEncodeFn = ye),
      (l.deliverVideoFrameToWorker = Ce),
      (l.startVideoCaptureInWorker = be),
      (l.stopVideoCaptureInWorker = Se));
  },
  98,
);
