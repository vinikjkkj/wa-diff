__d(
  "WAWebStickerDetailsStickerPackInfo.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebAuraGating",
    "WAWebButton.react",
    "WAWebEmojiText.react",
    "WAWebFavoriteStickerAction",
    "WAWebFavoriteStickerCollection",
    "WAWebMiscGatingUtils",
    "WAWebText_DONOTUSE.react",
    "WDSIconWdsIcAuraFill.react",
    "WDSTooltip.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          color: "xhslqc4",
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        stickerStore: { marginBottom: "xui9b5u", $$css: !0 },
        mediaViewer: { marginBottom: "x1iymm2a", $$css: !0 },
        name: {
          fontSize: "x1jchvi3",
          lineHeight: "x1xet1wb",
          color: "x14ug900",
          $$css: !0,
        },
      },
      d = n("$InternalEnum").Mirrored(["StickerStore", "MediaViewer"]);
    function m(e) {
      var t = e.isPremium,
        n = e.name,
        a = e.publisher,
        i = e.sticker,
        l = e.theme;
      o("useWAWebModelValues").useOptionalModelValues(
        i == null ? void 0 : i.mediaData,
        ["stickerPremiumStatus"],
      );
      var m;
      if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && i != null) {
        var p = r("WAWebAuraGating").canUsePremiumSticker(
          i.mediaData.stickerPremiumStatus,
        );
        m = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(
          i.filehash,
        )
          ? u.jsx(o("WAWebButton.react").Button, {
              onClick: function () {
                return o(
                  "WAWebFavoriteStickerAction",
                ).removeStickerFromFavorites(i);
              },
              type: "secondary",
              children: s._(/*BTDS*/ "Remove From Favorites"),
            })
          : u.jsx(r("WDSTooltip.react"), {
              disabled: p,
              label: s._(
                /*BTDS*/ "View this sticker on your phone to learn how to access and use it.",
              ),
              children: u.jsx(o("WAWebButton.react").Button, {
                disabled: !p,
                onClick: function () {
                  return o("WAWebFavoriteStickerAction").addStickerToFavorites(
                    i,
                  );
                },
                type: "secondary",
                children: s._(/*BTDS*/ "Add to Favorites"),
              }),
            });
      }
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
            theme: "plain",
            xstyle: [
              c.container,
              l === d.StickerStore && c.stickerStore,
              l === d.MediaViewer && c.mediaViewer,
            ],
            children: [
              t === !0 &&
                u.jsx("span", {
                  className: "x3nfvp2 x1n8ftqi x7g7pl8 x14ug900",
                  children: u.jsx(r("WDSIconWdsIcAuraFill.react"), {
                    height: 16,
                    width: 16,
                  }),
                }),
              n &&
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  xstyle: c.name,
                  text: n,
                }),
              n &&
                a &&
                u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: "\xA0\u2022\xA0",
                }),
              a && u.jsx(o("WAWebEmojiText.react").EmojiText, { text: a }),
            ],
          }),
          m,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.Theme = d),
      (l.StickerDetailsStickerPackInfo = m));
  },
  226,
);
