__d(
  "WAWebProductCatalogProductDetailsWithDeepLink.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WANullthrows",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebConfirmPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebProductCatalogFetchState",
    "WAWebProductCatalogFetchStateTopBar.react",
    "WAWebProductCatalogGetLatestProduct",
    "WAWebProductCatalogProductDetailsDrawer.react",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState;
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = a.productInfo,
        u = l.businessOwnerJid,
        d = l.productId,
        _ = p(function () {
          return r("WAWebProductCatalogGetLatestProduct")({
            productId: d,
            businessOwnerJid: u,
          });
        }),
        f = _[0],
        g = _[1],
        h = p(function () {
          return f ? "NONE" : "PENDING";
        }),
        y = h[0],
        C = h[1],
        b = function () {
          (i(),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: o("WAWebModalManager").closeModalManager,
                okText: r("WAWebFbtCommon")("OK"),
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "product-not-found",
                },
                children: s._(
                  /*BTDS*/ "This product or service has been removed",
                ),
              }),
            ));
        },
        v = function () {
          var e = o("WAWebWidFactory").createWid(u);
          o("WAWebCatalogCollection")
            .CatalogCollection.findProduct({ catalogWid: e, productId: d })
            .then(function () {
              var t = o("WAWebCatalogCollection").CatalogCollection.get(e);
              (g(r("WANullthrows")(t).productCollection.get(d)), C("SUCCESS"));
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").E404,
                function () {
                  (b(), C("ERROR"));
                },
              ),
            )
            .catch(function (e) {
              o("WAWebProductCatalogFetchState").parseErrorState(
                e,
                function (e) {
                  C(e);
                },
              );
            });
        };
      return (
        m(function () {
          f || v();
        }, []),
        f
          ? c.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
              ref: n,
              chat: a.chat,
              product: f,
              onEnd: a.onEnd,
              onBack: a.onBack,
              onProductDetail: a.onProductDetail,
              onProductCatalog: a.onProductCatalog,
              refreshCarousel: !0,
              onProductLinkClick: a.onProductLinkClick,
              onProductMoreInformation: a.onProductMoreInformation,
              onCartClick: a.onCartClick,
            })
          : c.jsxs(
              r("WAWebDrawer.react"),
              {
                ref: n,
                onDrop: a.onBack,
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "catalog-product-deeplink",
                },
                children: [
                  c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                    testid: void 0,
                    title: s._(/*BTDS*/ "Details"),
                    onBack: a.onBack,
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                  }),
                  c.jsx(r("WAWebDrawerBody.react"), {
                    children: c.jsx(
                      r("WAWebProductCatalogFetchStateTopBar.react"),
                      { fetchState: y },
                    ),
                  }),
                ],
              },
              "product-details-drawer",
            )
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
