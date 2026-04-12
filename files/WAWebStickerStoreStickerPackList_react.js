__d(
  "WAWebStickerStoreStickerPackList.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebStickerConstants",
    "WAWebStickerStoreStickerPackListItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = e.onStickerPackDetails,
        n = e.stickerPacks,
        a = u(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        i = u(
          function () {
            var e = n.map(function (e) {
              return { itemKey: e.id, stickerPack: e };
            });
            return e;
          },
          [n],
        );
      return s.jsx(r("WAWebFlatListContainer.react"), {
        flatListControllers: [a],
        children: s.jsx(o("WAWebFlatList.react").FlatList, {
          flatListController: a,
          direction: "vertical",
          forceConsistentRenderCount: !1,
          data: i,
          renderItem: function (n) {
            return s.jsx(r("WAWebStickerStoreStickerPackListItem.react"), {
              data: n,
              onClick: t,
            });
          },
          defaultItemHeight: o("WAWebStickerConstants")
            .STICKER_LIST_ITEM_HEIGHT,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
