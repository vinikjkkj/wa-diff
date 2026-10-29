__d(
  "WAWebOpenCustomerManagerDrawer",
  [
    "WAWebCustomerManagerDrawerLoadable",
    "WAWebCustomerManagerOpenQpl",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      (o("WAWebCustomerManagerOpenQpl").startCustomerManagerOpen(),
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          s.jsx(
            o("WAWebCustomerManagerDrawerLoadable")
              .WAWebCustomerManagerDrawerLoadable,
            {},
          ),
          {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "slide-left",
          },
        ));
    }
    l.openCustomerManagerDrawer = u;
  },
  98,
);
