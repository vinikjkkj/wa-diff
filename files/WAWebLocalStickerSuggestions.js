__d(
  "WAWebLocalStickerSuggestions",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebDiscoveryStickerGating",
    "WAWebEmoji",
    "WAWebFavoriteStickerCollection",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerDownloadCollection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebDiscoveryStickerPackCollection",
      ).__setRef("WAWebLocalStickerSuggestions");
    function u(e, t) {
      var n = [],
        r = new Set(),
        a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e),
        i = function (t) {
          var e;
          r.has(t.id) ||
            !(
              (e = t.mediaData.emojis) != null &&
              e.some(function (e) {
                return (
                  o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e) === a
                );
              })
            ) ||
            (r.add(t.id), n.push(t));
        };
      if (
        (o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.forEach(
          function (e) {
            return i(e.sticker);
          },
        ),
        o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.forEach(
          function (e) {
            return i(e.sticker);
          },
        ),
        o("WAWebStickerDownloadCollection").StickerDownloadCollection.forEach(
          function (e) {
            var t;
            return (t = e.stickers) == null ? void 0 : t.forEach(i);
          },
        ),
        t != null)
      )
        for (var l of t) i(l);
      return n;
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebDiscoveryStickerGating").isDiscoveryStickersEnabled())
            return u(t);
          try {
            var a = yield s.load(),
              i = a.DiscoveryStickerPackCollectionMd;
            if ((n == null ? void 0 : n.aborted) === !0) return [];
            var l = o(
                "WAWebDiscoveryStickerGating",
              ).getDiscoveryStickerPackCount(),
              c = o("WAWebDiscoveryStickerGating").getDiscoveryStickerCount();
            return (
              i.isLoadedFor(l, c) || (yield i.fetch(l, c)),
              (n == null ? void 0 : n.aborted) === !0 ? [] : p(t, i)
            );
          } catch (a) {
            return (n == null ? void 0 : n.aborted) === !0
              ? []
              : (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Discovery sticker suggestions unavailable",
                      ])),
                  )
                  .catching(r("getErrorSafe")(a))
                  .sendLogs("discovery-sticker-suggestions-unavailable"),
                u(t));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      if (!o("WAWebDiscoveryStickerGating").isDiscoveryStickersEnabled())
        return u(e);
      var t = s.getModuleIfRequired();
      if (t == null) return u(e);
      var n = o("WAWebDiscoveryStickerGating").getDiscoveryStickerPackCount(),
        r = o("WAWebDiscoveryStickerGating").getDiscoveryStickerCount();
      return t.DiscoveryStickerPackCollectionMd.isLoadedFor(n, r)
        ? p(e, t.DiscoveryStickerPackCollectionMd)
        : u(e);
    }
    function p(e, t) {
      var n = [];
      return (
        t.forEach(function (e) {
          var t;
          return (t = e.stickers) == null
            ? void 0
            : t.forEach(function (e) {
                return n.push(e);
              });
        }),
        u(e, n)
      );
    }
    ((l.getLocalStickerSuggestions = u),
      (l.getStickerSuggestions = c),
      (l.getLoadedStickerSuggestions = m));
  },
  98,
);
