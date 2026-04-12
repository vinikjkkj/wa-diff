__d(
  "WAWebCartQuantityControls.react",
  [
    "fbt",
    "WAWebBizAddProductToCartAction",
    "WAWebBizDeleteProductFromCartAction",
    "WAWebBizGetProductQuantityCartAction",
    "WAWebBizUpdateProductQuantityCartAction",
    "WAWebCartLogEvents",
    "WAWebCatalogCartVariantsPopupLoadable",
    "WAWebCommonQuantityControls.react",
    "WAWebNoop",
    "WAWebProductCatalogContext",
    "WAWebUseCartProductQuantity",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.collectionId,
        n = e.context,
        a = e.product,
        i = o("WAWebUseCartProductQuantity").useCartProductQuantity(a),
        l = function () {
          var e = o("WAWebProductCatalogContext").getProductCatalogContext(n),
            r = o("WAWebBizAddProductToCartAction").addProductToCart(a),
            l = r.newCount,
            s = r.status,
            u = r.totalCartCount;
          s === o("WAWebBizAddProductToCartAction").AddToCartStatus.SUCCESS &&
            (u === 1 && o("WAWebCartLogEvents").logCreateNewCart(a, e, t, u),
            i === 0
              ? o("WAWebCartLogEvents").logAddProductToCart(a, e, l, t)
              : i > 0 && o("WAWebCartLogEvents").logEditProduct(a, e, l, t));
        },
        c = function () {
          var e = o("WAWebProductCatalogContext").getProductCatalogContext(n),
            l = r("WAWebBizGetProductQuantityCartAction")(a.id, a.catalogWid);
          if (
            (r("WAWebBizUpdateProductQuantityCartAction")(a, l - 1), i === 1)
          ) {
            var s = a.catalogWid.toString(),
              u = r("WAWebBizDeleteProductFromCartAction")(s, a.id.toString());
            (o("WAWebCartLogEvents").logDeleteProduct(a, e, t),
              u === 0 && o("WAWebCartLogEvents").logCartAbandon(s, e));
          } else
            i > 1 && o("WAWebCartLogEvents").logEditProduct(a, e, i - 1, t);
        };
      return u.jsx(r("WAWebCommonQuantityControls.react"), {
        maxQuantity: a.maxAvailable,
        onAddOneClick: l,
        onRemoveOneClick: c,
        quantity: i,
        quantityTitle: s._(/*BTDS*/ "Items in cart"),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.collectionId,
        n = e.product,
        a = o("WAWebUseCartProductQuantity").useCartProductQuantityMultiple(n),
        i = function () {
          o(
            "WAWebCatalogCartVariantsPopupLoadable",
          ).openCatalogCartVariantsPopup({
            collectionId: t,
            handleProductChange: r("WAWebNoop"),
            onAddToCart: r("WAWebNoop"),
            onProductChange: void 0,
            product: n,
          });
        };
      return u.jsx(r("WAWebCommonQuantityControls.react"), {
        maxQuantity: n.maxAvailable,
        onAddOneClick: i,
        onRemoveOneClick: i,
        quantity: a,
        quantityTitle: s._(/*BTDS*/ "Items in cart"),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.WAWebCartQuantityControls = c),
      (l.WAWebVariantCartQuantityControls = d));
  },
  226,
);
