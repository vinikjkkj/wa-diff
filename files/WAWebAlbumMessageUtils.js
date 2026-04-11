__d(
  "WAWebAlbumMessageUtils",
  ["fbt", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.reduce(
          function (e, t) {
            return (
              o("WAWebFrontendMsgGetters").getAsImage(t)
                ? (e.photoCount += 1)
                : o("WAWebFrontendMsgGetters").getAsVideo(t) &&
                  (e.videoCount += 1),
              e
            );
          },
          { photoCount: 0, videoCount: 0 },
        ),
        n = t.photoCount,
        r = t.videoCount,
        a =
          n > 0
            ? s._(/*BTDS*/ '_j{"*":"{photo-count} photos","_1":"1 photo"}', [
                s._plural(n, "photo-count"),
              ])
            : null,
        i =
          r > 0
            ? s._(/*BTDS*/ '_j{"*":"{video-count} videos","_1":"1 video"}', [
                s._plural(r, "video-count"),
              ])
            : null;
      return [a, i].filter(Boolean);
    }
    l.getAlbumPhotoAndVideoCountText = e;
  },
  226,
);
