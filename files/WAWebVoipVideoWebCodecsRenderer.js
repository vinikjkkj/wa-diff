__d(
  "WAWebVoipVideoWebCodecsRenderer",
  [
    "Promise",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRendererLogging",
    "WAWebVoipWebCodecsEncoderState",
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
      C = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      b = null;
    function v(e) {
      b = e;
    }
    var S = "voip: WAWebVoipVideoWebCodecsRenderer: ",
      R = 5,
      L = 500,
      E = 30,
      k = 5e3,
      I = 320,
      T = 240,
      D = (function (t) {
        function a(e, n) {
          var r;
          return (
            (r = t.call(this, e) || this),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_11 = new Map()),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_12 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_15 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_7 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_8 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_9 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_16 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_1 =
              n != null ? n : VideoDecoder),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_2 = 0),
            (r.$WAWebVoipVideoWebCodecsRenderer$p_3 =
              r.$WAWebVoipVideoWebCodecsRenderer$p_4()),
            r
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$WAWebVoipVideoWebCodecsRenderer$p_4 = function () {
            var t = this,
              n = this.$WAWebVoipVideoWebCodecsRenderer$p_2,
              r = new this.$WAWebVoipVideoWebCodecsRenderer$p_1({
                output: function (r) {
                  try {
                    if (n !== t.$WAWebVoipVideoWebCodecsRenderer$p_2) return;
                    ((t.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0),
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
                      t.$WAWebVoipVideoWebCodecsRenderer$p_7++,
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_8 = r.displayWidth),
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_9 =
                        r.displayHeight),
                      t.applyPendingResize());
                    var e = t.$WAWebVoipVideoWebCodecsRenderer$p_10(
                        r.timestamp,
                      ),
                      o = e.mirror,
                      a = e.orientation;
                    t.renderVideoFrameToCanvas(
                      r,
                      r.displayWidth,
                      r.displayHeight,
                      a,
                      o,
                      !0,
                    );
                  } finally {
                    r.close();
                  }
                },
                error: function (i) {
                  n === t.$WAWebVoipVideoWebCodecsRenderer$p_2 &&
                    (t.$WAWebVoipVideoWebCodecsRenderer$p_3 === r &&
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_3 = null),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_11.clear(),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_5++,
                    (t.$WAWebVoipVideoWebCodecsRenderer$p_12 = Date.now()),
                    b == null || b(),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_5 > R
                      ? o("WAWebVoipVideoRendererLogging").ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "H264 decoder fatal error, max recovery attempts (",
                              ") exceeded. ",
                              "",
                            ])),
                          S,
                          R,
                          i,
                        )
                      : o("WAWebVoipVideoRendererLogging").ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "H264 decoder fatal error, will attempt recovery (",
                              "/",
                              "). ",
                              "",
                            ])),
                          S,
                          t.$WAWebVoipVideoWebCodecsRenderer$p_5,
                          R,
                          i,
                        ));
                },
              });
            return (r.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_13), r);
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_14 = function () {
            var e;
            ((this.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
              this.$WAWebVoipVideoWebCodecsRenderer$p_11.clear(),
              (e = this.$WAWebVoipVideoWebCodecsRenderer$p_3) == null ||
                e.close(),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_3 =
                this.$WAWebVoipVideoWebCodecsRenderer$p_4()));
          }),
          (i.reset = function () {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_3;
            ((this.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_12 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_15 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_7 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_8 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_9 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_16 = 0),
              t.prototype.reset.call(this),
              this.$WAWebVoipVideoWebCodecsRenderer$p_2++,
              (this.$WAWebVoipVideoWebCodecsRenderer$p_3 = null),
              this.$WAWebVoipVideoWebCodecsRenderer$p_14(),
              e &&
                e.state !== "closed" &&
                e.flush().finally(function () {
                  e.state !== "closed" && e.close();
                }));
          }),
          (i.requireKeyframe = function () {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_3;
            if ((e == null ? void 0 : e.state) === "configured") {
              var t = e.decodeQueueSize;
              (e.reset(),
                e.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_13),
                o("WAWebVoipVideoRendererLogging").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      "requireKeyframe: decoder reset and reconfigured, [[key chunk required]] = true, decodeQueueSizeBeforeReset=",
                      "",
                    ])),
                  S,
                  t,
                ));
            }
          }),
          (i.cleanup = function () {
            var e;
            (this.$WAWebVoipVideoWebCodecsRenderer$p_2++,
              (e = this.$WAWebVoipVideoWebCodecsRenderer$p_3) == null ||
                e.close(),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_3 = null),
              t.prototype.cleanup.call(this));
          }),
          (a.checkAvailability = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                a.$WAWebVoipVideoWebCodecsRenderer$p_17 == null &&
                  (a.$WAWebVoipVideoWebCodecsRenderer$p_17 =
                    a.$WAWebVoipVideoWebCodecsRenderer$p_18()),
                a.$WAWebVoipVideoWebCodecsRenderer$p_17
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = window.performance.now();
              if (
                typeof window == "undefined" ||
                typeof window.VideoDecoder != "function"
              )
                return !1;
              var t = yield window.VideoDecoder.isConfigSupported(
                  a.$WAWebVoipVideoWebCodecsRenderer$p_13,
                ),
                n = t.supported;
              if (n == null || !n)
                return (
                  o("WAWebVoipVideoRendererLogging").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "H264 decoder not supported",
                      ])),
                    S,
                  ),
                  !1
                );
              if (typeof window.VideoEncoder != "function")
                return (
                  o("WAWebVoipVideoRendererLogging").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "VideoEncoder not available, skipping decode probe",
                      ])),
                    S,
                  ),
                  !1
                );
              var r = !1;
              try {
                r = yield a.$WAWebVoipVideoWebCodecsRenderer$p_19();
              } catch (e) {}
              var i = Math.round(window.performance.now() - e);
              return r
                ? (o("WAWebVoipVideoRendererLogging").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    S +
                      "H264 decoder supported and probe passed in " +
                      i +
                      "ms",
                  ),
                  !0)
                : (o("WAWebVoipVideoRendererLogging").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    S +
                      "H264 decoder probe failed in " +
                      i +
                      "ms \u2014 falling back to WASM decode",
                  ),
                  !1);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = 2e3,
                t = null,
                i = null,
                l = null;
              try {
                var s = yield new (y || (y = n("Promise")))(function (n) {
                  var s,
                    u,
                    c = !1,
                    d = function (t) {
                      c || ((c = !0), n(t));
                    },
                    m = window.setTimeout(function () {
                      return d(!1);
                    }, e);
                  ((i = new VideoDecoder({
                    output: function (t) {
                      (t.close(), window.clearTimeout(m), d(!0));
                    },
                    error: function () {
                      (window.clearTimeout(m), d(!1));
                    },
                  })),
                    i.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_13));
                  var p = !1;
                  ((t = new VideoEncoder({
                    output: function (t) {
                      if (!p) {
                        if (((p = !0), i == null || i.state === "closed")) {
                          (window.clearTimeout(m), d(!1));
                          return;
                        }
                        var e = i;
                        try {
                          e.decode(t);
                        } catch (e) {
                          (o("WAWebVoipVideoRendererLogging").WARN(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                "probe decode threw, treating decoder as unsupported: ",
                                "",
                              ])),
                            S,
                            String(e),
                          ),
                            window.clearTimeout(m),
                            d(!1));
                          return;
                        }
                        e.flush().then(
                          function () {
                            (window.clearTimeout(m), d(!1));
                          },
                          function () {
                            (window.clearTimeout(m), d(!1));
                          },
                        );
                      }
                    },
                    error: function () {
                      (window.clearTimeout(m), d(!1));
                    },
                  })),
                    t.configure({
                      codec: o("WAWebVoipWebCodecsEncoderState")
                        .WEBCODECS_H264_CODEC,
                      width: I,
                      height: T,
                      avc: { format: "annexb" },
                    }));
                  var f = r("WAWebVoipVideoFrameCtor")();
                  if (f == null) {
                    (window.clearTimeout(m), d(!1));
                    return;
                  }
                  var g = new Uint8Array(I * T * 4);
                  ((l = new f(g, {
                    format: "RGBA",
                    codedWidth: I,
                    codedHeight: T,
                    timestamp: 0,
                  })),
                    (s = t) == null || s.encode(l, { keyFrame: !0 }),
                    (u = t) == null ||
                      u.flush().catch(function () {
                        (window.clearTimeout(m), d(!1));
                      }));
                });
                return s;
              } catch (e) {
                return !1;
              } finally {
                var u;
                ((u = l) == null || u.close(),
                  t != null && t.state !== "closed" && t.close(),
                  i != null && i.state !== "closed" && i.close());
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.renderFrame = function (n, a, i, l, s, u, c, d) {
            if (u === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264) {
              if (!this.$WAWebVoipVideoWebCodecsRenderer$p_3)
                throw this.$WAWebVoipVideoWebCodecsRenderer$p_5 === 0
                  ? new C(r("err")(S + "Decoder not available, awaiting reset"))
                  : this.$WAWebVoipVideoWebCodecsRenderer$p_5 > R
                    ? r("err")(S + "H264 Decoder closed due to fatal error")
                    : Date.now() - this.$WAWebVoipVideoWebCodecsRenderer$p_12 <
                        L
                      ? new C(r("err")(S + "Decoder recovery cooldown"))
                      : (o("WAWebVoipVideoRendererLogging").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "Recreating H264 decoder after fatal error (attempt ",
                              "/",
                              ")",
                            ])),
                          S,
                          this.$WAWebVoipVideoWebCodecsRenderer$p_5,
                          R,
                        ),
                        this.$WAWebVoipVideoWebCodecsRenderer$p_14(),
                        new C(
                          r("err")(
                            S + "Decoder recovered, requesting key frame",
                          ),
                        ));
              var e = (c * 1e3) / 90;
              try {
                (this.$WAWebVoipVideoWebCodecsRenderer$p_20(n, e, d),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_21(e, {
                    orientation: l,
                    mirror: s,
                  }),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_15++,
                  this.$WAWebVoipVideoWebCodecsRenderer$p_6++);
                var m = Date.now();
                (m - this.$WAWebVoipVideoWebCodecsRenderer$p_16 >= k &&
                  (o("WAWebVoipVideoRendererLogging").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "[webcodec-decode] fed=",
                        " decoded=",
                        " last=",
                        "x",
                        " pending=",
                        "",
                      ])),
                    S,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_15,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_7,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_8,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_9,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_6,
                  ),
                  (this.$WAWebVoipVideoWebCodecsRenderer$p_16 = m)),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_22());
              } catch (e) {
                throw e instanceof Error && e.name === "DataError"
                  ? new C(e)
                  : e;
              }
              return;
            }
            t.prototype.renderFrame.call(this, n, a, i, l, s, u, c, d);
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_21 = function (t, n) {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_11.get(t);
            (e ||
              ((e = []), this.$WAWebVoipVideoWebCodecsRenderer$p_11.set(t, e)),
              e.push(n));
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_10 = function (t) {
            var e,
              n = this.$WAWebVoipVideoWebCodecsRenderer$p_11.get(t),
              r = {
                orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
                mirror: !1,
              };
            if (!n) return r;
            var a = (e = n.shift()) != null ? e : r;
            return (
              n.length === 0 &&
                this.$WAWebVoipVideoWebCodecsRenderer$p_11.delete(t),
              a
            );
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_20 = function (t, n, r) {
            var e,
              o = {
                type: r ? "key" : "delta",
                timestamp: n,
                data: t,
                transfer: [t],
              },
              a = new EncodedVideoChunk(o);
            (e = this.$WAWebVoipVideoWebCodecsRenderer$p_3) == null ||
              e.decode(a);
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_22 = function () {
            if (this.$WAWebVoipVideoWebCodecsRenderer$p_6 >= E)
              throw (
                o("WAWebVoipVideoRendererLogging").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      "Watchdog: no output after ",
                      " frames, resetting decoder",
                    ])),
                  S,
                  this.$WAWebVoipVideoWebCodecsRenderer$p_6,
                ),
                this.$WAWebVoipVideoWebCodecsRenderer$p_14(),
                new C(r("err")(S + "Decoder output stalled"))
              );
          }),
          a
        );
      })(o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer);
    ((D.$WAWebVoipVideoWebCodecsRenderer$p_13 = {
      codec: o("WAWebVoipWebCodecsEncoderState").WEBCODECS_H264_CODEC,
      optimizeForLatency: !0,
    }),
      (l.KeyFrameNeededError = C),
      (l.setFatalErrorCallback = v),
      (l.WAWebVoipVideoWebCodecsRenderer = D));
  },
  98,
);
