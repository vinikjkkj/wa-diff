__d(
  "WAWebSearchKlipyStickersAction",
  [
    "WALogger",
    "WAPromiseLoop",
    "WAWebExternalStickerUtils",
    "WAWebKlipyApi",
    "WAWebStickerModel",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 4,
      u = 20,
      c = { min: 1, max: 1 };
    async function d(t, n, a, i) {
      var l = !1,
        s = await Promise.all(
          ["gifs", "stickers"].map(async function (a) {
            try {
              var s = await m(a, t, n, i);
              return s.map(function (e) {
                return babelHelpers.extends({}, e, { id: a + ":" + e.id });
              });
            } catch (t) {
              return (
                n.aborted ||
                  ((l = !0),
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Klipy sticker search failed for ",
                          "",
                        ])),
                      a,
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("klipy-sticker-search-failed")),
                []
              );
            }
          }),
        );
      l && !n.aborted && (a == null || a());
      var u = new Set();
      return s
        .flat()
        .filter(function (e) {
          return u.has(e.url) ? !1 : (u.add(e.url), !0);
        })
        .map(function (e) {
          var t = new (o("WAWebStickerModel").StickerModel)({
            id: "klipy:" + e.id,
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
    async function m(e, t, n, r) {
      var a = [];
      return (
        await o("WAPromiseLoop").promiseLoop(
          async function (i, l, d) {
            var m = await o("WAWebKlipyApi").fetchKlipyPage({
              appKey: r != null ? r : void 0,
              aspectRatio: c,
              catalog: e,
              contentFilter: "low",
              formatFilter: "webp",
              page: d + 1,
              perPage: o("WAWebKlipyApi").KLIPY_MAX_PER_PAGE,
              query: t,
              signal: n,
            });
            for (var _ of m.items) {
              var f = p(_);
              f != null && a.push(f);
            }
            (d + 1 >= s ||
              a.length >= u ||
              m.items.length === 0 ||
              !m.hasNext) &&
              i();
          },
          void 0,
        ),
        a
      );
    }
    function p(e) {
      var t = e.file;
      if (e.id == null || t == null) return null;
      for (var n of [t.sm, t.md, t.hd]) {
        var r = _(n == null ? void 0 : n.webp);
        if (r != null)
          return {
            id: String(e.id),
            url: r.url,
            width: r.width,
            height: r.width,
            accessibilityLabel:
              e.title != null && e.title !== "" ? e.title : null,
          };
      }
      return null;
    }
    function _(e) {
      var t = e == null ? void 0 : e.width,
        n = e == null ? void 0 : e.url;
      return e == null ||
        t == null ||
        !f(t, e.height) ||
        !g(e.size) ||
        !o("WAWebExternalStickerUtils").isKlipyMediaURL(n)
        ? null
        : { url: n, width: t };
    }
    function f(e, t) {
      return (
        Number.isInteger(e) &&
        e > 0 &&
        e === t &&
        e <= o("WAWebExternalStickerUtils").MAX_STICKER_DIMENSION
      );
    }
    function g(e) {
      return (
        e != null &&
        e > 0 &&
        e < o("WAWebExternalStickerUtils").MAX_GIPHY_STICKER_SIZE_BYTES
      );
    }
    ((l.searchKlipyStickers = d), (l.parseKlipyStickerAsset = p));
  },
  98,
);
