__d(
  "WAWebVoipVideoCaptureWithConverter",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipDualStreamScreenShareState",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipMediaEnums",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPresentationFrameNormalizer",
    "WAWebVoipVideoCaptureSourceRect",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoFrameProcessor",
    "WAWebVoipVideoRenderSource",
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
      z,
      j,
      K,
      Q,
      X = 3,
      Y = 15,
      J = 30,
      Z = 2,
      ee = 0.9,
      te = "orientation";
    function ne(e) {
      var t = e.isBackCamera,
        n = e.isScreenShare,
        r = e.requestedHeight,
        a = e.requestedWidth,
        i = e.screenAngle,
        l = e.screenType,
        s = e.sensorOffset,
        u = e.sensorOffsetInitialized,
        c = e.videoHeight,
        d = e.videoWidth;
      if (n || !u) return null;
      var m = o("WAWebVoipMediaEnums").computeVideoOrientationForAngle(s, t, i),
        p = o(
          "WAWebVoipPresentationFrameNormalizer",
        ).resolvePresentationFrameTransform({
          fallbackOrientation: m,
          frameHeight: c,
          frameRotation: 0,
          frameWidth: d,
          isScreenShare: n,
          requestedHeight: r,
          requestedWidth: a,
          screenType: l,
          sensorOffsetInitialized: u,
        });
      return p == null || p.counterRotationDegrees === 180
        ? null
        : {
            counterRotationDegrees: p.counterRotationDegrees,
            orientation: m,
            outputHeight: o("WAWebVoipVideoCaptureSourceRect").closestEven(
              p.outputHeight,
            ),
            outputWidth: o("WAWebVoipVideoCaptureSourceRect").closestEven(
              p.outputWidth,
            ),
          };
    }
    async function re(t) {
      var n = t.failureLog,
        a = t.isCurrent,
        i = t.processor,
        l = t.source;
      if (i == null || !o("WAWebVoipVideoFrameProcessor").shouldProcessFrame(i))
        return { image: l, release: r("WAWebNoop") };
      var s = null,
        u = null;
      try {
        var c = r("WAWebVoipVideoFrameCtor")();
        if (c == null) throw r("err")("VideoFrame is not available");
        ((s = new c(l, {
          timestamp: Math.round(self.performance.now() * 1e3),
        })),
          (u = await i.process(s)));
      } catch (t) {
        var d;
        return (
          (d = s) == null || d.close(),
          n.isLogged ||
            ((n.isLogged = !0),
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:capture] frame processing failed, skipping frames until it works: ",
                  "",
                ])),
              t,
            )),
          null
        );
      }
      if (((n.isLogged = !1), u == null)) return null;
      if (!a()) return (u.close(), null);
      var m = u;
      return {
        image: m,
        release: function () {
          return m.close();
        },
      };
    }
    var oe = (function () {
      function e() {
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
          (this.$1 = 0),
          (this.$2 = !1),
          (this.$3 = 0),
          (this.$4 = !1),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = null),
          (this.$8 = null),
          (this.$9 = !1),
          (this.$10 = null),
          (this.$11 = null),
          (this.$12 = null),
          (this.$13 = 0),
          (this.$14 = null),
          (this.$15 = 0),
          (this.$16 = { isLogged: !1 }),
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
      var t = e.prototype;
      return (
        (t.$17 = function (t) {
          return !this.isStopped && t === this.$15;
        }),
        (t.$18 = function (t, n) {
          if (
            !(
              this.$12 != null ||
              this.$13 >=
                o("WAWebVoipVideoCaptureSourceRect")
                  .MAX_SOURCE_CONTENT_RECT_DETECTION_ATTEMPTS
            )
          ) {
            var e = o(
              "WAWebVoipVideoCaptureSourceRect",
            ).probeVideoSourceContentRect(t, this.$13);
            this.$13 = e.detectionAttempts;
            var r = this.$13,
              a = e.sourceContentRect;
            a != null &&
              ((this.$12 = a),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
                n,
                r,
                a.x,
                a.y,
                a.width,
                a.height,
                a.codedWidth,
                a.codedHeight,
              ));
          }
        }),
        (t.handleCaptureError = async function (t) {
          var e = t.error,
            n = t.frameInterval,
            r = t.logPrefix,
            a = t.requestCallback;
          if (
            (o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video processing error: ",
                  "",
                ])),
              r,
              e,
            ),
            this.consecutiveErrors++,
            this.consecutiveErrors >= X && !this.isStopped)
          ) {
            var i = await this.attemptFallbackRecovery(r);
            i && a(n);
            return;
          }
          !this.isStopped &&
            this.mediaCaptureStream != null &&
            this.converter != null &&
            a(n);
        }),
        (t.$19 = function (t) {
          var e = t.height,
            n = t.videoElement,
            r = t.width,
            o = this.$10;
          if (o != null && o.width === r && o.height === e) return o;
          this.$20();
          var a = n.ownerDocument.createElement("canvas");
          ((a.width = r), (a.height = e));
          var i = a.getContext("2d");
          return i == null
            ? null
            : ((i.imageSmoothingEnabled = !0),
              (this.$10 = a),
              (this.$11 = i),
              a);
        }),
        (t.$20 = function () {
          var e = this.$10;
          (e != null && ((e.width = 0), (e.height = 0)),
            (this.$10 = null),
            (this.$11 = null));
        }),
        (t.$21 = function () {
          var e = this.$7;
          (e != null && ((e.width = 0), (e.height = 0)),
            (this.$7 = null),
            (this.$8 = null));
        }),
        (t.$22 = function (t, n) {
          var e, r;
          if (this.$9) return null;
          if (!this.$4) {
            var a = t.videoWidth,
              i = t.videoHeight;
            a > 0 &&
              i > 0 &&
              ((this.$3 = o("WAWebVoipMediaEnums").detectSensorOffset({
                trackHeight: this.$6,
                trackWidth: this.$5,
                videoElHeight: i,
                videoElWidth: a,
              })),
              (this.$4 = !0));
          }
          var l = globalThis.screen,
            s = l != null ? l[te] : null;
          return ne({
            isBackCamera: this.$2,
            isScreenShare: n,
            requestedHeight: this.$6,
            requestedWidth: this.$5,
            screenAngle: (e = s == null ? void 0 : s.angle) != null ? e : null,
            screenType: (r = s == null ? void 0 : s.type) != null ? r : null,
            sensorOffset: this.$3,
            sensorOffsetInitialized: this.$4,
            videoHeight: t.videoHeight,
            videoWidth: t.videoWidth,
          });
        }),
        (t.$23 = function (t) {
          var e = t.element,
            n = t.image,
            r = t.rotation,
            o = t.sourceHeight,
            a = t.sourceWidth,
            i = r.counterRotationDegrees,
            l = r.outputHeight,
            s = r.outputWidth;
          if (this.$7 == null || this.$7.width !== s || this.$7.height !== l) {
            this.$21();
            var u = e.ownerDocument.createElement("canvas");
            ((u.width = s), (u.height = l));
            var c = u.getContext("2d");
            if (c == null) return null;
            ((c.imageSmoothingEnabled = !0), (this.$7 = u), (this.$8 = c));
          }
          var d = this.$8;
          return d == null
            ? null
            : (d.setTransform(1, 0, 0, 1, 0, 0),
              d.clearRect(0, 0, s, l),
              i === 90
                ? (d.translate(s, 0), d.rotate(Math.PI / 2))
                : i === 180
                  ? (d.translate(s, l), d.rotate(Math.PI))
                  : (d.translate(0, l), d.rotate(-Math.PI / 2)),
              d.drawImage(n, 0, 0, a, o),
              d.setTransform(1, 0, 0, 1, 0, 0),
              this.$7);
        }),
        (t.$24 = function (t) {
          var e = t.height,
            n = t.maxFps,
            r = t.nv12Data,
            a = t.onVideoDataFnType,
            i = t.orientation,
            l = t.voipWasm,
            s = t.width;
          if (this.videoBuffer != null) {
            var u = this.videoBuffer;
            (l.GROWABLE_HEAP_U8().set(r, u),
              l[a](
                u,
                r.length,
                s,
                e,
                n,
                o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                i,
              ));
          } else
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: video buffer not initialized",
                  ])),
              )
              .sendLogs("voip: wasm: video buffer not initialized");
          var d = o(
            "WAWebVoipVideoRenderSource",
          ).WAWebVoipVideoRenderSource.self(
            a === "onDesktopCaptureDataFromJs" &&
              o(
                "WAWebVoipDualStreamScreenShareState",
              ).isSelfDualStreamScreenShareActive()
              ? o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                  .SCREEN_SHARE
              : o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                  .CAMERA,
          );
          o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.onVideoFrameWasmToJs(
            d,
            r.buffer,
            s,
            e,
            i,
            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
            0,
            !1,
          );
        }),
        (t.$25 = async function (n) {
          var t = this,
            r = n.counterRotation,
            a = n.element,
            i = n.frameInterval,
            l = n.generation,
            s = n.height,
            u = n.logPrefix,
            c = n.maxFps,
            p = n.onVideoDataFnType,
            _ = n.requestCallback,
            f = n.voipWasm,
            g = n.width,
            h = a.videoWidth,
            y = a.videoHeight,
            C = await re({
              failureLog: this.$16,
              isCurrent: function () {
                return t.$17(l);
              },
              processor: this.$14,
              source: a,
            });
          if (C == null) return (_(i), !0);
          var b;
          try {
            b = this.$23({
              element: a,
              image: C.image,
              rotation: r,
              sourceHeight: y,
              sourceWidth: h,
            });
          } finally {
            C.release();
          }
          if (b == null)
            return (
              (this.$9 = !0),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " counter-rotation canvas unavailable; falling back to legacy crop path (video may be cropped/mis-rotated)",
                    ])),
                  u,
                )
                .sendLogs("voip-withconverter-rotation-canvas-unavailable"),
              !1
            );
          var v = r.orientation,
            S = r.outputHeight,
            R = r.outputWidth;
          if (R !== g || S !== s)
            return (
              await this.__initVideoCapture({ height: S, width: R }),
              await this.ensureVideoBufferCapacity(
                e.getNV12FrameSize(this.width, this.height),
                u,
              ),
              (this.consecutiveErrors = 0),
              _(i),
              !0
            );
          var L = this.converter;
          if (L == null) return !0;
          var E;
          try {
            E = await L.convertVideoToNV12(b);
          } catch (e) {
            return (
              await this.handleCaptureError({
                error: e,
                frameInterval: i,
                logPrefix: u,
                requestCallback: _,
              }),
              !0
            );
          }
          return (
            (this.consecutiveErrors = 0),
            this.isStopped ||
              this.converter == null ||
              (this.$1 < 3 &&
                (this.$1++,
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " [orient] frame#",
                      " sent=",
                      " reason=counter-rotated converter=",
                      "x",
                      " counterRotation=",
                      "",
                    ])),
                  u,
                  this.$1,
                  v,
                  g,
                  s,
                  r.counterRotationDegrees,
                )),
              !(await this.ensureVideoBufferCapacity(E.byteLength, u))) ||
              this.isStopped ||
              this.converter == null ||
              (this.$24({
                height: s,
                maxFps: c,
                nv12Data: E,
                onVideoDataFnType: p,
                orientation: v,
                voipWasm: f,
                width: g,
              }),
              _(i)),
            !0
          );
        }),
        (t.attemptFallbackRecovery = async function (t) {
          if (this.usingFallback)
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " already on fallback converter, stopping capture loop",
                  ])),
                t,
              ),
              (this.isStopped = !0),
              !1
            );
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " no fallback available, stopping capture loop",
                ])),
              t,
            ),
            (this.isStopped = !0),
            !1
          );
        }),
        (t.createConverter = function (t, n) {
          throw r("err")("createConverter not implemented by subclass");
        }),
        (t.clearScheduledCapture = function () {
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
        (t.getCaptureSchedulerWindow = function () {
          var e;
          return o(
            "WAWebVoipPopoutWindowState",
          ).getIsPopoutWindowActiveAndVisible() &&
            (e = o("WAWebVoipPopoutWindowState").getPopoutWindow()) != null
            ? e
            : window;
        }),
        (t.shouldScheduleWithAnimationFrame = function (t) {
          if (t === window) return document.visibilityState === "visible";
          try {
            return t.document.visibilityState === "visible";
          } catch (e) {
            return !1;
          }
        }),
        (t.createFallbackConverter = function (t, n) {
          return null;
        }),
        (t.ensureVideoBufferCapacity = async function (t, n) {
          if (this.videoBuffer != null && this.videoBufferSize >= t) return !0;
          var e = this.videoBuffer,
            r = this.videoBufferSize;
          ((this.videoBuffer = null),
            (this.videoBufferSize = 0),
            e != null && (await le(e)));
          var a = await ie(t);
          return this.isStopped
            ? (await le(a), !1)
            : ((this.videoBuffer = a),
              (this.videoBufferSize = t),
              r > 0 &&
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.__initVideoCapture = async function (t) {
          var e = t.height,
            n = t.width;
          ((this.width = o("WAWebVoipVideoCaptureSourceRect").closestEven(n)),
            (this.height = o("WAWebVoipVideoCaptureSourceRect").closestEven(
              e,
            )));
          var a = [];
          (this.converter && a.push(this.converter.cleanup()),
            this.fallbackConverter && a.push(this.fallbackConverter.cleanup()),
            await Promise.all(a));
          var i,
            l = !1;
          try {
            if (
              ((i = await this.createConverter(this.width, this.height)),
              (i.isAlive == null ? void 0 : i.isAlive()) === !1)
            )
              throw r("err")("primary converter device is not alive");
          } catch (e) {
            o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:initVideoCapture] primary failed, using fallback: ",
                  "",
                ])),
              e,
            );
            var s = await this.createFallbackConverter(this.width, this.height);
            if (s != null)
              ((i = s),
                (l = !0),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initVideoCapture] Using fallback converter: ",
                      "",
                    ])),
                  i.getConverterName(),
                ));
            else throw e;
          }
          if (this.isStopped) {
            await i.cleanup();
            return;
          }
          if (
            ((this.converter = i),
            (this.primaryConverter = i),
            o("WAWebUA").UA.isSafari && !l)
          ) {
            var u = await this.createFallbackConverter(this.width, this.height);
            u != null && (this.fallbackConverter = u);
          }
        }),
        (t.startVideoCapture = async function (n) {
          var t,
            a,
            i,
            l,
            s = this,
            u = n.height,
            c = n.maxFps,
            d = n.onVideoDataFnType,
            m = n.stream,
            p = n.videoFrameProcessor,
            _ = n.width,
            f = ++this.$15;
          ((this.$16 = { isLogged: !1 }),
            (this.isStopped = !1),
            (this.isCaptureInProgress = !1),
            (this.lastCaptureTime = 0),
            (this.consecutiveErrors = 0),
            (this.usingFallback = !1),
            (this.$1 = 0),
            this.$20(),
            this.$21(),
            (this.$9 = !1),
            (this.$4 = !1),
            (this.$3 = 0),
            (this.$5 = _),
            (this.$6 = u),
            (this.$12 = null),
            (this.$13 = 0),
            (this.$14 = d === "onVideoDataFromJs" && p != null ? p : null),
            o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
            await this.__initVideoCapture({ width: _, height: u }));
          var g = m.getVideoTracks()[0],
            h =
              g == null ||
              g.getSettings == null ||
              (t = g.getSettings()) == null
                ? void 0
                : t.facingMode;
          this.$2 = h === "environment";
          var y = r("nullthrows")(this.converter).getConverterName(),
            C = "voip: [AV:startVideoCapture (" + y + ")]";
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " facingMode=",
                "",
              ])),
            C,
            h != null ? h : "unknown",
          );
          var b =
              (a =
                (i = o("WAWebVoipPopoutWindowState").getPopoutWindow()) == null
                  ? void 0
                  : i.document) != null
                ? a
                : null,
            v = b != null ? b : document;
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " video element owner: ",
                "",
              ])),
            C,
            b != null ? "popout" : "main",
          );
          var P = ae();
          if (P) {
            var N = this.mediaCaptureStream;
            N != null &&
              ((N.videoElement.srcObject = null), N.videoElement.remove());
          }
          this.mediaCaptureStream = {
            mediaStream: m,
            videoElement: v.createElement("video"),
          };
          var M = this.mediaCaptureStream.videoElement;
          if (
            ((M.srcObject = m),
            (M.autoplay = !0),
            (M.muted = !0),
            (M.playsInline = !0),
            P)
          ) {
            (M.setAttribute("aria-hidden", "true"),
              (M.style.cssText =
                "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"));
            var w = v.body;
            if (w == null)
              throw (
                o("WALogger")
                  .ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " no document body to host capture video",
                      ])),
                    C,
                  )
                  .sendLogs("voip-withconverter-capture-no-body"),
                r("err")("No document body to host capture video")
              );
            w.appendChild(M);
          }
          o("WAWebCoreActionsODS").logCallVideoCaptureWithConverterPlayAttempt(
            P,
          );
          try {
            var A;
            (await ((A = this.mediaCaptureStream) == null
              ? void 0
              : A.videoElement.play()),
              o(
                "WAWebCoreActionsODS",
              ).logCallVideoCaptureWithConverterPlaySuccess(P));
          } catch (e) {
            throw (
              o(
                "WAWebCoreActionsODS",
              ).logCallVideoCaptureWithConverterPlayFailure(P),
              e
            );
          }
          if (
            (this.$18(M, C),
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video element ready",
                ])),
              C,
            ),
            !!(await this.ensureVideoBufferCapacity(
              e.getNV12FrameSize(this.width, this.height),
              C,
            )))
          ) {
            var F =
                (l = this.mediaCaptureStream) == null ? void 0 : l.videoElement,
              O =
                await o("WAWebBackendApi").frontendSendAndReceive(
                  "initializeVoipWasm",
                ),
              B = async function (n) {
                if (!(s.isCaptureInProgress || f !== s.$15)) {
                  s.isCaptureInProgress = !0;
                  var t = s.width,
                    a = s.height,
                    i = 1e3 / c;
                  try {
                    if (s.isStopped) return;
                    if (!s.mediaCaptureStream || !F || !s.converter) {
                      o("WALogger").ERROR(
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ": Video capture not ready, canceling frame capture",
                          ])),
                        C,
                      );
                      return;
                    }
                    if (F.readyState < F.HAVE_CURRENT_DATA) {
                      (o("WALogger").WARN(
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " Video not ready yet, skipping frame capture",
                          ])),
                        C,
                      ),
                        n(i));
                      return;
                    }
                    if (
                      F.readyState < 2 ||
                      F.videoWidth === 0 ||
                      F.videoHeight === 0
                    )
                      throw r("err")("Video element not ready for capture");
                    var l = o(
                      "WAWebVoipEncodeTargetFpsState",
                    ).getEncodeTargetFps();
                    if (l > 0) {
                      var u = Math.max(Y, Math.min(J, l + Z)),
                        m = (1e3 / u) * ee,
                        p = self.performance.now(),
                        _ = p - s.lastCaptureTime;
                      if (_ < m) {
                        n(i);
                        return;
                      }
                      s.lastCaptureTime = p;
                    }
                    var g = F;
                    try {
                      var h,
                        y,
                        b = d === "onDesktopCaptureDataFromJs",
                        v = s.$22(F, b);
                      if (v != null) {
                        var S = await s.$25({
                          counterRotation: v,
                          element: F,
                          frameInterval: i,
                          generation: f,
                          height: a,
                          logPrefix: C,
                          maxFps: c,
                          onVideoDataFnType: d,
                          requestCallback: n,
                          voipWasm: O,
                          width: t,
                        });
                        if (S) return;
                      }
                      s.$18(F, C);
                      var R = s.$12,
                        L =
                          R != null
                            ? o(
                                "WAWebVoipVideoCaptureSourceRect",
                              ).getVideoElementSourceCropRect(F, R)
                            : null,
                        E =
                          (h = R == null ? void 0 : R.width) != null
                            ? h
                            : F.videoWidth,
                        P =
                          (y = R == null ? void 0 : R.height) != null
                            ? y
                            : F.videoHeight,
                        N = o("WAWebVoipVideoCaptureSourceRect").closestEven(E),
                        M = o("WAWebVoipVideoCaptureSourceRect").closestEven(P),
                        w =
                          L != null ||
                          N !== F.videoWidth ||
                          M !== F.videoHeight;
                      if (N !== t || M !== a) {
                        if (
                          (o("WALogger").LOG(
                            T ||
                              (T = babelHelpers.taggedTemplateLiteralLoose([
                                "Video dims ",
                                "x",
                                " mismatch ",
                                "x",
                                ", skip",
                              ])),
                            N,
                            M,
                            t,
                            a,
                          ),
                          await s.__initVideoCapture({ width: N, height: M }),
                          !(await s.ensureVideoBufferCapacity(
                            e.getNV12FrameSize(s.width, s.height),
                            C,
                          )))
                        )
                          return;
                        ((s.consecutiveErrors = 0), n(i));
                        return;
                      }
                      if (L != null) {
                        var A = s.$19({ height: M, videoElement: F, width: N }),
                          B = s.$11;
                        if (A != null && B != null)
                          (B.drawImage(
                            F,
                            L.x,
                            L.y,
                            L.width,
                            L.height,
                            0,
                            0,
                            N,
                            M,
                          ),
                            (g = A));
                        else {
                          var W = o(
                              "WAWebVoipVideoCaptureSourceRect",
                            ).getImageBitmapResizeOptionsForSourceCropRect(
                              L,
                              N,
                              M,
                            ),
                            q = await createImageBitmap(
                              F,
                              L.x,
                              L.y,
                              L.width,
                              L.height,
                            );
                          if (W == null) g = q;
                          else
                            try {
                              g = await createImageBitmap(q, W);
                            } finally {
                              q.close();
                            }
                        }
                        if (s.isStopped || !s.converter) return;
                      } else if (w) {
                        var U, V;
                        if (
                          ((g = await createImageBitmap(
                            F,
                            (U = R == null ? void 0 : R.x) != null ? U : 0,
                            (V = R == null ? void 0 : R.y) != null ? V : 0,
                            N,
                            M,
                          )),
                          s.isStopped || !s.converter)
                        )
                          return;
                      }
                      var H = await re({
                        failureLog: s.$16,
                        isCurrent: function () {
                          return s.$17(f);
                        },
                        processor: s.$14,
                        source: g,
                      });
                      if (H == null) {
                        n(i);
                        return;
                      }
                      var G;
                      try {
                        var z = s.converter;
                        if (!z) return;
                        G = await z.convertVideoToNV12(H.image);
                      } catch (e) {
                        await s.handleCaptureError({
                          error: e,
                          frameInterval: i,
                          logPrefix: C,
                          requestCallback: n,
                        });
                        return;
                      } finally {
                        H.release();
                      }
                      s.consecutiveErrors = 0;
                      var j = o("WAWebVoipMediaEnums").Orientation.Normal;
                      if (
                        (s.$1 < 3 &&
                          (s.$1++,
                          o("WALogger").LOG(
                            D ||
                              (D = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " [orient] frame#",
                                " sent=",
                                " reason=display-upright converter=",
                                "x",
                                "",
                              ])),
                            C,
                            s.$1,
                            j,
                            t,
                            a,
                          )),
                        !(await s.ensureVideoBufferCapacity(G.byteLength, C)))
                      )
                        return;
                      if (s.videoBuffer != null) {
                        var K = s.videoBuffer;
                        (O.GROWABLE_HEAP_U8().set(G, K),
                          O[d](
                            K,
                            G.length,
                            t,
                            a,
                            c,
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                            j,
                          ));
                      } else
                        o("WALogger")
                          .ERROR(
                            x ||
                              (x = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " video buffer not initialized",
                              ])),
                            C,
                          )
                          .sendLogs("voip: wasm: video buffer not initialized");
                      var Q = o(
                        "WAWebVoipVideoRenderSource",
                      ).WAWebVoipVideoRenderSource.self(
                        d === "onDesktopCaptureDataFromJs" &&
                          o(
                            "WAWebVoipDualStreamScreenShareState",
                          ).isSelfDualStreamScreenShareActive()
                          ? o("WAWebVoipVideoRenderSource")
                              .WAWebVoipVideoRenderStream.SCREEN_SHARE
                          : o("WAWebVoipVideoRenderSource")
                              .WAWebVoipVideoRenderStream.CAMERA,
                      );
                      (o(
                        "WAWebVoipVideoRendererRegistry",
                      ).videoRendererRegistry.onVideoFrameWasmToJs(
                        Q,
                        G.buffer,
                        t,
                        a,
                        j,
                        o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
                        0,
                        !1,
                      ),
                        n(i));
                    } finally {
                      g instanceof ImageBitmap && g.close();
                    }
                  } catch (e) {
                    (o("WALogger").ERROR(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video processing error: ",
                          "",
                        ])),
                      C,
                      e,
                    ),
                      !s.isStopped &&
                        s.mediaCaptureStream != null &&
                        s.converter != null &&
                        n(i));
                  } finally {
                    f === s.$15 && (s.isCaptureInProgress = !1);
                  }
                }
              };
            F && F.readyState >= F.HAVE_CURRENT_DATA
              ? window.setTimeout(function () {
                  return s.$26(B, f);
                }, 0)
              : F &&
                F.addEventListener(
                  "loadeddata",
                  function () {
                    return s.$26(B, f);
                  },
                  { once: !0 },
                );
          }
        }),
        (t.$26 = function (t, n) {
          var e = this;
          if (this.$17(n)) {
            var r = document.visibilityState === "visible",
              a = function () {
                Promise.resolve(t(i)).catch(function (e) {
                  o("WALogger").WARN(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:captureFrame] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              },
              i = function (r) {
                if (e.$17(n)) {
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
                                a());
                            }, r)));
                        },
                      )))
                    : ((e.timeoutFrameWindow = t),
                      (e.timeoutFrameId = t.setTimeout(function () {
                        ((e.timeoutFrameId = null),
                          (e.timeoutFrameWindow = null),
                          a());
                      }, r)));
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
            var l = function (i) {
              var t, l;
              (e.clearScheduledCapture(),
                (r = document.visibilityState === "visible"));
              var s = o(
                  "WAWebVoipPopoutWindowState",
                ).getIsPopoutWindowActiveAndVisible(),
                u = r || s,
                c = e.getCaptureSchedulerWindow();
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:VideoCapture] ",
                    " visible=",
                    " popout=",
                    " converter=",
                    " scheduler=",
                    "",
                  ])),
                i,
                String(r),
                String(s),
                (t =
                  (l = e.converter) == null ? void 0 : l.getConverterName()) !=
                  null
                  ? t
                  : "none",
                c === window ? "main" : "popout",
              );
              var d = function () {
                e.$17(n) &&
                  (o("WAWebUA").UA.isSafari &&
                    e.fallbackConverter &&
                    (!u && !e.usingFallback
                      ? e.switchToFallbackConverter().catch(function (e) {
                          o("WALogger").WARN(
                            M ||
                              (M = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:VideoCapture] switchToFallback error: ",
                                "",
                              ])),
                            e,
                          );
                        })
                      : u &&
                        e.usingFallback &&
                        e.switchBackToPrimaryConverter().catch(function (e) {
                          o("WALogger").WARN(
                            w ||
                              (w = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:VideoCapture] switchBackToPrimary error: ",
                                "",
                              ])),
                            e,
                          );
                        })),
                  a());
              };
              try {
                c.setTimeout(d, 0);
              } catch (e) {
                window.setTimeout(d, 0);
              }
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
          }
        }),
        (t.switchToFallbackConverter = async function () {
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
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.switchBackToPrimaryConverter = async function () {
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
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
        (t.reconcileState = async function () {
          if (!this.converterSwitchInProgress) {
            if (this.numReconcileRequested > 1) {
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
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
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:VideoCapture] reconcile -> CPU fallback",
                    ])),
                ),
                await this.switchToFallbackConverter())
              : !e &&
                this.usingFallback &&
                this.primaryConverter &&
                (o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:VideoCapture] reconcile -> primary",
                    ])),
                ),
                await this.switchBackToPrimaryConverter());
          }
        }),
        (t.stopVideoCapture = async function () {
          var e,
            t,
            n =
              (e =
                (t = this.converter) == null ? void 0 : t.getConverterName()) !=
              null
                ? e
                : "unknown",
            r = "voip: stopVideoCapture (" + n + ")";
          (o("WALogger").LOG(
            q || (q = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            r,
          ),
            (this.isStopped = !0),
            this.$15++,
            (this.lastCaptureTime = 0),
            o("WAWebVoipEncodeTargetFpsState").resetEncodeTargetFps(),
            this.$21(),
            (this.$4 = !1));
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
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
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
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
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
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
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
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cleaned up active converter",
                    ])),
                  r,
                )),
              c != null &&
                !d.has(c) &&
                (await c.cleanup(),
                o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
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
                (await le(this.videoBuffer),
                  o("WALogger").LOG(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " freed WASM video buffer",
                      ])),
                    r,
                  ));
              } catch (e) {
                o("WALogger").WARN(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
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
        (e.getNV12FrameSize = function (t, n) {
          return Math.floor(t * n * 1.5);
        }),
        e
      );
    })();
    function ae() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_video_capture_dom_attach",
        ) !== !1
      );
    }
    async function ie(e) {
      var t =
        await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      return t._malloc(e);
    }
    async function le(e) {
      var t =
        await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      t._free(e);
    }
    ((l.getImageBitmapResizeOptionsForSourceCropRect = (Q = o(
      "WAWebVoipVideoCaptureSourceRect",
    )).getImageBitmapResizeOptionsForSourceCropRect),
      (l.getVideoElementSourceCropRect = Q.getVideoElementSourceCropRect),
      (l.getVideoSourceContentRect = Q.getVideoSourceContentRect),
      (l.probeVideoSourceContentRect = Q.probeVideoSourceContentRect),
      (l.resolveConverterCaptureRotation = ne),
      (l.prepareConversionSource = re),
      (l.WAWebVoipVideoCaptureWithConverter = oe));
  },
  98,
);
