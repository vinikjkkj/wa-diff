__d(
  "WAWebCommonCartIconMenuBarItem.react",
  [
    "fbt",
    "WAWebCartIcon.react",
    "WAWebCartLogEvents",
    "WAWebDrawerContext",
    "WAWebMenuBar.react",
    "WAWebProductCatalogContext",
    "WAWebTabOrder",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useContext;
    function m(t) {
      var n = o("react-compiler-runtime").c(16),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.cartCountText,
        m = l.cartIconTheme,
        p = l.catalogOwnerJid,
        _ = l.onClick,
        f = l.testid,
        g = f === void 0 ? "menu-bar-cart-link" : f,
        h = d(o("WAWebDrawerContext").DrawerContext),
        y;
      n[3] !== m
        ? ((y = c.jsx(r("WAWebCartIcon.react"), { theme: m })),
          (n[3] = m),
          (n[4] = y))
        : (y = n[4]);
      var C;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Your cart")), (n[5] = C))
        : (C = n[5]);
      var b;
      n[6] !== p || n[7] !== h || n[8] !== _
        ? ((b = o("WAWebCartLogEvents").getOnCartClickWithLog(
            _,
            p,
            o("WAWebProductCatalogContext").getProductCatalogContext(h),
          )),
          (n[6] = p),
          (n[7] = h),
          (n[8] = _),
          (n[9] = b))
        : (b = n[9]);
      var v;
      return (
        n[10] !== u || n[11] !== i || n[12] !== y || n[13] !== b || n[14] !== g
          ? ((v = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
              ref: i,
              testid: void 0,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
              icon: y,
              text: u,
              title: C,
              onClick: b,
            })),
            (n[10] = u),
            (n[11] = i),
            (n[12] = y),
            (n[13] = b),
            (n[14] = g),
            (n[15] = v))
          : (v = n[15]),
        v
      );
    }
    l.default = m;
  },
  226,
);
