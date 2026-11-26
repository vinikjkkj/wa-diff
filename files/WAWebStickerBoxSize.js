__d(
  "WAWebStickerBoxSize",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = 2,
      s = { width: 1, height: 1 };
    function u(e, t) {
      if (e == null || t == null || !(e > 0) || !(t > 0) || e === t) return s;
      var n = p();
      if (n <= 1) return s;
      var r = Math.min(Math.max(e, t) / Math.min(e, t), n);
      return e > t ? { width: r, height: 1 } : { width: 1, height: r };
    }
    function c(e, t) {
      var n = u(e, t);
      return n.width === n.height ? null : n;
    }
    function d(e, t) {
      return m(e) + m(t) <= 2;
    }
    function m(e) {
      return u(
        e == null ? void 0 : e.fullWidth,
        e == null ? void 0 : e.fullHeight,
      ).width;
    }
    function p() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "sticker_non_square_max_aspect_ratio",
      );
      return t > 1 ? Math.min(t, e) : 1;
    }
    ((l.getStickerBoxScale = u),
      (l.getGrownStickerBoxScale = c),
      (l.canStickersShareAlbumRow = d));
  },
  98,
);
