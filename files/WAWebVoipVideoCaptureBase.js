__d(
  "WAWebVoipVideoCaptureBase",
  [
    "$InternalEnum",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebNoop",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoCaptureWebGL",
    "WAWebVoipVideoCaptureWebGPU",
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
      x = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      $ = n("$InternalEnum")({
        DEFAULT: 0,
        CANVAS_CPU: 1,
        CANVAS_WEBGL: 2,
        CANVAS_WEBGPU: 3,
        OFF_THREAD_MSTP: 4,
      });
    async function P() {
      var t = await o(
        "WAWebVoipVideoCaptureWebGPU",
      ).WAWebVoipVideoCaptureWebGPU.isAvailable();
      return t
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Using WebGPU for video capture (default selected)",
              ])),
          ),
          new (o("WAWebVoipVideoCaptureWebGPU").WAWebVoipVideoCaptureWebGPU)())
        : o(
              "WAWebVoipVideoCaptureWebGL",
            ).WAWebVoipVideoCaptureWebGL.isAvailable()
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Using WebGL for video capture (default selected)",
                ])),
            ),
            new (o("WAWebVoipVideoCaptureWebGL").WAWebVoipVideoCaptureWebGL)())
          : (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WebGPU/WebGL unavailable, using Canvas CPU",
                ])),
            ),
            new (o(
              "WAWebVoipVideoCaptureCanvas",
            ).WAWebVoipVideoCaptureCanvas)());
    }
    var N = (function () {
        function e() {
          var e;
          ((this.name = "base"),
            (this.captureInitState = x.Uninitialized),
            (this.captureInitResolvable = null));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_video_capture_impl",
            ),
            n = (e = $.cast(t)) != null ? e : $.DEFAULT;
          this.captureImplementation =
            n === $.CANVAS_CPU
              ? new (o(
                  "WAWebVoipVideoCaptureCanvas",
                ).WAWebVoipVideoCaptureCanvas)()
              : n === $.OFF_THREAD_MSTP
                ? new (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).WAWebVoipVideoCaptureOffThread)()
                : n === $.CANVAS_WEBGL
                  ? new (o(
                      "WAWebVoipVideoCaptureWebGL",
                    ).WAWebVoipVideoCaptureWebGL)()
                  : n === $.CANVAS_WEBGPU
                    ? new (o(
                        "WAWebVoipVideoCaptureWebGPU",
                      ).WAWebVoipVideoCaptureWebGPU)()
                    : P();
        }
        var t = e.prototype;
        return (
          (t.__cleanup = async function () {
            var e = "voip: cleanupVideoCapture (" + this.name + ")";
            o("WALogger").LOG(
              c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              e,
            );
            try {
              var t = await this.captureImplementation;
              (await t.stopVideoCapture(),
                (this.captureInitState = x.Uninitialized),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: cleanupCapture completed successfully",
                    ])),
                ));
            } catch (t) {
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " error: ",
                    "",
                  ])),
                e,
                t,
              );
            }
          }),
          (t.__startCapture = async function (t) {
            var e = this,
              n = t.getMediaStream,
              a = t.height,
              i = t.maxFps,
              l = t.onVideoDataFnType,
              s = t.width,
              u = "voip: wasm: [AV:startCapture (" + this.name + ")]";
            if (
              (o("WALogger").LOG(
                p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                u,
              ),
              this.captureInitState !== x.Uninitialized &&
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaning up existing capture (state=",
                      ")",
                    ])),
                  u,
                  this.captureInitState,
                ),
                await this.__cleanup()),
              o("WAWebVoipWebCodecsEncoderState").isWebCodecsEncoderEnabled())
            ) {
              var c,
                d,
                m =
                  this.captureImplementation instanceof Promise
                    ? "pending-async"
                    : (c =
                          (d = this.captureImplementation) == null ||
                          (d = d.constructor) == null
                            ? void 0
                            : d.name) != null
                      ? c
                      : "unknown";
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [webcodec-encode] capture->OffThread (was ",
                    ")",
                  ])),
                m,
              ),
                (this.captureImplementation = new (o(
                  "WAWebVoipVideoCaptureOffThread",
                ).WAWebVoipVideoCaptureOffThread)()));
            }
            ((this.captureInitState = x.Initializing),
              (this.captureInitResolvable = new (o(
                "WAResolvable",
              ).Resolvable)()),
              this.captureInitResolvable.promise.catch(r("WAWebNoop")));
            var R = this.captureInitResolvable,
              L = null;
            try {
              var E;
              if (((L = await n()), L == null)) throw new M();
              if (this.captureInitResolvable !== R) {
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " superseded by newer capture, releasing stream",
                    ])),
                  u,
                );
                return;
              }
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " got video media stream",
                  ])),
                u,
              );
              var k = await this.captureImplementation,
                I = 1e4,
                T = null,
                D = k.startVideoCapture({
                  stream: L,
                  onVideoDataFnType: l,
                  width: s,
                  height: a,
                  maxFps: i,
                });
              (D.catch(r("WAWebNoop")),
                await Promise.race([
                  D,
                  new Promise(function (e, t) {
                    T = self.setTimeout(function () {
                      t(
                        r("err")(
                          "startVideoCapture timed out after " + I + "ms",
                        ),
                      );
                    }, I);
                  }),
                ]).finally(function () {
                  T != null && self.clearTimeout(T);
                }),
                (L = null),
                (this.captureInitState = x.Ready),
                (E = this.captureInitResolvable) == null || E.resolve(),
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video capture prepared successfully",
                    ])),
                  u,
                ));
            } catch (e) {
              var $;
              (e instanceof M
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
                      u,
                      e,
                    )
                    .sendLogs("voip: wasm: error in startVideoCaptureJSImpl"),
                (this.captureInitState = x.Error),
                ($ = this.captureInitResolvable) == null || $.reject(e),
                await this.__cleanup());
            } finally {
              L != null &&
                (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: wasm: [AV:startCapture (",
                      ")] safety net: releasing ",
                      " orphaned track(s)",
                    ])),
                  this.name,
                  L.getTracks().length,
                ),
                L.getTracks().forEach(function (t) {
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: wasm: [AV:startCapture (",
                        ")] safety net: stopping ",
                        " track (readyState=",
                        ")",
                      ])),
                    e.name,
                    t.kind,
                    t.readyState,
                  ),
                    t.stop());
                }));
            }
          }),
          (t.stopCapture = async function (t) {
            t === void 0 && (t = !1);
            var e = "voip: wasm: [AV:stopCapture (" + this.name + ")]";
            if (
              (o("WALogger").LOG(
                R || (R = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                e,
              ),
              !t &&
                this.captureInitState === x.Uninitialized &&
                this.captureInitResolvable == null)
            ) {
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " already stopped, skipping",
                  ])),
                e,
              );
              return;
            }
            try {
              if (
                !t &&
                this.captureInitState !== x.Ready &&
                this.captureInitState !== x.Error
              ) {
                var n;
                (o("WALogger").WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " invalid initialization. state = ",
                      ". Waiting for init...",
                    ])),
                  e,
                  this.captureInitState,
                ),
                  await ((n = this.captureInitResolvable) == null
                    ? void 0
                    : n.promise),
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " init complete. Cleaning up capture",
                      ])),
                    e,
                  ));
              }
            } catch (e) {
              if (e instanceof M)
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
              (await this.__cleanup(),
                (this.captureInitResolvable = null),
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " completed successfully",
                    ])),
                  e,
                ));
            } catch (t) {
              o("WALogger").ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " error: ",
                    "",
                  ])),
                e,
                t,
              );
            }
          }),
          e
        );
      })(),
      M = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((l.CaptureInitState = x), (l.WAWebVoipVideoCaptureBase = N));
  },
  98,
);
