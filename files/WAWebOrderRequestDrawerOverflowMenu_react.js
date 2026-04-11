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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(14),
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
        u = l.onDecline,
        d,
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = c.jsx(
            o("WAWebCloseCircleRefreshedIcon.react").CloseCircleRefreshedIcon,
            {},
          )),
          (m = s._(/*BTDS*/ "Decline order")),
          (n[3] = d),
          (n[4] = m))
        : ((d = n[3]), (m = n[4]));
      var p;
      n[5] !== u
        ? ((p = [
            c.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { testid: void 0, action: u, icon: d, children: m },
              "decline-dropdown-item",
            ),
          ]),
          (n[5] = u),
          (n[6] = p))
        : (p = n[6]);
      var _ = p,
        f,
        g;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsx(r("WDSIconIcMoreVert.react"), {})),
          (g = s._(/*BTDS*/ "Menu")),
          (n[7] = f),
          (n[8] = g))
        : ((f = n[7]), (g = n[8]));
      var h;
      n[9] !== _
        ? ((h = {
            dirX: o("WAWebDropdown.react").DirX.LEFT,
            flipOnRTL: !0,
            menu: _,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
          }),
          (n[9] = _),
          (n[10] = h))
        : (h = n[10]);
      var y;
      return (
        n[11] !== i || n[12] !== h
          ? ((y = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
              ref: i,
              testid: void 0,
              icon: f,
              title: g,
              dropdownMenu: h,
            })),
            (n[11] = i),
            (n[12] = h),
            (n[13] = y))
          : (y = n[13]),
        y
      );
    }
    l.default = d;
  },
  226,
);
