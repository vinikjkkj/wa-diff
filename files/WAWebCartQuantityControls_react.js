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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.collectionId,
        a = e.context,
        i = e.product,
        l = o("WAWebUseCartProductQuantity").useCartProductQuantity(i),
        c;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
        ? ((c = function () {
            var e = o("WAWebProductCatalogContext").getProductCatalogContext(a),
              t = o("WAWebBizAddProductToCartAction").addProductToCart(i),
              r = t.newCount,
              s = t.status,
              u = t.totalCartCount;
            s === o("WAWebBizAddProductToCartAction").AddToCartStatus.SUCCESS &&
              (u === 1 && o("WAWebCartLogEvents").logCreateNewCart(i, e, n, u),
              l === 0
                ? o("WAWebCartLogEvents").logAddProductToCart(i, e, r, n)
                : l > 0 && o("WAWebCartLogEvents").logEditProduct(i, e, r, n));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        m;
      t[5] !== n || t[6] !== a || t[7] !== i || t[8] !== l
        ? ((m = function () {
            var e = o("WAWebProductCatalogContext").getProductCatalogContext(a),
              t = r("WAWebBizGetProductQuantityCartAction")(i.id, i.catalogWid);
            if (
              (r("WAWebBizUpdateProductQuantityCartAction")(i, t - 1), l === 1)
            ) {
              var s = i.catalogWid.toString(),
                u = r("WAWebBizDeleteProductFromCartAction")(
                  s,
                  i.id.toString(),
                );
              (o("WAWebCartLogEvents").logDeleteProduct(i, e, n),
                u === 0 && o("WAWebCartLogEvents").logCartAbandon(s, e));
            } else
              l > 1 && o("WAWebCartLogEvents").logEditProduct(i, e, l - 1, n);
          }),
          (t[5] = n),
          (t[6] = a),
          (t[7] = i),
          (t[8] = l),
          (t[9] = m))
        : (m = t[9]);
      var p = m,
        _ = i.maxAvailable,
        f;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Items in cart")), (t[10] = f))
        : (f = t[10]);
      var g;
      return (
        t[11] !== d || t[12] !== p || t[13] !== i.maxAvailable || t[14] !== l
          ? ((g = u.jsx(r("WAWebCommonQuantityControls.react"), {
              maxQuantity: _,
              onAddOneClick: d,
              onRemoveOneClick: p,
              quantity: l,
              quantityTitle: f,
            })),
            (t[11] = d),
            (t[12] = p),
            (t[13] = i.maxAvailable),
            (t[14] = l),
            (t[15] = g))
          : (g = t[15]),
        g
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.collectionId,
        a = e.product,
        i = o("WAWebUseCartProductQuantity").useCartProductQuantityMultiple(a),
        l;
      t[0] !== n || t[1] !== a
        ? ((l = function () {
            o(
              "WAWebCatalogCartVariantsPopupLoadable",
            ).openCatalogCartVariantsPopup({
              collectionId: n,
              handleProductChange: r("WAWebNoop"),
              onAddToCart: r("WAWebNoop"),
              onProductChange: void 0,
              product: a,
            });
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d = a.maxAvailable,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Items in cart")), (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== c || t[5] !== a.maxAvailable || t[6] !== i
          ? ((p = u.jsx(r("WAWebCommonQuantityControls.react"), {
              maxQuantity: d,
              onAddOneClick: c,
              onRemoveOneClick: c,
              quantity: i,
              quantityTitle: m,
            })),
            (t[4] = c),
            (t[5] = a.maxAvailable),
            (t[6] = i),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    ((l.WAWebCartQuantityControls = c),
      (l.WAWebVariantCartQuantityControls = d));
  },
  226,
);
