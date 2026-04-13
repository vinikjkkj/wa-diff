__d(
  "WAWebStickerStoreStickerPackList.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebStickerConstants",
    "WAWebStickerStoreStickerPackListItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onStickerPackDetails,
        a = e.stickerPacks,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = new (r("WAWebFlatListController"))()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        u;
      t[1] !== a ? ((u = a.map(d)), (t[1] = a), (t[2] = u)) : (u = t[2]);
      var c = u,
        m = c,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [l]), (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== n
        ? ((_ = function (t) {
            return s.jsx(r("WAWebStickerStoreStickerPackListItem.react"), {
              data: t,
              onClick: n,
            });
          }),
          (t[4] = n),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      return (
        t[6] !== m || t[7] !== _
          ? ((f = s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: p,
              children: s.jsx(o("WAWebFlatList.react").FlatList, {
                flatListController: l,
                direction: "vertical",
                forceConsistentRenderCount: !1,
                data: m,
                renderItem: _,
                defaultItemHeight: o("WAWebStickerConstants")
                  .STICKER_LIST_ITEM_HEIGHT,
              }),
            })),
            (t[6] = m),
            (t[7] = _),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function d(e) {
      return { itemKey: e.id, stickerPack: e };
    }
    l.default = c;
  },
  98,
);
