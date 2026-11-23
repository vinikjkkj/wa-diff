__d(
  "WAWebVoipCustomBackgroundPicture",
  [
    "WALogger",
    "WAWebVoipPictureDimensions",
    "WAWebVoipVideoEffectsODS",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ["image/jpeg", "image/png", "image/webp"],
      c = 26214400,
      d = 8192 * 8192,
      m = 1280,
      p = 4096,
      _ = 0.9;
    async function f(t) {
      if (!u.includes(t.type)) return { status: "not_a_picture" };
      if (t.size > c) return { status: "too_large" };
      var n = await o("WAWebVoipPictureDimensions").readPictureDimensions(t);
      if (n == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] could not read a custom background's dimensions",
              ])),
          ),
          o("WAWebVoipVideoEffectsODS").logVideoEffects(
            "custom_background_no_dimensions",
          ),
          { status: "unreadable" }
        );
      if (n.width * n.height > d) return { status: "too_many_pixels" };
      var a = self.OffscreenCanvas;
      if (typeof a != "function")
        throw r("err")("custom background: no OffscreenCanvas");
      var i;
      try {
        i = await g(t);
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] could not decode a custom background: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          ),
          { status: "unreadable" }
        );
      }
      try {
        var l = i,
          m = l.height,
          p = l.width,
          f = new a(p, m),
          h = f.getContext("2d");
        if (h == null) throw r("err")("custom background: no 2d context");
        ((h.fillStyle = "white"), h.fillRect(0, 0, p, m), h.drawImage(i, 0, 0));
        var y = await f.convertToBlob({ quality: _, type: "image/jpeg" });
        return { picture: y, status: "made" };
      } finally {
        i.close();
      }
    }
    async function g(e) {
      var t = await createImageBitmap(e),
        n = t.height,
        r = t.width,
        o = Math.min(1, m / Math.min(r, n), p / Math.max(r, n));
      if (o === 1) return t;
      t.close();
      var a = Math.max(1, Math.round(r * o)),
        i = Math.max(1, Math.round(n * o)),
        l = await h(e, a, i),
        s = a !== i && l.width === i && l.height === a;
      return s ? (l.close(), h(e, i, a)) : l;
    }
    function h(e, t, n) {
      return createImageBitmap(e, {
        resizeHeight: n,
        resizeQuality: "high",
        resizeWidth: t,
      });
    }
    ((l.CUSTOM_BACKGROUND_PICTURE_TYPES = u),
      (l.makeCustomBackgroundPicture = f));
  },
  98,
);
