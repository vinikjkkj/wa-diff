__d(
  "WAWebVoipVideoCaptureOffThread",
  [
    "$InternalEnum",
    "WALogger",
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
      G;
    function z(e) {
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
    function j(e) {
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
    var K = "orientation",
      Q = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      X = (function () {
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
                  i = t.height,
                  l = t.maxFps,
                  b = t.onVideoDataFnType,
                  v = t.stream,
                  S = t.width,
                  R = "voip: wasm: [AV:startVideoCapture (offthread)]";
                o("WALogger").LOG(
                  e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  R,
                );
                var L = { width: S, height: i, maxFps: l },
                  E = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled(),
                  k = E,
                  I = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " capture path: webcodecs=",
                      " videoElement=",
                      " rVFC=",
                      " MSTP=",
                      "",
                    ])),
                  R,
                  String(E),
                  String(k),
                  String(I),
                  String(!k && "MediaStreamTrackProcessor" in window),
                ),
                  (this.track = v.getVideoTracks()[0]));
                var T =
                    (n = this.track) == null ||
                    n.getSettings == null ||
                    (n = n.getSettings()) == null
                      ? void 0
                      : n.facingMode,
                  D = T === "environment";
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got video track, facingMode=",
                      "",
                    ])),
                  R,
                  T != null ? T : "unknown",
                );
                var x = null;
                if (k)
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " using video-element capture (WebCodecs)",
                      ])),
                    R,
                  );
                else if ("MediaStreamTrackProcessor" in window) {
                  var $ = this.track;
                  if ($ == null) {
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
                  ((x = {
                    readable: yield new MediaStreamTrackProcessor({ track: $ })
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
                  var P = this.track;
                  if (P == null) {
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
                  ((x = { track: P }), (this.track = null));
                }
                var N = yield r("WAWebVoipJsWorkerThread").create();
                ((this.thread = N),
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
                    String(D),
                  ));
                var M = o("WAWebVoipMediaEnums").computeVideoOrientation(0, D);
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " initial device orientation: ",
                      "",
                    ])),
                  R,
                  M,
                ),
                  N.worker.postMessage(
                    {
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "startVideoCapture",
                      params: L,
                      captureObject: x,
                      onVideoDataFnType: b,
                      useWebCodecsEncoder: E,
                      videoElementCapture: k,
                      initialOrientationValue: M,
                      isScreenShare: b === "onDesktopCaptureDataFromJs",
                    },
                    x != null ? Object.values(x) : [],
                  ),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Sent startVideoCapture message to worker thread",
                      ])),
                    R,
                  ));
                var w = function () {
                  var e = o("WAWebVoipMediaEnums").computeVideoOrientation(
                      a.$3,
                      D,
                    ),
                    t = globalThis.screen,
                    n = t != null ? t[K] : null,
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
                    String(D),
                  ),
                    N.worker.postMessage({
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "updateDeviceOrientation",
                      orientationValue: e,
                    }));
                };
                ((this.$2 = w),
                  window.addEventListener("orientationchange", w));
                try {
                  var A = globalThis.screen,
                    F = A != null ? A[K] : null;
                  F == null || F.addEventListener("change", w);
                } catch (e) {}
                if ((w(), this.$1 != null && this.$1(), E)) {
                  this.$1 = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).subscribeToEncodeParamsChanges(function (e) {
                    N.worker.postMessage({
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "updateWebCodecsEncodeParams",
                      params: e,
                    });
                  });
                  var O = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).getAllWebCodecsEncodeParams();
                  for (var B of O) {
                    var W = B[0],
                      q = B[1];
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
                      W,
                      q.targetWidth,
                      q.targetHeight,
                      q.targetBitrateBps,
                      q.targetFps,
                    ),
                      N.worker.postMessage({
                        type: "jsWorkerCmd",
                        jsWorkerCmd: "updateWebCodecsEncodeParams",
                        params: q,
                      }));
                  }
                }
                k && this.$20(v, N, I);
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
              i = this,
              l = "voip: [AV:videoElementCapture]";
            ((this.$7 = !1),
              (this.$8 = !0),
              (this.$14 = !1),
              (this.$15 = !1),
              (this.$17 = -1),
              (this.$18 = -1));
            var s =
                (e =
                  (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : a.document) != null
                  ? e
                  : null,
              u = s != null ? s : document,
              c = u.createElement("video");
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              l,
              s != null ? "popout" : "main",
            ),
              (c.srcObject = t),
              (c.autoplay = !0),
              (c.muted = !0),
              (c.playsInline = !0),
              (this.$6 = c),
              c.addEventListener(
                "loadedmetadata",
                function () {
                  ((i.$3 = o("WAWebVoipMediaEnums").detectSensorOffset(
                    i.$4,
                    i.$5,
                    c.videoWidth,
                    c.videoHeight,
                  )),
                    o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [orient] sensorOffset cached: ",
                          " track=",
                          "x",
                          " videoEl=",
                          "x",
                          "",
                        ])),
                      i.$3,
                      i.$4,
                      i.$5,
                      c.videoWidth,
                      c.videoHeight,
                    ),
                    i.$2 != null && i.$2());
                },
                { once: !0 },
              ),
              c.addEventListener("resize", function () {
                i.$2 != null && i.$2();
              }),
              this.$9 != null && this.$9(),
              (this.$9 = o(
                "WAWebVoipVideoFrameConsumedSignal",
              ).subscribeToVideoFrameConsumed(function () {
                i.$8 = !0;
              })));
            var d = 33,
              m = ++this.$16,
              p = function (t) {
                if (
                  !(i.$7 || t !== i.$16) &&
                  (i.$21(c, n), !(i.$7 || t !== i.$16))
                ) {
                  var e = document.visibilityState === "visible",
                    a = o(
                      "WAWebVoipPopoutWindowState",
                    ).getIsPopoutWindowActiveAndVisible(),
                    l = e || a,
                    u = s != null ? a : e;
                  if (r && u)
                    c.requestVideoFrameCallback(function (e, n) {
                      var r = n.presentationTime;
                      i.$17 = typeof r == "number" ? r : -1;
                      var o = n.captureTime;
                      ((i.$18 = typeof o == "number" ? o : -1), p(t));
                    });
                  else if (l) {
                    var m;
                    ((i.$17 = -1), (i.$18 = -1));
                    var _ =
                      a &&
                      (m = o("WAWebVoipPopoutWindowState").getPopoutWindow()) !=
                        null
                        ? m
                        : window;
                    _.requestAnimationFrame(function () {
                      return p(t);
                    });
                  } else
                    ((i.$17 = -1),
                      (i.$18 = -1),
                      (i.$13 = window.setTimeout(function () {
                        return p(t);
                      }, d)));
                }
              },
              _ = function () {
                (o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element playing, rVFC=",
                      "",
                    ])),
                  l,
                  String(r),
                ),
                  p(m));
              };
            ((this.$11 = function () {
              var e = document.visibilityState === "visible";
              (o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " visibility changed: ",
                    "",
                  ])),
                l,
                e ? "visible" : "hidden",
              ),
                (i.$17 = -1),
                (i.$18 = -1),
                i.$13 != null && (window.clearTimeout(i.$13), (i.$13 = null)));
              var t = ++i.$16;
              i.$7 || p(t);
            }),
              document.addEventListener("visibilitychange", this.$11),
              (this.$12 = function (e) {
                (o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " popout visibility changed: ",
                      " active=",
                      " hasWindow=",
                      "",
                    ])),
                  l,
                  e.visibilityState,
                  String(e.isCallActiveInPopoutWindow),
                  String(e.hasPopoutWindow),
                ),
                  (i.$17 = -1),
                  (i.$18 = -1),
                  i.$13 != null &&
                    (window.clearTimeout(i.$13), (i.$13 = null)));
                var t = ++i.$16;
                i.$7 || p(t);
              }),
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.on(
                "popoutWindowVisibilityChanged",
                this.$12,
              ),
              c.play().then(_, function (e) {
                (o("WALogger").ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video element play failed, retrying: ",
                      "",
                    ])),
                  l,
                  e,
                ),
                  (i.$10 = window.setTimeout(function () {
                    ((i.$10 = null),
                      !i.$7 &&
                        c.play().then(_, function (e) {
                          o("WALogger").ERROR(
                            k ||
                              (k = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " play retry failed, no frames: ",
                                "",
                              ])),
                            l,
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
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
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
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
                  $ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  e,
                ),
                (this.$7 = !0),
                this.$6 != null &&
                  ((this.$6.srcObject = null), (this.$6 = null)),
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
                    yield n.joinJsWorkerThread());
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
      Y = !1,
      J = 1;
    function Z(e) {
      (e !== J &&
        z(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          J,
          e,
        ),
        (J = e));
    }
    var ee = !1,
      te = new Map();
    function ne() {
      return Y;
    }
    function re(e) {
      Y = e;
    }
    function oe() {
      return J;
    }
    function ae(e) {
      J = e;
    }
    function ie(e) {
      var t = e.rotation;
      if (
        (ee ||
          ((ee = !0),
          z(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [orient] frame.rotation=",
                " currentWorkerOrientation=",
                "",
              ])),
            String(t),
            J,
          )),
        typeof t == "number" && t !== 0)
      ) {
        var n = Math.floor(t / 90) % 4;
        return n + 1;
      }
      return J;
    }
    var le = null;
    function se(e) {
      le = e;
    }
    function ue(e) {
      var t = le;
      if (t == null) {
        e.close();
        return;
      }
      t(e)
        .catch(function (e) {
          j(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
    function ce(e, t, n, r, o) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            var s = "voip: wasm: [AV:startVideoCaptureInWorker]";
            try {
              var u = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var n = o(
                        "WAWebVoipMediaEnums",
                      ).formatEnumFromVideoFrameFormat(e.format);
                      if (
                        n !== o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12
                      ) {
                        var l;
                        throw r("err")(
                          "Unsupported video frame format " +
                            ((l = e.format) != null ? l : "null"),
                        );
                      }
                      var u = ie(e);
                      (p < 3 &&
                        (p++,
                        z(
                          F ||
                            (F = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " [orient] frame#",
                              " orientation=",
                              " frameSize=",
                              "x",
                              "",
                            ])),
                          s,
                          p,
                          u,
                          t.width,
                          t.height,
                        )),
                        yield e.copyTo(m),
                        a.GROWABLE_HEAP_U8().set(m, d),
                        a[i](d, c, t.width, t.height, t.maxFps, n, u),
                        self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                          {
                            userJid: o("WAWebVoipVideoRendererInterface")
                              .selfPreviewJid,
                            frameBuffer: m.buffer,
                            width: t.width,
                            height: t.height,
                            format: n,
                            orientation: u,
                            timestamp: 0,
                            isKeyFrame: !1,
                          },
                        ));
                    } catch (e) {
                      j(
                        O ||
                          (O = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " video processing error: ",
                            "",
                          ])),
                        s,
                        e,
                      );
                    }
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
              (z(
                w || (w = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                s,
              ),
                (Y = !1),
                l != null &&
                  ((J = l),
                  z(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " initial orientation: ",
                        "",
                      ])),
                    s,
                    l,
                  )));
              var c = Math.floor(t.width * t.height * 1.5),
                d = a._malloc(c),
                m = new Uint8Array(c),
                p = 0;
              try {
                var _ =
                  e.readable ||
                  (yield new MediaStreamTrackProcessor({ track: e.track })
                    .readable);
                z(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got MediaStreamTrackProcessor readable",
                    ])),
                  s,
                );
                var f = _.getReader();
                for (
                  z(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " starting capture loop",
                      ])),
                    s,
                  );
                  !Y;
                ) {
                  var g = yield f.read(),
                    h = g.done,
                    y = g.value;
                  try {
                    if (h || !y) {
                      Y = !0;
                      break;
                    }
                    yield u(y);
                  } finally {
                    y && y.close();
                  }
                }
              } finally {
                a._free(d);
              }
            } catch (e) {
              j(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video capture error: ",
                    "",
                  ])),
                s,
                e,
              );
            } finally {
              try {
                a.exitJsWorkerThread();
              } catch (e) {
                j(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " exitJsWorkerThread error: ",
                      "",
                    ])),
                  s,
                  e,
                );
              }
              z(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exit capture worker thread",
                  ])),
                s,
              );
            }
          },
        )),
        de.apply(this, arguments)
      );
    }
    function me() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
          (z(H || (H = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e),
            (Y = !0),
            (J = 1),
            te.clear(),
            (ee = !1),
            z(
              G ||
                (G = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " completed successfully",
                ])),
              e,
            ));
        })),
        pe.apply(this, arguments)
      );
    }
    ((l.CaptureInitState = Q),
      (l.WAWebVoipVideoCaptureOffThread = X),
      (l.updateDeviceOrientationInWorker = Z),
      (l.encodedFrameOrientations = te),
      (l.getStopCapture = ne),
      (l.updateStopCapture = re),
      (l.getCurrentWorkerOrientation = oe),
      (l.updateCurrentWorkerOrientation = ae),
      (l.getFrameOrientation = ie),
      (l.registerCaptureAndEncodeFn = se),
      (l.deliverVideoFrameToWorker = ue),
      (l.startVideoCaptureInWorker = ce),
      (l.stopVideoCaptureInWorker = me));
  },
  98,
);
