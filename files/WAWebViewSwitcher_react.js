__d(
  "WAWebViewSwitcher.react",
  [
    "WDSChip.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t,
        n = e.currentValue,
        o = e.items,
        a = e.onValueChange,
        i = e.testid,
        l = u(null),
        c = s.jsx(r("WDSMenu.react"), {
          children: o.map(function (e) {
            return s.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: e.Icon,
                title: e.label(),
                isToggleable: !0,
                toggled: n === e.value,
                onPress: function () {
                  return a(e.value);
                },
                testid: void 0,
              },
              e.value,
            );
          }),
        }),
        d = r("useWDSMenu")({ targetRef: l, menu: c }),
        m = d.closeMenu,
        p = d.isMenuOpen,
        _ = d.menuPortal,
        f = d.openMenu,
        g = function () {
          p ? m() : f();
        },
        h =
          (t = o.find(function (e) {
            return e.value === n;
          })) != null
            ? t
            : o[0],
        y = h.label(),
        C = h.Icon;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WDSChip.react"), {
            ref: l,
            Icon: C,
            label: y,
            showEndDropdownIcon: !0,
            onPress: g,
            "aria-pressed": p,
            testid: void 0,
          }),
          _,
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
