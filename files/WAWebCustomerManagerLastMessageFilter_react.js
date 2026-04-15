__d(
  "WAWebCustomerManagerLastMessageFilter.react",
  [
    "fbt",
    "WDSChip.react",
    "WDSIconIcCalendarMonth.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(21),
        n = e.onSelectRange,
        a = e.selectedRange,
        i = e.testid,
        l = m(null),
        s;
      t[0] !== n || t[1] !== a
        ? ((s = p.map(function (e) {
            var t;
            return u.jsx(
              r("WDSMenuItem.react"),
              {
                isToggleable: !0,
                onPress: function () {
                  return n(e.value);
                },
                testid: void 0,
                title: e.label(),
                toggled: e.value === a,
              },
              (t = e.value) != null ? t : "all",
            );
          })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = s))
        : (s = t[2]);
      var c;
      t[3] !== s
        ? ((c = u.jsx(r("WDSMenu.react"), { children: s })),
          (t[3] = s),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        f;
      t[5] !== d
        ? ((f = { targetRef: l, menu: d, dismissable: !0 }),
          (t[5] = d),
          (t[6] = f))
        : (f = t[6]);
      var g = r("useWDSMenu")(f),
        h = g.closeMenu,
        y = g.isMenuOpen,
        C = g.menuPortal,
        b = g.openMenu,
        v;
      t[7] !== h || t[8] !== y || t[9] !== b
        ? ((v = function () {
            y ? h() : b();
          }),
          (t[7] = h),
          (t[8] = y),
          (t[9] = b),
          (t[10] = v))
        : (v = t[10]);
      var S = v,
        R;
      t[11] !== a ? ((R = _(a)), (t[11] = a), (t[12] = R)) : (R = t[12]);
      var L = i != null ? i : "customer-manager-last-message-filter",
        E;
      t[13] !== S || t[14] !== y || t[15] !== R || t[16] !== L
        ? ((E = u.jsx(r("WDSChip.react"), {
            Icon: r("WDSIconIcCalendarMonth.react"),
            "aria-pressed": y,
            label: R,
            onPress: S,
            ref: l,
            showEndDropdownIcon: !0,
            testid: void 0,
          })),
          (t[13] = S),
          (t[14] = y),
          (t[15] = R),
          (t[16] = L),
          (t[17] = E))
        : (E = t[17]);
      var k;
      return (
        t[18] !== C || t[19] !== E
          ? ((k = u.jsxs(u.Fragment, { children: [E, C] })),
            (t[18] = C),
            (t[19] = E),
            (t[20] = k))
          : (k = t[20]),
        k
      );
    }
    l.default = f;
  },
  226,
);
