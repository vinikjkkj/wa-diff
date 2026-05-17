__d(
  "WAWebVoipVideoWebCodecsRenderer",
  [
    "Promise",
    "WAWebVoipMediaEnums",
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
      y = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      C = null;
    function b(e) {
      C = e;
    }
    var v = "voip: WAWebVoipVideoWebCodecsRenderer: ",
      S = 5,
      R = 500,
      L = 30,
      E = 5e3,
      k = (function (t) {
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
                    C == null || C(),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_5 > S
                      ? o("WAWebVoipVideoRendererLogging").ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "H264 decoder fatal error, max recovery attempts (",
                              ") exceeded. ",
                              "",
                            ])),
                          v,
                          S,
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
                          v,
                          t.$WAWebVoipVideoWebCodecsRenderer$p_5,
                          S,
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
                  v,
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
                    v,
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
                    v,
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
                    v +
                      "H264 decoder supported and probe passed in " +
                      i +
                      "ms",
                  ),
                  !0)
                : (o("WAWebVoipVideoRendererLogging").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    v +
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
                r = null,
                i = null;
              try {
                var l = yield new (h || (h = n("Promise")))(function (n) {
                  var l,
                    s,
                    u = !1,
                    c = function (t) {
                      u || ((u = !0), n(t));
                    },
                    d = window.setTimeout(function () {
                      return c(!1);
                    }, e);
                  ((r = new VideoDecoder({
                    output: function (t) {
                      (t.close(), window.clearTimeout(d), c(!0));
                    },
                    error: function () {
                      (window.clearTimeout(d), c(!1));
                    },
                  })),
                    r.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_13),
                    (t = new VideoEncoder({
                      output: function (t) {
                        if (r == null || r.state === "closed") {
                          (window.clearTimeout(d), c(!1));
                          return;
                        }
                        var e = r;
                        (e.decode(t),
                          e.flush().then(
                            function () {
                              (window.clearTimeout(d), c(!1));
                            },
                            function () {
                              (window.clearTimeout(d), c(!1));
                            },
                          ));
                      },
                      error: function () {
                        (window.clearTimeout(d), c(!1));
                      },
                    })),
                    t.configure({
                      codec: o("WAWebVoipWebCodecsEncoderState")
                        .WEBCODECS_H264_CODEC,
                      width: 16,
                      height: 16,
                      avc: { format: "annexb" },
                    }));
                  var m = new Uint8Array(256 * 4);
                  ((i = new VideoFrame(m, {
                    format: "RGBA",
                    codedWidth: 16,
                    codedHeight: 16,
                    timestamp: 0,
                  })),
                    (l = t) == null || l.encode(i, { keyFrame: !0 }),
                    (s = t) == null ||
                      s.flush().catch(function () {
                        (window.clearTimeout(d), c(!1));
                      }));
                });
                return l;
              } catch (e) {
                return !1;
              } finally {
                var s;
                ((s = i) == null || s.close(),
                  t != null && t.state !== "closed" && t.close(),
                  r != null && r.state !== "closed" && r.close());
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
                  ? new y(r("err")(v + "Decoder not available, awaiting reset"))
                  : this.$WAWebVoipVideoWebCodecsRenderer$p_5 > S
                    ? r("err")(v + "H264 Decoder closed due to fatal error")
                    : Date.now() - this.$WAWebVoipVideoWebCodecsRenderer$p_12 <
                        R
                      ? new y(r("err")(v + "Decoder recovery cooldown"))
                      : (o("WAWebVoipVideoRendererLogging").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "Recreating H264 decoder after fatal error (attempt ",
                              "/",
                              ")",
                            ])),
                          v,
                          this.$WAWebVoipVideoWebCodecsRenderer$p_5,
                          S,
                        ),
                        this.$WAWebVoipVideoWebCodecsRenderer$p_14(),
                        new y(
                          r("err")(
                            v + "Decoder recovered, requesting key frame",
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
                (m - this.$WAWebVoipVideoWebCodecsRenderer$p_16 >= E &&
                  (o("WAWebVoipVideoRendererLogging").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "[webcodec-decode] fed=",
                        " decoded=",
                        " last=",
                        "x",
                        " pending=",
                        "",
                      ])),
                    v,
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
                  ? new y(e)
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
            if (this.$WAWebVoipVideoWebCodecsRenderer$p_6 >= L)
              throw (
                o("WAWebVoipVideoRendererLogging").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      "Watchdog: no output after ",
                      " frames, resetting decoder",
                    ])),
                  v,
                  this.$WAWebVoipVideoWebCodecsRenderer$p_6,
                ),
                this.$WAWebVoipVideoWebCodecsRenderer$p_14(),
                new y(r("err")(v + "Decoder output stalled"))
              );
          }),
          a
        );
      })(o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer);
    ((k.$WAWebVoipVideoWebCodecsRenderer$p_13 = {
      codec: o("WAWebVoipWebCodecsEncoderState").WEBCODECS_H264_CODEC,
      optimizeForLatency: !0,
    }),
      (l.KeyFrameNeededError = y),
      (l.setFatalErrorCallback = b),
      (l.WAWebVoipVideoWebCodecsRenderer = k));
  },
  98,
);
