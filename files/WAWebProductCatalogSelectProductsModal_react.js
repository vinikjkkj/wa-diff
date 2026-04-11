__d(
  "WAWebProductCatalogSelectProductsModal.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebCatalogCollection",
    "WAWebProductCatalogSendCatalogButton.react",
    "WAWebSelectModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(16),
        a = e.onCancel,
        i = e.onConfirm,
        l = e.onShare,
        d = e.ref,
        m = c(!1),
        p = m[0],
        _ = m[1],
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = []), (n[0] = f))
        : (f = n[0]);
      var g = c(f),
        h = g[0],
        y = g[1],
        C;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t, n, r) {
            _(r.length === 0);
          }),
          (n[1] = C))
        : (C = n[1]);
      var b = C,
        v;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            var e = t;
            (y(e), _(e.length > 0));
          }),
          (n[2] = v))
        : (v = n[2]);
      var S = v,
        R;
      if (n[3] !== l || n[4] !== ((t = h[0]) == null ? void 0 : t.catalogWid)) {
        var L;
        ((R = function () {
          var e,
            t = r("WANullthrows")((e = h[0]) == null ? void 0 : e.catalogWid),
            n = r("WANullthrows")(
              o("WAWebCatalogCollection").CatalogCollection.get(t),
            );
          l(n);
        }),
          (n[3] = l),
          (n[4] = (L = h[0]) == null ? void 0 : L.catalogWid),
          (n[5] = R));
      } else R = n[5];
      var E = R,
        k = !p,
        I;
      n[6] !== E || n[7] !== k
        ? ((I = u.jsx(r("WAWebProductCatalogSendCatalogButton.react"), {
            disabled: k,
            onClick: E,
          })),
          (n[6] = E),
          (n[7] = k),
          (n[8] = I))
        : (I = n[8]);
      var T = I,
        D;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Send products")), (n[9] = D))
        : (D = n[9]);
      var x;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { surface: "unknown", viewName: "select-products" }),
          (n[10] = x))
        : (x = n[10]);
      var $;
      return (
        n[11] !== T || n[12] !== a || n[13] !== i || n[14] !== d
          ? (($ = u.jsx(o("WAWebSelectModal.react").SelectModal, {
              ref: d,
              title: D,
              onCancel: a,
              onConfirm: i,
              listType: o("WAWebSelectModal.react").ListType.ProductSelectModal,
              enableSearchBox: !1,
              customHeader: T,
              onSelectionChanged: b,
              onDataLoaded: S,
              tsNavigationData: x,
            })),
            (n[11] = T),
            (n[12] = a),
            (n[13] = i),
            (n[14] = d),
            (n[15] = $))
          : ($ = n[15]),
        $
      );
    }
    l.default = d;
  },
  226,
);
