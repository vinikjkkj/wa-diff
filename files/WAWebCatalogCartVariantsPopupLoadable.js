__d(
  "WAWebCatalogCartVariantsPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebCatalogCartVariantsPopup.react",
          )
            .__setRef("WAWebCatalogCartVariantsPopupLoadable")
            .load();
          return e;
        }),
        "WAWebCatalogCartVariantsPopup",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    function d(e) {
      var t = e.collectionId,
        n = e.handleProductChange,
        r = e.onAddToCart,
        a = e.onProductChange,
        i = e.product;
      o("WAWebModalManager").ModalManager.open(
        s.jsx(c, {
          product: i,
          collectionId: t,
          handleProductChange: n,
          onProductChange: a,
          onAddToCart: r,
        }),
      );
    }
    ((l.CatalogCartVariantsPopupLoadable = c),
      (l.openCatalogCartVariantsPopup = d));
  },
  98,
);
