__d(
  "WAGenerateImageThumbnailWithoutDOM",
  ["WAOffscreenCanvasUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "image/jpeg";
    async function s(t, n, a, i) {
      var l = await self.createImageBitmap(t),
        s = l.width,
        c = l.height,
        d = u(c, s, n),
        m = new OffscreenCanvas(d.width, d.height),
        p = m.getContext("2d");
      if (!p) throw r("err")("Failed to get 2D context from offscreen canvas");
      (o("WAOffscreenCanvasUtils").fillOffscreenCanvasBackgroundWithGray(m),
        p.drawImage(l, 0, 0, d.width, d.height));
      var _ = await o("WAOffscreenCanvasUtils").offscreenCanvasToBlob(
        m,
        e,
        !0,
        void 0,
        a,
        i,
      );
      return Promise.resolve({ blob: _, height: d.height, width: d.width });
    }
    function u(e, t, n) {
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
    l.generateImageThumbnailWithoutDOM = s;
  },
  98,
);
