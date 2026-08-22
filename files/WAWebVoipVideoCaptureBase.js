__d(
  "WAWebVoipVideoCaptureBase",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebNoop",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoCaptureWebGL",
    "WAWebVoipVideoCaptureWebGPU",
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
      P = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      N = n("$InternalEnum")({
        DEFAULT: 0,
        CANVAS_CPU: 1,
        CANVAS_WEBGL: 2,
        CANVAS_WEBGPU: 3,
        OFF_THREAD_MSTP: 4,
      });
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebVoipVideoCaptureWebGPU",
          ).WAWebVoipVideoCaptureWebGPU.isAvailable();
          return e
            ? (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Using WebGPU for video capture (default selected)",
                  ])),
              ),
              new (o(
                "WAWebVoipVideoCaptureWebGPU",
              ).WAWebVoipVideoCaptureWebGPU)())
            : o(
                  "WAWebVoipVideoCaptureWebGL",
                ).WAWebVoipVideoCaptureWebGL.isAvailable()
              ? (o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Using WebGL for video capture (default selected)",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureWebGL",
                ).WAWebVoipVideoCaptureWebGL)())
              : (o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WebGPU/WebGL unavailable, using Canvas CPU",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)());
        })),
        w.apply(this, arguments)
      );
    }
    var A = (function () {
        function t() {
          var e;
          ((this.name = "base"),
            (this.captureInitState = P.Uninitialized),
            (this.captureInitResolvable = null));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_video_capture_impl",
            ),
            n = (e = N.cast(t)) != null ? e : N.DEFAULT;
          this.captureImplementation =
            n === N.CANVAS_CPU
              ? new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)()
              : n === N.OFF_THREAD_MSTP
                ? new (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).WAWebVoipVideoCaptureOffThread)()
                : n === N.CANVAS_WEBGL
                  ? new (o(
                      "WAWebVoipVideoCaptureWebGL",
                    ).WAWebVoipVideoCaptureWebGL)()
                  : n === N.CANVAS_WEBGPU
                    ? new (o(
                        "WAWebVoipVideoCaptureWebGPU",
                      ).WAWebVoipVideoCaptureWebGPU)()
                    : M();
        }
        var a = t.prototype;
        return (
          (a.__cleanup = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = "voip: cleanupVideoCapture (" + this.name + ")";
              o("WALogger").LOG(
                e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                t,
              );
              try {
                var n = yield this.captureImplementation;
                (yield n.stopVideoCapture(),
                  (this.captureInitState = P.Uninitialized),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: cleanupCapture completed successfully",
                      ])),
                  ));
              } catch (e) {
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " error: ",
                      "",
                    ])),
                  t,
                  e,
                );
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.__startCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  a = e.getMediaStream,
                  i = e.height,
                  l = e.maxFps,
                  s = e.onVideoDataFnType,
                  u = e.width,
                  v = "voip: wasm: [AV:startCapture (" + this.name + ")]";
                o("WALogger").LOG(
                  c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  v,
                );
                var S = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled(),
                  R =
                    S &&
                    o("WAWebABProps").getABPropConfigValue(
                      "enable_webcodec_video_encoder_output_watchdog",
                    );
                if (
                  (this.captureInitState !== P.Uninitialized &&
                    (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " cleaning up existing capture (state=",
                          ")",
                        ])),
                      v,
                      this.captureInitState,
                    ),
                    yield this.__cleanup()),
                  S &&
                    !(
                      this.captureImplementation instanceof
                      o("WAWebVoipVideoCaptureOffThread")
                        .WAWebVoipVideoCaptureOffThread
                    ))
                ) {
                  var L,
                    E,
                    k =
                      this.captureImplementation instanceof
                      ($ || ($ = n("Promise")))
                        ? "pending-async"
                        : (L =
                              (E = this.captureImplementation) == null ||
                              (E = E.constructor) == null
                                ? void 0
                                : E.name) != null
                          ? L
                          : "unknown";
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] capture->OffThread (was ",
                        ")",
                      ])),
                    k,
                  ),
                    (this.captureImplementation = new (o(
                      "WAWebVoipVideoCaptureOffThread",
                    ).WAWebVoipVideoCaptureOffThread)()));
                } else
                  S &&
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [webcodec-encode] reusing existing OffThread instance",
                        ])),
                    );
                var I = new (o("WAResolvable").Resolvable)();
                ((this.captureInitState = P.Initializing),
                  (this.captureInitResolvable = I),
                  I.promise.catch(r("WAWebNoop")));
                var T = null;
                try {
                  var D;
                  if (((T = yield a()), T == null)) throw new F();
                  if (this.captureInitResolvable !== I) {
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " superseded by newer capture, releasing stream",
                        ])),
                      v,
                    );
                    return;
                  }
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got video media stream",
                      ])),
                    v,
                  );
                  var x = yield this.captureImplementation,
                    N = 1e4,
                    M = null,
                    w = x.startVideoCapture({
                      stream: T,
                      onVideoDataFnType: s,
                      width: u,
                      height: i,
                      maxFps: l,
                      enableWebCodecsEncoderOutputWatchdog: R,
                    });
                  (w.catch(r("WAWebNoop")),
                    yield ($ || ($ = n("Promise")))
                      .race([
                        w,
                        new $(function (e, t) {
                          M = self.setTimeout(function () {
                            t(
                              r("err")(
                                "startVideoCapture timed out after " + N + "ms",
                              ),
                            );
                          }, N);
                        }),
                      ])
                      .finally(function () {
                        M != null && self.clearTimeout(M);
                      }),
                    (T = null),
                    (this.captureInitState = P.Ready),
                    (D = this.captureInitResolvable) == null || D.resolve(),
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture prepared successfully",
                        ])),
                      v,
                    ));
                } catch (e) {
                  (e instanceof F
                    ? o("WALogger").LOG(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: wasm: [AV:startCapture (",
                            ")] no media stream acquired",
                          ])),
                        this.name,
                      )
                    : o("WALogger")
                        .ERROR(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " error: ",
                              "",
                            ])),
                          v,
                          e,
                        )
                        .sendLogs(
                          "voip: wasm: error in startVideoCaptureJSImpl",
                        ),
                    (this.captureInitState = P.Error));
                  try {
                    yield this.__cleanup();
                  } finally {
                    I.reject(e);
                  }
                } finally {
                  T != null &&
                    (o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: wasm: [AV:startCapture (",
                          ")] safety net: releasing ",
                          " orphaned track(s)",
                        ])),
                      this.name,
                      T.getTracks().length,
                    ),
                    T.getTracks().forEach(function (e) {
                      (o("WALogger").LOG(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: wasm: [AV:startCapture (",
                            ")] safety net: stopping ",
                            " track (readyState=",
                            ")",
                          ])),
                        t.name,
                        e.kind,
                        e.readyState,
                      ),
                        e.stop());
                    }));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.stopCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e === void 0 && (e = !1);
                var t = "voip: wasm: [AV:stopCapture (" + this.name + ")]";
                if (
                  (o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    t,
                  ),
                  !e &&
                    this.captureInitState === P.Uninitialized &&
                    this.captureInitResolvable == null)
                ) {
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " already stopped, skipping",
                      ])),
                    t,
                  );
                  return;
                }
                try {
                  if (
                    !e &&
                    this.captureInitState !== P.Ready &&
                    this.captureInitState !== P.Error
                  ) {
                    var n;
                    (o("WALogger").WARN(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " invalid initialization. state = ",
                          ". Waiting for init...",
                        ])),
                      t,
                      this.captureInitState,
                    ),
                      yield (n = this.captureInitResolvable) == null
                        ? void 0
                        : n.promise,
                      o("WALogger").LOG(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " init complete. Cleaning up capture",
                          ])),
                        t,
                      ));
                  }
                } catch (e) {
                  if (e instanceof F)
                    o("WALogger").LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: wasm: [AV:stopCapture (",
                          ")] no stream, cleanup",
                        ])),
                      this.name,
                    );
                  else throw e;
                }
                try {
                  (yield this.__cleanup(),
                    (this.captureInitResolvable = null),
                    o("WALogger").LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " completed successfully",
                        ])),
                      t,
                    ));
                } catch (e) {
                  o("WALogger").ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " error: ",
                        "",
                      ])),
                    t,
                    e,
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      F = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((l.CaptureInitState = P), (l.WAWebVoipVideoCaptureBase = A));
  },
  98,
);
