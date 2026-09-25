__d(
  "WAWebVoipVideoCaptureOffThread",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebUA",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
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
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee;
    function te(e) {
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
    function ne(e) {
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
    var re = 2;
    function oe(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: re,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    var ae = "orientation";
    function ie(e, t, n) {
      if (
        o("WAWebVoipPthreadHardening").isVoipWorkerLifecycleHardeningEnabled()
      ) {
        e.worker.postMessage(
          babelHelpers.extends({ type: "cmd", cmd: "jsWorkerCmd" }, t),
          n,
        );
        return;
      }
      e.worker.postMessage(babelHelpers.extends({ type: "jsWorkerCmd" }, t), n);
    }
    var le = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      se = (function () {
        function t() {
          ((this.thread = null),
            (this.track = null),
            (this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = 0),
            (this.$5 = !1),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = !1),
            (this.$9 = null),
            (this.$10 = !1),
            (this.$11 = !0),
            (this.$12 = null),
            (this.$13 = null),
            (this.$14 = null),
            (this.$15 = null),
            (this.$16 = null),
            (this.$17 = !1),
            (this.$18 = !1),
            (this.$19 = 0),
            (this.$20 = -1),
            (this.$21 = -1),
            (this.$22 = 0));
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
                  v = t.height,
                  S = t.maxFps,
                  R = t.onVideoDataFnType,
                  L = t.stream,
                  E = t.width,
                  k = "voip: wasm: [AV:startVideoCapture (offthread)]";
                o("WALogger").LOG(
                  e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  k,
                );
                var I = this.$1;
                I != null &&
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " waiting for a stop in flight",
                      ])),
                    k,
                  ),
                  yield I);
                var T = { width: E, height: v, maxFps: S },
                  D = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled(),
                  x = R === "onDesktopCaptureDataFromJs",
                  $ = D && o("WAWebUA").UA.isSafari && x,
                  P = D && !$;
                this.$8 = P && !x;
                var N = (function (e) {
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
                  })({ useVideoElementCapture: P, useWebCodecsEncoder: D }),
                  M = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  k,
                  String(D),
                  String(l),
                  String(P),
                  String(this.$8),
                  String($),
                  String(M),
                  String(!P && "MediaStreamTrackProcessor" in window),
                ),
                  (this.track = L.getVideoTracks()[0]));
                var w =
                    (n = this.track) == null || n.getSettings == null
                      ? void 0
                      : n.getSettings(),
                  A = w == null ? void 0 : w.height,
                  F = w == null ? void 0 : w.width,
                  O = w == null ? void 0 : w.facingMode,
                  B = O === "environment";
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got video track, facingMode=",
                      "",
                    ])),
                  k,
                  O != null ? O : "unknown",
                );
                var W = null;
                if (P)
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " using video-element capture (WebCodecs)",
                      ])),
                    k,
                  );
                else if (!$ && "MediaStreamTrackProcessor" in window) {
                  var q = this.track;
                  if (q == null) {
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null when creating MediaStreamTrackProcessor",
                          ])),
                        k,
                      )
                      .sendLogs("voip: off-thread: track null for processor");
                    return;
                  }
                  ((W = {
                    readable: yield new MediaStreamTrackProcessor({ track: q })
                      .readable,
                  }),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " (Chrome) got MediaStreamTrackProcessor readable",
                        ])),
                      k,
                    ));
                } else {
                  var U = this.track;
                  if (U == null) {
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null for Safari capture path",
                          ])),
                        k,
                      )
                      .sendLogs("voip: off-thread: track null for safari");
                    return;
                  }
                  ((W = { track: U }), (this.track = null));
                }
                var V = yield r("WAWebVoipJsWorkerThread").create();
                ((this.thread = V),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Created worker thread",
                      ])),
                    k,
                  ),
                  (this.$6 = E),
                  (this.$7 = v),
                  (this.$4 = 0),
                  (this.$5 = !1),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " requested=",
                        "x",
                        " actualTrack=",
                        "x",
                        " isBackCamera=",
                        "",
                      ])),
                    k,
                    this.$6,
                    this.$7,
                    String(F != null ? F : "na"),
                    String(A != null ? A : "na"),
                    String(B),
                  ));
                var H = o("WAWebVoipMediaEnums").computeVideoOrientation(0, B);
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial device orientation: ",
                      "",
                    ])),
                  k,
                  H,
                ),
                  ie(
                    V,
                    {
                      jsWorkerCmd: "startVideoCapture",
                      params: T,
                      captureObject: W,
                      onVideoDataFnType: R,
                      useWebCodecsEncoder: D,
                      videoElementCapture: P,
                      enableWebCodecsEncoderOutputWatchdog: l,
                      normalizeVideoElementPresentationFrames: this.$8,
                      initialOrientationValue: H,
                      isScreenShare: x,
                      interruptCaptureOnStop: o(
                        "WAWebVoipPthreadHardening",
                      ).isVoipWorkerLifecycleHardeningEnabled(),
                    },
                    W != null ? Object.values(W) : [],
                  ),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Sent startVideoCapture message to worker thread",
                      ])),
                    k,
                  ));
                var G = function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    l,
                    s = o("WAWebVoipMediaEnums").computeVideoOrientation(
                      a.$4,
                      B,
                    ),
                    u = globalThis.screen,
                    c = u != null ? u[ae] : null,
                    d = c == null ? void 0 : c.angle,
                    m = (e = a.$9) == null ? void 0 : e.videoHeight,
                    p = (t = a.$9) == null ? void 0 : t.videoWidth,
                    _ = {
                      actualTrackHeight: typeof A == "number" ? A : null,
                      actualTrackWidth: typeof F == "number" ? F : null,
                      capturePath: N,
                      isBackCamera: B,
                      isScreenShare: x,
                      maxTouchPoints:
                        (n =
                          (r = globalThis.navigator) == null
                            ? void 0
                            : r.maxTouchPoints) != null
                          ? n
                          : 0,
                      requestedHeight: a.$7,
                      requestedWidth: a.$6,
                      screenAngle: typeof d == "number" ? d : null,
                      screenType:
                        (i = c == null ? void 0 : c.type) != null ? i : null,
                      sensorOffset: a.$4,
                      videoHeight: typeof m == "number" && m > 0 ? m : null,
                      videoWidth: typeof p == "number" && p > 0 ? p : null,
                    };
                  (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " [orient] screenAngle=",
                        " screenType=",
                        " sent=",
                        " sensorOffset=",
                        " isBackCamera=",
                        " capturePath=",
                        "",
                      ])),
                    k,
                    String(d),
                    (l = _.screenType) != null ? l : "unknown",
                    s,
                    a.$4,
                    String(B),
                    N,
                  ),
                    ie(V, {
                      jsWorkerCmd: "updateDeviceOrientation",
                      diagnostics: _,
                      orientationValue: s,
                    }));
                };
                ((this.$3 = G),
                  window.addEventListener("orientationchange", G));
                try {
                  var z = globalThis.screen,
                    j = z != null ? z[ae] : null;
                  j == null || j.addEventListener("change", G);
                } catch (e) {}
                if ((G(), this.$2 != null && this.$2(), D)) {
                  this.$2 = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).subscribeToEncodeParamsChanges(function (e) {
                    ie(V, {
                      jsWorkerCmd: "updateWebCodecsEncodeParams",
                      params: e,
                    });
                  });
                  var K = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).getAllWebCodecsEncodeParams();
                  for (var Q of K) {
                    var X = Q[0],
                      Y = Q[1];
                    (o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " seeding encode params for stream ",
                          ": ",
                          "x",
                          " ",
                          "bps ",
                          "fps",
                        ])),
                      k,
                      X,
                      Y.targetWidth,
                      Y.targetHeight,
                      Y.targetBitrateBps,
                      Y.targetFps,
                    ),
                      ie(V, {
                        jsWorkerCmd: "updateWebCodecsEncodeParams",
                        params: Y,
                      }));
                  }
                }
                P && this.$23(L, V, M, B);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$23 = function (t, n, r, a) {
            var e,
              i,
              l,
              s = this,
              u = "voip: [AV:videoElementCapture]";
            ((this.$10 = !1),
              (this.$11 = !0),
              (this.$17 = !1),
              (this.$18 = !1),
              (this.$20 = -1),
              (this.$21 = -1),
              (this.$22 = 0),
              this.$9 != null &&
                ((this.$9.srcObject = null),
                this.$9.remove(),
                (this.$9 = null)));
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
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " no document body to host capture video; first-frame may stall",
                      ])),
                    u,
                  )
                  .sendLogs("voip-offthread-capture-no-body")
              : p.appendChild(m),
              (this.$9 = m),
              m.addEventListener(
                "loadedmetadata",
                function () {
                  ((s.$4 = o("WAWebVoipMediaEnums").detectSensorOffset({
                    trackHeight: s.$7,
                    trackWidth: s.$6,
                    videoElHeight: m.videoHeight,
                    videoElWidth: m.videoWidth,
                  })),
                    (s.$5 = !0),
                    o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [orient] sensorOffset cached: ",
                          " track=",
                          "x",
                          " videoEl=",
                          "x",
                          "",
                        ])),
                      s.$4,
                      s.$6,
                      s.$7,
                      m.videoWidth,
                      m.videoHeight,
                    ),
                    s.$3 != null && s.$3());
                },
                { once: !0 },
              ),
              m.addEventListener("resize", function () {
                s.$3 != null && s.$3();
              }),
              this.$12 != null && this.$12(),
              (this.$12 = o(
                "WAWebVoipVideoFrameConsumedSignal",
              ).subscribeToVideoFrameConsumed(function () {
                s.$11 = !0;
              })));
            var _ = 33,
              f = ++this.$19,
              g = function (t) {
                if (
                  !(s.$10 || t !== s.$19) &&
                  (s.$24(m, n, a), !(s.$10 || t !== s.$19))
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
                      s.$20 = typeof r == "number" ? r : -1;
                      var o = n.captureTime;
                      ((s.$21 = typeof o == "number" ? o : -1), g(t));
                    });
                  else if (l) {
                    var d;
                    ((s.$20 = -1), (s.$21 = -1));
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
                    ((s.$20 = -1),
                      (s.$21 = -1),
                      (s.$16 = window.setTimeout(function () {
                        return g(t);
                      }, _)));
                }
              },
              h = function () {
                (o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element playing, rVFC=",
                      "",
                    ])),
                  u,
                  String(r),
                ),
                  g(f));
              };
            ((this.$14 = function () {
              var e = document.visibilityState === "visible";
              (o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " visibility changed: ",
                    "",
                  ])),
                u,
                e ? "visible" : "hidden",
              ),
                (s.$20 = -1),
                (s.$21 = -1),
                s.$16 != null && (window.clearTimeout(s.$16), (s.$16 = null)));
              var t = ++s.$19;
              s.$10 || g(t);
            }),
              document.addEventListener("visibilitychange", this.$14),
              (this.$15 = function (e) {
                (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
                  (s.$20 = -1),
                  (s.$21 = -1),
                  s.$16 != null &&
                    (window.clearTimeout(s.$16), (s.$16 = null)));
                var t = ++s.$19;
                s.$10 || g(t);
              }),
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.on(
                "popoutWindowVisibilityChanged",
                this.$15,
              ),
              m.play().then(h, function (e) {
                (o("WALogger").ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element play failed, retrying: ",
                      "",
                    ])),
                  u,
                  e,
                ),
                  (s.$13 = window.setTimeout(function () {
                    ((s.$13 = null),
                      !s.$10 &&
                        m.play().then(h, function (e) {
                          o("WALogger").ERROR(
                            T ||
                              (T = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$24 = function (t, n, a) {
            if (
              this.$11 &&
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
                  this.$17 ||
                    (o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:capture-skew] owner-window performance unavailable, using main window performance: ",
                          "",
                        ])),
                      e,
                    ),
                    (this.$17 = !0));
                }
                var u = i.now(),
                  c = i.timeOrigin,
                  d = typeof c == "number" && c > 0,
                  m = d ? c : Date.now() - u;
                !d &&
                  !this.$18 &&
                  (o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] performance.timeOrigin unavailable, using Date.now fallback",
                      ])),
                  ),
                  (this.$18 = !0));
                var p = u,
                  _ = "construct";
                this.$21 > 0
                  ? ((p = this.$21), (_ = "capture"))
                  : this.$20 > 0 && ((p = this.$20), (_ = "presentation"));
                var f = m + p,
                  g = r("WAWebVoipVideoFrameCtor")();
                if (g == null) return;
                var h = new g(t, { timestamp: Math.round(f * 1e3) }),
                  y = globalThis.screen,
                  C = y != null ? y[ae] : null,
                  b = C == null ? void 0 : C.angle,
                  v = $e(h),
                  S = this.$8
                    ? {
                        fallbackOrientation: o(
                          "WAWebVoipMediaEnums",
                        ).computeVideoOrientationForAngle(
                          this.$4,
                          a,
                          typeof b == "number" ? b : null,
                        ),
                        frameRotation: 0,
                        screenAngle: typeof b == "number" ? b : null,
                        screenType:
                          (e = C == null ? void 0 : C.type) != null ? e : null,
                        sensorOffsetInitialized: this.$5,
                      }
                    : void 0;
                if ((this.$22++, S != null && this.$22 <= 3)) {
                  var R, L, E;
                  o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [orient_pretransfer_v1] frame=",
                        "x",
                        " frameRot=",
                        " rawFrameRot=",
                        " fallback=",
                        " screenAngle=",
                        " screenType=",
                        " sensorReady=",
                        " normalize=",
                        "",
                      ])),
                    h.displayWidth,
                    h.displayHeight,
                    String((R = S.frameRotation) != null ? R : "na"),
                    String(v != null ? v : "na"),
                    S.fallbackOrientation,
                    String((L = S.screenAngle) != null ? L : "na"),
                    (E = S.screenType) != null ? E : "na",
                    S.sensorOffsetInitialized ? 1 : 0,
                    this.$8 ? 1 : 0,
                  );
                }
                if (this.$22 % 150 === 0) {
                  var k =
                      this.$20 > 0 ? (u - this.$20).toFixed(1) + "ms" : "n/a",
                    I = this.$21 > 0 ? (u - this.$21).toFixed(1) + "ms" : "n/a";
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] video frame#",
                        " presentToConstruct=",
                        " captureToConstruct=",
                        " tsSource=",
                        " tsEpochMs=",
                        " nowMs=",
                        "",
                      ])),
                    this.$22,
                    k,
                    I,
                    _,
                    f.toFixed(2),
                    u.toFixed(2),
                  );
                }
                ((this.$11 = !1),
                  ie(
                    n,
                    {
                      jsWorkerCmd: "deliverVideoFrame",
                      frame: h,
                      frameMetadata: S,
                    },
                    [h],
                  ));
              } catch (e) {
                (o("WALogger").ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:videoElementCapture] frame capture failed, stopping loop: ",
                      "",
                    ])),
                  e,
                ),
                  (this.$10 = !0));
              }
          }),
          (a.stopVideoCapture = function () {
            var e = this;
            if (
              !o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled()
            )
              return this.$25();
            var t = this.$1;
            if (t != null) return t;
            var n = this.$25().finally(function () {
              e.$1 === n && (e.$1 = null);
            });
            return ((this.$1 = n), n);
          }),
          (a.$25 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = "voip: stopVideoCapture (offthread)";
              if (
                (o("WALogger").LOG(
                  M || (M = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  e,
                ),
                (this.$10 = !0),
                (this.$5 = !1),
                this.$9 != null &&
                  ((this.$9.srcObject = null),
                  this.$9.remove(),
                  (this.$9 = null)),
                this.$12 != null && (this.$12(), (this.$12 = null)),
                this.$13 != null &&
                  (window.clearTimeout(this.$13), (this.$13 = null)),
                this.$16 != null &&
                  (window.clearTimeout(this.$16), (this.$16 = null)),
                this.$14 != null &&
                  (document.removeEventListener("visibilitychange", this.$14),
                  (this.$14 = null)),
                this.$15 != null &&
                  (o(
                    "WAWebVoipPopoutWindowState",
                  ).WAWebVoipUiPopoutWindowEventEmitter.off(
                    "popoutWindowVisibilityChanged",
                    this.$15,
                  ),
                  (this.$15 = null)),
                this.$3 != null)
              ) {
                window.removeEventListener("orientationchange", this.$3);
                try {
                  var t;
                  (t = screen) == null ||
                    (t = t.orientation) == null ||
                    t.removeEventListener("change", this.$3);
                } catch (e) {}
                this.$3 = null;
              }
              if (
                (this.$2 != null && (this.$2(), (this.$2 = null)),
                !o(
                  "WAWebVoipPthreadHardening",
                ).isVoipWorkerLifecycleHardeningEnabled())
              ) {
                yield this.$26();
                return;
              }
              (this.track != null && (this.track.stop(), (this.track = null)),
                yield this.$27());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$27 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.thread;
              if (e != null) {
                this.thread = null;
                var t = function () {
                  return (ee || (ee = n("Promise")))
                    .resolve()
                    .then(function () {
                      return e.joinJsWorkerThread();
                    })
                    .catch(function (e) {
                      o("WALogger").WARN(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: stopVideoCapture (offthread) join failed: ",
                            "",
                          ])),
                        String(e),
                      );
                    });
                };
                try {
                  ie(e, { jsWorkerCmd: "stopVideoCapture" });
                } catch (e) {
                  o("WALogger").WARN(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: stopVideoCapture (offthread) could not post stop: ",
                        "",
                      ])),
                    String(e),
                  );
                }
                if (
                  !o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(
                    e.worker,
                  )
                ) {
                  (o("WALogger").LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: stopVideoCapture (offthread) worker never loaded; not waiting for the join",
                      ])),
                  ),
                    t());
                  return;
                }
                yield t();
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$26 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                if (this.thread != null) {
                  var e = this.thread;
                  (ie(e, { jsWorkerCmd: "stopVideoCapture" }),
                    yield e.joinJsWorkerThread(),
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
      ue = !1,
      ce = !1,
      de = [],
      me = null,
      pe = null,
      _e = 0,
      fe = 1,
      ge = {
        actualTrackHeight: null,
        actualTrackWidth: null,
        capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
        isBackCamera: !1,
        isScreenShare: !1,
        maxTouchPoints: 0,
        requestedHeight: _e,
        requestedWidth: _e,
        screenAngle: null,
        screenType: null,
        sensorOffset: 0,
        videoHeight: null,
        videoWidth: null,
      },
      he = 0,
      ye = null;
    function Ce(e, t) {
      (e !== fe &&
        te(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          fe,
          e,
        ),
        (fe = e),
        t != null && (ge = t));
    }
    var be = new Map();
    function ve() {
      return ue;
    }
    function Se() {
      return ce;
    }
    function Re(e) {
      ce = e;
    }
    function Le(e) {
      if (((ue = e), e)) {
        var t = de;
        ((de = []),
          t.forEach(function (e) {
            return e();
          }));
      }
    }
    function Ee() {
      return ue
        ? (ee || (ee = n("Promise"))).resolve()
        : new (ee || (ee = n("Promise")))(function (e) {
            de.push(e);
          });
    }
    function ke(e, t) {
      ((me = e), (pe = t));
    }
    function Ie() {
      ((me = null), (pe = null));
    }
    function Te() {
      return fe;
    }
    function De(e) {
      fe = e;
    }
    function xe(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = ge,
        _ =
          (a = r == null ? void 0 : r.screenAngle) != null ? a : p.screenAngle,
        f = (i = r == null ? void 0 : r.screenType) != null ? i : p.screenType;
      if (
        !(
          p.capturePath === o("WAWebVoipMediaEnums").VideoCapturePath.Unknown ||
          p.isScreenShare ||
          p.requestedHeight === _e ||
          p.requestedWidth === _e
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
          y = g !== ye,
          C = ye != null;
        if (
          o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
            elapsedMsSinceLastLog: h - he,
            hasLoggedSnapshot: C,
            orientationStateChanged: y,
          })
        ) {
          ((ye = g), (he = h));
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
            ? oe(
                B || (B = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                S,
              )
            : te(
                W || (W = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                S,
              );
        }
      }
    }
    function $e(e) {
      var t = e.rotation;
      return typeof t == "number" ? t : null;
    }
    function Pe(e, t, n) {
      var r,
        a = t != null ? t.frameRotation : $e(e),
        i =
          (r = n != null ? n : t == null ? void 0 : t.fallbackOrientation) !=
          null
            ? r
            : fe,
        l = o("WAWebVoipMediaEnums").resolveVideoFrameOrientation(a, i);
      return (xe(e, l, i, t), l.orientation);
    }
    var Ne = null;
    function Me(e) {
      Ne = e;
    }
    function we(e, t) {
      var n = Ne;
      if (n == null) {
        e.close();
        return;
      }
      n(e, t)
        .catch(function (e) {
          ne(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ae(e) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                    var a = Pe(
                      e,
                      void 0,
                      o("WAWebVoipMediaEnums").Orientation.Normal,
                    );
                    (f < 3 &&
                      (f++,
                      te(
                        G ||
                          (G = babelHelpers.taggedTemplateLiteralLoose([
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
                    ne(
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
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
            (te(
              V || (V = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              u,
            ),
              (ue = !1),
              a != null &&
                ((fe = a),
                te(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
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
              var g,
                h =
                  t.readable ||
                  (yield new MediaStreamTrackProcessor({ track: t.track })
                    .readable);
              te(
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " got MediaStreamTrackProcessor readable",
                  ])),
                u,
              );
              var y = h.getReader();
              for (
                ke(y, (g = t.track) != null ? g : null),
                  te(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " starting capture loop",
                      ])),
                    u,
                  );
                !ue;
              ) {
                var C = yield y.read(),
                  b = C.done,
                  v = C.value;
                try {
                  if (b || !v) {
                    Le(!0);
                    break;
                  }
                  yield d(v);
                } finally {
                  v && v.close();
                }
              }
            } finally {
              if ((Ie(), ce)) {
                var S;
                (S = t.track) == null || S.stop();
              }
              s._free(p);
            }
          } catch (e) {
            ne(
              Q ||
                (Q = babelHelpers.taggedTemplateLiteralLoose([
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
              ne(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exitJsWorkerThread error: ",
                    "",
                  ])),
                u,
                e,
              );
            }
            te(
              Y ||
                (Y = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " exit capture worker thread",
                ])),
              u,
            );
          }
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe() {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
          (te(J || (J = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e),
            Le(!0),
            ce && We(e),
            (fe = 1),
            (ge = {
              actualTrackHeight: null,
              actualTrackWidth: null,
              capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
              isBackCamera: !1,
              isScreenShare: !1,
              maxTouchPoints: 0,
              requestedHeight: _e,
              requestedWidth: _e,
              screenAngle: null,
              screenType: null,
              sensorOffset: 0,
              videoHeight: null,
              videoWidth: null,
            }),
            be.clear(),
            (he = 0),
            (ye = null),
            te(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " completed successfully",
                ])),
              e,
            ));
        })),
        Be.apply(this, arguments)
      );
    }
    function We(e) {
      var t = pe;
      t != null && t.stop();
      var n = me;
      n != null &&
        n.cancel().catch(function (t) {
          te(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " reader cancel failed: ",
                "",
              ])),
            e,
            String(t),
          );
        });
    }
    ((l.CaptureInitState = le),
      (l.WAWebVoipVideoCaptureOffThread = se),
      (l.updateDeviceOrientationInWorker = Ce),
      (l.encodedFrameOrientations = be),
      (l.getStopCapture = ve),
      (l.getInterruptCaptureOnStop = Se),
      (l.updateInterruptCaptureOnStop = Re),
      (l.updateStopCapture = Le),
      (l.waitForStopCapture = Ee),
      (l.registerActiveCapture = ke),
      (l.clearActiveCapture = Ie),
      (l.getCurrentWorkerOrientation = Te),
      (l.updateCurrentWorkerOrientation = De),
      (l.getVideoFrameRotation = $e),
      (l.getFrameOrientation = Pe),
      (l.registerCaptureAndEncodeFn = Me),
      (l.deliverVideoFrameToWorker = we),
      (l.startVideoCaptureInWorker = Ae),
      (l.stopVideoCaptureInWorker = Oe));
  },
  98,
);
