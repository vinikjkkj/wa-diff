__d(
  "WAWebProductCatalogProductTile.react",
  [
    "WAWebCmd",
    "WAWebDrawerContext",
    "WAWebImageCarousel.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebStateUtils",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = e.fetching,
        n = e.isAvailable,
        a = u(o("WAWebDrawerContext").DrawerContext),
        i = o("useWAWebModelValues").useModelValues(e.product, [
          "productImageCollection",
          "productMsgMediaData",
          "catalogWid",
          "imageCdnUrl",
        ]),
        l = function (t, n) {
          o("WAWebProductCatalogLogEvents").logDetailImageClick({
            product: o("WAWebStateUtils").unproxy(i),
            catalogContext: o(
              "WAWebProductCatalogContext",
            ).getProductCatalogContext(a),
          });
          var e = function () {
              return t;
            },
            r = {
              activeProductImage: n,
              productImageCollection: i.lazyloadProductImageCollection(),
              getZoomNode: e,
              product: i,
            };
          o("WAWebCmd").Cmd.productImageViewerModal(
            r,
            o("WAWebProductCatalogContext").getProductCatalogSessionId(a),
          );
        },
        c = i.lazyloadProductImageCollection().toArray();
      return s.jsx("div", {
        className: "xh8yej3",
        children: s.jsx(r("WAWebImageCarousel.react"), {
          images: c,
          fetching: t,
          onClick: n ? l : null,
          renderFallback: !n,
          fallbackMediaData: i.productMsgMediaData,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
