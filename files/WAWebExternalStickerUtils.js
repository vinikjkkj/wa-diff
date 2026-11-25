__d(
  "WAWebExternalStickerUtils",
  ["WAIsWebP", "WAWebUnsupportedExternalStickerAnimationError", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 512e3,
      s = 512,
      u = new Set([
        "media.giphy.com",
        "media0.giphy.com",
        "media1.giphy.com",
        "media2.giphy.com",
        "media3.giphy.com",
        "media4.giphy.com",
        "i.giphy.com",
      ]),
      c = new Set([
        "static.klipy.com",
        "static1.klipy.com",
        "static2.klipy.com",
      ]),
      d = 8,
      m = 1e4;
    function p(e) {
      return g(e, u);
    }
    function _(e) {
      return g(e, c);
    }
    function f(e) {
      return p(e) || _(e);
    }
    function g(e, t) {
      if (e == null) return !1;
      try {
        var n = new URL(e);
        return (
          n.protocol === "https:" &&
          t.has(n.hostname) &&
          n.username === "" &&
          n.password === "" &&
          n.port === ""
        );
      } catch (e) {
        return !1;
      }
    }
    function h(e) {
      if (!o("WAIsWebP").isWebP(new Uint8Array(e)))
        throw r("err")("Invalid external sticker WebP signature");
      var t = new DataView(e);
      if (t.getUint32(4, !0) + 8 !== e.byteLength)
        throw r("err")("Invalid external sticker WebP size");
      for (var n = 0, a = 12; a < e.byteLength; ) {
        if (a + 8 > e.byteLength)
          throw r("err")("Invalid external sticker WebP chunk");
        var i = t.getUint32(a + 4, !0),
          l = a + 8 + i + (i % 2);
        if (l > e.byteLength)
          throw r("err")("Invalid external sticker WebP chunk");
        if (t.getUint32(a) === 1095650630) {
          if (i < 16)
            throw r("err")("Invalid external sticker animation frame");
          var s =
            t.getUint8(a + 20) +
            t.getUint8(a + 21) * 256 +
            t.getUint8(a + 22) * 65536;
          if (((n += s), s < d || n > m))
            throw new (o(
              "WAWebUnsupportedExternalStickerAnimationError",
            ).UnsupportedExternalStickerAnimationError)(
              "Unsupported external sticker animation",
            );
        }
        a = l;
      }
    }
    ((l.MAX_GIPHY_STICKER_SIZE_BYTES = e),
      (l.MAX_STICKER_DIMENSION = s),
      (l.isGiphyMediaURL = p),
      (l.isKlipyMediaURL = _),
      (l.isExternalStickerMediaURL = f),
      (l.validateExternalStickerWebP = h));
  },
  98,
);
