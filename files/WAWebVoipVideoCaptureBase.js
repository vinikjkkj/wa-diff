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
      D = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      x = n("$InternalEnum")({
        DEFAULT: 0,
        CANVAS_CPU: 1,
        CANVAS_WEBGL: 2,
        CANVAS_WEBGPU: 3,
        OFF_THREAD_MSTP: 4,
      });
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebVoipVideoCaptureWebGPU",
          ).WAWebVoipVideoCaptureWebGPU.isAvailable();
          return e
            ? (o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Using WebGL for video capture (default selected)",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureWebGL",
                ).WAWebVoipVideoCaptureWebGL)())
              : (o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WebGPU/WebGL unavailable, using Canvas CPU",
                    ])),
                ),
                new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)());
        })),
        P.apply(this, arguments)
      );
    }
    var N = (function () {
        function t() {
          var e;
          ((this.name = "base"),
            (this.captureInitState = D.Uninitialized),
            (this.captureInitResolvable = null));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_video_capture_impl",
            ),
            n = (e = x.cast(t)) != null ? e : x.DEFAULT;
          this.captureImplementation =
            n === x.CANVAS_CPU
              ? new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)()
              : n === x.OFF_THREAD_MSTP
                ? new (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).WAWebVoipVideoCaptureOffThread)()
                : n === x.CANVAS_WEBGL
                  ? new (o(
                      "WAWebVoipVideoCaptureWebGL",
                    ).WAWebVoipVideoCaptureWebGL)()
                  : n === x.CANVAS_WEBGPU
                    ? new (o(
                        "WAWebVoipVideoCaptureWebGPU",
                      ).WAWebVoipVideoCaptureWebGPU)()
                    : $();
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
                  (this.captureInitState = D.Uninitialized),
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
                var t = e.getMediaStream,
                  a = e.height,
                  i = e.maxFps,
                  l = e.onVideoDataFnType,
                  s = e.width,
                  u = "voip: wasm: [AV:startCapture (" + this.name + ")]";
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    u,
                  ),
                  this.captureInitState !== D.Uninitialized &&
                    (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " cleaning up existing capture (state=",
                          ")",
                        ])),
                      u,
                      this.captureInitState,
                    ),
                    yield this.__cleanup()),
                  o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).isWebCodecsEncoderEnabled())
                ) {
                  var y,
                    C,
                    b =
                      this.captureImplementation instanceof
                      (T || (T = n("Promise")))
                        ? "pending-async"
                        : (y =
                              (C = this.captureImplementation) == null ||
                              (C = C.constructor) == null
                                ? void 0
                                : C.name) != null
                          ? y
                          : "unknown";
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] capture->OffThread (was ",
                        ")",
                      ])),
                    b,
                  ),
                    (this.captureImplementation = new (o(
                      "WAWebVoipVideoCaptureOffThread",
                    ).WAWebVoipVideoCaptureOffThread)()));
                }
                ((this.captureInitState = D.Initializing),
                  (this.captureInitResolvable = new (o(
                    "WAResolvable",
                  ).Resolvable)()),
                  this.captureInitResolvable.promise.catch(r("WAWebNoop")));
                var v = this.captureInitResolvable,
                  S = null;
                try {
                  var R;
                  if (((S = yield t()), S == null)) throw new M();
                  if (this.captureInitResolvable !== v) {
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " superseded by newer capture, releasing stream",
                        ])),
                      u,
                    );
                    return;
                  }
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got video media stream",
                      ])),
                    u,
                  );
                  var L = yield this.captureImplementation;
                  (yield L.startVideoCapture({
                    stream: S,
                    onVideoDataFnType: l,
                    width: s,
                    height: a,
                    maxFps: i,
                  }),
                    (S = null),
                    (this.captureInitState = D.Ready),
                    (R = this.captureInitResolvable) == null || R.resolve(),
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture prepared successfully",
                        ])),
                      u,
                    ));
                } catch (e) {
                  var E;
                  (e instanceof M
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
                          u,
                          e,
                        )
                        .sendLogs(
                          "voip: wasm: error in startVideoCaptureJSImpl",
                        ),
                    (this.captureInitState = D.Error),
                    (E = this.captureInitResolvable) == null || E.reject(e),
                    yield this.__cleanup());
                } finally {
                  S != null &&
                    S.getTracks().forEach(function (e) {
                      return e.stop();
                    });
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
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    t,
                  ),
                  !e &&
                    this.captureInitState === D.Uninitialized &&
                    this.captureInitResolvable == null)
                ) {
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
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
                    this.captureInitState !== D.Ready &&
                    this.captureInitState !== D.Error
                  ) {
                    var n;
                    (o("WALogger").WARN(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " init complete. Cleaning up capture",
                          ])),
                        t,
                      ));
                  }
                } catch (e) {
                  if (e instanceof M)
                    o("WALogger").LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " completed successfully",
                        ])),
                      t,
                    ));
                } catch (e) {
                  o("WALogger").ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
      M = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((l.CaptureInitState = D), (l.WAWebVoipVideoCaptureBase = N));
  },
  98,
);
