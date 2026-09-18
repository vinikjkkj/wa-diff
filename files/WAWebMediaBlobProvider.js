__d(
  "WAWebMediaBlobProvider",
  [
    "WAWebMediaDataGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "react",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebMediaDataValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = e.downloadMedia,
        n = e.mediaData,
        a = e.render,
        i = e.renderPlaceholder,
        l = o("useWAWebMediaDataValues").useMediaDataValues(n, [
          o("WAWebMediaDataGetters").getFilehash,
          o("WAWebMediaDataGetters").getMediaStage,
        ]),
        s = l[0],
        d = l[1],
        m = r("useWAWebIsBlobInMemoryCache")(s),
        p = c(function () {
          return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(s);
        }),
        _ = p[0],
        f = p[1];
      return (
        _ == null &&
          m &&
          f(o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(s)),
        u(function () {
          !_ && d === o("WAWebMediaTypes").MediaDataStage.RESOLVED && t();
        }, []),
        _ ? a(_) : i()
      );
    }
    l.default = d;
  },
  98,
);
