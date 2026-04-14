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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useContext;
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.cartCountText,
        l = a.cartIconTheme,
        u = a.catalogOwnerJid,
        m = a.onClick,
        p = a.testid,
        _ = p === void 0 ? "menu-bar-cart-link" : p,
        f = d(o("WAWebDrawerContext").DrawerContext);
      return c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
        ref: n,
        testid: void 0,
        tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
        icon: c.jsx(r("WAWebCartIcon.react"), { theme: l }),
        text: i,
        title: s._(/*BTDS*/ "Your cart"),
        onClick: o("WAWebCartLogEvents").getOnCartClickWithLog(
          m,
          u,
          o("WAWebProductCatalogContext").getProductCatalogContext(f),
        ),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
