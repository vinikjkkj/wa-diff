__d(
  "WAWebOpenCustomerManagerDrawer",
  [
    "WAWebCustomerManagerDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
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
      );
    }
    l.openCustomerManagerDrawer = u;
  },
  98,
);
