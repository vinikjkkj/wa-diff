__d(
  "WAWebMediaUrlProvider",
  [
    "WALogger",
    "WAWebCryptoImageStreamer",
    "WAWebMediaTypes",
    "react",
    "useWAWebInMemoryMediaBlobCache",
    "useWAWebModelValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = [];
    function f(t) {
      var n = t.downloadMedia,
        a = t.renderProgressively,
        i = a === void 0 ? !1 : a,
        l = o("useWAWebModelValues").useModelValues(t.mediaData, [
          "filehash",
          "mediaStage",
          "progressiveStage",
        ]),
        s = l.filehash,
        c = l.mediaStage,
        f = l.progressiveStage,
        g = p(_),
        h = g[0],
        y = g[1],
        C = m(
          function () {
            return f != null
              ? o("WAWebCryptoImageStreamer").getProgressiveMediaCacheKey(s, f)
              : null;
          },
          [s, f],
        ),
        b =
          C != null && c !== o("WAWebMediaTypes").MediaDataStage.RESOLVED
            ? C
            : s,
        v = r("useWAWebInMemoryMediaBlobCache")(b),
        S = p(s),
        R = S[0],
        L = S[1],
        E = p(null),
        k = E[0],
        I = E[1];
      R !== s
        ? (y(v != null ? [v] : []), L(s), I(v))
        : v != null && v !== k && (y([].concat(h, [v])), I(v));
      var T = r("useWAWebStableCallback")(function () {
        (C == null || !i) && (n == null || n());
      });
      return (
        d(
          function () {
            T();
          },
          [s, T],
        ),
        d(
          function () {
            if (v == null) {
              if (
                c !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                C != null
              ) {
                var t = s.slice(0, 10);
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "blob missing hash: ",
                        " progStage: ",
                        " mediaStage: ",
                        "",
                      ])),
                    t,
                    f,
                    c,
                  )
                  .sendLogs("missing-progressive-blob");
              }
              return;
            }
          },
          [v, c, C, s, f],
        ),
        v == null
          ? t.placeholderRenderer()
          : i === !0
            ? u.jsxs("div", {
                className: "x1n2onr6 xh8yej3 x5yr21d",
                "data-testid": void 0,
                children: [
                  u.jsx("div", {
                    className:
                      "x10l6tqk x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                    children: t.placeholderRenderer(),
                  }),
                  h.map(function (e) {
                    return u.jsx(
                      "div",
                      {
                        className:
                          "x10l6tqk x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                        children: t.children(e),
                      },
                      e,
                    );
                  }),
                ],
              })
            : t.children(v)
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
