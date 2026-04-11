__d(
  "WAWebVoipVideoCaptureWithConverter",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
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
      w = 15,
      A = 30,
      F = 2,
      O = 0.9;
    function B(e) {
      return e - (e % 2);
    }
    var W = (function () {
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
          (this.lastCaptureTime = 0));
      }
      var a = t.prototype;
      return (
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
        (a.__initVideoCapture = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r = t.height,
              a = t.width;
            ((this.width = B(a)), (this.height = B(r)));
            var i = [];
            (this.converter && i.push(this.converter.cleanup()),
              this.fallbackConverter &&
                i.push(this.fallbackConverter.cleanup()),
              yield (M || (M = n("Promise"))).all(i));
            var l,
              u = !1;
            try {
              l = yield this.createConverter(this.width, this.height);
            } catch (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                    "",
                  ])),
                t,
              );
              var c = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              if (c != null)
                ((l = c),
                  (u = !0),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initVideoCapture] Using fallback converter: ",
                        "",
                      ])),
                    l.getConverterName(),
                  ));
              else throw t;
            }
            if (this.isStopped) {
              yield l.cleanup();
              return;
            }
            if (
              ((this.converter = l),
              (this.primaryConverter = l),
              o("WAWebUA").UA.isSafari && !u)
            ) {
              var d = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              d != null && (this.fallbackConverter = d);
            }
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.startVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              a = this,
              i,
              l,
              s = e.height,
              y = e.maxFps,
              C = e.onVideoDataFnType,
              b = e.stream,
              v = e.width;
            ((this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.$2 = 0),
              (this.$3 = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              yield this.__initVideoCapture({ width: v, height: s }));
            var S = b.getVideoTracks()[0],
              R =
                S == null ||
                S.getSettings == null ||
                (t = S.getSettings()) == null
                  ? void 0
                  : t.facingMode;
            this.$1 = R === "environment";
            var L = v,
              E = s,
              k = r("nullthrows")(this.converter).getConverterName(),
              I = "voip: [AV:startVideoCapture (" + k + ")]";
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " facingMode=",
                  "",
                ])),
              I,
              R != null ? R : "unknown",
            ),
              (this.mediaCaptureStream = {
                mediaStream: b,
                videoElement: document.createElement("video"),
              }));
            var T = this.mediaCaptureStream.videoElement;
            ((T.srcObject = b),
              (T.autoplay = !0),
              (T.muted = !0),
              (T.playsInline = !0),
              T.addEventListener(
                "loadedmetadata",
                function () {
                  ((a.$2 = o("WAWebVoipMediaEnums").detectSensorOffset(
                    L,
                    E,
                    T.videoWidth,
                    T.videoHeight,
                  )),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " [orient] sensorOffset cached: ",
                          " track=",
                          "x",
                          " videoEl=",
                          "x",
                          "",
                        ])),
                      I,
                      a.$2,
                      L,
                      E,
                      T.videoWidth,
                      T.videoHeight,
                    ));
                },
                { once: !0 },
              ),
              yield (i = this.mediaCaptureStream) == null
                ? void 0
                : i.videoElement.play(),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready",
                  ])),
                I,
              ));
            var D = Math.floor(this.width * this.height * 1.5),
              x = yield q(D);
            if (this.isStopped) {
              yield V(x);
              return;
            }
            this.videoBuffer = x;
            var $ =
                (l = this.mediaCaptureStream) == null ? void 0 : l.videoElement,
              P =
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                ),
              N =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_dynamic_fps_throttle",
                ) === !0,
              M = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (!a.isCaptureInProgress) {
                      a.isCaptureInProgress = !0;
                      var t = a.width,
                        n = a.height,
                        i = 1e3 / y;
                      try {
                        if (a.isStopped) return;
                        if (!a.mediaCaptureStream || !$ || !a.converter) {
                          o("WALogger").ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": Video capture not ready, canceling frame capture",
                              ])),
                            I,
                          );
                          return;
                        }
                        if ($.readyState < $.HAVE_CURRENT_DATA) {
                          (o("WALogger").WARN(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " Video not ready yet, skipping frame capture",
                              ])),
                            I,
                          ),
                            e(i));
                          return;
                        }
                        if (
                          $.readyState < 2 ||
                          $.videoWidth === 0 ||
                          $.videoHeight === 0
                        )
                          throw r("err")("Video element not ready for capture");
                        if (N) {
                          var l = o(
                            "WAWebVoipEncodeTargetFpsState",
                          ).getEncodeTargetFps();
                          if (l > 0) {
                            var s = Math.max(w, Math.min(A, l + F)),
                              u = (1e3 / s) * O,
                              c = self.performance.now(),
                              d = c - a.lastCaptureTime;
                            if (d < u) {
                              e(i);
                              return;
                            }
                            a.lastCaptureTime = c;
                          }
                        }
                        var b = $;
                        try {
                          if ($.videoWidth !== t || $.videoHeight !== n)
                            if (
                              B($.videoWidth) === t &&
                              B($.videoHeight) === n
                            ) {
                              if (
                                ((b = yield createImageBitmap($, 0, 0, t, n)),
                                a.isStopped || !a.converter)
                              )
                                return;
                            } else {
                              (o("WALogger").LOG(
                                _ ||
                                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "Video dims ",
                                    "x",
                                    " mismatch ",
                                    "x",
                                    ", skip",
                                  ])),
                                $.videoWidth,
                                $.videoHeight,
                                t,
                                n,
                              ),
                                yield a.__initVideoCapture({
                                  width: $.videoWidth,
                                  height: $.videoHeight,
                                }),
                                e(i));
                              return;
                            }
                          if (!a.converter) return;
                          var v = yield a.converter.convertVideoToNV12(b),
                            S = o(
                              "WAWebVoipMediaEnums",
                            ).computeVideoOrientation(a.$2, a.$1);
                          if (a.$3 < 3) {
                            var R;
                            a.$3++;
                            var L =
                              (R = globalThis.screen) == null ||
                              (R = R.orientation) == null
                                ? void 0
                                : R.angle;
                            o("WALogger").LOG(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
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
                              I,
                              a.$3,
                              String(L),
                              S,
                              a.$2,
                              String(a.$1),
                              t,
                              n,
                            );
                          }
                          if (a.videoBuffer != null) {
                            var E = a.videoBuffer;
                            (P.GROWABLE_HEAP_U8().set(v, E),
                              P[C](
                                E,
                                v.length,
                                t,
                                n,
                                y,
                                o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                  .NV12,
                                S,
                              ));
                          } else
                            o("WALogger")
                              .ERROR(
                                g ||
                                  (g = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " video buffer not initialized",
                                  ])),
                                I,
                              )
                              .sendLogs(
                                "voip: wasm: video buffer not initialized",
                              );
                          (o(
                            "WAWebVoipVideoRendererRegistry",
                          ).videoRendererRegistry.onVideoFrameWasmToJs(
                            o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                            v.buffer,
                            t,
                            n,
                            S,
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                            0,
                            !1,
                          ),
                            e(i));
                        } finally {
                          b instanceof ImageBitmap && b.close();
                        }
                      } catch (t) {
                        (o("WALogger").ERROR(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " video processing error: ",
                              "",
                            ])),
                          I,
                          t,
                        ),
                          !a.isStopped &&
                            a.mediaCaptureStream != null &&
                            a.converter != null &&
                            e(i));
                      } finally {
                        a.isCaptureInProgress = !1;
                      }
                    }
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
            $ && $.readyState >= $.HAVE_CURRENT_DATA
              ? window.setTimeout(function () {
                  return a.$4(M);
                }, 0)
              : $ &&
                $.addEventListener(
                  "loadeddata",
                  function () {
                    return a.$4(M);
                  },
                  { once: !0 },
                );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$4 = function (t) {
          var e = this,
            r = document.visibilityState === "visible",
            a = function () {
              (M || (M = n("Promise"))).resolve(t(i)).catch(function (e) {
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
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
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
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
              l("popoutVisibilitychange=" + e);
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
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                      ])),
                  ),
                  yield this.switchToFallbackConverter())
                : !e &&
                  this.usingFallback &&
                  this.primaryConverter &&
                  (o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
              I || (I = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              r,
            ),
              (this.isStopped = !0),
              (this.lastCaptureTime = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps());
            try {
              if (
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
                  (this.popoutVisibilityChangeListener = null)),
                this.mediaCaptureStream)
              ) {
                var a,
                  i = this.mediaCaptureStream.mediaStream.getTracks();
                (i.forEach(function (e) {
                  e.stop();
                }),
                  o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  ),
                  (a = this.mediaCaptureStream) == null ||
                    a.videoElement.remove(),
                  (this.mediaCaptureStream = null),
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stopped video stream",
                      ])),
                    r,
                  ));
              }
              (this.primaryConverter &&
                (yield this.primaryConverter.cleanup(),
                (this.primaryConverter = null),
                (this.converter = null),
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaned up converter",
                    ])),
                  r,
                )),
                this.fallbackConverter &&
                  (yield this.fallbackConverter.cleanup(),
                  (this.fallbackConverter = null),
                  o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up fallback converter",
                      ])),
                    r,
                  )));
            } finally {
              if (this.videoBuffer != null) {
                try {
                  (yield V(this.videoBuffer),
                    o("WALogger").LOG(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " freed WASM video buffer",
                        ])),
                      r,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " error freeing WASM video buffer: ",
                        "",
                      ])),
                    r,
                    e,
                  );
                }
                this.videoBuffer = null;
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })();
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return t._malloc(e);
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        H.apply(this, arguments)
      );
    }
    l.WAWebVoipVideoCaptureWithConverter = W;
  },
  98,
);
