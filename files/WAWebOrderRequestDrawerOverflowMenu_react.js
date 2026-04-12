__d(
  "WAWebOrderRequestDrawerOverflowMenu.react",
  [
    "fbt",
    "WAWebCloseCircleRefreshedIcon.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebMenuBar.react",
    "WDSIconIcMoreVert.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onDecline,
        l = [
          c.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: i,
              icon: c.jsx(
                o("WAWebCloseCircleRefreshedIcon.react")
                  .CloseCircleRefreshedIcon,
                {},
              ),
              children: s._(/*BTDS*/ "Decline order"),
            },
            "decline-dropdown-item",
          ),
        ];
      return c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
        ref: n,
        testid: void 0,
        icon: c.jsx(r("WDSIconIcMoreVert.react"), {}),
        title: s._(/*BTDS*/ "Menu"),
        dropdownMenu: {
          dirX: o("WAWebDropdown.react").DirX.LEFT,
          flipOnRTL: !0,
          menu: l,
          type: o("WAWebDropdown.react").MenuType.DropdownMenu,
        },
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
