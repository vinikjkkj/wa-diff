__d(
  "WAWebProductCatalogSelectableProductItem.react",
  [
    "WAWebCheckboxSelectableWrapper.react",
    "WAWebMediaTypes",
    "WAWebNoop",
    "WAWebProductCatalogListItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.active,
        a = e.onClick,
        i = e.product,
        l = e.selections,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["mediaStage"]), (t[0] = u))
        : (u = t[0]);
      var c = o("useWAWebModelValues").useModelValues(e.mediaData, u),
        d = c.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED,
        m = d ? r("WAWebNoop") : a,
        p;
      t[1] !== i.id
        ? ((p = i.id.toString()), (t[1] = i.id), (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== n || t[4] !== d || t[5] !== m || t[6] !== i
        ? ((_ = s.jsx(r("WAWebProductCatalogListItem.react"), {
            product: i,
            onClick: m,
            active: n,
            checkbox: !0,
            disableOutOfStockAppearance: !0,
            isMuted: d,
          })),
          (t[3] = n),
          (t[4] = d),
          (t[5] = m),
          (t[6] = i),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== d || t[9] !== i || t[10] !== l || t[11] !== p || t[12] !== _
          ? ((f = s.jsx(
              r("WAWebCheckboxSelectableWrapper.react"),
              { model: i, selections: l, disabled: d, children: _ },
              p,
            )),
            (t[8] = d),
            (t[9] = i),
            (t[10] = l),
            (t[11] = p),
            (t[12] = _),
            (t[13] = f))
          : (f = t[13]),
        f
      );
    }
    var c = u;
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(3),
        r = (t = e.product.getPreviewImage()) == null ? void 0 : t.mediaData;
      if (!r) return null;
      var a;
      return (
        n[0] !== r || n[1] !== e
          ? ((a = s.jsx(c, babelHelpers.extends({ mediaData: r }, e))),
            (n[0] = r),
            (n[1] = e),
            (n[2] = a))
          : (a = n[2]),
        a
      );
    }
    l.default = d;
  },
  98,
);
