__d(
  "WAWebOrderCatalogFormProduct",
  [
    "fbt",
    "WAWebCommonQuantityControls.react",
    "WAWebProductCatalogListItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onProductSelectChange,
        a = e.product,
        i = e.productsSelection,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = Number(i.getVal(a)) || 0), (t[0] = a), (t[1] = i), (t[2] = l))
        : (l = t[2]);
      var d = l,
        m = c(!1),
        p = m[0],
        _ = m[1],
        f,
        g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            return _(!0);
          }),
          (g = function () {
            return _(!1);
          }),
          (t[3] = f),
          (t[4] = g))
        : ((f = t[3]), (g = t[4]));
      var h;
      t[5] !== p || t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== d
        ? ((h =
            (p || i.isSelected(a)) &&
            u.jsx(r("WAWebCommonQuantityControls.react"), {
              quantity: d,
              quantityTitle: s._(/*BTDS*/ "Items in order"),
              isCollapsed: !p,
              onAddOneClick: function () {
                return n(a, d + 1);
              },
              onRemoveOneClick: function () {
                return n(a, d - 1);
              },
            })),
          (t[5] = p),
          (t[6] = n),
          (t[7] = a),
          (t[8] = i),
          (t[9] = d),
          (t[10] = h))
        : (h = t[10]);
      var y;
      return (
        t[11] !== a || t[12] !== h
          ? ((y = u.jsx("div", {
              onMouseEnter: f,
              onMouseLeave: g,
              children: u.jsx(r("WAWebProductCatalogListItem.react"), {
                product: a,
                detail: h,
                managedFocus: !0,
                theme: "product-add-to-order",
              }),
            })),
            (t[11] = a),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.default = d;
  },
  226,
);
