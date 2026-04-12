__d(
  "WAWebBizNativeAdsDrawer.react",
  [
    "WAWebBizNativeAdsDrawerConfig",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.onBack,
        a = e.rightActionElement,
        i = e.step,
        l = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(i);
      return s.jsxs(r("WAWebDrawer.react"), {
        theme: l.drawerTheme,
        children: [
          s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: n,
            rightActionElement: a,
            title: l.title(),
            type: l.headerType,
          }),
          s.jsx(r("WAWebDrawerBody.react"), { children: t }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
