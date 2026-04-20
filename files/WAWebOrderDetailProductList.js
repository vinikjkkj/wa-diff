__d(
  "WAWebOrderDetailProductList",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebOrderDetailProductListItem",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 60;
    function c(e) {
      var t = o("react-compiler-runtime").c(10);
      r("vulture")("i3MFG-5zUYl5rX8Ow2N_vclmVZg=");
      var n = e.productItems,
        a;
      t[0] !== n ? ((a = n.map(m)), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] !== e.flatListController
        ? ((l = [e.flatListController]),
          (t[2] = e.flatListController),
          (t[3] = l))
        : (l = t[3]);
      var c;
      t[4] !== i || t[5] !== e.flatListController
        ? ((c = s.jsx(o("WAWebFlatList.react").FlatList, {
            testid: "order-detail-product-list",
            flatListController: e.flatListController,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: i,
            renderItem: d,
            defaultItemHeight: u,
          })),
          (t[4] = i),
          (t[5] = e.flatListController),
          (t[6] = c))
        : (c = t[6]);
      var p;
      return (
        t[7] !== l || t[8] !== c
          ? ((p = s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: l,
              children: c,
            })),
            (t[7] = l),
            (t[8] = c),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    function d(e) {
      var t = e.product;
      return s.jsx(r("WAWebOrderDetailProductListItem"), { product: t });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      return { itemKey: e.id.toString(), product: e };
    }
    l.default = c;
  },
  98,
);
