__d(
  "WAWebSearchGiphyStickersAction",
  [
    "WALogger",
    "WAPromiseLoop",
    "WAWebGifPanelGifInfo",
    "WAWebGiphyStickerUtils",
    "WAWebL10N",
    "WAWebPonyfillsFetch",
    "WAWebStickerModel",
    "WAWebURLUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 50,
      u = 4,
      c = 20;
    async function d(t, n, a) {
      var i = !1,
        l = await Promise.all(
          ["gifs", "stickers"].map(async function (a) {
            try {
              return await m(a, t, n);
            } catch (t) {
              return (
                n.aborted ||
                  ((i = !0),
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Giphy sticker search failed for ",
                          "",
                        ])),
                      a,
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("giphy-sticker-search-failed")),
                []
              );
            }
          }),
        );
      i && !n.aborted && (a == null || a());
      var s = new Set();
      return l
        .flat()
        .filter(function (e) {
          return s.has(e.id) ? !1 : (s.add(e.id), !0);
        })
        .map(function (e) {
          var t = new (o("WAWebStickerModel").StickerModel)({
            id: "giphy:" + e.id,
            mimetype: "image/webp",
            width: e.width,
            height: e.height,
            externalUrl: e.url,
          });
          return (
            t.mediaData.set({ accessibilityLabel: e.accessibilityLabel }),
            t
          );
        });
    }
    async function m(e, t, n) {
      var a = [],
        i = r("WAWebL10N").getNormalizedLocale(),
        l = (function (e) {
          if (e === "zh-HK") return "zh-TW";
          if (e === "pt-BR") return "pt";
          {
            var t = e;
            return t;
          }
        })(i),
        d = o("WAWebGifPanelGifInfo").GIPHY_LOCALES.includes(l) ? l : "",
        m = 0;
      return (
        await o("WAPromiseLoop").promiseLoop(
          async function (i, l, p) {
            var _,
              f = r("WAWebURLUtils").build(
                "https://api.giphy.com/v1/" + e + "/search",
                {
                  api_key: o("WAWebGifPanelGifInfo").GIPHY_KEY,
                  q: t,
                  limit: s,
                  offset: m,
                  rating: "pg-13",
                  lang: d,
                },
              ),
              g = await r("WAWebPonyfillsFetch")(f, {
                signal: n,
                referrerPolicy: "no-referrer",
              });
            if (!g.ok) throw r("err")("Giphy sticker search HTTP failure");
            var h = await g.json(),
              y = h == null ? void 0 : h.data;
            if (!Array.isArray(y))
              throw r("err")("Invalid Giphy sticker search response");
            for (var C of y) {
              var b = o("WAWebGiphyStickerUtils").parseGiphyStickerAsset(C);
              b != null && a.push(b);
            }
            var v = y.length;
            m += v;
            var S = (_ = h.pagination) == null ? void 0 : _.total_count;
            (p + 1 >= u || a.length >= c || v <= 0 || (S != null && m >= S)) &&
              i();
          },
          void 0,
        ),
        a
      );
    }
    l.searchGiphyStickers = d;
  },
  98,
);
