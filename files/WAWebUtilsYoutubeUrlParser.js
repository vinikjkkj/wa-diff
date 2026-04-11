__d(
  "WAWebUtilsYoutubeUrlParser",
  ["WAWebPipConst", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (
        var t = o("WAWebPipConst").URL_PATTERNS.ONLINE_VIDEO_URL.YOUTUBE, n = 0;
        n < t.length;
        n++
      ) {
        var a = r("WAWebURLUtils").withoutWww(e).match(t[n]);
        if (a) return a[a.length - 1];
      }
      return null;
    }
    l.parseYoutubeVideoId = e;
  },
  98,
);
