__d(
  "WAWebOrderCatalogFormProduct",
  [
    "fbt",
    "WAWebCommonQuantityControls.react",
    "WAWebProductCatalogListItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.onProductSelectChange,
        n = e.product,
        o = e.productsSelection,
        a = Number(o.getVal(n)) || 0,
        i = c(!1),
        l = i[0],
        d = i[1];
      return u.jsx("div", {
        onMouseEnter: function () {
          return d(!0);
        },
        onMouseLeave: function () {
          return d(!1);
        },
        children: u.jsx(r("WAWebProductCatalogListItem.react"), {
          product: n,
          detail:
            (l || o.isSelected(n)) &&
            u.jsx(r("WAWebCommonQuantityControls.react"), {
              quantity: a,
              quantityTitle: s._(/*BTDS*/ "Items in order"),
              isCollapsed: !l,
              onAddOneClick: function () {
                return t(n, a + 1);
              },
              onRemoveOneClick: function () {
                return t(n, a - 1);
              },
            }),
          managedFocus: !0,
          theme: "product-add-to-order",
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
