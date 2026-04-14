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
      w,
      A = 15,
      F = 30,
      O = 2,
      B = 0.9;
    function W(e) {
      return e - (e % 2);
    }
    var q = (function () {
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
            ((this.width = W(a)), (this.height = W(r)));
            var i = [];
            (this.converter && i.push(this.converter.cleanup()),
              this.fallbackConverter &&
                i.push(this.fallbackConverter.cleanup()),
              yield (w || (w = n("Promise"))).all(i));
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
              a,
              i,
              l = this,
              s,
              C,
              b = e.height,
              v = e.maxFps,
              S = e.onVideoDataFnType,
              R = e.stream,
              L = e.width;
            ((this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.$2 = 0),
              (this.$3 = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              yield this.__initVideoCapture({ width: L, height: b }));
            var E = R.getVideoTracks()[0],
              k =
                E == null ||
                E.getSettings == null ||
                (t = E.getSettings()) == null
                  ? void 0
                  : t.facingMode;
            this.$1 = k === "environment";
            var I = L,
              T = b,
              D = r("nullthrows")(this.converter).getConverterName(),
              x = "voip: [AV:startVideoCapture (" + D + ")]";
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " facingMode=",
                  "",
                ])),
              x,
              k != null ? k : "unknown",
            );
            var $ =
                (a =
                  (i = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : i.document) != null
                  ? a
                  : null,
              P = $ != null ? $ : document;
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              x,
              $ != null ? "popout" : "main",
            ),
              (this.mediaCaptureStream = {
                mediaStream: R,
                videoElement: P.createElement("video"),
              }));
            var N = this.mediaCaptureStream.videoElement;
            ((N.srcObject = R),
              (N.autoplay = !0),
              (N.muted = !0),
              (N.playsInline = !0),
              N.addEventListener(
                "loadedmetadata",
                function () {
                  ((l.$2 = o("WAWebVoipMediaEnums").detectSensorOffset(
                    I,
                    T,
                    N.videoWidth,
                    N.videoHeight,
                  )),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " [orient] sensorOffset cached: ",
                          " track=",
                          "x",
                          " videoEl=",
                          "x",
                          "",
                        ])),
                      x,
                      l.$2,
                      I,
                      T,
                      N.videoWidth,
                      N.videoHeight,
                    ));
                },
                { once: !0 },
              ),
              yield (s = this.mediaCaptureStream) == null
                ? void 0
                : s.videoElement.play(),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready",
                  ])),
                x,
              ));
            var M = Math.floor(this.width * this.height * 1.5),
              w = yield U(M);
            if (this.isStopped) {
              yield H(w);
              return;
            }
            this.videoBuffer = w;
            var q =
                (C = this.mediaCaptureStream) == null ? void 0 : C.videoElement,
              V =
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                ),
              G =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_dynamic_fps_throttle",
                ) === !0,
              z = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (!l.isCaptureInProgress) {
                      l.isCaptureInProgress = !0;
                      var t = l.width,
                        n = l.height,
                        a = 1e3 / v;
                      try {
                        if (l.isStopped) return;
                        if (!l.mediaCaptureStream || !q || !l.converter) {
                          o("WALogger").ERROR(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ": Video capture not ready, canceling frame capture",
                              ])),
                            x,
                          );
                          return;
                        }
                        if (q.readyState < q.HAVE_CURRENT_DATA) {
                          (o("WALogger").WARN(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " Video not ready yet, skipping frame capture",
                              ])),
                            x,
                          ),
                            e(a));
                          return;
                        }
                        if (
                          q.readyState < 2 ||
                          q.videoWidth === 0 ||
                          q.videoHeight === 0
                        )
                          throw r("err")("Video element not ready for capture");
                        if (G) {
                          var i = o(
                            "WAWebVoipEncodeTargetFpsState",
                          ).getEncodeTargetFps();
                          if (i > 0) {
                            var s = Math.max(A, Math.min(F, i + O)),
                              u = (1e3 / s) * B,
                              c = self.performance.now(),
                              d = c - l.lastCaptureTime;
                            if (d < u) {
                              e(a);
                              return;
                            }
                            l.lastCaptureTime = c;
                          }
                        }
                        var m = q;
                        try {
                          if (q.videoWidth !== t || q.videoHeight !== n)
                            if (
                              W(q.videoWidth) === t &&
                              W(q.videoHeight) === n
                            ) {
                              if (
                                ((m = yield createImageBitmap(q, 0, 0, t, n)),
                                l.isStopped || !l.converter)
                              )
                                return;
                            } else {
                              (o("WALogger").LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "Video dims ",
                                    "x",
                                    " mismatch ",
                                    "x",
                                    ", skip",
                                  ])),
                                q.videoWidth,
                                q.videoHeight,
                                t,
                                n,
                              ),
                                yield l.__initVideoCapture({
                                  width: q.videoWidth,
                                  height: q.videoHeight,
                                }),
                                e(a));
                              return;
                            }
                          if (!l.converter) return;
                          var C = yield l.converter.convertVideoToNV12(m),
                            b = o(
                              "WAWebVoipMediaEnums",
                            ).computeVideoOrientation(l.$2, l.$1);
                          if (l.$3 < 3) {
                            var R;
                            l.$3++;
                            var L =
                              (R = globalThis.screen) == null ||
                              (R = R.orientation) == null
                                ? void 0
                                : R.angle;
                            o("WALogger").LOG(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
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
                              x,
                              l.$3,
                              String(L),
                              b,
                              l.$2,
                              String(l.$1),
                              t,
                              n,
                            );
                          }
                          if (l.videoBuffer != null) {
                            var E = l.videoBuffer;
                            (V.GROWABLE_HEAP_U8().set(C, E),
                              V[S](
                                E,
                                C.length,
                                t,
                                n,
                                v,
                                o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                  .NV12,
                                b,
                              ));
                          } else
                            o("WALogger")
                              .ERROR(
                                h ||
                                  (h = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " video buffer not initialized",
                                  ])),
                                x,
                              )
                              .sendLogs(
                                "voip: wasm: video buffer not initialized",
                              );
                          (o(
                            "WAWebVoipVideoRendererRegistry",
                          ).videoRendererRegistry.onVideoFrameWasmToJs(
                            o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                            C.buffer,
                            t,
                            n,
                            b,
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                            0,
                            !1,
                          ),
                            e(a));
                        } finally {
                          m instanceof ImageBitmap && m.close();
                        }
                      } catch (t) {
                        (o("WALogger").ERROR(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " video processing error: ",
                              "",
                            ])),
                          x,
                          t,
                        ),
                          !l.isStopped &&
                            l.mediaCaptureStream != null &&
                            l.converter != null &&
                            e(a));
                      } finally {
                        l.isCaptureInProgress = !1;
                      }
                    }
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
            q && q.readyState >= q.HAVE_CURRENT_DATA
              ? window.setTimeout(function () {
                  return l.$4(z);
                }, 0)
              : q &&
                q.addEventListener(
                  "loadeddata",
                  function () {
                    return l.$4(z);
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
              (w || (w = n("Promise"))).resolve(t(i)).catch(function (e) {
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
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
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                      ])),
                  ),
                  yield this.switchToFallbackConverter())
                : !e &&
                  this.usingFallback &&
                  this.primaryConverter &&
                  (o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
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
              T || (T = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
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
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
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
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaned up converter",
                    ])),
                  r,
                )),
                this.fallbackConverter &&
                  (yield this.fallbackConverter.cleanup(),
                  (this.fallbackConverter = null),
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up fallback converter",
                      ])),
                    r,
                  )));
            } finally {
              if (this.videoBuffer != null) {
                try {
                  (yield H(this.videoBuffer),
                    o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " freed WASM video buffer",
                        ])),
                      r,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
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
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          return t._malloc(e);
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        G.apply(this, arguments)
      );
    }
    l.WAWebVoipVideoCaptureWithConverter = q;
  },
  98,
);
