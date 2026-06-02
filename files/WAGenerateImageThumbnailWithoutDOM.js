__d(
  "WAGenerateImageThumbnailWithoutDOM",
  ["WAOffscreenCanvasUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "image/jpeg";
    async function s(t, n, r, a) {
      var i = await self.createImageBitmap(t),
        l = i.width,
        s = i.height,
        c = u(s, l, n),
        d = new OffscreenCanvas(c.width, c.height),
        m = d.getContext("2d");
      (o("WAOffscreenCanvasUtils").fillOffscreenCanvasBackgroundWithGray(d),
        m.drawImage(i, 0, 0, c.width, c.height));
      var p = await o("WAOffscreenCanvasUtils").offscreenCanvasToBlob(
        d,
        e,
        !0,
        void 0,
        r,
        a,
      );
      return Promise.resolve({ blob: p, height: c.height, width: c.width });
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
