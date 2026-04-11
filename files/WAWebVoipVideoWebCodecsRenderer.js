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
      f = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      g = "voip: WAWebVoipVideoWebCodecsRenderer: ",
      h = 5,
      y = 500,
      C = (function (t) {
        function a(e) {
          var n;
          return (
            (n = t.call(this, e) || this),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_5 = new Map()),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_3 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
            (n.$WAWebVoipVideoWebCodecsRenderer$p_1 =
              n.$WAWebVoipVideoWebCodecsRenderer$p_2()),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$WAWebVoipVideoWebCodecsRenderer$p_2 = function () {
            var t = this,
              n = new VideoDecoder({
                output: function (n) {
                  try {
                    ((t.$WAWebVoipVideoWebCodecsRenderer$p_3 = 0),
                      t.applyPendingResize());
                    var e = t.$WAWebVoipVideoWebCodecsRenderer$p_4(n.timestamp),
                      r = e.mirror,
                      o = e.orientation;
                    t.renderVideoFrameToCanvas(
                      n,
                      n.codedWidth,
                      n.codedHeight,
                      o,
                      r,
                      !0,
                    );
                  } finally {
                    n.close();
                  }
                },
                error: function (r) {
                  ((t.$WAWebVoipVideoWebCodecsRenderer$p_1 = null),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_5.clear(),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_3++,
                    (t.$WAWebVoipVideoWebCodecsRenderer$p_6 = Date.now()),
                    t.$WAWebVoipVideoWebCodecsRenderer$p_3 > h
                      ? o("WAWebVoipVideoRendererLogging").ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "H264 decoder fatal error, max recovery attempts (",
                              ") exceeded. ",
                              "",
                            ])),
                          g,
                          h,
                          r,
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
                          g,
                          t.$WAWebVoipVideoWebCodecsRenderer$p_3,
                          h,
                          r,
                        ));
                },
              });
            return (n.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_7), n);
          }),
          (i.reset = function () {
            var e = this,
              n = this.$WAWebVoipVideoWebCodecsRenderer$p_1;
            ((this.$WAWebVoipVideoWebCodecsRenderer$p_1 = null),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_3 = 0),
              (this.$WAWebVoipVideoWebCodecsRenderer$p_6 = 0),
              n
                ? n.flush().then(function () {
                    (n.close(), t.prototype.reset.call(e));
                    var r = e.$WAWebVoipVideoWebCodecsRenderer$p_2();
                    e.$WAWebVoipVideoWebCodecsRenderer$p_1 = r;
                  })
                : (t.prototype.reset.call(this),
                  (this.$WAWebVoipVideoWebCodecsRenderer$p_1 =
                    this.$WAWebVoipVideoWebCodecsRenderer$p_2())));
          }),
          (i.cleanup = function () {
            var e;
            ((e = this.$WAWebVoipVideoWebCodecsRenderer$p_1) == null ||
              e.close(),
              t.prototype.cleanup.call(this));
          }),
          (a.checkAvailability = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                a.$WAWebVoipVideoWebCodecsRenderer$p_8 == null &&
                  (a.$WAWebVoipVideoWebCodecsRenderer$p_8 =
                    a.$WAWebVoipVideoWebCodecsRenderer$p_9()),
                a.$WAWebVoipVideoWebCodecsRenderer$p_8
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$WAWebVoipVideoWebCodecsRenderer$p_9 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = window.performance.now();
              if (
                typeof window == "undefined" ||
                typeof window.VideoDecoder != "function"
              )
                return !1;
              var t = yield window.VideoDecoder.isConfigSupported(
                  a.$WAWebVoipVideoWebCodecsRenderer$p_7,
                ),
                n = t.supported;
              if (n == null || !n)
                return (
                  o("WAWebVoipVideoRendererLogging").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "H264 decoder not supported",
                      ])),
                    g,
                  ),
                  !1
                );
              if (typeof window.VideoEncoder != "function")
                return (
                  o("WAWebVoipVideoRendererLogging").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        "VideoEncoder not available, skipping decode probe",
                      ])),
                    g,
                  ),
                  !1
                );
              var r = !1;
              try {
                r = yield a.$WAWebVoipVideoWebCodecsRenderer$p_10();
              } catch (e) {}
              var i = Math.round(window.performance.now() - e);
              return r
                ? (o("WAWebVoipVideoRendererLogging").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    g +
                      "H264 decoder supported and probe passed in " +
                      i +
                      "ms",
                  ),
                  !0)
                : (o("WAWebVoipVideoRendererLogging").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    g +
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
          (a.$WAWebVoipVideoWebCodecsRenderer$p_10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = 2e3,
                t = null,
                r = null,
                o = null;
              try {
                var i = yield new (_ || (_ = n("Promise")))(function (n) {
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
                    r.configure(a.$WAWebVoipVideoWebCodecsRenderer$p_7),
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
              if (!this.$WAWebVoipVideoWebCodecsRenderer$p_1)
                throw this.$WAWebVoipVideoWebCodecsRenderer$p_3 === 0
                  ? new f(r("err")(g + "Decoder not available, awaiting reset"))
                  : this.$WAWebVoipVideoWebCodecsRenderer$p_3 > h
                    ? r("err")(g + "H264 Decoder closed due to fatal error")
                    : Date.now() - this.$WAWebVoipVideoWebCodecsRenderer$p_6 < y
                      ? new f(r("err")(g + "Decoder recovery cooldown"))
                      : (o("WAWebVoipVideoRendererLogging").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "Recreating H264 decoder after fatal error (attempt ",
                              "/",
                              ")",
                            ])),
                          g,
                          this.$WAWebVoipVideoWebCodecsRenderer$p_3,
                          h,
                        ),
                        (this.$WAWebVoipVideoWebCodecsRenderer$p_1 =
                          this.$WAWebVoipVideoWebCodecsRenderer$p_2()),
                        new f(
                          r("err")(
                            g + "Decoder recovered, requesting key frame",
                          ),
                        ));
              var e = (c * 1e3) / 90;
              try {
                (this.$WAWebVoipVideoWebCodecsRenderer$p_11(n, e, d),
                  this.$WAWebVoipVideoWebCodecsRenderer$p_12(e, {
                    orientation: l,
                    mirror: s,
                  }));
              } catch (e) {
                throw e instanceof Error && e.name === "DataError"
                  ? new f(e)
                  : e;
              }
              return;
            }
            t.prototype.renderFrame.call(this, n, a, i, l, s, u, c, d);
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_12 = function (t, n) {
            var e = this.$WAWebVoipVideoWebCodecsRenderer$p_5.get(t);
            (e ||
              ((e = []), this.$WAWebVoipVideoWebCodecsRenderer$p_5.set(t, e)),
              e.push(n));
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_4 = function (t) {
            var e,
              n = this.$WAWebVoipVideoWebCodecsRenderer$p_5.get(t),
              r = {
                orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
                mirror: !1,
              };
            if (!n) return r;
            var a = (e = n.shift()) != null ? e : r;
            return (
              n.length === 0 &&
                this.$WAWebVoipVideoWebCodecsRenderer$p_5.delete(t),
              a
            );
          }),
          (i.$WAWebVoipVideoWebCodecsRenderer$p_11 = function (t, n, r) {
            var e,
              o = {
                type: r ? "key" : "delta",
                timestamp: n,
                data: t,
                transfer: [t],
              },
              a = new EncodedVideoChunk(o);
            (e = this.$WAWebVoipVideoWebCodecsRenderer$p_1) == null ||
              e.decode(a);
          }),
          a
        );
      })(o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer);
    ((C.$WAWebVoipVideoWebCodecsRenderer$p_7 = {
      codec: "avc1.42001E",
      optimizeForLatency: !0,
    }),
      (l.KeyFrameNeededError = f),
      (l.WAWebVoipVideoWebCodecsRenderer = C));
  },
  98,
);
