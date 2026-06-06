__d(
  "WAWebVoipVideoCaptureWithConverter",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipVideoCaptureSourceRect",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
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
      G,
      z = 3,
      j = 15,
      K = 30,
      Q = 2,
      X = 0.9,
      Y = (function () {
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
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = 0),
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
        var n = t.prototype;
        return (
          (n.$8 = function (n, r) {
            if (
              !(
                this.$6 != null ||
                this.$7 >=
                  o("WAWebVoipVideoCaptureSourceRect")
                    .MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS
              )
            ) {
              var t = o(
                "WAWebVoipVideoCaptureSourceRect",
              ).probeVideoSourceContentRect(n, this.$7);
              this.$7 = t.detectionAttempts;
              var a = this.$7,
                i = t.sourceContentRect;
              i != null &&
                ((this.$6 = i),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " source content rect detected by frame ",
                      ": origin=",
                      ",",
                      " display=",
                      "x",
                      " coded=",
                      "x",
                      "",
                    ])),
                  r,
                  a,
                  i.x,
                  i.y,
                  i.width,
                  i.height,
                  i.codedWidth,
                  i.codedHeight,
                ));
            }
          }),
          (n.handleCaptureError = async function (t, n, r, a) {
            if (
              (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video processing error: ",
                    "",
                  ])),
                n,
                t,
              ),
              this.consecutiveErrors++,
              this.consecutiveErrors >= z && !this.isStopped)
            ) {
              var e = await this.attemptFallbackRecovery(n);
              e && r(a);
              return;
            }
            !this.isStopped &&
              this.mediaCaptureStream != null &&
              this.converter != null &&
              r(a);
          }),
          (n.$9 = function (t, n, r) {
            var e = this.$4;
            if (e != null && e.width === n && e.height === r) return e;
            this.$10();
            var o = t.ownerDocument.createElement("canvas");
            ((o.width = n), (o.height = r));
            var a = o.getContext("2d");
            return a == null
              ? null
              : ((a.imageSmoothingEnabled = !0),
                (this.$4 = o),
                (this.$5 = a),
                o);
          }),
          (n.$10 = function () {
            var e = this.$4;
            (e != null && ((e.width = 0), (e.height = 0)),
              (this.$4 = null),
              (this.$5 = null));
          }),
          (n.attemptFallbackRecovery = async function (t) {
            if (this.usingFallback)
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " already on fallback converter, stopping capture loop",
                    ])),
                  t,
                ),
                (this.isStopped = !0),
                !1
              );
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " ",
                  " consecutive errors, attempting fallback converter",
                ])),
              t,
              this.consecutiveErrors,
            );
            var e = this.converter;
            try {
              var n =
                this.fallbackConverter != null && this.fallbackConverter !== e
                  ? this.fallbackConverter
                  : await this.createFallbackConverter(this.width, this.height);
              if (n != null)
                return this.isStopped
                  ? (n !== this.fallbackConverter &&
                      Promise.resolve(n.cleanup()).catch(r("WAWebNoop")),
                    !1)
                  : ((this.converter = n),
                    (this.primaryConverter = null),
                    (this.usingFallback = !0),
                    this.fallbackConverter != null &&
                      this.fallbackConverter !== n &&
                      Promise.resolve(this.fallbackConverter.cleanup()).catch(
                        r("WAWebNoop"),
                      ),
                    (this.fallbackConverter = null),
                    (this.consecutiveErrors = 0),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " switched to fallback converter: ",
                          "",
                        ])),
                      t,
                      n.getConverterName(),
                    ),
                    e != null &&
                      Promise.resolve(e.cleanup()).catch(function (e) {
                        o("WALogger").WARN(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " old converter cleanup error: ",
                              "",
                            ])),
                          t,
                          e,
                        );
                      }),
                    !0);
            } catch (e) {
              o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " fallback converter creation failed: ",
                    "",
                  ])),
                t,
                e,
              );
            }
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " no fallback available, stopping capture loop",
                  ])),
                t,
              ),
              (this.isStopped = !0),
              !1
            );
          }),
          (n.createConverter = function (t, n) {
            throw r("err")("createConverter not implemented by subclass");
          }),
          (n.clearScheduledCapture = function () {
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
              (((t = this.timeoutFrameWindow) != null
                ? t
                : window
              ).clearTimeout(this.timeoutFrameId),
                (this.timeoutFrameId = null),
                (this.timeoutFrameWindow = null));
            }
          }),
          (n.getCaptureSchedulerWindow = function () {
            var e;
            return o(
              "WAWebVoipPopoutWindowState",
            ).getIsPopoutWindowActiveAndVisible() &&
              (e = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null
              ? e
              : window;
          }),
          (n.shouldScheduleWithAnimationFrame = function (t) {
            if (t === window) return document.visibilityState === "visible";
            try {
              return t.document.visibilityState === "visible";
            } catch (e) {
              return !1;
            }
          }),
          (n.createFallbackConverter = function (t, n) {
            return null;
          }),
          (n.ensureVideoBufferCapacity = async function (t, n) {
            if (this.videoBuffer != null && this.videoBufferSize >= t)
              return !0;
            var e = this.videoBuffer,
              r = this.videoBufferSize;
            ((this.videoBuffer = null),
              (this.videoBufferSize = 0),
              e != null && (await Z(e)));
            var a = await J(t);
            return this.isStopped
              ? (await Z(a), !1)
              : ((this.videoBuffer = a),
                (this.videoBufferSize = t),
                r > 0 &&
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " resized WASM video buffer ",
                        " -> ",
                        "",
                      ])),
                    n,
                    r,
                    t,
                  ),
                !0);
          }),
          (n.__initVideoCapture = async function (t) {
            var e = t.height,
              n = t.width;
            ((this.width = o("WAWebVoipVideoCaptureSourceRect").closestEven(n)),
              (this.height = o("WAWebVoipVideoCaptureSourceRect").closestEven(
                e,
              )));
            var r = [];
            (this.converter && r.push(this.converter.cleanup()),
              this.fallbackConverter &&
                r.push(this.fallbackConverter.cleanup()),
              await Promise.all(r));
            var a,
              i = !1;
            try {
              a = await this.createConverter(this.width, this.height);
            } catch (e) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                    "",
                  ])),
                e,
              );
              var l = await this.createFallbackConverter(
                this.width,
                this.height,
              );
              if (l != null)
                ((a = l),
                  (i = !0),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initVideoCapture] Using fallback converter: ",
                        "",
                      ])),
                    a.getConverterName(),
                  ));
              else throw e;
            }
            if (this.isStopped) {
              await a.cleanup();
              return;
            }
            if (
              ((this.converter = a),
              (this.primaryConverter = a),
              o("WAWebUA").UA.isSafari && !i)
            ) {
              var s = await this.createFallbackConverter(
                this.width,
                this.height,
              );
              s != null && (this.fallbackConverter = s);
            }
          }),
          (n.startVideoCapture = async function (n) {
            var e,
              a,
              i,
              l = this,
              s,
              u,
              c = n.height,
              d = n.maxFps,
              m = n.onVideoDataFnType,
              p = n.stream,
              _ = n.width;
            ((this.isStopped = !1),
              (this.isCaptureInProgress = !1),
              (this.lastCaptureTime = 0),
              (this.consecutiveErrors = 0),
              (this.usingFallback = !1),
              (this.$2 = 0),
              (this.$3 = 0),
              this.$10(),
              (this.$6 = null),
              (this.$7 = 0),
              o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
              await this.__initVideoCapture({ width: _, height: c }));
            var f = p.getVideoTracks()[0],
              g =
                f == null ||
                f.getSettings == null ||
                (e = f.getSettings()) == null
                  ? void 0
                  : e.facingMode;
            this.$1 = g === "environment";
            var h = _,
              T = c,
              D = r("nullthrows")(this.converter).getConverterName(),
              x = "voip: [AV:startVideoCapture (" + D + ")]";
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " facingMode=",
                  "",
                ])),
              x,
              g != null ? g : "unknown",
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element owner: ",
                  "",
                ])),
              x,
              $ != null ? "popout" : "main",
            ),
              (this.mediaCaptureStream = {
                mediaStream: p,
                videoElement: P.createElement("video"),
              }));
            var N = this.mediaCaptureStream.videoElement;
            if (
              ((N.srcObject = p),
              (N.autoplay = !0),
              (N.muted = !0),
              (N.playsInline = !0),
              N.addEventListener(
                "loadedmetadata",
                function () {
                  ((l.$2 = o("WAWebVoipMediaEnums").detectSensorOffset(
                    h,
                    T,
                    N.videoWidth,
                    N.videoHeight,
                  )),
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
                      h,
                      T,
                      N.videoWidth,
                      N.videoHeight,
                    ));
                },
                { once: !0 },
              ),
              await ((s = this.mediaCaptureStream) == null
                ? void 0
                : s.videoElement.play()),
              this.$8(N, x),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " video element ready",
                  ])),
                x,
              ),
              !!(await this.ensureVideoBufferCapacity(
                t.getNV12FrameSize(this.width, this.height),
                x,
              )))
            ) {
              var M =
                  (u = this.mediaCaptureStream) == null
                    ? void 0
                    : u.videoElement,
                w =
                  await o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                A =
                  o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_dynamic_fps_throttle",
                  ) === !0,
                F = async function (n) {
                  if (!l.isCaptureInProgress) {
                    l.isCaptureInProgress = !0;
                    var e = l.width,
                      a = l.height,
                      i = 1e3 / d;
                    try {
                      if (l.isStopped) return;
                      if (!l.mediaCaptureStream || !M || !l.converter) {
                        o("WALogger").ERROR(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              ": Video capture not ready, canceling frame capture",
                            ])),
                          x,
                        );
                        return;
                      }
                      if (M.readyState < M.HAVE_CURRENT_DATA) {
                        (o("WALogger").WARN(
                          R ||
                            (R = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " Video not ready yet, skipping frame capture",
                            ])),
                          x,
                        ),
                          n(i));
                        return;
                      }
                      if (
                        M.readyState < 2 ||
                        M.videoWidth === 0 ||
                        M.videoHeight === 0
                      )
                        throw r("err")("Video element not ready for capture");
                      if (A) {
                        var s = o(
                          "WAWebVoipEncodeTargetFpsState",
                        ).getEncodeTargetFps();
                        if (s > 0) {
                          var u = Math.max(j, Math.min(K, s + Q)),
                            c = (1e3 / u) * X,
                            p = self.performance.now(),
                            _ = p - l.lastCaptureTime;
                          if (_ < c) {
                            n(i);
                            return;
                          }
                          l.lastCaptureTime = p;
                        }
                      }
                      var f = M;
                      try {
                        var g, h;
                        l.$8(M, x);
                        var y = l.$6,
                          C =
                            y != null
                              ? o(
                                  "WAWebVoipVideoCaptureSourceRect",
                                ).getVideoElementSourceCropRect(M, y)
                              : null,
                          b =
                            (g = y == null ? void 0 : y.width) != null
                              ? g
                              : M.videoWidth,
                          v =
                            (h = y == null ? void 0 : y.height) != null
                              ? h
                              : M.videoHeight,
                          T = o("WAWebVoipVideoCaptureSourceRect").closestEven(
                            b,
                          ),
                          D = o("WAWebVoipVideoCaptureSourceRect").closestEven(
                            v,
                          ),
                          $ =
                            C != null ||
                            T !== M.videoWidth ||
                            D !== M.videoHeight;
                        if (T !== e || D !== a) {
                          if (
                            (o("WALogger").LOG(
                              L ||
                                (L = babelHelpers.taggedTemplateLiteralLoose([
                                  "Video dims ",
                                  "x",
                                  " mismatch ",
                                  "x",
                                  ", skip",
                                ])),
                              T,
                              D,
                              e,
                              a,
                            ),
                            await l.__initVideoCapture({ width: T, height: D }),
                            !(await l.ensureVideoBufferCapacity(
                              t.getNV12FrameSize(l.width, l.height),
                              x,
                            )))
                          )
                            return;
                          ((l.consecutiveErrors = 0), n(i));
                          return;
                        }
                        if (C != null) {
                          var P = l.$9(M, T, D),
                            N = l.$5;
                          if (P != null && N != null)
                            (N.drawImage(
                              M,
                              C.x,
                              C.y,
                              C.width,
                              C.height,
                              0,
                              0,
                              T,
                              D,
                            ),
                              (f = P));
                          else {
                            var F = o(
                                "WAWebVoipVideoCaptureSourceRect",
                              ).getImageBitmapResizeOptionsForSourceCropRect(
                                C,
                                T,
                                D,
                              ),
                              O = await createImageBitmap(
                                M,
                                C.x,
                                C.y,
                                C.width,
                                C.height,
                              );
                            if (F == null) f = O;
                            else
                              try {
                                f = await createImageBitmap(O, F);
                              } finally {
                                O.close();
                              }
                          }
                          if (l.isStopped || !l.converter) return;
                        } else if ($) {
                          var B, W;
                          if (
                            ((f = await createImageBitmap(
                              M,
                              (B = y == null ? void 0 : y.x) != null ? B : 0,
                              (W = y == null ? void 0 : y.y) != null ? W : 0,
                              T,
                              D,
                            )),
                            l.isStopped || !l.converter)
                          )
                            return;
                        }
                        if (!l.converter) return;
                        var q;
                        try {
                          q = await l.converter.convertVideoToNV12(f);
                        } catch (e) {
                          await l.handleCaptureError(e, x, n, i);
                          return;
                        }
                        l.consecutiveErrors = 0;
                        var U = o(
                          "WAWebVoipMediaEnums",
                        ).computeVideoOrientation(l.$2, l.$1);
                        if (l.$3 < 3) {
                          var V;
                          l.$3++;
                          var H =
                            (V = globalThis.screen) == null ||
                            (V = V.orientation) == null
                              ? void 0
                              : V.angle;
                          o("WALogger").LOG(
                            E ||
                              (E = babelHelpers.taggedTemplateLiteralLoose([
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
                            String(H),
                            U,
                            l.$2,
                            String(l.$1),
                            e,
                            a,
                          );
                        }
                        if (
                          !(await l.ensureVideoBufferCapacity(q.byteLength, x))
                        )
                          return;
                        if (l.videoBuffer != null) {
                          var G = l.videoBuffer;
                          (w.GROWABLE_HEAP_U8().set(q, G),
                            w[m](
                              G,
                              q.length,
                              e,
                              a,
                              d,
                              o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                .NV12,
                              U,
                            ));
                        } else
                          o("WALogger")
                            .ERROR(
                              k ||
                                (k = babelHelpers.taggedTemplateLiteralLoose([
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
                          q.buffer,
                          e,
                          a,
                          U,
                          o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                          0,
                          !1,
                        ),
                          n(i));
                      } finally {
                        f instanceof ImageBitmap && f.close();
                      }
                    } catch (e) {
                      (o("WALogger").ERROR(
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " video processing error: ",
                            "",
                          ])),
                        x,
                        e,
                      ),
                        !l.isStopped &&
                          l.mediaCaptureStream != null &&
                          l.converter != null &&
                          n(i));
                    } finally {
                      l.isCaptureInProgress = !1;
                    }
                  }
                };
              M && M.readyState >= M.HAVE_CURRENT_DATA
                ? window.setTimeout(function () {
                    return l.$11(F);
                  }, 0)
                : M &&
                  M.addEventListener(
                    "loadeddata",
                    function () {
                      return l.$11(F);
                    },
                    { once: !0 },
                  );
            }
          }),
          (n.$11 = function (t) {
            var e = this,
              n = document.visibilityState === "visible",
              r = function () {
                Promise.resolve(t(a)).catch(function (e) {
                  o("WALogger").WARN(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:captureFrame] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              },
              a = function (n) {
                if (!e.isStopped) {
                  e.clearScheduledCapture();
                  var t = e.getCaptureSchedulerWindow(),
                    o = e.shouldScheduleWithAnimationFrame(t);
                  o
                    ? ((e.animationFrameWindow = t),
                      (e.animationFrameId = t.requestAnimationFrame(
                        function () {
                          ((e.animationFrameId = null),
                            (e.animationFrameWindow = null),
                            (e.timeoutFrameWindow = t),
                            (e.timeoutFrameId = t.setTimeout(function () {
                              ((e.timeoutFrameId = null),
                                (e.timeoutFrameWindow = null),
                                r());
                            }, n)));
                        },
                      )))
                    : ((e.timeoutFrameWindow = t),
                      (e.timeoutFrameId = t.setTimeout(function () {
                        ((e.timeoutFrameId = null),
                          (e.timeoutFrameWindow = null),
                          r());
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
            var i = function (a) {
              var t, i;
              (e.clearScheduledCapture(),
                (n = document.visibilityState === "visible"));
              var l = o(
                  "WAWebVoipPopoutWindowState",
                ).getIsPopoutWindowActiveAndVisible(),
                s = n || l,
                u = e.getCaptureSchedulerWindow();
              o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:VideoCapture] ",
                    " visible=",
                    " popout=",
                    " converter=",
                    " scheduler=",
                    "",
                  ])),
                a,
                String(n),
                String(l),
                (t =
                  (i = e.converter) == null ? void 0 : i.getConverterName()) !=
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
                            x ||
                              (x = babelHelpers.taggedTemplateLiteralLoose([
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
                            $ ||
                              ($ = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:VideoCapture] switchBackToPrimary error: ",
                                "",
                              ])),
                            e,
                          );
                        })),
                  r());
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
              i("visibilitychange");
            }),
              document.addEventListener(
                "visibilitychange",
                this.visibilityChangeListener,
              ),
              (this.popoutVisibilityChangeListener = function (e) {
                i("popoutVisibilitychange=" + e.visibilityState);
              }),
              o(
                "WAWebVoipPopoutWindowState",
              ).WAWebVoipUiPopoutWindowEventEmitter.on(
                "popoutWindowVisibilityChanged",
                this.popoutVisibilityChangeListener,
              ),
              r());
          }),
          (n.switchToFallbackConverter = async function () {
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
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:VideoCapture] Switching to fallback converter ",
                      "",
                    ])),
                  this.fallbackConverter.getConverterName(),
                );
                var e = this.primaryConverter;
                ((this.converter = this.fallbackConverter),
                  (this.usingFallback = !0),
                  e && (await e.cleanup()));
              } finally {
                ((this.converterSwitchInProgress = !1),
                  this.numReconcileRequested++);
                try {
                  await this.reconcileState();
                } finally {
                  this.numReconcileRequested--;
                }
              }
            }
          }),
          (n.switchBackToPrimaryConverter = async function () {
            if (
              !(
                !this.primaryConverter ||
                !this.usingFallback ||
                this.converterSwitchInProgress
              )
            ) {
              this.converterSwitchInProgress = !0;
              try {
                var e = await this.createConverter(this.width, this.height),
                  t = this.primaryConverter;
                ((this.primaryConverter = e),
                  (this.converter = e),
                  (this.usingFallback = !1),
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] Switched back to primary converter ",
                        "",
                      ])),
                    e.getConverterName(),
                  ),
                  t && (await t.cleanup()));
              } finally {
                ((this.converterSwitchInProgress = !1),
                  this.numReconcileRequested++);
                try {
                  await this.reconcileState();
                } finally {
                  this.numReconcileRequested--;
                }
              }
            }
          }),
          (n.reconcileState = async function () {
            if (!this.converterSwitchInProgress) {
              if (this.numReconcileRequested > 1) {
                o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                      ])),
                  ),
                  await this.switchToFallbackConverter())
                : !e &&
                  this.usingFallback &&
                  this.primaryConverter &&
                  (o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:VideoCapture] reconcile -> primary",
                      ])),
                  ),
                  await this.switchBackToPrimaryConverter());
            }
          }),
          (n.stopVideoCapture = async function () {
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
              F || (F = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
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
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                (await s.cleanup(),
                d.add(s),
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaned up primary converter",
                    ])),
                  r,
                )),
                u != null &&
                  !d.has(u) &&
                  (await u.cleanup(),
                  d.add(u),
                  o("WALogger").LOG(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cleaned up active converter",
                      ])),
                    r,
                  )),
                c != null &&
                  !d.has(c) &&
                  (await c.cleanup(),
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
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
                  (await Z(this.videoBuffer),
                    o("WALogger").LOG(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " freed WASM video buffer",
                        ])),
                      r,
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
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
          }),
          (t.getNV12FrameSize = function (t, n) {
            return Math.floor(t * n * 1.5);
          }),
          t
        );
      })();
    async function J(e) {
      var t =
        await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      return t._malloc(e);
    }
    async function Z(e) {
      var t =
        await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      t._free(e);
    }
    ((l.getImageBitmapResizeOptionsForSourceCropRect = (G = o(
      "WAWebVoipVideoCaptureSourceRect",
    )).getImageBitmapResizeOptionsForSourceCropRect),
      (l.getVideoElementSourceCropRect = G.getVideoElementSourceCropRect),
      (l.getVideoSourceContentRect = G.getVideoSourceContentRect),
      (l.probeVideoSourceContentRect = G.probeVideoSourceContentRect),
      (l.WAWebVoipVideoCaptureWithConverter = Y));
  },
  98,
);
