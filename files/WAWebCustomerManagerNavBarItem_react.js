__d(
  "WAWebCustomerManagerNavBarItem.react",
  [
    "fbt",
    "WAWebCustomerManagerDrawer.react",
    "WAWebCustomerManagerGating",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebMobilePlatforms",
    "WAWebNavBarItem.react",
    "WAWebNavBarTypes",
    "WDSIconIcManageAccounts.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        n = e.updateActiveNavBarItem,
        a = o("WAWebMobilePlatforms").isSMB(),
        i = function () {
          t !== o("WAWebNavBarTypes").NavBarItems.CustomerManager &&
            (n(o("WAWebNavBarTypes").NavBarItems.CustomerManager),
            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
              u.jsx(r("WAWebCustomerManagerDrawer.react"), {}),
              {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                transition: "slide-left",
              },
            ));
        },
        l = u.jsx(r("WDSIconIcManageAccounts.react"), {}),
        c = s._(/*BTDS*/ "Customer Manager"),
        d = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: l,
          title: c,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.CustomerManager,
          onClick: i,
        });
      return a && o("WAWebCustomerManagerGating").customerManagerEnabled()
        ? d
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
