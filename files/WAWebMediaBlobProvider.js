__d(
  "WAWebMediaBlobProvider",
  [
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = e.downloadMedia,
        n = e.mediaData,
        r = e.render,
        a = e.renderPlaceholder,
        i = o("useWAWebModelValues").useModelValues(n, [
          "filehash",
          "mediaStage",
        ]),
        l = c(function () {
          return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            i.filehash,
          );
        }),
        s = l[0],
        d = l[1];
      return (
        u(function () {
          !s &&
            i.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            t();
        }, []),
        u(
          function () {
            if (!s) {
              var e = i.filehash;
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(e) &&
                d(
                  o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                    e,
                  ),
                );
            }
          },
          [s, i],
        ),
        s ? r(s) : a()
      );
    }
    l.default = d;
  },
  98,
);
