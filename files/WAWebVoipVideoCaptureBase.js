__d(
  "WAWebVoipVideoCaptureBase",
  [
    "$InternalEnum",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebNoop",
    "WAWebVoipJsWorkerCreation",
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
      x,
      $,
      P,
      N = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error",
      ]),
      M = n("$InternalEnum")({
        DEFAULT: 0,
        CANVAS_CPU: 1,
        CANVAS_WEBGL: 2,
        CANVAS_WEBGPU: 3,
        OFF_THREAD_MSTP: 4,
      });
    async function w() {
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
    var A = (function () {
      function e() {
        var e;
        ((this.name = "base"),
          (this.captureInitState = N.Uninitialized),
          (this.captureInitResolvable = null));
        var t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_capture_impl",
          ),
          n = (e = M.cast(t)) != null ? e : M.DEFAULT;
        this.captureImplementation =
          n === M.CANVAS_CPU
            ? new (o(
                "WAWebVoipVideoCaptureCanvas",
              ).WAWebVoipVideoCaptureCanvas)()
            : n === M.OFF_THREAD_MSTP
              ? new (o(
                  "WAWebVoipVideoCaptureOffThread",
                ).WAWebVoipVideoCaptureOffThread)(F)
              : n === M.CANVAS_WEBGL
                ? new (o(
                    "WAWebVoipVideoCaptureWebGL",
                  ).WAWebVoipVideoCaptureWebGL)()
                : n === M.CANVAS_WEBGPU
                  ? new (o(
                      "WAWebVoipVideoCaptureWebGPU",
                    ).WAWebVoipVideoCaptureWebGPU)()
                  : w();
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
              (this.captureInitState = N.Uninitialized),
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
            i = t.isStopped,
            l = t.maxFps,
            s = t.onVideoDataFnType,
            u = t.videoFrameProcessor,
            c = t.width,
            d = "voip: wasm: [AV:startCapture (" + this.name + ")]";
          o("WALogger").LOG(
            p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            d,
          );
          var m = o(
              "WAWebVoipWebCodecsEncoderState",
            ).isWebCodecsEncoderEnabled(),
            k =
              m &&
              o("WAWebABProps").getABPropConfigValue(
                "enable_webcodec_video_encoder_output_watchdog",
              );
          if (
            this.captureInitState !== N.Uninitialized &&
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " cleaning up existing capture (state=",
                  ")",
                ])),
              d,
              this.captureInitState,
            ),
            await this.__cleanup(),
            (i == null ? void 0 : i()) === !0)
          ) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " stop began during cleanup, not acquiring",
                ])),
              d,
            );
            return;
          }
          if (
            m &&
            !(
              this.captureImplementation instanceof
              o("WAWebVoipVideoCaptureOffThread").WAWebVoipVideoCaptureOffThread
            )
          ) {
            var I,
              T,
              D =
                this.captureImplementation instanceof Promise
                  ? "pending-async"
                  : (I =
                        (T = this.captureImplementation) == null ||
                        (T = T.constructor) == null
                          ? void 0
                          : T.name) != null
                    ? I
                    : "unknown";
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [webcodec-encode] capture->OffThread (was ",
                  ")",
                ])),
              D,
            ),
              (this.captureImplementation = new (o(
                "WAWebVoipVideoCaptureOffThread",
              ).WAWebVoipVideoCaptureOffThread)(F)));
          } else
            m &&
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [webcodec-encode] reusing existing OffThread instance",
                  ])),
              );
          var x = new (o("WAResolvable").Resolvable)();
          ((this.captureInitState = N.Initializing),
            (this.captureInitResolvable = x),
            x.promise.catch(r("WAWebNoop")));
          var $ = null;
          try {
            var P;
            if ((($ = await n()), $ == null)) throw new O();
            if (this.captureInitResolvable !== x) {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " superseded by newer capture, releasing stream",
                  ])),
                d,
              );
              return;
            }
            if ((i == null ? void 0 : i()) === !0) {
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " stop began while acquiring, releasing stream",
                  ])),
                d,
              ),
                (this.captureInitState = N.Uninitialized),
                x.resolve());
              return;
            }
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " got video media stream",
                ])),
              d,
            );
            var M = await this.captureImplementation,
              w = 1e4,
              A = null,
              B = M.startVideoCapture({
                stream: $,
                onVideoDataFnType: s,
                width: c,
                height: a,
                maxFps: l,
                enableWebCodecsEncoderOutputWatchdog: k,
                videoFrameProcessor: u,
              });
            (B.catch(r("WAWebNoop")),
              await Promise.race([
                B,
                new Promise(function (e, t) {
                  A = self.setTimeout(function () {
                    t(
                      r("err")("startVideoCapture timed out after " + w + "ms"),
                    );
                  }, w);
                }),
              ]).finally(function () {
                A != null && self.clearTimeout(A);
              }),
              ($ = null),
              (this.captureInitState = N.Ready),
              (P = this.captureInitResolvable) == null || P.resolve(),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video capture prepared successfully",
                  ])),
                d,
              ));
          } catch (e) {
            (e instanceof O
              ? o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: wasm: [AV:startCapture (",
                      ")] no media stream acquired",
                    ])),
                  this.name,
                )
              : o("WALogger")
                  .ERROR(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " error: ",
                        "",
                      ])),
                    d,
                    e,
                  )
                  .sendLogs("voip: wasm: error in startVideoCaptureJSImpl"),
              (this.captureInitState = N.Error));
            try {
              await this.__cleanup();
            } finally {
              x.reject(e);
            }
          } finally {
            $ != null &&
              (o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: [AV:startCapture (",
                    ")] safety net: releasing ",
                    " orphaned track(s)",
                  ])),
                this.name,
                $.getTracks().length,
              ),
              $.getTracks().forEach(function (t) {
                (o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
              k || (k = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              e,
            ),
            !t &&
              this.captureInitState === N.Uninitialized &&
              this.captureInitResolvable == null)
          ) {
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
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
              this.captureInitState !== N.Ready &&
              this.captureInitState !== N.Error
            ) {
              var n;
              (o("WALogger").WARN(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " init complete. Cleaning up capture",
                    ])),
                  e,
                ));
            }
          } catch (e) {
            if (e instanceof O)
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " completed successfully",
                  ])),
                e,
              ));
          } catch (t) {
            o("WALogger").ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
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
    })();
    function F() {
      return o("WAWebVoipJsWorkerCreation").readJsWorkerCreateContext(
        "video_capture",
      );
    }
    var O = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    ((l.CaptureInitState = N), (l.WAWebVoipVideoCaptureBase = A));
  },
  98,
);
