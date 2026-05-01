__d(
  "WAWebAlbumsGenerateAlbumMessageProto",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r = e.contextInfo,
        o = e.json;
      return {
        albumMessage: {
          contextInfo: r != null ? r : void 0,
          expectedImageCount:
            (t = o == null ? void 0 : o.expectedImageCount) != null
              ? t
              : void 0,
          expectedVideoCount:
            (n = o == null ? void 0 : o.expectedVideoCount) != null
              ? n
              : void 0,
        },
      };
    }
    i.default = e;
  },
  66,
);
