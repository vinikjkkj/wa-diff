__d(
  "WAWebLocalStickerSuggestions",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebDiscoveryStickerGating",
    "WAWebEmoji",
    "WAWebFavoriteStickerCollection",
    "WAWebNoop",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerDownloadCollection",
    "WAWebStickerSuggestionEmojiGroups",
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
        a = _(e),
        i = function (t) {
          var e;
          r.has(t.id) ||
            !f((e = t.mediaData.emojis) != null ? e : [], a) ||
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
    async function c(t, n) {
      if (!o("WAWebDiscoveryStickerGating").isDiscoveryStickersEnabled())
        return u(t);
      try {
        var a = await s.load(),
          i = a.DiscoveryStickerPackCollectionMd;
        if ((n == null ? void 0 : n.aborted) === !0) return [];
        i.retain();
        try {
          var l = o(
              "WAWebDiscoveryStickerGating",
            ).getDiscoveryStickerPackCount(),
            c = o("WAWebDiscoveryStickerGating").getDiscoveryStickerCount();
          if (
            (i.isLoadedFor(l, c) || (await i.fetch(l, c)),
            (n == null ? void 0 : n.aborted) === !0)
          )
            return [];
          var d = o(
              "WAWebDiscoveryStickerGating",
            ).getDiscoveryStickerPackCount(),
            m = o("WAWebDiscoveryStickerGating").getDiscoveryStickerCount();
          if (!i.isLoadedFor(d, m)) return u(t);
          var g = _(t);
          return (
            i.materializeStickerSuggestions(function (e) {
              return f(e, g);
            }),
            p(t, i)
          );
        } finally {
          i.release();
        }
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
    }
    function d(e) {
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
    function m() {
      if (!o("WAWebDiscoveryStickerGating").isDiscoveryStickersEnabled())
        return r("WAWebNoop");
      var e = s.getModuleIfRequired();
      if (e == null) return r("WAWebNoop");
      var t = e.DiscoveryStickerPackCollectionMd;
      return (
        t.retain(),
        function () {
          return t.release();
        }
      );
    }
    function p(e, t) {
      return u(e, t.getMaterializedStickers());
    }
    function _(e) {
      return new Set(
        o("WAWebStickerSuggestionEmojiGroups")
          .getStickerSuggestionEmojiGroup(e)
          .map(function (e) {
            var t;
            return (t =
              o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e)) != null
              ? t
              : e;
          }),
      );
    }
    function f(e, t) {
      return e.some(function (e) {
        var n;
        return t.has(
          (n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e)) != null
            ? n
            : e,
        );
      });
    }
    ((l.getLocalStickerSuggestions = u),
      (l.getStickerSuggestions = c),
      (l.getLoadedStickerSuggestions = d),
      (l.retainLoadedStickerSuggestions = m));
  },
  98,
);
