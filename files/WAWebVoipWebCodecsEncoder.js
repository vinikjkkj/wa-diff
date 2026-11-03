__d(
  "WAWebVoipWebCodecsEncoder",
  [
    "Promise",
    "WAWebNoop",
    "WAWebVoipPresentationFrameNormalizer",
    "WAWebVoipSelfPreviewSender",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoFrameSourceRectProbe",
    "WAWebVoipWebCodecsEncoderCrop",
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
      te = new Map(),
      ne = 5e3,
      re = 150,
      oe = 2,
      ae = 3,
      ie = 1e3,
      le = 4e3,
      se = 2,
      ue = 1e3,
      ce = 2e3,
      de = 3,
      me = 30,
      pe = 2,
      _e = null,
      fe = !1,
      ge = !1,
      he = null;
    function ye(e) {
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
    function Ce(e) {
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
    function be(e) {
      return e <= 0 ? 0 : Math.min(ie * Math.pow(2, e - 1), le);
    }
    function ve(t, n) {
      var r = "voip: [webcodec-encode][stream=" + t + "]",
        a = new VideoEncoder({
          output: function (l, s) {
            var i, u, c, d, m;
            if (n.encoder === a) {
              Le(n);
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
                  f - n.latencyLastLogTime >= ne)
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
              it(t, n, l, h, y, _, C);
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
            if (!Se(n, a)) {
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
            var t = Te(n);
            t <= ae
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
                  ae,
                  e.message,
                )
              : t === ae + 1 &&
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
    function Se(e, t) {
      return e.encoder !== t
        ? !1
        : ((e.encoder = null), e.encodeStartTimes.clear(), !0);
    }
    function Re(e, t) {
      try {
        e.state !== "closed" && e.close();
      } catch (e) {
        t == null || t(e);
      }
    }
    function Le(e) {
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
          ke(e);
          return;
        }
        var n = e.successfulOutputsSinceFailure >= Ee(e.currentFps),
          r =
            e.successfulOutputsSinceFailure >= de &&
            t - e.recoveryOutputWindowStartTimeMs >= ce;
        (!n && !r) || ke(e);
      }
    }
    function Ee(e) {
      return Math.max(de, Math.min(me, Math.ceil(Math.max(e, 1) * (ce / 1e3))));
    }
    function ke(e) {
      ((e.consecutiveEncoderFailures = 0),
        (e.successfulOutputsSinceFailure = 0),
        (e.recoveryOutputWindowStartTimeMs = 0),
        (e.lastEncoderFailureTimeMs = 0));
    }
    function Ie(e) {
      (e.outputWatchdog.reset(),
        e.encodeStartTimes.clear(),
        (e.successfulOutputsSinceFailure = 0),
        (e.recoveryOutputWindowStartTimeMs = 0));
    }
    function Te(e, t) {
      return (
        t === void 0 && (t = !0),
        Ie(e),
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
          e.consecutiveEncoderFailures >= pe &&
          (e.preferSoftwareEncoder = !0),
        (e.requestKeyframe = !0),
        e.consecutiveEncoderFailures
      );
    }
    function De(e, t) {
      if (
        (e.encodeStartTimes.set(t, Date.now()),
        !(e.encodeStartTimes.size <= re))
      ) {
        var n = e.encodeStartTimes.keys().next().value;
        n != null && e.encodeStartTimes.delete(n);
      }
    }
    function xe(e, t) {
      if (t.outputWatchdogEnabled) {
        var n = t.outputWatchdog.recordFrameSubmitted(
          t.currentFps,
          self.performance.now(),
        );
        n != null && $e(e, t, n);
      }
    }
    function $e(e, t, n) {
      var r = t.encoder;
      if (r != null) {
        var a = "voip: [webcodec-encode][stream=" + e + "]";
        Se(t, r);
        var i = Te(t);
        (Re(r),
          i <= ae
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
                ae,
              )
            : i === ae + 1 &&
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
    function Pe(e) {
      var t = te.get(e);
      if ((t == null ? void 0 : t.encoder) != null) {
        var n = t.encoder;
        (Se(t, n), Ie(t), Re(n));
      }
      te.delete(e);
    }
    function Ne() {
      for (var e of Array.from(te.keys())) Pe(e);
      (o("WAWebVoipWebCodecsEncoderCrop").resetSourceCanvas(),
        o(
          "WAWebVoipPresentationFrameNormalizer",
        ).resetPresentationFrameNormalizer(),
        (Oe = null));
    }
    function Me(e, t) {
      var n = t.encoder;
      if (n != null) {
        if (n.state === "configured") return n;
        var r = n.state;
        (Se(t, n), Re(n));
        var a = r === "closed",
          i = Te(t, a);
        return (
          i <= ae
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
                ae,
              )
            : i === ae + 1 &&
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
      return we(t) ? Ae(e, t) : null;
    }
    function we(e) {
      return (
        e.consecutiveEncoderFailures > 0 &&
        e.consecutiveEncoderFailures <= ae &&
        self.performance.now() - e.lastEncoderFailureTimeMs >= ie
      );
    }
    function Ae(e, t) {
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
        ae,
        t.preferSoftwareEncoder ? "software" : "hardware",
      );
      var r = null;
      try {
        return (
          (r = ve(e, t)),
          (t.encoder = r),
          r.configure(Ce(t)),
          Ie(t),
          (t.requestKeyframe = !0),
          r
        );
      } catch (e) {
        return (r != null && (Se(t, r), Re(r)), Fe(t, n, e), null);
      }
    }
    function Fe(e, t, n) {
      var r = Te(e);
      r <= ae
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
            ae,
            n,
          )
        : r === ae + 1 &&
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
    var Oe = null;
    function Be(e, t, n) {
      var r = o(
          "WAWebVoipPresentationFrameNormalizer",
        ).getPresentationFrameTransformDiagnostics(e, t, n),
        a = r.message,
        i = r.signature;
      i !== Oe &&
        ((Oe = i),
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          C || (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          a,
        ));
    }
    function We(e, t) {
      if (t.encodeQueueSize >= oe) return (e.encodeQueueFullDropCount++, !1);
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
    function qe(e, t) {
      return Math.floor(e / Math.pow(2, t)) % 2 === 1;
    }
    function Ue(e) {
      var t = Date.now(),
        n = t - e.lastKeyFrameTime;
      return (
        e.requestKeyframe || n > e.keyframeIntervalMs || e.frameCounter === 0
      );
    }
    function Ve(e) {
      var t = e.streamId,
        n = "voip: [webcodec-encode][stream=" + t + "]",
        r = te.get(t);
      (r == null && (r = Ge({ logPrefix: n, params: e, streamId: t })),
        (r.isScreenShare = e.isScreenShare));
      var a = r.bitrateMode;
      if (!r.rateControlInitialized) {
        r.rateControlInitialized = !0;
        var i = e.isScreenShare || ge;
        ((r.bitrateMode = o(
          "WAWebVoipWebCodecsEncoderVoipParams",
        ).getEncoderBitrateMode(_e, i, r.consecutiveEncoderFailures > 0)),
          (r.refreshBitrateOnResize = o(
            "WAWebVoipWebCodecsEncoderVoipParams",
          ).shouldRefreshBitrateOnResize(_e)),
          (r.keyframeIntervalMs = o(
            "WAWebVoipWebCodecsEncoderVoipParams",
          ).getKeyframeIntervalMs(_e, i)),
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
          He({
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
    function He(e) {
      var t = e.change,
        n = e.ctx,
        r = e.encoder,
        a = e.logPrefix,
        i = Ce(n);
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
    function Ge(e) {
      var t = e.logPrefix,
        n = e.params,
        r = e.streamId,
        a = ye(fe);
      if ((te.set(r, a), _e == null || r <= 0)) return a;
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
          (a.encoder = ve(r, a)),
          a.encoder.configure(Ce(a)),
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
        return (a.encoder != null && tt(t, r, a, a.encoder), ze(a, t, e), a);
      }
    }
    function ze(e, t, n) {
      var r = Te(e);
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
        ae,
        n,
      );
    }
    function je(e) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield Qe(e, se);
          for (var t of Ye()) {
            var n = t.ctx,
              r = t.encoder,
              o = t.streamId;
            tt(e, o, n, r);
          }
          te.clear();
        })),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e, t) {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!(t <= 0)) {
            var r = Ye();
            r.length !== 0 &&
              (yield (ee || (ee = n("Promise"))).all(
                r.map(function (t) {
                  var n = t.ctx,
                    r = t.encoder,
                    o = t.streamId;
                  return Je(e, o, n, r);
                }),
              ),
              yield Qe(e, t - 1));
          }
        })),
        Xe.apply(this, arguments)
      );
    }
    function Ye() {
      var e = [];
      for (var t of te) {
        var n = t[0],
          r = t[1];
        r.encoder != null &&
          e.push({ streamId: n, ctx: r, encoder: r.encoder });
      }
      return e;
    }
    function Je(e, t, n, r) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r.state === "configured")
              try {
                yield nt(r);
              } catch (n) {
                o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
            tt(e, t, n, r);
          },
        )),
        Ze.apply(this, arguments)
      );
    }
    function et() {
      return new (ee || (ee = n("Promise")))(function (e) {
        var t = function () {
          o("WAWebVoipVideoCaptureOffThread").getStopCapture()
            ? e()
            : globalThis.setTimeout(t, 200);
        };
        t();
      });
    }
    function tt(e, t, n, r) {
      (Se(n, r),
        Re(r, function (n) {
          o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
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
    function nt(e) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flush();
          t.catch(r("WAWebNoop"));
          var o = null,
            a = new (ee || (ee = n("Promise")))(function (e, t) {
              o = globalThis.setTimeout(function () {
                t(r("err")("encoder flush timed out after " + ue + "ms"));
              }, ue);
            });
          try {
            yield (ee || (ee = n("Promise"))).race([t, a]);
          } finally {
            o != null && globalThis.clearTimeout(o);
          }
        })),
        rt.apply(this, arguments)
      );
    }
    function ot(e, t, n, r) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              _ = i.selfPreviewVideoFrame,
              f = _ === void 0 ? !1 : _,
              g = i.videoElementCapture,
              h = g === void 0 ? !1 : g,
              y = "voip: [webcodec-encode]";
            try {
              var C = (function () {
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
                      (a != null && Be(e, a, l),
                        self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFrameTick());
                      var u = s.displayWidth,
                        c = s.displayHeight;
                      if (
                        (!d &&
                          (u !== S || c !== R) &&
                          (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                            W ||
                              (W = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " camera capture size changed: ",
                                "x",
                                " -> ",
                                "x",
                                "",
                              ])),
                            y,
                            S,
                            R,
                            u,
                            c,
                          ),
                          r.setVideoPreviewSize(u, c),
                          (S = u),
                          (R = c)),
                        d &&
                          (u !== S || c !== R) &&
                          ((S = u),
                          (R = c),
                          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                            q ||
                              (q = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " screen share capture size changed: ",
                                "x",
                                "",
                              ])),
                            y,
                            u,
                            c,
                          ),
                          r.setScreenShareCaptureSize(u, c)),
                        L < E)
                      ) {
                        var m, _, f, g, h;
                        (L++,
                          o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                            U ||
                              (U = babelHelpers.taggedTemplateLiteralLoose([
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
                            y,
                            L,
                            (m = s.format) != null ? m : "null",
                            s.codedWidth,
                            s.codedHeight,
                            s.displayWidth,
                            s.displayHeight,
                            (_ =
                              (f = s.colorSpace) == null
                                ? void 0
                                : f.primaries) != null
                              ? _
                              : "unknown",
                            (g =
                              (h = s.colorSpace) == null
                                ? void 0
                                : h.transfer) != null
                              ? g
                              : "unknown",
                          ));
                      }
                      var C = {
                        frame: s,
                        isScreenShare: d,
                        logDiagnostics: L < E,
                        logPrefix: y,
                        orientation: i,
                      };
                      (k.trySendVideoFrame(e, C) || (yield k.sendBytes(C)),
                        o(
                          "WAWebVoipVideoCaptureOffThread",
                        ).encodedFrameOrientations.set(s.timestamp, i));
                      var b = r.getEncodedVideoPortMask(),
                        v = r.getEncodedVideoPausedStreamMask();
                      for (var I of te) {
                        var T = I[0],
                          D = I[1],
                          x = qe(b, T);
                        if (x)
                          D.portDetached
                            ? ((D.lastPortAvailable = !0), lt(T, D, y))
                            : (D.lastPortAvailable = !0);
                        else {
                          if (!D.portDetached) {
                            if (
                              (o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                                V ||
                                  (V = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " stream ",
                                    " port detached, closing encoder",
                                  ])),
                                y,
                                T,
                              ),
                              D.encoder != null)
                            ) {
                              var $ = D.encoder;
                              (Se(D, $), Ie(D), Re($));
                            }
                            ((D.portDetached = !0), ke(D));
                          }
                          (D.lastPortAvailable &&
                            ((D.reattachFailures = 0),
                            (D.lastReattachFailureTime = 0)),
                            (D.lastPortAvailable = !1));
                        }
                      }
                      var P = !1;
                      for (var N of te.values())
                        if (N.isScreenShare) {
                          P = !0;
                          break;
                        }
                      for (var M of te) {
                        var w = M[0],
                          A = M[1];
                        {
                          if (A.portDetached) continue;
                          if (qe(v, w)) {
                            A.requestKeyframe = !0;
                            continue;
                          }
                          if (!A.rateControlInitialized) continue;
                          var F = d ? !P || A.isScreenShare : !A.isScreenShare;
                          if (!F) continue;
                          var O = Me(w, A);
                          if (O == null || !We(A, O)) continue;
                          var B = Ue(A),
                            G = s.clone(),
                            z = o(
                              "WAWebVoipWebCodecsEncoderCrop",
                            ).cropFrameToEncoderAspectRatio({
                              encoderCtx: A,
                              frame: G,
                              targetH: A.currentHeight,
                              targetW: A.currentWidth,
                              visibleRectCropWorks: he === !0,
                            });
                          try {
                            (De(A, s.timestamp), O.encode(z, { keyFrame: B }));
                          } finally {
                            (z !== G && z.close(), G.close());
                          }
                          (A.frameCounter++,
                            B &&
                              ((A.lastKeyFrameTime = Date.now()),
                              (A.requestKeyframe = !1)),
                            xe(w, A));
                        }
                      }
                      var j = 150;
                      if (
                        o("WAWebVoipVideoCaptureOffThread")
                          .encodedFrameOrientations.size >
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
                        H ||
                          (H = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " encode error: ",
                            "",
                          ])),
                        y,
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
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " starting capture ",
                    "x",
                    "@",
                    "fps presentationOrientationFix=",
                    "",
                  ])),
                y,
                t.width,
                t.height,
                t.maxFps,
                String(p),
              ),
                o("WAWebVoipVideoCaptureOffThread").updateStopCapture(!1),
                (_e = r),
                (fe = s),
                (ge = d),
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFpsReset(),
                u != null &&
                  (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).updateCurrentWorkerOrientation(u),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " initial orientation: ",
                        "",
                      ])),
                    y,
                    u,
                  )),
                he == null &&
                  ((he = o(
                    "WAWebVoipVideoFrameSourceRectProbe",
                  ).probeVideoFrameSourceRectSupport()),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " visibleRect crop probe: ",
                        "",
                      ])),
                    y,
                    he ? "supported (fast path)" : "broken (canvas workaround)",
                  )));
              var b = 0;
              Ne();
              var v = ye(fe);
              ((v.lastKeyFrameTime = Date.now()),
                (v.currentWidth = o("WAWebVoipWebCodecsEncoderCrop").toEven(
                  t.width,
                )),
                (v.currentHeight = o("WAWebVoipWebCodecsEncoderCrop").toEven(
                  t.height,
                )),
                (v.currentFps = Math.max(t.maxFps, 1)),
                (v.latencyLastLogTime = Date.now()),
                te.set(b, v),
                (t.width !== v.currentWidth || t.height !== v.currentHeight) &&
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " normalized odd dimensions: ",
                        "x",
                        " -> ",
                        "x",
                        "",
                      ])),
                    y,
                    t.width,
                    t.height,
                    v.currentWidth,
                    v.currentHeight,
                  ));
              var S = 0,
                R = 0,
                L = 0,
                E = 5,
                k = new (o(
                  "WAWebVoipSelfPreviewSender",
                ).WAWebVoipSelfPreviewSender)(t.width, t.height, {
                  videoFrame: f && h && !d,
                  visibleRectCropWorks: he === !0,
                });
              try {
                var I = ve(b, v);
                v.encoder = I;
                var T = Ce(v);
                (I.configure(T),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " encoder configured: codec=",
                        " bitrate=",
                        "",
                      ])),
                    y,
                    T.codec,
                    v.currentBitrate,
                  ));
              } catch (e) {
                throw (Pe(b), e);
              }
              if (h)
                (o("WAWebVoipVideoCaptureOffThread").registerCaptureAndEncodeFn(
                  C,
                ),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video-element mode: encoder ready, waiting for frames",
                      ])),
                    y,
                  ),
                  yield o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).getInterruptCaptureOnStop()
                    ? o("WAWebVoipVideoCaptureOffThread").waitForStopCapture()
                    : et(),
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video-element mode: stop requested",
                      ])),
                    y,
                  ),
                  o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).registerCaptureAndEncodeFn(null),
                  yield je(y));
              else if (e != null)
                try {
                  var D,
                    x =
                      e.readable ||
                      (yield new MediaStreamTrackProcessor({ track: e.track })
                        .readable);
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got MediaStreamTrackProcessor readable",
                      ])),
                    y,
                  );
                  var $ = x.getReader();
                  for (
                    o("WAWebVoipVideoCaptureOffThread").registerActiveCapture(
                      $,
                      (D = e.track) != null ? D : null,
                    ),
                      o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                        K ||
                          (K = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " starting capture loop",
                          ])),
                        y,
                      );
                    !o("WAWebVoipVideoCaptureOffThread").getStopCapture();
                  ) {
                    var P = yield $.read(),
                      N = P.done,
                      M = P.value;
                    try {
                      if (N || !M) {
                        o("WAWebVoipVideoCaptureOffThread").updateStopCapture(
                          !0,
                        );
                        break;
                      }
                      yield C(M);
                    } finally {
                      M == null || M.close();
                    }
                  }
                  o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " finished capture loop",
                      ])),
                    y,
                  );
                } finally {
                  (o("WAWebVoipVideoCaptureOffThread").clearActiveCapture(),
                    e.track && e.track.stop(),
                    yield je(y));
                }
              else
                (o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " captureObject is null in non-videoElement mode",
                    ])),
                  y,
                ),
                  yield je(y));
            } catch (e) {
              o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " capture error: ",
                    "",
                  ])),
                y,
                e,
              );
            } finally {
              ((_e = null), (fe = !1), (ge = !1));
              try {
                r.exitJsWorkerThread();
              } catch (e) {
                o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " exitJsWorkerThread error: ",
                      "",
                    ])),
                  y,
                  e,
                );
              }
              o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exit capture worker thread",
                  ])),
                y,
              );
            }
          },
        )),
        at.apply(this, arguments)
      );
    }
    function it(e, t, n, r, a, i, l) {
      var s = "voip: [webcodec-encode][stream=" + e + "]",
        u = _e;
      if (u == null) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
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
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
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
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " WASM requested keyframe (initial frames dropped)",
                ])),
              s,
            ),
            (t.requestKeyframe = !0)));
      } catch (e) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " error handling encoded chunk: ",
              "",
            ])),
          s,
          e,
        );
      }
    }
    function lt(e, t, n) {
      var r = be(t.reattachFailures);
      if (!st(t, r)) {
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " stream ",
              " port reattached, recreating encoder",
            ])),
          n,
          e,
        );
        var a = null;
        try {
          ((a = ve(e, t)), (t.encoder = a), a.configure(Ce(t)), Ie(t), ut(t));
        } catch (n) {
          (a != null && (Se(t, a) && Ie(t), Re(a)), ct(e, t, n));
        }
      }
    }
    function st(e, t) {
      return t > 0 && self.performance.now() - e.lastReattachFailureTime < t;
    }
    function ut(e) {
      ((e.requestKeyframe = !0),
        (e.portDetached = !1),
        (e.reattachFailures = 0),
        (e.lastReattachFailureTime = 0));
    }
    function ct(e, t, n) {
      (t.reattachFailures++,
        (t.lastReattachFailureTime = self.performance.now()),
        t.outputWatchdogEnabled &&
          t.reattachFailures >= pe &&
          (t.preferSoftwareEncoder = !0));
      var r = "voip: [webcodec-encode][stream=" + e + "]";
      o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
        N ||
          (N = babelHelpers.taggedTemplateLiteralLoose([
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
        be(t.reattachFailures),
        n,
      );
    }
    ((l.updateWebCodecsEncoderParams = Ve),
      (l.startVideoCaptureWithWebCodecsEncoderInWorker = ot));
  },
  98,
);
