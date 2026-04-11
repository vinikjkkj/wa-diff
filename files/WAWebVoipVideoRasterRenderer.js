__d(
  "WAWebVoipVideoRasterRenderer",
  [
    "WAWebRuntimeEnvironmentUtils",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererLogging",
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
      p = (function () {
        function t(e) {
          ((this.$1 = e),
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
        var r = t.prototype;
        return (
          (r.cleanup = function () {}),
          (r.reset = function () {
            this.$2.clearRect(0, 0, this.$1.width, this.$1.height);
          }),
          (r.onCanvasResize = function (t, n) {
            this.pendingResize = { width: t, height: n };
          }),
          (r.applyPendingResize = function () {
            if (this.pendingResize != null) {
              var e = this.pendingResize,
                t = e.height,
                n = e.width;
              ((this.pendingResize = null),
                (this.$1.width = n),
                (this.$1.height = t));
            }
          }),
          (r.renderFrame = function (n, r, a, i, l, c, d, m) {
            this.applyPendingResize();
            var t = o("WAWebVoipMediaEnums").videoFrameFormatFromFormatEnum(c);
            if (!t) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "renderFrame: unsupported format: ",
                    "",
                  ])),
                c,
              );
              return;
            }
            var p = new Uint8Array(n),
              _ = !0,
              f = {
                matrix: "smpte170m",
                primaries: "smpte170m",
                transfer: "smpte170m",
                fullRange: !1,
              };
            try {
              var g = new window.VideoFrame(p, {
                format: t,
                codedWidth: r,
                codedHeight: a,
                timestamp: Date.now() * 1e3,
                colorSpace: f,
              });
              if (g)
                try {
                  this.renderVideoFrameToCanvas(g, r, a, i, l, _);
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
                  g.close();
                }
              else {
                var h = new Error("VideoFrame API not supported");
                throw h;
              }
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
          (r.renderVideoFrameToCanvas = function (t, n, r, o, a, i) {
            (i === void 0 && (i = !1),
              f(this.$1, this.$2, n, r, o, a, i, t, this.$4),
              this.$3());
          }),
          (r.setRenderCallback = function (t) {
            this.$3 = t;
          }),
          (r.setCoverFit = function (t) {
            this.$4 = t;
          }),
          t
        );
      })(),
      _ = (function () {
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
          (t.renderFrame = function (t, n, r, a, i, l, s, u) {
            this.$8();
            var e = new Uint8Array(t),
              m =
                l === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12
                  ? h(e, n, r)
                  : l === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA
                    ? e
                    : null;
            if (!m) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "renderFrame: unsupported format: ",
                    "",
                  ])),
                l,
              );
              return;
            }
            var p = !0;
            try {
              this.renderRgbaWithImageData(m, n, r, a, i, p);
            } catch (e) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
                f(this.$1, this.$2, n, r, a, i, l, this.$3, this.$6),
                this.$5());
            } catch (e) {
              o("WAWebVoipVideoRendererLogging").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
          e
        );
      })();
    function f(e, t, n, r, o, a, i, l, s) {
      var u = g(n, r, e.width, e.height, o, i, s),
        c = u.renderHeight,
        d = u.renderWidth;
      (t.save(),
        t.clearRect(0, 0, e.width, e.height),
        t.translate(e.width / 2, e.height / 2),
        t.scale(a ? -1 : 1, 1),
        t.rotate((Math.PI * (o.valueOf() - 1)) / 2),
        t.translate(-d / 2, -c / 2),
        t.drawImage(l, 0, 0, d, c),
        t.restore());
    }
    function g(e, t, n, r, a, i, l) {
      var s =
          a === o("WAWebVoipMediaEnums").Orientation.Rotate90 ||
          a === o("WAWebVoipMediaEnums").Orientation.Rotate270,
        u = s ? r : n,
        c = s ? n : r;
      if (!i) return { renderWidth: u, renderHeight: c };
      var d = e / t,
        m = u / c,
        p,
        _;
      return (
        l
          ? d > m
            ? ((_ = c), (p = c * d))
            : ((p = u), (_ = u / d))
          : d > m
            ? ((p = u), (_ = u / d))
            : ((_ = c), (p = c * d)),
        { renderWidth: p, renderHeight: _ }
      );
    }
    function h(e, t, n) {
      for (
        var r = new Uint8Array(t * n * 4), o = t * n, a = o, i = 0;
        i < n;
        i++
      )
        for (var l = 0; l < t; l++) {
          var s = i * t + l,
            u = s * 4,
            c = e[s],
            d = Math.floor(i / 2),
            m = Math.floor(l / 2),
            p = a + d * t + m * 2,
            _ = void 0,
            f = void 0;
          p + 1 >= e.length || p < a
            ? ((_ = 128), (f = 128))
            : ((_ = e[p]), (f = e[p + 1]));
          var g = c - 16,
            h = _ - 128,
            y = f - 128,
            C = Math.round((298 * g + 409 * y) / 256),
            b = Math.round((298 * g - 100 * h - 208 * y) / 256),
            v = Math.round((298 * g + 516 * h) / 256);
          ((C = Math.max(0, Math.min(255, C))),
            (b = Math.max(0, Math.min(255, b))),
            (v = Math.max(0, Math.min(255, v))),
            (r[u] = C),
            (r[u + 1] = b),
            (r[u + 2] = v),
            (r[u + 3] = 255));
        }
      return r;
    }
    ((l.WAWebVoipVideoFrameRenderer = p), (l.WAWebVoipVideoRasterRenderer = _));
  },
  98,
);
