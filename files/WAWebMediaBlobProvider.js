__d(
  "WAWebMediaBlobProvider",
  [
    "WAWebMediaDataGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "react",
    "react-compiler-runtime",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebMediaDataValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.downloadMedia,
        a = e.mediaData,
        i = e.render,
        l = e.renderPlaceholder,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = [
            o("WAWebMediaDataGetters").getFilehash,
            o("WAWebMediaDataGetters").getMediaStage,
          ]),
          (t[0] = s))
        : (s = t[0]);
      var d = o("useWAWebMediaDataValues").useMediaDataValues(a, s),
        m = d[0],
        p = d[1],
        _ = r("useWAWebIsBlobInMemoryCache")(m),
        f;
      t[1] !== m
        ? ((f = function () {
            return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
              m,
            );
          }),
          (t[1] = m),
          (t[2] = f))
        : (f = t[2]);
      var g = c(f),
        h = g[0],
        y = g[1];
      h == null &&
        _ &&
        y(o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(m));
      var C;
      t[3] !== h || t[4] !== n || t[5] !== p
        ? ((C = function () {
            !h && p === o("WAWebMediaTypes").MediaDataStage.RESOLVED && n();
          }),
          (t[3] = h),
          (t[4] = n),
          (t[5] = p),
          (t[6] = C))
        : (C = t[6]);
      var b = r("useWAWebStableCallback")(C),
        v,
        S;
      (t[7] !== b
        ? ((v = function () {
            b();
          }),
          (S = [b]),
          (t[7] = b),
          (t[8] = v),
          (t[9] = S))
        : ((v = t[8]), (S = t[9])),
        u(v, S));
      var R;
      return (
        t[10] !== h || t[11] !== i || t[12] !== l
          ? ((R = h ? i(h) : l()),
            (t[10] = h),
            (t[11] = i),
            (t[12] = l),
            (t[13] = R))
          : (R = t[13]),
        R
      );
    }
    l.default = d;
  },
  98,
);
