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
    "WAWebVoipSelfPreviewVideoFrameSupport",
    "WAWebVoipVideoFrameConsumedSignal",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipWebCodecsEncoderState",
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
      Y,
      J,
      Z,
      ee,
      te,
      ne;
    function re(e) {
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
    function oe(e) {
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
    var ae = 2;
    function ie(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: ae,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    var le = "orientation",
      se = 3;
    function ue(e, t, n) {
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
    var ce = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      de = (function () {
        function t(e) {
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
            (this.$22 = 0),
            (this.$23 = null),
            (this.$24 = !1),
            (this.$25 = 0),
            (this.$26 = e));
        }
        var a = t.prototype;
        return (
          (a.startVideoCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  a,
                  i,
                  l = this,
                  v = t.enableWebCodecsEncoderOutputWatchdog,
                  S = v === void 0 ? !1 : v,
                  R = t.height,
                  L = t.maxFps,
                  E = t.onVideoDataFnType,
                  k = t.stream,
                  I = t.width,
                  T = "voip: wasm: [AV:startVideoCapture (offthread)]";
                o("WALogger").LOG(
                  e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  T,
                );
                var D = this.$1;
                D != null &&
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " waiting for a stop in flight",
                      ])),
                    T,
                  ),
                  yield D);
                var x = { width: I, height: R, maxFps: L },
                  $ = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled(),
                  P = E === "onDesktopCaptureDataFromJs",
                  N = $ && o("WAWebUA").UA.isSafari && P,
                  M = $ && !N;
                this.$8 = M && !P;
                var w =
                    M &&
                    !P &&
                    o(
                      "WAWebVoipSelfPreviewVideoFrameSupport",
                    ).isSelfPreviewVideoFrameSupported(),
                  A = (function (e) {
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
                  })({ useVideoElementCapture: M, useWebCodecsEncoder: $ }),
                  F = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
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
                  T,
                  String($),
                  String(S),
                  String(M),
                  String(this.$8),
                  String(N),
                  String(F),
                  String(!M && "MediaStreamTrackProcessor" in window),
                ),
                  (this.track = k.getVideoTracks()[0]));
                var O =
                    (n = this.track) == null || n.getSettings == null
                      ? void 0
                      : n.getSettings(),
                  B = O == null ? void 0 : O.height,
                  W = O == null ? void 0 : O.width,
                  q = O == null ? void 0 : O.facingMode,
                  U = q === "environment";
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got video track, facingMode=",
                      "",
                    ])),
                  T,
                  q != null ? q : "unknown",
                );
                var V = null;
                if (M)
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " using video-element capture (WebCodecs)",
                      ])),
                    T,
                  );
                else if (!N && "MediaStreamTrackProcessor" in window) {
                  var H = this.track;
                  if (H == null) {
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null when creating MediaStreamTrackProcessor",
                          ])),
                        T,
                      )
                      .sendLogs("voip: off-thread: track null for processor");
                    return;
                  }
                  ((V = {
                    readable: yield new MediaStreamTrackProcessor({ track: H })
                      .readable,
                  }),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " (Chrome) got MediaStreamTrackProcessor readable",
                        ])),
                      T,
                    ));
                } else {
                  var G = this.track;
                  if (G == null) {
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null for Safari capture path",
                          ])),
                        T,
                      )
                      .sendLogs("voip: off-thread: track null for safari");
                    return;
                  }
                  ((V = { track: G }), (this.track = null));
                }
                var z = yield r("WAWebVoipJsWorkerThread").create(
                  void 0,
                  "legacy-pj",
                  (a = this.$26) == null ? void 0 : a.call(this),
                );
                ((this.thread = z),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Created worker thread",
                      ])),
                    T,
                  ),
                  (this.$6 = I),
                  (this.$7 = R),
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
                    T,
                    this.$6,
                    this.$7,
                    String(W != null ? W : "na"),
                    String(B != null ? B : "na"),
                    String(U),
                  ));
                var j = o("WAWebVoipMediaEnums").computeVideoOrientation(0, U);
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial device orientation: ",
                      "",
                    ])),
                  T,
                  j,
                ),
                  ue(
                    z,
                    {
                      jsWorkerCmd: "startVideoCapture",
                      params: x,
                      captureObject: V,
                      onVideoDataFnType: E,
                      useWebCodecsEncoder: $,
                      videoElementCapture: M,
                      enableWebCodecsEncoderOutputWatchdog: S,
                      normalizeVideoElementPresentationFrames: this.$8,
                      initialOrientationValue: j,
                      isScreenShare: P,
                      interruptCaptureOnStop: o(
                        "WAWebVoipPthreadHardening",
                      ).isVoipWorkerLifecycleHardeningEnabled(),
                      selfPreviewVideoFrame: w,
                    },
                    V != null ? Object.values(V) : [],
                  ),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Sent startVideoCapture message to worker thread",
                      ])),
                    T,
                  ),
                  (i = this.$23) == null || i.call(this),
                  (this.$23 = w
                    ? o(
                        "WAWebVoipSelfPreviewVideoFrameSupport",
                      ).subscribeToSelfPreviewVideoFrameLoss(function () {
                        ue(z, { jsWorkerCmd: "disableSelfPreviewVideoFrame" });
                      })
                    : null));
                var K = function () {
                  var e,
                    t,
                    n,
                    r,
                    a,
                    i,
                    s = o("WAWebVoipMediaEnums").computeVideoOrientation(
                      l.$4,
                      U,
                    ),
                    u = globalThis.screen,
                    c = u != null ? u[le] : null,
                    d = c == null ? void 0 : c.angle,
                    m = (e = l.$9) == null ? void 0 : e.videoHeight,
                    p = (t = l.$9) == null ? void 0 : t.videoWidth,
                    _ = {
                      actualTrackHeight: typeof B == "number" ? B : null,
                      actualTrackWidth: typeof W == "number" ? W : null,
                      capturePath: A,
                      isBackCamera: U,
                      isScreenShare: P,
                      maxTouchPoints:
                        (n =
                          (r = globalThis.navigator) == null
                            ? void 0
                            : r.maxTouchPoints) != null
                          ? n
                          : 0,
                      requestedHeight: l.$7,
                      requestedWidth: l.$6,
                      screenAngle: typeof d == "number" ? d : null,
                      screenType:
                        (a = c == null ? void 0 : c.type) != null ? a : null,
                      sensorOffset: l.$4,
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
                    T,
                    String(d),
                    (i = _.screenType) != null ? i : "unknown",
                    s,
                    l.$4,
                    String(U),
                    A,
                  ),
                    ue(z, {
                      jsWorkerCmd: "updateDeviceOrientation",
                      diagnostics: _,
                      orientationValue: s,
                    }));
                };
                ((this.$3 = K),
                  window.addEventListener("orientationchange", K));
                try {
                  var Q = globalThis.screen,
                    X = Q != null ? Q[le] : null;
                  X == null || X.addEventListener("change", K);
                } catch (e) {}
                if ((K(), this.$2 != null && this.$2(), $)) {
                  this.$2 = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).subscribeToEncodeParamsChanges(function (e) {
                    ue(z, {
                      jsWorkerCmd: "updateWebCodecsEncodeParams",
                      params: e,
                    });
                  });
                  var Y = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).getAllWebCodecsEncodeParams();
                  for (var J of Y) {
                    var Z = J[0],
                      ee = J[1];
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
                      T,
                      Z,
                      ee.targetWidth,
                      ee.targetHeight,
                      ee.targetBitrateBps,
                      ee.targetFps,
                    ),
                      ue(z, {
                        jsWorkerCmd: "updateWebCodecsEncodeParams",
                        params: ee,
                      }));
                  }
                }
                M && this.$27(k, z, F, U);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$27 = function (t, n, r, a) {
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
              (this.$24 = !1),
              (this.$25 = 0),
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
                  (s.$28(m, n, a), !(s.$10 || t !== s.$19))
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
                  else {
                    if (s.$24) return;
                    if (l) {
                      var d;
                      ((s.$20 = -1), (s.$21 = -1));
                      var p =
                        i &&
                        (d = o(
                          "WAWebVoipPopoutWindowState",
                        ).getPopoutWindow()) != null
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
          (a.$28 = function (t, n, a) {
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
                  C = y != null ? y[le] : null,
                  b = C == null ? void 0 : C.angle,
                  v = we(h),
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
                  ue(
                    n,
                    {
                      jsWorkerCmd: "deliverVideoFrame",
                      frame: h,
                      frameMetadata: S,
                    },
                    [h],
                  ),
                  (this.$24 = !1),
                  (this.$25 = 0));
              } catch (e) {
                if (this.$29(e)) return;
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
          (a.$29 = function (t) {
            var e = this.track;
            if (!Me(t) || e == null || e.readyState !== "live") return !1;
            if (e.muted) this.$25 = 0;
            else if (!this.$24 || (this.$25++, this.$25 > se)) return !1;
            if (!this.$24) {
              var n;
              o("WALogger").WARN(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:videoElementCapture] no video frame, waiting for camera: muted=",
                    " paused=",
                    "",
                  ])),
                String(e.muted),
                String((n = this.$9) == null ? void 0 : n.paused),
              );
            }
            return ((this.$24 = !0), !0);
          }),
          (a.stopVideoCapture = function () {
            var e = this;
            if (
              !o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled()
            )
              return this.$30();
            var t = this.$1;
            if (t != null) return t;
            var n = this.$30().finally(function () {
              e.$1 === n && (e.$1 = null);
            });
            return ((this.$1 = n), n);
          }),
          (a.$30 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = "voip: stopVideoCapture (offthread)";
              (o("WALogger").LOG(
                w || (w = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                t,
              ),
                (this.$10 = !0),
                (this.$5 = !1),
                this.$9 != null &&
                  ((this.$9.srcObject = null),
                  this.$9.remove(),
                  (this.$9 = null)),
                this.$12 != null && (this.$12(), (this.$12 = null)),
                (e = this.$23) == null || e.call(this),
                (this.$23 = null),
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
                  (this.$15 = null)));
              var n = this.$3;
              if (n != null) {
                window.removeEventListener("orientationchange", n);
                try {
                  var r;
                  (r = screen) == null ||
                    (r = r.orientation) == null ||
                    r.removeEventListener("change", n);
                } catch (e) {}
                this.$3 = null;
              }
              if (
                (this.$2 != null && (this.$2(), (this.$2 = null)),
                !o(
                  "WAWebVoipPthreadHardening",
                ).isVoipWorkerLifecycleHardeningEnabled())
              ) {
                yield this.$31();
                return;
              }
              (this.track != null && (this.track.stop(), (this.track = null)),
                yield this.$32());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$32 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.thread;
              if (e != null) {
                this.thread = null;
                var t = function () {
                  return (ne || (ne = n("Promise")))
                    .resolve()
                    .then(function () {
                      return e.joinJsWorkerThread();
                    })
                    .catch(function (e) {
                      o("WALogger").WARN(
                        A ||
                          (A = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: stopVideoCapture (offthread) join failed: ",
                            "",
                          ])),
                        String(e),
                      );
                    });
                };
                try {
                  ue(e, { jsWorkerCmd: "stopVideoCapture" });
                } catch (e) {
                  o("WALogger").WARN(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
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
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$31 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                if (this.thread != null) {
                  var e = this.thread;
                  (ue(e, { jsWorkerCmd: "stopVideoCapture" }),
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
      me = !1,
      pe = !1,
      _e = [],
      fe = null,
      ge = null,
      he = 0,
      ye = 1,
      Ce = {
        actualTrackHeight: null,
        actualTrackWidth: null,
        capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
        isBackCamera: !1,
        isScreenShare: !1,
        maxTouchPoints: 0,
        requestedHeight: he,
        requestedWidth: he,
        screenAngle: null,
        screenType: null,
        sensorOffset: 0,
        videoHeight: null,
        videoWidth: null,
      },
      be = 0,
      ve = null;
    function Se(e, t) {
      (e !== ye &&
        re(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          ye,
          e,
        ),
        (ye = e),
        t != null && (Ce = t));
    }
    var Re = new Map();
    function Le() {
      return me;
    }
    function Ee() {
      return pe;
    }
    function ke(e) {
      pe = e;
    }
    function Ie(e) {
      if (((me = e), e)) {
        var t = _e;
        ((_e = []),
          t.forEach(function (e) {
            return e();
          }));
      }
    }
    function Te() {
      return me
        ? (ne || (ne = n("Promise"))).resolve()
        : new (ne || (ne = n("Promise")))(function (e) {
            _e.push(e);
          });
    }
    function De(e, t) {
      ((fe = e), (ge = t));
    }
    function xe() {
      ((fe = null), (ge = null));
    }
    function $e() {
      return ye;
    }
    function Pe(e) {
      ye = e;
    }
    function Ne(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = Ce,
        _ =
          (a = r == null ? void 0 : r.screenAngle) != null ? a : p.screenAngle,
        f = (i = r == null ? void 0 : r.screenType) != null ? i : p.screenType;
      if (
        !(
          p.capturePath === o("WAWebVoipMediaEnums").VideoCapturePath.Unknown ||
          p.isScreenShare ||
          p.requestedHeight === he ||
          p.requestedWidth === he
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
          y = g !== ve,
          C = ve != null;
        if (
          o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
            elapsedMsSinceLastLog: h - be,
            hasLoggedSnapshot: C,
            orientationStateChanged: y,
          })
        ) {
          ((ve = g), (be = h));
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
            ? ie(
                W || (W = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                S,
              )
            : re(
                q || (q = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                S,
              );
        }
      }
    }
    function Me(e) {
      return e instanceof DOMException && e.name === "InvalidStateError";
    }
    function we(e) {
      var t = e.rotation;
      return typeof t == "number" ? t : null;
    }
    function Ae(e, t, n) {
      var r,
        a = t != null ? t.frameRotation : we(e),
        i =
          (r = n != null ? n : t == null ? void 0 : t.fallbackOrientation) !=
          null
            ? r
            : ye,
        l = o("WAWebVoipMediaEnums").resolveVideoFrameOrientation(a, i);
      return (Ne(e, l, i, t), l.orientation);
    }
    var Fe = null;
    function Oe(e) {
      Fe = e;
    }
    function Be(e, t) {
      var n = Fe;
      if (n == null) {
        e.close();
        return;
      }
      n(e, t)
        .catch(function (e) {
          oe(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
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
    function We(e) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.captureObject,
            a = e.initialOrientationValue,
            i = e.onVideoDataFnType,
            l = e.params,
            s = e.voipWasm,
            u = "voip: wasm: [AV:startVideoCaptureInWorker]",
            c = i === "onDesktopCaptureDataFromJs";
          try {
            var d = function (t, n) {
                (re(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " raw frame size changed: ",
                      "x",
                      " -> ",
                      "x",
                      "",
                    ])),
                  u,
                  p,
                  _,
                  t,
                  n,
                ),
                  (p = t),
                  (_ = n),
                  (f = Math.floor(t * n * 1.5)),
                  s._free(g),
                  (g = s._malloc(f)),
                  (h = new Uint8Array(f)));
              },
              m = (function () {
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
                      var a = r("nullthrows")(e.visibleRect),
                        m = a.height,
                        C = a.width;
                      (C !== p || m !== _) && d(C, m);
                      var b = Ae(
                        e,
                        void 0,
                        o("WAWebVoipMediaEnums").Orientation.Normal,
                      );
                      (y < 3 &&
                        (y++,
                        re(
                          j ||
                            (j = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " [orient] frame#",
                              " orientation=",
                              " frameSize=",
                              "x",
                              "",
                            ])),
                          u,
                          y,
                          b,
                          p,
                          _,
                        )),
                        yield e.copyTo(h),
                        s.GROWABLE_HEAP_U8().set(h, g),
                        s[i](g, f, p, _, l.maxFps, t, b),
                        self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                          {
                            userJid: o("WAWebVoipVideoRendererInterface")
                              .selfPreviewJid,
                            frameBuffer: h.buffer,
                            width: p,
                            height: _,
                            format: t,
                            orientation: b,
                            timestamp: 0,
                            isKeyFrame: !1,
                            isScreenShare: c,
                          },
                        ));
                    } catch (e) {
                      oe(
                        K ||
                          (K = babelHelpers.taggedTemplateLiteralLoose([
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
            (re(
              H || (H = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              u,
            ),
              (me = !1),
              a != null &&
                ((ye = a),
                re(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial orientation: ",
                      "",
                    ])),
                  u,
                  a,
                )));
            var p = l.width,
              _ = l.height,
              f = Math.floor(p * _ * 1.5),
              g = s._malloc(f),
              h = new Uint8Array(f),
              y = 0;
            try {
              var C,
                b =
                  t.readable ||
                  (yield new MediaStreamTrackProcessor({ track: t.track })
                    .readable);
              re(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " got MediaStreamTrackProcessor readable",
                  ])),
                u,
              );
              var v = b.getReader();
              for (
                De(v, (C = t.track) != null ? C : null),
                  re(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " starting capture loop",
                      ])),
                    u,
                  );
                !me;
              ) {
                var S = yield v.read(),
                  R = S.done,
                  L = S.value;
                try {
                  if (R || !L) {
                    Ie(!0);
                    break;
                  }
                  yield m(L);
                } finally {
                  L && L.close();
                }
              }
            } finally {
              if ((xe(), pe)) {
                var E;
                (E = t.track) == null || E.stop();
              }
              s._free(g);
            }
          } catch (e) {
            oe(
              Y ||
                (Y = babelHelpers.taggedTemplateLiteralLoose([
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
              oe(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exitJsWorkerThread error: ",
                    "",
                  ])),
                u,
                e,
              );
            }
            re(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " exit capture worker thread",
                ])),
              u,
            );
          }
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue() {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
          (re(
            ee || (ee = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            e,
          ),
            Ie(!0),
            pe && He(e),
            (ye = 1),
            (Ce = {
              actualTrackHeight: null,
              actualTrackWidth: null,
              capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
              isBackCamera: !1,
              isScreenShare: !1,
              maxTouchPoints: 0,
              requestedHeight: he,
              requestedWidth: he,
              screenAngle: null,
              screenType: null,
              sensorOffset: 0,
              videoHeight: null,
              videoWidth: null,
            }),
            Re.clear(),
            (be = 0),
            (ve = null),
            re(
              te ||
                (te = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " completed successfully",
                ])),
              e,
            ));
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e) {
      var t = ge;
      t != null && t.stop();
      var n = fe;
      n != null &&
        n.cancel().catch(function (t) {
          re(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " reader cancel failed: ",
                "",
              ])),
            e,
            String(t),
          );
        });
    }
    ((l.WORKER_LOG = re),
      (l.WORKER_ERROR = oe),
      (l.CaptureInitState = ce),
      (l.WAWebVoipVideoCaptureOffThread = de),
      (l.updateDeviceOrientationInWorker = Se),
      (l.encodedFrameOrientations = Re),
      (l.getStopCapture = Le),
      (l.getInterruptCaptureOnStop = Ee),
      (l.updateInterruptCaptureOnStop = ke),
      (l.updateStopCapture = Ie),
      (l.waitForStopCapture = Te),
      (l.registerActiveCapture = De),
      (l.clearActiveCapture = xe),
      (l.getCurrentWorkerOrientation = $e),
      (l.updateCurrentWorkerOrientation = Pe),
      (l.getVideoFrameRotation = we),
      (l.getFrameOrientation = Ae),
      (l.registerCaptureAndEncodeFn = Oe),
      (l.deliverVideoFrameToWorker = Be),
      (l.startVideoCaptureInWorker = We),
      (l.stopVideoCaptureInWorker = Ue));
  },
  98,
);
