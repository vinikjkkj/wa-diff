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
      $ = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      P = n("$InternalEnum")({
        DEFAULT: 0,
        CANVAS_CPU: 1,
        CANVAS_WEBGL: 2,
        CANVAS_WEBGPU: 3,
        OFF_THREAD_MSTP: 4,
      });
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebVoipVideoCaptureWebGPU",
          ).WAWebVoipVideoCaptureWebGPU.isAvailable();
          return e
            ? (o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Using WebGL for video capture (default selected)",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureWebGL",
                ).WAWebVoipVideoCaptureWebGL)())
              : (o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WebGPU/WebGL unavailable, using Canvas CPU",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)());
        })),
        M.apply(this, arguments)
      );
    }
    var w = (function () {
        function t() {
          var e;
          ((this.name = "base"),
            (this.captureInitState = $.Uninitialized),
            (this.captureInitResolvable = null));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_video_capture_impl",
            ),
            n = (e = P.cast(t)) != null ? e : P.DEFAULT;
          this.captureImplementation =
            n === P.CANVAS_CPU
              ? new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)()
              : n === P.OFF_THREAD_MSTP
                ? new (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).WAWebVoipVideoCaptureOffThread)()
                : n === P.CANVAS_WEBGL
                  ? new (o(
                      "WAWebVoipVideoCaptureWebGL",
                    ).WAWebVoipVideoCaptureWebGL)()
                  : n === P.CANVAS_WEBGPU
                    ? new (o(
                        "WAWebVoipVideoCaptureWebGPU",
                      ).WAWebVoipVideoCaptureWebGPU)()
                    : N();
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
                  (this.captureInitState = $.Uninitialized),
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
                  b = "voip: wasm: [AV:startCapture (" + this.name + ")]";
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    b,
                  ),
                  this.captureInitState !== $.Uninitialized &&
                    (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " cleaning up existing capture (state=",
                          ")",
                        ])),
                      b,
                      this.captureInitState,
                    ),
                    yield this.__cleanup()),
                  o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled())
                ) {
                  var v,
                    S,
                    R =
                      this.captureImplementation instanceof
                      (x || (x = n("Promise")))
                        ? "pending-async"
                        : (v =
                              (S = this.captureImplementation) == null ||
                              (S = S.constructor) == null
                                ? void 0
                                : S.name) != null
                          ? v
                          : "unknown";
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] capture->OffThread (was ",
                        ")",
                      ])),
                    R,
                  ),
                    (this.captureImplementation = new (o(
                      "WAWebVoipVideoCaptureOffThread",
                    ).WAWebVoipVideoCaptureOffThread)()));
                }
                ((this.captureInitState = $.Initializing),
                  (this.captureInitResolvable = new (o(
                    "WAResolvable",
                  ).Resolvable)()),
                  this.captureInitResolvable.promise.catch(r("WAWebNoop")));
                var L = this.captureInitResolvable,
                  E = null;
                try {
                  var k;
                  if (((E = yield a()), E == null)) throw new A();
                  if (this.captureInitResolvable !== L) {
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " superseded by newer capture, releasing stream",
                        ])),
                      b,
                    );
                    return;
                  }
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got video media stream",
                      ])),
                    b,
                  );
                  var I = yield this.captureImplementation,
                    T = 1e4,
                    D = null,
                    P = I.startVideoCapture({
                      stream: E,
                      onVideoDataFnType: s,
                      width: u,
                      height: i,
                      maxFps: l,
                    });
                  (P.catch(r("WAWebNoop")),
                    yield (x || (x = n("Promise")))
                      .race([
                        P,
                        new x(function (e, t) {
                          D = self.setTimeout(function () {
                            t(
                              r("err")(
                                "startVideoCapture timed out after " + T + "ms",
                              ),
                            );
                          }, T);
                        }),
                      ])
                      .finally(function () {
                        D != null && self.clearTimeout(D);
                      }),
                    (E = null),
                    (this.captureInitState = $.Ready),
                    (k = this.captureInitResolvable) == null || k.resolve(),
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture prepared successfully",
                        ])),
                      b,
                    ));
                } catch (e) {
                  var N;
                  (e instanceof A
                    ? o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: wasm: [AV:startCapture (",
                            ")] no media stream acquired",
                          ])),
                        this.name,
                      )
                    : o("WALogger")
                        .ERROR(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " error: ",
                              "",
                            ])),
                          b,
                          e,
                        )
                        .sendLogs(
                          "voip: wasm: error in startVideoCaptureJSImpl",
                        ),
                    (this.captureInitState = $.Error),
                    (N = this.captureInitResolvable) == null || N.reject(e),
                    yield this.__cleanup());
                } finally {
                  E != null &&
                    (o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: wasm: [AV:startCapture (",
                          ")] safety net: releasing ",
                          " orphaned track(s)",
                        ])),
                      this.name,
                      E.getTracks().length,
                    ),
                    E.getTracks().forEach(function (e) {
                      (o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
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
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    t,
                  ),
                  !e &&
                    this.captureInitState === $.Uninitialized &&
                    this.captureInitResolvable == null)
                ) {
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
                    this.captureInitState !== $.Ready &&
                    this.captureInitState !== $.Error
                  ) {
                    var n;
                    (o("WALogger").WARN(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " init complete. Cleaning up capture",
                          ])),
                        t,
                      ));
                  }
                } catch (e) {
                  if (e instanceof A)
                    o("WALogger").LOG(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
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
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " completed successfully",
                        ])),
                      t,
                    ));
                } catch (e) {
                  o("WALogger").ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
      A = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((l.CaptureInitState = $), (l.WAWebVoipVideoCaptureBase = w));
  },
  98,
);
