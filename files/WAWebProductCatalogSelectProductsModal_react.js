__d(
  "WAWebProductCatalogSelectProductsModal.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebCatalogCollection",
    "WAWebProductCatalogSendCatalogButton.react",
    "WAWebSelectModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.onCancel,
        n = e.onConfirm,
        a = e.onShare,
        i = e.ref,
        l = c(!1),
        d = l[0],
        m = l[1],
        p = c([]),
        _ = p[0],
        f = p[1],
        g = function (t, n, r) {
          m(r.length === 0);
        },
        h = function (t) {
          var e = t;
          (f(e), m(e.length > 0));
        },
        y = function () {
          var e,
            t = r("WANullthrows")((e = _[0]) == null ? void 0 : e.catalogWid),
            n = r("WANullthrows")(
              o("WAWebCatalogCollection").CatalogCollection.get(t),
            );
          a(n);
        },
        C = u.jsx(r("WAWebProductCatalogSendCatalogButton.react"), {
          disabled: !d,
          onClick: y,
        });
      return u.jsx(o("WAWebSelectModal.react").SelectModal, {
        ref: i,
        title: s._(/*BTDS*/ "Send products"),
        onCancel: t,
        onConfirm: n,
        listType: o("WAWebSelectModal.react").ListType.ProductSelectModal,
        enableSearchBox: !1,
        customHeader: C,
        onSelectionChanged: g,
        onDataLoaded: h,
        tsNavigationData: { surface: "unknown", viewName: "select-products" },
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
