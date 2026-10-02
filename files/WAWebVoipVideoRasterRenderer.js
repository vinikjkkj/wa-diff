__d(
  "WAWebVoipVideoRasterRenderer",
  [
    "WAWebRuntimeEnvironmentUtils",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoEnhancementPass",
    "WAWebVoipVideoRendererInterface",
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
      f = 0.01,
      g = (function () {
        function t(e) {
          ((this.$5 = null),
            (this.$7 = !1),
            (this.$10 = !1),
            (this.$8 = 0),
            (this.$9 = 0),
            (this.$1 = e),
            (this.canvas = e),
            (this.$2 = e.getContext("2d")),
            (this.$3 = o(
              "WAWebVoipVideoRendererInterface",
            ).onRenderCallbackNoop),
            (this.$4 = !1));
        }
        t.checkAvailability = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              typeof window != "undefined" &&
              typeof window.VideoFrame == "function"
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })();
        var a = t.prototype;
        return (
          (a.cleanup = function () {
            var e;
            ((e = this.$5) == null || e.cleanup(), (this.$5 = null));
          }),
          (a.reset = function () {
            this.$2.clearRect(0, 0, this.$1.width, this.$1.height);
          }),
          (a.onCanvasResize = function (t, n) {
            this.pendingResize = { width: t, height: n };
          }),
          (a.applyPendingResize = function () {
            if (this.pendingResize != null) {
              var e = this.pendingResize,
                t = e.height,
                n = e.width;
              ((this.pendingResize = null),
                (this.$1.width = n),
                (this.$1.height = t));
            }
          }),
          (a.renderFrame = function (n) {
            var t = n.format,
              a = n.frameBuffer,
              i = n.height,
              l = n.isKeyFrame,
              c = n.mirror,
              d = n.orientation,
              m = n.timestamp,
              p = n.width;
            this.applyPendingResize();
            var _ = o("WAWebVoipMediaEnums").videoFrameFormatFromFormatEnum(t);
            if (!_) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "renderFrame: unsupported format: ",
                    "",
                  ])),
                t,
              );
              return;
            }
            var f = new Uint8Array(a),
              g = !0,
              h = {
                matrix: "smpte170m",
                primaries: "smpte170m",
                transfer: "smpte170m",
                fullRange: !1,
              };
            try {
              var y = new window.VideoFrame(f, {
                format: _,
                codedWidth: p,
                codedHeight: i,
                timestamp: Date.now() * 1e3,
                colorSpace: h,
              });
              if (y)
                try {
                  this.renderVideoFrameToCanvas(y, p, i, d, c, g);
                } catch (e) {
                  o("WAWebVoipVideoRendererLogging").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "onVideoFrameWasmToJs: error rendering to canvas: ",
                        "",
                      ])),
                    e,
                  );
                } finally {
                  y.close();
                }
              else throw r("err")("VideoFrame API not supported");
            } catch (e) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "onVideoFrameWasmToJs: error creating VideoFrame with NV12: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.renderVideoFrameToCanvas = function (t, n, r, o, a, i) {
            (i === void 0 && (i = !1),
              y(this.$1, this.$2, n, r, o, a, i, this.$6(t, n, r), this.$4),
              this.$3());
          }),
          (a.$6 = function (t, n, a) {
            if (this.$7 || (Math.abs(this.$8) < f && Math.abs(this.$9) < f))
              return (
                this.$5 != null && (this.$5.cleanup(), (this.$5 = null)),
                t
              );
            try {
              this.$5 == null &&
                (this.$5 = new (r("WAWebVoipVideoEnhancementPass"))());
              var e = this.$5.render(t, n, a, this.$8, this.$9);
              return (
                this.$10 ||
                  ((this.$10 = !0),
                  o("WAWebVoipVideoRendererLogging").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WAWebVoipVideoFrameRenderer: video enhancement applied brightness=",
                        " sharpening=",
                        " at ",
                        "x",
                        "",
                      ])),
                    this.$8,
                    this.$9,
                    n,
                    a,
                  )),
                e
              );
            } catch (e) {
              var i;
              return (
                (this.$7 = !0),
                (i = this.$5) == null || i.cleanup(),
                (this.$5 = null),
                o("WAWebVoipVideoRendererLogging").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WAWebVoipVideoFrameRenderer: enhancement pass failed, rendering raw frame: ",
                      "",
                    ])),
                  e,
                ),
                t
              );
            }
          }),
          (a.setRenderCallback = function (t) {
            this.$3 = t;
          }),
          (a.setCoverFit = function (t) {
            this.$4 = t;
          }),
          (a.setVideoEnhancement = function (t, n) {
            ((this.$8 = t), (this.$9 = n));
          }),
          t
        );
      })(),
      h = (function () {
        function e(e) {
          ((this.$1 = e),
            (this.$2 = e.getContext("2d")),
            o("WAWebRuntimeEnvironmentUtils").isWorker()
              ? (this.$3 = new OffscreenCanvas(e.width, e.height))
              : (this.$3 = document.createElement("canvas")),
            (this.$4 = this.$3.getContext("2d")),
            (this.$5 = o(
              "WAWebVoipVideoRendererInterface",
            ).onRenderCallbackNoop),
            (this.$6 = !1));
        }
        e.checkAvailability = function () {
          return !0;
        };
        var t = e.prototype;
        return (
          (t.cleanup = function () {}),
          (t.reset = function () {
            this.$2.clearRect(0, 0, this.$1.width, this.$1.height);
          }),
          (t.onCanvasResize = function (t, n) {
            this.$7 = { width: t, height: n };
          }),
          (t.$8 = function () {
            if (this.$7 != null) {
              var e = this.$7,
                t = e.height,
                n = e.width;
              ((this.$7 = null), (this.$1.width = n), (this.$1.height = t));
            }
          }),
          (t.renderFrame = function (t) {
            var e = t.format,
              n = t.frameBuffer,
              r = t.height,
              a = t.isKeyFrame,
              i = t.mirror,
              l = t.orientation,
              s = t.timestamp,
              u = t.width;
            this.$8();
            var c = new Uint8Array(n),
              d =
                e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12
                  ? b({ height: r, nv12Buffer: c, width: u })
                  : e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA
                    ? c
                    : null;
            if (!d) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "renderFrame: unsupported format: ",
                    "",
                  ])),
                e,
              );
              return;
            }
            var _ = !0;
            try {
              this.renderRgbaWithImageData(d, u, r, l, i, _);
            } catch (e) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "onVideoFrameWasmToJs: NV12 conversion fallback failed: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (t.renderRgbaWithImageData = function (t, n, r, a, i, l) {
            l === void 0 && (l = !1);
            try {
              var e = this.$4.createImageData(n, r);
              (e.data.set(t),
                (this.$3.width = n),
                (this.$3.height = r),
                this.$4.putImageData(e, 0, 0),
                y(this.$1, this.$2, n, r, a, i, l, this.$3, this.$6),
                this.$5());
            } catch (e) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "renderRgbaWithImageData: error rendering to canvas: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (t.setRenderCallback = function (t) {
            this.$5 = t;
          }),
          (t.setCoverFit = function (t) {
            this.$6 = t;
          }),
          (t.setVideoEnhancement = function (t, n) {}),
          e
        );
      })();
    function y(e, t, n, r, o, a, i, l, s) {
      var u = C({
          canvasHeight: e.height,
          canvasWidth: e.width,
          coverFit: s,
          orientation: o,
          preserveAspectRatio: i,
          sourceHeight: r,
          sourceWidth: n,
        }),
        c = u.renderHeight,
        d = u.renderWidth;
      t.save();
      try {
        (t.clearRect(0, 0, e.width, e.height),
          t.translate(e.width / 2, e.height / 2),
          t.scale(a ? -1 : 1, 1),
          t.rotate((Math.PI * (o.valueOf() - 1)) / 2),
          t.translate(-d / 2, -c / 2),
          t.drawImage(l, 0, 0, d, c));
      } finally {
        t.restore();
      }
    }
    function C(e) {
      var t = e.canvasHeight,
        n = e.canvasWidth,
        r = e.coverFit,
        a = e.orientation,
        i = e.preserveAspectRatio,
        l = e.sourceHeight,
        s = e.sourceWidth,
        u =
          a === o("WAWebVoipMediaEnums").Orientation.Rotate90 ||
          a === o("WAWebVoipMediaEnums").Orientation.Rotate270,
        c = u ? t : n,
        d = u ? n : t;
      if (!i) return { renderWidth: c, renderHeight: d };
      var m = s / l,
        p = c / d,
        _,
        f;
      return (
        r
          ? m > p
            ? ((f = d), (_ = d * m))
            : ((_ = c), (f = c / m))
          : m > p
            ? ((_ = c), (f = c / m))
            : ((f = d), (_ = d * m)),
        { renderWidth: _, renderHeight: f }
      );
    }
    function b(e) {
      for (
        var t = e.height,
          n = e.nv12Buffer,
          r = e.width,
          o = new Uint8Array(r * t * 4),
          a = r * t,
          i = a,
          l = 0;
        l < t;
        l++
      )
        for (var s = 0; s < r; s++) {
          var u = l * r + s,
            c = u * 4,
            d = n[u],
            m = Math.floor(l / 2),
            p = Math.floor(s / 2),
            _ = i + m * r + p * 2,
            f = void 0,
            g = void 0;
          _ + 1 >= n.length || _ < i
            ? ((f = 128), (g = 128))
            : ((f = n[_]), (g = n[_ + 1]));
          var h = d - 16,
            y = f - 128,
            C = g - 128,
            b = Math.round((298 * h + 409 * C) / 256),
            v = Math.round((298 * h - 100 * y - 208 * C) / 256),
            S = Math.round((298 * h + 516 * y) / 256);
          ((b = Math.max(0, Math.min(255, b))),
            (v = Math.max(0, Math.min(255, v))),
            (S = Math.max(0, Math.min(255, S))),
            (o[c] = b),
            (o[c + 1] = v),
            (o[c + 2] = S),
            (o[c + 3] = 255));
        }
      return o;
    }
    ((l.WAWebVoipVideoFrameRenderer = g), (l.WAWebVoipVideoRasterRenderer = h));
  },
  98,
);
