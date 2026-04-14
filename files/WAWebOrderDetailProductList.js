__d(
  "WAWebOrderDetailProductList",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebOrderDetailProductListItem",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 60;
    function c(e) {
      r("vulture")("i3MFG-5zUYl5rX8Ow2N_vclmVZg=");
      var t = e.productItems,
        n = t.map(function (e) {
          return { itemKey: e.id.toString(), product: e };
        });
      return s.jsx(r("WAWebFlatListContainer.react"), {
        flatListControllers: [e.flatListController],
        children: s.jsx(o("WAWebFlatList.react").FlatList, {
          testid: void 0,
          flatListController: e.flatListController,
          direction: "vertical",
          forceConsistentRenderCount: !1,
          data: n,
          renderItem: function (t) {
            var e = t.product;
            return s.jsx(r("WAWebOrderDetailProductListItem"), { product: e });
          },
          defaultItemHeight: u,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
