__d(
  "WAWebMediaAnimatedStickerUrlProvider",
  [
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "err",
    "react",
    "useWAWebModelValues",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useImperativeHandle,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState;
    function f(e) {
      var t = e.children,
        n = e.downloadMedia,
        a = e.mediaData,
        i = e.placeholderRenderer,
        l = e.ref,
        s = o("useWAWebModelValues").useModelValues(a, [
          "filehash",
          "mediaStage",
        ]),
        u = p(null),
        f = m(
          function () {
            return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
              s.filehash,
            );
          },
          [s],
        ),
        g = function (t) {
          var e = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            t,
          );
          if (!e)
            throw r("err")(
              "Cannot call createURL when the blob does not exist.",
            );
          u.current = e;
          var n = new Blob([e], { type: e.type }),
            a = window.URL.createObjectURL(n);
          return a;
        },
        h = _(function () {
          return f ? g(s.filehash) : null;
        }),
        y = h[0],
        C = h[1],
        b = function (t) {
          window.URL.revokeObjectURL(t);
        };
      (c(function () {
        !f &&
          s.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
          n &&
          n();
      }, []),
        r("useWAWebOnUnmount")(function () {
          y && b(y);
        }));
      var v = function () {
        var e = u.current;
        if (!e)
          throw r("err")(
            "Cannot call refreshBlob when the blob does not exist.",
          );
        var t = new Blob([e], { type: e.type }),
          n = window.URL.createObjectURL(t);
        (y && window.URL.revokeObjectURL(y), C(n));
      };
      return (
        c(
          function () {
            var e = s.filehash;
            f && !y && C(g(e));
          },
          [f, s.filehash, y],
        ),
        d(l, function () {
          return { refreshBlob: v };
        }),
        y ? t(y) : i()
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
