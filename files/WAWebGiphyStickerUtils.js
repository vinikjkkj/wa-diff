__d(
  "WAWebGiphyStickerUtils",
  ["WAWebExternalStickerUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!e.id || e.is_low_contrast === !0 || e.rating !== "g") return null;
      var t = e.images;
      for (var n of [
        t == null ? void 0 : t.fixed_height,
        t == null ? void 0 : t.fixed_width,
        t == null ? void 0 : t.original,
      ]) {
        var r;
        if (n != null) {
          var a = Number(n.width),
            i = Number(n.height),
            l = Number(n.webp_size);
          if (
            !(
              !Number.isInteger(a) ||
              a <= 0 ||
              a !== i ||
              a > o("WAWebExternalStickerUtils").MAX_STICKER_DIMENSION ||
              !Number.isFinite(l) ||
              l <= 0 ||
              l >=
                o("WAWebExternalStickerUtils").MAX_GIPHY_STICKER_SIZE_BYTES ||
              !o("WAWebExternalStickerUtils").isGiphyMediaURL(n.webp)
            )
          )
            return {
              id: e.id,
              url: n.webp,
              width: a,
              height: i,
              accessibilityLabel:
                e.alt_text != null && e.alt_text !== ""
                  ? e.alt_text
                  : (r = e.title) != null
                    ? r
                    : null,
            };
        }
      }
      return null;
    }
    l.parseGiphyStickerAsset = e;
  },
  98,
);
