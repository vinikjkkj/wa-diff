__d(
  "WAWebVoipWebCodecsEncoder",
  [
    "WAWebNoop",
    "WAWebVoipPresentationFrameNormalizer",
    "WAWebVoipSelfPreviewSender",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoFrameSourceRectProbe",
    "WAWebVoipWebCodecsEncoderCrop",
    "WAWebVoipWebCodecsEncoderState",
    "WAWebVoipWebCodecsEncoderVoipParams",
    "WAWebVoipWebCodecsEncoderWatchdog",
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
      ee = new Map(),
      te = 5e3,
      ne = 150,
      re = 2,
      oe = 3,
      ae = 1e3,
      ie = 4e3,
      le = 2,
      se = 1e3,
      ue = 2e3,
      ce = 3,
      de = 30,
      me = 2,
      pe = null,
      _e = !1,
      fe = !1,
      ge = null;
    function he(e) {
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
        encodeQueueFullDropCount: 0,
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
        keyframeIntervalMs: o("WAWebVoipWebCodecsEncoderVoipParams")
          .DEFAULT_KEYFRAME_INTERVAL_MS,
        portDetached: !1,
        lastPortAvailable: !1,
        reattachFailures: 0,
        lastReattachFailureTime: 0,
        cropCanvas: null,
        cropCanvasCtx: null,
        isScreenShare: !1,
      };
    }
    function ye(e) {
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
    function Ce(e) {
      return e <= 0 ? 0 : Math.min(ae * Math.pow(2, e - 1), ie);
    }
    function be(t, n) {
      var r = "voip: [webcodec-encode][stream=" + t + "]",
        a = new VideoEncoder({
          output: function (l, s) {
            var i, u, c, d, m;
            if (n.encoder === a) {
              Re(n);
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
                  f - n.latencyLastLogTime >= te)
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
                        "fps queueFullDrop=",
                        "",
                      ])),
                    r,
                    n.latencyMin,
                    n.latencyMax,
                    g,
                    n.latencyCount,
                    n.fpsPacingEncodeCount,
                    n.fpsPacingDropCount,
                    n.currentFps,
                    n.encodeQueueFullDropCount,
                  ),
                    (n.latencyMin = 1 / 0),
                    (n.latencyMax = 0),
                    (n.latencySum = 0),
                    (n.latencyCount = 0),
                    (n.fpsPacingEncodeCount = 0),
                    (n.fpsPacingDropCount = 0),
                    (n.encodeQueueFullDropCount = 0),
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
              et(t, n, l, h, y, _, C);
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
            if (!ve(n, a)) {
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
            var t = Ie(n);
            t <= oe
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
                  oe,
                  e.message,
                )
              : t === oe + 1 &&
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
    function ve(e, t) {
      return e.encoder !== t
        ? !1
        : ((e.encoder = null), e.encodeStartTimes.clear(), !0);
    }
    function Se(e, t) {
      try {
        e.state !== "closed" && e.close();
      } catch (e) {
        t == null || t(e);
      }
    }
    function Re(e) {
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
          Ee(e);
          return;
        }
        var n = e.successfulOutputsSinceFailure >= Le(e.currentFps),
          r =
            e.successfulOutputsSinceFailure >= ce &&
            t - e.recoveryOutputWindowStartTimeMs >= ue;
        (!n && !r) || Ee(e);
      }
    }
    function Le(e) {
      return Math.max(ce, Math.min(de, Math.ceil(Math.max(e, 1) * (ue / 1e3))));
    }
    function Ee(e) {
      ((e.consecutiveEncoderFailures = 0),
        (e.successfulOutputsSinceFailure = 0),
        (e.recoveryOutputWindowStartTimeMs = 0),
        (e.lastEncoderFailureTimeMs = 0));
    }
    function ke(e) {
      (e.outputWatchdog.reset(),
        e.encodeStartTimes.clear(),
        (e.successfulOutputsSinceFailure = 0),
        (e.recoveryOutputWindowStartTimeMs = 0));
    }
    function Ie(e, t) {
      return (
        t === void 0 && (t = !0),
        ke(e),
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
          e.consecutiveEncoderFailures >= me &&
          (e.preferSoftwareEncoder = !0),
        (e.requestKeyframe = !0),
        e.consecutiveEncoderFailures
      );
    }
    function Te(e, t) {
      if (
        (e.encodeStartTimes.set(t, Date.now()),
        !(e.encodeStartTimes.size <= ne))
      ) {
        var n = e.encodeStartTimes.keys().next().value;
        n != null && e.encodeStartTimes.delete(n);
      }
    }
    function De(e, t) {
      if (t.outputWatchdogEnabled) {
        var n = t.outputWatchdog.recordFrameSubmitted(
          t.currentFps,
          self.performance.now(),
        );
        n != null && xe(e, t, n);
      }
    }
    function xe(e, t, n) {
      var r = t.encoder;
      if (r != null) {
        var a = "voip: [webcodec-encode][stream=" + e + "]";
        ve(t, r);
        var i = Ie(t);
        (Se(r),
          i <= oe
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
                oe,
              )
            : i === oe + 1 &&
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
    function $e(e) {
      var t = ee.get(e);
      if ((t == null ? void 0 : t.encoder) != null) {
        var n = t.encoder;
        (ve(t, n), ke(t), Se(n));
      }
      ee.delete(e);
    }
    function Pe() {
      for (var e of Array.from(ee.keys())) $e(e);
      (o("WAWebVoipWebCodecsEncoderCrop").resetSourceCanvas(),
        o(
          "WAWebVoipPresentationFrameNormalizer",
        ).resetPresentationFrameNormalizer(),
        (Fe = null));
    }
    function Ne(e, t) {
      var n = t.encoder;
      if (n != null) {
        if (n.state === "configured") return n;
        var r = n.state;
        (ve(t, n), Se(n));
        var a = r === "closed",
          i = Ie(t, a);
        return (
          i <= oe
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
                oe,
              )
            : i === oe + 1 &&
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
      return Me(t) ? we(e, t) : null;
    }
    function Me(e) {
      return (
        e.consecutiveEncoderFailures > 0 &&
        e.consecutiveEncoderFailures <= oe &&
        self.performance.now() - e.lastEncoderFailureTimeMs >= ae
      );
    }
    function we(e, t) {
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
        oe,
        t.preferSoftwareEncoder ? "software" : "hardware",
      );
      var r = null;
      try {
        return (
          (r = be(e, t)),
          (t.encoder = r),
          r.configure(ye(t)),
          ke(t),
          (t.requestKeyframe = !0),
          r
        );
      } catch (e) {
        return (r != null && (ve(t, r), Se(r)), Ae(t, n, e), null);
      }
    }
    function Ae(e, t, n) {
      var r = Ie(e);
      r <= oe
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
            oe,
            n,
          )
        : r === oe + 1 &&
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
    var Fe = null;
    function Oe(e, t, n) {
      var r = o(
          "WAWebVoipPresentationFrameNormalizer",
        ).getPresentationFrameTransformDiagnostics(e, t, n),
        a = r.message,
        i = r.signature;
      i !== Fe &&
        ((Fe = i),
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          C || (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          a,
        ));
    }
    function Be(e, t) {
      if (t.encodeQueueSize >= re) return (e.encodeQueueFullDropCount++, !1);
      var n = Date.now(),
        r = e.fpsPacingLastFrameTime > 0 ? n - e.fpsPacingLastFrameTime : 0;
      e.fpsPacingLastFrameTime = n;
      var o = Math.max(e.currentFps, 1);
      return (
        r > 0 && r < 1e3
          ? (e.fpsPacingCredit += (o * r) / 1e3)
          : (e.fpsPacingCredit = 1),
        e.fpsPacingCredit < 1
          ? (e.fpsPacingDropCount++, !1)
          : ((e.fpsPacingCredit -= 1),
            (e.fpsPacingCredit = Math.min(e.fpsPacingCredit, 1)),
            e.fpsPacingEncodeCount++,
            !0)
      );
    }
    function We(e, t) {
      return Math.floor(e / Math.pow(2, t)) % 2 === 1;
    }
    function qe(e) {
      var t = Date.now(),
        n = t - e.lastKeyFrameTime;
      return (
        e.requestKeyframe || n > e.keyframeIntervalMs || e.frameCounter === 0
      );
    }
    function Ue(e) {
      var t = e.streamId,
        n = "voip: [webcodec-encode][stream=" + t + "]",
        r = ee.get(t);
      (r == null && (r = He({ logPrefix: n, params: e, streamId: t })),
        (r.isScreenShare = e.isScreenShare));
      var a = r.bitrateMode;
      if (!r.rateControlInitialized) {
        r.rateControlInitialized = !0;
        var i = e.isScreenShare || fe;
        ((r.bitrateMode = o(
          "WAWebVoipWebCodecsEncoderVoipParams",
        ).getEncoderBitrateMode(pe, i, r.consecutiveEncoderFailures > 0)),
          (r.refreshBitrateOnResize = o(
            "WAWebVoipWebCodecsEncoderVoipParams",
          ).shouldRefreshBitrateOnResize(pe)),
          (r.keyframeIntervalMs = o(
            "WAWebVoipWebCodecsEncoderVoipParams",
          ).getKeyframeIntervalMs(pe, i)),
          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " rate control initialized, encoding can begin: bitrateMode=",
                " keyframeIntervalMs=",
                "",
              ])),
            n,
            r.bitrateMode,
            r.keyframeIntervalMs,
          ));
      }
      var l = o("WAWebVoipWebCodecsEncoderCrop").toEven(e.targetWidth),
        s = o("WAWebVoipWebCodecsEncoderCrop").toEven(e.targetHeight),
        u = Math.max(e.targetFps, 1),
        c = l !== r.currentWidth || s !== r.currentHeight,
        d =
          r.bitrateMode !== a ||
          c ||
          e.targetBitrateBps !== r.currentBitrate ||
          u !== r.currentFps;
      (e.requestKeyframe || c) && (r.requestKeyframe = !0);
      var m = r.currentBitrate,
        p = r.currentWidth,
        _ = r.currentHeight,
        f = r.currentFps;
      if (
        ((r.currentBitrate = e.targetBitrateBps),
        (r.currentWidth = l),
        (r.currentHeight = s),
        (r.currentFps = u),
        d && r.encoder != null && r.encoder.state === "configured")
      ) {
        var g = r.encoder;
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " reconfiguring: ",
              "x",
              " bitrate=",
              " fps=",
              "",
            ])),
          n,
          l,
          s,
          e.targetBitrateBps,
          u,
        );
        try {
          Ve({
            change: {
              resized: c && r.bitrateMode === a,
              prevCodec: o("WAWebVoipWebCodecsEncoderState").getH264CodecString(
                p,
                _,
                f,
              ),
            },
            ctx: r,
            encoder: g,
            logPrefix: n,
          });
        } catch (e) {
          ((r.currentBitrate = m),
            (r.currentWidth = p),
            (r.currentHeight = _),
            (r.currentFps = f),
            (r.bitrateMode = a),
            o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " reconfigure failed: ",
                  "",
                ])),
              n,
              e,
            ));
        }
      }
    }
    function Ve(e) {
      var t = e.change,
        n = e.ctx,
        r = e.encoder,
        a = e.logPrefix,
        i = ye(n);
      if ((r.configure(i), !(!t.resized || !n.refreshBitrateOnResize)))
        try {
          var l = o(
            "WAWebVoipWebCodecsEncoderVoipParams",
          ).getBitrateRefreshAfterResize(
            t.prevCodec,
            i.codec,
            n.currentBitrate,
          );
          l != null &&
            (r.configure(babelHelpers.extends({}, i, { bitrate: l })),
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " re-applied bitrate after resize",
                ])),
              a,
            ));
        } catch (e) {
          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " bitrate refresh failed: ",
                "",
              ])),
            a,
            e,
          );
        }
    }
    function He(e) {
      var t = e.logPrefix,
        n = e.params,
        r = e.streamId,
        a = he(_e);
      if ((ee.set(r, a), pe == null || r <= 0)) return a;
      try {
        return (
          (a.currentBitrate = n.targetBitrateBps),
          (a.currentWidth = o("WAWebVoipWebCodecsEncoderCrop").toEven(
            n.targetWidth,
          )),
          (a.currentHeight = o("WAWebVoipWebCodecsEncoderCrop").toEven(
            n.targetHeight,
          )),
          (a.currentFps = Math.max(n.targetFps, 1)),
          (a.encoder = be(r, a)),
          a.encoder.configure(ye(a)),
          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
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
        return (a.encoder != null && Ye(t, r, a, a.encoder), Ge(a, t, e), a);
      }
    }
    function Ge(e, t, n) {
      var r = Ie(e);
      o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "",
            " initial encoder configuration failed, will attempt recovery (",
            "/",
            "): ",
            "",
          ])),
        t,
        r,
        oe,
        n,
      );
    }
    async function ze(e) {
      await je(e, le);
      for (var t of Ke()) {
        var n = t.ctx,
          r = t.encoder,
          o = t.streamId;
        Ye(e, o, n, r);
      }
      ee.clear();
    }
    async function je(e, t) {
      if (!(t <= 0)) {
        var n = Ke();
        n.length !== 0 &&
          (await Promise.all(
            n.map(function (t) {
              var n = t.ctx,
                r = t.encoder,
                o = t.streamId;
              return Qe(e, o, n, r);
            }),
          ),
          await je(e, t - 1));
      }
    }
    function Ke() {
      var e = [];
      for (var t of ee) {
        var n = t[0],
          r = t[1];
        r.encoder != null &&
          e.push({ streamId: n, ctx: r, encoder: r.encoder });
      }
      return e;
    }
    async function Qe(e, t, n, r) {
      if (r.state === "configured")
        try {
          await Je(r);
        } catch (n) {
          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
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
      Ye(e, t, n, r);
    }
    function Xe() {
      return new Promise(function (e) {
        var t = function () {
          o("WAWebVoipVideoCaptureOffThread").getStopCapture()
            ? e()
            : globalThis.setTimeout(t, 200);
        };
        t();
      });
    }
    function Ye(e, t, n, r) {
      (ve(n, r),
        Se(r, function (n) {
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
    async function Je(e) {
      var t = e.flush();
      t.catch(r("WAWebNoop"));
      var n = null,
        o = new Promise(function (e, t) {
          n = globalThis.setTimeout(function () {
            t(r("err")("encoder flush timed out after " + se + "ms"));
          }, se);
        });
      try {
        await Promise.race([t, o]);
      } finally {
        n != null && globalThis.clearTimeout(n);
      }
    }
    async function Ze(e, t, n, r) {
      r === void 0 && (r = {});
      var a = r,
        i = a.enableOutputWatchdog,
        l = i === void 0 ? !1 : i,
        s = a.initialOrientationValue,
        u = a.isScreenShare,
        c = u === void 0 ? !1 : u,
        d = a.normalizeVideoElementPresentationFrames,
        m = d === void 0 ? !1 : d,
        p = a.selfPreviewVideoFrame,
        _ = p === void 0 ? !1 : p,
        f = a.videoElementCapture,
        g = f === void 0 ? !1 : f,
        h = "voip: [webcodec-encode]";
      try {
        var y = async function (r, a) {
          var e = m ? a : void 0,
            i = o("WAWebVoipVideoCaptureOffThread").getFrameOrientation(r, e),
            l = o(
              "WAWebVoipPresentationFrameNormalizer",
            ).preparePresentationFrame({
              frame: r,
              frameMetadata: e,
              isScreenShare: c,
              normalizationEnabled: m,
              requestedHeight: t.height,
              requestedWidth: t.width,
            }),
            s = l.frame;
          try {
            (e != null && Oe(r, e, l),
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFrameTick());
            var u = s.displayWidth,
              d = s.displayHeight;
            if (
              (!c &&
                (u !== v || d !== S) &&
                (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " camera capture size changed: ",
                      "x",
                      " -> ",
                      "x",
                      "",
                    ])),
                  h,
                  v,
                  S,
                  u,
                  d,
                ),
                n.setVideoPreviewSize(u, d),
                (v = u),
                (S = d)),
              c &&
                (u !== v || d !== S) &&
                ((v = u),
                (S = d),
                o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " screen share capture size changed: ",
                      "x",
                      "",
                    ])),
                  h,
                  u,
                  d,
                ),
                n.setScreenShareCaptureSize(u, d)),
              R < L)
            ) {
              var p, _, f, g, y;
              (R++,
                o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
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
                  h,
                  R,
                  (p = s.format) != null ? p : "null",
                  s.codedWidth,
                  s.codedHeight,
                  s.displayWidth,
                  s.displayHeight,
                  (_ = (f = s.colorSpace) == null ? void 0 : f.primaries) !=
                    null
                    ? _
                    : "unknown",
                  (g = (y = s.colorSpace) == null ? void 0 : y.transfer) != null
                    ? g
                    : "unknown",
                ));
            }
            var C = {
              frame: s,
              isScreenShare: c,
              logDiagnostics: R < L,
              logPrefix: h,
              orientation: i,
            };
            (E.trySendVideoFrame(r, C) || (await E.sendBytes(C)),
              o("WAWebVoipVideoCaptureOffThread").encodedFrameOrientations.set(
                s.timestamp,
                i,
              ));
            var b = n.getEncodedVideoPortMask(),
              k = n.getEncodedVideoPausedStreamMask();
            for (var I of ee) {
              var T = I[0],
                D = I[1],
                x = We(b, T);
              if (x)
                D.portDetached
                  ? ((D.lastPortAvailable = !0), tt(T, D, h))
                  : (D.lastPortAvailable = !0);
              else {
                if (!D.portDetached) {
                  if (
                    (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " stream ",
                          " port detached, closing encoder",
                        ])),
                      h,
                      T,
                    ),
                    D.encoder != null)
                  ) {
                    var $ = D.encoder;
                    (ve(D, $), ke(D), Se($));
                  }
                  ((D.portDetached = !0), Ee(D));
                }
                (D.lastPortAvailable &&
                  ((D.reattachFailures = 0), (D.lastReattachFailureTime = 0)),
                  (D.lastPortAvailable = !1));
              }
            }
            var P = !1;
            for (var N of ee.values())
              if (N.isScreenShare) {
                P = !0;
                break;
              }
            for (var B of ee) {
              var W = B[0],
                q = B[1];
              {
                if (q.portDetached) continue;
                if (We(k, W)) {
                  q.requestKeyframe = !0;
                  continue;
                }
                if (!q.rateControlInitialized) continue;
                var U = c ? !P || q.isScreenShare : !q.isScreenShare;
                if (!U) continue;
                var V = Ne(W, q);
                if (V == null || !Be(q, V)) continue;
                var H = qe(q),
                  G = s.clone(),
                  z = o(
                    "WAWebVoipWebCodecsEncoderCrop",
                  ).cropFrameToEncoderAspectRatio({
                    encoderCtx: q,
                    frame: G,
                    targetH: q.currentHeight,
                    targetW: q.currentWidth,
                    visibleRectCropWorks: ge === !0,
                  });
                try {
                  (Te(q, s.timestamp), V.encode(z, { keyFrame: H }));
                } finally {
                  (z !== G && z.close(), G.close());
                }
                (q.frameCounter++,
                  H &&
                    ((q.lastKeyFrameTime = Date.now()),
                    (q.requestKeyframe = !1)),
                  De(W, q));
              }
            }
            var j = 150;
            if (
              o("WAWebVoipVideoCaptureOffThread").encodedFrameOrientations
                .size >
              j * 2
            )
              for (
                var K = Array.from(
                    o(
                      "WAWebVoipVideoCaptureOffThread",
                    ).encodedFrameOrientations.keys(),
                  ),
                  Q = K.length - j,
                  X = 0;
                X < Q;
                X++
              )
                o(
                  "WAWebVoipVideoCaptureOffThread",
                ).encodedFrameOrientations.delete(K[X]);
          } catch (e) {
            o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " encode error: ",
                  "",
                ])),
              h,
              e,
            );
          } finally {
            s !== r && s.close();
          }
        };
        (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " starting capture ",
              "x",
              "@",
              "fps presentationOrientationFix=",
              "",
            ])),
          h,
          t.width,
          t.height,
          t.maxFps,
          String(m),
        ),
          o("WAWebVoipVideoCaptureOffThread").updateStopCapture(!1),
          (pe = n),
          (_e = l),
          (fe = c),
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFpsReset(),
          s != null &&
            (o("WAWebVoipVideoCaptureOffThread").updateCurrentWorkerOrientation(
              s,
            ),
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " initial orientation: ",
                  "",
                ])),
              h,
              s,
            )),
          ge == null &&
            ((ge = o(
              "WAWebVoipVideoFrameSourceRectProbe",
            ).probeVideoFrameSourceRectSupport()),
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " visibleRect crop probe: ",
                  "",
                ])),
              h,
              ge ? "supported (fast path)" : "broken (canvas workaround)",
            )));
        var C = 0;
        Pe();
        var b = he(_e);
        ((b.lastKeyFrameTime = Date.now()),
          (b.currentWidth = o("WAWebVoipWebCodecsEncoderCrop").toEven(t.width)),
          (b.currentHeight = o("WAWebVoipWebCodecsEncoderCrop").toEven(
            t.height,
          )),
          (b.currentFps = Math.max(t.maxFps, 1)),
          (b.latencyLastLogTime = Date.now()),
          ee.set(C, b),
          (t.width !== b.currentWidth || t.height !== b.currentHeight) &&
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " normalized odd dimensions: ",
                  "x",
                  " -> ",
                  "x",
                  "",
                ])),
              h,
              t.width,
              t.height,
              b.currentWidth,
              b.currentHeight,
            ));
        var v = 0,
          S = 0,
          R = 0,
          L = 5,
          E = new (o("WAWebVoipSelfPreviewSender").WAWebVoipSelfPreviewSender)(
            t.width,
            t.height,
            { videoFrame: _ && g && !c, visibleRectCropWorks: ge === !0 },
          );
        try {
          var k = be(C, b);
          b.encoder = k;
          var I = ye(b);
          (k.configure(I),
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " encoder configured: codec=",
                  " bitrate=",
                  "",
                ])),
              h,
              I.codec,
              b.currentBitrate,
            ));
        } catch (e) {
          throw ($e(C), e);
        }
        if (g)
          (o("WAWebVoipVideoCaptureOffThread").registerCaptureAndEncodeFn(y),
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video-element mode: encoder ready, waiting for frames",
                ])),
              h,
            ),
            await (o(
              "WAWebVoipVideoCaptureOffThread",
            ).getInterruptCaptureOnStop()
              ? o("WAWebVoipVideoCaptureOffThread").waitForStopCapture()
              : Xe()),
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " video-element mode: stop requested",
                ])),
              h,
            ),
            o("WAWebVoipVideoCaptureOffThread").registerCaptureAndEncodeFn(
              null,
            ),
            await ze(h));
        else if (e != null)
          try {
            var T,
              K =
                e.readable ||
                (await new MediaStreamTrackProcessor({ track: e.track })
                  .readable);
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " got MediaStreamTrackProcessor readable",
                ])),
              h,
            );
            var Q = K.getReader();
            for (
              o("WAWebVoipVideoCaptureOffThread").registerActiveCapture(
                Q,
                (T = e.track) != null ? T : null,
              ),
                o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " starting capture loop",
                    ])),
                  h,
                );
              !o("WAWebVoipVideoCaptureOffThread").getStopCapture();
            ) {
              var X = await Q.read(),
                Y = X.done,
                J = X.value;
              try {
                if (Y || !J) {
                  o("WAWebVoipVideoCaptureOffThread").updateStopCapture(!0);
                  break;
                }
                await y(J);
              } finally {
                J == null || J.close();
              }
            }
            o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " finished capture loop",
                ])),
              h,
            );
          } finally {
            (o("WAWebVoipVideoCaptureOffThread").clearActiveCapture(),
              e.track && e.track.stop(),
              await ze(h));
          }
        else
          (o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " captureObject is null in non-videoElement mode",
              ])),
            h,
          ),
            await ze(h));
      } catch (e) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
          G ||
            (G = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " capture error: ",
              "",
            ])),
          h,
          e,
        );
      } finally {
        ((pe = null), (_e = !1), (fe = !1));
        try {
          n.exitJsWorkerThread();
        } catch (e) {
          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            z ||
              (z = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " exitJsWorkerThread error: ",
                "",
              ])),
            h,
            e,
          );
        }
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          j ||
            (j = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " exit capture worker thread",
            ])),
          h,
        );
      }
    }
    function et(e, t, n, r, a, i, l) {
      var s = "voip: [webcodec-encode][stream=" + e + "]",
        u = pe;
      if (u == null) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
          K ||
            (K = babelHelpers.taggedTemplateLiteralLoose([
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
            Q ||
              (Q = babelHelpers.taggedTemplateLiteralLoose([
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
              X ||
                (X = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " WASM requested keyframe (initial frames dropped)",
                ])),
              s,
            ),
            (t.requestKeyframe = !0)));
      } catch (e) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
          Y ||
            (Y = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " error handling encoded chunk: ",
              "",
            ])),
          s,
          e,
        );
      }
    }
    function tt(e, t, n) {
      var r = Ce(t.reattachFailures);
      if (!nt(t, r)) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          J ||
            (J = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " stream ",
              " port reattached, recreating encoder",
            ])),
          n,
          e,
        );
        var a = null;
        try {
          ((a = be(e, t)), (t.encoder = a), a.configure(ye(t)), ke(t), rt(t));
        } catch (n) {
          (a != null && (ve(t, a) && ke(t), Se(a)), ot(e, t, n));
        }
      }
    }
    function nt(e, t) {
      return t > 0 && self.performance.now() - e.lastReattachFailureTime < t;
    }
    function rt(e) {
      ((e.requestKeyframe = !0),
        (e.portDetached = !1),
        (e.reattachFailures = 0),
        (e.lastReattachFailureTime = 0));
    }
    function ot(e, t, n) {
      (t.reattachFailures++,
        (t.lastReattachFailureTime = self.performance.now()),
        t.outputWatchdogEnabled &&
          t.reattachFailures >= me &&
          (t.preferSoftwareEncoder = !0));
      var r = "voip: [webcodec-encode][stream=" + e + "]";
      o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
        Z ||
          (Z = babelHelpers.taggedTemplateLiteralLoose([
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
        Ce(t.reattachFailures),
        n,
      );
    }
    ((l.updateWebCodecsEncoderParams = Ue),
      (l.startVideoCaptureWithWebCodecsEncoderInWorker = Ze));
  },
  98,
);
