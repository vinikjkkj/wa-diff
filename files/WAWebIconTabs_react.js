__d(
  "WAWebIconTabs.react",
  [
    "WANullthrows",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef,
      c = "xehbzi3-B",
      d = {
        selected: { backgroundColor: "x1od0jb8", $$css: !0 },
        tab: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          width: "x13oubkp",
          height: "xc9qbxq",
          boxSizing: "x9f619",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderInlineStartWidth: "x14e42zd",
          borderInlineEndWidth: "x1lun4ml",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderBottomWidth: "xso031l",
          $$css: !0,
        },
        firstTab: {
          borderStartStartRadius: "x1xn7y0n",
          borderEndStartRadius: "x16xm01d",
          borderInlineStartWidth: "xpilrb4",
          ":focus_borderStartStartRadius": "x15mwqqv",
          ":focus_borderEndStartRadius": "xg0ato0",
          $$css: !0,
        },
        lastTab: {
          borderStartEndRadius: "x1uxb8k9",
          borderEndEndRadius: "x1vmbcc8",
          borderInlineEndWidth: "x1lun4ml",
          ":focus_borderStartEndRadius": "x1eql6gh",
          ":focus_borderEndEndRadius": "x1wkbi5u",
          $$css: !0,
        },
        icon: {
          color: "xhslqc4",
          width: "x17z2i9w",
          height: "x17rw0jw",
          $$css: !0,
        },
        firstIconContainer: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        lastIconContainer: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        popupAnim: { animationName: "x122cvgu", $$css: !0 },
        expressionPanelsTab: {
          height: "x10w6t97",
          width: "xo5x3gg",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          $$css: !0,
        },
        expressionsPanelSelectedTab: { backgroundColor: "x1od0jb8", $$css: !0 },
        expressionsPanelSelectedTabIcon: { color: "x14ug900", $$css: !0 },
      };
    function m(e) {
      var t = e.onSelect,
        n = e.popupAtLaunch,
        a = e.refs,
        i = e.selectedIndex,
        l = e.tabConfigs,
        c = e.theme,
        m = u(null),
        p = u([]);
      a &&
        l.forEach(function (e, t) {
          return (r("WANullthrows")(a)[t] = {
            current: r("WANullthrows")(document.body),
          });
        });
      var _ = {
        right: function () {
          var e,
            t,
            n = (e = m.current) != null ? e : l.length - 1,
            r = n === l.length - 1 ? 0 : n + 1;
          (t = p.current[r]) == null || t.focus();
        },
        left: function () {
          var e,
            t,
            n = (e = m.current) != null ? e : 0,
            r = n === 0 ? l.length - 1 : n - 1;
          (t = p.current[r]) == null || t.focus();
        },
      };
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        role: "tablist",
        handlers: _,
        children: s.jsx(o("WAWebFlex.react").FlexRow, {
          children: l.map(function (e, o) {
            var u = e.Icon,
              _ = e.ariaLabel,
              f = e.iconStyle,
              g = e.testid,
              h = i === o,
              y = o === 0,
              C = o === l.length - 1;
            return s.jsx(
              r("WAWebFlexItem.react"),
              {
                align: "stretch",
                children: s.jsx(r("WAWebUnstyledButton.react"), {
                  "aria-label": _,
                  role: "tab",
                  ref: function (t) {
                    return (p.current[o] = t);
                  },
                  tabIndex: (i == null && y) || h ? 0 : -1,
                  testid: void 0,
                  "aria-selected": h,
                  xstyle: [
                    h && d.selected,
                    c === "expression-panels" &&
                      h &&
                      d.expressionsPanelSelectedTab,
                    d.tab,
                    c === "expression-panels" && d.expressionPanelsTab,
                    y && d.firstTab,
                    C && d.lastTab,
                  ],
                  onClick: function () {
                    return t(o);
                  },
                  onFocus: function () {
                    m.current = o;
                  },
                  children: s.jsx(u, {
                    containerRef: a ? a[o] : void 0,
                    iconXstyle: [
                      d.icon,
                      f,
                      h && c === "expression-panels"
                        ? d.expressionsPanelSelectedTabIcon
                        : void 0,
                    ],
                    xstyle: [
                      y && d.firstIconContainer,
                      C && d.lastIconContainer,
                      n === !0 && d.popupAnim,
                    ],
                  }),
                }),
              },
              o,
            );
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
