__d(
  "WAWebMediaAnimatedStickerUrlProvider",
  [
    "WAWebMediaDataGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "err",
    "react",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebMediaDataValues",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useImperativeHandle,
      p = u.useRef,
      _ = u.useState;
    function f(e) {
      var t = e.children,
        n = e.downloadMedia,
        a = e.mediaData,
        i = e.placeholderRenderer,
        l = e.ref,
        s = o("useWAWebMediaDataValues").useMediaDataValues(a, [
          o("WAWebMediaDataGetters").getFilehash,
          o("WAWebMediaDataGetters").getMediaStage,
        ]),
        u = s[0],
        f = s[1],
        g = p(null),
        h = r("useWAWebIsBlobInMemoryCache")(u),
        y = c(function (e) {
          var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            e,
          );
          if (!t)
            throw r("err")(
              "Cannot call createURL when the blob does not exist.",
            );
          g.current = t;
          var n = new Blob([t], { type: t.type }),
            a = window.URL.createObjectURL(n);
          return a;
        }, []),
        C = _(function () {
          return h ? y(u) : null;
        }),
        b = C[0],
        v = C[1],
        S = function (t) {
          window.URL.revokeObjectURL(t);
        };
      (d(function () {
        !h && f === o("WAWebMediaTypes").MediaDataStage.RESOLVED && n && n();
      }, []),
        r("useWAWebOnUnmount")(function () {
          b != null && S(b);
        }));
      var R = function () {
        var e = g.current;
        if (!e)
          throw r("err")(
            "Cannot call refreshBlob when the blob does not exist.",
          );
        var t = new Blob([e], { type: e.type }),
          n = window.URL.createObjectURL(t);
        (b != null && window.URL.revokeObjectURL(b), v(n));
      };
      return (
        d(
          function () {
            h && b == null && v(y(u));
          },
          [h, u, b, y],
        ),
        m(l, function () {
          return { refreshBlob: R };
        }),
        b == null ? i() : t(b)
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
