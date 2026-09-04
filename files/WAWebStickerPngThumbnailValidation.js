__d(
  "WAWebStickerPngThumbnailValidation",
  [],
  function (t, n, r, o, a, i) {
    var e = 65536,
      l = 256,
      s = [137, 80, 78, 71, 13, 10, 26, 10],
      u = [73, 72, 68, 82],
      c = 8,
      d = 12,
      m = 16,
      p = 20,
      _ = 13,
      f = 24;
    function g(t) {
      if (t.byteLength < f || t.byteLength > e) return !1;
      var n = new Uint8Array(t);
      if (
        s.some(function (e, t) {
          return n[t] !== e;
        }) ||
        h(n, c) !== _ ||
        u.some(function (e, t) {
          return n[d + t] !== e;
        })
      )
        return !1;
      var r = h(n, m),
        o = h(n, p);
      return r > 0 && r <= l && o > 0 && o <= l;
    }
    function h(e, t) {
      return e[t] * 16777216 + e[t + 1] * 65536 + e[t + 2] * 256 + e[t + 3];
    }
    i.isRenderablePngThumbnail = g;
  },
  66,
);
