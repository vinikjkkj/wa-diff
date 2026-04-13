__d(
  "WAWebProductCollectionCollectionsManagementDrawerMenu",
  [
    "fbt",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebMenuBar.react",
    "WAWebNoop",
    "WAWebReorderRefreshedIcons",
    "WDSIconIcMoreVert.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.isReorderEnabled,
        a = e.onReorder,
        i = e.ref,
        l = a === void 0 ? r("WAWebNoop") : a,
        c;
      if (t[0] !== n || t[1] !== l) {
        if (((c = []), n)) {
          var d, m;
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = u.jsx(r("WAWebReorderRefreshedIcons"), {})),
              (m = s._(/*BTDS*/ "Reorder")),
              (t[3] = d),
              (t[4] = m))
            : ((d = t[3]), (m = t[4]));
          var p;
          (t[5] !== l
            ? ((p = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: l, icon: d, children: m },
                "reorder-button",
              )),
              (t[5] = l),
              (t[6] = p))
            : (p = t[6]),
            c.push(p));
        }
        ((t[0] = n), (t[1] = l), (t[2] = c));
      } else c = t[2];
      if (c.length === 0) return null;
      var _, f;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(r("WDSIconIcMoreVert.react"), {})),
          (f = s._(/*BTDS*/ "Menu")),
          (t[7] = _),
          (t[8] = f))
        : ((_ = t[7]), (f = t[8]));
      var g;
      t[9] !== c
        ? ((g = {
            menu: c,
            type: o("WAWebDropdown.react").MenuType.DropdownMenu,
            flipOnRTL: !0,
            dirX: o("WAWebDropdown.react").DirX.LEFT,
          }),
          (t[9] = c),
          (t[10] = g))
        : (g = t[10]);
      var h;
      return (
        t[11] !== i || t[12] !== g
          ? ((h = u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
              ref: i,
              testid: void 0,
              icon: _,
              title: f,
              dropdownMenu: g,
            })),
            (t[11] = i),
            (t[12] = g),
            (t[13] = h))
          : (h = t[13]),
        h
      );
    }
    l.default = c;
  },
  226,
);
