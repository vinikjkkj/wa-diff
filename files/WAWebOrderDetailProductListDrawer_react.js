__d(
  "WAWebOrderDetailProductListDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlatListController",
    "WAWebOrderDetailProductList",
    "WAWebUISpacing",
    "react",
    "useLazyRef",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      r("vulture")("H98LpaxlJxUOq8Y4Q96xjK97XxE=");
      var i = a.productItems,
        l = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        });
      return c.jsxs(r("WAWebDrawer.react"), {
        onDrop: a.onBack,
        ref: n,
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-product-list",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Items"),
            onBack: a.onBack,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            flatListControllers: [l.current],
            children: c.jsx(r("WAWebDrawerSection.react"), {
              xstyle: [
                o("WAWebUISpacing").uiPadding.vert10,
                o("WAWebUISpacing").uiPadding.end3,
                o("WAWebUISpacing").uiPadding.start16,
              ],
              theme: "refresh-padding-title",
              children: c.jsx(r("WAWebOrderDetailProductList"), {
                flatListController: l.current,
                productItems: i,
              }),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
