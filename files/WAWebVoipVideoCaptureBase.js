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
      P,
      N,
      M = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      w = n("$InternalEnum")({
        DEFAULT: 0,
        CANVAS_CPU: 1,
        CANVAS_WEBGL: 2,
        CANVAS_WEBGPU: 3,
        OFF_THREAD_MSTP: 4,
      });
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebVoipVideoCaptureWebGPU",
          ).WAWebVoipVideoCaptureWebGPU.isAvailable();
          return e
            ? (o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Using WebGL for video capture (default selected)",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureWebGL",
                ).WAWebVoipVideoCaptureWebGL)())
              : (o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WebGPU/WebGL unavailable, using Canvas CPU",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)());
        })),
        F.apply(this, arguments)
      );
    }
    var O = (function () {
        function t() {
          var e;
          ((this.name = "base"),
            (this.captureInitState = M.Uninitialized),
            (this.captureInitResolvable = null));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_video_capture_impl",
            ),
            n = (e = w.cast(t)) != null ? e : w.DEFAULT;
          this.captureImplementation =
            n === w.CANVAS_CPU
              ? new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)()
              : n === w.OFF_THREAD_MSTP
                ? new (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).WAWebVoipVideoCaptureOffThread)()
                : n === w.CANVAS_WEBGL
                  ? new (o(
                      "WAWebVoipVideoCaptureWebGL",
                    ).WAWebVoipVideoCaptureWebGL)()
                  : n === w.CANVAS_WEBGPU
                    ? new (o(
                        "WAWebVoipVideoCaptureWebGPU",
                      ).WAWebVoipVideoCaptureWebGPU)()
                    : A();
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
                  (this.captureInitState = M.Uninitialized),
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
                  l = e.isStopped,
                  s = e.maxFps,
                  u = e.onVideoDataFnType,
                  R = e.width,
                  L = "voip: wasm: [AV:startCapture (" + this.name + ")]";
                o("WALogger").LOG(
                  c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  L,
                );
                var E = o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled(),
                  k =
                    E &&
                    o("WAWebABProps").getABPropConfigValue(
                      "enable_webcodec_video_encoder_output_watchdog",
                    );
                if (
                  this.captureInitState !== M.Uninitialized &&
                  (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaning up existing capture (state=",
                        ")",
                      ])),
                    L,
                    this.captureInitState,
                  ),
                  yield this.__cleanup(),
                  (l == null ? void 0 : l()) === !0)
                ) {
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop began during cleanup, not acquiring",
                      ])),
                    L,
                  );
                  return;
                }
                if (
                  E &&
                  !(
                    this.captureImplementation instanceof
                    o("WAWebVoipVideoCaptureOffThread")
                      .WAWebVoipVideoCaptureOffThread
                  )
                ) {
                  var I,
                    T,
                    D =
                      this.captureImplementation instanceof
                      (N || (N = n("Promise")))
                        ? "pending-async"
                        : (I =
                              (T = this.captureImplementation) == null ||
                              (T = T.constructor) == null
                                ? void 0
                                : T.name) != null
                          ? I
                          : "unknown";
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] capture->OffThread (was ",
                        ")",
                      ])),
                    D,
                  ),
                    (this.captureImplementation = new (o(
                      "WAWebVoipVideoCaptureOffThread",
                    ).WAWebVoipVideoCaptureOffThread)()));
                } else
                  E &&
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [webcodec-encode] reusing existing OffThread instance",
                        ])),
                    );
                var x = new (o("WAResolvable").Resolvable)();
                ((this.captureInitState = M.Initializing),
                  (this.captureInitResolvable = x),
                  x.promise.catch(r("WAWebNoop")));
                var $ = null;
                try {
                  var P;
                  if ((($ = yield a()), $ == null)) throw new B();
                  if (this.captureInitResolvable !== x) {
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " superseded by newer capture, releasing stream",
                        ])),
                      L,
                    );
                    return;
                  }
                  if ((l == null ? void 0 : l()) === !0) {
                    (o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " stop began while acquiring, releasing stream",
                        ])),
                      L,
                    ),
                      (this.captureInitState = M.Uninitialized),
                      x.resolve());
                    return;
                  }
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got video media stream",
                      ])),
                    L,
                  );
                  var w = yield this.captureImplementation,
                    A = 1e4,
                    F = null,
                    O = w.startVideoCapture({
                      stream: $,
                      onVideoDataFnType: u,
                      width: R,
                      height: i,
                      maxFps: s,
                      enableWebCodecsEncoderOutputWatchdog: k,
                    });
                  (O.catch(r("WAWebNoop")),
                    yield (N || (N = n("Promise")))
                      .race([
                        O,
                        new N(function (e, t) {
                          F = self.setTimeout(function () {
                            t(
                              r("err")(
                                "startVideoCapture timed out after " + A + "ms",
                              ),
                            );
                          }, A);
                        }),
                      ])
                      .finally(function () {
                        F != null && self.clearTimeout(F);
                      }),
                    ($ = null),
                    (this.captureInitState = M.Ready),
                    (P = this.captureInitResolvable) == null || P.resolve(),
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture prepared successfully",
                        ])),
                      L,
                    ));
                } catch (e) {
                  (e instanceof B
                    ? o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: wasm: [AV:startCapture (",
                            ")] no media stream acquired",
                          ])),
                        this.name,
                      )
                    : o("WALogger")
                        .ERROR(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " error: ",
                              "",
                            ])),
                          L,
                          e,
                        )
                        .sendLogs(
                          "voip: wasm: error in startVideoCaptureJSImpl",
                        ),
                    (this.captureInitState = M.Error));
                  try {
                    yield this.__cleanup();
                  } finally {
                    x.reject(e);
                  }
                } finally {
                  $ != null &&
                    (o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: wasm: [AV:startCapture (",
                          ")] safety net: releasing ",
                          " orphaned track(s)",
                        ])),
                      this.name,
                      $.getTracks().length,
                    ),
                    $.getTracks().forEach(function (e) {
                      (o("WALogger").LOG(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    t,
                  ),
                  !e &&
                    this.captureInitState === M.Uninitialized &&
                    this.captureInitResolvable == null)
                ) {
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
                    this.captureInitState !== M.Ready &&
                    this.captureInitState !== M.Error
                  ) {
                    var n;
                    (o("WALogger").WARN(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
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
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " init complete. Cleaning up capture",
                          ])),
                        t,
                      ));
                  }
                } catch (e) {
                  if (e instanceof B)
                    o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
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
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " completed successfully",
                        ])),
                      t,
                    ));
                } catch (e) {
                  o("WALogger").ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
      B = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((l.CaptureInitState = M), (l.WAWebVoipVideoCaptureBase = O));
  },
  98,
);
