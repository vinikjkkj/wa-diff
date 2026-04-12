__d(
  "WAWebCustomerManagerLastMessageFilter.react",
  [
    "fbt",
    "WDSChip.react",
    "WDSIconIcCalendarMonth.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = [
        {
          value: null,
          label: function () {
            return s._(/*BTDS*/ "All time");
          },
          testid: "last-message-range-all-time",
        },
        {
          value: "last_7_days",
          label: function () {
            return s._(/*BTDS*/ "Last 7 days");
          },
          testid: "last-message-range-7-days",
        },
        {
          value: "last_14_days",
          label: function () {
            return s._(/*BTDS*/ "Last 14 days");
          },
          testid: "last-message-range-14-days",
        },
        {
          value: "last_30_days",
          label: function () {
            return s._(/*BTDS*/ "Last 30 days");
          },
          testid: "last-message-range-30-days",
        },
        {
          value: "last_3_months",
          label: function () {
            return s._(/*BTDS*/ "Last 3 months");
          },
          testid: "last-message-range-3-months",
        },
        {
          value: "last_year",
          label: function () {
            return s._(/*BTDS*/ "Last year");
          },
          testid: "last-message-range-last-year",
        },
      ];
    function _(e) {
      var t = p.find(function (t) {
        return t.value === e;
      });
      return t != null ? t.label() : p[0].label();
    }
    function f(e) {
      var t = e.onSelectRange,
        n = e.selectedRange,
        o = e.testid,
        a = m(null),
        i = u.jsx(r("WDSMenu.react"), {
          children: p.map(function (e) {
            var o;
            return u.jsx(
              r("WDSMenuItem.react"),
              {
                isToggleable: !0,
                onPress: function () {
                  return t(e.value);
                },
                testid: void 0,
                title: e.label(),
                toggled: e.value === n,
              },
              (o = e.value) != null ? o : "all",
            );
          }),
        }),
        l = r("useWDSMenu")({ targetRef: a, menu: i, dismissable: !0 }),
        s = l.closeMenu,
        c = l.isMenuOpen,
        f = l.menuPortal,
        g = l.openMenu,
        h = d(
          function () {
            c ? s() : g();
          },
          [s, c, g],
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WDSChip.react"), {
            Icon: r("WDSIconIcCalendarMonth.react"),
            "aria-pressed": c,
            label: _(n),
            onPress: h,
            ref: a,
            showEndDropdownIcon: !0,
            testid: void 0,
          }),
          f,
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
