__d(
  "WAWebVoipVideoCaptureWithConverter",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
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
      G = 3,
      z = 15,
      j = 30,
      K = 2,
      Q = 0.9;
    function X(e) {
      return e - (e % 2);
    }
    var Y = (function () {
      function t() {
        ((this.converter = null),
          (this.mediaCaptureStream = null),
          (this.animationFrameId = null),
          (this.animationFrameWindow = null),
          (this.timeoutFrameId = null),
          (this.timeoutFrameWindow = null),
          (this.visibilityChangeListener = null),
          (this.popoutVisibilityChangeListener = null),
          (this.videoBuffer = null),
          (this.videoBufferSize = 0),
          (this.$1 = !1),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.isStopped = !1),
          (this.isCaptureInProgress = !1),
          (this.primaryConverter = null),
          (this.fallbackConverter = null),
          (this.converterSwitchInProgress = !1),
          (this.numReconcileRequested = 0),
          (this.usingFallback = !1),
          (this.width = 0),
          (this.height = 0),
          (this.lastCaptureTime = 0),
          (this.consecutiveErrors = 0));
      }
      var a = t.prototype;
      return (
        (a.handleCaptureError = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r, a) {
              if (
                (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " video processing error: ",
                      "",
                    ])),
                  n,
                  t,
                ),
                this.consecutiveErrors++,
                this.consecutiveErrors >= G && !this.isStopped)
              ) {
                var i = yield this.attemptFallbackRecovery(n);
                i && r(a);
                return;
              }
              !this.isStopped &&
                this.mediaCaptureStream != null &&
                this.converter != null &&
                r(a);
            },
          );
          function r(e, n, r, o) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.attemptFallbackRecovery = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (this.usingFallback)
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " already on fallback converter, stopping capture loop",
                    ])),
                  e,
                ),
                (this.isStopped = !0),
                !1
              );
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " ",
                  " consecutive errors, attempting fallback converter",
                ])),
              e,
              this.consecutiveErrors,
            );
            var t = this.converter;
            try {
              var a =
                this.fallbackConverter != null && this.fallbackConverter !== t
                  ? this.fallbackConverter
                  : yield this.createFallbackConverter(this.width, this.height);
              if (a != null)
                return this.isStopped
                  ? (a !== this.fallbackConverter &&
                      (H || (H = n("Promise")))
                        .resolve(a.cleanup())
                        .catch(r("WAWebNoop")),
                    !1)
                  : ((this.converter = a),
                    (this.primaryConverter = null),
                    (this.usingFallback = !0),
                    this.fallbackConverter != null &&
                      this.fallbackConverter !== a &&
                      (H || (H = n("Promise")))
                        .resolve(this.fallbackConverter.cleanup())
                        .catch(r("WAWebNoop")),
                    (this.fallbackConverter = null),
                    (this.consecutiveErrors = 0),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " switched to fallback converter: ",
                          "",
                        ])),
                      e,
                      a.getConverterName(),
                    ),
                    t != null &&
                      (H || (H = n("Promise")))
                        .resolve(t.cleanup())
                        .catch(function (t) {
                          o("WALogger").WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " old converter cleanup error: ",
                                "",
                              ])),
                            e,
                            t,
                          );
                        }),
                    !0);
            } catch (t) {
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " fallback converter creation failed: ",
                    "",
                  ])),
                e,
                t,
              );
            }
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " no fallback available, stopping capture loop",
                  ])),
                e,
              ),
              (this.isStopped = !0),
              !1
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.createConverter = function (t, n) {
          throw r("err")("createConverter not implemented by subclass");
        }),
        (a.clearScheduledCapture = function () {
          if (this.animationFrameId != null) {
            var e;
            (((e = this.animationFrameWindow) != null
              ? e
              : window
            ).cancelAnimationFrame(this.animationFrameId),
              (this.animationFrameId = null),
              (this.animationFrameWindow = null));
          }
          if (this.timeoutFrameId != null) {
            var t;
            (((t = this.timeoutFrameWindow) != null ? t : window).clearTimeout(
              this.timeoutFrameId,
            ),
              (this.timeoutFrameId = null),
              (this.timeoutFrameWindow = null));
          }
        }),
        (a.getCaptureSchedulerWindow = function () {
          var e;
          return o(
            "WAWebVoipPopoutWindowState",
          ).getIsPopoutWindowActiveAndVisible() &&
            (e = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null
            ? e
            : window;
        }),
        (a.shouldScheduleWithAnimationFrame = function (t) {
          if (t === window) return document.visibilityState === "visible";
          try {
            return t.document.visibilityState === "visible";
          } catch (e) {
            return !1;
          }
        }),
        (a.createFallbackConverter = function (t, n) {
          return null;
        }),
        (a.ensureVideoBufferCapacity = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (this.videoBuffer != null && this.videoBufferSize >= e)
                return !0;
              var n = this.videoBuffer,
                r = this.videoBufferSize;
              ((this.videoBuffer = null),
                (this.videoBufferSize = 0),
                n != null && (yield ee(n)));
              var a = yield J(e);
              return this.isStopped
                ? (yield ee(a), !1)
                : ((this.videoBuffer = a),
                  (this.videoBufferSize = e),
                  r > 0 &&
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " resized WASM video buffer ",
                          " -> ",
                          "",
                        ])),
                      t,
                      r,
                      e,
                    ),
                  !0);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.__initVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.height,
              r = e.width;
            ((this.width = X(r)), (this.height = X(t)));
            var a = [];
            (this.converter && a.push(this.converter.cleanup()),
              this.fallbackConverter &&
                a.push(this.fallbackConverter.cleanup()),
              yield (H || (H = n("Promise"))).all(a));
            var i,
              l = !1;
            try {
              i = yield this.createConverter(this.width, this.height);
            } catch (e) {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                    "",
                  ])),
                e,
              );
              var s = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              if (s != null)
                ((i = s),
                  (l = !0),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initVideoCapture] Using fallback converter: ",
                        "",
                      ])),
                    i.getConverterName(),
                  ));
              else throw e;
            }
            if (this.isStopped) {
              yield i.cleanup();
              return;
            }
            if (
              ((this.converter = i),
              (this.primaryConverter = i),
              o("WAWebUA").UA.isSafari && !l)
            ) {
              var u = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              u != null && (this.fallbackConverter = u);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.startVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var a,
              i,
              l,
              s = this,
              u,
              c,
              d = e.height,
              m = e.maxFps,
              p = e.onVideoDataFnType,
              _ = e.stream,
              f = e.width;
            ((this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.consecutiveErrors = 0),
              (this.usingFallback = !1),
              (this.$2 = 0),
              (this.$3 = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              yield this.__initVideoCapture({ width: f, height: d }));
            var g = _.getVideoTracks()[0],
              I =
                g == null ||
                g.getSettings == null ||
                (a = g.getSettings()) == null
                  ? void 0
                  : a.facingMode;
            this.$1 = I === "environment";
            var T = f,
              D = d,
              x = r("nullthrows")(this.converter).getConverterName(),
              $ = "voip: [AV:startVideoCapture (" + x + ")]";
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " facingMode=",
                  "",
                ])),
              $,
              I != null ? I : "unknown",
            );
            var P =
                (i =
                  (l = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : l.document) != null
                  ? i
                  : null,
              N = P != null ? P : document;
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              $,
              P != null ? "popout" : "main",
            ),
              (this.mediaCaptureStream = {
                mediaStream: _,
                videoElement: N.createElement("video"),
              }));
            var M = this.mediaCaptureStream.videoElement;
            if (
              ((M.srcObject = _),
              (M.autoplay = !0),
              (M.muted = !0),
              (M.playsInline = !0),
              M.addEventListener(
                "loadedmetadata",
                function () {
                  ((s.$2 = o("WAWebVoipMediaEnums").detectSensorOffset(
                    T,
                    D,
                    M.videoWidth,
                    M.videoHeight,
                  )),
                    o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " [orient] sensorOffset cached: ",
                          " track=",
                          "x",
                          " videoEl=",
                          "x",
                          "",
                        ])),
                      $,
                      s.$2,
                      T,
                      D,
                      M.videoWidth,
                      M.videoHeight,
                    ));
                },
                { once: !0 },
              ),
              yield (u = this.mediaCaptureStream) == null
                ? void 0
                : u.videoElement.play(),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready",
                  ])),
                $,
              ),
              !!(yield this.ensureVideoBufferCapacity(
                t.getNV12FrameSize(this.width, this.height),
                $,
              )))
            ) {
              var w =
                  (c = this.mediaCaptureStream) == null
                    ? void 0
                    : c.videoElement,
                A =
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                F =
                  o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_dynamic_fps_throttle",
                  ) === !0,
                O = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (!s.isCaptureInProgress) {
                        s.isCaptureInProgress = !0;
                        var n = s.width,
                          a = s.height,
                          i = 1e3 / m;
                        try {
                          if (s.isStopped) return;
                          if (!s.mediaCaptureStream || !w || !s.converter) {
                            o("WALogger").ERROR(
                              v ||
                                (v = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Video capture not ready, canceling frame capture",
                                ])),
                              $,
                            );
                            return;
                          }
                          if (w.readyState < w.HAVE_CURRENT_DATA) {
                            (o("WALogger").WARN(
                              S ||
                                (S = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  " Video not ready yet, skipping frame capture",
                                ])),
                              $,
                            ),
                              e(i));
                            return;
                          }
                          if (
                            w.readyState < 2 ||
                            w.videoWidth === 0 ||
                            w.videoHeight === 0
                          )
                            throw r("err")(
                              "Video element not ready for capture",
                            );
                          if (F) {
                            var l = o(
                              "WAWebVoipEncodeTargetFpsState",
                            ).getEncodeTargetFps();
                            if (l > 0) {
                              var u = Math.max(z, Math.min(j, l + K)),
                                c = (1e3 / u) * Q,
                                d = self.performance.now(),
                                _ = d - s.lastCaptureTime;
                              if (_ < c) {
                                e(i);
                                return;
                              }
                              s.lastCaptureTime = d;
                            }
                          }
                          var f = w;
                          try {
                            if (w.videoWidth !== n || w.videoHeight !== a)
                              if (
                                X(w.videoWidth) === n &&
                                X(w.videoHeight) === a
                              ) {
                                if (
                                  ((f = yield createImageBitmap(w, 0, 0, n, a)),
                                  s.isStopped || !s.converter)
                                )
                                  return;
                              } else {
                                if (
                                  (o("WALogger").LOG(
                                    R ||
                                      (R =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "Video dims ",
                                            "x",
                                            " mismatch ",
                                            "x",
                                            ", skip",
                                          ],
                                        )),
                                    w.videoWidth,
                                    w.videoHeight,
                                    n,
                                    a,
                                  ),
                                  yield s.__initVideoCapture({
                                    width: w.videoWidth,
                                    height: w.videoHeight,
                                  }),
                                  !(yield s.ensureVideoBufferCapacity(
                                    t.getNV12FrameSize(s.width, s.height),
                                    $,
                                  )))
                                )
                                  return;
                                ((s.consecutiveErrors = 0), e(i));
                                return;
                              }
                            if (!s.converter) return;
                            var g;
                            try {
                              g = yield s.converter.convertVideoToNV12(f);
                            } catch (t) {
                              yield s.handleCaptureError(t, $, e, i);
                              return;
                            }
                            s.consecutiveErrors = 0;
                            var h = o(
                              "WAWebVoipMediaEnums",
                            ).computeVideoOrientation(s.$2, s.$1);
                            if (s.$3 < 3) {
                              var y;
                              s.$3++;
                              var C =
                                (y = globalThis.screen) == null ||
                                (y = y.orientation) == null
                                  ? void 0
                                  : y.angle;
                              o("WALogger").LOG(
                                L ||
                                  (L = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " [orient] frame#",
                                    " screenAngle=",
                                    " sent=",
                                    " sensorOffset=",
                                    " isBackCamera=",
                                    " converter=",
                                    "x",
                                    "",
                                  ])),
                                $,
                                s.$3,
                                String(C),
                                h,
                                s.$2,
                                String(s.$1),
                                n,
                                a,
                              );
                            }
                            if (
                              !(yield s.ensureVideoBufferCapacity(
                                g.byteLength,
                                $,
                              ))
                            )
                              return;
                            if (s.videoBuffer != null) {
                              var b = s.videoBuffer;
                              (A.GROWABLE_HEAP_U8().set(g, b),
                                A[p](
                                  b,
                                  g.length,
                                  n,
                                  a,
                                  m,
                                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                    .NV12,
                                  h,
                                ));
                            } else
                              o("WALogger")
                                .ERROR(
                                  E ||
                                    (E =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " video buffer not initialized",
                                      ])),
                                  $,
                                )
                                .sendLogs(
                                  "voip: wasm: video buffer not initialized",
                                );
                            (o(
                              "WAWebVoipVideoRendererRegistry",
                            ).videoRendererRegistry.onVideoFrameWasmToJs(
                              o("WAWebVoipVideoRendererInterface")
                                .selfPreviewJid,
                              g.buffer,
                              n,
                              a,
                              h,
                              o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                .NV12,
                              0,
                              !1,
                            ),
                              e(i));
                          } finally {
                            f instanceof ImageBitmap && f.close();
                          }
                        } catch (t) {
                          (o("WALogger").ERROR(
                            k ||
                              (k = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " video processing error: ",
                                "",
                              ])),
                            $,
                            t,
                          ),
                            !s.isStopped &&
                              s.mediaCaptureStream != null &&
                              s.converter != null &&
                              e(i));
                        } finally {
                          s.isCaptureInProgress = !1;
                        }
                      }
                    },
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })();
              w && w.readyState >= w.HAVE_CURRENT_DATA
                ? window.setTimeout(function () {
                    return s.$4(O);
                  }, 0)
                : w &&
                  w.addEventListener(
                    "loadeddata",
                    function () {
                      return s.$4(O);
                    },
                    { once: !0 },
                  );
            }
          });
          function a(t) {
            return e.apply(this, arguments);
          }
          return a;
        })()),
        (a.$4 = function (t) {
          var e = this,
            r = document.visibilityState === "visible",
            a = function () {
              (H || (H = n("Promise"))).resolve(t(i)).catch(function (e) {
                o("WALogger").WARN(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:captureFrame] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              });
            },
            i = function (n) {
              if (!e.isStopped) {
                e.clearScheduledCapture();
                var t = e.getCaptureSchedulerWindow(),
                  r = e.shouldScheduleWithAnimationFrame(t);
                r
                  ? ((e.animationFrameWindow = t),
                    (e.animationFrameId = t.requestAnimationFrame(function () {
                      ((e.animationFrameId = null),
                        (e.animationFrameWindow = null),
                        (e.timeoutFrameWindow = t),
                        (e.timeoutFrameId = t.setTimeout(function () {
                          ((e.timeoutFrameId = null),
                            (e.timeoutFrameWindow = null),
                            a());
                        }, n)));
                    })))
                  : ((e.timeoutFrameWindow = t),
                    (e.timeoutFrameId = t.setTimeout(function () {
                      ((e.timeoutFrameId = null),
                        (e.timeoutFrameWindow = null),
                        a());
                    }, n)));
              }
            };
          (this.visibilityChangeListener &&
            document.removeEventListener(
              "visibilitychange",
              this.visibilityChangeListener,
            ),
            this.popoutVisibilityChangeListener &&
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.off(
                "popoutWindowVisibilityChanged",
                this.popoutVisibilityChangeListener,
              ));
          var l = function (n) {
            var t, i;
            (e.clearScheduledCapture(),
              (r = document.visibilityState === "visible"));
            var l = o(
                "WAWebVoipPopoutWindowState",
              ).getIsPopoutWindowActiveAndVisible(),
              s = r || l,
              u = e.getCaptureSchedulerWindow();
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:VideoCapture] ",
                  " visible=",
                  " popout=",
                  " converter=",
                  " scheduler=",
                  "",
                ])),
              n,
              String(r),
              String(l),
              (t = (i = e.converter) == null ? void 0 : i.getConverterName()) !=
                null
                ? t
                : "none",
              u === window ? "main" : "popout",
            );
            var c = function () {
              e.isStopped ||
                (o("WAWebUA").UA.isSafari &&
                  e.fallbackConverter &&
                  (!s && !e.usingFallback
                    ? e.switchToFallbackConverter().catch(function (e) {
                        o("WALogger").WARN(
                          D ||
                            (D = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:VideoCapture] switchToFallback error: ",
                              "",
                            ])),
                          e,
                        );
                      })
                    : s &&
                      e.usingFallback &&
                      e.switchBackToPrimaryConverter().catch(function (e) {
                        o("WALogger").WARN(
                          x ||
                            (x = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:VideoCapture] switchBackToPrimary error: ",
                              "",
                            ])),
                          e,
                        );
                      })),
                a());
            };
            if (
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_anr_optimizations",
              )
            )
              try {
                u.setTimeout(c, 0);
              } catch (e) {
                window.setTimeout(c, 0);
              }
            else c();
          };
          ((this.visibilityChangeListener = function () {
            l("visibilitychange");
          }),
            document.addEventListener(
              "visibilitychange",
              this.visibilityChangeListener,
            ),
            (this.popoutVisibilityChangeListener = function (e) {
              l("popoutVisibilitychange=" + e.visibilityState);
            }),
            o(
              "WAWebVoipPopoutWindowState",
            ).WAWebVoipUiPopoutWindowEventEmitter.on(
              "popoutWindowVisibilityChanged",
              this.popoutVisibilityChangeListener,
            ),
            a());
        }),
        (a.switchToFallbackConverter = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(
                !this.fallbackConverter ||
                this.usingFallback ||
                this.converterSwitchInProgress
              )
            ) {
              this.converterSwitchInProgress = !0;
              try {
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:VideoCapture] Switching to fallback converter ",
                      "",
                    ])),
                  this.fallbackConverter.getConverterName(),
                );
                var e = this.primaryConverter;
                ((this.converter = this.fallbackConverter),
                  (this.usingFallback = !0),
                  e && (yield e.cleanup()));
              } finally {
                ((this.converterSwitchInProgress = !1),
                  this.numReconcileRequested++);
                try {
                  yield this.reconcileState();
                } finally {
                  this.numReconcileRequested--;
                }
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.switchBackToPrimaryConverter = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !(
                !this.primaryConverter ||
                !this.usingFallback ||
                this.converterSwitchInProgress
              )
            ) {
              this.converterSwitchInProgress = !0;
              try {
                var e = yield this.createConverter(this.width, this.height),
                  t = this.primaryConverter;
                ((this.primaryConverter = e),
                  (this.converter = e),
                  (this.usingFallback = !1),
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] Switched back to primary converter ",
                        "",
                      ])),
                    e.getConverterName(),
                  ),
                  t && (yield t.cleanup()));
              } finally {
                ((this.converterSwitchInProgress = !1),
                  this.numReconcileRequested++);
                try {
                  yield this.reconcileState();
                } finally {
                  this.numReconcileRequested--;
                }
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.reconcileState = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!this.converterSwitchInProgress) {
              if (this.numReconcileRequested > 1) {
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:VideoCapture] max reconcile limit, skip",
                    ])),
                );
                return;
              }
              var e =
                document.visibilityState !== "visible" &&
                !o(
                  "WAWebVoipPopoutWindowState",
                ).getIsPopoutWindowActiveAndVisible();
              e && !this.usingFallback && this.fallbackConverter
                ? (o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                      ])),
                  ),
                  yield this.switchToFallbackConverter())
                : !e &&
                  this.usingFallback &&
                  this.primaryConverter &&
                  (o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> primary",
                      ])),
                  ),
                  yield this.switchBackToPrimaryConverter());
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.stopVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t,
              n =
                (e =
                  (t = this.converter) == null
                    ? void 0
                    : t.getConverterName()) != null
                  ? e
                  : "unknown",
              r = "voip: stopVideoCapture (" + n + ")";
            (o("WALogger").LOG(
              A || (A = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              r,
            ),
              (this.isStopped = !0),
              (this.lastCaptureTime = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps());
            try {
              (this.clearScheduledCapture(),
                this.visibilityChangeListener &&
                  (document.removeEventListener(
                    "visibilitychange",
                    this.visibilityChangeListener,
                  ),
                  (this.visibilityChangeListener = null)),
                this.popoutVisibilityChangeListener &&
                  (o(
                    "WAWebVoipPopoutWindowState",
                  ).WAWebVoipUiPopoutWindowEventEmitter.off(
                    "popoutWindowVisibilityChanged",
                    this.popoutVisibilityChangeListener,
                  ),
                  (this.popoutVisibilityChangeListener = null)));
              var a = this.mediaCaptureStream;
              if (a) {
                var i = a.mediaStream.getTracks();
                (i.forEach(function (e) {
                  e.stop();
                }),
                  o("WALogger").LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stopped ",
                        " tracks: ",
                        "",
                      ])),
                    r,
                    i.length,
                    i.slice(0, 3).map(function (e) {
                      return e.kind;
                    }),
                  ));
                var l = a.videoElement;
                ((l.srcObject = null),
                  l.remove(),
                  (this.mediaCaptureStream = null),
                  o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stopped video stream",
                      ])),
                    r,
                  ));
              }
              var s = this.primaryConverter,
                u = this.converter,
                c = this.fallbackConverter,
                d = new Set();
              (s != null &&
                (yield s.cleanup(),
                d.add(s),
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaned up primary converter",
                    ])),
                  r,
                )),
                u != null &&
                  !d.has(u) &&
                  (yield u.cleanup(),
                  d.add(u),
                  o("WALogger").LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up active converter",
                      ])),
                    r,
                  )),
                c != null &&
                  !d.has(c) &&
                  (yield c.cleanup(),
                  o("WALogger").LOG(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up fallback converter",
                      ])),
                    r,
                  )),
                (this.primaryConverter = null),
                (this.converter = null),
                (this.fallbackConverter = null));
            } finally {
              if (this.videoBuffer != null)
                try {
                  (yield ee(this.videoBuffer),
                    o("WALogger").LOG(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " freed WASM video buffer",
                        ])),
                      r,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " error freeing WASM video buffer: ",
                        "",
                      ])),
                    r,
                    e,
                  );
                }
              ((this.videoBuffer = null), (this.videoBufferSize = 0));
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.getNV12FrameSize = function (t, n) {
          return Math.floor(t * n * 1.5);
        }),
        t
      );
    })();
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return t._malloc(e);
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        te.apply(this, arguments)
      );
    }
    l.WAWebVoipVideoCaptureWithConverter = Y;
  },
  98,
);
