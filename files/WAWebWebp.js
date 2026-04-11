__d(
  "WAWebWebp",
  ["$InternalEnum", "WABinary", "WALogger", "WATypedArraysEqual"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({
        VP8X: "VP8X",
        ANMF: "ANMF",
        EXIF: "EXIF",
        XMP: "XMP ",
      }),
      c = 12,
      d = 8,
      m = 4,
      p = 20,
      _ = 2,
      f = 125,
      g = 0;
    function h(e, t) {
      var n = R(t),
        o = 0;
      for (o += c; o < e.byteLength; ) {
        var a = e.slice(o, o + d),
          i = a.slice(0, m),
          l = v(a.slice(m, 2 * m));
        if ((l % 2 !== 0 && (l += 1), r("WATypedArraysEqual")(i, n)))
          return { position: o, size: l + m + m };
        o += d + l;
      }
      return null;
    }
    function y(t) {
      if (!C(t))
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker file not extended format.",
              ])),
          ),
          null
        );
      var n = h(t, u.EXIF);
      if (!n) return null;
      for (
        var r = t.slice(n.position, n.position + n.size),
          a,
          i,
          l = r.byteLength;
        l > 0;
        --l
      )
        if (i == null && r[l] === f) i = l;
        else if (i != null && r[l] === g) {
          a = l + 1;
          break;
        }
      return a == null || i == null
        ? (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "JSON not found in sticker file",
              ])),
          ),
          null)
        : { position: n.position + a, size: i - a + 1 };
    }
    function C(e) {
      var t = e.slice(c, c + m);
      return r("WATypedArraysEqual")(t, R(u.VP8X));
    }
    function b(e) {
      var t = new Uint8Array(e);
      return C(t) && (_ & t[p]) !== 0;
    }
    function v(e) {
      return e.reduce(function (e, t, n) {
        return e + (t << (n * 8));
      }, 0);
    }
    function S(e) {
      var t = new (o("WABinary").Binary)();
      return (t.writeUint32(e, !0), t.readByteArrayView());
    }
    function R(e) {
      var t = new (o("WABinary").Binary)();
      return (t.writeString(e), t.readByteArrayView());
    }
    ((l.Chunk = u),
      (l.CHUNK_HEADER_SIZE = d),
      (l.FOUR = m),
      (l.findWebpChunk = h),
      (l.findWebpMetadata = y),
      (l.isExtendedFile = C),
      (l.isAnimatedWebp = b),
      (l.littleEndianToNumber = v),
      (l.numberToLittleEndian = S),
      (l.stringToUint8 = R));
  },
  98,
);
