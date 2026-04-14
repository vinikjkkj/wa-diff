__d(
  "WAWebBizLabelDrawerHeaderDropdownMenu.react",
  [
    "fbt",
    "WAWebTabOrder",
    "WDSIconIcDragHandle.react",
    "WDSIconIcMoreVert.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onReorder;
      return u.jsx(r("WDSMenuBarItem.react"), {
        tabOrder: o("WAWebTabOrder").TAB_ORDER.LABELS_TAB_HEADER,
        testid: void 0,
        icon: r("WDSIconIcMoreVert.react"),
        title: s._(/*BTDS*/ "Menu"),
        wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
          children: u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDragHandle.react"),
            title: s._(/*BTDS*/ "Reorder"),
            onPress: t,
            testid: void 0,
          }),
        }),
        menuAlign: "end",
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = c;
    l.LabelDrawerHeaderDropdownMenu = d;
  },
  226,
);
