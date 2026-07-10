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
      var n = t.children,
        a = t.downloadMedia,
        i = t.mediaData,
        l = t.placeholderRenderer,
        s = t.renderProgressively,
        c = s === void 0 ? !1 : s,
        f = o("useWAWebModelValues").useModelValues(i, [
          "filehash",
          "mediaStage",
          "progressiveStage",
        ]),
        g = f.filehash,
        h = f.mediaStage,
        y = f.progressiveStage,
        C = p(_),
        b = C[0],
        v = C[1],
        S = m(
          function () {
            return y != null
              ? o("WAWebCryptoImageStreamer").getProgressiveMediaCacheKey(g, y)
              : null;
          },
          [g, y],
        ),
        R =
          S != null && h !== o("WAWebMediaTypes").MediaDataStage.RESOLVED
            ? S
            : g,
        L = r("useWAWebInMemoryMediaBlobCache")(R),
        E = p(g),
        k = E[0],
        I = E[1],
        T = p(null),
        D = T[0],
        x = T[1];
      k !== g
        ? (v(L != null ? [L] : []), I(g), x(L))
        : L != null && L !== D && (v([].concat(b, [L])), x(L));
      var $ = r("useWAWebStableCallback")(function () {
        (S == null || !c) && (a == null || a());
      });
      return (
        d(
          function () {
            $();
          },
          [g, $],
        ),
        d(
          function () {
            if (L == null) {
              if (
                h !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                S != null
              ) {
                var t = g.slice(0, 10);
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
                    y,
                    h,
                  )
                  .sendLogs("missing-progressive-blob");
              }
              return;
            }
          },
          [L, h, S, g, y],
        ),
        L == null
          ? l()
          : c === !0
            ? u.jsxs("div", {
                className: "x1n2onr6 xh8yej3 x5yr21d",
                "data-testid": "media-url-provider",
                children: [
                  u.jsx("div", {
                    className:
                      "x10l6tqk x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                    children: l(),
                  }),
                  b.map(function (e) {
                    return u.jsx(
                      "div",
                      {
                        className:
                          "x10l6tqk x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                        children: n(e),
                      },
                      e,
                    );
                  }),
                ],
              })
            : n(L)
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
