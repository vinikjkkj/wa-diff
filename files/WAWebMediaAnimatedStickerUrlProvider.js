__d(
  "WAWebMediaAnimatedStickerUrlProvider",
  [
    "WAWebCreateMediaBlobUrl",
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
      p = u.useState;
    function _(e) {
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
        _ = s[1],
        f = r("useWAWebIsBlobInMemoryCache")(u),
        g = c(function (e) {
          var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            e,
          );
          if (!t)
            throw r("err")(
              "Cannot call createURL when the blob does not exist.",
            );
          var n = new Blob([t], { type: t.type }),
            a = o("WAWebCreateMediaBlobUrl").createMediaBlobUrl(n);
          return { blob: t, url: a };
        }, []),
        h = p(function () {
          return f ? g(u) : null;
        }),
        y = h[0],
        C = h[1];
      f && y == null && C(g(u));
      var b = y == null ? void 0 : y.url,
        v = function (t) {
          window.URL.revokeObjectURL(t);
        };
      (d(function () {
        !f && _ === o("WAWebMediaTypes").MediaDataStage.RESOLVED && n && n();
      }, []),
        r("useWAWebOnUnmount")(function () {
          b != null && v(b);
        }));
      var S = function () {
        var e = y == null ? void 0 : y.blob;
        if (!e)
          throw r("err")(
            "Cannot call refreshBlob when the blob does not exist.",
          );
        var t = new Blob([e], { type: e.type }),
          n = o("WAWebCreateMediaBlobUrl").createMediaBlobUrl(t);
        (b != null && window.URL.revokeObjectURL(b), C({ blob: e, url: n }));
      };
      return (
        m(l, function () {
          return { refreshBlob: S };
        }),
        b == null ? i() : t(b)
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
