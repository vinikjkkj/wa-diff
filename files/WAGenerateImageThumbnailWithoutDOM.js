__d(
  "WAGenerateImageThumbnailWithoutDOM",
  ["Promise", "WAOffscreenCanvasUtils", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "image/jpeg";
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var u = yield self.createImageBitmap(t),
              c = u.width,
              m = u.height,
              p = d(m, c, a),
              _ = new OffscreenCanvas(p.width, p.height),
              f = _.getContext("2d");
            if (!f)
              throw r("err")("Failed to get 2D context from offscreen canvas");
            (o("WAOffscreenCanvasUtils").fillOffscreenCanvasBackgroundWithGray(
              _,
            ),
              f.drawImage(u, 0, 0, p.width, p.height));
            var g = yield o("WAOffscreenCanvasUtils").offscreenCanvasToBlob(
              _,
              s,
              !0,
              void 0,
              i,
              l,
            );
            return (e || (e = n("Promise"))).resolve({
              blob: g,
              height: p.height,
              width: p.width,
            });
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      var r = t != null ? t : n,
        o = e != null ? e : n;
      return (
        r > o
          ? r > n && ((o *= n / r), (r = n))
          : o > n && ((r *= n / o), (o = n)),
        {
          width: Math.round(Math.max(r, 1)),
          height: Math.round(Math.max(o, 1)),
        }
      );
    }
    l.generateImageThumbnailWithoutDOM = u;
  },
  98,
);
