__d(
  "WAWebColumnSelector.react",
  [
    "fbt",
    "WAWebCustomerManagerListViewColumns",
    "WDSChip.react",
    "WDSIconIcTune.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = new Set(["actions"]);
    function m(e) {
      var t = e.onToggleColumn,
        n = e.testid,
        a = e.visibleColumns,
        i = c(null),
        l = u.jsx(r("WDSMenu.react"), {
          children: o("WAWebCustomerManagerListViewColumns")
            .DEFAULT_VISIBLE_COLUMNS.filter(function (e) {
              return !d.has(e);
            })
            .map(function (e) {
              var n = o(
                "WAWebCustomerManagerListViewColumns",
              ).ALWAYS_VISIBLE_COLUMNS.includes(e);
              return u.jsx(
                r("WDSMenuItem.react"),
                {
                  title: o(
                    "WAWebCustomerManagerListViewColumns",
                  ).getColumnLabel(e),
                  isToggleable: !0,
                  toggled: a.includes(e),
                  onPress: function () {
                    n || t(e);
                  },
                  disabled: n,
                  testid: void 0,
                },
                e,
              );
            }),
        }),
        m = r("useWDSMenu")({ targetRef: i, menu: l, dismissable: !0 }),
        p = m.closeMenu,
        _ = m.isMenuOpen,
        f = m.menuPortal,
        g = m.openMenu,
        h = function () {
          _ ? p() : g();
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WDSChip.react"), {
            ref: i,
            Icon: r("WDSIconIcTune.react"),
            label: s._(/*BTDS*/ "Columns"),
            showEndDropdownIcon: !0,
            onPress: h,
            "aria-pressed": _,
            testid: void 0,
          }),
          f,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
