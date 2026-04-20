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
      A,
      F = 15,
      O = 30,
      B = 2,
      W = 0.9;
    function q(e) {
      return e - (e % 2);
    }
    var U = (function () {
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
        (a.ensureVideoBufferCapacity = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              if (this.videoBuffer != null && this.videoBufferSize >= t)
                return !0;
              var r = this.videoBuffer,
                a = this.videoBufferSize;
              ((this.videoBuffer = null),
                (this.videoBufferSize = 0),
                r != null && (yield G(r)));
              var i = yield V(t);
              return this.isStopped
                ? (yield G(i), !1)
                : ((this.videoBuffer = i),
                  (this.videoBufferSize = t),
                  a > 0 &&
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " resized WASM video buffer ",
                          " -> ",
                          "",
                        ])),
                      n,
                      a,
                      t,
                    ),
                  !0);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.__initVideoCapture = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.height,
              r = e.width;
            ((this.width = q(r)), (this.height = q(t)));
            var a = [];
            (this.converter && a.push(this.converter.cleanup()),
              this.fallbackConverter &&
                a.push(this.fallbackConverter.cleanup()),
              yield (A || (A = n("Promise"))).all(a));
            var i,
              l = !1;
            try {
              i = yield this.createConverter(this.width, this.height);
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                    "",
                  ])),
                e,
              );
              var c = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              if (c != null)
                ((i = c),
                  (l = !0),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
              var d = yield this.createFallbackConverter(
                this.width,
                this.height,
              );
              d != null && (this.fallbackConverter = d);
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
              b,
              v = e.height,
              S = e.maxFps,
              R = e.onVideoDataFnType,
              L = e.stream,
              E = e.width;
            ((this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.$2 = 0),
              (this.$3 = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              yield this.__initVideoCapture({ width: E, height: v }));
            var k = L.getVideoTracks()[0],
              I =
                k == null ||
                k.getSettings == null ||
                (a = k.getSettings()) == null
                  ? void 0
                  : a.facingMode;
            this.$1 = I === "environment";
            var T = E,
              D = v,
              x = r("nullthrows")(this.converter).getConverterName(),
              $ = "voip: [AV:startVideoCapture (" + x + ")]";
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              $,
              P != null ? "popout" : "main",
            ),
              (this.mediaCaptureStream = {
                mediaStream: L,
                videoElement: N.createElement("video"),
              }));
            var M = this.mediaCaptureStream.videoElement;
            if (
              ((M.srcObject = L),
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
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  (b = this.mediaCaptureStream) == null
                    ? void 0
                    : b.videoElement,
                A =
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                U =
                  o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_dynamic_fps_throttle",
                  ) === !0,
                V = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (!s.isCaptureInProgress) {
                        s.isCaptureInProgress = !0;
                        var n = s.width,
                          a = s.height,
                          i = 1e3 / S;
                        try {
                          if (s.isStopped) return;
                          if (!s.mediaCaptureStream || !w || !s.converter) {
                            o("WALogger").ERROR(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  ": Video capture not ready, canceling frame capture",
                                ])),
                              $,
                            );
                            return;
                          }
                          if (w.readyState < w.HAVE_CURRENT_DATA) {
                            (o("WALogger").WARN(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
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
                          if (U) {
                            var l = o(
                              "WAWebVoipEncodeTargetFpsState",
                            ).getEncodeTargetFps();
                            if (l > 0) {
                              var u = Math.max(F, Math.min(O, l + B)),
                                c = (1e3 / u) * W,
                                d = self.performance.now(),
                                m = d - s.lastCaptureTime;
                              if (m < c) {
                                e(i);
                                return;
                              }
                              s.lastCaptureTime = d;
                            }
                          }
                          var p = w;
                          try {
                            if (w.videoWidth !== n || w.videoHeight !== a)
                              if (
                                q(w.videoWidth) === n &&
                                q(w.videoHeight) === a
                              ) {
                                if (
                                  ((p = yield createImageBitmap(w, 0, 0, n, a)),
                                  s.isStopped || !s.converter)
                                )
                                  return;
                              } else {
                                if (
                                  (o("WALogger").LOG(
                                    g ||
                                      (g =
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
                                e(i);
                                return;
                              }
                            if (!s.converter) return;
                            var b = yield s.converter.convertVideoToNV12(p),
                              v = o(
                                "WAWebVoipMediaEnums",
                              ).computeVideoOrientation(s.$2, s.$1);
                            if (s.$3 < 3) {
                              var L;
                              s.$3++;
                              var E =
                                (L = globalThis.screen) == null ||
                                (L = L.orientation) == null
                                  ? void 0
                                  : L.angle;
                              o("WALogger").LOG(
                                h ||
                                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                                String(E),
                                v,
                                s.$2,
                                String(s.$1),
                                n,
                                a,
                              );
                            }
                            if (
                              !(yield s.ensureVideoBufferCapacity(
                                b.byteLength,
                                $,
                              ))
                            )
                              return;
                            if (s.videoBuffer != null) {
                              var k = s.videoBuffer;
                              (A.GROWABLE_HEAP_U8().set(b, k),
                                A[R](
                                  k,
                                  b.length,
                                  n,
                                  a,
                                  S,
                                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                    .NV12,
                                  v,
                                ));
                            } else
                              o("WALogger")
                                .ERROR(
                                  y ||
                                    (y =
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
                              b.buffer,
                              n,
                              a,
                              v,
                              o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                .NV12,
                              0,
                              !1,
                            ),
                              e(i));
                          } finally {
                            p instanceof ImageBitmap && p.close();
                          }
                        } catch (t) {
                          (o("WALogger").ERROR(
                            C ||
                              (C = babelHelpers.taggedTemplateLiteralLoose([
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
                    return s.$4(V);
                  }, 0)
                : w &&
                  w.addEventListener(
                    "loadeddata",
                    function () {
                      return s.$4(V);
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
              (A || (A = n("Promise"))).resolve(t(i)).catch(function (e) {
                o("WALogger").WARN(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
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
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
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
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                      ])),
                  ),
                  yield this.switchToFallbackConverter())
                : !e &&
                  this.usingFallback &&
                  this.primaryConverter &&
                  (o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
              D || (D = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
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
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
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
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaned up converter",
                    ])),
                  r,
                )),
                this.fallbackConverter &&
                  (yield this.fallbackConverter.cleanup(),
                  (this.fallbackConverter = null),
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up fallback converter",
                      ])),
                    r,
                  )));
            } finally {
              if (this.videoBuffer != null)
                try {
                  (yield G(this.videoBuffer),
                    o("WALogger").LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " freed WASM video buffer",
                        ])),
                      r,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
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
          return t._malloc(e);
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
          t._free(e);
        })),
        z.apply(this, arguments)
      );
    }
    l.WAWebVoipVideoCaptureWithConverter = U;
  },
  98,
);
