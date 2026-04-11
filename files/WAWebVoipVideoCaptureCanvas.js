__d(
  "WAWebVoipVideoCaptureCanvas",
  ["WALogger", "WAWebVoipVideoCaptureWithConverter", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(t, n) {
          ((this.width = t),
            (this.height = n),
            (this.canvas = document.createElement("canvas")),
            (this.canvas.width = t),
            (this.canvas.height = n));
          var a = this.canvas.getContext("2d");
          if (!a) throw r("err")("Failed to get 2D context from canvas");
          this.canvasContext = a;
          var i = t * n,
            l = Math.floor((t * n) / 2);
          ((this.nv12Data = new Uint8Array(i + l)),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CanvasVideoConverter: Initialized for ",
                  "x",
                  "",
                ])),
              t,
              n,
            ));
        }
        var n = t.prototype;
        return (
          (n.convertVideoToNV12 = function (t) {
            var e = this.canvasContext,
              n = this.height,
              r = this.width;
            e.drawImage(t, 0, 0, r, n);
            var o = e.getImageData(0, 0, r, n),
              a = o.data;
            return this.convertRGBAToNV12(a, r, n);
          }),
          (n.convertRGBAToNV12 = function (t, n, r) {
            for (var e = n * r, o = this.nv12Data, a = 0; a < r; a++)
              for (var i = 0; i < n; i++) {
                var l = (a * n + i) * 4,
                  s = t[l],
                  u = t[l + 1],
                  c = t[l + 2],
                  d = 16 + Math.floor(0.2568 * s + 0.5041 * u + 0.0979 * c);
                o[a * n + i] = Math.max(0, Math.min(255, d));
              }
            for (var m = e, p = 0; p < r; p += 2)
              for (var _ = 0; _ < n; _ += 2) {
                for (
                  var f = 0, g = 0, h = 0, y = 0, C = 0;
                  C < 2 && p + C < r;
                  C++
                )
                  for (var b = 0; b < 2 && _ + b < n; b++) {
                    var v = ((p + C) * n + (_ + b)) * 4;
                    ((f += t[v]), (g += t[v + 1]), (h += t[v + 2]), y++);
                  }
                if (y > 0) {
                  var S = f / y,
                    R = g / y,
                    L = h / y,
                    E = Math.floor(-0.1482 * S - 0.291 * R + 0.4392 * L + 128),
                    k = Math.floor(0.4392 * S - 0.3678 * R - 0.0714 * L + 128);
                  ((o[m] = Math.max(0, Math.min(255, E))),
                    (o[m + 1] = Math.max(0, Math.min(255, k))),
                    (m += 2));
                }
              }
            return o;
          }),
          (n.cleanup = function () {
            (this.canvas && this.canvas.remove(),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: CanvasVideoConverter: Cleaned up",
                  ])),
              ));
          }),
          (n.getConverterName = function () {
            return "canvas";
          }),
          t
        );
      })(),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createConverter = function (t, n) {
            return new u(t, n);
          }),
          t
        );
      })(
        o("WAWebVoipVideoCaptureWithConverter")
          .WAWebVoipVideoCaptureWithConverter,
      );
    ((l.CanvasVideoConverter = u), (l.WAWebVoipVideoCaptureCanvas = c));
  },
  98,
);
