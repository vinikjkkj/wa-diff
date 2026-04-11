__d(
  "WAGenerateImageThumbnailWithoutDOM",
  ["Promise", "WAOffscreenCanvasUtils", "asyncToGeneratorRuntime"],
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
          function* (t, r, a, i) {
            var l = yield self.createImageBitmap(t),
              u = l.width,
              c = l.height,
              m = d(c, u, r),
              p = new OffscreenCanvas(m.width, m.height),
              _ = p.getContext("2d");
            (o("WAOffscreenCanvasUtils").fillOffscreenCanvasBackgroundWithGray(
              p,
            ),
              _.drawImage(l, 0, 0, m.width, m.height));
            var f = yield o("WAOffscreenCanvasUtils").offscreenCanvasToBlob(
              p,
              s,
              !0,
              void 0,
              a,
              i,
            );
            return (e || (e = n("Promise"))).resolve({
              blob: f,
              height: m.height,
              width: m.width,
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
