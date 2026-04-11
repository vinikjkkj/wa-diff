__d(
  "WAWebAvatarStickerUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = t != null ? t : {},
        r = n.isAvatarStickers,
        o = r === void 0 ? !1 : r;
      return e.filter(function (e) {
        return e.mediaData.isAvatar === o;
      });
    }
    i.filterAvatarStickers = e;
  },
  66,
);
