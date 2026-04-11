__d(
  "WAWebMediaAlbumUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e == null || e.length !== 2
        ? !1
        : e.every(function (e) {
            var t,
              n = (t = e.mediaData) == null ? void 0 : t.aspectRatio;
            return n != null && n < 1;
          });
    }
    i.isAlbumPortraitOriented = e;
  },
  66,
);
