__d(
  "WAWebVoipWebCodecsEncoder",
  [
    "Promise",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipWebCodecsEncoderState",
    "asyncToGeneratorRuntime",
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
      G;
    function z(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: 3,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    function j(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
        level: 1,
        message: String.raw.apply(String, [{ raw: e }].concat(n)),
      });
    }
    var K = new Map(),
      Q = 5e3,
      X = 3e3,
      Y = 3,
      J = 1e3,
      Z = 4e3,
      ee = null,
      te = null;
    function ne() {
      try {
        var e = new OffscreenCanvas(4, 2),
          t = e.getContext("2d");
        if (t == null) return !1;
        ((t.fillStyle = "#ff0000"),
          t.fillRect(0, 0, 2, 2),
          (t.fillStyle = "#0000ff"),
          t.fillRect(2, 0, 2, 2));
        var n = new VideoFrame(e, { timestamp: 0 }),
          r = new OffscreenCanvas(2, 2),
          o = r.getContext("2d");
        if (o == null) return (n.close(), !1);
        (o.drawImage(n, 0, 0, 2, 2, 0, 0, 2, 2), n.close());
        var a = o.getImageData(1, 1, 1, 1).data;
        return a[0] > 200 && a[2] < 50;
      } catch (e) {
        return !1;
      }
    }
    function re() {
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
        latencyMin: 1 / 0,
        latencyMax: 0,
        latencySum: 0,
        latencyCount: 0,
        latencyLastLogTime: 0,
        consecutiveFatalErrors: 0,
        lastFatalErrorTime: 0,
        preferSoftwareEncoder: !1,
        portDetached: !1,
        lastPortAvailable: !1,
        reattachFailures: 0,
        lastReattachFailureTime: 0,
        cropCanvas: null,
        cropCanvasCtx: null,
        isScreenShare: !1,
      };
    }
    function oe(e) {
      return e & -2;
    }
    function ae(e) {
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
        bitrateMode: "variable",
        avc: { format: "annexb" },
      };
    }
    function ie(e) {
      return e <= 0 ? 0 : Math.min(J * Math.pow(2, e - 1), Z);
    }
    function le(t, n) {
      var r = "voip: [webcodec-encode][stream=" + t + "]";
      return new VideoEncoder({
        output: function (i, l) {
          var a, s, u, c, d;
          n.consecutiveFatalErrors = 0;
          var m = n.encodeStartTimes.get(i.timestamp),
            p = 0;
          if (m != null) {
            n.encodeStartTimes.delete(i.timestamp);
            var _ = Date.now();
            if (
              ((p = _ - m),
              (n.latencyMin = Math.min(n.latencyMin, p)),
              (n.latencyMax = Math.max(n.latencyMax, p)),
              (n.latencySum += p),
              n.latencyCount++,
              _ - n.latencyLastLogTime >= Q)
            ) {
              var f =
                n.latencyCount > 0
                  ? (n.latencySum / n.latencyCount).toFixed(1)
                  : "0";
              (z(
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
                f,
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
                (n.latencyLastLogTime = _));
            }
          }
          var g =
              (a =
                l == null || (s = l.decoderConfig) == null
                  ? void 0
                  : s.codedWidth) != null
                ? a
                : n.currentWidth,
            h =
              (u =
                l == null || (c = l.decoderConfig) == null
                  ? void 0
                  : c.codedHeight) != null
                ? u
                : n.currentHeight,
            y =
              (d = o(
                "WAWebVoipVideoCaptureOffThread",
              ).encodedFrameOrientations.get(i.timestamp)) != null
                ? d
                : o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).getCurrentWorkerOrientation();
          Ie(t, n, i, g, h, p, y);
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
          ((n.encoder = null),
            n.consecutiveFatalErrors++,
            (n.lastFatalErrorTime = Date.now()),
            n.consecutiveFatalErrors >= 2 && (n.preferSoftwareEncoder = !0),
            n.consecutiveFatalErrors > Y
              ? j(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " encoder fatal error, max recovery attempts (",
                      ") exceeded: ",
                      "",
                    ])),
                  r,
                  Y,
                  e.message,
                )
              : j(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " encoder fatal error, will attempt recovery (",
                      "/",
                      "): ",
                      "",
                    ])),
                  r,
                  n.consecutiveFatalErrors,
                  Y,
                  e.message,
                ));
        }),
      });
    }
    function se(e) {
      var t = K.get(e);
      if ((t == null ? void 0 : t.encoder) != null)
        try {
          t.encoder.close();
        } catch (e) {}
      K.delete(e);
    }
    function ue() {
      for (var e of Array.from(K.keys())) se(e);
      ((fe = null), (ge = null));
    }
    function ce(e, t) {
      var n = "voip: [webcodec-encode][stream=" + e + "]";
      if (t.encoder != null && t.encoder.state === "configured")
        return t.encoder;
      if (
        t.consecutiveFatalErrors === 0 ||
        t.consecutiveFatalErrors > Y ||
        Date.now() - t.lastFatalErrorTime < J
      )
        return null;
      z(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "",
            " recreating encoder after fatal error (attempt ",
            "/",
            ")",
          ])),
        n,
        t.consecutiveFatalErrors,
        Y,
      );
      var r = null;
      try {
        return (
          (r = le(e, t)),
          r.configure(ae(t)),
          (t.encoder = r),
          (t.requestKeyframe = !0),
          r
        );
      } catch (e) {
        if (r != null)
          try {
            r.close();
          } catch (e) {}
        return (
          t.consecutiveFatalErrors++,
          (t.lastFatalErrorTime = Date.now()),
          j(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " encoder recovery failed (",
                "/",
                "): ",
                "",
              ])),
            n,
            t.consecutiveFatalErrors,
            Y,
            e,
          ),
          null
        );
      }
    }
    function de(e) {
      var t = e.visibleRect;
      return {
        x: t != null ? Math.max(0, Math.floor(t.x)) : 0,
        y: t != null ? Math.max(0, Math.floor(t.y)) : 0,
      };
    }
    function me(e, t) {
      var n = r("WAWebVoipVideoFrameCtor")();
      return n == null ? e : new n(e, t);
    }
    function pe(e) {
      var t = e.displayWidth,
        n = e.displayHeight,
        r = de(e),
        o = r.x,
        a = r.y;
      return e.codedWidth === t && e.codedHeight === n && o === 0 && a === 0
        ? e
        : me(e, {
            visibleRect: { x: o, y: a, width: t, height: n },
            displayWidth: t,
            displayHeight: n,
          });
    }
    function _e(e, t, n, r, o, a, i) {
      return me(e, {
        visibleRect: { x: t, y: n, width: r, height: o },
        displayWidth: a,
        displayHeight: i,
      });
    }
    var fe = null,
      ge = null;
    function he(e, t, n, r) {
      if (e != null && e.width === n && e.height === r) return [e, t];
      var o = new OffscreenCanvas(n, r);
      return [o, o.getContext("2d")];
    }
    function ye(e, t, n, r, o, a, i, l, s, u) {
      var c,
        d = he(fe, ge, t, n);
      ((fe = d[0]), (ge = d[1]));
      var p = he(u.cropCanvas, u.cropCanvasCtx, l, s),
        _ = p[0],
        f = p[1];
      ((u.cropCanvas = _), (u.cropCanvasCtx = f));
      var g = ge,
        h = f,
        y = fe;
      return g == null || h == null || y == null
        ? (j(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [webcodec-encode] cropFrame canvas context unavailable, clearing for retry",
              ])),
          ),
          (fe = null),
          (ge = null),
          (u.cropCanvas = null),
          (u.cropCanvasCtx = null),
          null)
        : (g.drawImage(e, 0, 0, t, n),
          h.drawImage(y, r, o, a, i, 0, 0, l, s),
          new VideoFrame(_, {
            timestamp: e.timestamp,
            duration: (c = e.duration) != null ? c : void 0,
          }));
    }
    function Ce(e) {
      var t = e.encoderCtx,
        n = e.frame,
        r = e.targetH,
        o = e.targetW,
        a = n.displayWidth,
        i = n.displayHeight;
      if (o <= 0 || r <= 0 || a <= 0 || i <= 0) return n;
      var l = oe(Math.max(o, 2)),
        s = oe(Math.max(r, 2)),
        u = pe(n),
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
        te === !0
          ? (g = _e(u, m, p, _, f, l, s))
          : (g = ye(u, a, i, m, p, _, f, l, s, t)),
        g != null && u !== n && u.close(),
        g != null ? g : u
      );
    }
    function be(e) {
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
    function ve(e) {
      var t = Date.now(),
        n = t - e.lastKeyFrameTime;
      return e.requestKeyframe || n > X || e.frameCounter === 0;
    }
    function Se(e) {
      var t = e.streamId,
        n = "voip: [webcodec-encode][stream=" + t + "]",
        r = K.get(t);
      (r == null &&
        ((r = re()),
        K.set(t, r),
        ee != null &&
          t > 0 &&
          ((r.currentBitrate = e.targetBitrateBps),
          (r.currentWidth = oe(e.targetWidth)),
          (r.currentHeight = oe(e.targetHeight)),
          (r.currentFps = Math.max(e.targetFps, 1)),
          (r.encoder = le(t, r)),
          r.encoder.configure(ae(r)),
          z(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " encoder created and configured: ",
                "x",
                " ",
                "bps ",
                "fps",
              ])),
            n,
            r.currentWidth,
            r.currentHeight,
            r.currentBitrate,
            r.currentFps,
          ))),
        (r.isScreenShare = e.isScreenShare),
        r.rateControlInitialized ||
          ((r.rateControlInitialized = !0),
          z(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " rate control initialized, encoding can begin",
              ])),
            n,
          )));
      var o = oe(e.targetWidth),
        a = oe(e.targetHeight),
        i = Math.max(e.targetFps, 1),
        l = o !== r.currentWidth || a !== r.currentHeight,
        s = l || e.targetBitrateBps !== r.currentBitrate || i !== r.currentFps;
      if (
        ((e.requestKeyframe || l) && (r.requestKeyframe = !0),
        s && r.encoder != null && r.encoder.state === "configured")
      ) {
        var u = r.currentBitrate,
          c = r.currentWidth,
          d = r.currentHeight,
          m = r.currentFps;
        ((r.currentBitrate = e.targetBitrateBps),
          (r.currentWidth = o),
          (r.currentHeight = a),
          (r.currentFps = i),
          z(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " reconfiguring: ",
                "x",
                " bitrate=",
                " fps=",
                "",
              ])),
            n,
            o,
            a,
            e.targetBitrateBps,
            i,
          ));
        try {
          r.encoder.configure(ae(r));
        } catch (e) {
          ((r.currentBitrate = u),
            (r.currentWidth = c),
            (r.currentHeight = d),
            (r.currentFps = m),
            j(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
          (r.currentWidth = o),
          (r.currentHeight = a),
          (r.currentFps = i));
    }
    function Re(e) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t of K) {
            var n = t[0],
              r = t[1],
              o = r.encoder;
            if (o != null) {
              try {
                o.state !== "closed" && (yield o.flush(), o.close());
              } catch (t) {
                j(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " error closing encoder stream=",
                      ": ",
                      "",
                    ])),
                  e,
                  n,
                  t,
                );
              }
              r.encoder = null;
            }
          }
          K.clear();
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t, n, r, o, a) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i, l) {
            (a === void 0 && (a = !1), l === void 0 && (l = !1));
            var s = "voip: [webcodec-encode]";
            try {
              var u = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFrameTick();
                    try {
                      var t = e.displayWidth,
                        n = e.displayHeight;
                      (!l &&
                        !m &&
                        ((m = !0),
                        z(
                          I ||
                            (I = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " camera dimensions: ",
                              "x",
                              ", reporting to VoIP stack",
                            ])),
                          s,
                          t,
                          n,
                        ),
                        r.setVideoPreviewSize(t, n)),
                        l &&
                          (t !== p || n !== _) &&
                          ((p = t),
                          (_ = n),
                          z(
                            T ||
                              (T = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " screen share capture size changed: ",
                                "x",
                                "",
                              ])),
                            s,
                            t,
                            n,
                          ),
                          r.setScreenShareCaptureSize(t, n)));
                      var a = o(
                          "WAWebVoipMediaEnums",
                        ).formatEnumFromVideoFrameFormat(e.format),
                        i = e.format === "BGRA";
                      if (f < g) {
                        var u, c, d, y, C;
                        (f++,
                          z(
                            D ||
                              (D = babelHelpers.taggedTemplateLiteralLoose([
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
                            s,
                            f,
                            (u = e.format) != null ? u : "null",
                            e.codedWidth,
                            e.codedHeight,
                            e.displayWidth,
                            e.displayHeight,
                            (c =
                              (d = e.colorSpace) == null
                                ? void 0
                                : d.primaries) != null
                              ? c
                              : "unknown",
                            (y =
                              (C = e.colorSpace) == null
                                ? void 0
                                : C.transfer) != null
                              ? y
                              : "unknown",
                          ));
                      }
                      try {
                        if (
                          a ===
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                              .NV12 ||
                          a ===
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                              .I420 ||
                          a ===
                            o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                              .RGBA ||
                          i
                        ) {
                          var b = oe(e.displayWidth),
                            v = oe(e.displayHeight),
                            S = de(e),
                            R = S.x,
                            L = S.y,
                            E = e.allocationSize();
                          if (
                            ((h.buffer.byteLength === 0 || h.byteLength < E) &&
                              (h = new Uint8Array(E)),
                            e.codedWidth !== b ||
                            e.codedHeight !== v ||
                            R !== 0 ||
                            L !== 0
                              ? yield e.copyTo(h, {
                                  rect: { x: R, y: L, width: b, height: v },
                                })
                              : yield e.copyTo(h),
                            i)
                          )
                            for (var k = 0; k < h.length; k += 4) {
                              var A = h[k];
                              ((h[k] = h[k + 2]), (h[k + 2] = A));
                            }
                          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                            {
                              userJid: o("WAWebVoipVideoRendererInterface")
                                .selfPreviewJid,
                              frameBuffer: h.buffer,
                              width: b,
                              height: v,
                              format: i
                                ? o("WAWebVoipMediaEnums").WAWebVoipVideoFormat
                                    .RGBA
                                : a,
                              orientation: o(
                                "WAWebVoipVideoCaptureOffThread",
                              ).getFrameOrientation(e),
                              timestamp: 0,
                              isKeyFrame: !1,
                              isScreenShare: l,
                            },
                          );
                        } else if (f < g) {
                          var F;
                          z(
                            x ||
                              (x = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " skipping self-preview: unrecognized frame format=",
                                "",
                              ])),
                            s,
                            (F = e.format) != null ? F : "null",
                          );
                        }
                      } catch (e) {
                        f < g &&
                          j(
                            $ ||
                              ($ = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " self-preview error: ",
                                "",
                              ])),
                            s,
                            e,
                          );
                      }
                      var O = o(
                        "WAWebVoipVideoCaptureOffThread",
                      ).getFrameOrientation(e);
                      o(
                        "WAWebVoipVideoCaptureOffThread",
                      ).encodedFrameOrientations.set(e.timestamp, O);
                      var B = r.getEncodedVideoPortMask();
                      for (var W of K) {
                        var q = W[0],
                          U = W[1],
                          V = (B & (1 << q)) !== 0;
                        if (V)
                          if (U.portDetached) {
                            U.lastPortAvailable = !0;
                            var H = ie(U.reattachFailures);
                            if (
                              H > 0 &&
                              Date.now() - U.lastReattachFailureTime < H
                            )
                              continue;
                            z(
                              N ||
                                (N = babelHelpers.taggedTemplateLiteralLoose([
                                  "",
                                  " stream ",
                                  " port reattached, recreating encoder",
                                ])),
                              s,
                              q,
                            );
                            var G = null;
                            try {
                              ((G = le(q, U)),
                                G.configure(ae(U)),
                                (U.encoder = G),
                                (U.requestKeyframe = !0),
                                (U.portDetached = !1),
                                (U.reattachFailures = 0),
                                (U.consecutiveFatalErrors = 0),
                                (U.lastReattachFailureTime = 0));
                            } catch (e) {
                              if (G != null)
                                try {
                                  G.close();
                                } catch (e) {}
                              (U.reattachFailures++,
                                (U.lastReattachFailureTime = Date.now()),
                                j(
                                  M ||
                                    (M =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " stream ",
                                        " reattach failed (attempt ",
                                        "), will retry in ",
                                        "ms: ",
                                        "",
                                      ])),
                                  s,
                                  q,
                                  U.reattachFailures,
                                  ie(U.reattachFailures),
                                  e,
                                ));
                            }
                          } else U.lastPortAvailable = !0;
                        else {
                          if (!U.portDetached) {
                            if (
                              (z(
                                P ||
                                  (P = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    " stream ",
                                    " port detached, closing encoder",
                                  ])),
                                s,
                                q,
                              ),
                              U.encoder != null)
                            ) {
                              try {
                                U.encoder.close();
                              } catch (e) {}
                              U.encoder = null;
                            }
                            U.portDetached = !0;
                          }
                          (U.lastPortAvailable &&
                            ((U.reattachFailures = 0),
                            (U.lastReattachFailureTime = 0)),
                            (U.lastPortAvailable = !1));
                        }
                      }
                      var Q = !1;
                      for (var X of K.values())
                        if (X.isScreenShare) {
                          Q = !0;
                          break;
                        }
                      for (var Y of K) {
                        var J = Y[0],
                          Z = Y[1];
                        if (!Z.portDetached && Z.rateControlInitialized) {
                          var ee = l ? !Q || Z.isScreenShare : !Z.isScreenShare;
                          if (ee) {
                            var te = ce(J, Z);
                            if (te != null && be(Z)) {
                              var ne = ve(Z),
                                re = e.clone(),
                                se = Ce({
                                  encoderCtx: Z,
                                  frame: re,
                                  targetH: Z.currentHeight,
                                  targetW: Z.currentWidth,
                                });
                              try {
                                (Z.encodeStartTimes.set(
                                  e.timestamp,
                                  Date.now(),
                                ),
                                  te.encode(se, { keyFrame: ne }));
                              } finally {
                                (se !== re && se.close(), re.close());
                              }
                              (Z.frameCounter++,
                                ne &&
                                  ((Z.lastKeyFrameTime = Date.now()),
                                  (Z.requestKeyframe = !1)));
                            }
                          }
                        }
                      }
                      var ue = 150;
                      if (
                        o("WAWebVoipVideoCaptureOffThread")
                          .encodedFrameOrientations.size >
                        ue * 2
                      )
                        for (
                          var me = Array.from(
                              o(
                                "WAWebVoipVideoCaptureOffThread",
                              ).encodedFrameOrientations.keys(),
                            ),
                            pe = me.length - ue,
                            _e = 0;
                          _e < pe;
                          _e++
                        )
                          o(
                            "WAWebVoipVideoCaptureOffThread",
                          ).encodedFrameOrientations.delete(me[_e]);
                    } catch (e) {
                      j(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " encode error: ",
                            "",
                          ])),
                        s,
                        e,
                      );
                    }
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
              (z(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " starting capture ",
                    "x",
                    "@",
                    "fps",
                  ])),
                s,
                t.width,
                t.height,
                t.maxFps,
              ),
                o("WAWebVoipVideoCaptureOffThread").updateStopCapture(!1),
                (ee = r),
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFpsReset(),
                i != null &&
                  (o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).updateCurrentWorkerOrientation(i),
                  z(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " initial orientation: ",
                        "",
                      ])),
                    s,
                    i,
                  )),
                te == null &&
                  ((te = ne()),
                  z(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " visibleRect crop probe: ",
                        "",
                      ])),
                    s,
                    te ? "supported (fast path)" : "broken (canvas workaround)",
                  )));
              var c = 0;
              ue();
              var d = re();
              ((d.lastKeyFrameTime = Date.now()),
                (d.currentWidth = oe(t.width)),
                (d.currentHeight = oe(t.height)),
                (d.currentFps = Math.max(t.maxFps, 1)),
                (d.latencyLastLogTime = Date.now()),
                K.set(c, d),
                (t.width !== d.currentWidth || t.height !== d.currentHeight) &&
                  z(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " normalized odd dimensions: ",
                        "x",
                        " -> ",
                        "x",
                        "",
                      ])),
                    s,
                    t.width,
                    t.height,
                    d.currentWidth,
                    d.currentHeight,
                  ));
              var m = !1,
                p = 0,
                _ = 0,
                f = 0,
                g = 5,
                h = new Uint8Array(Math.floor(t.width * t.height * 1.5)),
                y = le(c, d);
              d.encoder = y;
              var C = ae(d);
              if (
                (y.configure(C),
                z(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " encoder configured: codec=",
                      " bitrate=",
                      "",
                    ])),
                  s,
                  C.codec,
                  d.currentBitrate,
                ),
                a)
              )
                (o("WAWebVoipVideoCaptureOffThread").registerCaptureAndEncodeFn(
                  u,
                ),
                  z(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video-element mode: encoder ready, waiting for frames",
                      ])),
                    s,
                  ),
                  yield new (G || (G = n("Promise")))(function (e) {
                    var t = function () {
                      o("WAWebVoipVideoCaptureOffThread").getStopCapture()
                        ? e()
                        : globalThis.setTimeout(t, 200);
                    };
                    t();
                  }),
                  z(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " video-element mode: stop requested",
                      ])),
                    s,
                  ),
                  o(
                    "WAWebVoipVideoCaptureOffThread",
                  ).registerCaptureAndEncodeFn(null),
                  yield Re(s));
              else if (e != null)
                try {
                  var b =
                    e.readable ||
                    (yield new MediaStreamTrackProcessor({ track: e.track })
                      .readable);
                  z(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " got MediaStreamTrackProcessor readable",
                      ])),
                    s,
                  );
                  var v = b.getReader();
                  for (
                    z(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " starting capture loop",
                        ])),
                      s,
                    );
                    !o("WAWebVoipVideoCaptureOffThread").getStopCapture();
                  ) {
                    var Q = yield v.read(),
                      X = Q.done,
                      Y = Q.value;
                    try {
                      if (X || !Y) {
                        o("WAWebVoipVideoCaptureOffThread").updateStopCapture(
                          !0,
                        );
                        break;
                      }
                      yield u(Y);
                    } finally {
                      Y == null || Y.close();
                    }
                  }
                  z(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " finished capture loop",
                      ])),
                    s,
                  );
                } finally {
                  (e.track && e.track.stop(), yield Re(s));
                }
              else
                (j(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " captureObject is null in non-videoElement mode",
                    ])),
                  s,
                ),
                  yield Re(s));
            } catch (e) {
              j(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " capture error: ",
                    "",
                  ])),
                s,
                e,
              );
            } finally {
              ee = null;
              try {
                r.exitJsWorkerThread();
              } catch (e) {
                j(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " exitJsWorkerThread error: ",
                      "",
                    ])),
                  s,
                  e,
                );
              }
              z(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " exit capture worker thread",
                  ])),
                s,
              );
            }
          },
        )),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t, n, r, o, a, i) {
      var l = "voip: [webcodec-encode][stream=" + e + "]",
        s = ee;
      if (s == null) {
        j(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " handleEncodedChunk called with no voipWasm",
            ])),
          l,
        );
        return;
      }
      try {
        var u = new Uint8Array(n.byteLength);
        n.copyTo(u);
        var c = n.type === "key",
          d = n.timestamp / 1e3,
          m = Date.now() - d;
        c &&
          z(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " encoded keyframe: size=",
                " captureTsMs=",
                " captureToEncodedMs=",
                " ",
                "x",
                "",
              ])),
            l,
            u.byteLength,
            d.toFixed(2),
            m.toFixed(1),
            r,
            o,
          );
        var p = s._malloc(u.byteLength),
          _ = 0;
        try {
          (s.GROWABLE_HEAP_U8().set(u, p),
            (_ = s.onEncodedVideoDataFromJsForStream(
              e,
              p,
              u.byteLength,
              r,
              o,
              d,
              c,
              a,
              i,
            )));
        } finally {
          s._free(p);
        }
        (c && (t.lastKeyFrameTime = Date.now()),
          _ === 1 &&
            (z(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " WASM requested keyframe (initial frames dropped)",
                ])),
              l,
            ),
            (t.requestKeyframe = !0)));
      } catch (e) {
        j(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " error handling encoded chunk: ",
              "",
            ])),
          l,
          e,
        );
      }
    }
    ((l.updateWebCodecsEncoderParams = Se),
      (l.startVideoCaptureWithWebCodecsEncoderInWorker = Ee));
  },
  98,
);
