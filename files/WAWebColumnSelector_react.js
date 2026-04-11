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
    "react-compiler-runtime",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = new Set(["actions"]);
    function m(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.onToggleColumn,
        a = e.testid,
        i = e.visibleColumns,
        l = c(null),
        d;
      t[0] !== n || t[1] !== i
        ? ((d = o("WAWebCustomerManagerListViewColumns")
            .DEFAULT_VISIBLE_COLUMNS.filter(p)
            .map(function (e) {
              var t = o(
                "WAWebCustomerManagerListViewColumns",
              ).ALWAYS_VISIBLE_COLUMNS.includes(e);
              return u.jsx(
                r("WDSMenuItem.react"),
                {
                  title: o(
                    "WAWebCustomerManagerListViewColumns",
                  ).getColumnLabel(e),
                  isToggleable: !0,
                  toggled: i.includes(e),
                  onPress: function () {
                    t || n(e);
                  },
                  disabled: t,
                  testid: void 0,
                },
                e,
              );
            })),
          (t[0] = n),
          (t[1] = i),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== d
        ? ((m = u.jsx(r("WDSMenu.react"), { children: d })),
          (t[3] = d),
          (t[4] = m))
        : (m = t[4]);
      var _ = m,
        f;
      t[5] !== _
        ? ((f = { targetRef: l, menu: _, dismissable: !0 }),
          (t[5] = _),
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
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Columns")), (t[11] = R))
        : (R = t[11]);
      var L;
      t[12] !== S || t[13] !== y || t[14] !== a
        ? ((L = u.jsx(r("WDSChip.react"), {
            ref: l,
            Icon: r("WDSIconIcTune.react"),
            label: R,
            showEndDropdownIcon: !0,
            onPress: S,
            "aria-pressed": y,
            testid: void 0,
          })),
          (t[12] = S),
          (t[13] = y),
          (t[14] = a),
          (t[15] = L))
        : (L = t[15]);
      var E;
      return (
        t[16] !== C || t[17] !== L
          ? ((E = u.jsxs(u.Fragment, { children: [L, C] })),
            (t[16] = C),
            (t[17] = L),
            (t[18] = E))
          : (E = t[18]),
        E
      );
    }
    function p(e) {
      return !d.has(e);
    }
    l.default = m;
  },
  226,
);
