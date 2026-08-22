__d(
  "WAWebVoipVideoCaptureOffThread",
  [
    "$InternalEnum",
    "WALogger",
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
      j;
    function K(e) {
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
    function Q(e) {
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
    var X = 2;
    function Y(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: X,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    var J = "orientation",
      Z = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      ee = (function () {
        function t() {
          ((this.thread = null),
            (this.track = null),
            (this.$1 = null),
            (this.$2 = null),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = null),
            (this.$7 = !1),
            (this.$8 = !0),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = null),
            (this.$13 = null),
            (this.$14 = !1),
            (this.$15 = !1),
            (this.$16 = 0),
            (this.$17 = -1),
            (this.$18 = -1),
            (this.$19 = 0));
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
                  x = I && !D,
                  $ = (function (e) {
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
                      " safariScreenShareWorkerMSTP=",
                      " rVFC=",
                      " MSTP=",
                      "",
                    ])),
                  E,
                  String(I),
                  String(l),
                  String(x),
                  String(D),
                  String(P),
                  String(!x && "MediaStreamTrackProcessor" in window),
                ),
                  (this.track = R.getVideoTracks()[0]));
                var N =
                    (n = this.track) == null ||
                    n.getSettings == null ||
                    (n = n.getSettings()) == null
                      ? void 0
                      : n.facingMode,
                  M = N === "environment";
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got video track, facingMode=",
                      "",
                    ])),
                  E,
                  N != null ? N : "unknown",
                );
                var w = null;
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
                  var A = this.track;
                  if (A == null) {
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
                  ((w = {
                    readable: yield new MediaStreamTrackProcessor({ track: A })
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
                  var F = this.track;
                  if (F == null) {
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
                  ((w = { track: F }), (this.track = null));
                }
                var O = yield r("WAWebVoipJsWorkerThread").create();
                ((this.thread = O),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Created worker thread",
                      ])),
                    E,
                  ),
                  (this.$4 = L),
                  (this.$5 = b),
                  (this.$3 = 0),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " trackNative=",
                        "x",
                        " isBackCamera=",
                        "",
                      ])),
                    E,
                    this.$4,
                    this.$5,
                    String(M),
                  ));
                var B = o("WAWebVoipMediaEnums").computeVideoOrientation(0, M);
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial device orientation: ",
                      "",
                    ])),
                  E,
                  B,
                ),
                  O.worker.postMessage(
                    {
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "startVideoCapture",
                      params: k,
                      captureObject: w,
                      onVideoDataFnType: S,
                      useWebCodecsEncoder: I,
                      videoElementCapture: x,
                      enableWebCodecsEncoderOutputWatchdog: l,
                      initialOrientationValue: B,
                      isScreenShare: T,
                    },
                    w != null ? Object.values(w) : [],
                  ),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Sent startVideoCapture message to worker thread",
                      ])),
                    E,
                  ));
                var W = function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    l,
                    s = o("WAWebVoipMediaEnums").computeVideoOrientation(
                      a.$3,
                      M,
                    ),
                    u = globalThis.screen,
                    c = u != null ? u[J] : null,
                    d = c == null ? void 0 : c.angle,
                    m = (e = a.$6) == null ? void 0 : e.videoHeight,
                    p = (t = a.$6) == null ? void 0 : t.videoWidth,
                    _ = {
                      capturePath: $,
                      isBackCamera: M,
                      isScreenShare: T,
                      maxTouchPoints:
                        (n =
                          (r = globalThis.navigator) == null
                            ? void 0
                            : r.maxTouchPoints) != null
                          ? n
                          : 0,
                      requestedHeight: a.$5,
                      requestedWidth: a.$4,
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
                    String(M),
                    $,
                  ),
                    O.worker.postMessage({
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "updateDeviceOrientation",
                      diagnostics: _,
                      orientationValue: s,
                    }));
                };
                ((this.$2 = W),
                  window.addEventListener("orientationchange", W));
                try {
                  var q = globalThis.screen,
                    U = q != null ? q[J] : null;
                  U == null || U.addEventListener("change", W);
                } catch (e) {}
                if ((W(), this.$1 != null && this.$1(), I)) {
                  this.$1 = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).subscribeToEncodeParamsChanges(function (e) {
                    O.worker.postMessage({
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "updateWebCodecsEncodeParams",
                      params: e,
                    });
                  });
                  var V = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).getAllWebCodecsEncodeParams();
                  for (var H of V) {
                    var G = H[0],
                      z = H[1];
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
                      G,
                      z.targetWidth,
                      z.targetHeight,
                      z.targetBitrateBps,
                      z.targetFps,
                    ),
                      O.worker.postMessage({
                        type: "jsWorkerCmd",
                        jsWorkerCmd: "updateWebCodecsEncodeParams",
                        params: z,
                      }));
                  }
                }
                x && this.$20(R, O, P);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$20 = function (t, n, r) {
            var e,
              a,
              i,
              l = this,
              s = "voip: [AV:videoElementCapture]";
            ((this.$7 = !1),
              (this.$8 = !0),
              (this.$14 = !1),
              (this.$15 = !1),
              (this.$17 = -1),
              (this.$18 = -1),
              this.$6 != null &&
                ((this.$6.srcObject = null),
                this.$6.remove(),
                (this.$6 = null)));
            var u =
                (e =
                  (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : a.document) != null
                  ? e
                  : null,
              c = u != null ? u : document,
              d = c.createElement("video");
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              s,
              u != null ? "popout" : "main",
            ),
              (d.srcObject = t),
              (d.autoplay = !0),
              (d.muted = !0),
              (d.playsInline = !0),
              d.setAttribute("aria-hidden", "true"),
              (d.style.cssText =
                "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"));
            var m = (i = c.body) != null ? i : document.body;
            (m == null
              ? o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " no document body to host capture video; first-frame may stall",
                      ])),
                    s,
                  )
                  .sendLogs("voip-offthread-capture-no-body")
              : m.appendChild(d),
              (this.$6 = d),
              d.addEventListener(
                "loadedmetadata",
                function () {
                  ((l.$3 = o("WAWebVoipMediaEnums").detectSensorOffset({
                    trackHeight: l.$5,
                    trackWidth: l.$4,
                    videoElHeight: d.videoHeight,
                    videoElWidth: d.videoWidth,
                  })),
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
                      l.$3,
                      l.$4,
                      l.$5,
                      d.videoWidth,
                      d.videoHeight,
                    ),
                    l.$2 != null && l.$2());
                },
                { once: !0 },
              ),
              d.addEventListener("resize", function () {
                l.$2 != null && l.$2();
              }),
              this.$9 != null && this.$9(),
              (this.$9 = o(
                "WAWebVoipVideoFrameConsumedSignal",
              ).subscribeToVideoFrameConsumed(function () {
                l.$8 = !0;
              })));
            var p = 33,
              _ = ++this.$16,
              f = function (t) {
                if (
                  !(l.$7 || t !== l.$16) &&
                  (l.$21(d, n), !(l.$7 || t !== l.$16))
                ) {
                  var e = document.visibilityState === "visible",
                    a = o(
                      "WAWebVoipPopoutWindowState",
                    ).getIsPopoutWindowActiveAndVisible(),
                    i = e || a,
                    s = u != null ? a : e;
                  if (r && s)
                    d.requestVideoFrameCallback(function (e, n) {
                      var r = n.presentationTime;
                      l.$17 = typeof r == "number" ? r : -1;
                      var o = n.captureTime;
                      ((l.$18 = typeof o == "number" ? o : -1), f(t));
                    });
                  else if (i) {
                    var c;
                    ((l.$17 = -1), (l.$18 = -1));
                    var m =
                      a &&
                      (c = o("WAWebVoipPopoutWindowState").getPopoutWindow()) !=
                        null
                        ? c
                        : window;
                    m.requestAnimationFrame(function () {
                      return f(t);
                    });
                  } else
                    ((l.$17 = -1),
                      (l.$18 = -1),
                      (l.$13 = window.setTimeout(function () {
                        return f(t);
                      }, p)));
                }
              },
              g = function () {
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element playing, rVFC=",
                      "",
                    ])),
                  s,
                  String(r),
                ),
                  f(_));
              };
            ((this.$11 = function () {
              var e = document.visibilityState === "visible";
              (o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " visibility changed: ",
                    "",
                  ])),
                s,
                e ? "visible" : "hidden",
              ),
                (l.$17 = -1),
                (l.$18 = -1),
                l.$13 != null && (window.clearTimeout(l.$13), (l.$13 = null)));
              var t = ++l.$16;
              l.$7 || f(t);
            }),
              document.addEventListener("visibilitychange", this.$11),
              (this.$12 = function (e) {
                (o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " popout visibility changed: ",
                      " active=",
                      " hasWindow=",
                      "",
                    ])),
                  s,
                  e.visibilityState,
                  String(e.isCallActiveInPopoutWindow),
                  String(e.hasPopoutWindow),
                ),
                  (l.$17 = -1),
                  (l.$18 = -1),
                  l.$13 != null &&
                    (window.clearTimeout(l.$13), (l.$13 = null)));
                var t = ++l.$16;
                l.$7 || f(t);
              }),
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.on(
                "popoutWindowVisibilityChanged",
                this.$12,
              ),
              d.play().then(g, function (e) {
                (o("WALogger").ERROR(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element play failed, retrying: ",
                      "",
                    ])),
                  s,
                  e,
                ),
                  (l.$10 = window.setTimeout(function () {
                    ((l.$10 = null),
                      !l.$7 &&
                        d.play().then(g, function (e) {
                          o("WALogger").ERROR(
                            I ||
                              (I = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " play retry failed, no frames: ",
                                "",
                              ])),
                            s,
                            e,
                          );
                        }));
                  }, 500)));
              }));
          }),
          (a.$21 = function (t, n) {
            if (
              this.$8 &&
              !(
                t.readyState < t.HAVE_CURRENT_DATA ||
                t.videoWidth === 0 ||
                t.videoHeight === 0
              )
            )
              try {
                var e = window.performance;
                try {
                  var a,
                    i = t.ownerDocument.defaultView;
                  e =
                    (a = i == null ? void 0 : i.performance) != null
                      ? a
                      : window.performance;
                } catch (e) {
                  this.$14 ||
                    (o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:capture-skew] owner-window performance unavailable, using main window performance: ",
                          "",
                        ])),
                      e,
                    ),
                    (this.$14 = !0));
                }
                var l = e.now(),
                  s = e.timeOrigin,
                  u = typeof s == "number" && s > 0,
                  c = u ? s : Date.now() - l;
                !u &&
                  !this.$15 &&
                  (o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] performance.timeOrigin unavailable, using Date.now fallback",
                      ])),
                  ),
                  (this.$15 = !0));
                var d = l,
                  m = "construct";
                this.$18 > 0
                  ? ((d = this.$18), (m = "capture"))
                  : this.$17 > 0 && ((d = this.$17), (m = "presentation"));
                var p = c + d,
                  _ = r("WAWebVoipVideoFrameCtor")();
                if (_ == null) return;
                var f = new _(t, { timestamp: Math.round(p * 1e3) });
                if ((this.$19++, this.$19 % 150 === 0)) {
                  var g =
                      this.$17 > 0 ? (l - this.$17).toFixed(1) + "ms" : "n/a",
                    h = this.$18 > 0 ? (l - this.$18).toFixed(1) + "ms" : "n/a";
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] video frame#",
                        " presentToConstruct=",
                        " captureToConstruct=",
                        " tsSource=",
                        " tsEpochMs=",
                        " nowMs=",
                        "",
                      ])),
                    this.$19,
                    g,
                    h,
                    m,
                    p.toFixed(2),
                    l.toFixed(2),
                  );
                }
                ((this.$8 = !1),
                  n.worker.postMessage(
                    {
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "deliverVideoFrame",
                      frame: f,
                    },
                    [f],
                  ));
              } catch (e) {
                (o("WALogger").ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:videoElementCapture] frame capture failed, stopping loop: ",
                      "",
                    ])),
                  e,
                ),
                  (this.$7 = !0));
              }
          }),
          (a.stopVideoCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = "voip: stopVideoCapture (offthread)";
              if (
                (o("WALogger").LOG(
                  P || (P = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  e,
                ),
                (this.$7 = !0),
                this.$6 != null &&
                  ((this.$6.srcObject = null),
                  this.$6.remove(),
                  (this.$6 = null)),
                this.$9 != null && (this.$9(), (this.$9 = null)),
                this.$10 != null &&
                  (window.clearTimeout(this.$10), (this.$10 = null)),
                this.$13 != null &&
                  (window.clearTimeout(this.$13), (this.$13 = null)),
                this.$11 != null &&
                  (document.removeEventListener("visibilitychange", this.$11),
                  (this.$11 = null)),
                this.$12 != null &&
                  (o(
                    "WAWebVoipPopoutWindowState",
                  ).WAWebVoipUiPopoutWindowEventEmitter.off(
                    "popoutWindowVisibilityChanged",
                    this.$12,
                  ),
                  (this.$12 = null)),
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
      te = !1,
      ne = 0,
      re = 1,
      oe = {
        capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
        isBackCamera: !1,
        isScreenShare: !1,
        maxTouchPoints: 0,
        requestedHeight: ne,
        requestedWidth: ne,
        screenAngle: null,
        screenType: null,
        sensorOffset: 0,
        videoHeight: null,
        videoWidth: null,
      },
      ae = 0,
      ie = null;
    function le(e, t) {
      (e !== re &&
        K(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          re,
          e,
        ),
        (re = e),
        t != null && (oe = t));
    }
    var se = new Map();
    function ue() {
      return te;
    }
    function ce(e) {
      te = e;
    }
    function de() {
      return re;
    }
    function me(e) {
      re = e;
    }
    function pe(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u = oe;
      if (
        !(
          u.capturePath === o("WAWebVoipMediaEnums").VideoCapturePath.Unknown ||
          u.isScreenShare ||
          u.requestedHeight === ne ||
          u.requestedWidth === ne
        )
      ) {
        var c = [
            t.frameRotation,
            t.orientation,
            t.source,
            re,
            u.isBackCamera,
            u.maxTouchPoints,
            u.screenAngle,
            u.screenType,
            u.sensorOffset,
          ].join("|"),
          d = Date.now(),
          m = c !== ie,
          p = ie != null;
        if (
          o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
            elapsedMsSinceLastLog: d - ae,
            hasLoggedSnapshot: p,
            orientationStateChanged: m,
          })
        ) {
          ((ie = c), (ae = d));
          var _ = u.capturePath,
            f = t.source,
            g =
              "voip: [orient_snapshot_v1] path=" +
              _ +
              " frameRot=" +
              String((n = t.frameRotation) != null ? n : "na") +
              " fallback=" +
              re +
              " chosen=" +
              t.orientation +
              " source=" +
              f +
              " screenAngle=" +
              String((r = u.screenAngle) != null ? r : "na") +
              " screenType=" +
              ((a = u.screenType) != null ? a : "na") +
              " sensorOffset=" +
              u.sensorOffset +
              " back=" +
              (u.isBackCamera ? 1 : 0) +
              " touchPoints=" +
              u.maxTouchPoints +
              " screenShare=" +
              (u.isScreenShare ? 1 : 0) +
              " requested=" +
              u.requestedWidth +
              "x" +
              u.requestedHeight +
              " video=" +
              String((i = u.videoWidth) != null ? i : "na") +
              "x" +
              String((l = u.videoHeight) != null ? l : "na") +
              " format=" +
              ((s = e.format) != null ? s : "na") +
              " coded=" +
              e.codedWidth +
              "x" +
              e.codedHeight +
              " display=" +
              e.displayWidth +
              "x" +
              e.displayHeight;
          m
            ? Y(M || (M = babelHelpers.taggedTemplateLiteralLoose(["", ""])), g)
            : K(
                w || (w = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                g,
              );
        }
      }
    }
    function _e(e) {
      var t = e.rotation,
        n = o("WAWebVoipMediaEnums").resolveVideoFrameOrientation(t, re);
      return (pe(e, n), n.orientation);
    }
    var fe = null;
    function ge(e) {
      fe = e;
    }
    function he(e) {
      var t = fe;
      if (t == null) {
        e.close();
        return;
      }
      t(e)
        .catch(function (e) {
          Q(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
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
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                    var a = _e(e);
                    (f < 3 &&
                      (f++,
                      K(
                        B ||
                          (B = babelHelpers.taggedTemplateLiteralLoose([
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
                    Q(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
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
            (K(F || (F = babelHelpers.taggedTemplateLiteralLoose(["", ""])), u),
              (te = !1),
              a != null &&
                ((re = a),
                K(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
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
              K(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " got MediaStreamTrackProcessor readable",
                  ])),
                u,
              );
              var h = g.getReader();
              for (
                K(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " starting capture loop",
                    ])),
                  u,
                );
                !te;
              ) {
                var y = yield h.read(),
                  C = y.done,
                  b = y.value;
                try {
                  if (C || !b) {
                    te = !0;
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
            Q(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
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
              Q(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exitJsWorkerThread error: ",
                    "",
                  ])),
                u,
                e,
              );
            }
            K(
              G ||
                (G = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " exit capture worker thread",
                ])),
              u,
            );
          }
        })),
        Ce.apply(this, arguments)
      );
    }
    function be() {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
          (K(z || (z = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e),
            (te = !0),
            (re = 1),
            (oe = {
              capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
              isBackCamera: !1,
              isScreenShare: !1,
              maxTouchPoints: 0,
              requestedHeight: ne,
              requestedWidth: ne,
              screenAngle: null,
              screenType: null,
              sensorOffset: 0,
              videoHeight: null,
              videoWidth: null,
            }),
            se.clear(),
            (ae = 0),
            (ie = null),
            K(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " completed successfully",
                ])),
              e,
            ));
        })),
        ve.apply(this, arguments)
      );
    }
    ((l.CaptureInitState = Z),
      (l.WAWebVoipVideoCaptureOffThread = ee),
      (l.updateDeviceOrientationInWorker = le),
      (l.encodedFrameOrientations = se),
      (l.getStopCapture = ue),
      (l.updateStopCapture = ce),
      (l.getCurrentWorkerOrientation = de),
      (l.updateCurrentWorkerOrientation = me),
      (l.getFrameOrientation = _e),
      (l.registerCaptureAndEncodeFn = ge),
      (l.deliverVideoFrameToWorker = he),
      (l.startVideoCaptureInWorker = ye),
      (l.stopVideoCaptureInWorker = be));
  },
  98,
);
