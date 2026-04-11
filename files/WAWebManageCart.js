__d(
  "WAWebManageCart",
  [
    "WAWebBizAddProductToCartAction",
    "WAWebBizGatingUtils",
    "WAWebCartLogEvents",
    "WAWebCommonToastMaxProductQuantityReached",
    "WAWebToastAddedProductToCart",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a = o("WAWebBizAddProductToCartAction").addProductToCart(e),
        i = a.newCount,
        l = a.status,
        s = a.totalCartCount;
      switch (l) {
        case o("WAWebBizAddProductToCartAction").AddToCartStatus.SUCCESS:
          (o("WAWebBizGatingUtils").isQuantityControlsFeatureEnabled() === !1 &&
            r("WAWebToastAddedProductToCart")(e, t),
            s === 1 && o("WAWebCartLogEvents").logCreateNewCart(e, t, n, s),
            o("WAWebCartLogEvents").logAddProductToCart(e, t, i, n));
          break;
        case o("WAWebBizAddProductToCartAction").AddToCartStatus
          .QUANTITY_LIMIT_REACHED:
          r("WAWebCommonToastMaxProductQuantityReached")();
          break;
      }
    }
    l.addToCart = e;
  },
  98,
);
