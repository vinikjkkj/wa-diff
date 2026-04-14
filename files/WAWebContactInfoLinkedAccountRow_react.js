__d(
  "WAWebContactInfoLinkedAccountRow.react",
  [
    "WAWebBusinessLogEvents",
    "WAWebCellFrame.react",
    "WAWebDrawerContext",
    "WAWebExternalLink.react",
    "WAWebProductCatalogContext",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = { button: { width: "xh8yej3", $$css: !0 } };
    function p(e) {
      var t = e.Icon,
        n = e.hasCoverPhoto,
        a = e.href,
        i = e.linkedAccountType,
        l = e.onClick,
        u = e.rowTheme,
        p = e.secondary,
        _ = e.text,
        f = c(o("WAWebDrawerContext").DrawerContext),
        g = o("WAWebProductCatalogContext").getProductCatalogSessionId(f);
      d(
        function () {
          o("WAWebBusinessLogEvents").logLinkedAccountImpression(g, i, n);
        },
        [g, i, n],
      );
      var h = function (t) {
        a !== void 0 &&
          (o("WAWebExternalLink.react").openExternalLink(a), l == null || l());
      };
      return s.jsx(r("WAWebUnstyledButton.react"), {
        testid: void 0,
        onClick: h,
        disabled: a === void 0,
        xstyle: m.button,
        children: s.jsx(r("WAWebCellFrame.react"), {
          image: t,
          primary: _,
          secondary: p,
          theme: u,
          idle: a === void 0,
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
