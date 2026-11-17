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
    "WAWebVoipVideoFrameProcessor",
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
      ne,
      re,
      oe;
    function ae(e) {
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
    function ie(e) {
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
    var le = 2;
    function se(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: le,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    var ue = "orientation",
      ce = 3;
    function de(e, t, n) {
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
    var me = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      pe = (function () {
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
            (this.$17 = null),
            (this.$18 = !1),
            (this.$19 = !1),
            (this.$20 = 0),
            (this.$21 = -1),
            (this.$22 = -1),
            (this.$23 = 0),
            (this.$24 = null),
            (this.$25 = !1),
            (this.$26 = 0),
            (this.$27 = e));
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
                  I = t.videoFrameProcessor,
                  T = t.width,
                  D = "voip: wasm: [AV:startVideoCapture (offthread)]";
                o("WALogger").LOG(
                  e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  D,
                );
                var x = this.$1;
                x != null &&
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " waiting for a stop in flight",
                      ])),
                    D,
                  ),
                  yield x);
                var $ = { width: T, height: R, maxFps: L },
                  P = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled(),
                  N = E === "onDesktopCaptureDataFromJs",
                  M = P && o("WAWebUA").UA.isSafari && N,
                  w = P && !M;
                ((this.$8 = w && !N),
                  (this.$12 = w && !N && I != null ? I : null));
                var A =
                    w &&
                    !N &&
                    o(
                      "WAWebVoipSelfPreviewVideoFrameSupport",
                    ).isSelfPreviewVideoFrameSupported(),
                  F = (function (e) {
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
                  })({ useVideoElementCapture: w, useWebCodecsEncoder: P }),
                  O = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
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
                  D,
                  String(P),
                  String(S),
                  String(w),
                  String(this.$8),
                  String(M),
                  String(O),
                  String(!w && "MediaStreamTrackProcessor" in window),
                ),
                  (this.track = k.getVideoTracks()[0]));
                var B =
                    (n = this.track) == null || n.getSettings == null
                      ? void 0
                      : n.getSettings(),
                  W = B == null ? void 0 : B.height,
                  q = B == null ? void 0 : B.width,
                  U = B == null ? void 0 : B.facingMode,
                  V = U === "environment";
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got video track, facingMode=",
                      "",
                    ])),
                  D,
                  U != null ? U : "unknown",
                );
                var H = null;
                if (w)
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " using video-element capture (WebCodecs)",
                      ])),
                    D,
                  );
                else if (!M && "MediaStreamTrackProcessor" in window) {
                  var G = this.track;
                  if (G == null) {
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null when creating MediaStreamTrackProcessor",
                          ])),
                        D,
                      )
                      .sendLogs("voip: off-thread: track null for processor");
                    return;
                  }
                  ((H = {
                    readable: yield new MediaStreamTrackProcessor({ track: G })
                      .readable,
                  }),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " (Chrome) got MediaStreamTrackProcessor readable",
                        ])),
                      D,
                    ));
                } else {
                  var z = this.track;
                  if (z == null) {
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " track is null for Safari capture path",
                          ])),
                        D,
                      )
                      .sendLogs("voip: off-thread: track null for safari");
                    return;
                  }
                  ((H = { track: z }), (this.track = null));
                }
                var j = yield r("WAWebVoipJsWorkerThread").create(
                  void 0,
                  "legacy-pj",
                  (a = this.$27) == null ? void 0 : a.call(this),
                );
                ((this.thread = j),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Created worker thread",
                      ])),
                    D,
                  ),
                  (this.$6 = T),
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
                    D,
                    this.$6,
                    this.$7,
                    String(q != null ? q : "na"),
                    String(W != null ? W : "na"),
                    String(V),
                  ));
                var K = o("WAWebVoipMediaEnums").computeVideoOrientation(0, V);
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial device orientation: ",
                      "",
                    ])),
                  D,
                  K,
                ),
                  de(
                    j,
                    {
                      jsWorkerCmd: "startVideoCapture",
                      params: $,
                      captureObject: H,
                      onVideoDataFnType: E,
                      useWebCodecsEncoder: P,
                      videoElementCapture: w,
                      enableWebCodecsEncoderOutputWatchdog: S,
                      normalizeVideoElementPresentationFrames: this.$8,
                      initialOrientationValue: K,
                      isScreenShare: N,
                      interruptCaptureOnStop: o(
                        "WAWebVoipPthreadHardening",
                      ).isVoipWorkerLifecycleHardeningEnabled(),
                      selfPreviewVideoFrame: A,
                    },
                    H != null ? Object.values(H) : [],
                  ),
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Sent startVideoCapture message to worker thread",
                      ])),
                    D,
                  ),
                  (i = this.$24) == null || i.call(this),
                  (this.$24 = A
                    ? o(
                        "WAWebVoipSelfPreviewVideoFrameSupport",
                      ).subscribeToSelfPreviewVideoFrameLoss(function () {
                        de(j, { jsWorkerCmd: "disableSelfPreviewVideoFrame" });
                      })
                    : null));
                var Q = function () {
                  var e,
                    t,
                    n,
                    r,
                    a,
                    i,
                    s = o("WAWebVoipMediaEnums").computeVideoOrientation(
                      l.$4,
                      V,
                    ),
                    u = globalThis.screen,
                    c = u != null ? u[ue] : null,
                    d = c == null ? void 0 : c.angle,
                    m = (e = l.$9) == null ? void 0 : e.videoHeight,
                    p = (t = l.$9) == null ? void 0 : t.videoWidth,
                    _ = {
                      actualTrackHeight: typeof W == "number" ? W : null,
                      actualTrackWidth: typeof q == "number" ? q : null,
                      capturePath: F,
                      isBackCamera: V,
                      isScreenShare: N,
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
                    D,
                    String(d),
                    (i = _.screenType) != null ? i : "unknown",
                    s,
                    l.$4,
                    String(V),
                    F,
                  ),
                    de(j, {
                      jsWorkerCmd: "updateDeviceOrientation",
                      diagnostics: _,
                      orientationValue: s,
                    }));
                };
                ((this.$3 = Q),
                  window.addEventListener("orientationchange", Q));
                try {
                  var X = globalThis.screen,
                    Y = X != null ? X[ue] : null;
                  Y == null || Y.addEventListener("change", Q);
                } catch (e) {}
                if ((Q(), this.$2 != null && this.$2(), P)) {
                  this.$2 = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).subscribeToEncodeParamsChanges(function (e) {
                    de(j, {
                      jsWorkerCmd: "updateWebCodecsEncodeParams",
                      params: e,
                    });
                  });
                  var J = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).getAllWebCodecsEncodeParams();
                  for (var Z of J) {
                    var ee = Z[0],
                      te = Z[1];
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
                      D,
                      ee,
                      te.targetWidth,
                      te.targetHeight,
                      te.targetBitrateBps,
                      te.targetFps,
                    ),
                      de(j, {
                        jsWorkerCmd: "updateWebCodecsEncodeParams",
                        params: te,
                      }));
                  }
                }
                w && this.$28(k, j, O, V);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$28 = function (t, n, r, a) {
            var e,
              i,
              l,
              s = this,
              u = "voip: [AV:videoElementCapture]";
            ((this.$10 = !1),
              (this.$11 = !0),
              (this.$18 = !1),
              (this.$19 = !1),
              (this.$21 = -1),
              (this.$22 = -1),
              (this.$23 = 0),
              (this.$25 = !1),
              (this.$26 = 0),
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
              this.$13 != null && this.$13(),
              (this.$13 = o(
                "WAWebVoipVideoFrameConsumedSignal",
              ).subscribeToVideoFrameConsumed(function () {
                s.$11 = !0;
              })));
            var _ = 33,
              f = ++this.$20,
              g = function (t) {
                if (
                  !(s.$10 || t !== s.$20) &&
                  (s.$29(m, n, a), !(s.$10 || t !== s.$20))
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
                      s.$21 = typeof r == "number" ? r : -1;
                      var o = n.captureTime;
                      ((s.$22 = typeof o == "number" ? o : -1), g(t));
                    });
                  else {
                    if (s.$25) return;
                    if (l) {
                      var d;
                      ((s.$21 = -1), (s.$22 = -1));
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
                      ((s.$21 = -1),
                        (s.$22 = -1),
                        (s.$17 = window.setTimeout(function () {
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
            ((this.$15 = function () {
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
                (s.$21 = -1),
                (s.$22 = -1),
                s.$17 != null && (window.clearTimeout(s.$17), (s.$17 = null)));
              var t = ++s.$20;
              s.$10 || g(t);
            }),
              document.addEventListener("visibilitychange", this.$15),
              (this.$16 = function (e) {
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
                  (s.$21 = -1),
                  (s.$22 = -1),
                  s.$17 != null &&
                    (window.clearTimeout(s.$17), (s.$17 = null)));
                var t = ++s.$20;
                s.$10 || g(t);
              }),
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.on(
                "popoutWindowVisibilityChanged",
                this.$16,
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
                  (s.$14 = window.setTimeout(function () {
                    ((s.$14 = null),
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
          (a.$29 = function (t, n, a) {
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
                  this.$18 ||
                    (o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:capture-skew] owner-window performance unavailable, using main window performance: ",
                          "",
                        ])),
                      e,
                    ),
                    (this.$18 = !0));
                }
                var u = i.now(),
                  c = i.timeOrigin,
                  d = typeof c == "number" && c > 0,
                  m = d ? c : Date.now() - u;
                !d &&
                  !this.$19 &&
                  (o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] performance.timeOrigin unavailable, using Date.now fallback",
                      ])),
                  ),
                  (this.$19 = !0));
                var p = u,
                  _ = "construct";
                this.$22 > 0
                  ? ((p = this.$22), (_ = "capture"))
                  : this.$21 > 0 && ((p = this.$21), (_ = "presentation"));
                var f = m + p,
                  g = r("WAWebVoipVideoFrameCtor")();
                if (g == null) return;
                var h = new g(t, { timestamp: Math.round(f * 1e3) }),
                  y = globalThis.screen,
                  C = y != null ? y[ue] : null,
                  b = C == null ? void 0 : C.angle,
                  v = Fe(h),
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
                if ((this.$23++, S != null && this.$23 <= 3)) {
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
                if (this.$23 % 150 === 0) {
                  var k =
                      this.$21 > 0 ? (u - this.$21).toFixed(1) + "ms" : "n/a",
                    I = this.$22 > 0 ? (u - this.$22).toFixed(1) + "ms" : "n/a";
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
                    this.$23,
                    k,
                    I,
                    _,
                    f.toFixed(2),
                    u.toFixed(2),
                  );
                }
                var T = this.$12,
                  M = o("WAWebVoipVideoFrameProcessor").shouldProcessFrame(T);
                ((this.$11 = !1),
                  T != null && M
                    ? this.$30(T, h, S, n)
                    : de(
                        n,
                        {
                          jsWorkerCmd: "deliverVideoFrame",
                          frame: h,
                          frameMetadata: S,
                        },
                        [h],
                      ),
                  (this.$25 = !1),
                  (this.$26 = 0));
              } catch (e) {
                if (this.$31(e)) return;
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
          (a.$30 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = null;
                try {
                  a = yield e.process(t);
                } catch (e) {
                  o("WALogger").ERROR(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:videoElementCapture] frame processing failed: ",
                        "",
                      ])),
                    e,
                  );
                }
                var i = this.thread === r && !this.$10;
                if (a == null) {
                  i && (this.$11 = !0);
                  return;
                }
                if (!i) {
                  a.close();
                  return;
                }
                try {
                  de(
                    r,
                    {
                      jsWorkerCmd: "deliverVideoFrame",
                      frame: a,
                      frameMetadata: n,
                    },
                    [a],
                  );
                } catch (e) {
                  (a.close(),
                    (this.$11 = !0),
                    o("WALogger").ERROR(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:videoElementCapture] processed frame not delivered: ",
                          "",
                        ])),
                      e,
                    ));
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$31 = function (t) {
            var e = this.track;
            if (!Ae(t) || e == null || e.readyState !== "live") return !1;
            if (e.muted) this.$26 = 0;
            else if (!this.$25 || (this.$26++, this.$26 > ce)) return !1;
            if (!this.$25) {
              var n;
              o("WALogger").WARN(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:videoElementCapture] no video frame, waiting for camera: muted=",
                    " paused=",
                    "",
                  ])),
                String(e.muted),
                String((n = this.$9) == null ? void 0 : n.paused),
              );
            }
            return ((this.$25 = !0), !0);
          }),
          (a.stopVideoCapture = function () {
            var e = this;
            if (
              !o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled()
            )
              return this.$32();
            var t = this.$1;
            if (t != null) return t;
            var n = this.$32().finally(function () {
              e.$1 === n && (e.$1 = null);
            });
            return ((this.$1 = n), n);
          }),
          (a.$32 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = "voip: stopVideoCapture (offthread)";
              (o("WALogger").LOG(
                F || (F = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                t,
              ),
                (this.$10 = !0),
                (this.$5 = !1),
                this.$9 != null &&
                  ((this.$9.srcObject = null),
                  this.$9.remove(),
                  (this.$9 = null)),
                this.$13 != null && (this.$13(), (this.$13 = null)),
                (e = this.$24) == null || e.call(this),
                (this.$24 = null),
                this.$14 != null &&
                  (window.clearTimeout(this.$14), (this.$14 = null)),
                this.$17 != null &&
                  (window.clearTimeout(this.$17), (this.$17 = null)),
                this.$15 != null &&
                  (document.removeEventListener("visibilitychange", this.$15),
                  (this.$15 = null)),
                this.$16 != null &&
                  (o(
                    "WAWebVoipPopoutWindowState",
                  ).WAWebVoipUiPopoutWindowEventEmitter.off(
                    "popoutWindowVisibilityChanged",
                    this.$16,
                  ),
                  (this.$16 = null)));
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
                yield this.$33();
                return;
              }
              (this.track != null && (this.track.stop(), (this.track = null)),
                yield this.$34());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$34 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.thread;
              if (e != null) {
                this.thread = null;
                var t = function () {
                  return (oe || (oe = n("Promise")))
                    .resolve()
                    .then(function () {
                      return e.joinJsWorkerThread();
                    })
                    .catch(function (e) {
                      o("WALogger").WARN(
                        O ||
                          (O = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: stopVideoCapture (offthread) join failed: ",
                            "",
                          ])),
                        String(e),
                      );
                    });
                };
                try {
                  de(e, { jsWorkerCmd: "stopVideoCapture" });
                } catch (e) {
                  o("WALogger").WARN(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$33 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                if (this.thread != null) {
                  var e = this.thread;
                  (de(e, { jsWorkerCmd: "stopVideoCapture" }),
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
      _e = !1,
      fe = !1,
      ge = [],
      he = null,
      ye = null,
      Ce = 0,
      be = 1,
      ve = {
        actualTrackHeight: null,
        actualTrackWidth: null,
        capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
        isBackCamera: !1,
        isScreenShare: !1,
        maxTouchPoints: 0,
        requestedHeight: Ce,
        requestedWidth: Ce,
        screenAngle: null,
        screenType: null,
        sensorOffset: 0,
        videoHeight: null,
        videoWidth: null,
      },
      Se = 0,
      Re = null;
    function Le(e, t) {
      (e !== be &&
        ae(
          q ||
            (q = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          be,
          e,
        ),
        (be = e),
        t != null && (ve = t));
    }
    var Ee = new Map();
    function ke() {
      return _e;
    }
    function Ie() {
      return fe;
    }
    function Te(e) {
      fe = e;
    }
    function De(e) {
      if (((_e = e), e)) {
        var t = ge;
        ((ge = []),
          t.forEach(function (e) {
            return e();
          }));
      }
    }
    function xe() {
      return _e
        ? (oe || (oe = n("Promise"))).resolve()
        : new (oe || (oe = n("Promise")))(function (e) {
            ge.push(e);
          });
    }
    function $e(e, t) {
      ((he = e), (ye = t));
    }
    function Pe() {
      ((he = null), (ye = null));
    }
    function Ne() {
      return be;
    }
    function Me(e) {
      be = e;
    }
    function we(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = ve,
        _ =
          (a = r == null ? void 0 : r.screenAngle) != null ? a : p.screenAngle,
        f = (i = r == null ? void 0 : r.screenType) != null ? i : p.screenType;
      if (
        !(
          p.capturePath === o("WAWebVoipMediaEnums").VideoCapturePath.Unknown ||
          p.isScreenShare ||
          p.requestedHeight === Ce ||
          p.requestedWidth === Ce
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
          y = g !== Re,
          C = Re != null;
        if (
          o("WAWebVoipMediaEnums").shouldLogOrientationDiagnostics({
            elapsedMsSinceLastLog: h - Se,
            hasLoggedSnapshot: C,
            orientationStateChanged: y,
          })
        ) {
          ((Re = g), (Se = h));
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
            ? se(
                U || (U = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                S,
              )
            : ae(
                V || (V = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                S,
              );
        }
      }
    }
    function Ae(e) {
      return e instanceof DOMException && e.name === "InvalidStateError";
    }
    function Fe(e) {
      var t = e.rotation;
      return typeof t == "number" ? t : null;
    }
    function Oe(e, t, n) {
      var r,
        a = t != null ? t.frameRotation : Fe(e),
        i =
          (r = n != null ? n : t == null ? void 0 : t.fallbackOrientation) !=
          null
            ? r
            : be,
        l = o("WAWebVoipMediaEnums").resolveVideoFrameOrientation(a, i);
      return (we(e, l, i, t), l.orientation);
    }
    var Be = null;
    function We(e) {
      Be = e;
    }
    function qe(e, t) {
      var n = Be;
      if (n == null) {
        e.close();
        return;
      }
      n(e, t)
        .catch(function (e) {
          ie(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ue(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.captureObject,
            a = e.initialOrientationValue,
            i = e.onVideoDataFnType,
            l = e.params,
            s = e.voipWasm,
            u = "voip: wasm: [AV:startVideoCaptureInWorker]",
            c = i === "onDesktopCaptureDataFromJs";
          try {
            var d = function (t, n) {
                (ae(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
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
                      var b = Oe(
                        e,
                        void 0,
                        o("WAWebVoipMediaEnums").Orientation.Normal,
                      );
                      (y < 3 &&
                        (y++,
                        ae(
                          Q ||
                            (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                      ie(
                        X ||
                          (X = babelHelpers.taggedTemplateLiteralLoose([
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
            (ae(
              z || (z = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              u,
            ),
              (_e = !1),
              a != null &&
                ((be = a),
                ae(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
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
              ae(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " got MediaStreamTrackProcessor readable",
                  ])),
                u,
              );
              var v = b.getReader();
              for (
                $e(v, (C = t.track) != null ? C : null),
                  ae(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " starting capture loop",
                      ])),
                    u,
                  );
                !_e;
              ) {
                var S = yield v.read(),
                  R = S.done,
                  L = S.value;
                try {
                  if (R || !L) {
                    De(!0);
                    break;
                  }
                  yield m(L);
                } finally {
                  L && L.close();
                }
              }
            } finally {
              if ((Pe(), fe)) {
                var E;
                (E = t.track) == null || E.stop();
              }
              s._free(g);
            }
          } catch (e) {
            ie(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
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
              ie(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exitJsWorkerThread error: ",
                    "",
                  ])),
                u,
                e,
              );
            }
            ae(
              te ||
                (te = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " exit capture worker thread",
                ])),
              u,
            );
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He() {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
          (ae(
            ne || (ne = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            e,
          ),
            De(!0),
            fe && ze(e),
            (be = 1),
            (ve = {
              actualTrackHeight: null,
              actualTrackWidth: null,
              capturePath: o("WAWebVoipMediaEnums").VideoCapturePath.Unknown,
              isBackCamera: !1,
              isScreenShare: !1,
              maxTouchPoints: 0,
              requestedHeight: Ce,
              requestedWidth: Ce,
              screenAngle: null,
              screenType: null,
              sensorOffset: 0,
              videoHeight: null,
              videoWidth: null,
            }),
            Ee.clear(),
            (Se = 0),
            (Re = null),
            ae(
              re ||
                (re = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " completed successfully",
                ])),
              e,
            ));
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e) {
      var t = ye;
      t != null && t.stop();
      var n = he;
      n != null &&
        n.cancel().catch(function (t) {
          ae(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " reader cancel failed: ",
                "",
              ])),
            e,
            String(t),
          );
        });
    }
    ((l.WORKER_LOG = ae),
      (l.WORKER_ERROR = ie),
      (l.CaptureInitState = me),
      (l.WAWebVoipVideoCaptureOffThread = pe),
      (l.updateDeviceOrientationInWorker = Le),
      (l.encodedFrameOrientations = Ee),
      (l.getStopCapture = ke),
      (l.getInterruptCaptureOnStop = Ie),
      (l.updateInterruptCaptureOnStop = Te),
      (l.updateStopCapture = De),
      (l.waitForStopCapture = xe),
      (l.registerActiveCapture = $e),
      (l.clearActiveCapture = Pe),
      (l.getCurrentWorkerOrientation = Ne),
      (l.updateCurrentWorkerOrientation = Me),
      (l.getVideoFrameRotation = Fe),
      (l.getFrameOrientation = Oe),
      (l.registerCaptureAndEncodeFn = We),
      (l.deliverVideoFrameToWorker = qe),
      (l.startVideoCaptureInWorker = Ue),
      (l.stopVideoCaptureInWorker = He));
  },
  98,
);
