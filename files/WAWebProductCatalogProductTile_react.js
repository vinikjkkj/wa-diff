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
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.fetching,
        a = e.isAvailable,
        i = u(o("WAWebDrawerContext").DrawerContext),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            "productImageCollection",
            "productMsgMediaData",
            "catalogWid",
            "imageCdnUrl",
          ]),
          (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebModelValues").useModelValues(e.product, l),
        d;
      t[1] !== i || t[2] !== c
        ? ((d = function (t, n) {
            o("WAWebProductCatalogLogEvents").logDetailImageClick({
              product: o("WAWebStateUtils").unproxy(c),
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(i),
            });
            var e = function () {
                return t;
              },
              r = {
                activeProductImage: n,
                productImageCollection: c.lazyloadProductImageCollection(),
                getZoomNode: e,
                product: c,
              };
            o("WAWebCmd").Cmd.productImageViewerModal(
              r,
              o("WAWebProductCatalogContext").getProductCatalogSessionId(i),
            );
          }),
          (t[1] = i),
          (t[2] = c),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] !== c
        ? ((p = c.lazyloadProductImageCollection().toArray()),
          (t[4] = c),
          (t[5] = p))
        : (p = t[5]);
      var _ = p,
        f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "xh8yej3" }), (t[6] = f))
        : (f = t[6]);
      var g = a ? m : null,
        h = !a,
        y;
      return (
        t[7] !== n ||
        t[8] !== _ ||
        t[9] !== c.productMsgMediaData ||
        t[10] !== g ||
        t[11] !== h
          ? ((y = s.jsx(
              "div",
              babelHelpers.extends({}, f, {
                children: s.jsx(r("WAWebImageCarousel.react"), {
                  images: _,
                  fetching: n,
                  onClick: g,
                  renderFallback: h,
                  fallbackMediaData: c.productMsgMediaData,
                }),
              }),
            )),
            (t[7] = n),
            (t[8] = _),
            (t[9] = c.productMsgMediaData),
            (t[10] = g),
            (t[11] = h),
            (t[12] = y))
          : (y = t[12]),
        y
      );
    }
    l.default = c;
  },
  98,
);
