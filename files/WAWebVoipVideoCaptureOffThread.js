__d(
  "WAWebVoipVideoCaptureOffThread",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipVideoFrameConsumedSignal",
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
      U;
    function V(e) {
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
    function H(e) {
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
    var G = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      z = (function () {
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
            (this.$14 = 0));
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
                  var e,
                    t = o("WAWebVoipMediaEnums").computeVideoOrientation(
                      a.$3,
                      D,
                    ),
                    n =
                      (e = globalThis.screen) == null ||
                      (e = e.orientation) == null
                        ? void 0
                        : e.angle;
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
                    String(n),
                    t,
                    a.$3,
                    String(D),
                  ),
                    N.worker.postMessage({
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "updateDeviceOrientation",
                      orientationValue: t,
                    }));
                };
                ((this.$2 = w),
                  window.addEventListener("orientationchange", w));
                try {
                  var A;
                  (A = screen) == null ||
                    (A = A.orientation) == null ||
                    A.addEventListener("change", w);
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
                  var F = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).getAllWebCodecsEncodeParams();
                  for (var O of F) {
                    var B = O[0],
                      W = O[1];
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
                      B,
                      W.targetWidth,
                      W.targetHeight,
                      W.targetBitrateBps,
                      W.targetFps,
                    ),
                      N.worker.postMessage({
                        type: "jsWorkerCmd",
                        jsWorkerCmd: "updateWebCodecsEncodeParams",
                        params: W,
                      }));
                  }
                }
                k && this.$15(v, N, I);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$15 = function (t, n, r) {
            var e,
              a,
              i = this,
              l = "voip: [AV:videoElementCapture]";
            ((this.$7 = !1), (this.$8 = !0));
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
              m = ++this.$14,
              p = function (t) {
                if (
                  !(i.$7 || t !== i.$14) &&
                  (i.$16(c, n), !(i.$7 || t !== i.$14))
                ) {
                  var e = document.visibilityState === "visible",
                    a = o(
                      "WAWebVoipPopoutWindowState",
                    ).getIsPopoutWindowActiveAndVisible(),
                    l = e || a,
                    u = s != null ? a : e;
                  if (r && u)
                    c.requestVideoFrameCallback(function () {
                      return p(t);
                    });
                  else if (l) {
                    var m,
                      _ =
                        a &&
                        (m = o(
                          "WAWebVoipPopoutWindowState",
                        ).getPopoutWindow()) != null
                          ? m
                          : window;
                    _.requestAnimationFrame(function () {
                      return p(t);
                    });
                  } else
                    i.$13 = window.setTimeout(function () {
                      return p(t);
                    }, d);
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
                i.$13 != null && (window.clearTimeout(i.$13), (i.$13 = null)));
              var t = ++i.$14;
              i.$7 || p(t);
            }),
              document.addEventListener("visibilitychange", this.$11),
              (this.$12 = function (e) {
                (o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " popout visibility changed: ",
                      "",
                    ])),
                  l,
                  e,
                ),
                  i.$13 != null &&
                    (window.clearTimeout(i.$13), (i.$13 = null)));
                var t = ++i.$14;
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
          (a.$16 = function (t, n) {
            if (
              this.$8 &&
              !(
                t.readyState < t.HAVE_CURRENT_DATA ||
                t.videoWidth === 0 ||
                t.videoHeight === 0
              )
            )
              try {
                var e = new VideoFrame(t, {
                  timestamp: Math.round(window.performance.now() * 1e3),
                });
                ((this.$8 = !1),
                  n.worker.postMessage(
                    {
                      type: "jsWorkerCmd",
                      jsWorkerCmd: "deliverVideoFrame",
                      frame: e,
                    },
                    [e],
                  ));
              } catch (e) {
                (o("WALogger").ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  T || (T = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
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
      j = !1,
      K = 1;
    function Q(e) {
      (e !== K &&
        V(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [orient] worker orientation changed: ",
              " -> ",
              "",
            ])),
          K,
          e,
        ),
        (K = e));
    }
    var X = !1,
      Y = new Map();
    function J() {
      return j;
    }
    function Z(e) {
      j = e;
    }
    function ee() {
      return K;
    }
    function te(e) {
      K = e;
    }
    function ne(e) {
      var t = e.rotation;
      if (
        (X ||
          ((X = !0),
          V(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [orient] frame.rotation=",
                " currentWorkerOrientation=",
                "",
              ])),
            String(t),
            K,
          )),
        typeof t == "number" && t !== 0)
      ) {
        var n = Math.floor(t / 90) % 4;
        return n + 1;
      }
      return K;
    }
    var re = null;
    function oe(e) {
      re = e;
    }
    function ae(e) {
      var t = re;
      if (t == null) {
        e.close();
        return;
      }
      t(e)
        .catch(function (e) {
          H(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
    function ie(e, t, n, r, o) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                      var u = ne(e);
                      (p < 3 &&
                        (p++,
                        V(
                          M ||
                            (M = babelHelpers.taggedTemplateLiteralLoose([
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
                      H(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
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
              (V(
                P || (P = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                s,
              ),
                (j = !1),
                l != null &&
                  ((K = l),
                  V(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
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
                V(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " got MediaStreamTrackProcessor readable",
                    ])),
                  s,
                );
                var f = _.getReader();
                for (
                  V(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " starting capture loop",
                      ])),
                    s,
                  );
                  !j;
                ) {
                  var g = yield f.read(),
                    h = g.done,
                    y = g.value;
                  try {
                    if (h || !y) {
                      j = !0;
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
              H(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
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
                H(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " exitJsWorkerThread error: ",
                      "",
                    ])),
                  s,
                  e,
                );
              }
              V(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exit capture worker thread",
                  ])),
                s,
              );
            }
          },
        )),
        le.apply(this, arguments)
      );
    }
    function se() {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "voip: wasm: [AV:stopVideoCaptureInWorker]";
          (V(q || (q = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e),
            (j = !0),
            (K = 1),
            Y.clear(),
            (X = !1),
            V(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " completed successfully",
                ])),
              e,
            ));
        })),
        ue.apply(this, arguments)
      );
    }
    ((l.CaptureInitState = G),
      (l.WAWebVoipVideoCaptureOffThread = z),
      (l.updateDeviceOrientationInWorker = Q),
      (l.encodedFrameOrientations = Y),
      (l.getStopCapture = J),
      (l.updateStopCapture = Z),
      (l.getCurrentWorkerOrientation = ee),
      (l.updateCurrentWorkerOrientation = te),
      (l.getFrameOrientation = ne),
      (l.registerCaptureAndEncodeFn = oe),
      (l.deliverVideoFrameToWorker = ae),
      (l.startVideoCaptureInWorker = ie),
      (l.stopVideoCaptureInWorker = se));
  },
  98,
);
