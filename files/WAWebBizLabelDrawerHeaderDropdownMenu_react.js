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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onReorder,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Menu")), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Reorder")), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n
          ? ((l = u.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.LABELS_TAB_HEADER,
              testid: void 0,
              icon: r("WDSIconIcMoreVert.react"),
              title: a,
              wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
                children: u.jsx(r("WDSMenuItem.react"), {
                  Icon: r("WDSIconIcDragHandle.react"),
                  title: i,
                  onPress: n,
                  testid: void 0,
                }),
              }),
              menuAlign: "end",
            })),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    var d = c;
    l.LabelDrawerHeaderDropdownMenu = d;
  },
  226,
);
