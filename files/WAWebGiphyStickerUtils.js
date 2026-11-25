__d(
  "WAWebGiphyStickerUtils",
  ["WAWebExternalStickerUtils"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["g", "pg", "pg-13"]);
    function s(t) {
      if (!t.id || t.is_low_contrast === !0 || !e.has(t.rating)) return null;
      var n = t.images;
      for (var r of [
        n == null ? void 0 : n.fixed_height,
        n == null ? void 0 : n.fixed_width,
        n == null ? void 0 : n.original,
      ]) {
        var a;
        if (r != null) {
          var i = Number(r.width),
            l = Number(r.height),
            s = Number(r.webp_size);
          if (
            !(
              !Number.isInteger(i) ||
              i <= 0 ||
              i !== l ||
              i > o("WAWebExternalStickerUtils").MAX_STICKER_DIMENSION ||
              !Number.isFinite(s) ||
              s <= 0 ||
              s >=
                o("WAWebExternalStickerUtils").MAX_GIPHY_STICKER_SIZE_BYTES ||
              !o("WAWebExternalStickerUtils").isGiphyMediaURL(r.webp)
            )
          )
            return {
              id: t.id,
              url: r.webp,
              width: i,
              height: l,
              accessibilityLabel:
                t.alt_text != null && t.alt_text !== ""
                  ? t.alt_text
                  : (a = t.title) != null
                    ? a
                    : null,
            };
        }
      }
      return null;
    }
    l.parseGiphyStickerAsset = s;
  },
  98,
);
