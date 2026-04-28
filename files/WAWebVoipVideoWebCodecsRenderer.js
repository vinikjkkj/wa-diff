__d(
  "WAWebVoipVideoWebCodecsRenderer",
  [
    "Promise",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoRasterRenderer",
    "WAWebVoipVideoRendererLogging",
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
        function a(e) {
          var n;
          return (
            (n = t.call(this, e) || this),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_10 = new Map()),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_4 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_11 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_14 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_7 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_8 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_15 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_1 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_2 =
              n.$WAWebVoipVideoWebCodecsRenderer$p_3()),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$WAWebVoipVideoWebCodecsRenderer$p_3 = function () {
            var t = this,
              n = this.$WAWebVoipVideoWebCodecsRenderer$p_1,
              r = new VideoDecoder({
                output: function (r) {
                  try {
                    if (n !== t.$WAWebVoipVideoWebCodecsRenderer$p_1) return;
                    ((t.$WAWebVoipVideoWebCodecsRenderer$p_4 = 0),
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0),
                      t.$WAWebVoipVideoWebCodecsRenderer$p_6++,
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_7 = r.displayWidth),
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_8 =
                        r.displayHeight),
                      t.applyPendingResize());
                    var e = t.$WAWebVoipVideoWebCodecsRenderer$p_9(r.timestamp),
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
                  n === t.$WAWebVoipVideoWebCodecsRenderer$p_1 &&
                    (t.$WAWebVoipVideoWebCodecsRenderer$p_2 === r &&
                      (t.$WAWebVoipVideoWebCodecsRenderer$p_2 = null),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_10.clear(),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_4++,
                    (t.$WAWebVoipVideoWebCodecsRenderer$p_11 = Date.now()),
                    C == null || C(),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_4 > S
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
                          t.$WAWebVoipVideoWebCodecsRenderer$p_4,
                          S,
                          i,
                        ));
                },
              });
            return (r.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_12), r);
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_13 = function () {
            var e;
            ((this.$WAWebVoipVideoWebCodecsRenderer$p_5 = 0),
              this.$WAWebVoipVideoWebCodecsRenderer$p_10.clear(),
              (e = this.$WAWebVoipVideoWebCodecsRenderer$p_2) == null ||
                e.close(),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_2 =
                this.$WAWebVoipVideoWebCodecsRenderer$p_3()));
          }),
          (i.reset = function () {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_2;
            ((this.$WAWebVoipVideoWebCodecsRenderer$p_4 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_11 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_14 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_7 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_8 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_15 = 0),
              t.prototype.reset.call(this),
              this.$WAWebVoipVideoWebCodecsRenderer$p_1++,
              (this.$WAWebVoipVideoWebCodecsRenderer$p_2 = null),
              this.$WAWebVoipVideoWebCodecsRenderer$p_13(),
              e &&
                e.state !== "closed" &&
                e.flush().finally(function () {
                  e.state !== "closed" && e.close();
                }));
          }),
          (i.requireKeyframe = function () {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_2;
            if ((e == null ? void 0 : e.state) === "configured") {
              var t = e.decodeQueueSize;
              (e.reset(),
                e.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_12),
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
            (this.$WAWebVoipVideoWebCodecsRenderer$p_1++,
              (e = this.$WAWebVoipVideoWebCodecsRenderer$p_2) == null ||
                e.close(),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_2 = null),
              t.prototype.cleanup.call(this));
          }),
          (a.checkAvailability = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                a.$WAWebVoipVideoWebCodecsRenderer$p_16 == null &&
                  (a.$WAWebVoipVideoWebCodecsRenderer$p_16 =
                    a.$WAWebVoipVideoWebCodecsRenderer$p_17()),
                a.$WAWebVoipVideoWebCodecsRenderer$p_16
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = window.performance.now();
              if (
                typeof window == "undefined" ||
                typeof window.VideoDecoder != "function"
              )
                return !1;
              var t = yield window.VideoDecoder.isConfigSupported(
                  a.$WAWebVoipVideoWebCodecsRenderer$p_12,
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
                r = yield a.$WAWebVoipVideoWebCodecsRenderer$p_18();
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
          (a.$WAWebVoipVideoWebCodecsRenderer$p_18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = 2e3,
                t = null,
                r = null,
                o = null;
              try {
                var i = yield new (h || (h = n("Promise")))(function (n) {
                  var i,
                    l,
                    s = !1,
                    u = function (t) {
                      s || ((s = !0), n(t));
                    },
                    c = window.setTimeout(function () {
                      return u(!1);
                    }, e);
                  ((r = new VideoDecoder({
                    output: function (t) {
                      (t.close(), window.clearTimeout(c), u(!0));
                    },
                    error: function () {
                      (window.clearTimeout(c), u(!1));
                    },
                  })),
                    r.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_12),
                    (t = new VideoEncoder({
                      output: function (t) {
                        if (r == null || r.state === "closed") {
                          (window.clearTimeout(c), u(!1));
                          return;
                        }
                        var e = r;
                        (e.decode(t),
                          e.flush().then(
                            function () {
                              (window.clearTimeout(c), u(!1));
                            },
                            function () {
                              (window.clearTimeout(c), u(!1));
                            },
                          ));
                      },
                      error: function () {
                        (window.clearTimeout(c), u(!1));
                      },
                    })),
                    t.configure({
                      codec: "avc1.42001E",
                      width: 16,
                      height: 16,
                      avc: { format: "annexb" },
                    }));
                  var d = new Uint8Array(256 * 4);
                  ((o = new VideoFrame(d, {
                    format: "RGBA",
                    codedWidth: 16,
                    codedHeight: 16,
                    timestamp: 0,
                  })),
                    (i = t) == null || i.encode(o, { keyFrame: !0 }),
                    (l = t) == null ||
                      l.flush().catch(function () {
                        (window.clearTimeout(c), u(!1));
                      }));
                });
                return i;
              } catch (e) {
                return !1;
              } finally {
                var l;
                ((l = o) == null || l.close(),
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
              if (!this.$WAWebVoipVideoWebCodecsRenderer$p_2)
                throw this.$WAWebVoipVideoWebCodecsRenderer$p_4 === 0
                  ? new y(r("err")(v + "Decoder not available, awaiting reset"))
                  : this.$WAWebVoipVideoWebCodecsRenderer$p_4 > S
                    ? r("err")(v + "H264 Decoder closed due to fatal error")
                    : Date.now() - this.$WAWebVoipVideoWebCodecsRenderer$p_11 <
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
                          this.$WAWebVoipVideoWebCodecsRenderer$p_4,
                          S,
                        ),
                        this.$WAWebVoipVideoWebCodecsRenderer$p_13(),
                        new y(
                          r("err")(
                            v + "Decoder recovered, requesting key frame",
                          ),
                        ));
              var e = (c * 1e3) / 90;
              try {
                (this.$WAWebVoipVideoWebCodecsRenderer$p_19(n, e, d),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_20(e, {
                    orientation: l,
                    mirror: s,
                  }),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_14++,
                  this.$WAWebVoipVideoWebCodecsRenderer$p_5++);
                var m = Date.now();
                (m - this.$WAWebVoipVideoWebCodecsRenderer$p_15 >= E &&
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
                    this.$WAWebVoipVideoWebCodecsRenderer$p_14,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_6,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_7,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_8,
                    this.$WAWebVoipVideoWebCodecsRenderer$p_5,
                  ),
                  (this.$WAWebVoipVideoWebCodecsRenderer$p_15 = m)),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_21());
              } catch (e) {
                throw e instanceof Error && e.name === "DataError"
                  ? new y(e)
                  : e;
              }
              return;
            }
            t.prototype.renderFrame.call(this, n, a, i, l, s, u, c, d);
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_20 = function (t, n) {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_10.get(t);
            (e ||
              ((e = []), this.$WAWebVoipVideoWebCodecsRenderer$p_10.set(t, e)),
              e.push(n));
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_9 = function (t) {
            var e,
              n = this.$WAWebVoipVideoWebCodecsRenderer$p_10.get(t),
              r = {
                orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
                mirror: !1,
              };
            if (!n) return r;
            var a = (e = n.shift()) != null ? e : r;
            return (
              n.length === 0 &&
                this.$WAWebVoipVideoWebCodecsRenderer$p_10.delete(t),
              a
            );
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_19 = function (t, n, r) {
            var e,
              o = {
                type: r ? "key" : "delta",
                timestamp: n,
                data: t,
                transfer: [t],
              },
              a = new EncodedVideoChunk(o);
            (e = this.$WAWebVoipVideoWebCodecsRenderer$p_2) == null ||
              e.decode(a);
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_21 = function () {
            if (this.$WAWebVoipVideoWebCodecsRenderer$p_5 >= L)
              throw (
                o("WAWebVoipVideoRendererLogging").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      "Watchdog: no output after ",
                      " frames, resetting decoder",
                    ])),
                  v,
                  this.$WAWebVoipVideoWebCodecsRenderer$p_5,
                ),
                this.$WAWebVoipVideoWebCodecsRenderer$p_13(),
                new y(r("err")(v + "Decoder output stalled"))
              );
          }),
          a
        );
      })(o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer);
    ((k.$WAWebVoipVideoWebCodecsRenderer$p_12 = {
      codec: "avc1.42001E",
      optimizeForLatency: !0,
    }),
      (l.KeyFrameNeededError = y),
      (l.setFatalErrorCallback = b),
      (l.WAWebVoipVideoWebCodecsRenderer = k));
  },
  98,
);
