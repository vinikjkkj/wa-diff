__d(
  "WAWebFirstPartyStickerInfo.react",
  [
    "fbt",
    "WAWebAuraGating",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebFavoriteStickerAction",
    "WAWebFavoriteStickerCollection",
    "WAWebFlex.react",
    "WAWebMiscGatingUtils",
    "WAWebStickerDetailsStickerPackInfo.react",
    "WAWebStickerPackCollectionMd",
    "WDSTooltip.react",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = 150;
    function m(e) {
      var t = e.onStickerPackView,
        n = e.showViewPackButton,
        a = e.sticker,
        i = e.stickerPackId,
        l = e.stickerPackViewDelay,
        c = p(i);
      o("useWAWebModelValues").useOptionalModelValues(
        a == null ? void 0 : a.mediaData,
        ["stickerPremiumStatus"],
      );
      var m =
          n && i
            ? u.jsx(o("WAWebButton.react").Button, {
                onClick: function (n) {
                  (n.stopPropagation(),
                    t && t(),
                    l != null
                      ? self.setTimeout(function () {
                          return o("WAWebCmd").Cmd.openStickerPack(i);
                        }, l + d)
                      : o("WAWebCmd").Cmd.openStickerPack(i));
                },
                type: "secondary",
                children: s._(/*BTDS*/ "View Pack"),
              })
            : null,
        _;
      if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && a != null)
        if (
          o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(
            a.filehash,
          )
        )
          _ = u.jsx(o("WAWebButton.react").Button, {
            onClick: function () {
              return o("WAWebFavoriteStickerAction").removeStickerFromFavorites(
                a,
              );
            },
            type: "secondary",
            children: s._(/*BTDS*/ "Remove From Favorites"),
          });
        else {
          var f = r("WAWebAuraGating").canUsePremiumSticker(
            a.mediaData.stickerPremiumStatus,
          );
          _ = u.jsx(r("WDSTooltip.react"), {
            disabled: f,
            label: s._(
              /*BTDS*/ "View this sticker on your phone to learn how to access and use it.",
            ),
            children: u.jsx(o("WAWebButton.react").Button, {
              disabled: !f,
              onClick: function () {
                return o("WAWebFavoriteStickerAction").addStickerToFavorites(a);
              },
              type: "secondary",
              children: s._(/*BTDS*/ "Add to Favorites"),
            }),
          });
        }
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(
            o("WAWebStickerDetailsStickerPackInfo.react")
              .StickerDetailsStickerPackInfo,
            {
              name: c == null ? void 0 : c.name,
              publisher: c == null ? void 0 : c.publisher,
              theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme
                .MediaViewer,
            },
          ),
          u.jsxs(o("WAWebFlex.react").FlexRow, { gap: 8, children: [m, _] }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      c(
        function () {
          e &&
            o(
              "WAWebStickerPackCollectionMd",
            ).StickerPackCollectionMd.fetchStickerPack(e);
        },
        [e],
      );
      var t = r("useWAWebEventTargetValue")(
        o("WAWebStickerPackCollectionMd").StickerPackCollectionMd,
        "add remove reset",
        function () {
          return e != null
            ? o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.get(e)
            : null;
        },
      );
      return t;
    }
    l.default = m;
  },
  226,
);
