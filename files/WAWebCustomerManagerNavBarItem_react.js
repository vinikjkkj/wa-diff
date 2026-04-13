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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = o("WAWebMobilePlatforms").isSMB(),
        l;
      t[0] !== n || t[1] !== a
        ? ((l = function () {
            n !== o("WAWebNavBarTypes").NavBarItems.CustomerManager &&
              (a(o("WAWebNavBarTypes").NavBarItems.CustomerManager),
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                u.jsx(r("WAWebCustomerManagerDrawer.react"), {}),
                {
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  transition: "slide-left",
                },
              ));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("WDSIconIcManageAccounts.react"), {})), (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Customer Manager")), (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f = n === o("WAWebNavBarTypes").NavBarItems.CustomerManager,
        g;
      if (t[5] !== c || t[6] !== f) {
        var h = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: m,
          title: _,
          testid: void 0,
          isActive: f,
          onClick: c,
        });
        ((g =
          i && o("WAWebCustomerManagerGating").customerManagerEnabled()
            ? h
            : null),
          (t[5] = c),
          (t[6] = f),
          (t[7] = g));
      } else g = t[7];
      return g;
    }
    l.default = c;
  },
  226,
);
