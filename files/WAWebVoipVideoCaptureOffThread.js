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
      z;
    function j(e) {
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
    function K(e) {
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
    var Q = "orientation",
      X = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      Y = (function () {
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
        var n = t.prototype;
        return (
          (n.startVideoCapture = async function (n) {
            var t,
              a = this,
              i = n.height,
              l = n.maxFps,
              b = n.onVideoDataFnType,
              v = n.stream,
              S = n.width,
              R = "voip: wasm: [AV:startVideoCapture (offthread)]";
            o("WALogger").LOG(
              e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              R,
            );
            var L = { width: S, height: i, maxFps: l },
              E = o(
                "WAWebVoipWebCodecsEncoderState",
              ).isWebCodecsEncoderEnabled(),
              k = b === "onDesktopCaptureDataFromJs",
              I = E && o("WAWebUA").UA.isSafari && k,
              T = E && !I,
              D = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " capture path: webcodecs=",
                  " videoElement=",
                  " safariScreenShareWorkerMSTP=",
                  " rVFC=",
                  " MSTP=",
                  "",
                ])),
              R,
              String(E),
              String(T),
              String(I),
              String(D),
              String(!T && "MediaStreamTrackProcessor" in window),
            ),
              (this.track = v.getVideoTracks()[0]));
            var x =
                (t = this.track) == null ||
                t.getSettings == null ||
                (t = t.getSettings()) == null
                  ? void 0
                  : t.facingMode,
              $ = x === "environment";
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " got video track, facingMode=",
                  "",
                ])),
              R,
              x != null ? x : "unknown",
            );
            var P = null;
            if (T)
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " using video-element capture (WebCodecs)",
                  ])),
                R,
              );
            else if (!I && "MediaStreamTrackProcessor" in window) {
              var N = this.track;
              if (N == null) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " track is null when creating MediaStreamTrackProcessor",
                      ])),
                    R,
                  )
                  .sendLogs("voip: off-thread: track null for processor");
                return;
              }
              ((P = {
                readable: await new MediaStreamTrackProcessor({ track: N })
                  .readable,
              }),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " (Chrome) got MediaStreamTrackProcessor readable",
                    ])),
                  R,
                ));
            } else {
              var M = this.track;
              if (M == null) {
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " track is null for Safari capture path",
                      ])),
                    R,
                  )
                  .sendLogs("voip: off-thread: track null for safari");
                return;
              }
              ((P = { track: M }), (this.track = null));
            }
            var w = await r("WAWebVoipJsWorkerThread").create();
            ((this.thread = w),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " Created worker thread",
                  ])),
                R,
              ),
              (this.$4 = S),
              (this.$5 = i),
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
                R,
                this.$4,
                this.$5,
                String($),
              ));
            var A = o("WAWebVoipMediaEnums").computeVideoOrientation(0, $);
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " initial device orientation: ",
                  "",
                ])),
              R,
              A,
            ),
              w.worker.postMessage(
                {
                  type: "jsWorkerCmd",
                  jsWorkerCmd: "startVideoCapture",
                  params: L,
                  captureObject: P,
                  onVideoDataFnType: b,
                  useWebCodecsEncoder: E,
                  videoElementCapture: T,
                  initialOrientationValue: A,
                  isScreenShare: k,
                },
                P != null ? Object.values(P) : [],
              ),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " Sent startVideoCapture message to worker thread",
                  ])),
                R,
              ));
            var F = function () {
              var e = o("WAWebVoipMediaEnums").computeVideoOrientation(a.$3, $),
                t = globalThis.screen,
                n = t != null ? t[Q] : null,
                r = n == null ? void 0 : n.angle;
              (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " [orient] screenAngle=",
                    " sent=",
                    " sensorOffset=",
                    " isBackCamera=",
                    "",
                  ])),
                R,
                String(r),
                e,
                a.$3,
                String($),
              ),
                w.worker.postMessage({
                  type: "jsWorkerCmd",
                  jsWorkerCmd: "updateDeviceOrientation",
                  orientationValue: e,
                }));
            };
            ((this.$2 = F), window.addEventListener("orientationchange", F));
            try {
              var O = globalThis.screen,
                B = O != null ? O[Q] : null;
              B == null || B.addEventListener("change", F);
            } catch (e) {}
            if ((F(), this.$1 != null && this.$1(), E)) {
              this.$1 = o(
                "WAWebVoipWebCodecsEncoderState",
              ).subscribeToEncodeParamsChanges(function (e) {
                w.worker.postMessage({
                  type: "jsWorkerCmd",
                  jsWorkerCmd: "updateWebCodecsEncodeParams",
                  params: e,
                });
              });
              var W = o(
                "WAWebVoipWebCodecsEncoderState",
              ).getAllWebCodecsEncodeParams();
              for (var q of W) {
                var U = q[0],
                  V = q[1];
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
                  R,
                  U,
                  V.targetWidth,
                  V.targetHeight,
                  V.targetBitrateBps,
                  V.targetFps,
                ),
                  w.worker.postMessage({
                    type: "jsWorkerCmd",
                    jsWorkerCmd: "updateWebCodecsEncodeParams",
                    params: V,
                  }));
              }
            }
            T && this.$20(v, w, D);
          }),
          (n.$20 = function (t, n, r) {
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
                  ((l.$3 = o("WAWebVoipMediaEnums").detectSensorOffset(
                    l.$4,
                    l.$5,
                    d.videoWidth,
                    d.videoHeight,
                  )),
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
          (n.$21 = function (t, n) {
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
          (n.stopVideoCapture = async function () {
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
                  await n.joinJsWorkerThread());
              }
            } finally {
              this.track != null && (this.track.stop(), (this.track = null));
            }
          }),
          t
        );
      })(),
      J = !1,
      Z = 1;
    function ee(e) {
      (e !== Z &&
        j(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          Z,
          e,
        ),
        (Z = e));
    }
    var te = !1,
      ne = new Map();
    function re() {
      return J;
    }
    function oe(e) {
      J = e;
    }
    function ae() {
      return Z;
    }
    function ie(e) {
      Z = e;
    }
    function le(e) {
      var t = e.rotation;
      if (
        (te ||
          ((te = !0),
          j(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [orient] frame.rotation=",
                " currentWorkerOrientation=",
                "",
              ])),
            String(t),
            Z,
          )),
        typeof t == "number" && t !== 0)
      ) {
        var n = Math.floor(t / 90) % 4;
        return n + 1;
      }
      return Z;
    }
    var se = null;
    function ue(e) {
      se = e;
    }
    function ce(e) {
      var t = se;
      if (t == null) {
        e.close();
        return;
      }
      t(e)
        .catch(function (e) {
          K(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
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
    async function de(e, t, n, a, i) {
      var l = "voip: wasm: [AV:startVideoCaptureInWorker]";
      try {
        var s = async function (i) {
          try {
            var e = o("WAWebVoipMediaEnums").formatEnumFromVideoFrameFormat(
              i.format,
            );
            if (e !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12) {
              var s;
              throw r("err")(
                "Unsupported video frame format " +
                  ((s = i.format) != null ? s : "null"),
              );
            }
            var p = le(i);
            (m < 3 &&
              (m++,
              j(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " [orient] frame#",
                    " orientation=",
                    " frameSize=",
                    "x",
                    "",
                  ])),
                l,
                m,
                p,
                t.width,
                t.height,
              )),
              await i.copyTo(d),
              n.GROWABLE_HEAP_U8().set(d, c),
              n[a](c, u, t.width, t.height, t.maxFps, e, p),
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                {
                  userJid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                  frameBuffer: d.buffer,
                  width: t.width,
                  height: t.height,
                  format: e,
                  orientation: p,
                  timestamp: 0,
                  isKeyFrame: !1,
                },
              ));
          } catch (e) {
            K(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video processing error: ",
                  "",
                ])),
              l,
              e,
            );
          }
        };
        (j(A || (A = babelHelpers.taggedTemplateLiteralLoose(["", ""])), l),
          (J = !1),
          i != null &&
            ((Z = i),
            j(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " initial orientation: ",
                  "",
                ])),
              l,
              i,
            )));
        var u = Math.floor(t.width * t.height * 1.5),
          c = n._malloc(u),
          d = new Uint8Array(u),
          m = 0;
        try {
          var p =
            e.readable ||
            (await new MediaStreamTrackProcessor({ track: e.track }).readable);
          j(
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " got MediaStreamTrackProcessor readable",
              ])),
            l,
          );
          var _ = p.getReader();
          for (
            j(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " starting capture loop",
                ])),
              l,
            );
            !J;
          ) {
            var f = await _.read(),
              g = f.done,
              h = f.value;
            try {
              if (g || !h) {
                J = !0;
                break;
              }
              await s(h);
            } finally {
              h && h.close();
            }
          }
        } finally {
          n._free(c);
        }
      } catch (e) {
        K(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " video capture error: ",
              "",
            ])),
          l,
          e,
        );
      } finally {
        try {
          n.exitJsWorkerThread();
        } catch (e) {
          K(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " exitJsWorkerThread error: ",
                "",
              ])),
            l,
            e,
          );
        }
        j(
          H ||
            (H = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " exit capture worker thread",
            ])),
          l,
        );
      }
    }
    async function me() {
      var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
      (j(G || (G = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e),
        (J = !0),
        (Z = 1),
        ne.clear(),
        (te = !1),
        j(
          z ||
            (z = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " completed successfully",
            ])),
          e,
        ));
    }
    ((l.CaptureInitState = X),
      (l.WAWebVoipVideoCaptureOffThread = Y),
      (l.updateDeviceOrientationInWorker = ee),
      (l.encodedFrameOrientations = ne),
      (l.getStopCapture = re),
      (l.updateStopCapture = oe),
      (l.getCurrentWorkerOrientation = ae),
      (l.updateCurrentWorkerOrientation = ie),
      (l.getFrameOrientation = le),
      (l.registerCaptureAndEncodeFn = ue),
      (l.deliverVideoFrameToWorker = ce),
      (l.startVideoCaptureInWorker = de),
      (l.stopVideoCaptureInWorker = me));
  },
  98,
);
