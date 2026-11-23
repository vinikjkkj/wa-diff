__d(
  "WAWebVoipVideoWebCodecsRenderer",
  [
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRendererLogging",
    "WAWebVoipWebCodecsEncoderState",
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
      k = 320,
      I = 240,
      T = (function (t) {
        function n(e, n) {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$WAWebVoipVideoWebCodecsRenderer$p_4 = function () {
            var t = this,
              r = this.$WAWebVoipVideoWebCodecsRenderer$p_2,
              a = new this.$WAWebVoipVideoWebCodecsRenderer$p_1({
                output: function (n) {
                  try {
                    if (r !== t.$WAWebVoipVideoWebCodecsRenderer$p_2) return;
                    ((t.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0),
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
                      t.$WAWebVoipVideoWebCodecsRenderer$p_7++,
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_8 = n.displayWidth),
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_9 =
                        n.displayHeight),
                      t.applyPendingResize());
                    var e = t.$WAWebVoipVideoWebCodecsRenderer$p_10(
                        n.timestamp,
                      ),
                      o = e.mirror,
                      a = e.orientation;
                    t.renderVideoFrameToCanvas(
                      n,
                      n.displayWidth,
                      n.displayHeight,
                      a,
                      o,
                      !0,
                    );
                  } finally {
                    n.close();
                  }
                },
                error: function (i) {
                  r === t.$WAWebVoipVideoWebCodecsRenderer$p_2 &&
                    (t.$WAWebVoipVideoWebCodecsRenderer$p_3 === a &&
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
            return (a.configure(n.$WAWebVoipVideoWebCodecsRenderer$p_13), a);
          }),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_14 = function () {
            var e;
            ((this.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
              this.$WAWebVoipVideoWebCodecsRenderer$p_11.clear(),
              (e = this.$WAWebVoipVideoWebCodecsRenderer$p_3) == null ||
                e.close(),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_3 =
                this.$WAWebVoipVideoWebCodecsRenderer$p_4()));
          }),
          (a.reset = function () {
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
          (a.requireKeyframe = function () {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_3;
            if ((e == null ? void 0 : e.state) === "configured") {
              var t = e.decodeQueueSize;
              (e.reset(),
                e.configure(n.$WAWebVoipVideoWebCodecsRenderer$p_13),
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
          (a.cleanup = function () {
            var e;
            (this.$WAWebVoipVideoWebCodecsRenderer$p_2++,
              (e = this.$WAWebVoipVideoWebCodecsRenderer$p_3) == null ||
                e.close(),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_3 = null),
              t.prototype.cleanup.call(this));
          }),
          (n.checkAvailability = async function () {
            return (
              n.$WAWebVoipVideoWebCodecsRenderer$p_17 == null &&
                (n.$WAWebVoipVideoWebCodecsRenderer$p_17 =
                  n.$WAWebVoipVideoWebCodecsRenderer$p_18()),
              n.$WAWebVoipVideoWebCodecsRenderer$p_17
            );
          }),
          (n.$WAWebVoipVideoWebCodecsRenderer$p_18 = async function () {
            var e = window.performance.now();
            if (
              typeof window == "undefined" ||
              typeof window.VideoDecoder != "function"
            )
              return !1;
            var t = await window.VideoDecoder.isConfigSupported(
                n.$WAWebVoipVideoWebCodecsRenderer$p_13,
              ),
              r = t.supported;
            if (r == null || !r)
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
            var a = !1;
            try {
              a = await n.$WAWebVoipVideoWebCodecsRenderer$p_19();
            } catch (e) {}
            var i = Math.round(window.performance.now() - e);
            return a
              ? (o("WAWebVoipVideoRendererLogging").LOG(
                  p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  v + "H264 decoder supported and probe passed in " + i + "ms",
                ),
                !0)
              : (o("WAWebVoipVideoRendererLogging").LOG(
                  m || (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  v +
                    "H264 decoder probe failed in " +
                    i +
                    "ms \u2014 falling back to WASM decode",
                ),
                !1);
          }),
          (n.$WAWebVoipVideoWebCodecsRenderer$p_19 = async function () {
            var e = 2e3,
              t = null,
              a = null,
              i = null;
            try {
              var l = await new Promise(function (l) {
                var s,
                  u,
                  c = !1,
                  d = function (t) {
                    c || ((c = !0), l(t));
                  },
                  m = window.setTimeout(function () {
                    return d(!1);
                  }, e);
                ((a = new VideoDecoder({
                  output: function (t) {
                    (t.close(), window.clearTimeout(m), d(!0));
                  },
                  error: function () {
                    (window.clearTimeout(m), d(!1));
                  },
                })),
                  a.configure(n.$WAWebVoipVideoWebCodecsRenderer$p_13));
                var p = !1;
                ((t = new VideoEncoder({
                  output: function (t) {
                    if (!p) {
                      if (((p = !0), a == null || a.state === "closed")) {
                        (window.clearTimeout(m), d(!1));
                        return;
                      }
                      var e = a;
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
                          v,
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
                    width: k,
                    height: I,
                    avc: { format: "annexb" },
                  }));
                var f = r("WAWebVoipVideoFrameCtor")();
                if (f == null) {
                  (window.clearTimeout(m), d(!1));
                  return;
                }
                var g = new Uint8Array(k * I * 4);
                ((i = new f(g, {
                  format: "RGBA",
                  codedWidth: k,
                  codedHeight: I,
                  timestamp: 0,
                })),
                  (s = t) == null || s.encode(i, { keyFrame: !0 }),
                  (u = t) == null ||
                    u.flush().catch(function () {
                      (window.clearTimeout(m), d(!1));
                    }));
              });
              return l;
            } catch (e) {
              return !1;
            } finally {
              var s;
              ((s = i) == null || s.close(),
                t != null && t.state !== "closed" && t.close(),
                a != null && a.state !== "closed" && a.close());
            }
          }),
          (a.renderFrame = function (n) {
            var e = n.format,
              a = n.frameBuffer,
              i = n.height,
              l = n.isKeyFrame,
              s = n.mirror,
              u = n.orientation,
              c = n.timestamp,
              d = n.width;
            if (e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264) {
              if (!this.$WAWebVoipVideoWebCodecsRenderer$p_3)
                throw this.$WAWebVoipVideoWebCodecsRenderer$p_5 === 0
                  ? new y(
                      String(
                        r("err")(v + "Decoder not available, awaiting reset"),
                      ),
                    )
                  : this.$WAWebVoipVideoWebCodecsRenderer$p_5 > S
                    ? r("err")(v + "H264 Decoder closed due to fatal error")
                    : Date.now() - this.$WAWebVoipVideoWebCodecsRenderer$p_12 <
                        R
                      ? new y(String(r("err")(v + "Decoder recovery cooldown")))
                      : (o("WAWebVoipVideoRendererLogging").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
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
                          String(
                            r("err")(
                              v + "Decoder recovered, requesting key frame",
                            ),
                          ),
                        ));
              var m = (c * 1e3) / 90;
              try {
                (this.$WAWebVoipVideoWebCodecsRenderer$p_20({
                  frameBuffer: a,
                  isKeyFrame: l,
                  timestampMicros: m,
                }),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_21(m, {
                    orientation: u,
                    mirror: s,
                  }),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_15++,
                  this.$WAWebVoipVideoWebCodecsRenderer$p_6++);
                var p = Date.now();
                (p - this.$WAWebVoipVideoWebCodecsRenderer$p_16 >= E &&
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
                    v,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_15,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_7,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_8,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_9,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_6,
                  ),
                  (this.$WAWebVoipVideoWebCodecsRenderer$p_16 = p)),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_22());
              } catch (e) {
                throw e instanceof Error && e.name === "DataError"
                  ? new y(String(e))
                  : e;
              }
              return;
            }
            t.prototype.renderFrame.call(this, {
              format: e,
              frameBuffer: a,
              height: i,
              isKeyFrame: l,
              mirror: s,
              orientation: u,
              timestamp: c,
              width: d,
            });
          }),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_21 = function (t, n) {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_11.get(t);
            (e ||
              ((e = []), this.$WAWebVoipVideoWebCodecsRenderer$p_11.set(t, e)),
              e.push(n));
          }),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_10 = function (t) {
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
          (a.$WAWebVoipVideoWebCodecsRenderer$p_20 = function (t) {
            var e,
              n = t.frameBuffer,
              r = t.isKeyFrame,
              o = t.timestampMicros,
              a = {
                type: r ? "key" : "delta",
                timestamp: o,
                data: n,
                transfer: [n],
              },
              i = new EncodedVideoChunk(a);
            (e = this.$WAWebVoipVideoWebCodecsRenderer$p_3) == null ||
              e.decode(i);
          }),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_22 = function () {
            if (this.$WAWebVoipVideoWebCodecsRenderer$p_6 >= L)
              throw (
                o("WAWebVoipVideoRendererLogging").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      "Watchdog: no output after ",
                      " frames, resetting decoder",
                    ])),
                  v,
                  this.$WAWebVoipVideoWebCodecsRenderer$p_6,
                ),
                this.$WAWebVoipVideoWebCodecsRenderer$p_14(),
                new y(String(r("err")(v + "Decoder output stalled")))
              );
          }),
          n
        );
      })(o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer);
    ((T.$WAWebVoipVideoWebCodecsRenderer$p_13 = {
      codec: o("WAWebVoipWebCodecsEncoderState").WEBCODECS_H264_CODEC,
      optimizeForLatency: !0,
    }),
      (l.KeyFrameNeededError = y),
      (l.setFatalErrorCallback = b),
      (l.WAWebVoipVideoWebCodecsRenderer = T));
  },
  98,
);
