__d(
  "WAWebVoipWebCodecsEncoder",
  [
    "Promise",
    "WAWebNoop",
    "WAWebVoipMediaEnums",
    "WAWebVoipPresentationFrameNormalizer",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoFrameSourceRectProbe",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipWebCodecsEncoderState",
    "WAWebVoipWebCodecsEncoderVoipParams",
    "WAWebVoipWebCodecsEncoderWatchdog",
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
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      oe = new Map(),
      ae = 5e3,
      ie = 150,
      le = 3e3,
      se = 3,
      ue = 1e3,
      ce = 4e3,
      de = 2,
      me = 1e3,
      pe = 2e3,
      _e = 3,
      fe = 30,
      ge = 2,
      he = null,
      ye = !1,
      Ce = !1,
      be = null;
    function ve(e) {
      return {
        encoder: null,
        frameCounter: 0,
        lastKeyFrameTime: 0,
        currentBitrate: 5e5,
        currentWidth: 640,
        currentHeight: 480,
        currentFps: 30,
        requestKeyframe: !1,
        rateControlInitialized: !1,
        fpsPacingCredit: 0,
        fpsPacingLastFrameTime: 0,
        fpsPacingDropCount: 0,
        fpsPacingEncodeCount: 0,
        encodeStartTimes: new Map(),
        outputWatchdogEnabled: e,
        outputWatchdog: new (o(
          "WAWebVoipWebCodecsEncoderWatchdog",
        ).WAWebVoipWebCodecsEncoderWatchdog)(),
        latencyMin: 1 / 0,
        latencyMax: 0,
        latencySum: 0,
        latencyCount: 0,
        latencyLastLogTime: 0,
        consecutiveEncoderFailures: 0,
        successfulOutputsSinceFailure: 0,
        recoveryOutputWindowStartTimeMs: 0,
        lastEncoderFailureTimeMs: 0,
        preferSoftwareEncoder: !1,
        bitrateMode: "variable",
        refreshBitrateOnResize: !1,
        portDetached: !1,
        lastPortAvailable: !1,
        reattachFailures: 0,
        lastReattachFailureTime: 0,
        cropCanvas: null,
        cropCanvasCtx: null,
        isScreenShare: !1,
      };
    }
    function Se(e) {
      return e & -2;
    }
    function Re(e) {
      return {
        codec: o("WAWebVoipWebCodecsEncoderState").getH264CodecString(
          e.currentWidth,
          e.currentHeight,
          e.currentFps,
        ),
        width: e.currentWidth,
        height: e.currentHeight,
        bitrate: e.currentBitrate,
        framerate: e.currentFps,
        hardwareAcceleration: e.preferSoftwareEncoder
          ? "prefer-software"
          : "prefer-hardware",
        latencyMode: "realtime",
        bitrateMode: e.bitrateMode,
        avc: { format: "annexb" },
      };
    }
    function Le(e) {
      return e <= 0 ? 0 : Math.min(ue * Math.pow(2, e - 1), ce);
    }
    function Ee(t, n) {
      var r = "voip: [webcodec-encode][stream=" + t + "]",
        a = new VideoEncoder({
          output: function (l, s) {
            var i, u, c, d, m;
            if (n.encoder === a) {
              Te(n);
              var p = n.encodeStartTimes.get(l.timestamp),
                _ = 0;
              if (p != null) {
                n.encodeStartTimes.delete(l.timestamp);
                var f = Date.now();
                if (
                  ((_ = f - p),
                  (n.latencyMin = Math.min(n.latencyMin, _)),
                  (n.latencyMax = Math.max(n.latencyMax, _)),
                  (n.latencySum += _),
                  n.latencyCount++,
                  f - n.latencyLastLogTime >= ae)
                ) {
                  var g =
                    n.latencyCount > 0
                      ? (n.latencySum / n.latencyCount).toFixed(1)
                      : "0";
                  (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " encode latency (5s): min=",
                        "ms max=",
                        "ms avg=",
                        "ms (",
                        " frames) pacing=",
                        "enc/",
                        "drop@",
                        "fps",
                      ])),
                    r,
                    n.latencyMin,
                    n.latencyMax,
                    g,
                    n.latencyCount,
                    n.fpsPacingEncodeCount,
                    n.fpsPacingDropCount,
                    n.currentFps,
                  ),
                    (n.latencyMin = 1 / 0),
                    (n.latencyMax = 0),
                    (n.latencySum = 0),
                    (n.latencyCount = 0),
                    (n.fpsPacingEncodeCount = 0),
                    (n.fpsPacingDropCount = 0),
                    (n.latencyLastLogTime = f));
                }
              }
              var h =
                  (i =
                    s == null || (u = s.decoderConfig) == null
                      ? void 0
                      : u.codedWidth) != null
                    ? i
                    : n.currentWidth,
                y =
                  (c =
                    s == null || (d = s.decoderConfig) == null
                      ? void 0
                      : d.codedHeight) != null
                    ? c
                    : n.currentHeight,
                C =
                  (m = o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).encodedFrameOrientations.get(l.timestamp)) != null
                    ? m
                    : o(
                        "WAWebVoipVideoCaptureOffThread",
                      ).getCurrentWorkerOrientation();
              yt(t, n, l, h, y, _, C);
            }
          },
          error: (function (e) {
            function t(t) {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function (e) {
            if (!ke(n, a)) {
              o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " ignored fatal error from retired encoder: ",
                    "",
                  ])),
                r,
                e.message,
              );
              return;
            }
            var t = Pe(n);
            t <= se
              ? o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " encoder fatal error, will attempt recovery (",
                      "/",
                      "): ",
                      "",
                    ])),
                  r,
                  t,
                  se,
                  e.message,
                )
              : t === se + 1 &&
                o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " encoder recovery exhausted after fatal error (",
                      " failures): ",
                      "",
                    ])),
                  r,
                  t,
                  e.message,
                );
          }),
        });
      return a;
    }
    function ke(e, t) {
      return e.encoder !== t
        ? !1
        : ((e.encoder = null), e.encodeStartTimes.clear(), !0);
    }
    function Ie(e, t) {
      try {
        e.state !== "closed" && e.close();
      } catch (e) {
        t == null || t(e);
      }
    }
    function Te(e) {
      if (
        (e.outputWatchdog.recordOutput(), e.consecutiveEncoderFailures !== 0)
      ) {
        var t = self.performance.now();
        if (
          (e.successfulOutputsSinceFailure++,
          e.successfulOutputsSinceFailure === 1 &&
            (e.recoveryOutputWindowStartTimeMs = t),
          !e.outputWatchdogEnabled)
        ) {
          xe(e);
          return;
        }
        var n = e.successfulOutputsSinceFailure >= De(e.currentFps),
          r =
            e.successfulOutputsSinceFailure >= _e &&
            t - e.recoveryOutputWindowStartTimeMs >= pe;
        (!n && !r) || xe(e);
      }
    }
    function De(e) {
      return Math.max(_e, Math.min(fe, Math.ceil(Math.max(e, 1) * (pe / 1e3))));
    }
    function xe(e) {
      ((e.consecutiveEncoderFailures = 0),
        (e.successfulOutputsSinceFailure = 0),
        (e.recoveryOutputWindowStartTimeMs = 0),
        (e.lastEncoderFailureTimeMs = 0));
    }
    function $e(e) {
      (e.outputWatchdog.reset(),
        e.encodeStartTimes.clear(),
        (e.successfulOutputsSinceFailure = 0),
        (e.recoveryOutputWindowStartTimeMs = 0));
    }
    function Pe(e, t) {
      return (
        t === void 0 && (t = !0),
        $e(e),
        e.consecutiveEncoderFailures++,
        (e.lastEncoderFailureTimeMs = self.performance.now()),
        e.bitrateMode === "constant" &&
          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [webcodec-encode] encoder failed in constant bitrate mode, falling back to variable",
              ])),
          ),
        (e.bitrateMode = "variable"),
        t &&
          e.consecutiveEncoderFailures >= ge &&
          (e.preferSoftwareEncoder = !0),
        (e.requestKeyframe = !0),
        e.consecutiveEncoderFailures
      );
    }
    function Ne(e, t) {
      if (
        (e.encodeStartTimes.set(t, Date.now()),
        !(e.encodeStartTimes.size <= ie))
      ) {
        var n = e.encodeStartTimes.keys().next().value;
        n != null && e.encodeStartTimes.delete(n);
      }
    }
    function Me(e, t) {
      if (t.outputWatchdogEnabled) {
        var n = t.outputWatchdog.recordFrameSubmitted(
          t.currentFps,
          self.performance.now(),
        );
        n != null && we(e, t, n);
      }
    }
    function we(e, t, n) {
      var r = t.encoder;
      if (r != null) {
        var a = "voip: [webcodec-encode][stream=" + e + "]";
        ke(t, r);
        var i = Pe(t);
        (Ie(r),
          i <= se
            ? o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " encoder output stalled after ",
                    " frames, will attempt recovery (",
                    "/",
                    ")",
                  ])),
                a,
                n,
                i,
                se,
              )
            : i === se + 1 &&
              o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " encoder recovery exhausted after output stalled for ",
                    " frames (",
                    " failures)",
                  ])),
                a,
                n,
                i,
              ));
      }
    }
    function Ae(e) {
      var t = oe.get(e);
      if ((t == null ? void 0 : t.encoder) != null) {
        var n = t.encoder;
        (ke(t, n), $e(t), Ie(n));
      }
      oe.delete(e);
    }
    function Fe() {
      for (var e of Array.from(oe.keys())) Ae(e);
      ((ze = null),
        (je = null),
        o(
          "WAWebVoipPresentationFrameNormalizer",
        ).resetPresentationFrameNormalizer(),
        (Ke = null));
    }
    function Oe(e, t) {
      var n = t.encoder;
      if (n != null) {
        if (n.state === "configured") return n;
        var r = n.state;
        (ke(t, n), Ie(n));
        var a = r === "closed",
          i = Pe(t, a);
        return (
          i <= se
            ? o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [webcodec-encode][stream=",
                    "] encoder is ",
                    ", will attempt recovery (",
                    "/",
                    ")",
                  ])),
                e,
                r,
                i,
                se,
              )
            : i === se + 1 &&
              o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [webcodec-encode][stream=",
                    "] encoder recovery exhausted after encoder entered ",
                    " state (",
                    " failures)",
                  ])),
                e,
                r,
                i,
              ),
          null
        );
      }
      return Be(t) ? We(e, t) : null;
    }
    function Be(e) {
      return (
        e.consecutiveEncoderFailures > 0 &&
        e.consecutiveEncoderFailures <= se &&
        self.performance.now() - e.lastEncoderFailureTimeMs >= ue
      );
    }
    function We(e, t) {
      var n = "voip: [webcodec-encode][stream=" + e + "]";
      o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "",
            " recreating encoder after failure (attempt ",
            "/",
            ", backend=",
            ")",
          ])),
        n,
        t.consecutiveEncoderFailures,
        se,
        t.preferSoftwareEncoder ? "software" : "hardware",
      );
      var r = null;
      try {
        return (
          (r = Ee(e, t)),
          (t.encoder = r),
          r.configure(Re(t)),
          $e(t),
          (t.requestKeyframe = !0),
          r
        );
      } catch (e) {
        return (r != null && (ke(t, r), Ie(r)), qe(t, n, e), null);
      }
    }
    function qe(e, t, n) {
      var r = Pe(e);
      r <= se
        ? o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " encoder recovery failed (",
                "/",
                "): ",
                "",
              ])),
            t,
            r,
            se,
            n,
          )
        : r === se + 1 &&
          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " encoder recovery exhausted after configure failure (",
                " failures): ",
                "",
              ])),
            t,
            r,
            n,
          );
    }
    function Ue(e) {
      var t = e.visibleRect;
      return {
        x: t != null ? Math.max(0, Math.floor(t.x)) : 0,
        y: t != null ? Math.max(0, Math.floor(t.y)) : 0,
      };
    }
    function Ve(e, t) {
      var n = r("WAWebVoipVideoFrameCtor")();
      return n == null ? e : new n(e, t);
    }
    function He(e) {
      var t = e.displayWidth,
        n = e.displayHeight,
        r = Ue(e),
        o = r.x,
        a = r.y;
      return e.codedWidth === t && e.codedHeight === n && o === 0 && a === 0
        ? e
        : Ve(e, {
            visibleRect: { x: o, y: a, width: t, height: n },
            displayWidth: t,
            displayHeight: n,
          });
    }
    function Ge(e, t, n, r, o, a, i) {
      return Ve(e, {
        visibleRect: { x: t, y: n, width: r, height: o },
        displayWidth: a,
        displayHeight: i,
      });
    }
    var ze = null,
      je = null,
      Ke = null;
    function Qe(e, t, n, r) {
      if (e != null && e.width === n && e.height === r) return [e, t];
      var o = new OffscreenCanvas(n, r);
      return [o, o.getContext("2d")];
    }
    function Xe(e, t, n) {
      var r = o(
          "WAWebVoipPresentationFrameNormalizer",
        ).getPresentationFrameTransformDiagnostics(e, t, n),
        a = r.message,
        i = r.signature;
      i !== Ke &&
        ((Ke = i),
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          C || (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          a,
        ));
    }
    function Ye(e) {
      var t,
        n = e.cropH,
        r = e.cropW,
        a = e.cropX,
        i = e.cropY,
        l = e.ctx,
        s = e.frame,
        u = e.srcH,
        c = e.srcW,
        d = e.targetH,
        m = e.targetW,
        p = Qe(ze, je, c, u);
      ((ze = p[0]), (je = p[1]));
      var _ = Qe(l.cropCanvas, l.cropCanvasCtx, m, d),
        f = _[0],
        g = _[1];
      ((l.cropCanvas = f), (l.cropCanvasCtx = g));
      var h = je,
        y = g,
        C = ze;
      return h == null || y == null || C == null
        ? (o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [webcodec-encode] cropFrame canvas context unavailable, clearing for retry",
              ])),
          ),
          (ze = null),
          (je = null),
          (l.cropCanvas = null),
          (l.cropCanvasCtx = null),
          null)
        : (h.drawImage(s, 0, 0, c, u),
          y.drawImage(C, a, i, r, n, 0, 0, m, d),
          new VideoFrame(f, {
            timestamp: s.timestamp,
            duration: (t = s.duration) != null ? t : void 0,
          }));
    }
    function Je(e) {
      var t = e.encoderCtx,
        n = e.frame,
        r = e.targetH,
        o = e.targetW,
        a = n.displayWidth,
        i = n.displayHeight;
      if (o <= 0 || r <= 0 || a <= 0 || i <= 0) return n;
      var l = Se(Math.max(o, 2)),
        s = Se(Math.max(r, 2)),
        u = He(n),
        c = a / i,
        d = l / s;
      if (Math.abs(c - d) < 0.01) return u;
      var m, p, _, f;
      if (
        (c > d
          ? ((f = i),
            (_ = Math.round(i * d)),
            (m = Math.round((a - _) / 2)),
            (p = 0))
          : ((_ = a),
            (f = Math.round(a / d)),
            (m = 0),
            (p = Math.round((i - f) / 2))),
        (m &= -2),
        (p &= -2),
        (_ &= -2),
        (f &= -2),
        (_ = Math.min(_, a - m)),
        (f = Math.min(f, i - p)),
        _ <= 0 || f <= 0)
      )
        return u;
      var g;
      return (
        be === !0
          ? (g = Ge(u, m, p, _, f, l, s))
          : (g = Ye({
              cropH: f,
              cropW: _,
              cropX: m,
              cropY: p,
              ctx: t,
              frame: u,
              srcH: i,
              srcW: a,
              targetH: s,
              targetW: l,
            })),
        g != null && u !== n && u.close(),
        g != null ? g : u
      );
    }
    function Ze(e) {
      var t = Date.now(),
        n = e.fpsPacingLastFrameTime > 0 ? t - e.fpsPacingLastFrameTime : 0;
      e.fpsPacingLastFrameTime = t;
      var r = Math.max(e.currentFps, 1);
      return (
        n > 0 && n < 1e3
          ? (e.fpsPacingCredit += (r * n) / 1e3)
          : (e.fpsPacingCredit = 1),
        e.fpsPacingCredit < 1
          ? (e.fpsPacingDropCount++, !1)
          : ((e.fpsPacingCredit -= 1),
            (e.fpsPacingCredit = Math.min(e.fpsPacingCredit, 1)),
            e.fpsPacingEncodeCount++,
            !0)
      );
    }
    function et(e) {
      var t = Date.now(),
        n = t - e.lastKeyFrameTime;
      return e.requestKeyframe || n > le || e.frameCounter === 0;
    }
    function tt(e) {
      var t = e.streamId,
        n = "voip: [webcodec-encode][stream=" + t + "]",
        r = oe.get(t);
      (r == null && (r = rt({ logPrefix: n, params: e, streamId: t })),
        (r.isScreenShare = e.isScreenShare));
      var a = r.bitrateMode;
      r.rateControlInitialized ||
        ((r.rateControlInitialized = !0),
        (r.bitrateMode = o(
          "WAWebVoipWebCodecsEncoderVoipParams",
        ).getEncoderBitrateMode(
          he,
          e.isScreenShare || Ce,
          r.consecutiveEncoderFailures > 0,
        )),
        (r.refreshBitrateOnResize = o(
          "WAWebVoipWebCodecsEncoderVoipParams",
        ).shouldRefreshBitrateOnResize(he)),
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " rate control initialized, encoding can begin: bitrateMode=",
              "",
            ])),
          n,
          r.bitrateMode,
        ));
      var i = Se(e.targetWidth),
        l = Se(e.targetHeight),
        s = Math.max(e.targetFps, 1),
        u = i !== r.currentWidth || l !== r.currentHeight,
        c =
          r.bitrateMode !== a ||
          u ||
          e.targetBitrateBps !== r.currentBitrate ||
          s !== r.currentFps;
      if (
        ((e.requestKeyframe || u) && (r.requestKeyframe = !0),
        c && r.encoder != null && r.encoder.state === "configured")
      ) {
        var d = r.currentBitrate,
          m = r.currentWidth,
          p = r.currentHeight,
          _ = r.currentFps;
        ((r.currentBitrate = e.targetBitrateBps),
          (r.currentWidth = i),
          (r.currentHeight = l),
          (r.currentFps = s),
          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " reconfiguring: ",
                "x",
                " bitrate=",
                " fps=",
                "",
              ])),
            n,
            i,
            l,
            e.targetBitrateBps,
            s,
          ));
        try {
          nt(r.encoder, r, n, {
            resized: u && r.bitrateMode === a,
            prevCodec: o("WAWebVoipWebCodecsEncoderState").getH264CodecString(
              m,
              p,
              _,
            ),
          });
        } catch (e) {
          ((r.currentBitrate = d),
            (r.currentWidth = m),
            (r.currentHeight = p),
            (r.currentFps = _),
            (r.bitrateMode = a),
            o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " reconfigure failed: ",
                  "",
                ])),
              n,
              e,
            ));
        }
      } else
        ((r.currentBitrate = e.targetBitrateBps),
          (r.currentWidth = i),
          (r.currentHeight = l),
          (r.currentFps = s));
    }
    function nt(e, t, n, r) {
      var a = Re(t);
      if ((e.configure(a), !(!r.resized || !t.refreshBitrateOnResize)))
        try {
          var i = o(
            "WAWebVoipWebCodecsEncoderVoipParams",
          ).getBitrateRefreshAfterResize(
            r.prevCodec,
            a.codec,
            t.currentBitrate,
          );
          i != null &&
            (e.configure(babelHelpers.extends({}, a, { bitrate: i })),
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " re-applied bitrate after resize",
                ])),
              n,
            ));
        } catch (e) {
          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " bitrate refresh failed: ",
                "",
              ])),
            n,
            e,
          );
        }
    }
    function rt(e) {
      var t = e.logPrefix,
        n = e.params,
        r = e.streamId,
        a = ve(ye);
      if ((oe.set(r, a), he == null || r <= 0)) return a;
      try {
        return (
          (a.currentBitrate = n.targetBitrateBps),
          (a.currentWidth = Se(n.targetWidth)),
          (a.currentHeight = Se(n.targetHeight)),
          (a.currentFps = Math.max(n.targetFps, 1)),
          (a.encoder = Ee(r, a)),
          a.encoder.configure(Re(a)),
          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " encoder created and configured: ",
                "x",
                " ",
                "bps ",
                "fps",
              ])),
            t,
            a.currentWidth,
            a.currentHeight,
            a.currentBitrate,
            a.currentFps,
          ),
          a
        );
      } catch (e) {
        return (a.encoder != null && pt(t, r, a, a.encoder), ot(a, t, e), a);
      }
    }
    function ot(e, t, n) {
      var r = Pe(e);
      o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "",
            " initial encoder configuration failed, will attempt recovery (",
            "/",
            "): ",
            "",
          ])),
        t,
        r,
        se,
        n,
      );
    }
    function at(e) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield lt(e, de);
          for (var t of ut()) {
            var n = t.ctx,
              r = t.encoder,
              o = t.streamId;
            pt(e, o, n, r);
          }
          oe.clear();
        })),
        it.apply(this, arguments)
      );
    }
    function lt(e, t) {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!(t <= 0)) {
            var r = ut();
            r.length !== 0 &&
              (yield (re || (re = n("Promise"))).all(
                r.map(function (t) {
                  var n = t.ctx,
                    r = t.encoder,
                    o = t.streamId;
                  return ct(e, o, n, r);
                }),
              ),
              yield lt(e, t - 1));
          }
        })),
        st.apply(this, arguments)
      );
    }
    function ut() {
      var e = [];
      for (var t of oe) {
        var n = t[0],
          r = t[1];
        r.encoder != null &&
          e.push({ streamId: n, ctx: r, encoder: r.encoder });
      }
      return e;
    }
    function ct(e, t, n, r) {
      return dt.apply(this, arguments);
    }
    function dt() {
      return (
        (dt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r.state === "configured")
              try {
                yield _t(r);
              } catch (n) {
                o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " error flushing encoder stream=",
                      ": ",
                      "",
                    ])),
                  e,
                  t,
                  n,
                );
              }
            pt(e, t, n, r);
          },
        )),
        dt.apply(this, arguments)
      );
    }
    function mt() {
      return new (re || (re = n("Promise")))(function (e) {
        var t = function () {
          o("WAWebVoipVideoCaptureOffThread").getStopCapture()
            ? e()
            : globalThis.setTimeout(t, 200);
        };
        t();
      });
    }
    function pt(e, t, n, r) {
      (ke(n, r),
        Ie(r, function (n) {
          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " error closing encoder stream=",
                ": ",
                "",
              ])),
            e,
            t,
            n,
          );
        }));
    }
    function _t(e) {
      return ft.apply(this, arguments);
    }
    function ft() {
      return (
        (ft = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flush();
          t.catch(r("WAWebNoop"));
          var o = null,
            a = new (re || (re = n("Promise")))(function (e, t) {
              o = globalThis.setTimeout(function () {
                t(r("err")("encoder flush timed out after " + me + "ms"));
              }, me);
            });
          try {
            yield (re || (re = n("Promise"))).race([t, a]);
          } finally {
            o != null && globalThis.clearTimeout(o);
          }
        })),
        ft.apply(this, arguments)
      );
    }
    function gt(e, t, n, r) {
      return ht.apply(this, arguments);
    }
    function ht() {
      return (
        (ht = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            a === void 0 && (a = {});
            var i = a,
              l = i.enableOutputWatchdog,
              s = l === void 0 ? !1 : l,
              u = i.initialOrientationValue,
              c = i.isScreenShare,
              d = c === void 0 ? !1 : c,
              m = i.normalizeVideoElementPresentationFrames,
              p = m === void 0 ? !1 : m,
              _ = i.videoElementCapture,
              f = _ === void 0 ? !1 : _,
              g = "voip: [webcodec-encode]";
            try {
              var h = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var a = p ? n : void 0,
                      i = o(
                        "WAWebVoipVideoCaptureOffThread",
                      ).getFrameOrientation(e, a),
                      l = o(
                        "WAWebVoipPresentationFrameNormalizer",
                      ).preparePresentationFrame({
                        frame: e,
                        frameMetadata: a,
                        isScreenShare: d,
                        normalizationEnabled: p,
                        requestedHeight: t.height,
                        requestedWidth: t.width,
                      }),
                      s = l.frame;
                    try {
                      (a != null && Xe(e, a, l),
                        self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFrameTick());
                      var u = s.displayWidth,
                        c = s.displayHeight;
                      (!d &&
                        (u !== b || c !== v) &&
                        (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                          q ||
                            (q = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " camera capture size changed: ",
                              "x",
                              " -> ",
                              "x",
                              "",
                            ])),
                          g,
                          b,
                          v,
                          u,
                          c,
                        ),
                        r.setVideoPreviewSize(u, c),
                        (b = u),
                        (v = c)),
                        d &&
                          (u !== b || c !== v) &&
                          ((b = u),
                          (v = c),
                          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                            U ||
                              (U = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " screen share capture size changed: ",
                                "x",
                                "",
                              ])),
                            g,
                            u,
                            c,
                          ),
                          r.setScreenShareCaptureSize(u, c)));
                      var m = o(
                          "WAWebVoipMediaEnums",
                        ).formatEnumFromVideoFrameFormat(s.format),
                        _ = s.format === "BGRA";
                      if (S < R) {
                        var f, h, y, C, E;
                        (S++,
                          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                            V ||
                              (V = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " frame[",
                                "] format=",
                                " coded=",
                                "x",
                                " display=",
                                "x",
                                " colorSpace=",
                                "/",
                                "",
                              ])),
                            g,
                            S,
                            (f = s.format) != null ? f : "null",
                            s.codedWidth,
                            s.codedHeight,
                            s.displayWidth,
                            s.displayHeight,
                            (h =
                              (y = s.colorSpace) == null
                                ? void 0
                                : y.primaries) != null
                              ? h
                              : "unknown",
                            (C =
                              (E = s.colorSpace) == null
                                ? void 0
                                : E.transfer) != null
                              ? C
                              : "unknown",
                          ));
                      }
                      try {
                        if (
                          m ===
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                              .NV12 ||
                          m ===
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                              .I420 ||
                          m ===
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                              .RGBA ||
                          _
                        ) {
                          var k = Se(s.displayWidth),
                            I = Se(s.displayHeight),
                            T = Ue(s),
                            D = T.x,
                            x = T.y,
                            $ = s.allocationSize();
                          if (
                            ((L.buffer.byteLength === 0 || L.byteLength < $) &&
                              (L = new Uint8Array($)),
                            s.codedWidth !== k ||
                            s.codedHeight !== I ||
                            D !== 0 ||
                            x !== 0
                              ? yield s.copyTo(L, {
                                  rect: { x: D, y: x, width: k, height: I },
                                })
                              : yield s.copyTo(L),
                            _)
                          )
                            for (var P = 0; P < L.length; P += 4) {
                              var N = L[P];
                              ((L[P] = L[P + 2]), (L[P + 2] = N));
                            }
                          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                            {
                              userJid: o("WAWebVoipVideoRendererInterface")
                                .selfPreviewJid,
                              frameBuffer: L.buffer,
                              width: k,
                              height: I,
                              format: _
                                ? o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                    .RGBA
                                : m,
                              orientation: i,
                              timestamp: 0,
                              isKeyFrame: !1,
                              isScreenShare: d,
                            },
                          );
                        } else if (S < R) {
                          var M;
                          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                            H ||
                              (H = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " skipping self-preview: unrecognized frame format=",
                                "",
                              ])),
                            g,
                            (M = s.format) != null ? M : "null",
                          );
                        }
                      } catch (e) {
                        S < R &&
                          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                            G ||
                              (G = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " self-preview error: ",
                                "",
                              ])),
                            g,
                            e,
                          );
                      }
                      o(
                        "WAWebVoipVideoCaptureOffThread",
                      ).encodedFrameOrientations.set(s.timestamp, i);
                      var w = r.getEncodedVideoPortMask();
                      for (var A of oe) {
                        var F = A[0],
                          O = A[1],
                          B = (w & (1 << F)) !== 0;
                        if (B)
                          O.portDetached
                            ? ((O.lastPortAvailable = !0), Ct(F, O, g))
                            : (O.lastPortAvailable = !0);
                        else {
                          if (!O.portDetached) {
                            if (
                              (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                                z ||
                                  (z = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " stream ",
                                    " port detached, closing encoder",
                                  ])),
                                g,
                                F,
                              ),
                              O.encoder != null)
                            ) {
                              var W = O.encoder;
                              (ke(O, W), $e(O), Ie(W));
                            }
                            ((O.portDetached = !0), xe(O));
                          }
                          (O.lastPortAvailable &&
                            ((O.reattachFailures = 0),
                            (O.lastReattachFailureTime = 0)),
                            (O.lastPortAvailable = !1));
                        }
                      }
                      var K = !1;
                      for (var Q of oe.values())
                        if (Q.isScreenShare) {
                          K = !0;
                          break;
                        }
                      for (var X of oe) {
                        var Y = X[0],
                          J = X[1];
                        {
                          if (J.portDetached || !J.rateControlInitialized)
                            continue;
                          var Z = d ? !K || J.isScreenShare : !J.isScreenShare;
                          if (!Z) continue;
                          var ee = Oe(Y, J);
                          if (ee == null || !Ze(J)) continue;
                          var te = et(J),
                            ne = s.clone(),
                            re = Je({
                              encoderCtx: J,
                              frame: ne,
                              targetH: J.currentHeight,
                              targetW: J.currentWidth,
                            });
                          try {
                            (Ne(J, s.timestamp),
                              ee.encode(re, { keyFrame: te }));
                          } finally {
                            (re !== ne && re.close(), ne.close());
                          }
                          (J.frameCounter++,
                            te &&
                              ((J.lastKeyFrameTime = Date.now()),
                              (J.requestKeyframe = !1)),
                            Me(Y, J));
                        }
                      }
                      var ae = 150;
                      if (
                        o("WAWebVoipVideoCaptureOffThread")
                          .encodedFrameOrientations.size >
                        ae * 2
                      )
                        for (
                          var ie = Array.from(
                              o(
                                "WAWebVoipVideoCaptureOffThread",
                              ).encodedFrameOrientations.keys(),
                            ),
                            le = ie.length - ae,
                            se = 0;
                          se < le;
                          se++
                        )
                          o(
                            "WAWebVoipVideoCaptureOffThread",
                          ).encodedFrameOrientations.delete(ie[se]);
                    } catch (e) {
                      o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                        j ||
                          (j = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " encode error: ",
                            "",
                          ])),
                        g,
                        e,
                      );
                    } finally {
                      s !== e && s.close();
                    }
                  },
                );
                return function (n, r) {
                  return e.apply(this, arguments);
                };
              })();
              (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " starting capture ",
                    "x",
                    "@",
                    "fps presentationOrientationFix=",
                    "",
                  ])),
                g,
                t.width,
                t.height,
                t.maxFps,
                String(p),
              ),
                o("WAWebVoipVideoCaptureOffThread").updateStopCapture(!1),
                (he = r),
                (ye = s),
                (Ce = d),
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFpsReset(),
                u != null &&
                  (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).updateCurrentWorkerOrientation(u),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " initial orientation: ",
                        "",
                      ])),
                    g,
                    u,
                  )),
                be == null &&
                  ((be = o(
                    "WAWebVoipVideoFrameSourceRectProbe",
                  ).probeVideoFrameSourceRectSupport()),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " visibleRect crop probe: ",
                        "",
                      ])),
                    g,
                    be ? "supported (fast path)" : "broken (canvas workaround)",
                  )));
              var y = 0;
              Fe();
              var C = ve(ye);
              ((C.lastKeyFrameTime = Date.now()),
                (C.currentWidth = Se(t.width)),
                (C.currentHeight = Se(t.height)),
                (C.currentFps = Math.max(t.maxFps, 1)),
                (C.latencyLastLogTime = Date.now()),
                oe.set(y, C),
                (t.width !== C.currentWidth || t.height !== C.currentHeight) &&
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " normalized odd dimensions: ",
                        "x",
                        " -> ",
                        "x",
                        "",
                      ])),
                    g,
                    t.width,
                    t.height,
                    C.currentWidth,
                    C.currentHeight,
                  ));
              var b = 0,
                v = 0,
                S = 0,
                R = 5,
                L = new Uint8Array(Math.floor(t.width * t.height * 1.5));
              try {
                var E = Ee(y, C);
                C.encoder = E;
                var k = Re(C);
                (E.configure(k),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " encoder configured: codec=",
                        " bitrate=",
                        "",
                      ])),
                    g,
                    k.codec,
                    C.currentBitrate,
                  ));
              } catch (e) {
                throw (Ae(y), e);
              }
              if (f)
                (o("WAWebVoipVideoCaptureOffThread").registerCaptureAndEncodeFn(
                  h,
                ),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video-element mode: encoder ready, waiting for frames",
                      ])),
                    g,
                  ),
                  yield o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).getInterruptCaptureOnStop()
                    ? o("WAWebVoipVideoCaptureOffThread").waitForStopCapture()
                    : mt(),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video-element mode: stop requested",
                      ])),
                    g,
                  ),
                  o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).registerCaptureAndEncodeFn(null),
                  yield at(g));
              else if (e != null)
                try {
                  var I,
                    T =
                      e.readable ||
                      (yield new MediaStreamTrackProcessor({ track: e.track })
                        .readable);
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got MediaStreamTrackProcessor readable",
                      ])),
                    g,
                  );
                  var D = T.getReader();
                  for (
                    o("WAWebVoipVideoCaptureOffThread").registerActiveCapture(
                      D,
                      (I = e.track) != null ? I : null,
                    ),
                      o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                        Y ||
                          (Y = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " starting capture loop",
                          ])),
                        g,
                      );
                    !o("WAWebVoipVideoCaptureOffThread").getStopCapture();
                  ) {
                    var x = yield D.read(),
                      $ = x.done,
                      P = x.value;
                    try {
                      if ($ || !P) {
                        o("WAWebVoipVideoCaptureOffThread").updateStopCapture(
                          !0,
                        );
                        break;
                      }
                      yield h(P);
                    } finally {
                      P == null || P.close();
                    }
                  }
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " finished capture loop",
                      ])),
                    g,
                  );
                } finally {
                  (o("WAWebVoipVideoCaptureOffThread").clearActiveCapture(),
                    e.track && e.track.stop(),
                    yield at(g));
                }
              else
                (o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " captureObject is null in non-videoElement mode",
                    ])),
                  g,
                ),
                  yield at(g));
            } catch (e) {
              o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " capture error: ",
                    "",
                  ])),
                g,
                e,
              );
            } finally {
              ((he = null), (ye = !1), (Ce = !1));
              try {
                r.exitJsWorkerThread();
              } catch (e) {
                o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " exitJsWorkerThread error: ",
                      "",
                    ])),
                  g,
                  e,
                );
              }
              o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exit capture worker thread",
                  ])),
                g,
              );
            }
          },
        )),
        ht.apply(this, arguments)
      );
    }
    function yt(e, t, n, r, a, i, l) {
      var s = "voip: [webcodec-encode][stream=" + e + "]",
        u = he;
      if (u == null) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " handleEncodedChunk called with no voipWasm",
            ])),
          s,
        );
        return;
      }
      try {
        var c = new Uint8Array(n.byteLength);
        n.copyTo(c);
        var d = n.type === "key",
          m = n.timestamp / 1e3,
          p = Date.now() - m;
        d &&
          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " encoded keyframe: size=",
                " captureTsMs=",
                " captureToEncodedMs=",
                " ",
                "x",
                "",
              ])),
            s,
            c.byteLength,
            m.toFixed(2),
            p.toFixed(1),
            r,
            a,
          );
        var _ = u._malloc(c.byteLength),
          f = 0;
        try {
          (u.GROWABLE_HEAP_U8().set(c, _),
            (f = u.onEncodedVideoDataFromJsForStream(
              e,
              _,
              c.byteLength,
              r,
              a,
              m,
              d,
              i,
              l,
            )));
        } finally {
          u._free(_);
        }
        (d && (t.lastKeyFrameTime = Date.now()),
          f === 1 &&
            (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " WASM requested keyframe (initial frames dropped)",
                ])),
              s,
            ),
            (t.requestKeyframe = !0)));
      } catch (e) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " error handling encoded chunk: ",
              "",
            ])),
          s,
          e,
        );
      }
    }
    function Ct(e, t, n) {
      var r = Le(t.reattachFailures);
      if (!bt(t, r)) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " stream ",
              " port reattached, recreating encoder",
            ])),
          n,
          e,
        );
        var a = null;
        try {
          ((a = Ee(e, t)), (t.encoder = a), a.configure(Re(t)), $e(t), vt(t));
        } catch (n) {
          (a != null && (ke(t, a) && $e(t), Ie(a)), St(e, t, n));
        }
      }
    }
    function bt(e, t) {
      return t > 0 && self.performance.now() - e.lastReattachFailureTime < t;
    }
    function vt(e) {
      ((e.requestKeyframe = !0),
        (e.portDetached = !1),
        (e.reattachFailures = 0),
        (e.lastReattachFailureTime = 0));
    }
    function St(e, t, n) {
      (t.reattachFailures++,
        (t.lastReattachFailureTime = self.performance.now()),
        t.outputWatchdogEnabled &&
          t.reattachFailures >= ge &&
          (t.preferSoftwareEncoder = !0));
      var r = "voip: [webcodec-encode][stream=" + e + "]";
      o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
        M ||
          (M = babelHelpers.taggedTemplateLiteralLoose([
            "",
            " reattach failed (attempt ",
            ", nextBackend=",
            "), will retry in ",
            "ms: ",
            "",
          ])),
        r,
        t.reattachFailures,
        t.preferSoftwareEncoder ? "software" : "hardware",
        Le(t.reattachFailures),
        n,
      );
    }
    ((l.updateWebCodecsEncoderParams = tt),
      (l.startVideoCaptureWithWebCodecsEncoderInWorker = gt));
  },
  98,
);
