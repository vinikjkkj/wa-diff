__d(
  "WAWebMediaUrlProvider",
  [
    "WALogger",
    "WAWebCryptoImageStreamer",
    "WAWebMediaDataGetters",
    "WAWebMediaTypes",
    "react",
    "useWAWebInMemoryMediaBlobCache",
    "useWAWebMediaDataValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = [];
    function g(t) {
      var n = t.children,
        a = t.downloadMedia,
        i = t.mediaData,
        l = t.placeholderRenderer,
        u = t.renderProgressively,
        d = u === void 0 ? !1 : u,
        g = o("useWAWebMediaDataValues").useMediaDataValues(i, [
          o("WAWebMediaDataGetters").getFilehash,
          o("WAWebMediaDataGetters").getMediaStage,
          o("WAWebMediaDataGetters").getProgressiveStage,
        ]),
        h = g[0],
        y = g[1],
        C = g[2],
        b = _(f),
        v = b[0],
        S = b[1],
        R = p(
          function () {
            return C != null
              ? o("WAWebCryptoImageStreamer").getProgressiveMediaCacheKey(h, C)
              : null;
          },
          [h, C],
        ),
        L =
          R != null && y !== o("WAWebMediaTypes").MediaDataStage.RESOLVED
            ? R
            : h,
        E = r("useWAWebInMemoryMediaBlobCache")(L),
        k = _(h),
        I = k[0],
        T = k[1],
        D = _(null),
        x = D[0],
        $ = D[1];
      I !== h
        ? (S(E != null ? [E] : []), T(h), $(E))
        : E != null && E !== x && (S([].concat(v, [E])), $(E));
      var P = r("useWAWebStableCallback")(function () {
        if (R == null || !d) {
          var t;
          a == null ||
            (t = a()) == null ||
            t.catch(function () {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaUrlProvider: downloadMedia failed",
                    ])),
                )
                .sendLogs("media-url-provider-download-failed", {
                  sampling: 0.01,
                });
            });
        }
      });
      return (
        m(
          function () {
            P();
          },
          [h, P],
        ),
        m(
          function () {
            if (E == null) {
              if (
                y !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                R != null
              ) {
                var e = h.slice(0, 10);
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "blob missing hash: ",
                        " progStage: ",
                        " mediaStage: ",
                        "",
                      ])),
                    e,
                    C,
                    y,
                  )
                  .sendLogs("missing-progressive-blob");
              }
              return;
            }
          },
          [E, y, R, h, C],
        ),
        E == null
          ? l()
          : d === !0
            ? c.jsxs("div", {
                className: "x1n2onr6 xh8yej3 x5yr21d",
                "data-testid": "media-url-provider",
                children: [
                  c.jsx("div", {
                    className:
                      "x10l6tqk x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                    children: l(),
                  }),
                  v.map(function (e) {
                    return c.jsx(
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
            : n(E)
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
