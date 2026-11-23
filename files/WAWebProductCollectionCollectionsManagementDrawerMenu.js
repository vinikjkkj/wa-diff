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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isReorderEnabled,
        n = e.onReorder,
        o = n === void 0 ? r("WAWebNoop") : n,
        a = e.ref;
      return t
        ? u.jsx(r("WDSMenuBarItem.react"), {
            ref: a,
            testid: "menu-bar-menu",
            icon: r("WDSIconIcMoreVert.react"),
            title: s._(/*BTDS*/ ""),
            menuAlign: "end",
            wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
              children: u.jsx(r("WDSMenuItem.react"), {
                testid: "menu-item",
                onPress: o,
                Icon: r("WDSIconIcSwapVert.react"),
                title: s._(/*BTDS*/ ""),
              }),
            }),
          })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
