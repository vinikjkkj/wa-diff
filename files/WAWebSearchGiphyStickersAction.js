__d(
  "WAWebSearchGiphyStickersAction",
  [
    "Promise",
    "WALogger",
    "WAPromiseLoop",
    "WAWebGifPanelGifInfo",
    "WAWebGiphyStickerUtils",
    "WAWebL10N",
    "WAWebPonyfillsFetch",
    "WAWebStickerModel",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 50,
      c = 4,
      d = 20;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = !1,
            u = yield (s || (s = n("Promise"))).all(
              ["gifs", "stickers"].map(
                (function () {
                  var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      try {
                        return yield _(n, t, a);
                      } catch (t) {
                        return (
                          a.aborted ||
                            ((l = !0),
                            o("WALogger")
                              .WARN(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "Giphy sticker search failed for ",
                                    "",
                                  ])),
                                n,
                              )
                              .catching(r("getErrorSafe")(t))
                              .sendLogs("giphy-sticker-search-failed")),
                          []
                        );
                      }
                    },
                  );
                  return function (e) {
                    return i.apply(this, arguments);
                  };
                })(),
              ),
            );
          l && !a.aborted && (i == null || i());
          var c = new Set();
          return u
            .flat()
            .filter(function (e) {
              return c.has(e.id) ? !1 : (c.add(e.id), !0);
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = [],
            l = r("WAWebL10N").getNormalizedLocale(),
            s = (function (e) {
              if (e === "zh-HK") return "zh-TW";
              if (e === "pt-BR") return "pt";
              {
                var t = e;
                return t;
              }
            })(l),
            m = o("WAWebGifPanelGifInfo").GIPHY_LOCALES.includes(s) ? s : "",
            p = 0;
          return (
            yield o("WAPromiseLoop").promiseLoop(
              (function () {
                var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n, l, s) {
                    var _,
                      f = r("WAWebURLUtils").build(
                        "https://api.giphy.com/v1/" + e + "/search",
                        {
                          api_key: o("WAWebGifPanelGifInfo").GIPHY_KEY,
                          q: t,
                          limit: u,
                          offset: p,
                          rating: "g",
                          lang: m,
                        },
                      ),
                      g = yield r("WAWebPonyfillsFetch")(f, {
                        signal: a,
                        referrerPolicy: "no-referrer",
                      });
                    if (!g.ok)
                      throw r("err")("Giphy sticker search HTTP failure");
                    var h = yield g.json(),
                      y = h == null ? void 0 : h.data;
                    if (!Array.isArray(y))
                      throw r("err")("Invalid Giphy sticker search response");
                    for (var C of y) {
                      var b = o(
                        "WAWebGiphyStickerUtils",
                      ).parseGiphyStickerAsset(C);
                      b != null && i.push(b);
                    }
                    var v = y.length;
                    p += v;
                    var S = (_ = h.pagination) == null ? void 0 : _.total_count;
                    (s + 1 >= c ||
                      i.length >= d ||
                      v <= 0 ||
                      (S != null && p >= S)) &&
                      n();
                  },
                );
                return function (e, t, n) {
                  return l.apply(this, arguments);
                };
              })(),
              void 0,
            ),
            i
          );
        })),
        f.apply(this, arguments)
      );
    }
    l.searchGiphyStickers = m;
  },
  98,
);
