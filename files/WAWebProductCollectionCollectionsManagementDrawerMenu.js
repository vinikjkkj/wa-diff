__d(
  "WAWebProductCollectionCollectionsManagementDrawerMenu",
  [
    "fbt",
    "WAWebNoop",
    "WDSIconIcMoreVert.react",
    "WDSIconIcSwapVert.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.isReorderEnabled,
        a = e.onReorder,
        i = e.ref,
        l = a === void 0 ? r("WAWebNoop") : a;
      if (!n) return null;
      var c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Menu")), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Reorder")), (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== l
        ? ((m = u.jsx(r("WDSMenu.react"), {
            children: u.jsx(r("WDSMenuItem.react"), {
              testid: "menu-item",
              onPress: l,
              Icon: r("WDSIconIcSwapVert.react"),
              title: d,
            }),
          })),
          (t[2] = l),
          (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== i || t[5] !== m
          ? ((p = u.jsx(r("WDSMenuBarItem.react"), {
              ref: i,
              testid: "menu-bar-menu",
              icon: r("WDSIconIcMoreVert.react"),
              title: c,
              menuAlign: "end",
              wdsMenuToRender: m,
            })),
            (t[4] = i),
            (t[5] = m),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    l.default = c;
  },
  226,
);
