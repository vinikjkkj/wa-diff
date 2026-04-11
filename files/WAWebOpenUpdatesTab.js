__d(
  "WAWebOpenUpdatesTab",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBootstrapNewsletter",
    "WAWebCometRouterGating",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarCometRouting",
    "WAWebNavBarTypes",
    "cr:37104",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u =
        n("cr:37104") == null
          ? void 0
          : n("cr:37104").UpdatesDrawerFlowLoadable;
    function c(e, t) {
      o("WAWebBootstrapNewsletter").bootstrapNewsletterBackend();
      var n = o("WAWebNavBarCometRouting").getCometRouteForNavBarItem(
        o("WAWebNavBarTypes").NavBarItems.Updates,
      );
      if (
        n != null &&
        t != null &&
        o("WAWebCometRouterGating").isCometRouterIntegrationEnabled()
      ) {
        t.go(n, { navigationType: "navigation", onNavigationTransitioning: e });
        return;
      }
      u != null &&
        (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "updates_tab" }
            : s.jsx(u, { onBack: o("WAWebDrawerManager").closeDrawerLeft }),
          {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "pop-drawer-fast",
            focusOnUnMount: !0,
          },
        ),
        e == null || e());
    }
    l.openUpdatesTab = c;
  },
  98,
);
